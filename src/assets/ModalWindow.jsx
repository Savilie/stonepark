import axios, { Axios } from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function sendBid(name, phone, comment) {
  axios.post("https://parkkamnya.ru/api/bids/", {
      name: { name },
      phone: { phone },
      comment: { comment },
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export default function ModalWindow() {
  return (
    <div className="fixed left-[25%] top-[25%] justify-self-center w-[50vw] h-fit z-1004 bg-[#fffaf3]  max-lg:w-[80vw] max-lg:top-[15%] max-lg:left-[10%]">
      <div className=" flex justify-between p-4 border-b border-black/10">
        <p>Оставьте свои контакты и мы вам перезвоним</p>
      </div>
      <form
        action={(data) => {
          let name = data.get("name");
          let phone = data.get("phone");
          let comment = data.get("comment");
          sendBid(name, phone, comment);
        }}
        method="post"
        className=" flex flex-col justify-between items-center py-[2%] max-lg:py-[5%]"
      >
        <div className=" w-[80%]">
          <label htmlFor="name">Имя</label>
          <br />
          <input
            className=" bg-black/10 w-full resize-none p-2"
            placeholder="Фамилия Имя Отчество"
            type="text"
            name="name"
            id="name"
            required
          />
        </div>
        <div className=" w-[80%]">
          <label htmlFor="phone">Номер телефона</label>
          <PhoneInput
            country={"ru"}
            regions={"ex-ussr"}
            inputProps={{
              name: "phone",
              id: "phone",
              required: "true",
            }}
          />
        </div>
        <div className=" w-[80%]">
          <label htmlFor="comment">Дополнительная информация</label>
          <textarea
            className=" w-full bg-black/10 resize-none p-2 h-50"
            placeholder="Ваш комментарий"
            name="comment"
            id="comment"
          ></textarea>
        </div>
        <div>
          <input
            className=" cursor-pointer border"
            type="submit"
            value="Отправить"
          />
        </div>
      </form>
    </div>
  );
}
