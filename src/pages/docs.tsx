//pages/docs.tsx
import React from "react";
import docsJSON from "../assets/docs/docs.json";
import { useNavigate } from "react-router";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { DocTranslations } from "../types/Docs";

const Docs: React.FC = () => {
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();

    return (
        <>
            <Helmet>
                <title>{t("meta.docs.title")}</title>
                <meta name="description" content={t("meta.docs.description")} />
                <meta name="keywords" content={t("meta.docs.keywords")} />
            </Helmet>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl italic font-bold text-center text-primary mb-8">
                    {t("documentation")}
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {docsJSON.map((doc) => {
                        const tra: DocTranslations = doc.translations;
                        const localizedContent = tra[i18n.language];
                        return (
                            <div
                                key={doc.id}
                                onClick={() => navigate(`/docs/${doc.id}`)}
                                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 cursor-pointer"
                            >
                                <h2 className="text-xl font-semibold mb-4 hover:text-primary transition-colors duration-300">
                                    {localizedContent.title}
                                </h2>
                                <p className="text-gray-600 mb-4 line-clamp-3">
                                    {localizedContent.description}
                                </p>
                                <div className="text-sm text-gray-500">
                                    <div className="flex flex-wrap gap-2">
                                        {localizedContent.keywords.split(',').map((keyword, index) => (
                                            <span
                                                key={index}
                                                className="bg-gray-100 px-2 py-1 rounded"
                                            >
                                                {keyword.trim()}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <br /><br /><br /><br /><br /><br />
        </>
    );
};

export default Docs;