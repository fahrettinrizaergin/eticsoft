import Header from "../components/headerComponent";
import Footer from "../components/footerComponent";
import React from "react";
import { Outlet } from "react-router";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";



const DefaultLayout: React.FC = () => {
  const { i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(localStorage.getItem("preferredLanguage") || "en");
  }, [i18n]);
  return (
    <div>
      <Header />
      <main><Outlet /></main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
