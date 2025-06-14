'use client'
import { useState, useEffect } from "react";
import FooterSection from "../components/Footer";
import TopBanner from "../components/TopBanner";
import AOS from "aos";
import "aos/dist/aos.css";
import Card from "../components/Card-Section";
import Future from "../components/Future-Section";
import Header from "../components/Header-Section";
import WhyChoose from "../components/Why-Choose";
import ContactUs from "../components/Contact-Us";
function HomePage() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1500, once: true });

    const handleScroll = () => {
      const topBannerHeight =
        document.getElementById("top-banner")?.offsetHeight || 0;
      if (window.scrollY > topBannerHeight) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <Header />
      <div id="top-banner">
        <TopBanner />
      </div>
      <Card />
      <Future />
      <WhyChoose />
      <ContactUs />
      <FooterSection />
      
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 cursor-pointer transition hover:scale-110"
        >
          <img className="h-12" src="/assets/images/scroll-to-top.webp" alt="" />
        </button>
      )}
    </div>
  );
}

export default HomePage;
