export default function FormWrapper({
  title,
  children,
  note,
  pointerTitle,
  pointersData,
  getProgress,
  secondryNote1,
  secondryNote2,
}) {
  return (
    <>
      <h2 className="text-3xl font-bold pb-4 block mt-6 sm:hidden mx-6 w-3/4 leading-10">
        {pointerTitle}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-5  gap-x-0 gap-y-8 sm:gap-6 mx-6 mb-6 sm:my-0 sm:mx-0">
        <div className="bg-white col-span-2 pt-12 pb-8  px-6 rounded-lg">
          <div className="relative mb-6">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-[#ff7f3e] h-2 rounded-full transition-all duration-500 ease-in-out"
                style={{ width: `${getProgress()}%` }}
              />
            </div>
          </div>
          <h1 className="text-black text-2xl font-bold capitalize pb-4">
            {title}
          </h1>
          {children}

          <p
            className={`text-black text-center font-medium text-sm pt-10 ${
              note ? "opacity-100" : "opacity-0"
            }`}
          >
            Note: {note}
          </p>

          <p
            className={`text-black text-center font-sans text-xs pt-6 ${
              secondryNote1 ? "opacity-100" : "opacity-0"
            }`}
          >
            {secondryNote1}
          </p>

          <p
            className={`text-black text-center font-sans text-xs ${
              secondryNote2 ? "opacity-100" : "opacity-0"
            }`}
          >
            By proceeding further, you agree to our 
            <a href="#" className="underline">
              Terms & Conditions 
            </a>
            and our 
            <a href="#" className="underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>

        <div className="col-span-3 ml-[20px]">
          <h2 className="sm:text-[44px] font-bold pb-4 hidden sm:block text-white">
            {pointerTitle}
          </h2>
          {pointersData?.map((item, index) => (
            <div key={index} className="flex gap-2 mb-4">
              <div className="flex-shrink-0 mt-1 sm:mt-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="min-w-[16px] min-h-[16px]"
                >
                  <path
                    d="M9.9502 11.7004L8.5002 10.2754C8.31686 10.092 8.0877 10.0004 7.8127 10.0004C7.5377 10.0004 7.3002 10.1004 7.1002 10.3004C6.91686 10.4837 6.8252 10.717 6.8252 11.0004C6.8252 11.2837 6.91686 11.517 7.1002 11.7004L9.2502 13.8504C9.4502 14.0504 9.68353 14.1504 9.9502 14.1504C10.2169 14.1504 10.4502 14.0504 10.6502 13.8504L14.9002 9.60036C15.1002 9.40036 15.196 9.16703 15.1877 8.90036C15.1794 8.6337 15.0835 8.40036 14.9002 8.20036C14.7002 8.00036 14.4627 7.8962 14.1877 7.88786C13.9127 7.87953 13.6752 7.97536 13.4752 8.17536L9.9502 11.7004ZM7.1502 20.7504L5.7002 18.3004L2.9502 17.7004C2.7002 17.6504 2.5002 17.5212 2.3502 17.3129C2.2002 17.1045 2.14186 16.8754 2.1752 16.6254L2.4502 13.8004L0.575195 11.6504C0.408529 11.467 0.325195 11.2504 0.325195 11.0004C0.325195 10.7504 0.408529 10.5337 0.575195 10.3504L2.4502 8.20036L2.1752 5.37536C2.14186 5.12536 2.2002 4.8962 2.3502 4.68786C2.5002 4.47953 2.7002 4.35036 2.9502 4.30036L5.7002 3.70036L7.1502 1.25036C7.28353 1.0337 7.46686 0.887863 7.7002 0.812863C7.93353 0.737863 8.16686 0.750363 8.4002 0.850363L11.0002 1.95036L13.6002 0.850363C13.8335 0.750363 14.0669 0.737863 14.3002 0.812863C14.5335 0.887863 14.7169 1.0337 14.8502 1.25036L16.3002 3.70036L19.0502 4.30036C19.3002 4.35036 19.5002 4.47953 19.6502 4.68786C19.8002 4.8962 19.8585 5.12536 19.8252 5.37536L19.5502 8.20036L21.4252 10.3504C21.5919 10.5337 21.6752 10.7504 21.6752 11.0004C21.6752 11.2504 21.5919 11.467 21.4252 11.6504L19.5502 13.8004L19.8252 16.6254C19.8585 16.8754 19.8002 17.1045 19.6502 17.3129C19.5002 17.5212 19.3002 17.6504 19.0502 17.7004L16.3002 18.3004L14.8502 20.7504C14.7169 20.967 14.5335 21.1129 14.3002 21.1879C14.0669 21.2629 13.8335 21.2504 13.6002 21.1504L11.0002 20.0504L8.4002 21.1504C8.16686 21.2504 7.93353 21.2629 7.7002 21.1879C7.46686 21.1129 7.28353 20.967 7.1502 20.7504ZM8.4502 18.9504L11.0002 17.8504L13.6002 18.9504L15.0002 16.5504L17.7502 15.9004L17.5002 13.1004L19.3502 11.0004L17.5002 8.85036L17.7502 6.05036L15.0002 5.45036L13.5502 3.05036L11.0002 4.15036L8.4002 3.05036L7.0002 5.45036L4.2502 6.05036L4.5002 8.85036L2.6502 11.0004L4.5002 13.1004L4.2502 15.9504L7.0002 16.5504L8.4502 18.9504Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="text-lg sm:text-2xl leading-6 sm:leading-8 text-white">
                {item?.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
