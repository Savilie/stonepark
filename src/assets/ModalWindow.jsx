export default function ModalWindow() {
  return (
    <div className="fixed left-[25%] top-[25%] justify-self-center w-[50vw] h-fit z-1004 bg-[#fffaf3]  max-lg:w-[80vw] max-lg:top-[15%] max-lg:left-[10%]">
      <div className=" p-4 border-b border-black/10">
        <p>Оставьте свои контакты и мы вам перезвоним</p>
      </div>
      <form
      action={(data) => {
        console.log(data.get('name'))
        console.log(data.get('phone'))
        console.log(data.get('comment'))
      }}
        method="post"
        className=" flex flex-col justify-between items-center py-[2%] max-lg:py-[5%]"
      >
        <div className=" w-[80%]">
          <label htmlFor="name">Имя</label>
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
          <input
            className=" bg-black/10 w-full resize-none p-2"
            placeholder="+7-(900)-000-00-00"
            type="text"
            name="phone"
            id="phone"
            required
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
