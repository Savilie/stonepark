import { Link } from "react-router";

export default function Logo(props) {
  return (
    <Link to={"/"}>
      <svg
        className=" w-[14vw] h-[7vw] max-lg:w-[140px] max-lg:h-[70px]"
        viewBox="0 0 258 88"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path
            d="M16.0182 52.0033C15.891 51.5404 15.7002 48.7235 15.2232 48.6751C14.7461 48.5973 13.792 48.241 13.156 48.6751C12.52 49.1095 10.7708 51.2798 9.81677 52.5823C8.8627 53.8845 4.25139 57.7913 2.82027 58.6594C1.38917 59.5275 1.23016 68.7884 0.435103 70.38C-0.359952 71.9717 0.117066 72.4886 0.43509 74.9484C0.689504 76.9162 2.02522 83.5477 2.82027 83.9818C7.43161 86.297 10.8374 84.0659 11.0889 83.8372C11.4069 83.5477 13.0545 82.7574 13.5315 82.1788C14.0085 81.5998 13.792 79.0618 14.4281 78.0492C15.0642 77.0361 15.2232 71.8271 15.2232 69.946C15.2232 68.0648 15.5412 65.8946 16.1772 63.4344C16.8133 60.9746 16.3362 57.2123 16.1772 56.6337C16.0182 56.0547 16.1772 52.5819 16.0182 52.0033Z"
            fill="#92877A"
          />
          <path
            d="M0.945966 56.3901C0.315328 56.0352 0.262774 53.5775 0.315328 52.3932C0.328414 51.9493 0.315319 47.0638 0.157659 46.1758C0 45.2877 0 40.2542 0 36.8493C0 33.4444 0.630637 30.0395 0.630637 29.4474C0.630637 28.8552 1.73425 25.8944 1.73425 25.1543C1.73425 24.4141 1.41893 23.0817 1.10362 22.0455C0.788297 21.0092 1.73425 18.0484 1.73425 17.7524C1.73425 17.4563 2.52868 16.937 2.99553 17.0122C4.45624 17.2473 6.15385 18.9277 7.25233 19.3808C8.16576 19.7576 8.67127 20.5651 10.5632 20.7131C12.4551 20.8611 14.5047 21.7494 15.4506 21.8974C16.3966 22.0455 16.2389 22.9337 16.0813 23.3778C15.9236 23.8219 15.293 29.5954 15.7659 30.4837C16.2389 31.3719 16.7119 37.5895 16.3966 39.3659C16.0813 41.1424 13.7164 46.1758 12.4551 47.656C11.1938 49.1363 9.93255 49.7285 8.98659 51.653C8.04063 53.5775 5.51807 55.3541 4.09914 56.3901C2.68021 57.4266 1.73426 56.8344 0.945966 56.3901Z"
            fill="#C7B59F"
          />
          <path
            d="M0.948841 8.43644C-0.316217 9.58252 0.316311 11.5669 0.790705 12.4159C1.73951 13.5301 3.95339 16.0133 5.21846 17.032C6.79977 18.3055 9.80428 18.9422 12.1763 19.2605C14.5482 19.5789 14.7064 19.8973 17.0784 20.3748C19.4503 20.8523 21.6642 21.0115 24.0362 20.8523C26.4081 20.6931 30.6777 21.1707 32.5753 21.3298C34.4729 21.489 41.2726 23.8767 44.277 23.8767C47.2815 23.8767 49.6536 24.9909 51.2349 25.3093C52.8162 25.6276 54.0814 23.8767 54.5554 23.24C55.0299 22.6033 55.3463 19.7381 55.5043 18.1463C55.6627 16.5545 54.3974 11.4608 54.8719 8.75481C55.3463 6.04875 54.5554 1.59178 52.9742 0.79589C51.3929 0 43.3281 0.318356 42.3795 0.318356C41.4307 0.318356 39.2168 1.4326 37.4774 1.11425C35.7379 0.79589 31.9428 0 30.2033 0C28.4639 0 17.5527 0.79589 15.6552 1.11425C13.7576 1.4326 11.0693 3.18356 9.80428 3.82027C8.53922 4.45697 7.27415 4.9345 5.21846 5.88958C3.16272 6.84466 2.53016 7.00382 0.948841 8.43644Z"
            fill="#B39877"
          />
          <path
            d="M39.5597 34.8199C39.6877 34.0219 40.3599 31.6847 39.5597 30.2034C39.2396 29.5686 39.3036 27.3292 39.5597 26.7488C39.8798 26.0233 38.7596 25.4792 42.4403 25.1164C46.1211 24.7537 52.0423 27.3836 52.5222 27.4743C53.0026 27.565 54.9169 28.5347 55.3968 28.8067C55.7549 29.0095 57.1633 32.2807 56.5232 33.1876C55.8831 34.0945 54.4429 38.7195 54.4429 39.0822C54.4429 39.445 53.6622 45.604 51.4218 46.9639C49.1813 48.3243 48.2477 47.4299 46.6576 48.8264C43.0495 51.9957 40.1381 50.5337 39.82 47.2747C39.7565 46.6238 39.5597 40.8874 39.5597 39.9805C39.5597 39.0736 39.3997 35.8175 39.5597 34.8199Z"
            fill="#92877A"
          />
          <path
            d="M38.0361 67.8097C38.912 66.1849 40.0694 61.9869 40.5386 60.0908C40.695 58.872 41.0079 56.1504 41.0079 55.0128C41.0079 53.5907 42.7284 51.5595 43.8234 51.5595C44.9183 51.5595 45.7385 50.7751 47.3546 49.3591C48.8615 48.0386 49.7152 48.9186 51.3309 48.9186C53.4924 48.9186 56.1796 55.8252 55.241 57.8564C54.3027 59.888 55.241 74.9195 55.241 76.7475C55.241 78.5759 56.0233 82.232 52.4259 84.0604C48.8284 85.8884 43.8233 83.4508 42.7284 83.0448C41.6335 82.6384 40.5386 77.7631 38.9745 74.9195C37.4105 72.0758 36.9412 69.8414 38.0361 67.8097Z"
            fill="#B39877"
          />
          <path
            d="M56.2951 50.9018C56.2951 52.048 57.8764 55.3057 59.1413 56.3141C59.4577 56.5712 63.4111 61.7258 65.9412 63.9543C68.4713 66.1828 70.685 65.387 72.8987 63.6359C75.1128 61.8853 76.2299 55.4353 77.1987 52.573C77.6205 51.327 76.2698 49.3493 75.6743 47.8967C74.6032 45.2851 72.9777 42.5899 72.2663 41.6695C71.1595 40.2369 68.2679 33.3177 68.1099 32.5217C67.9519 31.7258 64.6759 28.9353 64.6759 28.9353C62.9367 27.5027 57.577 28.0609 57.7184 29.971V39.2818C57.7184 40.5552 55.3743 43.3088 54.7139 45.9675C54.112 48.3872 56.2951 50.2191 56.2951 50.9018Z"
            fill="#B39877"
          />
          <path
            d="M62.1118 23.0807C61.6055 21.5525 63.008 14.5381 64.0091 13.0524C65.2744 9.55051 65.9068 9.07293 65.9068 6.36691C65.9068 4.55449 67.2549 3.13203 68.7627 2.12535C69.506 1.629 71.0125 1.12375 71.2937 0.991691C73.0261 0.178124 73.4029 0.141498 73.9652 0.493615C74.8236 0.922919 75.7742 2.93441 75.3715 3.82588C74.985 4.68207 74.9497 8.21877 74.528 11.7615C74.9497 16.0127 75.6833 19.3066 76.9761 20.8521C79.0004 23.2717 79.2956 27.4846 79.1898 29.2886C75.7113 40.1127 74.1296 37.2475 72.5483 36.7699C70.967 36.2924 68.7533 30.562 67.8045 29.2886C66.8556 28.0152 62.7442 24.9908 62.1118 23.0807Z"
            fill="#92877A"
          />
          <path
            d="M76.6185 3.2736C77.1239 0.983826 80.7265 0.729404 82.4645 0.888416C86.1512 0.888416 94.0932 1.04743 96.3685 1.6835C99.2125 2.47858 96.8425 11.8603 95.8945 13.4504C94.9465 15.0405 89.4165 19.0158 87.0465 20.7649C84.6765 22.5141 81.2005 23.4682 79.9365 22.6731C78.6725 21.878 76.6185 16.4716 75.9865 13.9274C75.3545 11.3832 75.9865 6.13581 76.6185 3.2736Z"
            fill="#C7B59F"
          />
          <path
            d="M74.4558 64.1928C72.1775 67.3638 72.1291 67.1691 74.0328 69.0817C74.8236 69.8159 76.8653 72.2114 77.8146 73.0919C78.3858 73.622 80.2207 76.696 83.3395 79.4972C84.541 80.5765 86.911 81.9561 88.099 82.4866C93.7798 85.0242 92.213 85.4225 96.9598 84.1016C100.05 83.2412 99.8076 83.7488 99.8076 81.6062C99.8076 78.9445 97.909 75.5873 97.2762 71.771C96.6429 67.9543 97.4822 70.5705 89.6854 61.43C82.0704 52.5024 85.6666 55.9034 82.9164 53.5652C81.8733 52.6776 79.5322 51.0855 79.1092 52.5024C78.8327 53.4288 78.5961 54.8087 78.0516 55.903C77.3465 57.3203 77.3036 60.2298 74.4558 64.1928Z"
            fill="#C7B59F"
          />
          <path d="M116.757 41V23.5H132.707V41H128.682V25.875L129.607 26.8H119.857L120.782 25.875V41H116.757ZM135.07 41L142.87 23.5H146.87L154.695 41H150.445L144.045 25.55H145.645L139.22 41H135.07ZM138.97 37.25L140.045 34.175H149.045L150.145 37.25H138.97ZM157.288 41.275C156.988 41.275 156.672 41.25 156.338 41.2C156.022 41.15 155.672 41.0833 155.288 41L155.538 37.575C155.772 37.6417 156.013 37.675 156.263 37.675C156.947 37.675 157.48 37.4 157.863 36.85C158.247 36.2833 158.522 35.475 158.688 34.425C158.855 33.375 158.963 32.1 159.013 30.6L159.263 23.5H172.713V41H168.713V25.875L169.638 26.8H161.913L162.738 25.825L162.588 30.45C162.538 32.1667 162.422 33.6917 162.238 35.025C162.055 36.3583 161.772 37.4917 161.388 38.425C161.005 39.3583 160.48 40.0667 159.813 40.55C159.147 41.0333 158.305 41.275 157.288 41.275ZM177.084 41V23.5H181.109V34.9L189.459 23.5H193.259V41H189.259V29.625L180.909 41H177.084ZM201.391 41V25.875L202.316 26.8H195.816V23.5H210.991V26.8H204.491L205.391 25.875V41H201.391ZM213.534 41V23.5H221.109C222.676 23.5 224.026 23.7583 225.159 24.275C226.293 24.775 227.168 25.5 227.784 26.45C228.401 27.4 228.709 28.5333 228.709 29.85C228.709 31.15 228.401 32.275 227.784 33.225C227.168 34.175 226.293 34.9083 225.159 35.425C224.026 35.925 222.676 36.175 221.109 36.175H215.784L217.584 34.35V41H213.534ZM217.584 34.8L215.784 32.875H220.884C222.134 32.875 223.068 32.6083 223.684 32.075C224.301 31.5417 224.609 30.8 224.609 29.85C224.609 28.8833 224.301 28.1333 223.684 27.6C223.068 27.0667 222.134 26.8 220.884 26.8H215.784L217.584 24.875V34.8ZM228.527 41L236.327 23.5H240.327L248.152 41H243.902L237.502 25.55H239.102L232.677 41H228.527ZM232.427 37.25L233.502 34.175H242.502L243.602 37.25H232.427ZM128.082 71L122.632 62.575L125.907 60.6L132.682 71H128.082ZM116.707 71V53.5H120.732V71H116.707ZM119.557 63.95V60.575H125.657V63.95H119.557ZM126.282 62.7L122.557 62.25L128.232 53.5H132.507L126.282 62.7ZM132.238 71L140.038 53.5H144.038L151.863 71H147.613L141.213 55.55H142.813L136.388 71H132.238ZM136.138 67.25L137.213 64.175H146.213L147.313 67.25H136.138ZM154.184 71V53.5H157.534L164.984 65.85H163.209L170.534 53.5H173.884L173.909 71H170.109L170.084 59.325H170.809L164.934 69.15H163.134L157.134 59.325H157.984V71H154.184ZM190.256 53.5H194.306V71H190.256V53.5ZM182.306 71H178.256V53.5H182.306V71ZM190.556 63.825H182.006V60.4H190.556V63.825ZM208.666 71V65.475L209.666 66.35H204.866C203.349 66.35 202.041 66.1 200.941 65.6C199.841 65.1 198.999 64.375 198.416 63.425C197.832 62.475 197.541 61.3417 197.541 60.025C197.541 58.6583 197.849 57.4917 198.466 56.525C199.099 55.5417 199.982 54.7917 201.116 54.275C202.249 53.7583 203.582 53.5 205.116 53.5H212.666V71H208.666ZM197.591 71L201.941 64.725H206.041L201.866 71H197.591ZM208.666 64.175V55.75L209.666 56.8H205.216C204.066 56.8 203.182 57.0667 202.566 57.6C201.966 58.1333 201.666 58.925 201.666 59.975C201.666 60.9917 201.957 61.775 202.541 62.325C203.124 62.875 203.982 63.15 205.116 63.15H209.666L208.666 64.175Z" fill={props.color}/>
        </g>
      </svg>
    </Link>
  );
}
