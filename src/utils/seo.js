import logoUrl from '../assets/obk-Logo.webp';

const SITE_URL = 'https://obkworks.tr';
const SITE_NAME = 'obkworks';
const DEFAULT_IMAGE = new URL(logoUrl, window.location.origin).href;

const defaultDescriptions = {
    en: 'Personal portfolio of obkworks featuring web development tools, Cisco and Windows Server networking labs, IT infrastructure calculators, and technical articles.',
    fa: 'نمونه کار شخصی obkworks شامل ابزارهای توسعه وب، آزمایشگاه های شبکه سیسکو و ویندوز سرور، ابزارهای محاسباتی زیرساخت فناوری اطلاعات و مقالات فنی.',
};

function absoluteUrl(path = '/') {
    return new URL(path, SITE_URL).href;
}

function upsertMeta(attribute, key, content) {
    let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
    if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
    }
    element.setAttribute('content', content);
}

function upsertLink(rel, href, hreflang) {
    const selector = hreflang
        ? `link[rel="${rel}"][hreflang="${hreflang}"]`
        : `link[rel="${rel}"]`;
    let element = document.head.querySelector(selector);
    if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        if (hreflang) element.setAttribute('hreflang', hreflang);
        document.head.appendChild(element);
    }
    element.setAttribute('href', href);
}

function upsertJsonLd(id, value) {
    let script = document.head.querySelector(`script[data-seo-schema="${id}"]`);
    if (!script) {
        script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-seo-schema', id);
        document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(value);
}

function removeJsonLd(id) {
    document.head.querySelector(`script[data-seo-schema="${id}"]`)?.remove();
}

function localizedValue(value, locale, fallback = '') {
    if (!value) return fallback;
    if (typeof value === 'string') return value;
    return value[locale] || value.en || value.fa || fallback;
}

function getBreadcrumbs(route, locale) {
    const homeLabel = locale === 'fa' ? 'خانه' : 'Home';
    const items = [{ name: homeLabel, item: absoluteUrl('/') }];
    const segments = route.path.split('/').filter(Boolean);

    if (segments[0]?.toLowerCase() === 'articles') {
        items.push({ name: locale === 'fa' ? 'مقالات' : 'Articles', item: absoluteUrl('/Articles') });
    } else if (segments[0]?.toLowerCase() === 'projects') {
        items.push({ name: locale === 'fa' ? 'پروژه ها' : 'Projects', item: absoluteUrl('/Projects') });
    }

    if (route.name === 'ArticleDetails') {
        items.push({ name: localizedValue(route.meta.breadcrumb, locale, route.meta.title), item: absoluteUrl(route.fullPath) });
    } else if (route.name !== 'home' && route.name !== 'Articles' && route.name !== 'Projects') {
        items.push({ name: localizedValue(route.meta.breadcrumb, locale, route.meta.title), item: absoluteUrl(route.fullPath) });
    }

    return items.map((item, index) => ({ '@type': 'ListItem', position: index + 1, name: item.name, item: item.item }));
}

export function updateSeo(route, locale = 'en', options = {}) {
    const normalizedLocale = locale === 'fa' ? 'fa' : 'en';
    const canonicalUrl = absoluteUrl(route.fullPath || route.path || '/');
    const title = options.title || localizedValue(route.meta.title, normalizedLocale, SITE_NAME);
    const description = options.description || localizedValue(route.meta.description, normalizedLocale, defaultDescriptions[normalizedLocale]);
    const image = options.image || DEFAULT_IMAGE;

    document.title = title;
    document.documentElement.lang = normalizedLocale;
    document.documentElement.dir = normalizedLocale === 'fa' ? 'rtl' : 'ltr';

    upsertMeta('name', 'description', description);
    upsertMeta('property', 'og:type', options.type || 'website');
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', canonicalUrl);
    upsertMeta('property', 'og:site_name', SITE_NAME);
    upsertMeta('property', 'og:locale', normalizedLocale === 'fa' ? 'fa_IR' : 'en_US');
    upsertMeta('property', 'og:image', image);
    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', image);

    upsertLink('canonical', canonicalUrl);
    upsertLink('alternate', canonicalUrl, 'en');
    upsertLink('alternate', canonicalUrl, 'fa');
    upsertLink('alternate', canonicalUrl, 'x-default');

    upsertJsonLd('person', {
        '@context': 'https://schema.org',
        '@type': 'Person',
        '@id': `${SITE_URL}/#person`,
        name: 'Omid Bolandy Natag',
        alternateName: ['امید بلندی نتاج', 'obkworks'],
        url: SITE_URL,
        image: DEFAULT_IMAGE,
        jobTitle: 'Network Specialist & Frontend Developer',
        sameAs: [
            'https://github.com/omidbolandy',
            'https://www.linkedin.com/in/omid-bolandy',
        ],
        knowsAbout: [
            'Cisco Networking',
            'Windows Server',
            'Vue.js',
            'Tailwind CSS',
            'IT Infrastructure',
        ],
    });

    upsertJsonLd('breadcrumb', {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: getBreadcrumbs(route, normalizedLocale),
    });
}

export function updateArticleSeo(route, locale, article, title, description) {
    let image = DEFAULT_IMAGE;
    if (article?.image) image = article.image.startsWith('http') ? article.image : absoluteUrl(article.image);

    updateSeo(route, locale, {
        title: `${title} | ${SITE_NAME}`,
        description,
        image,
        type: 'article',
    });

    upsertJsonLd('article', {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description,
        author: {
            '@type': 'Person',
            name: 'Omid Bolandy Natag',
            alternateName: ['امید بلندی نتاج', 'obkworks'],
            url: SITE_URL,
        },
        publisher: { '@id': `${SITE_URL}/#person` },
        datePublished: article.date,
        image,
        inLanguage: locale === 'fa' ? 'fa-IR' : 'en-US',
        mainEntityOfPage: absoluteUrl(route.fullPath),
    });
}
