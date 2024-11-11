import React from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
      <>
        <Helmet>
          <title>{t("About")}</title>
          <meta
              name="description"
              content=""
          />
          <meta name="keywords" content="Eticsoft, About Eticsoft, Fintech" />
        </Helmet>
        <div className="container mx-auto p-4 px-12 space-y-4 lg:p-10">
          <h1 className="text-4xl text-center text-primary font-bold italic">
            {t("About")}
          </h1>
          <section>
            <h2 className="text-3xl my-12 text-primary font-semibold">
              {t("Company Information")}
            </h2>
            <p>
              {t("Company Name")}
              <strong className="font-semibold">
                {" "}
                EticSoft Bilgi Teknolojileri A.Ş.
              </strong>
              <br />
              R&D Lab (Turkey) +90 (850) 885 10 07
              <br />
              Address Akdeniz University Campus TEKNOKENT ArGe-1 Build F1 5/C,
              Antalya – TURKEY
            </p>
          </section>
          <section>
            <h2 className="text-3xl my-12 text-primary font-semibold">
              {t("Company Information")}
            </h2>
            <p>
              {t("company_description")}
              <br />
              {t("founder_info")}
              <br />
              {t("company_info")}
            </p>
          </section>
          <section>
            <h2 className="text-3xl my-12 text-primary font-semibold">
              {t("Facilities")}
            </h2>
            <p>{t("facilities_text")}</p>
          </section>
          <section>
            <h2 className="text-3xl my-12 text-primary font-semibold">
              {t("Policy and Procedures")}
            </h2>
            <p>{t("policy_text")}</p>
          </section>
        </div>
      </>
  );
};

export default About;