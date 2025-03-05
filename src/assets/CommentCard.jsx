export default function CommentCard(obj) {
  const review = obj.obj;

  return (
    <article className=" bg-[#F8F3ED] px-4 py-4 w-[32%] rounded-md shadow-md text-sm max-md:w-full max-md:mb-5">
      <div className="">
        <img className="max-md:w-10" src={'https://parkkamnya.ru/' + review.reviewer_image} alt="Фото" />
      </div>
      <p className=" text-[#7BA35A]">{review.reviewer_name}</p>
      <p>{review.review_text}</p>
    </article>
  );
}
