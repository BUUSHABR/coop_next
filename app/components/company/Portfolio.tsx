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

      {/* Category Filter Pills */}
      <div className="flex flex-wrap gap-20 mt-10 justify-center">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full border transition duration-300 ${
              selectedCategory === category
                ? "bg-white text-[#09132D] font-semibold"
                : "bg-transparent border-white text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Portfolio Items */}
      <div className="mt-[4rem]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredData.length > 0 ? (
            filteredData.map((item) => <Card key={item._id} item={item} />)
          ) : (
            <p className="text-white col-span-3">No projects found in this category.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
