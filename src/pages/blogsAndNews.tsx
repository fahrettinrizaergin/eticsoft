import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import blogJSON from "../assets/blogs/blogs.json";
import newsJSON from "../assets/news/news.json";
import docsJSON from "../assets/docs/docs.json";
import MdxComponent from "../components/mdxComponent";
import { BlogTranslations } from "../types/Blog";
import { NewsTranslations, News } from "../types/News";
import { DocTranslations, Doc } from "../types/Docs";

interface CommonItemProps {
    data: any;
    type: 'blog' | 'news' | 'doc';
}

const BlogsAndNews: React.FC = () => {
    const { id, type } = useParams();
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();

    // Detay sayfası görünümü
    if (id) {
        let data;
        let translations;
        let localizedContent;

        switch (type) {
            case 'news':
                data = newsJSON.find((item) => item.id === Number(id));
                if (!data) return <p>News not found.</p>;
                translations = data.translations as NewsTranslations;
                localizedContent = translations[i18n.language] as News;
                break;

            case 'doc':
                data = docsJSON.find((item) => item.id === Number(id));
                if (!data) return <p>Documentation not found.</p>;
                translations = data.translations as DocTranslations;
                localizedContent = translations[i18n.language] as Doc;
                break;

            default: // blog
                data = blogJSON.find((item) => item.id === Number(id));
                if (!data) return <p>Blog not found.</p>;
                translations = data.translations as BlogTranslations;
                localizedContent = translations[i18n.language];
        }

        const src = localizedContent.mdxPath;

        return (
            <>
                <Helmet>
                    <title>{localizedContent.title} - Eticsoft</title>
                    <meta name="description" content={localizedContent.description} />

                </Helmet>
                {type === 'doc' ? (
                    <div className="prose max-w-none bg-white rounded-lg shadow-md p-6">
                        <MdxComponent src={src} />
                    </div>
                ) : (
                    <MdxComponent src={src} />
                )}
            </>
        );
    }

    // Liste görünümü bileşeni
    const ContentGrid: React.FC<CommonItemProps> = ({ data, type }) => {
        const translations = data.translations as (NewsTranslations | BlogTranslations | DocTranslations);
        const localizedContent = translations[i18n.language];

        return (
            <div
                onClick={() => navigate(`/${type}/${data.id}`)}
                className="flex flex-col bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden cursor-pointer"
            >
                <div className="h-48 overflow-hidden">
                    <img
                        src={data.thumbnail}
                        alt={localizedContent.title}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="p-4 flex flex-col flex-grow">
                    <h2 className="text-lg font-semibold mb-2 hover:text-primary transition-colors duration-300">
                        {localizedContent.title}
                    </h2>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {localizedContent.description}
                    </p>
                    <div className="mt-auto flex justify-between items-center text-sm">
                        <span className="text-primary">{data.author}</span>
                        <span className="text-gray-500">{data.date}</span>
                    </div>
                </div>
            </div>
        );
    };

    // Liste görünümü
    return (
        <>
            <Helmet>
                <title>{t("meta.content.title")}</title>
                <meta name="description" content={t("meta.content.description")} />
                <meta name="keywords" content={t("meta.content.keywords")} />
            </Helmet>
            <div className="container mx-auto px-4 py-8">
                <div className="mb-12">
                    <h1 className="text-3xl italic font-bold text-center text-primary mb-8">
                        {t("news")}
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {newsJSON.map((news) => (
                            <ContentGrid key={news.id} data={news} type="news" />
                        ))}
                    </div>
                </div>

                <div className="mb-12">
                    <h1 className="text-3xl italic font-bold text-center text-primary mb-8">
                        {t("blogs")}
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {blogJSON.map((blog) => (
                            <ContentGrid key={blog.id} data={blog} type="blog" />
                        ))}
                    </div>
                </div>

                <br /><br /><br /><br /><br /><br />
            </div>
        </>
    );
};

export default BlogsAndNews;