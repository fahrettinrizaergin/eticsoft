import React from "react";
import { useTranslation } from "react-i18next";

const NotFound: React.FC = () => {
    const { t, i18n } = useTranslation();
    const lang = localStorage.getItem("preferredLanguage");
    if (lang) {
        i18n.changeLanguage(lang);
    }
   
  return (
    <div className="h-screen flex items-center justify-center">
        <h1 className="text-5xl text-slate-400">{ t('404') }</h1>
    </div>
  );
};

export default NotFound;