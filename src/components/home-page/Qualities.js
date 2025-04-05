export default function Qualities() {
  return (
    <div className="bg-[url(../assets/images/young_minds.png)] bg-cover bg-center bg-no-repeat min-h-screen w-full p-5">
      {/* Text at top center */}
      <div className="text-center px-5 mb-5">
        <span className="block text-black text-4xl md:text-6xl lg:text-7xl font-medium leading-tight">
          Nurturing
        </span>
        <span className="block text-[#3F61E9] text-5xl md:text-8xl lg:text-[130px] font-medium leading-none mt-2">
          Young Minds
        </span>
        <span className="block text-black text-lg md:text-2xl lg:text-3xl font-normal mt-5 max-w-2xl mx-auto leading-relaxed">
          Develop key leadership qualities through engaging, personalized
          learning.
        </span>
      </div>

      {/* Card grid container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-6xl mx-auto p-0 sm:p-4 md:gap-y-0">
        {/* Cards */}
        <div className="bg-[url(../assets/images/features_card4.png)] bg-cover bg-center h-60 sm:h-80 rounded-xl shadow-lg">
          <div className="bg-gradient-to-r from-[#3F61E9] to-[#80C4E9] bg-clip-text text-transparent text-xl md:text-3xl font-bold mt-16 md:mt-20 ml-5 md:ml-10">
            Officer-Like Qualities
            <div className="text-[#757575] text-sm md:text-base font-medium mt-3 md:mt-4 max-w-[200px] md:max-w-[300px]">
              Develop core leadership skills and confidence through our unique
              OLQ-based learning system. These qualities are the foundation of
              success in all our programs.
            </div>
          </div>
        </div>
        <div className="bg-[url(../assets/images/features_card3.png)] bg-cover bg-center h-60 sm:h-80 rounded-xl shadow-lg md:mt-10">
          <div className="bg-gradient-to-r from-[#3F61E9] to-[#80C4E9] bg-clip-text text-transparent text-xl md:text-3xl font-bold mt-16 md:mt-20 ml-5 md:ml-10">
            AI & Metaverse <br />
            Explorers
            <div className="text-[#757575] text-sm md:text-base font-medium mt-3 md:mt-4 max-w-[200px] md:max-w-[300px]">
              Develop your child's reasoning and decision-making skills as they
              explore the exciting world of artificial intelligence and the
              metaverse.
            </div>
          </div>
        </div>
        <div className="bg-[url(../assets/images/features_card1.png)] bg-cover bg-center h-60 sm:h-80 rounded-xl shadow-lg">
          <div className="bg-gradient-to-r from-[#3F61E9] to-[#80C4E9] bg-clip-text text-transparent text-xl md:text-3xl font-bold mt-16 md:mt-20 ml-5 md:ml-10">
            Building <br /> Financial Confidence
            <div className="text-[#757575] text-sm md:text-base font-medium mt-3 md:mt-4 max-w-[200px] md:max-w-[300px]">
              Cultivate a sense of responsibility and financial confidence
              through practical lessons in money management.
            </div>
          </div>
        </div>
        <div className="bg-[url(../assets/images/features_card2.png)] bg-cover bg-center h-60 sm:h-80 rounded-xl shadow-lg md:mt-10">
          <div className="bg-gradient-to-r from-[#3F61E9] to-[#80C4E9] bg-clip-text text-transparent text-xl md:text-3xl font-bold mt-16 md:mt-20 ml-5 md:ml-10">
            Entrepreneurship
            <div className="text-[#757575] text-sm md:text-base font-medium mt-3 md:mt-4 max-w-[200px] md:max-w-[300px]">
              Foster initiative and a creator's mindset by learning the
              fundamentals of entrepreneurship.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
