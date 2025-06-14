const Future: React.FC = () => {
  return (
    <div className="bg-[#FB883D] py-6 lg:py-12 px-4 md:px-8 lg:px-12 2xl:px-16 flex flex-col lg:flex-row items-center gap-4 lg:gap-16 overflow-x-hidden">
      <div
        className="w-full lg:w-1/2 flex justify-center"
        data-aos="fade-right"
      >
        <img
          className="w-full h-auto"
          src="/assets/images/future-img.webp"
          alt=""
        />
      </div>
      <div className="w-full lg:w-1/2">
        <img
          className="h-[90px] lg:h-[150px] w-auto"
          src="/assets/images/future-together.webp"
          alt=""
          data-aos="fade-left"
        />
        <div
          className="text-[#253D82] lg:pt-2 text-[20px] lg:text-[35px] work-sans-400"
          data-aos="fade-left"
        >
          Let’s Build the Future Together
        </div>
        <p className="text-[#FFFFFF] pt-1 lg:pt-3" data-aos="fade-left">
          Whether you’re a startup, an established business, or a creative
          visionary, Coop Games is your partner in innovation. Let’s collaborate
          to create something extraordinary.
        </p>
        <div
          className="bg-[#FFFFFF] rounded-full text-center mt-3 lg:mt-6 py-3 work-sans-400 text-xs lg:text-base w-[120px] lg:w-[150px] text-[#717A8E]"
          data-aos="fade-left"
        >
          Explore Now
        </div>
      </div>
    </div>
  );
};
export default Future;
