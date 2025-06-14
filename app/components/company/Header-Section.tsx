import React,{ useState, useEffect } from "react";


const MenuIcon = () => (
    <svg
      className="text-white w-6 h-6"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16m-7 6h7"
      />
    </svg>
  );
  
  const CloseIcon = () => (
    <svg
      className="w-6 h-6 cursor-pointer"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
);



const Header : React.FC = () =>{
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const scrollToSection = (e: any, id: string) => {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        setIsSidebarOpen(false);
      };
      useEffect(() => {
        if (isSidebarOpen) {
          document.documentElement.style.overflow = "hidden";
          document.body.style.overflow = "hidden";
        } else {
          document.documentElement.style.overflow = "auto";
          document.body.style.overflow = "auto";
        }
      }, [isSidebarOpen]);


    return(
        <>
            <div className="w-full absolute transition-all duration-200 z-50 overflow-x-hidden flex justify-between items-center bg-gradient-transparent">
                <div className="py-4 pl-4 md:pl-8 lg:pl-16">
                <img
                    data-aos="fade-right"
                    className="h-[24px] lg:h-[40px] w-auto "
                    src="/assets/images/logo.png"
                    alt="Logo"
                />
                </div>

                {/* Desktop Navigation */}
                <div className="fixed top-0 right-0">
                <div className="hidden md:flex gap-12 lg:gap-16 items-center bg-gradient-to-r py-6 px-4 md:px-8 lg:px-16 rounded-bl-full from-[#3287C8] to-[#255198]">
                    {["home", "about", "we-do", "contact"].map((item) => (
                    <a
                        key={item}
                        href={`#${item}`}
                        onClick={(e) => scrollToSection(e, item)}
                    >
                        <div
                        className="text-[14px] cursor-pointer text-[#ffffff]"
                        data-aos="fade-left"
                        >
                        {item.charAt(0).toUpperCase() + item.slice(1)}
                        </div>
                    </a>
                    ))}
                </div>
                </div>

                <div
                className="md:hidden cursor-pointer"
                data-aos="fade-left"
                onClick={() => setIsSidebarOpen(true)}
                >
                <div className="pr-4">
                    <MenuIcon />
                </div>
                </div>
            </div>

            {/* Sidebar for Mobile */}
            <div
                className={`fixed top-0 z-80 right-0 h-full w-full bg-black text-white transition-transform duration-300 ${
                isSidebarOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div
                className={`${
                    isSidebarOpen ? "flex" : "hidden"
                }  items-center justify-between p-4 border-b border-gray-700`}
                >
                <img
                    data-aos="fade-right"
                    className="h-[24px] w-auto"
                    src="/assets/images/logo.png"
                    alt="Logo"
                />
                <div  className="z-20" onClick={() => setIsSidebarOpen(false)} data-aos="fade-left">
                    <CloseIcon />
                </div>
                </div>
                <div className="flex flex-col px-4">
                {["home", "about", "we-do", "contact"].map((item) => (
                    <a
                    key={item}
                    href={`#${item}`}
                    onClick={(e) => scrollToSection(e, item)}
                    >
                    <div
                        className="text-[16px] cursor-pointer text-white border-b-[1px] border-gray-700 px-4 pt-4 pb-2"
                        data-aos="fade-left"
                    >
                        {item.charAt(0).toUpperCase() + item.slice(1)}
                    </div>
                    </a>
                ))}
                </div>
            </div>
        </>
    );
};


export default Header;