export interface Blog{
    title: string;
    description: string;
    keywords: string;
    mdxPath: string;
}
export interface BlogTranslations {
    [key: string]: Blog;
}