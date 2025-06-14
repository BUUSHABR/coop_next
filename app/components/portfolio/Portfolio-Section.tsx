interface PortfolioSectionProps {
  imagePosition?: "left" | "right";
  key?:number;
 data?: {
    _id: string;
    title: string;
    description: string;
    image: string;
  };
}

function PortfolioSection({ data,key,imagePosition = "left" }: PortfolioSectionProps) {
  const isImageRight = imagePosition === "right";
  const ASSEST_BASE_URL = "https://api.coopgames.in/";

  return (
    <div className="portfoliosection-bg text-white px-6 md:px-20 py-16 flex flex-col md:flex-row items-center gap-10">
      {/* Image */}
      <div className={`w-full md:w-1/2 ${isImageRight ? "md:order-2" : ""}`}>
        <img
          src={data?.image?`${ASSEST_BASE_URL}${data?.image}`:`/assets/images/portfolio.png`}
          alt="Portfolio"
          className="w-full h-auto rounded-md shadow-lg"
        />
      </div>

      {/* Text Content */}
      <div className={`w-full md:w-1/2 ${isImageRight ? "md:order-1" : ""}`}>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{data?.title}</h2>
        <p className="text-sm md:text-base leading-relaxed mb-6">
          {data?.description}
        </p>
        <button className="bg-white text-blue-900 px-6 py-2 rounded-md font-semibold hover:bg-gray-200 transition">
          Explore Now
        </button>
      </div>
    </div>
  );
}

export default PortfolioSection;
