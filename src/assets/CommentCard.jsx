export default function CommentCard(obj) {
  const review = obj.obj;
  console.log(review);

  return (
    <article className=" bg-[#F8F3ED] px-[1vw] py-[1vh] w-[32%] rounded-md shadow-md">
      <div className="">
        <img src={review.reviewer_image} alt="Фото" />
      </div>
      <p className=" text-[#7BA35A]">{review.reviewer_name}</p>
      <p>{review.review_text}</p>
    </article>
  );
}
