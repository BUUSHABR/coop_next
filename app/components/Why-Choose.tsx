const WhyChoose: React.FC = () => {
  const chooseCardList = [
    {
      image: "/assets/images/why-choose-1.webp",
      title: "Innovation at the Core",
      content:
        "We stay ahead of the curve by embracing emerging technologies and trends.",
    },
    {
      image: "/assets/images/why-choose-2.webp",
      title: "Collaborative Approach",
      content:
        "We work closely with our clients to understand their goals and deliver solutions that exceed expectations.",
    },
    {
      image: "/assets/images/why-choose-3.webp",
      title: "Passionate Team",
      content:
        "Our team of experts is driven by a shared love for technology and creativity.",
    },
    {
      image: "/assets/images/why-choose-4.webp",
      title: "End-to-End Solutions",
      content:
        "From concept to launch, we handle every aspect of development to ensure seamless execution.",
    },
  ];
  const ChooseCard = (image: string, title: string, content: string) => {
    return (
      <div className="bg-[#243359] rounded-[12px] lg:rounded-[20px] p-4 flex flex-col md:flex-row md:items-center gap-0 md:gap-6">
        <div className="w-[100px] lg:w-[250px]">
          <img
            className="h-[100px] lg:h-[180px] w-auto"
            src={image}
            alt={title}
          />
        </div>
        <div className="w-full">
          <div className="text-[#FB883D] text-[18px] lg:text-[28px] metrophobic-400 pt-2">
            {title}
          </div>
          <p className="text-[#e4e5ea] lg:mt-2">{content}</p>
        </div>
      </div>
    );
  };

  return (
    <div
      className="bg-[#192440] py-6 lg:py-12 px-12 md:px-8 lg:px-12 2xl:px-16 flex flex-col items-center overflow-x-hidden"
      id="about"
    >
      <div
        className="text-[#FB883D] text-[20px] lg:text-[40px] metrophobic-400"
        data-aos="zoom-in"
      >
        Why Choose Coop Games?
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 mt-4 lg:mt-8">
        {chooseCardList.map((each, index) => {
          return (
            <div
              key={index}
              className=""
              data-aos="zoom-in"
              data-aos-delay={index * 300}
            >
              {ChooseCard(each.image, each.title, each.content)}
            </div>
          );
        })}
      </div>
      <div
        className="bg-[#243359] rounded-[12px] lg:rounded-[20px] p-4 flex flex-col md:flex-row md:items-center gap-0 md:gap-6 w-full lg:w-1/2 mt-4 lg:mt-8"
        data-aos="zoom-in"
        data-aos-delay={600}
      >
        <div className="w-[100px] lg:w-[250px]">
          <img
            className="h-[100px] lg:h-[180px] w-auto"
            src="/assets/images/why-choose-5.webp"
            alt="Future-Ready"
          />
        </div>
        <div className="">
          <div className="text-[#FB883D] text-[18px] lg:text-[28px] metrophobic-400">
            Future-Ready
          </div>
          <p className="text-[#e4e5ea] mt-2 ">
            We build products that are scalable, adaptable, and ready for the
            challenges of tomorrow.
          </p>
        </div>
      </div>
    </div>
  );
};
export default WhyChoose;
