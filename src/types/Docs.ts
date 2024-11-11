// types/Docs.ts
export interface Doc{
    title: string;
    description: string;
    keywords: string;
    mdxPath: string;
}

export interface DocTranslations {
    [key: string]: Doc;
}

