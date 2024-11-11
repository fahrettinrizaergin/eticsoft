import React from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("meta.contact.title")}</title>
        <meta name="description" content={t("meta.contact.description")} />
        <meta name="keywords" content={t("meta.contact.keywords")} />
      </Helmet>
      <div className="container mx-auto p-4 px-12 space-y-4 lg:p-10">
        <h1 className="text-4xl text-center text-primary font-bold italic">
          {t("Contact Information")}
        </h1>
        <section>
          <h2 className="text-3xl my-12 text-primary font-semibold">
            {t("Address")}
          </h2>
          <p className="first-letter:text-7xl first-letter:font-bold first-letter:text-primary first-letter:mr-3 first-letter:float-left">
            {t("office_address")}
            <br />
            <strong>{t("email")}</strong> info[at]eticsoft.com
            <br />
            <strong>{t("call")}</strong>{" "}
            <a href="tel:08508851007">+90 (850) 885 10 07</a>
            <br />
            <br />
            <em>
              {t("attention_note")} <br />
              {t("visit_requirements")} <br />
              {t("security_note")}
            </em>
          </p>
        </section>
        <section>
          <h2 className="text-3xl my-12 text-primary font-semibold">
            {t("Contact Us")}
          </h2>
          <p>
            <a
              className="text-white rounded bg-primary p-4"
              href="mailto:info@eticsoft.com"
            >
              {t("Send email to us")}
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-3xl my-12 text-primary font-semibold">
            {t("Support Panel")}
          </h2>
          <p>
            {t("support_panel_text")}{" "}
            <strong>
              <a
                className="underline text-blue-600 cursor-pointer"
                href="https://eticsoft.com/support/submitticket.php?step=2&deptid=22"
              >
                {t("Support Panel")}
              </a>
            </strong>
          </p>
        </section>
        <section>
          <h2 className="text-3xl my-12 text-primary font-semibold">
            {t("Bank Account Information")}
          </h2>
          <p>
            <strong>{t("turkish_lira")}</strong>
            <br />
            <strong>{t("bank")}</strong> FinansBank Enpara Şirketim
            <br />
            <strong>{t("account_holder")}</strong> Mahmut GÜLERCE
            <br />
            <strong>{t("iban")}</strong> TR92 0011 1000 0000 0066 5690 79
          </p>
          <p>
            <br />
            <strong>USD($)</strong>
            <br />
            <strong>{t("bank")}</strong> FinansBank (Enpara Şirketim)
            <br />
            <strong>{t("account_holder")}</strong> Mahmut GÜLERCE
            <br />
            <strong>{t("iban")}</strong> TR09 0011 1000 0000 0043 7924 51
            <br />
            <strong>{t("swift")}</strong> FNNBTRISXXX
          </p>
          <p>
            <br />
            <strong>EUR(€)</strong>
            <br />
            <strong>{t("bank")}</strong> FinansBank (Enpara Şirketim)
            <br />
            <strong>{t("account_holder")}</strong> Mahmut GÜLERCE
            <br />
            <strong>{t("iban")}</strong> TR05 0011 1000 0000 0043 7924 26
            <br />
            <strong>{t("swift")}</strong> FNNBTRISXXX
          </p>
        </section>
      </div>
    </>
  );
};

export default Contact;
