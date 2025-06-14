import BackgroundLayout from "./Background-layout";

const 

Card: React.FC = () => {
  const ListOfCards = [
    {
      image1: "/assets/images/new_character-transformed.webp",
      title: "Game Development",
      content:
        "We create unforgettable gaming experiences that captivate players and set new standards in the industry. From mobile games to AAA titles, our team of developers, designers, and storytellers work together to bring your vision to life. Whether it’s action-packed adventures, strategic puzzles, or immersive RPGs, we build games that resonate with players of all ages.",
      image2: "/assets/images/game-development.webp",
    },
    {
      image1: "/assets/images/new_character-transformed.webp",
      title: "Metaverse Solutions",
      content:
        "Step into the future with our Metaverse development services. We design and build virtual worlds where users can interact, socialize, and explore limitless possibilities. From virtual real estate to interactive events, we help businesses and creators establish their presence in the Metaverse.",
      image2: "/assets/images/metaverse-solutions.webp",
    },
    {
      image1: "/assets/images/new_character-transformed.webp",
      title: "Web3 Applications",
      content:
        "Embrace the decentralized future with our Web3 expertise. We develop blockchain-based applications, including NFTs, decentralized finance (DeFi) platforms, and smart contracts. Our solutions empower users with transparency, security, and ownership in the digital realm.",
      image2: "/assets/images/web3-applications.webp",
    },
    {
      image1: "/assets/images/new_character-transformed.webp",
      title: "XR (Extended Reality) Applications",
      content:
        "Blur the lines between the physical and digital worlds with our XR applications. Using augmented reality (AR), virtual reality (VR), and mixed reality (MR), we create immersive experiences for gaming, training, education, and beyond.",
      image2: "/assets/images/xr-applications.webp",
    },
    {
      image1: "/assets/images/new_character-transformed.webp",
      title: "Software Development",
      content:
        "Beyond gaming and immersive tech, we offer custom software development services tailored to your business needs. From enterprise solutions to innovative apps, we leverage the latest technologies to drive efficiency, scalability, and growth.",
      image2: "/assets/images/software-applications.webp",
    },
  ];

  const CardSection = (
    image1: string,
    title: string,
    content: string,
    image2: string,
    leftAlignment: boolean
  
  ) => {
      const card_bg= 'card-bg';
    return (
    <BackgroundLayout card_bg="card-bg">
        <div className="p-4 py-6 flex lg:hidden flex-col items-center">
          <div className=" w-full px-4  md:w-1/2 " data-aos={"fade-left"}>
            <img className="w-full h-auto rounded-[20px]" src={image2} alt="" />
          </div>
          <div className="bg-[#FFFFFF] max-w-[600px] rounded-[24px] mt-4 p-4" data-aos={"fade-right"}>
            <div className="text-[20px] md:text-[28px]  metrophobic-400 text-[#223279] text-center">
              {title}
            </div>
            <p className=" work-sans-400 text-[#7082B8] pt-1 text-center">
              {content}
            </p>
          </div>
        </div>

        <div
          className={`py-16 px-16 gap-8 max-w-[1800px] hidden lg:flex ${
            leftAlignment ? "" : "flex-row-reverse"
          }`}
        >
          <div
            className="flex flex-col w-1/2"
            data-aos={leftAlignment ? "fade-right" : "fade-left"}
          >
            <div className="flex justify-center ">
              <img className="w-[300px] h-auto" src={image1} alt="" />
            </div>
            <div className="bg-[#FB883D] rounded-t-[26px] p-2 flex-grow">
              <div className="bg-[#FFFFFF] rounded-[24px] mb-12 p-8">
                <div className="text-[35px] metrophobic-400 text-[#223279] text-center">
                  {title}
                </div>
                <p className="text-[16px] work-sans-400 text-[#7082B8] pt-2 text-center">
                  {content}
                </p>
              </div>
            </div>
          </div>
          <div
            className="h-full w-1/2 bg-[#FB883D] pb-12 rounded-t-[26px]"
            data-aos={leftAlignment ? "fade-left" : "fade-right"}
          >
            <img className="w-full h-auto " src={image2} alt="" />
          </div>
        </div>
    </BackgroundLayout>
    );
  };

  return (
    <div className="" id="we-do">
      {ListOfCards.map((each, index) => {
        return (
          <div className="" key={index}>
            {CardSection(
              each.image1,
              each.title,
              each.content,
              each.image2,
              index % 2 == 0
            )}
          </div>
        );
      })}
    </div>
  );
};
export default Card;
