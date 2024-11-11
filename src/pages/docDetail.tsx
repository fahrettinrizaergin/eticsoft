// pages/DocDetail.tsx

import React from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import docsJSON from "../assets/docs/docs.json";
import MdxComponent from "../components/mdxComponent";
import { Helmet } from "react-helmet-async";
import { DocTranslations, Doc } from "../types/Docs";

const DocDetail: React.FC = () => {
    const { id } = useParams();
    const { i18n } = useTranslation();
    const doc    = docsJSON.find((doc) => doc.id === Number(id));

    if (!doc) {
        return <p>Documentation not found.</p>;
    }

    const tra: DocTranslations = doc.translations;
    const localizedContent: Doc = tra[i18n.language];
    const src: string = localizedContent.mdxPath;

    return (
        <>
            <Helmet>
                <title>{localizedContent.title} - Eticsoft</title>
                <meta name="description" content={localizedContent.description} />
                <meta name="keywords" content={localizedContent.keywords} />
            </Helmet>
            <div className="prose max-w-none bg-white rounded-lg shadow-md p-6">

                <MdxComponent src={src} />
            </div>
        </>
    );
};

export default DocDetail;