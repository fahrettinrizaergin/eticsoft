import React, {useEffect} from "react";
import {Helmet} from "react-helmet-async";
import {useTranslation} from "react-i18next";
import {useLocation} from 'react-router-dom';

type LocationState = {
    tab?: number;
};

const Products: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const location = useLocation();
    let {tab} = location.state as LocationState || 0;
    if (tab === undefined) tab = 0;
    const {t} = useTranslation();
    const [activeTab, setActiveTab] = React.useState(tab);

    return (
        <>
            <Helmet>
                <title>{t("meta.products.title")}</title>
                <meta
                    name="description"
                    content={t("meta.products.description")}
                />
                <meta
                    name="keywords"
                    content={t("meta.products.keywords")}
                />
            </Helmet>
            <div className="container mx-auto p-10">
                <div className="flex flex-row flex-wrap md:flex-nowrap gap-4 w-full">
                    <div
                        onClick={() => setActiveTab(0)}
                        className={`border cursor-pointer rounded-lg p-6 w-full flex flex-row items-center gap-4 ${
                            activeTab === 0 ? "border-primary" : "border-gray-200"
                        }`}
                    >
                        <img
                            src="/src/assets/Fintech_for_Banks.webp"
                            alt={t("fintechForBanks")}
                            width={50}
                        />
                        {t("fintechForBanks")}
                    </div>
                    <div
                        onClick={() => setActiveTab(1)}
                        className={`border cursor-pointer rounded-lg p-6 w-full flex flex-row items-center gap-4 ${
                            activeTab === 1 ? "border-primary" : "border-gray-200"
                        }`}
                    >
                        <img
                            src="/src/assets/Fintech_for_Merchant.webp"
                            alt={t("fintechForMerchants")}
                            width={50}
                        />
                        {t("fintechForMerchants")}
                    </div>
                </div>
                {activeTab === 0 ? (
                    <section className="space-y-8 text-center">
                        <p className="text-lg p-4 mt-8 text-center">
                            {t("bankSolutionsDesc")}
                        </p>
                        <div className="grid grid-cols-12 gap-4">
                            <div
                                className="text-sm space-y-4 col-span-12 flex flex-col items-center md:col-span-6 lg:col-span-4 xl:col-span-4 p-2 border border-gray-200 rounded">
                                <img
                                    width={250}
                                    src="/src/assets/bpcs.webp"
                                    alt={t("bpcsTitle")}
                                />
                                <a className="text-center text-primary text-xl font-bold">
                                    {t("bpcsTitle")}
                                </a>
                                <p>{t("bpcsDesc")}</p>
                            </div>

                            <div
                                className="text-sm flex flex-col items-center space-y-4 col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-4 p-2 border border-gray-200 rounded">
                                <img
                                    width={250}
                                    src="/src/assets/pfcs.webp"
                                    alt={t("pfcsTitle")}
                                />
                                <a className="text-center text-primary text-xl font-bold">
                                    {t("pfcsTitle")}
                                </a>
                                <p>{t("pfcsDesc")}</p>
                            </div>

                            <div
                                className="text-sm flex flex-col items-center space-y-4 col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-4 p-2 border border-gray-200 rounded">
                                <img
                                    width={250}
                                    src="/src/assets/fraud.webp"
                                    alt={t("fraudTitle")}
                                />
                                <a className="text-center text-primary text-xl font-bold">
                                    {t("fraudTitle")}
                                </a>
                                <p>{t("fraudDesc")}</p>
                            </div>

                            <div
                                className="text-sm flex flex-col items-center space-y-4 col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-4 p-2 border border-gray-200 rounded">
                                <img
                                    width={250}
                                    src="/src/assets/coperation.webp"
                                    alt={t("cooperationTitle")}
                                />
                                <a className="text-center text-primary text-xl font-bold">
                                    {t("cooperationTitle")}
                                </a>
                                <p>{t("cooperationDesc")}</p>
                            </div>

                            <div
                                className="text-sm flex flex-col items-center space-y-4 col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-4 p-2 border border-gray-200 rounded">
                                <img
                                    width={250}
                                    src="/src/assets/cmd.webp"
                                    alt={t("mobileAppsTitle")}
                                />
                                <a className="text-center text-primary text-xl font-bold">
                                    {t("mobileAppsTitle")}
                                </a>
                                <p>{t("mobileAppsDesc")}</p>
                            </div>

                            <div
                                className="text-sm flex flex-col items-center space-y-4 col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-4 p-2 border border-gray-200 rounded">
                                <img
                                    width={250}
                                    src="/src/assets/consulting.webp"
                                    alt={t("consultingTitle")}
                                />
                                <a className="text-center text-primary text-xl font-bold">
                                    {t("consultingTitle")}
                                </a>
                                <p>{t("consultingDesc")}</p>
                            </div>
                        </div>
                    </section>
                ) : (
                    <section className="space-y-8 text-center">
                        <p className="text-lg p-4 mt-8 text-center">
                            {t("merchantSolutionsDesc")}
                        </p>
                        <div className="grid grid-cols-12 gap-4">
                            <div
                                className="text-sm flex flex-col items-center space-y-4 col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-4 p-2 border border-gray-200 rounded">
                                <img
                                    width={250}
                                    src="/src/assets/spp.svg"
                                    alt={t("sanalposTitle")}
                                />
                                <a className="text-center text-primary text-xl font-bold">
                                    {t("sanalposTitle")}
                                </a>
                                <p>{t("sanalposDesc")}</p>
                            </div>
                        </div>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                    </section>
                )}
            </div>
        </>
    );
};

export default Products;