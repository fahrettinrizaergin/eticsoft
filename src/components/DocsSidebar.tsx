import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { DocTranslations } from '../types/Docs';
import { changeLanguage } from "i18next";

interface CategoryDocs {
    [key: string]: Array<{
        id: number;
        translations: DocTranslations;
    }>;
}

interface Props {
    documents: Array<{
        id: number;
        translations: DocTranslations;
    }>;
    isHeaderMenuOpen?: boolean;
}

type LanguageCode = 'en' | 'tr';

type CategoryTitles = {
    [K in string]: {
        [L in LanguageCode]: string;
    };
};

export const DocsSidebar: React.FC<Props> = ({ documents, isHeaderMenuOpen }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const { t, i18n } = useTranslation();
    const [openCategories, setOpenCategories] = useState<string[]>(['management-policies']);
    const [isCompact, setIsCompact] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        if (isHeaderMenuOpen) {
            setIsCompact(true);
        }
    }, [isHeaderMenuOpen]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsVisible(true);
                setIsCompact(false);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const MANAGEMENT_DOCS = [
        'EticSoft Bilgi Güvenliği Politikası',
        'EticSoft İş Sürekliliği Politikası',
        'Olağanüstü Durum Plan ve Politikası',
        'İnsan Kaynakları Politikası'
    ];

    const headerLinks = [
        { text: t("home"), path: "/" },
        { text: t("productsAndSolutions"), path: "/products" },
        { text: t("blogs"), path: "/blogs" },
        { text: t("news"), path: "/news" },
        { text: t("about"), path: "/about" },
        { text: t("contact"), path: "/contact" }
    ];

    const categoryTitles: CategoryTitles = {
        'management-policies': {
            en: 'Management Policies',
            tr: 'Yönetim Politikaları'
        },
        'general-security-procedures': {
            en: 'General Security Procedures',
            tr: 'Genel Bilgi Güvenliği '
        },
        'cooperation-procedures': {
            en: 'Cooperation Procedures',
            tr: 'İşbirliği Prosedürleri'
        }
    };

    const categorizeSingleDocument = (doc: { translations: DocTranslations }) => {
        const title = doc.translations['tr'].title;
        if (MANAGEMENT_DOCS.some(d => title.toLowerCase() === d.toLowerCase())) {
            return 'management-policies';
        }
        return title.includes('SanalPOS PRO!') ? 'cooperation-procedures' : 'general-security-procedures';
    };

    const categorizedDocs: CategoryDocs = documents.reduce((acc: CategoryDocs, doc) => {
        const category = categorizeSingleDocument(doc);
        if (!acc[category]) acc[category] = [];
        acc[category].push(doc);
        return acc;
    }, {});

    const getCategoryTitle = (category: string): string => {
        const languageCode = i18n.language as LanguageCode;
        return categoryTitles[category]?.[languageCode] || category;
    };

    const handleDocumentClick = (docId: number) => {
        navigate(`/docs/${docId}`);
        if (window.innerWidth < 768) {
            setIsVisible(false);
        }
    };

    if (!isVisible) {
        return (
            <button
                onClick={() => setIsVisible(true)}
                className="md:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-md shadow-md text-3xl"
            >
                ☰
            </button>
        );
    }

    return (
        <div className={`
            transition-all duration-300 ease-in-out
            ${isCompact ? 'w-12' : 'w-72'}
            flex-shrink-0 bg-gray-50 border-r border-gray-200
            md:w-72 md:static md:block
            fixed z-40 h-full
        `}>
            {isCompact && (
                <div className="h-full p-2">
                    <button
                        onClick={() => setIsCompact(false)}
                        className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-100 rounded-md"
                    >
                        =
                    </button>
                </div>
            )}

            {!isCompact && (
                <div className="h-full flex flex-col">
                    <div className="flex justify-between items-center p-4 border-b border-gray-200">
                        <h2 className="text-lg font-semibold text-gray-700">Menu</h2>
                        <div className="flex gap-2 items-center">
                            <button
                                onClick={() => changeLanguage(i18n.language === 'tr' ? 'en' : 'tr')}
                                className="px-3 py-1 rounded-md bg-blue-500 text-white text-sm hover:bg-blue-600"
                            >
                                {i18n.language === 'tr' ? 'EN' : 'TR'}
                            </button>
                            <button
                                onClick={() => setIsVisible(false)}
                                className="md:hidden p-2 text-gray-500 hover:bg-gray-100 rounded-md"
                            >
                                ✕
                            </button>
                        </div>
                    </div>

                    <nav className="flex-1 overflow-y-auto">
                        <div className="p-4 space-y-1">
                            {headerLinks.map((link, index) => (
                                <Link
                                    key={index}
                                    to={link.path}
                                    className="block w-full text-left px-4 py-2.5 text-sm rounded-md text-gray-600 hover:bg-gray-100 transition-colors"
                                    onClick={() => window.innerWidth < 768 && setIsVisible(false)}
                                >
                                    {link.text}
                                </Link>
                            ))}
                            <a
                                href="https://eticsoft.com/support/submitticket.php?step=2&deptid=22"
                                className="block w-full text-left px-4 py-2.5 text-sm rounded-md text-gray-600 hover:bg-gray-100 transition-colors"
                                onClick={() => window.innerWidth < 768 && setIsVisible(false)}
                            >
                                {t("support")}
                            </a>
                        </div>

                        <div className="p-4 space-y-2">
                            {Object.keys(categoryTitles).map(category => (
                                categorizedDocs[category]?.length > 0 && (
                                    <div key={category} className="rounded-md overflow-hidden">
                                        <button
                                            onClick={() => setOpenCategories(prev =>
                                                prev.includes(category)
                                                    ? prev.filter(c => c !== category)
                                                    : [...prev, category]
                                            )}
                                            className="w-full flex items-center justify-between p-3 text-sm font-medium bg-gray-100 hover:bg-gray-200 transition-colors"
                                        >
                                            <span>{getCategoryTitle(category)}</span>
                                            <span className="text-gray-500">
                                                {openCategories.includes(category) ? '▼' : '▶'}
                                            </span>
                                        </button>

                                        {openCategories.includes(category) && (
                                            <div className="mt-1 space-y-1 p-1">
                                                {categorizedDocs[category].map(doc => (
                                                    <button
                                                        key={doc.id}
                                                        onClick={() => handleDocumentClick(doc.id)}
                                                        className={`
                                                            w-full text-left px-4 py-2 text-sm rounded-md transition-colors
                                                            ${location.pathname === `/docs/${doc.id}`
                                                                ? 'bg-blue-500 text-white'
                                                                : 'text-gray-600 hover:bg-gray-100'}
                                                        `}
                                                    >
                                                        {doc.translations[i18n.language].title}
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                )
                            ))}
                        </div>
                    </nav>
                </div>
            )}
        </div>
    );
};

export default DocsSidebar;