import { useState, useEffect } from "react";
import Logo from "../assets/logo";
import { Link } from "react-scroll";
import axios from "axios";
import CategoryButton from "../assets/CategoryButton";
import FixedCallButton from "../assets/FixedCallButton/FixedCallButton";

export default function CatalogPage() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://parkkamnya.ru/api/categories/")
      .then(function (response) {
        setCategories(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    }, []);
    console.log(categories);
    
  return (
    <div className=" bg-[#EDE5DB] h-[100vh]">
      <FixedCallButton/>
      <div className="px-[12vw] py-[3vh] max-md:px-8">
        <header className="flex justify-between items-center">
          <Logo className="max-md:w-fit" color="#92877A" />
          <div className=" text-[#171614] backdrop-blur-sm flex justify-between py-[1vh] px-[1vw] w-[20vw] max-md:w-auto max-md:backdrop-blur-none max-md:bg-white/0 text-8 rounded-md">
            <div className="flex flex-col justify-between">
              <a className="flex items-center" href="">
                <svg
                  className=" max-md:hidden"
                  width="1.5vw"
                  height="2.5vh"
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
              <a className="flex items-center max-md:hidden" href="">
                Ростовская область, ул. Большая Садовая, дом пушкина 72
              </a>
            </div>
          </div>
        </header>
        <div className="grid grid-cols-6 gap-x-4">
          <div className="text-[#EDE5DB] py-0.5 rounded-lg bg-[#7BA35A] mt-8 text-center shadow-md">
            Вернуться на главную
          </div>
        </div>
        <div className="grid grid-cols-6 gap-x-4 mt-3">
          {
            categories.map((el) => {
              return(
                <CategoryButton key={el.id} name={el.name}/>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}
