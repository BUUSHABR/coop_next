'use client'
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import BackgroundLayout from "../../components/Background-layout";
import FooterSection from "../../components/Footer";
import Header from "../../components/Header-Section";
import About from "../../components/company/About";
import TopBanner from "../../components/company/TopBanner";
import ContentCard from "../../components/portfolio/Content-Card";
import PortfolioSection from "../../components/portfolio/Portfolio-Section";
import VideoBanner from "../../components/portfolio/Video-Banner";
import { getPortfolioById } from "@/services/api";
import type {  Portfolio as PortfolioType } from "@/services/api";


export default function PortfolioPage() {
   const { id } = useParams();
  const [data,setData]=useState<PortfolioType>()

  useEffect(()=>{
         const fetchData = async () => {
      try {
        if (typeof id === "string") {
        const pdata = await getPortfolioById(id);
        if (pdata) {
          setData(pdata);
          console.log("Fetched Portfolio:", data);
        }
      }
      } catch (error) {
        console.error("Error fetching portfolio:", error);
      }
    };

    fetchData();
  },[])
     
    return(
            <div className="">
            <Header />
            <VideoBanner video_url={data?.video} banner={data?.portfolio_banner} />
            <ContentCard />
           {Array.isArray(data?.itineraries) && data.itineraries.length > 0 && (
        <>
          {data.itineraries.map((item, index) => (
            <PortfolioSection
              key={index}
              data={item}
              imagePosition={index % 2 === 1 ? "right" : "left"}
            />
          ))}
        </>
      )}

             <FooterSection/>

        </div>
    )
}
