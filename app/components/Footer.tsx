"use client";

import React, { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

// Footer Title component
const FooterTitle = (value: string) => (
  <div className="text-[#8c919f] text-[18px] md:text-base poppins-700 pb-4">
    {value}
  </div>
);

// Footer Text component
const FooterText: React.FC<{
  value: string;
  link?: string;
  page?: string;
}> = ({ value, link, page }) => {
  const router = useRouter();
  const pathname = usePathname(); // ✅ Get current path

  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();

    if (!link) return;

    if (page === "page") {
      const targetPath = `${link.split("#")[0]}`;

      if (pathname === targetPath) {
        // Already on the correct page, just scroll
        document.getElementById(value.toLowerCase().replace(/\s+/g, "-"))?.scrollIntoView({ behavior: "smooth" });
        } else {
        // Set scroll target and navigate
        sessionStorage.setItem("scrollTarget",value.toLowerCase().replace(/\s+/g, "-"));
        router.push(targetPath);
      }
    } else {
      if (link.startsWith("http")) {
        window.open(link, "_blank");
      } else {
        document.getElementById(link)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    const target = sessionStorage.getItem("scrollTarget");
    if (target && document.getElementById(target)) {
      document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
      sessionStorage.removeItem("scrollTarget");
    }
  }, []);

  return (
    <div
      className="text-[#8c919f] text-[15px] md:text-base poppins-500 pb-2 cursor-pointer"
      onClick={handleClick}
    >
      {value}
    </div>
  );
};

// Footer section
const FooterSection: React.FC = () => {
  return (
    <div className="bg-[#192440] py-12 px-4 md:px-8 lg:px-12 2xl:px-16 border-[0.5px] border-t-[#FB883D] flex justify-center overflow-x-hidden">
      <div className="w-full lg:w-[80%] flex flex-col md:flex-row items-center">
        {/* Logo and copyright */}
        <div className="w-full md:w-[40%]" data-aos="fade-right">
          <img
            className="h-[50px] lg:h-[60px] w-auto"
            src="/assets/images/logo.png"
            alt="logo"
          />
          <div className="poppins-500 text-[15px] lg:text-base text-[#8c919f] mt-2">
            © 2025 Coop Games, Inc.
            <br />
            All rights reserved.
          </div>
        </div>

        {/* Footer columns */}
        <div className="w-full md:w-[60%] mt-6 md:mt-0 grid grid-cols-2 md:grid-cols-3">
          {/* Quick Links */}
          <div data-aos="fade-left">
            {FooterTitle("Quick Links")}
            <FooterText value="Home" link="/" page="page" />
            <FooterText value="About" link="/" page="page" />
            <FooterText value="We Do" link="/" page="page" />
            <FooterText value="Contact" link="/" page="page" />
          </div>

          {/* Company */}
          <div className="flex justify-center">
            <div data-aos="fade-left">
              {FooterTitle("Company")}
              <FooterText value="Mission" link="/company" page="page" />
              <FooterText value="Vision" link="/company" page="page" />
              <FooterText value="Portfolio" link="/company" page="page" />
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-start md:justify-end mt-6 md:mt-0">
            <div data-aos="fade-left">
              {FooterTitle("Follow Us")}
              <FooterText
                value="Twitter"
                link="https://x.com/coopgames_dev?s=21"
              />
              <FooterText
                value="Instagram"
                link="https://www.instagram.com/coopgames.dev?igsh=dWlzenRwdW4wZzE2&utm_source=qr"
              />
              <FooterText
                value="LinkedIn"
                link="https://www.linkedin.com/company/coop-games/"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
