
import { useState } from "react";

const Footer = () => {
  const [heartHover, setHeartHover] = useState(false);

  return (
    <footer className={`py-8`}>
      <div className="mx-30 ">
        {/* Divider */}
        <div className="border-t border-slate-800 my-6"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-center text-black dark:text-white text-sm">
          <p className="mb-2 md:mb-0">
            Copyright © 2025 <span className="dark:text-pink-500 font-semibold">Trịnh Hòa</span> vs <span className="dark:text-pink-500 font-semibold">Elior</span>. All rights reserved.
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
            in <span className="dark:text-pink-500 font-semibold px-1"> VietNam</span>
          </p>
        </div>

    
      </div>
    </footer>
  );
};

export default Footer;