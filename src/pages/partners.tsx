import React from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

// Ana sayfadan partner resimlerini import ediyoruz
const images = import.meta.glob("../assets/partners/*.{png,jpg,jpeg,gif,svg}", {
    eager: true,
    import: "default",
});

const partners = Object.values(images) as string[];

const Partners: React.FC = () => {
    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <title>{t("meta.partners.title")}</title>
                <meta name="description" content={t("meta.partners.description")} />
                <meta name="keywords" content={t("meta.partners.keywords")} />
            </Helmet>

            <div className="container mx-auto p-4 lg:p-10">
                <h1 className="text-4xl text-center text-primary font-bold italic mb-12">
                    {t("ourPartners")}
                </h1>

                <section className="mb-16">
                    <p className="first-letter:text-7xl first-letter:font-bold first-letter:text-primary first-letter:mr-3 first-letter:float-left mb-8">
                        {t("partners_text")}
                    </p>
                </section>

                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {partners.map((partner, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 flex items-center justify-center bg-white"
                        >
                            <img
                                src={partner}
                                alt={`Partner ${index + 1}`}
                                className="max-w-full h-auto object-contain"
                            />
                        </div>
                    ))}
                </section>
            </div>
        </>
    );
};

export default Partners;