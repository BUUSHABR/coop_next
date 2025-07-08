import React, { useState } from "react";
import Card from "./Card";
import { Portfolio as PortfolioType } from "@/services/api";

interface Props {
  data: PortfolioType[];
}

const categories = ["All", "Games", "AR/VR", "Web3", "Apps"];

const Portfolio: React.FC<Props> = ({ data }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredData =
    selectedCategory === "All"
      ? data
      : data.filter((item) => item.category === selectedCategory);

  return (
    <div className="bg-[#09132D] px-[2.5rem] py-[4rem]">
      {/* Banner Section */}
      <div className="grid grid-cols-2 gap-[1rem]">
        <div className="col-span-2 md:col-span-1" data-aos="fade-right">
          <div className="flex items-center h-full">
            <img src="/assets/images/portfolio.png" alt="" />
          </div>
        </div>
        <div className="col-span-2 md:col-span-1 flex items-center" data-aos="fade-left">
          <div>
            <h1 className="capitalize text-[#FFFFFF] text-[2.875rem] metrophobic-400">Portfolio</h1>
            <p className="text-[#FFFFFF] text-[1.5rem] leading-[35px] work-sans-400">
              At Coop Games, we take pride in our diverse portfolio that showcases our expertise across various platforms and technologies.
              Whether it’s building captivating games, developing seamless Web3 applications, or crafting robust software solutions,
              we deliver excellence with every project. Below are some highlights of our past work:
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-10 mt-10 justify-center">
        {categories && categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`relative text-lg transition-all duration-300 hover:text-[#FB883D] focus:outline-none ${selectedCategory === category ? " text-[#FB883D] font-semibold" : "text-white opacity-70"
              }`}
          >
            {category}
            <span
              className={`absolute left-0 bottom-[-4px] h-[2px] w-full transition-all duration-300 ${selectedCategory === category ? "  bg-[#FB883D] opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                }`}
            />
          </button>
        ))}
      </div>


      {/* Portfolio Items */}
      <div className="mt-[4rem]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredData.length > 0 ? (
            filteredData.map((item) => <Card key={item._id} item={item} />)
          ) : (
            <div className="col-span-3 flex justify-center items-center py-10">
              <p className="text-[#FB883D] text-lg font-semibold text-center">
                No projects found in this category.
              </p>
            </div>)}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
