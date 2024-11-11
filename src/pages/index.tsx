import Button from "../components/buttonComponent";
import CardComponent from "../components/cardComponent";
import blogJSON from "../assets/blogs/blogs.json";
import newsJSON from "../assets/news/news.json";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import ImageCarousel from "../components/carouselComponent";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

const images = import.meta.glob("../assets/partners/*.{png,jpg,jpeg,gif,svg}", {
  eager: true,
  import: "default",
});

const partners = Object.values(images) as string[];

const latestBlogs = blogJSON
  .sort((a, b) => {
    const dateA = new Date(a.date.split("/").reverse().join("-"));
    const dateB = new Date(b.date.split("/").reverse().join("-"));
    return dateA < dateB ? 1 : -1;
  })
  .slice(0, 4);

const latestNews = newsJSON
  .sort((a, b) => {
    const dateA = new Date(a.date.split("/").reverse().join("-"));
    const dateB = new Date(b.date.split("/").reverse().join("-"));
    return dateA < dateB ? 1 : -1;
  })
  .slice(0, 4);

const Index: React.FC = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
   
  const currentLanguage = i18n.language;

  return (
    <>
      <Helmet>
        <title>{t("meta.home.title")}</title>
        <meta name="description" content={t("meta.home.description")} />
        <meta name="keywords" content={t("meta.home.keywords")} />
      </Helmet>
      <section className="flex items-center w-full h-[60vh] text-center landing-banner">
        <div className="w-full lg:w-1/2 lg:px-10 px-4 mx-auto">
          <h1 className="lg:text-6xl text-4xl font-bold">{t("motto")}</h1>
          <p className="font-normal text-sm mt-10">{t("mottoDescription")}</p>
          <div className="mt-10">
            <button
              className="hover:text-white rounded-full p-2 px-4 bg-primary"
              onClick={() => window.scrollTo({ top: 760, behavior: "smooth" })}
            >
              {t("getStarted")}
            </button>
          </div>
        </div>
      </section>

      <section className="text-center mt-6">
        <h2 className="text-3xl font-bold italic mb-6">{t("ourPartners")}</h2>
        <ImageCarousel images={partners} />
      </section>

      <section
        id="solutions"
        className="container mx-auto p-4 lg:p-10 space-y-10 h-fit"
      >
        <div className="h-full border border-gray-200 rounded-r-lg flex items-center">
          <img
            src="/src/assets/Fintech_for_Merchant.webp"
            alt={t("fintechForMerchants")}
            className="max-h-72 h-full hidden md:block"
          />
          <article className="p-4 text-center space-y-4">
            <h3 className="font-bold text-2xl text-center mb-2">
              {t("fintechForMerchants")}
            </h3>
            <p>{t("merchantSolutionsDesc")}</p>
            <Button
              outline
              onClick={() => navigate("products",{ state: { tab: 1 } })}
              text={t("learnMore")}
            />
          </article>
        </div>

        <div className="h-full border border-gray-200 rounded-l-lg flex items-center justify-between">
          <article className="p-4 space-y-4 text-center">
            <h3 className="font-bold text-2xl text-center">
              {t("fintechForBanks")}
            </h3>
            <p>{t("bankSolutionsDesc")}</p>
            <Button
              outline
              onClick={() => navigate("products",{ state: { tab: 0 } })}
              text={t("learnMore")}
            />
          </article>
          <img
            src="/src/assets/Fintech_for_Banks.webp"
            alt={t("fintechForBanks")}
            className="max-h-72 h-full hidden md:block"
          />
        </div>
      </section>

      <section className="container flex flex-row flex-wrap md:flex-nowrap items-center gap-2 justify-center mx-auto p-4 lg:p-10">
        <CardComponent
          title={t("fastSupport")}
          description={t("fastSupportDesc")}
          icon="bi bi-chat-left-text"
        />
        <div className="flex flex-row flex-wrap md:flex-col justify-center items-center gap-2">
          <CardComponent
            title={t("experience")}
            description={t("experienceDesc")}
            icon="bi bi-award"
          />
          <CardComponent
            title={t("fastDevelopment")}
            description={t("fastDevelopmentDesc")}
            icon="bi bi-speedometer2"
          />
        </div>
        <CardComponent
          title={t("customerSatisfaction")}
          description={t("customerSatisfactionDesc")}
          icon="bi bi-emoji-smile"
        />
      </section>

      <section className="container mx-auto p-4 lg:p-10">
        <h3
          onClick={() => navigate("/blogs")}
          className="font-bold text-primary italic text-2xl text-center cursor-pointer hover:underline"
        >
          {t("latestBlogs")}
        </h3>
        <div className="grid grid-cols-12 gap-2">
          {latestBlogs.map((blog: any) => (
            <div
              onClick={() => navigate(`/blogs/${blog.id}`)}
              key={blog.id}
              className="text-sm flex flex-col justify-between relative cursor-pointer space-y-4 col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 p-2 border border-gray-200 rounded"
            >
              <div className="flex items-center h-72">
                <img
                  className=""
                  src={blog.thumbnail}
                  alt={blog.translations[currentLanguage].title}
                />
              </div>
              <a
                href={`/blogs/${blog.id}`}
                className="text-center font-bold hover:underline cursor-pointer"
              >
                {blog.translations[currentLanguage].title}
              </a>
              <p>{blog.translations[currentLanguage].description}</p>
              <div className="flex flex-row my-auto justify-between items-center">
                <div className="text-primary">{blog.author}</div>
                <div className="text-xs text-gray-500">{blog.date}</div>
              </div>
            </div>
          ))}
        </div>
        <Link
          to="/blogs"
          className="font-bold hover:underline text-primary text-end p-2 flex justify-end"
        >
          {t("viewAllBlogs")}
        </Link>
      </section>

      <section className="container mx-auto p-4 lg:p-10">
        <h3
          onClick={() => navigate("/news")}
          className="font-bold text-primary italic text-2xl text-center cursor-pointer hover:underline"
        >
          {t("latestNews")}
        </h3>
        <div className="grid grid-cols-12 gap-2">
          {latestNews.map((news: any) => (
            <div
              onClick={() => navigate(`/news/${news.id}`)}
              key={news.id}
              className="text-sm flex flex-col justify-between cursor-pointer space-y-4 col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 p-2 border border-gray-200 rounded"
            >
              <div className="flex items-center justify-center h-72">
                <img
                  className="object-cover h-full"
                  src={news.thumbnail}
                  alt={news.translations[currentLanguage].title}
                />
              </div>
              <a
                href={`/news/${news.id}`}
                className="text-center font-bold hover:underline cursor-pointer"
              >
                {news.translations[currentLanguage].title}
              </a>
              <p>{news.translations[currentLanguage].description}</p>
              <div className="flex flex-row justify-between items-center">
                <div className="text-primary">{news.author}</div>
                <div className="text-xs text-gray-500">{news.date}</div>
              </div>
            </div>
          ))}
        </div>
        <Link
          to="/news"
          className="font-bold hover:underline text-primary text-end p-2 flex justify-end"
        >
          {t("viewAllNews")}
        </Link>
      </section>
    </>
  );
};

export default Index;
