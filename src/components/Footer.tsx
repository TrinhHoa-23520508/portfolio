import { ThemeColor } from "@/utils/ColorsConstant";
import { useState } from "react";

const Footer = () => {
  const [heartHover, setHeartHover] = useState(false);

  return (
    <footer className={`${ThemeColor.background} py-8`}>
      <div className="max-w-6xl mx-auto px-6 ">
       

        {/* Divider */}
        <div className="border-t border-slate-800 my-6"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-center text-slate-400 text-sm">
          <p className="mb-2 md:mb-0">
            Copyright © 2025 <span className="text-pink-500 font-semibold">Trịnh Hòa</span> vs <span className="text-white font-semibold">Elior</span>. All rights reserved.
          </p>
          <p className="flex items-center px-1">
            Made with{" "}
            <span
              className={`mx-1 cursor-pointer transition-all duration-300 ${
                heartHover ? "text-red-500 animate-pulse scale-125" : "text-pink-500"
              }`}
              onMouseEnter={() => setHeartHover(true)}
              onMouseLeave={() => setHeartHover(false)}
            >
              ♥
            </span>{" "}
            in <span className="text-yellow-400 font-semibold px-1"> VietNam</span>
          </p>
        </div>

    
      </div>
    </footer>
  );
};

export default Footer;