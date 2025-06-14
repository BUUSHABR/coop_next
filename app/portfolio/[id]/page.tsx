import BackgroundLayout from "../../components/Background-layout";
import FooterSection from "../../components/Footer";
import Header from "../../components/Header-Section";
import About from "../../components/company/About";
import TopBanner from "../../components/company/TopBanner";
import ContentCard from "../../components/portfolio/Content-Card";
import PortfolioSection from "../../components/portfolio/Portfolio-Section";
import VideoBanner from "../../components/portfolio/Video-Banner";
import { getPortfolioById } from "@/services/api";

interface Props {
  params: {
    id: string;
  };
}
export default async  function Portfolio ({ params }: Props){
      const data = await getPortfolioById(params.id);
        console.log("Fetched Portfolio:", data);
    return(
      
            <div className="">
            <Header />
            <VideoBanner video_url={data?.video} banner={data.portfolio_banner} />
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
