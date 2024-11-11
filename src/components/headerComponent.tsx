import Button from "./textButtonComponent";
import logo from "../assets/logo.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('preferredLanguage', lng);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
      <>
        <header className="md:block hidden">
          <nav className="text-sm flex justify-between items-center flex-row p-4">
            <Link to="/">
              <img src={logo} width={150} alt="Eticsoft Logo" />
            </Link>
            <ul className="flex flex-row items-center gap-4">
              <li>
                <Button text={t("productsAndSolutions")} href="/products"></Button>
              </li>
              <li>
                <Button text={t("support")}>
                  <ul className="space-y-4">
                    <li className="hover:text-primary">
                      <div
                          onClick={() =>
                              (window.location.href =
                                  "https://eticsoft.com/support/submitticket.php?step=2&deptid=22")
                          }
                          className="hover:text-primary cursor-pointer p-1"
                      >
                        {t("supportPanel")}
                      </div>
                    </li>
                    <li className="hover:text-primary">
                      <Button text={t("documentation")} href="/docs"></Button>
                    </li>
                  </ul>
                </Button>
              </li>
              <li>
                <Button text={t("content")} href="/content"></Button>
              </li>
              <li>
                <Button text={t("About")}>
                  <ul className="space-y-4">
                    <li className="hover:text-primary">

                      <Button text={t("about")} href="/about"></Button>

                    </li>
                    <li className="hover:text-primary">
                      <Button text={t("partners")} href="/partners"></Button>
                    </li>
                  </ul>
                </Button>
              </li>
              <li>
                <Button text={t("contact")} href="/contact"></Button>
              </li>
            </ul>
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                <button
                    onClick={() => changeLanguage('tr')}
                    className={`px-3 py-1 rounded-md ${
                        i18n.language === 'tr'
                            ? 'bg-primary text-white'
                            : 'bg-gray-200 hover:bg-gray-300'
                    }`}
                >
                  TR
                </button>
                <button
                    onClick={() => changeLanguage('en')}
                    className={`px-3 py-1 rounded-md ${
                        i18n.language === 'en'
                            ? 'bg-primary text-white'
                            : 'bg-gray-200 hover:bg-gray-300'
                    }`}
                >
                EN
                </button>
              </div>
            </div>
          </nav>
        </header>

        {/* Mobile Header */}
        <header className="md:hidden relative bg-white">
          <div className="grid grid-cols-12 p-4 text-xs justify-between items-center">
            <button
                onClick={toggleMobileMenu}
                className="col-span-1 flex items-center"
            >
            <span className="material-symbols-outlined">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
            </button>
            <Link className="col-span-9 flex justify-center" to="/">
              <img src={logo} width={150} alt="Eticsoft Logo" />
            </Link>
            <div className="col-span-2 flex justify-end">
              <button
                  onClick={() => changeLanguage(i18n.language === 'tr' ? 'en' : 'tr')}
                  className="px-2 py-1 rounded-md bg-primary text-white text-xs"
              >
                {i18n.language === 'tr' ? 'EN' : 'TR'}
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
              <div className="absolute w-full bg-white shadow-lg z-50">
                <ul className="py-2">
                  <li className="hover:bg-gray-100">
                    <Link
                        to="/products"
                        className="block px-4 py-3 text-sm"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {t("productsAndSolutions")}
                    </Link>
                  </li>
                  <li className="hover:bg-gray-100">
                    <a
                        href="https://eticsoft.com/support/submitticket.php?step=2&deptid=22"
                        className="block px-4 py-3 text-sm"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {t("support")}
                    </a>
                  </li>
                  <li className="hover:bg-gray-100">
                    <Link
                        to="/blogs"
                        className="block px-4 py-3 text-sm"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {t("blogs")}
                    </Link>
                  </li>
                  <li className="hover:bg-gray-100">
                    <Link
                        to="/news"
                        className="block px-4 py-3 text-sm"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {t("news")}
                    </Link>
                  </li>
                  <li className="hover:bg-gray-100">
                    <Link
                        to="/about"
                        className="block px-4 py-3 text-sm"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {t("about")}
                    </Link>
                  </li>
                  <li className="hover:bg-gray-100">
                    <Link
                        to="/contact"
                        className="block px-4 py-3 text-sm"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {t("contact")}
                    </Link>
                  </li>
                </ul>
              </div>
          )}
        </header>
      </>
  );
};

export default Header;