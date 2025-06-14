import React from "react";



const TopBanner : React.FC = () => {


    return(
        <div className="">
            <div className="">
                {/* banner image container */}
                <img src="/assets/images/coop-company-banner-mobile.png" alt="company-banner-mobile" className="block md:hidden w-full"/>
                <img src="/assets/images/coop-company-banner.png" alt="company-banner-desktop" className="hidden md:block" />
            </div>
        </div>
    );
};



export default TopBanner;