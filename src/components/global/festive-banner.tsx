"use client";

const ScallopPattern = () => (
  <svg className="w-full h-6" viewBox="0 0 100 20" preserveAspectRatio="none">
    <path
      d="M0 20 C20 20, 20 0, 40 0 C60 0, 60 20, 80 20 C100 20, 100 0, 120 0"
      fill="none"
      stroke="#FFD700"
      strokeWidth="2"
      className="w-full"
    />
  </svg>
);

const Diya = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16 md:w-24 md:h-24">
    <path
      d="M50 20 L65 60 H35 L50 20Z"
      fill="#FFD700"
      className="animate-flicker"
    />
    <path d="M30 60 Q50 70 70 60 L65 80 Q50 85 35 80 Z" fill="#CD853F" />
    <circle cx="50" cy="35" r="8" fill="#FFA500" className="animate-flame" />
  </svg>
);

const Kite = () => (
  <svg viewBox="0 0 100 100" className="w-12 h-12 md:w-16 md:h-16">
    <path
      d="M50 20 L80 50 L50 80 L20 50 Z"
      fill="#90EE90"
      stroke="#006400"
      strokeWidth="2"
    />
    <path d="M50 80 L45 90 M50 80 L55 90" stroke="#8B4513" strokeWidth="2" />
  </svg>
);

export default function TrendingBanner() {
  return (
    <>
      <div className="flex justify-center">
        <img src="/white.png" alt="" className="w-[1100px] " />
      </div>
      <div className="relative w-full h-[150px] flex justify-center bg-red-800  overflow-hidden">
        <div className="relative pt-8 pb-6 px-4 flex items-center justify-between">
          <div className="transform -rotate-12">
            <Diya />
          </div>

          <div className="text-center flex-1 mx-4">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase  font-bold mb-2  text-white"
              style={
                {
                  // background:
                  //   "linear-gradient(to bottom, #fff 0%, #c0c0c0 50%, #808080 100%)",
                  // WebkitBackgroundClip: "text",
                  // WebkitTextFillColor: "transparent",
                  // textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                }
              }
            >
              Trending This Week
            </h2>
            <p className="text-white  text-sm sm:text-base md:text-lg">
              Explore your true style
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <div className="transform rotate-12">
              <Kite />
            </div>
            <div className="transform -rotate-12 translate-x-4">
              <Kite />
            </div>
          </div>
        </div>
        {/* <div className="w-full h-full flex justify-center p-5">
          <img src="/shyam.png" alt="" className="w-[1100px]" />
        </div> */}
      </div>
    </>
  );
}
