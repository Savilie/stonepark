import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./swiperStyles.css";

export default function ProductItem(product) {
  console.log(product.data)
  return (
    <div className=" bg-[#F8F3ED] w-full overflow-clip rounded-lg">
      <Swiper
        modules={[Navigation]}
        slidesPerView={1}
        spaceBetween={10}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        className="h-[40%]"
      >
        {product.data.images.map((el) => {
          return (
            <SwiperSlide key={el.image}>
              <img
                className="h-full w-full"
                src={"https://parkkamnya.ru/" + el.image}
                alt=""
              />
              первый слайд
            </SwiperSlide>
          );
        })}
        <div className="swiper-button-prev">
          <svg
            viewBox="0 0 43 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M21.5 43C33.3741 43 43 33.3741 43 21.5C43 9.62588 33.3741 0 21.5 0C9.62588 0 0 9.62588 0 21.5C0 33.3741 9.62588 43 21.5 43ZM13.9393 19.9393L23.4853 10.3934C24.0711 9.80761 25.0208 9.80761 25.6066 10.3934C26.1924 10.9792 26.1924 11.9289 25.6066 12.5147L17.1213 21L25.6066 29.4853C26.1924 30.0711 26.1924 31.0208 25.6066 31.6066C25.0208 32.1924 24.0711 32.1924 23.4853 31.6066L13.9393 22.0607C13.3536 21.4749 13.3536 20.5251 13.9393 19.9393Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="swiper-button-next">
          <svg
            viewBox="0 0 43 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M21.5 43C9.62588 43 0 33.3741 0 21.5C0 9.62588 9.62588 0 21.5 0C33.3741 0 43 9.62588 43 21.5C43 33.3741 33.3741 43 21.5 43ZM29.0607 19.9393L19.5147 10.3934C18.9289 9.80761 17.9792 9.80761 17.3934 10.3934C16.8076 10.9792 16.8076 11.9289 17.3934 12.5147L25.8787 21L17.3934 29.4853C16.8076 30.0711 16.8076 31.0208 17.3934 31.6066C17.9792 32.1924 18.9289 32.1924 19.5147 31.6066L29.0607 22.0607C29.6464 21.4749 29.6464 20.5251 29.0607 19.9393Z"
              fill="white"
            />
          </svg>
        </div>
      </Swiper>
      <div className="p-4">
        <p className=" text-[#7BA05C]">{product.data.name}</p>
        <p>{product.data.short_description}</p>
      </div>
    </div>
  );
}
