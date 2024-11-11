import logo from "../assets/logo.png";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
      <footer className="w-full bg-gray-200 border border-t border-t-slate-300 border-x-0 border-b-0">
        <div className="space-y-4 p-10">
          <img src={logo} width={150} alt="Eticsoft Logo" />
          <div className="flex flex-row gap-1">
            <a
                href="https://www.instagram.com/eticsoft/"
                target="_blank"
                className="rounded cursor-pointer hover:bg-primary px-2 p-1 bg-white"
            >
              <i className="bi bi-instagram text-2xl"></i>
            </a>
            <a
                href="https://www.linkedin.com/company/17928382/"
                target="_blank"
                className="rounded cursor-pointer hover:bg-primary px-2 p-1 bg-white"
            >
              <i className="bi text-2xl bi-linkedin"></i>
            </a>
            <a
                href="https://www.facebook.com/EticSoft"
                target="_blank"
                className="rounded cursor-pointer hover:bg-primary px-2 p-1 bg-white"
            >
              <i className="bi text-2xl bi-facebook"></i>
            </a>
            <a
                href="https://github.com/eticsoft"
                target="_blank"
                className="rounded cursor-pointer hover:bg-primary px-2 p-1 bg-white"
            >
              <i className="bi text-2xl bi-github"></i>
            </a>
            <a
                href="https://x.com/eticsoft"
                target="_blank"
                className="rounded cursor-pointer hover:bg-primary px-2 p-1 bg-white"
            >
              <i className="bi text-2xl bi-twitter-x"></i>
            </a>
          </div>
          <div>
            <div>
              {t('contactEmail')} - {t('contactPhone')}
              <br />
              {t('companyAddress')}
            </div>
          </div>
        </div>
        <div className="text-center bg-gray-300 p-2">
          © {year} Eticsoft Information Tech. - {t('companyServices')}
        </div>
      </footer>
  );
};

export default Footer;