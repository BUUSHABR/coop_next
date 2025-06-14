import React from "react";



const About : React.FC = () => {


    return(
        <>
            <div className="grid grid-cols-2 bg-[#09132D] px-[2.5rem] py-[4rem]" id="mission">  
                {/* misson master container */}
                <div className="col-span-2 md:col-span-1" data-aos={"fade-right"}>
                    {/* mission image container */}
                    <div className="p-[1rem] flex items-center h-full">
                        <img src="/assets/images/mission.png" alt="" className="" />
                    </div>
                </div>
                <div className="col-span-2 md:col-span-1 flex flex items-center" data-aos={"fade-left"}>
                    {/* mission content container */}
                    <div className="p-[1rem]">
                        <h1 className="capitalize text-[#FFFFFF] text-[2.875rem] metrophobic-400">mission</h1>
                        <p className="text-[#FFFFFF] text-[1.5rem] leading-[35px] work-sans-400">At Coop Games, our mission is to innovate and shape the future of digital entertainment and technology. By blending creativity with cutting-edge technology,
                        we create immersive gaming experiences, next-gen Web3 applications, and powerful software solutions that empower users and businesses alike. Our focus on collaboration and 
                        excellence drives us to push the boundaries of what’s possible, delivering dynamic, interactive, and user-centric products that inspire, engage, and transform.</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 bg-[#FB883D] px-[2.5rem] py-[4rem]" id="vision">  
                <div className="col-span-2 md:col-span-1 flex flex items-center" data-aos={"fade-right"}>
                    {/* vision content container */}
                    <div className="p-[1rem]">
                        <h1 className="capitalize text-[#FFFFFF] text-[2.875rem] metrophobic-400">vision</h1>
                        <p className="text-[#FFFFFF] text-[1.5rem] leading-[35px] work-sans-400">Our vision is to become a global leader in the digital world by continually advancing the fields of gaming, Web3, and software development. 
                        We strive to redefine how people interact with technology, creating ecosystems where creativity, community, and innovation thrive. Through our pioneering efforts, we aim to bridge the gap between gaming, blockchain, 
                        and digital solutions, enriching the user experience and establishing a new era of connected, decentralized digital worlds.</p>
                    </div>
                </div>
                {/* vision master container */}
                <div className="col-span-2 md:col-span-1" data-aos={"fade-left"}>
                    {/* vision image container */}
                    <div className="p-[1rem] p-[1rem] flex items-center h-full">
                        <img src="/assets/images/vision.png" alt="" className="" />
                    </div>
                </div>
            </div>        
        </>
    );
};



export default About;