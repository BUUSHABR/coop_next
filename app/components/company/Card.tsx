import React from "react";
import { Portfolio as PortfolioType } from "@/services/api";

interface Props {
    item: PortfolioType;
}

const button = (url: string) => {
    console.log(url)
    return (
        <a href={url} className="w-fit capitalize text-[1.25rem] work-sans-400 bg-[#FCB545] text-[#8C623E] px-[1rem] py-[0.5rem] rounded-[30px]">read more</a>
    );
};

const Card: React.FC<Props> = ({ item }) => {
    const ASSETS_BASE_URL = "https://api.coopgames.in/";
    console.log(item)
    return (
        <div className="col-span-3 md:col-span-1 gap-2 bg-[#243359] rounded-[1.5rem]" data-aos="zoom-in">
            <div className="h-[14rem] px-[1.5rem] py-[1rem]">
                {/* card image container */}
                <img src={
                    item.portfolio_banner
                        ? `${ASSETS_BASE_URL}${item.portfolio_banner}`
                        : "/assets/images/game-development.webp"
                } alt="" className="w-full h-full object-fill rounded-[15px]" />
            </div>
            <div className="px-[1rem]">
                {/* card content container */}
                <h1 className="text-center text-[#FB883D] metrophobic-400 text-[1.5rem] md:text-[2rem] xl:text-[2.5rem]">{item.title}</h1>
                <p className="text-center text-[#FFFFFF] work-sans-400 text-[1.5rem] my-[1rem] leading-[35px]">{item?.description}</p>
            </div>
            <div className="pb-[1rem] flex justify-center">
                {button(`/portfolio/${item._id}`)}
            </div>
        </div>
    );
};



export default Card;