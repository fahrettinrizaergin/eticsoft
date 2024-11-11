import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import blogJSON from "../assets/blogs/blogs.json";
import { Helmet } from "react-helmet-async";
import {BlogTranslations} from "../types/Blog.ts";

const Blogs = () => {
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();

    return (
        <>
            <Helmet>
                <title>{t("meta.blogs.title")}</title>
                <meta name="description" content={t("meta.blogs.description")} />
                <meta name="keywords" content={t("meta.blogs.keywords")} />
            </Helmet>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl italic font-bold text-center text-primary mb-8">
                    {t("blogs")}
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {blogJSON.map((blog) => {
                        const tra: BlogTranslations = blog.translations;
                        const localizedContent = tra[i18n.language];
                        return (
                            <div
                                key={blog.id}
                                onClick={() => navigate(`/blogs/${blog.id}`)}
                                className="flex flex-col bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden cursor-pointer"
                            >
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src={blog.thumbnail}
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
                                        <span className="text-primary">{blog.author}</span>
                                        <span className="text-gray-500">{blog.date}</span>
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

export default Blogs;