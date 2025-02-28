export default function FixedCallButton() {
  return (
    <button className="fixed bottom-[5vh] right-[3vw] cursor-pointer z-50">
      <div className="bg-[#ED2C2C]/50 p-[0.5vh] rounded-tr-[30%] rounded-bl-[30%] rounded-tl-[50%] rounded-br-[50%]">
        <div className="bg-[#ED2C2C]/40 p-[0.7vh] rounded-br-[30%] rounded-tl-[30%] rounded-bl-[50%] rounded-tr-[50%]">
            <div className="bg-[#ED2C2C] p-[2vh] rounded-full">
              <svg
                width="3vh"
                height="3vh"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.23 12.26L13.69 11.97C13.3914 11.9349 13.0886 11.968 12.8046 12.0667C12.5206 12.1654 12.2626 12.3273 12.05 12.54L10.21 14.38C7.37144 12.9359 5.0641 10.6286 3.62004 7.79L5.47004 5.94C5.90004 5.51 6.11004 4.91 6.04004 4.3L5.75004 1.78C5.69356 1.29209 5.45951 0.842024 5.0925 0.515594C4.7255 0.189164 4.25121 0.00919825 3.76004 0.010001H2.03004C0.900041 0.010001 -0.0399593 0.950001 0.0300407 2.08C0.560041 10.62 7.39004 17.44 15.92 17.97C17.05 18.04 17.99 17.1 17.99 15.97V14.24C18 13.23 17.24 12.38 16.23 12.26Z"
                  fill="#FFFFFF"
                />
              </svg>
            </div>
        </div>
      </div>
    </button>
  );
}
