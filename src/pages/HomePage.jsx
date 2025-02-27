import CallButton from "../assets/CallButton";
import Logo from "../assets/logo";

export default function HomePage() {
  return (
    <>
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
        <div className="absolute top-[30vh] text-white w-[40%] px-[1.5vw]">
          <h1 className=" text-[5vh] font-bold text-base/10">Мы оптово-розничный парк по продаже камней</h1>
          <p className=" text-[3vh] text-base/15">Доставляем по всей России и СНГ</p>
          <CallButton/>
        </div>
      </section>
    </>
  );
}
