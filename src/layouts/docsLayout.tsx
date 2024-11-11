// DocsLayout.tsx

import { Outlet } from "react-router";

import Footer from "../components/footerComponent";
import { DocsSidebar } from "../components/DocsSidebar";
import docsData from "../assets/docs/docs.json";
import {DocTranslations} from '../types/Docs';
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const docs = docsData as unknown as { id: number; translations: DocTranslations }[];


const DocsLayout = () => {
    const { i18n } = useTranslation();
    useEffect(() => {
        i18n.changeLanguage(localStorage.getItem("preferredLanguage") || "en");
      }, [i18n]);
    return (
        <div className="min-h-screen flex flex-col">

            <div className="flex-1 flex">
                <DocsSidebar documents={docs} />
                <main className="flex-1">
                    <Outlet />
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default DocsLayout;