import React from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import newsJSON from "../assets/news/news.json";
import MdxComponent from "../components/mdxComponent";
import { Helmet } from "react-helmet-async";
import {NewsTranslations, News} from "../types/News.ts";

const NewsDetail: React.FC = () => {
  const { id } = useParams();
  const { i18n } = useTranslation();
  const news = newsJSON.find((news) => news.id === Number(id));

  if (!news) {
    return <p>News not found.</p>;
  }
  const tra: NewsTranslations = news.translations;
  const localizedContent: News  = tra[i18n.language];
  const src:string = localizedContent.mdxPath;

  return (
      <>
        <Helmet>
          <title>{localizedContent.title} - Eticsoft</title>
          <meta name="description" content={localizedContent.description} />
        </Helmet>
        <MdxComponent src={src} />
      </>
  );
};

export default NewsDetail;