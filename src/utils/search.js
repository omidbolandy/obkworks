import { articles } from '../data/articlesData';
import { projects } from '../data/projectsData';
import { localizeField } from '../views/utils/localization';

const normalizeText = (value) => String(value || '').toLocaleLowerCase();
const MAX_QUERY_LENGTH = 120;

const matchesQuery = (values, query) => {
    const normalizedQuery = normalizeText(query).trim();
    if (!normalizedQuery) return false;

    return values.some((value) => normalizeText(value).includes(normalizedQuery));
};

export const searchContent = (query, locale, translate) => {
    const normalizedQuery = normalizeText(query).trim().slice(0, MAX_QUERY_LENGTH);
    if (!normalizedQuery) {
        return { articles: [], projects: [] };
    }

    const matchingArticles = articles
        .filter((article) => matchesQuery([
            localizeField(article.title, locale),
            localizeField(article.excerpt, locale),
            ...(article.tags || []),
        ], normalizedQuery))
        .sort((first, second) => second.id - first.id)
        .map((article) => ({
            id: article.id,
            type: 'article',
            title: localizeField(article.title, locale),
            description: localizeField(article.excerpt, locale),
            image: article.image,
            path: `/Articles/${article.slug}`,
        }));

    const matchingProjects = projects
        .map((project) => ({
            ...project,
            title: translate(project.titleKey),
            description: translate(project.descriptionKey),
        }))
        .filter((project) => matchesQuery([
            project.title,
            project.description,
            project.category,
        ], normalizedQuery));

    return { articles: matchingArticles, projects: matchingProjects };
};
