import React from "react";

const TopBanner: React.FC = () => {
  return (
    <div
      className="top-banner-bg py-12 px-4 md:px-8 lg:px-12 2xl:px-16 overflow-x-hidden"
      id="home"
    >
      <div className="max-w-[250px] md:max-w-[300px] lg:max-w-[550px] pt-16 pb-40 lg:pb-8 lg:pt-32">
        <div
          className="work-sans-500 text-[15px] md:text-[18px] lg:text-[20px] text-[#B4C3E6]"
          data-aos="fade-right"
        >
          Discover the Thrilling World of Web3 Gaming
        </div>
        <div
          className="text-[20px] md:text-[28px] lg:text-[35px] text-[#FFFFFF] metrophobic-400 leading-[24px] md:leading-[32px] lg:leading-[44px] pt-1 lg:pt-2"
          data-aos="fade-right"
        >
          Welcome to Coop Games – Where Innovation Meets Imagination
        </div>
        <p
          className="work-sans-400 text-[#B4C3E6] leading-[30px] text-[14px] pt-3 lg:pt-6"
          data-aos="fade-right"
        >
          At Coop Games, we are redefining the future of digital experiences. As
          a cutting-edge tech company, we specialize in creating immersive
          games, pioneering Metaverse solutions, building Web3 applications,
          developing XR (Extended Reality) experiences, and crafting custom
          software solutions. Our mission is to push the boundaries of
          technology and creativity, delivering products that inspire, engage,
          and connect people across the globe.
        </p>
        <div className="flex flex-col lg:flex-row gap-2 md:gap-4 lg:gap-8 mt-4 md:mt-6 work-sans-400">
          <div
            className="rounded-full w-[150px] lg:w-[170px] text-center bg-[#FCB545] text-[#8C623E] text-xs lg:text-base px-8 py-3 cursor-pointer"
            data-aos="fade-right"
          >
            Explore Now
          </div>
          <div
            className="bg-[#253D82]  w-[150px] lg:w-[170px] text-center text-[#A8B0CA] text-xs lg:text-base rounded-[14px]  px-8 py-3 cursor-pointer"
            data-aos="fade-right"
          >
            Learn More
          </div>
        </div>
      </div>
    </div>
  );
};
export default TopBanner;
