import React from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import blogJSON from "../assets/blogs/blogs.json";
import MdxComponent from "../components/mdxComponent";
import { Helmet } from "react-helmet-async";
import {BlogTranslations} from "../types/Blog.ts";


const Blog: React.FC = () => {
    const { id } = useParams();
    const { i18n } = useTranslation();
    const blog = blogJSON.find((blog) => blog.id === Number(id));

    if (!blog) {
        return <div>Blog not found</div>;
    }
    const tra: BlogTranslations = blog.translations;
    const localizedContent = tra[i18n.language];
    const src:string = localizedContent.mdxPath;

    return (
        <>
            <Helmet>
                <title>{localizedContent.title} - Eticsoft</title>
                <meta name="description" content={localizedContent.description} />
                <meta name="keywords" content={localizedContent.keywords} />
            </Helmet>
            <MdxComponent src={src} />
        </>
    );
};

export default Blog;