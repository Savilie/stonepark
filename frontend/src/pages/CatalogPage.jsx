import { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router";
import Logo from "../assets/logo";
import { Link } from "react-scroll";
import axios from "axios";
import CategoryButton from "../assets/CategoryButton";
import FixedCallButton from "../assets/FixedCallButton/FixedCallButton";
import ProductItem from "../assets/ProductItem";
import ModalBG from "../assets/ModalBG";
import ModalWindow from "../assets/ModalWindow";
import { SwiperSlide, Swiper } from "swiper/react";
import ModalItemCard from "../assets/ModalItemCard";
import { Autoplay } from 'swiper/modules';
import 'swiper/css/autoplay';

export default function CatalogPage() {
  const [viewPortWidth, setViewPortWidth] = useState([window.innerWidth])
  const [categories, setCategories] = useState([]);
  const [modalStatus, setModalStatus] = useState(false);
  const [modalType, setModalType] = useState(false)
  //false = bid, true = itemCard
  const [currentItemData, setCurrentItemData] = useState({})
  function changeModalStatus(status, type, item) {
    setModalStatus(status);
    setModalType(type);
    setCurrentItemData(item);
  }

  useEffect(() => {
    axios
      .get("https://palitrakamnya.ru/api/categories/")
      .then(function (response) {
        setCategories(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://palitrakamnya.ru/api/products")
      .then(function (response) {
        setProducts(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const [currentCategory, setCurrentCategory] = useState(0);

  return (
    <div className=" bg-[#EDE5DB] font-['LTSuperior-Regular'] h-fit relative">
      {modalStatus ? (
        <div className="relative h-full flex w-full z-1000">
          <div onClick={() => changeModalStatus(false, false)}>
            <ModalBG />
          </div>
          {
            modalType ? <ModalItemCard data={currentItemData} onClick={() => changeModalStatus(false, false)} /> : <ModalWindow />
          }
        </div>
      ) : null}
      <div
        className="fixed bottom-[35px] right-[30px] h-[60px] w-[60px] z-100"z
        onClick={() => changeModalStatus(true, false)}
      >
        <FixedCallButton />
      </div>
      <div className="px-[12vw] py-[3vh] max-lg:px-8">
        <header className="flex justify-between items-center h-[10vh]">
          <Logo className="max-lg:w-fit" color="#92877A" />
          <div className=" text-[#171614] backdrop-blur-sm flex justify-between w-[15vw] h-[80%] max-lg:w-auto max-lg:backdrop-blur-none max-lg:items-center max-lg:bg-white/0 text-8 rounded-md">
            <div className="flex flex-col justify-between text-sm">
              <a className="flex items-center cursor-pointer" onClick={() => 
                {
                  navigator.clipboard.writeText('+7 (989) 421-18-18')
                  alert('Скпировано')
                }}>
                <svg
                  className=" max-lg:hidden size-4 mb-1 mr-3"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.23 12.26L13.69 11.97C13.3914 11.9349 13.0886 11.968 12.8046 12.0667C12.5206 12.1654 12.2626 12.3273 12.05 12.54L10.21 14.38C7.37144 12.9359 5.0641 10.6286 3.62004 7.79L5.47004 5.94C5.90004 5.51 6.11004 4.91 6.04004 4.3L5.75004 1.78C5.69356 1.29209 5.45951 0.842024 5.0925 0.515594C4.7255 0.189164 4.25121 0.00919825 3.76004 0.010001H2.03004C0.900041 0.010001 -0.0399593 0.950001 0.0300407 2.08C0.560041 10.62 7.39004 17.44 15.92 17.97C17.05 18.04 17.99 17.1 17.99 15.97V14.24C18 13.23 17.24 12.38 16.23 12.26Z"
                    fill="#171614"
                  />
                </svg>
                <span>+7 (989) 421-18-18</span>
              </a>
              <a className="max-lg:hidden" href="">Село Чалтырь ул. Ростовская 53
              </a>
            </div>
          </div>
        </header>
        <div className="grid grid-cols-6 gap-x-4 max-lg:flex overflow-clip">
          <RouterLink
            to={"/"}
            className="text-[#EDE5DB] py-0.5 rounded-lg bg-[#7BA35A] mt-8 text-center shadow-md max-lg:p-2"
          >
            Вернуться на главную
          </RouterLink>
        </div>
        <div className="flex flex-wrap mt-4 pb-2 gap-2">
          {categories.map((el) => {
            let colors = currentCategory == el.id
              ? "text-[#EDE5DB] bg-[#7BA35A] py-1 px-3 rounded-lg text-center shadow-md cursor-pointer"
              : "text-[#7C6845] bg-[#FAF3EB] py-1 px-3 rounded-lg text-center shadow-md cursor-pointer";
            
            return (
              <div
                className={colors}
                key={el.id}
                onClick={() => {
                  if (currentCategory !== el.id) {
                    setCurrentCategory(el.id);
                  } else {
                    setCurrentCategory(0);
                  }
                }}
              >
                <CategoryButton key={el.id} name={el.name} />
              </div>
            );
          })}
        </div>
        <div>
          {categories.map((category) => {
            if (currentCategory === 0 || category.id === currentCategory) {
              return (
                <div key={category.id}>
                  <h1 className="my-7 w-fit text-4xl bg-gradient-to-r from-black from-0%  to-[#5d5c52] to-100% text-transparent bg-clip-text font-['LTSuperior-Bold']">
                    {category.name}
                  </h1>
                  <div className=" grid grid-cols-4 gap-x-4 max-lg:flex max-lg:gap-y-4 flex-col">
                    {products.map((el) => {
                      if (el.category == category.id) {
                        return (
                            <ProductItem data={el} key={el.id} onClick={() => changeModalStatus(true, true, {el})}/>
                        )
                      }
                    })}
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
      <footer className=" bg-[#171614] px-[12vw] py-8 text-[#EDE5DB] ">
        <div className=" flex justify-between h-30 max-lg:h-fit">
          <div className=" flex flex-col justify-between w-[60%] max-lg:w-full">
            <p>
              Данный интернет-сайт носит исключительно информационный характер и
              не является публичной офертой, определяемой положением Статьи 437
              (п.2) Гражданского Кодекса РФ. Цены, указанные на сайте,
              не являются публичной офертой.
            </p>
            <p className=" max-lg:mt-10">
              Актуальные цены узнавайте по номеру (whatsApp): +7 (989) 421-18-18
            </p>
          </div>
        </div>
        <div className=" flex justify-between mt-20">
          <p>
            © 2025 Палитра камня,
            <br /> все права защищены
          </p>
          <RouterLink to="/">
            <svg
              width="80"
              height="80"
              viewBox="0 0 89 78"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_54_238)">
                <path
                  d="M14.2648 46.094C14.1516 45.6836 13.9816 43.1869 13.5568 43.1439C13.132 43.075 12.2824 42.7592 11.7159 43.1439C11.1495 43.529 9.59185 45.4526 8.74224 46.6072C7.89258 47.7614 3.78601 51.2243 2.51156 51.9937C1.23711 52.7632 1.09551 60.9716 0.387477 62.3824C-0.320551 63.7932 0.104252 64.2514 0.387462 66.4316C0.614031 68.1759 1.80353 74.0538 2.51156 74.4385C6.61812 76.4906 9.65115 74.5131 9.87508 74.3104C10.1583 74.0538 11.6255 73.3533 12.0503 72.8404C12.4751 72.3272 12.2824 70.0777 12.8488 69.1801C13.4152 68.2821 13.5568 63.6651 13.5568 61.9977C13.5568 60.3303 13.84 58.4067 14.4065 56.2261C14.9729 54.0458 14.548 50.711 14.4065 50.1982C14.2648 49.685 14.4065 46.6068 14.2648 46.094Z"
                  fill="#EDE5DB"
                />
                <path
                  d="M0.84242 49.982C0.280812 49.6673 0.234011 47.489 0.280812 46.4392C0.292466 46.0458 0.280804 41.7155 0.140402 40.9283C0 40.1412 0 35.6796 0 32.6617C0 29.6437 0.561608 26.6258 0.561608 26.1009C0.561608 25.576 1.54442 22.9517 1.54442 22.2956C1.54442 21.6396 1.26362 20.4586 0.982814 19.5401C0.70201 18.6216 1.54442 15.9973 1.54442 15.7348C1.54442 15.4724 2.25189 15.0122 2.66763 15.0788C3.96846 15.2872 5.48027 16.7766 6.4585 17.1782C7.27195 17.5122 7.72211 18.2279 9.40691 18.3592C11.0918 18.4904 12.917 19.2777 13.7594 19.4089C14.6018 19.5401 14.4614 20.3274 14.321 20.721C14.1806 21.1147 13.619 26.2321 14.0402 27.0194C14.4614 27.8067 14.8826 33.3177 14.6018 34.8923C14.321 36.4669 12.215 40.9283 11.0918 42.2404C9.96851 43.5524 8.84531 44.0773 8.00289 45.7832C7.16051 47.489 4.91407 49.0637 3.65044 49.982C2.38683 50.9006 1.54443 50.3757 0.84242 49.982Z"
                  fill="#EDE5DB"
                />
                <path
                  d="M0.844937 7.47775C-0.281645 8.4936 0.281646 10.2525 0.704113 11.005C1.54906 11.9926 3.5206 14.1936 4.64718 15.0966C6.05542 16.2253 8.73104 16.7897 10.8434 17.0718C12.9557 17.354 13.0965 17.6362 15.2089 18.0594C17.3212 18.4827 19.2928 18.6238 21.4051 18.4827C23.5174 18.3416 27.3197 18.7649 29.0095 18.906C30.6994 19.0471 36.7548 21.1634 39.4303 21.1634C42.1062 21.1634 44.2182 22.1511 45.6265 22.4333C47.0347 22.7154 48.1615 21.1634 48.5838 20.5991C49.0065 20.0347 49.288 17.4951 49.4289 16.0842C49.5698 14.6733 48.4429 10.1585 48.8656 7.75994C49.288 5.36139 48.5838 1.4109 47.1756 0.705448C45.7674 0 38.5856 0.282179 37.7406 0.282179C36.8956 0.282179 34.9241 1.26981 33.375 0.987627C31.826 0.705448 28.4462 0 26.8972 0C25.3482 0 15.6314 0.705448 13.9415 0.987627C12.2516 1.26981 9.85763 2.82179 8.73104 3.38615C7.60448 3.95049 6.47789 4.37376 4.64718 5.22031C2.81649 6.06685 2.25317 6.20793 0.844937 7.47775Z"
                  fill="#EDE5DB"
                />
                <path
                  d="M35.2295 30.8632C35.3435 30.1558 35.9421 28.0842 35.2295 26.7713C34.9445 26.2086 35.0015 24.2237 35.2295 23.7092C35.5145 23.0662 34.5169 22.5839 37.7946 22.2624C41.0726 21.9409 46.3457 24.2719 46.7733 24.3523C47.2009 24.4327 48.9057 25.2921 49.3333 25.5333C49.652 25.713 50.9061 28.6125 50.3361 29.4163C49.7661 30.2202 48.4833 34.3196 48.4833 34.6411C48.4833 34.9627 47.7883 40.4218 45.7931 41.6272C43.7979 42.833 42.9664 42.0402 41.5503 43.278C38.3371 46.0871 35.7445 44.7913 35.4613 41.9026C35.4048 41.3257 35.2295 36.2411 35.2295 35.4373C35.2295 34.6335 35.087 31.7474 35.2295 30.8632Z"
                  fill="#EDE5DB"
                />
                <path
                  d="M33.8726 60.104C34.6526 58.6638 35.6833 54.9428 36.1012 53.2622C36.2405 52.1819 36.519 49.7695 36.519 48.7612C36.519 47.5008 38.0511 45.7004 39.0261 45.7004C40.0011 45.7004 40.732 45.0051 42.1708 43.75C43.5131 42.5796 44.2733 43.3596 45.7121 43.3596C47.6368 43.3596 50.0302 49.4813 49.1942 51.2817C48.3586 53.0825 49.1942 66.4058 49.1942 68.0261C49.1942 69.6467 49.8908 72.8873 46.6871 74.508C43.4833 76.1283 39.0261 73.9676 38.0511 73.6078C37.0762 73.2475 36.1012 68.9263 34.7083 66.4058C33.3154 63.8853 32.8975 61.9048 33.8726 60.104Z"
                  fill="#EDE5DB"
                />
                <path
                  d="M50.133 45.1178C50.133 46.1336 51.5412 49.0212 52.6677 49.915C52.9495 50.1429 56.4701 54.7118 58.7229 56.687C60.9762 58.6623 62.9477 57.9569 64.9195 56.4048C66.891 54.8531 67.8855 49.1361 68.7486 46.599C69.1242 45.4946 67.9213 43.7416 67.3909 42.4541C66.437 40.1393 64.9896 37.7503 64.3559 36.9345C63.3704 35.6647 60.7954 29.5318 60.6545 28.8263C60.5136 28.1208 57.5965 25.6474 57.5965 25.6474C56.0474 24.3776 51.2745 24.8724 51.4003 26.5654V34.8182C51.4003 35.9469 49.3132 38.3875 48.7247 40.7441C48.189 42.8889 50.133 44.5126 50.133 45.1178Z"
                  fill="#EDE5DB"
                />
                <path
                  d="M55.3127 20.458C54.8622 19.1035 56.1107 12.8861 57.0028 11.5693C58.1292 8.46535 58.6925 8.04204 58.6925 5.64352C58.6925 4.03706 59.8927 2.77624 61.2358 1.88396C61.8977 1.44401 63.2393 0.99618 63.4898 0.879128C65.0325 0.158012 65.3682 0.125548 65.8689 0.437651C66.6333 0.818171 67.4798 2.60108 67.1212 3.39125C66.7768 4.15014 66.7456 7.28495 66.37 10.4251C66.7456 14.1932 67.3988 17.1128 68.5501 18.4827C70.3528 20.6273 70.6158 24.3614 70.5216 25.9604C67.4237 35.5546 66.0154 33.0149 64.6072 32.5917C63.199 32.1684 61.2275 27.0892 60.3825 25.9604C59.5375 24.8317 55.8763 22.151 55.3127 20.458Z"
                  fill="#EDE5DB"
                />
                <path
                  d="M68.2318 2.9014C68.682 0.871825 71.8899 0.646314 73.4379 0.787257C76.7208 0.787257 83.7936 0.928203 85.8197 1.49199C88.3525 2.19672 86.2416 10.5123 85.3978 11.9217C84.5535 13.3312 79.6288 16.8547 77.5183 18.4051C75.4075 19.9554 72.3122 20.8011 71.1865 20.0964C70.0608 19.3917 68.2318 14.5996 67.6689 12.3446C67.1061 10.0895 67.6689 5.43835 68.2318 2.9014Z"
                  fill="#EDE5DB"
                />
                <path
                  d="M66.3055 56.8982C64.2768 59.7088 64.2335 59.5362 65.9288 61.2315C66.6333 61.8823 68.4514 64.0056 69.2968 64.786C69.8054 65.2559 71.4397 67.9806 74.217 70.4634C75.2873 71.4201 77.3978 72.6429 78.4556 73.1131C83.5141 75.3623 82.1194 75.7154 86.346 74.5446C89.0981 73.782 88.8822 74.2319 88.8822 72.3328C88.8822 69.9735 87.1914 66.9979 86.6278 63.6152C86.0642 60.2322 86.8116 62.5511 79.868 54.4493C73.0868 46.5362 76.289 49.5507 73.8402 47.4783C72.9112 46.6915 70.8263 45.2803 70.4496 46.5362C70.2036 47.3573 69.9926 48.5804 69.5078 49.5504C68.8801 50.8066 68.8417 53.3855 66.3055 56.8982Z"
                  fill="#EDE5DB"
                />
              </g>
              <defs>
                <clipPath id="clip0_54_238">
                  <rect width="89" height="78" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </RouterLink>
        </div>
      </footer>
    </div>
  );
}
