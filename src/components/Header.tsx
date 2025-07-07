import { useRef, useState, useEffect } from "react";
import { FaMoon } from "react-icons/fa";
import { useTheme } from "@/context/ThemeContext";
import { CN, US, VN } from "country-flag-icons/react/3x2";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { ThemeColor } from "@/utils/ColorsConstant";
import { AiOutlineSun } from "react-icons/ai";
import { useLanguage } from "@/context/LanguageContext";
import type { Language } from "@/types/type";
import { useClickOutside } from "@/hooks/useClickOutside";

const Header = () => {
  const { language, changeLanguage } = useLanguage();
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const desktopLangRef = useRef<HTMLDivElement>(null);
  const mobileLangRef = useRef<HTMLDivElement>(null);

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useClickOutside(desktopLangRef, () => {
    if (!isMenuOpen) setIsLangOpen(false);
  });

  useClickOutside(mobileLangRef, () => {
    if (isMenuOpen) setIsLangOpen(false);
  });

  const renderFlag = (lang: Language) => {
    switch (lang) {
      case "vi":
        return <VN className="w-5 h-5 rounded-full" />;
      case "en":
        return <US className="w-5 h-5 rounded-full" />;
      case "zh":
        return <CN className="w-5 h-5 rounded-full" />;
    }
  };

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 px-30 transition-all duration-300 backdrop-blur-sm ${
        scrolled
          ? "bg-white/80 dark:bg-[#0f172a]/80 shadow-md border-b border-gray-200 dark:border-gray-700"
          : "bg-transparent"
      }`}
    >
      <div className="px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-8">
          <span className={`${ThemeColor.title} text-xl font-bold`}>
            {t("name")}
          </span>

          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <NavLink to="/" className={({ isActive }) => ThemeColor.navLink(isActive)}>
              {t("home")}
            </NavLink>
            <NavLink to="/projects" className={({ isActive }) => ThemeColor.navLink(isActive)}>
              {t("project")}
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => ThemeColor.navLink(isActive)}>
              {t("about")}
            </NavLink>
          </nav>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button onClick={toggleTheme} className="text-black dark:text-white text-lg cursor-pointer">
            {theme === "dark" ? <FaMoon /> : <AiOutlineSun />}
          </button>

          <div className="relative" ref={desktopLangRef}>
            <button
              type="button"
              className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium
               text-gray-900 dark:text-white bg-white dark:bg-[#1f1f3a] hover:bg-gray-100
                dark:hover:bg-gray-700 transition ring-1 ring-gray-300 ring-inset cursor-pointer"
              onClick={() => setIsLangOpen(!isLangOpen)}
            >
              {renderFlag(language)}
            </button>

            {isLangOpen && (
              <div className="absolute right-0 mt-2 min-w-[180px] rounded-md bg-white dark:bg-[#2a2a2a] shadow-lg ring-1 ring-black/10 z-50">
                <div className="py-1 space-y-1">
                  <button
                    onClick={() => changeLanguage("en")}
                    className={`${ThemeColor.buttonNormal} flex items-center gap-2 px-4 py-2 w-full hover:bg-gray-100 dark:hover:bg-gray-700 transition`}
                  >
                    <US className="w-5 h-5 rounded-full" />
                    English
                  </button>
                  <button
                    onClick={() => changeLanguage("vi")}
                    className={`${ThemeColor.buttonNormal} flex items-center gap-2 px-4 py-2 w-full hover:bg-gray-100 dark:hover:bg-gray-700 transition`}
                  >
                    <VN className="w-5 h-5 rounded-full" />
                    Tiếng Việt
                  </button>
                  <button
                    onClick={() => changeLanguage("zh")}
                    className={`${ThemeColor.buttonNormal} flex items-center gap-2 px-4 py-2 w-full hover:bg-gray-100 dark:hover:bg-gray-700 transition`}
                  >
                    <CN className="w-5 h-5 rounded-full" />
                    中文
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile menu icon */}
        <button
          className="md:hidden inline-flex justify-center items-center rounded-md px-3 py-2 text-sm font-semibold text-gray-900 dark:text-white shadow ring-1 ring-gray-300 ring-inset"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
            setIsLangOpen(false);
          }}
        >
          ☰
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {isMenuOpen && (
        <div className="w-full py-4 px-6 md:hidden space-y-4 text-left text-sm border-t border-gray-200 dark:border-gray-700">
          <nav className="flex flex-col gap-2">
            <NavLink to="/" className={({ isActive }) => ThemeColor.navLink(isActive)}>
              {t("home")}
            </NavLink>
            <NavLink to="/projects" className={({ isActive }) => ThemeColor.navLink(isActive)}>
              {t("project")}
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => ThemeColor.navLink(isActive)}>
              {t("about")}
            </NavLink>
          </nav>

          <div className="pt-2 flex items-center justify-between">
            <button onClick={toggleTheme} className="text-black dark:text-white text-lg">
              {theme === "dark" ? <FaMoon /> : <AiOutlineSun />}
            </button>

            <div className="relative" ref={mobileLangRef}>
              <button
                type="button"
                className="inline-flex justify-center items-center gap-1 rounded-md text-sm font-semibold text-gray-900 bg-white dark:text-white dark:bg-[#1f1f3a] px-3 py-2 ring-1 ring-gray-300 ring-inset"
                onClick={() => setIsLangOpen(!isLangOpen)}
              >
                {renderFlag(language)}
              </button>

              {isLangOpen && (
                <div className="absolute right-0 mt-2 min-w-[160px] bg-white dark:bg-[#2a2a2a] rounded-md shadow-lg py-2 z-50 ring-1 ring-black/5">
                  <button
                    onClick={() => changeLanguage("en")}
                    className={`${ThemeColor.buttonNormal} flex items-center gap-2 px-4 py-2 w-full hover:bg-gray-700`}
                  >
                    <US className="w-5 h-5 rounded-full" />
                    English
                  </button>
                  <button
                    onClick={() => changeLanguage("vi")}
                    className={`${ThemeColor.buttonNormal} flex items-center gap-2 px-4 py-2 w-full hover:bg-gray-700`}
                  >
                    <VN className="w-5 h-5 rounded-full" />
                    Tiếng Việt
                  </button>
                  <button
                    onClick={() => changeLanguage("zh")}
                    className={`${ThemeColor.buttonNormal} flex items-center gap-2 px-4 py-2 w-full hover:bg-gray-700`}
                  >
                    <CN className="w-5 h-5 rounded-full" />
                    中文
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
