import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./swiperStyles.css";

export default function ModalItemCard(product) {
  const item = product.data.el;
  return (
    <div className="fixed left-0 right-0 m-[20vh_auto] w-[50vw] h-fit z-1004 bg-[#fffaf3] rounded-xl p-3 max-lg:w-[80vw]">
      <div className=" mb-8  flex justify-between items-center">
        <p className="text-2xl font-['LTSuperior-Semibold']">{item.name}</p>
        <button className=" cursor-pointer" onClick={() => product.onClick()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <p className=" text-xl w-full text-">{item.full_description}</p>
    </div>
  );
}
