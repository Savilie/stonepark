import axios, { Axios } from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function sendBid(name, phone, comment) {
  axios.post("https://parkkamnya.ru/api/bids/", {
      name:  name ,
      number:  phone ,
      comment:  comment ,
    })
    .then(function (response) {
      // console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export default function ModalWindow() {
  return (
    <div className="fixed left-0 right-0 m-[20vh_auto] w-[50vw] h-fit z-1004 bg-white rounded-lg  max-lg:w-[80vw]">
      <div className=" flex justify-between p-4 rounded-t-lg border-b border-black/10 bg-[#7BA35A] text-white">
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
        className=" flex flex-col gap-y-4 justify-between items-center *:w-full px-[10%] py-[2%] max-lg:py-[5%]"
      >
        <div>
          <label htmlFor="name">Имя</label>
          <br />
          <input
            className=" bg-white w-[300px] rounded-sm border border-black/20 max-w-full resize-none p-2"
            placeholder="Как к вам обращаться?"
            type="text"
            name="name"
            id="name"
            required
          />
        </div>
        <div>
          <label htmlFor="phone">Номер телефона</label>
          <PhoneInput
            country={"ru"}
            regions={"ex-ussr"}
            inputProps={{
              name: "phone",
              id: "phone",
              required: "true",
              placeholder: '+7 (900)-000-00-00',
              className: 'form-control max-w-[100%]'
            }}
          />
        </div>
        <div>
          <label htmlFor="comment">Дополнительная информация</label>
          <textarea
            className=" w-full bg-white rounded-sm border border-black/20 resize-none p-2 h-50"
            placeholder="Ваш комментарий"
            name="comment"
            id="comment"
          ></textarea>
        </div>
        <div className=" flex justify-center">
          <input
            className=" w-full mb-1 cursor-pointer bg-[#7BA35A] text-white rounded-xl px-4 py-2 "
            type="submit"
            value="Отправить"
          />
        </div>
      </form>
    </div>
  );
}
