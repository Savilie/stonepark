import CallButton from "../assets/CallButton";
import FixedCallButton from "../assets/FixedCallButton";
import Logo from "../assets/logo";
import { Link } from "react-scroll";
import SectionTransition from "../assets/SectionTransition";

export default function HomePage() {
  return (
    <div id="cont" className="scroll-smooth">
      <FixedCallButton />
      <section className="px-[12vw] py-[3vh] relative h-[100vh] bg-[url(src/assets/bg.png)] bg-[100%_auto] bg-no-repeat">
        <header className="flex absolute justify-between items-center w-[76vw]">
          <Logo />
          <div className=" bg-gray-500/30 text-[#EDE5DB] backdrop-blur-sm flex justify-between py-[1vh] px-[1vw] w-[30vw] text-[1vw] rounded-md">
            <div className=" flex flex-col">
              <a href="" className=" underline">
                Отзывы
              </a>
              <a href="" className=" underline">
                Доставка
              </a>
              <a href="" className=" underline">
                Контакты
              </a>
            </div>
            <div className="flex flex-col justify-between w-[70%]">
              <a className="flex items-center" href="">
                <svg
                  width="1.5vw"
                  height="2.5vh"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.23 12.26L13.69 11.97C13.3914 11.9349 13.0886 11.968 12.8046 12.0667C12.5206 12.1654 12.2626 12.3273 12.05 12.54L10.21 14.38C7.37144 12.9359 5.0641 10.6286 3.62004 7.79L5.47004 5.94C5.90004 5.51 6.11004 4.91 6.04004 4.3L5.75004 1.78C5.69356 1.29209 5.45951 0.842024 5.0925 0.515594C4.7255 0.189164 4.25121 0.00919825 3.76004 0.010001H2.03004C0.900041 0.010001 -0.0399593 0.950001 0.0300407 2.08C0.560041 10.62 7.39004 17.44 15.92 17.97C17.05 18.04 17.99 17.1 17.99 15.97V14.24C18 13.23 17.24 12.38 16.23 12.26Z"
                    fill="#EDE5DB"
                  />
                </svg>
                <span>+7 (989) 421-18-18</span>
              </a>
              <a className="flex items-center" href="">
                Ростовская область, ул. Большая Садовая, дом пушкина 72
              </a>
            </div>
          </div>
        </header>
        <div className="absolute top-[30vh] text-white w-[40%]">
          <h1 className=" text-[5vh] font-bold text-base/[5vh]">
            Мы оптово-розничный парк по продаже камней
          </h1>
          <p className=" text-[3vh] text-base/[7vh]">
            Доставляем по всей России и СНГ
          </p>
          <CallButton />
        </div>
        <Link
          to="anchor"
          smooth="true"
          className=" cursor-pointer absolute top-[95vh] left-[49vw] z-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="3vw"
            height="3vh"
            viewBox="0 0 1024 1024"
          >
            <path
              fill="#ffffff"
              d="M831.872 340.864L512 652.672L192.128 340.864a30.59 30.59 0 0 0-42.752 0a29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728a30.59 30.59 0 0 0-42.752 0z"
            />
          </svg>
        </Link>
      </section>
      <SectionTransition text="Натуральная красота в каждом камушке!" />
      <section
        id="anchor"
        className=" flex flex-col items-center justify-between py-[8vh] h-[100vh] bg-[#EDE5DB]"
      >
        <h2 className=" text-[4vh] font-bold text-[#EDE5DB] bg-[#7BA35A] px-[10vw] py-[1.2vh] rounded-md">
          Каталог камня
        </h2>
        <div className=" flex flex-row ">
          <h3 className="text-[4vh] font-bold">
            Что наши клиенты говорят о нас?
          </h3>
          <div className=" flex">



          </div>
        </div>
        <div className=" flex flex-col items-center">
          <h3 className=" text-[3vh] font-bold mb-[1vh]"> Примеры дизайнов наших клиентов</h3>
          <p className=" text-[2vh]">Можете посмотреть в наших соцсетях</p>
          <div className=" flex w-[12vw] mt-[2vh] justify-between items-center">
            <a href="https://web.telegram.org"><img src="src\assets\imgs\tg.svg" alt="Ссылка на телеграм" /></a>
            <a href="https://instagram.com"><img src="src\assets\imgs\insta.svg" alt="Ссылка на инстаграм" /></a>
            <a href="https://vk.com"><img src="src\assets\imgs\vk.svg" alt="Ссылка на телеграм" /></a>
          </div>
        </div>
      </section>
      <SectionTransition text="Доставим заказ прямо к вам"/>
    </div>
  );
}
