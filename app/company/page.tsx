'use client';

import { useState, useEffect } from "react";
import Header from "../components/company/Header-Section";
import TopBanner from "../components/company/TopBanner";
import About from "../components/company/About";
import Portfolio from "../components/company/Portfolio";
import FooterSection from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

import { getAllPortfolios, Portfolio as PortfolioType } from "@/services/api";
import { Console } from "console";

function Home() {
  const [showScroll, setShowScroll] = useState(false);
  const [portfolios, setPortfolios] = useState<PortfolioType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1500, once: true });

    const handleScroll = () => {
      const topBannerHeight =
        document.getElementById("top-banner")?.offsetHeight || 0;
      setShowScroll(window.scrollY > topBannerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    getAllPortfolios()
      .then((data) => setPortfolios(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
    return(
        <div className="">
            <Header />
           
                <TopBanner />
            <About />
            <div className="" id="portfolio">
            <Portfolio data={portfolios} />
            </div>
            <FooterSection />
        </div>
    )
};

export default Home;