
const SITE_URL = 'https://www.obkworks.tr';

const articles = [
  {
    slug: 'modern-frontend-stack-html-css-js-tailwind-vuejs',
    title: {
      en: 'Modern Frontend Stack: Core Concepts of HTML, CSS, JavaScript, Tailwind & Vue.js',
      fa: 'تکنولوژی‌های مدرن فرانت‌اند: بررسی HTML ،CSS ،JavaScript ،Tailwind و Vue.js',
    },
    excerpt: {
      en: 'A concise technical breakdown of core web technologies—HTML5, CSS3, ES6+ JavaScript, Utility-First Tailwind CSS, and Reactive Vue.js—and how they power this website.',
      fa: 'مروری کپسولی و کاربردی بر استک فرانت‌اند وب شامل HTML5 ،CSS3، جاوااسکریپت، Tailwind CSS و Vue.js و نحوه استفاده از آن‌ها در توسعه این وب‌سایت.',
    },
    tags: ['Frontend'],
  },
  {
    slug: 'enterprise-cctv-ip-camera-nvr-dvr-architecture',
    title: {
      en: 'Enterprise Video Surveillance Architecture: IP Cameras, NVR, DVR & Streaming Protocols',
      fa: 'معماری سیستم‌های نظارت تصویری (CCTV): بررسی جامع دوربین‌های IP، NVR، DVR و پروتکل‌های انتقال تصویر',
    },
    excerpt: {
      en: 'A comprehensive technical breakdown of CCTV surveillance architecture—comparing IP cameras and analog systems, NVRs, DVRs, ONVIF standards, PoE, and video streaming protocols.',
      fa: 'بررسی تخصصی معماری سیستم‌های نظارت تصویری؛ مقایسه دوربین‌های تحت شبکه (IP) و آنالوگ، دستگاه‌های NVR و DVR، استاندارد ONVIF، تکنولوژی PoE و پروتکل‌های انتقال تصویر.',
    },
    tags: ['CCTV'],
  },
  {
    slug: 'network-plus-security-plus-fundamentals-ports-protocols',
    title: {
      en: 'Network & Security Fundamentals: Ports, Protocols, Network+ & Security+ Baselines',
      fa: 'مبانی شبکه‌ و امنیت: بررسی پورت‌ها، پروتکل‌های کاربردی و مفاهیم اصلی +Network و +Security',
    },
    excerpt: {
      en: 'A foundational reference guide covering essential TCP/UDP well-known ports, core network protocols, OSI/TCP models, the CIA Triad, AAA, and threat baselines.',
      fa: 'مرجع جامع و کپسولی مفاهیم پایه شبکه و امنیت؛ شامل پورت‌های پرکاربرد TCP/UDP، پروتکل‌های اصلی، مدل OSI، مثلث CIA، مدل AAA و تهدیدات امنیتی.',
    },
    tags: ['Network Plus'],
  },
  {
    slug: 'enterprise-virtualization-esxi-vcenter-hyperv',
    title: {
      en: 'Enterprise Virtualization Architecture: ESXi, vCenter, Hyper-V & Workstation Implementation',
      fa: 'معماری مجازی‌سازی سازمانی: مقایسه و پیاده‌سازی VMware ESXi ،vCenter ،Hyper-V و Workstation',
    },
    excerpt: {
      en: 'A technical evaluation of enterprise virtualization—comparing Type 1 and Type 2 hypervisors, vCenter cluster management, Hyper-V, and Workstation alongside configuration baselines.',
      fa: 'بررسی تخصصی مجازی‌سازی سازمانی؛ مقایسه هایپروایزرهای نوع ۱ و ۲، مدیریت متمرکز کلاستر با vCenter، Hyper-V و Workstation به همراه راهنمای کانفیگ عملیاتی.',
    },
    tags: ['Virtualization'],
  },
  {
    slug: 'prtg-vs-opmanager-network-monitoring-guide',
    title: {
      en: 'PRTG vs. OpManager: Technical Evaluation & Configuration Guide',
      fa: 'ارزیابی فنی و راهنمای پیاده‌سازی: مقایسه جامع PRTG و OpManager',
    },
    excerpt: {
      en: 'A comprehensive engineering evaluation comparing PRTG and OpManager, analyzing features, pros, cons, and configuration steps to choose the ideal monitoring solution.',
      fa: 'بررسی و مقایسه مهندسی ابزارهای PRTG و OpManager؛ تحلیل ویژگی‌ها، مزایا، معایب و راهنمای کانفیگ جهت انتخاب بهترین راه‌حل مانیتورینگ برای سازمان.',
    },
    tags: ['Monitoring'],
  },
  {
    slug: 'active-directory-domain-controller-security',
    title: {
      en: 'Designing Domain Controller Architecture & Active Directory Security Hardening',
      fa: 'طراحی معماری Domain Controller و ایمن‌سازی زیرساخت Active Directory (AD DS)',
    },
    excerpt: {
      en: 'Design a resilient Active Directory architecture, enforce Tiered Administration, and protect Domain Controllers against identity-based security threats.',
      fa: 'طراحی معماری پایداری اکتیو دایرکتوری، پیاده‌سازی مدل امنیتی سه لایه‌ای (Tiering) و ایمن‌سازی Domain Controllerها در برابر حملات هویت‌محور.',
    },
    tags: ['MCSA'],
  },
  {
    slug: 'windows-gpo-hardening-group-policy-objects',
    title: {
      en: 'Hardening Windows Clients using Group Policy Objects (GPO)',
      fa: 'ایمن‌سازی و مدیریت متمرکز کلاینت‌های ویندوز با Group Policy (GPO)',
    },
    excerpt: {
      en: 'Enforce enterprise security controls, disable USB storage access, and centralize Windows Defender settings across Active Directory clients using GPOs.',
      fa: 'اعمال سیاست‌های امنیتی، مسدودسازی حافظه‌های USB و مدیریت متمرکز تنظیمات ویندوز در اکتیو دایرکتوری با استفاده از Group Policy.',
    },
    tags: ['MCSA'],
  },
  {
    slug: 'dhcp-failover-high-availability-windows-server',
    title: {
      en: 'High Availability DHCP Failover Configuration in Windows Server',
      fa: 'پیکربندی DHCP Failover برای پایداری سرویس آدرس‌دهی در ویندوز سرور',
    },
    excerpt: {
      en: 'Ensure continuous network uptime and lease availability by configuring native DHCP Failover in Windows Server using Load Balance and Hot Standby modes.',
      fa: 'تضمین پایداری بدون قطعی سرویس آدرس‌دهی شبکه با پیکربندی DHCP Failover در ویندوز سرور به دو روش Load Balance و Hot Standby.',
    },
    tags: ['MCSA'],
  },
  {
    slug: 'cisco-etherchannel-lacp-802-3ad-configuration',
    title: {
      en: 'Configuring Cisco EtherChannel using LACP (802.3ad)',
      fa: 'پیکربندی EtherChannel در سوئیچ‌های سیسکو با پروتکل LACP (802.3ad)',
    },
    excerpt: {
      en: 'Increase network bandwidth and link redundancy by bundling multiple physical switch interfaces into a single logical Port-Channel using IEEE 802.3ad LACP.',
      fa: 'افزایش پهنای باند و ایجاد پشتیبان لینک (Redundancy) با تجمیع چندین اینترفیس فیزیکی در یک Port-Channel منطقی با استفاده از پروتکل LACP.',
    },
    tags: ['CCNA'],
  },
  {
    slug: 'inter-vlan-routing-router-on-a-stick-802-1q',
    title: {
      en: 'Inter-VLAN Routing using Router on a Stick (802.1Q)',
      fa: 'مسیریابی بین VLANها با روش Router on a Stick و استاندارد 802.1Q',
    },
    excerpt: {
      en: 'Learn how to enable communication between isolated VLANs using a single physical router interface with 802.1Q sub-interfaces and Native VLAN configuration on Cisco devices.',
      fa: 'آموزش برقراری ارتباط بین VLANهای مجزا با استفاده از یک اینترفیس فیزیکی روتر، Sub-interfaceهای 802.1Q و پیکربندی Native VLAN در تجهیزات سیسکو.',
    },
    tags: ['CCNA'],
  },
  {
    slug: 'cisco-port-security-layer2-mac-address',
    title: {
      en: 'Enhancing Layer 2 Security with Cisco Port Security',
      fa: 'ارتقای امنیت لایه ۲ با ویژگی Port Security در سوئیچ‌های سیسکو',
    },
    excerpt: {
      en: 'A comprehensive guide to securing Cisco switch access ports by restricting MAC addresses to prevent rogue access and Layer 2 network attacks.',
      fa: 'راهنمای جامع امن‌سازی پورت‌های دسترسی در سوئیچ‌های سیسکو با محدود کردن آدرس‌های MAC جهت جلوگیری از نفوذ غیرمجاز و حملات لایه ۲.',
    },
    tags: ['CCNA'],
  },
];

export function getArticleKnowledge(locale = 'en') {
  const language = locale === 'fa' ? 'fa' : 'en';

  return articles.map((article) => ({
    type: 'article',
    slug: article.slug,
    title: article.title[language],
    description: article.excerpt[language],
    tags: article.tags,
    url: `${SITE_URL}/Articles/${article.slug}`,
  }));
}
