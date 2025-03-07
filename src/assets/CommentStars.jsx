export default function CommentStars(props) {
  let number = props.number;
  let stars = [];
  for (let i = 0; i < 5; i++) {
    if (i + 1 <= number) {
      stars.push("*");
    } 
    else {
      stars.push("0");
    }
  }
  console.log(stars);
  return (
    <div className="flex items-center">
      {stars.map((el) => {
        if (el === "*") {
          return (
            <span>
              <svg
                width="18px"
                height="15px"
                viewBox="0 0 20 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z"
                  fill="#FFA303"
                />
              </svg>
            </span>
          );
        }
        else if(el === "0") {
          return (
            <span>
              <svg
                width="18px"
                height="15px"
                viewBox="0 0 20 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z"
                  fill="#808080"
                />
              </svg>
            </span>
          );
        }
      })}
    </div>
  );
}
