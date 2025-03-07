import CommentStars from "./CommentStars";

export default function CommentCard(obj) {
  const review = obj.obj;
  console.log(review);
  return (
    <article className=" bg-[#F8F3ED] px-4 py-4 w-[32%] rounded-md shadow-md text-sm max-lg:w-full max-lg:mb-5">
      <div className=" flex justify-between">
        <div className="overflow-clip rounded-full w-fit">
          <img
            className="size-[58px]"
            src={"https://parkkamnya.ru/" + review.reviewer_image}
            alt="Фото"
          />
        </div>
        <div className="flex">
          {<CommentStars number={review.review_stars} />}
          {/* {<CommentStars number={3} />} */}
        </div>
      </div>
      <p className=" text-[#7BA35A]">{review.reviewer_name}</p>
      <p>{review.review_text}</p>
    </article>
  );
}
