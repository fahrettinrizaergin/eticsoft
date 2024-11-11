export interface News {
    title: string;
    description: string;
    mdxPath: string;
}

export interface NewsTranslations {
    [key: string]: News;
}