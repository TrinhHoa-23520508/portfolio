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
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 backdrop-blur-sm ${scrolled
          ? "bg-white/90 dark:bg-[#0f172a]/90 shadow-lg border-b border-gray-200/50 dark:border-gray-700/50"
          : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink to="/">
              <span className={`${ThemeColor.title} text-xl sm:text-2xl font-bold`}>
                {t("name")}
              </span>
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              <NavLink to="/" className={({ isActive }) => ThemeColor.navLink(isActive)}>
                {t("home")}
              </NavLink>
              <NavLink to="/projects" className={({ isActive }) => ThemeColor.navLink(isActive)}>
                {t("project")}
              </NavLink>
              <NavLink to="/about" className={({ isActive }) => ThemeColor.navLink(isActive)}>
                {t("about")}
              </NavLink>
            </div>

            {/* Desktop Controls */}
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                {theme === "dark" ?
                  <FaMoon className="w-5 h-5 text-gray-600 dark:text-gray-300" /> :
                  <AiOutlineSun className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                }
              </button>

              <div className="relative" ref={desktopLangRef}>
                <button
                  type="button"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full  hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 shadow-sm ring-1 ring-gray-200 dark:ring-gray-700"
                  onClick={() => setIsLangOpen(!isLangOpen)}
                >
                  {renderFlag(language)}
                </button>

                {isLangOpen && (
                  <div className="absolute right-0 mt-2 w-48 rounded-xl shadow-lg  ">
                    <div className="py-2">
                      <button
                        onClick={() => {
                          changeLanguage("en");
                          setIsLangOpen(false);
                        }}
                        className={`${ThemeColor.buttonNormal} flex items-center gap-3 px-4 py-3 w-full text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200`}
                      >
                        <US className="w-5 h-5 rounded-full flex-shrink-0" />
                        <span className="text-sm font-medium">English</span>
                      </button>
                      <button
                        onClick={() => {
                          changeLanguage("vi");
                          setIsLangOpen(false);
                        }}
                        className={`${ThemeColor.buttonNormal} flex items-center gap-3 px-4 py-3 w-full text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200`}
                      >
                        <VN className="w-5 h-5 rounded-full flex-shrink-0" />
                        <span className="text-sm font-medium">Tiếng Việt</span>
                      </button>
                      <button
                        onClick={() => {
                          changeLanguage("zh");
                          setIsLangOpen(false);
                        }}
                        className={`${ThemeColor.buttonNormal} flex items-center gap-3 px-4 py-3 w-full text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200`}
                      >
                        <CN className="w-5 h-5 rounded-full flex-shrink-0" />
                        <span className="text-sm font-medium">中文</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              {theme === "dark" ?
                <FaMoon className="w-5 h-5 text-gray-600 dark:text-gray-300" /> :
                <AiOutlineSun className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              }
            </button>

            <button
              className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 shadow-sm ring-1 ring-gray-200 dark:ring-gray-700"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
                setIsLangOpen(false);
              }}
            >
              <svg
                className={`w-5 h-5 text-gray-600 dark:text-gray-300 transition-transform duration-200 ${isMenuOpen ? 'rotate-90' : ''
                  }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
            <nav className="space-y-2">
              <NavLink
                to="/"
                className={({ isActive }) => `${ThemeColor.navLink(isActive)} block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t("home")}
              </NavLink>
              <NavLink
                to="/projects"
                className={({ isActive }) => `${ThemeColor.navLink(isActive)} block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t("project")}
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) => `${ThemeColor.navLink(isActive)} block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t("about")}
              </NavLink>
            </nav>

            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {t("language") || "Language"}
                </span>

                <div className="relative" ref={mobileLangRef}>
                  <button
                    type="button"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 ring-1 ring-gray-200 dark:ring-gray-600"
                    onClick={() => setIsLangOpen(!isLangOpen)}
                  >
                    {renderFlag(language)}
                  </button>

                  {isLangOpen && (
                    <div className="absolute right-0 mt-2 w-44 rounded-xl shadow-lg z-50">
                      <div className="py-2">
                        <button
                          onClick={() => {
                            changeLanguage("en");
                            setIsLangOpen(false);
                          }}
                          className={`${ThemeColor.buttonNormal} flex items-center gap-3 px-4 py-3 w-full text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200`}
                        >
                          <US className="w-5 h-5 rounded-full flex-shrink-0" />
                          <span className="text-sm font-medium">English</span>
                        </button>
                        <button
                          onClick={() => {
                            changeLanguage("vi");
                            setIsLangOpen(false);
                          }}
                          className={`${ThemeColor.buttonNormal} flex items-center gap-3 px-4 py-3 w-full text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200`}
                        >
                          <VN className="w-5 h-5 rounded-full flex-shrink-0" />
                          <span className="text-sm font-medium">Tiếng Việt</span>
                        </button>
                        <button
                          onClick={() => {
                            changeLanguage("zh");
                            setIsLangOpen(false);
                          }}
                          className={`${ThemeColor.buttonNormal} flex items-center gap-3 px-4 py-3 w-full text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200`}
                        >
                          <CN className="w-5 h-5 rounded-full flex-shrink-0" />
                          <span className="text-sm font-medium">中文</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;