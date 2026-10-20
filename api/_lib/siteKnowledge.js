import { projects } from '../../src/data/projectsData.js';
import i18n from '../../src/i18n.js';
import { getArticleKnowledge } from './articleKnowledge.js';

const SITE_URL = 'https://www.obkworks.tr';

function getTranslation(locale, key) {
  if (!key) return '';

  const messages = i18n.global.getLocaleMessage(locale);

  return key.split('.').reduce((value, part) => {
    if (value && typeof value === 'object') {
      return value[part];
    }

    return undefined;
  }, messages) || '';
}

function getProjectCategory(project, locale) {
  const categoryKey = {
    frontEnd: 'projectsPage.frontEnd.title',
    networking: 'projectsPage.networking.title',
    itInfrastructureTools: 'projectsPage.itInfrastructureTools.title',
  }[project.category];

  return getTranslation(locale, categoryKey) || project.category || '';
}

export function getProjectKnowledge(locale = 'en') {
  const language = locale === 'fa' ? 'fa' : 'en';

  return projects.map((project) => ({
    type: 'project',
    id: project.id,
    title: getTranslation(language, project.titleKey) || project.id,
    description: getTranslation(language, project.descriptionKey),
    category: getProjectCategory(project, language),
    keywords: Array.isArray(project.keywords)
      ? project.keywords.filter(
          (keyword) => typeof keyword === 'string' && keyword.trim()
        )
      : [],
    url: `${SITE_URL}${project.path}`,
  }));
}

export function getResumeKnowledge(locale = 'en') {
  const language = locale === 'fa' ? 'fa' : 'en';

  const skillCategories = [
    'network',
    'virtualization',
    'web',
    'tools',
    'remoteManagement',
    'officeAutomation',
  ];

  return {
    name: getTranslation(language, 'home.hero.name').trim(),
    title: getTranslation(language, 'home.hero.title'),
    introduction: getTranslation(language, 'home.hero.description'),

    about: {
      title: getTranslation(language, 'home.about.title'),
      parts: [
        getTranslation(language, 'home.about.textPart1'),
        getTranslation(language, 'home.about.textPart2'),
        getTranslation(language, 'home.about.textPart3'),
        getTranslation(language, 'home.about.textPart4'),
      ].filter(Boolean),
    },

    education: {
      degree: getTranslation(language, 'home.education.degree'),
      university: getTranslation(language, 'home.education.university'),
      location: getTranslation(language, 'home.education.location'),
      duration: getTranslation(language, 'home.education.duration'),
      masterDuration: getTranslation(language, 'home.education.masterDuration'),
      masterDegree: getTranslation(language, 'home.education.masterDegree'),
    },

    skills: skillCategories.map((category) => ({
      category: getTranslation(
        language,
        `home.skills.categories.${category}.title`
      ),
      technologies: getTranslation(
        language,
        `home.skills.categories.${category}.text`
      ),
    })),

    roadmap: {
      title: getTranslation(language, 'home.roadmap.title'),
      description: getTranslation(language, 'home.roadmap.description'),
      steps: getTranslation(language, 'home.roadmap.steps'),
    },
  };
}

export function getSiteKnowledge(locale = 'en') {
  return {
    language: locale === 'fa' ? 'fa' : 'en',
    siteUrl: SITE_URL,
    contactUrl: `${SITE_URL}/contact`,
    resume: getResumeKnowledge(locale),
    projects: getProjectKnowledge(locale),
    articles: getArticleKnowledge(locale),
  };
}
