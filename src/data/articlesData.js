import PortSecurity from '../assets/Articles/Port Security.webp'
import PortSecurityDiagram from '../assets/Articles/Port Security Diagram.png'
// ******
import RouterOnAStick from '../assets/Articles/Router on a Stick.webp'
import RouterOnAStick2 from '../assets/Articles/Router on a Stick 2.webp'
// ******
import EtherChannel from '../assets/Articles/EtherChannel.webp'
import EtherChannel2 from '../assets/Articles/EtherChannel2.webp'
// ******
import ConfigurationDHCPFailover from '../assets/Articles/Configuration DHCP Failover.webp'
// ******
import GroupPolicy from '../assets/Articles/Group Policy (GPO).webp'
// ******
import ActiveDirectory from '../assets/Articles/Active Directory (AD DS) -Domain.webp'
// ******
import PRTGVSOpManager from '../assets/Articles/PRTG VS OpManager.webp'
// ******
import Virtualization from '../assets/Articles/Virtualization.webp'
// ******
import NetworkandSecurity from '../assets/Articles/+Network and +Security.webp'
// ******
import CCTV from '../assets/Articles/CCTV.webp'
// ******
import Frontend from '../assets/Articles/Frontend.webp'


// Articles
export const articles = [
    // Vue.js, JavaScript, Tailwind CSS, HTML & CSS articles
    // --- article #1 ---
    {
        id: 1,
        slug: 'modern-frontend-stack-html-css-js-tailwind-vuejs',
        title: {
            en: 'Modern Frontend Stack: Core Concepts of HTML, CSS, JavaScript, Tailwind & Vue.js',
            fa: 'تکنولوژی‌های مدرن فرانت‌اند: بررسی HTML ،CSS ،JavaScript ،Tailwind و Vue.js',
        },
        excerpt: {
            en: 'A concise technical breakdown of core web technologies—HTML5, CSS3, ES6+ JavaScript, Utility-First Tailwind CSS, and Reactive Vue.js—and how they power this website.',
            fa: 'مروری کپسولی و کاربردی بر استک فرانت‌اند وب شامل HTML5 ،CSS3، جاوااسکریپت، Tailwind CSS و Vue.js و نحوه استفاده از آن‌ها در توسعه این وب‌سایت.',
        },
        content: [
            {
                type: 'text',
                en: 'Modern web development relies on a seamless interplay between structural markup, responsive styling, dynamic scripting, and reactive frameworks. Understanding how HTML5, CSS3, JavaScript (ES6+), Tailwind CSS, and Vue.js work together allows developers to build fast, scalable, and highly interactive web applications.',
                fa: 'توسعه وب مدرن بر پایه‌ی هماهنگی کامل بین ساختار، استایل‌های واکنش‌گرا (Responsive)، برنامه‌نویسی پویا و فریم‌ورک‌های کامپوننت‌محور شکل گرفته است. درک نحوه تعامل HTML5 ،CSS3 ،JavaScript ،Tailwind CSS و Vue.js به توسعه‌دهندگان اجازه می‌دهد وب‌سایت‌ها و اپلیکیشن‌هایی سریع، مقیاس‌پذیر و جذاب بسازند.',
            },
            {
                type: 'text',
                en: '1. Semantic HTML5 & Modern CSS3:\n• Semantic HTML5:\nUsing meaningful tags like `<header>`, `<article>`, `<main>`, and `<section>` improves SEO accessibility and screen-reader parsing compared to plain `<div>` containers.\n\n• CSS3 Layout Systems:\nFlexbox provides one-dimensional alignment for UI components, while CSS Grid handles two-dimensional page layouts seamlessly.',
                fa: '۱. ساختار HTML5 و CSS3 مدرن:\n• زبان HTML5 با تگ‌های معنایی (Semantic):\nاستفاده از تگ‌های معنایی مانند `<header>` ،`<main>` و `<article>` باعث بهبود سئو (SEO) و خوانایی کد برای موتورهای جستجو و ساختار وب می‌شود.\n\n• سیستم‌های چیدمان CSS3:\nابزارهای Flexbox برای چیدمان‌های تک‌بعدی (یک سطر یا ستون) و CSS Grid برای چیدمان‌های دو بعدی شبکه کاملاً ایده‌آل هستند.',
            },
            {
                type: 'code',
                language: 'HTML & CSS Example',
                code: `<!-- Semantic Structure with Flexbox -->
<article class="card">
  <h2>Network Security</h2>
  <p>Core fundamentals of enterprise firewalls.</p>
</article>

<style>
  .card {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem;
  }
</style>`
            },
            {
                type: 'text',
                en: '2. Modern JavaScript (ES6+):\nJavaScript is the functional engine of the web. Modern ES6+ features like Arrow Functions, Destructuring, Promises, and `async/await` allow asynchronous data fetching from APIs without blocking the main browser thread.',
                fa: '۲. جاوا اسکریپت مدرن (+ES6):\nجاوا اسکریپت موتور محرک و عملیاتی وب است. ویژگی‌های جدید +ES6 مثل توابع پیکانی (Arrow Functions)، Destructuring و `async/await` امکان دریافت ناهمگام (Asynchronous) داده‌ها از APIها را بدون متوقف کردن مرورگر فراهم می‌کنند.',
            },
            {
                type: 'code',
                language: 'JavaScript ES6+',
                code: `// Fetching article data asynchronously
const fetchArticle = async (id) => {
  try {
    const response = await fetch(\`/api/articles/\${id}\`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to load article:', error);
  }
};`
            },
            {
                type: 'text',
                en: '3. Tailwind CSS (Utility-First Styling):\nUnlike traditional CSS frameworks with pre-built components, Tailwind CSS provides low-level utility classes directly in the HTML. It eliminates bloated stylesheets, streamlines custom design systems, and simplifies responsive breakpoints (e.g., `md:flex`, `dark:bg-slate-900`).',
                fa: '۳. فریم‌ورک Tailwind CSS (طراحی با کلاس‌های کاربردی):\nبرعکس فریم‌ورک‌های قدیمی، Tailwind کلاس‌های آماده تک‌منظوره (Utility-First) را در اختیار شما می‌گذارد. این روش باعث کاهش حجم فایل‌های CSS، بالا رفتن سرعت توسعه و پیاده‌سازی سریع حالت تاریک (Dark Mode) و طراحی واکنش‌گرا می‌شود.',
            },
            {
                type: 'code',
                language: 'Tailwind CSS Example',
                code: `<!-- Responsive Card with Dark Mode support -->
<div class="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md flex items-center space-x-4">
  <h3 class="text-xl font-bold text-gray-900 dark:text-white">Portfolio Node</h3>
</div>`
            },
            {
                type: 'text',
                en: '4. Vue.js (Progressive JavaScript Framework):\nVue.js delivers a reactive Single Page Application (SPA) architecture using a component-based structure. Features like Reactive State (`ref`, `reactive`), Dynamic Data Binding, and Conditional Rendering (`v-if`, `v-for`) allow real-time UI updates without reloading the browser page.',
                fa: '۴. فریم‌ورک Vue.js (جاوااسکریپت پیشرو):\nفریم‌ورک Vue.js ساختاری کامپوننت‌محور و واکنشی (Reactive) برای ساخت تک‌صفحه‌ای‌ها (SPA) ارائه می‌دهد. قابلیت‌هایی مثل واکنش‌پذیری داده‌ها (`ref`)، رندر شرطی (`v-if`) و حلقه روی لیست‌ها (`v-for`) باعث می‌شوند صفحه بدون ریلود شدن، به‌صورت آنی به‌روزرسانی شود.',
            },
            {
                type: 'code',
                language: 'Vue.js Composition API',
                code: `<script setup>
import { ref } from 'vue';

const isDarkMode = ref(true);
const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value;
};
</script>

<template>
  <button @click="toggleTheme" class="btn">
    Toggle Theme (Current: {{ isDarkMode ? 'Dark' : 'Light' }})
  </button>
</template>`
            },
            {
                type: 'text',
                en: 'How This Website Was Built:\nThis personal portfolio website was designed and built from scratch using Vue.js 3 (Composition API) and Tailwind CSS, hosted globally on Cloudflare Pages. The architecture utilizes custom reactive components for bilingual localization (Persian/English), seamless theme switching, filtering systems, and modular JavaScript data structures.',
                fa: 'نحوه ساخت همین وب‌سایت:\nاین وب‌سایت پورتفولیو شخصی دقیقاً با همین استک تکونولوژی پیاده‌سازی شده است؛ معماری آن بر پایه Vue.js 3 (با Composition API) و Tailwind CSS شکل گرفته و روی Cloudflare Pages میزبانی می‌شود. تمامی بخش‌ها شامل سیستم دو زبانه (فارسی/انگلیسی)، سوییچ تم تاریک/روشن، فیلتر مقالات و پروژه‌ها، کاملاً کامپوننت‌محور و پویا طراحی شده‌اند.',
            }
        ],
        author: 'obk',
        date: '2026-08-09',
        image: Frontend,
        tags: ['Frontend'],
    },

    // CCTV
    // --- article #2 ---
    {
        id: 2,
        slug: 'enterprise-cctv-ip-camera-nvr-dvr-architecture',
        title: {
            en: 'Enterprise Video Surveillance Architecture: IP Cameras, NVR, DVR & Streaming Protocols',
            fa: 'معماری سیستم‌های نظارت تصویری (CCTV): بررسی جامع دوربین‌های IP، NVR، DVR و پروتکل‌های انتقال تصویر',
        },
        excerpt: {
            en: 'A comprehensive technical breakdown of CCTV surveillance architecture—comparing IP cameras and analog systems, NVRs, DVRs, ONVIF standards, PoE, and video streaming protocols.',
            fa: 'بررسی تخصصی معماری سیستم‌های نظارت تصویری؛ مقایسه دوربین‌های تحت شبکه (IP) و آنالوگ، دستگاه‌های NVR و DVR، استاندارد ONVIF، تکنولوژی PoE و پروتکل‌های انتقال تصویر.',
        },
        content: [
            {
                type: 'text',
                en: 'Modern IP video surveillance is an integral component of enterprise network infrastructure and physical security systems. Transitioning from legacy analog closed-circuit television (CCTV) to high-definition IP-based networks requires systems engineers to understand network bandwidth utilization, specialized video compression codecs, storage retention calculations, and secure remote streaming protocols.',
                fa: 'سیستم‌های نظارت تصویری تحت شبکه (IP) بخش جدایی‌ناپذیری از زیرساخت شبکه و امنیت فیزیکی سازمان‌های مدرن هستند. گذر از سیستم‌های آنالوگ قدیمی به شبکه‌های تصویری باکیفیت و مبتنی بر IP، نیازمند درک عمیق مهندسان شبکه از میزان مصرف پهنای باند، کدک‌های فشرده‌سازی تصویر، محاسبات فضای ذخیره‌سازی و پروتکل‌های امن انتقال تصویر است.',
            },
            {
                type: 'text',
                en: '1. Analog/HD CCTV vs. IP Surveillance Networks:\n• Analog/HD Systems (AHD, TVI, CVI):\nUtilize coaxial cabling (RG59/RG6) to transmit raw video signals directly to a central Digital Video Recorder (DVR). Compression and processing occur at the DVR level. Limited in resolution and scalability.\n\n• IP Camera Systems (Network Cameras):\nEach camera functions as an independent network host with its own IP address, onboard processing processor, and web interface. Video data is compressed directly on the camera and transmitted over standard Ethernet cabling (Cat5e/Cat6) to a Network Video Recorder (NVR) or VMS (Video Management Software).',
                fa: '۱. مقایسه سیستم‌های آنالوگ/HD با سیستم‌های تحت شبکه (IP):\n• سیستم‌های آنالوگ/HD (تکنولوژی‌های AHD, TVI, CVI):\nاز کابل‌های کواکسیال (RG59) برای ارسال سیگنال خام تصویر مستقیماً به دستگاه ضبط مرکزی (DVR) استفاده می‌کنند. پردازش و فشرده‌سازی در خود DVR انجام می‌شود و محدودیت کیفیت و توسعه‌پذیری دارند.\n\n• سیستم‌های دوربین تحت شبکه (IP Cameras):\nهر دوربین مانند یک نود مستقل در شبکه دارای آدرس IP، پردازنده داخلی و وب‌کنسول مدیریتی است. فشرده‌سازی تصویر در داخل خود دوربین انجام شده و داده‌ها از طریق کابل‌های شبکه (Cat6) به دستگاه NVR یا نرم‌افزارهای مدیریت ویدیو (VMS) منتقل می‌شوند.',
            },
            {
                type: 'text',
                en: '2. Centralized Storage Devices (DVR vs. NVR):\n• DVR (Digital Video Recorder):\nProcesses, encodes, and stores raw analog video signals arriving via BNC coaxial connectors.\n\n• NVR (Network Video Recorder):\nReceives pre-encoded digital video streams over IP networks via RJ45 ports. Supports high-resolution streams (4K/8K), advanced Edge Analytics, and centralized RAID storage configuration.',
                fa: '۲. دستگاه‌های مرکزی ذخیره‌سازی (DVR در برابر NVR):\n• دستگاه DVR (دیجیتال ویدیو رکوردر):\nسیگنال‌های خام آنالوگ ورودی از طریق فیش‌های BNC را دریافت، فشرده‌سازی و روی دیسک‌های سخت ذخیره می‌کند.\n\n• دستگاه NVR (نتورک ویدیو رکوردر):\nاستریم‌های ویدیوییِ دیجیتال و فشرده‌شده را از طریق پورت‌های RJ45 و شبکه IP دریافت می‌کند. از رزولوشن‌های بسیار بالا (4K)، تحلیل‌های هوشمند تصویر (Analytics) و آرایه‌های ذخیره‌سازی RAID پشتیبانی می‌نماید.',
            },
            {
                type: 'text',
                en: 'Key CCTV Protocols & Network Standards:\n• ONVIF (Open Network Video Interface Forum):\nAn open industry standard ensuring interoperability between IP physical security products from different manufacturers (e.g., Hikvision, Dahua, Axis).\n\n• PoE (Power over Ethernet - IEEE 802.3af/at/bt):\nDelivers electrical power alongside network data over a single Cat5e/Cat6 Ethernet cable, eliminating the need for local power adapters at camera locations.\n\n• RTSP (Real-Time Streaming Protocol - Port 554):\nA network control protocol designed to establish and control media sessions between IP cameras and clients/recorders.\n\n• Video Codecs (H.264 vs. H.265 / H.265+):\nH.265 (HEVC) reduces bandwidth usage and storage requirements by up to 50% compared to H.264 without sacrificing image quality.',
                fa: 'پروتکل‌ها و استانداردهای کلیدی شبکه در CCTV:\n• استاندارد ONVIF:\nیک پروتکل استاندارد و بین‌المللی جهت یکپارچه‌سازی و برقراری ارتباط بین دوربین‌ها و دستگاه‌های برندهای مختلف (مانند Hikvision، Dahua و Axis).\n\n• تکنولوژی PoE (تأمین برق روی کابل شبکه):\nانتقال هم‌زمان هم‌زمانِ هم داده‌های شبکه و هم جریان برق مصرفی دوربین روی یک کابل شبکه (Cat6)، بدون نیاز به کابل‌کشی مجزای برق.\n\n• پروتکل RTSP (پورت ۵۵۴):\nپروتکل استاندارد کنترل و دریافت استریم زنده تصویر و صدا بین دوربین IP و دستگاه‌های نمایش/ضبط.\n\n• کدک‌های فشرده‌سازی تصویر (H.264 در برابر H.265):\nکدک H.265 (و نسخه به‌روزتر +H.265) مصرف پهنای باند و فضای دیسک سخت را تا ۵۰ درصد نسبت به H.264 کاهش می‌دهد.',
            },
            {
                type: 'table',
                headers: {
                    en: ['Feature / Attribute', 'Analog / HD CCTV System', 'IP Video Surveillance System', 'Engineering Context'],
                    fa: ['ویژگی / شاخص', 'سیستم آنالوگ / HD', 'سیستم تحت شبکه (IP)', 'دیدگاه مهندسی زیرساخت']
                },
                rows: {
                    en: [
                        ['Cabling Infrastructure', 'Coaxial Cable (RG59) + Power Cable', 'Ethernet Cable (Cat5e/Cat6) with PoE', 'IP cuts cabling complexity using single PoE runs'],
                        ['Processing Location', 'Centralized at DVR Encoder', 'Distributed at Camera Edge', 'IP reduces central recorder CPU load'],
                        ['Interoperability', 'Proprietary / Vendor Dependent', 'Standardized via ONVIF Protocols', 'IP enables multi-vendor ecosystem integration'],
                        ['Remote Access & Topology', 'Requires Direct DVR Connection', 'Native IP addressing per camera node', 'IP allows direct camera-level management and VMS integration']
                    ],
                    fa: [
                        ['زیرساخت کابل‌کشی', 'کابل کواکسیال RG59 + کابل مجزای برق', 'کابل شبکه Cat6 همراه با فناوری PoE', 'سیستم IP کابل‌کشی را به یک کابل شبکه ساده تقلیل می‌دهد'],
                        ['محل پردازش تصویر', 'متمرکز در پردازنده دستگاه DVR', 'توزیع‌شده در پردازنده داخلی دوربین', 'سیستم IP بار پردازشی سرور مرکزی را کاهش می‌دهد'],
                        ['سازگاری برندها', 'محدود / وابسته به برند دستگاه', 'استاندارد شده با پروتکل ONVIF', 'امکان ترکیب دوربین‌ها و NVR از برندهای مختلف'],
                        ['دسترسی شبکه و توپولوژی', 'نیازمند اتصال مستقیم به DVR', 'دارای آدرس IP مستقل برای هر دوربین', 'امکان مدیریت مستقیم هر دوربین در سطح شبکه و VMS']
                    ]
                }
            },
            {
                type: 'text',
                en: '1. Practical IP Camera Setup & Remote Transmission Path:\nSteps for configuring static network parameters on IP cameras and configuring remote transmission via P2P Cloud or Port Forwarding:',
                fa: '۱. پیکربندی عملیاتی دوربین IP و راهنمای انتقال تصویر:\nمراحل تنظیم مشخصات شبکه روی دوربین‌های تحت شبکه و انتقال تصویر روی موبایل/وب:',
            },
            {
                type: 'text',
                en: 'IP Camera Network Setup Path:',
                fa: 'مسیر تنظیم آدرس IP و فعال‌سازی ONVIF در دوربین:',
            },
            {
                type: 'code',
                language: 'Camera Web GUI Path',
                code: `Configuration -> Network -> Basic Settings -> TCP/IP (Set Static IP, Subnet Mask, Gateway, Preferred DNS) -> Advanced Settings -> Integration Protocol (Enable ONVIF & Set Authentication)`
            },
            {
                type: 'text',
                en: 'Remote Viewing Port Forwarding Baseline (Router Configuration):',
                fa: 'تنظیمات انتقال تصویر روی روتر (Port Forwarding):',
            },
            {
                type: 'code',
                language: 'Router NAT / Port Forwarding',
                code: `! Forward HTTP & RTSP Ports for NVR (IP: 192.168.1.200)
HTTP Web Port: External 8080 -> Internal 80 (TCP)
RTSP Stream Port: External 554 -> Internal 554 (TCP/UDP)
SDK / Media Port: External 8000 -> Internal 8000 (TCP)`
            },
            {
                type: 'text',
                en: 'Engineering Takeaway & Operational Considerations:\nWhen designing enterprise video surveillance, calculate network bandwidth and storage retention requirements using camera bitrates and target frame rates (FPS). Utilize H.265 compression and PoE switches with dedicated CCTV VLANs to isolate video broadcast traffic from enterprise data LANs.',
                fa: 'جمع‌بندی مهندسی و نکات عملیاتی:\nدر طراحی سیستم‌های نظارت تصویری سازمانی، همواره میزان مصرف پهنای باند و فضای ذخیره‌سازی را بر اساس نرخ بیت (Bitrate) و تعداد فریم در ثانیه (FPS) محاسبه کنید. از کدک H.265 و سوئیچ‌های PoE استفاده کرده و ترافیک سنگین دوربین‌ها را حتماً در یک VLAN مجزا قرار دهید تا مانع از ایجاد کُندی در شبکه دیتای سازمان شوید.',
            }
        ],
        references: [
            { url: 'https://www.onvif.org', label: { en: 'ONVIF Standard', fa: 'استاندارد ONVIF' } },
        ],
        relatedTool: {
            path: '/Projects/IT-Infrastructure-Tools/cctv-storage-calculator',
            label: { en: 'CCTV Storage Calculator', fa: 'ماشین حساب ذخیره‌سازی CCTV' }
        },
        author: 'obk',
        date: '2026-08-09',
        image: CCTV,
        tags: ['CCTV'],
    },

    // Network+ & Security+ articles 
    // --- article #3 ---
    {
        id: 3,
        slug: 'network-plus-security-plus-fundamentals-ports-protocols',
        title: {
            en: 'Network & Security Fundamentals: Ports, Protocols, Network+ & Security+ Baselines',
            fa: 'مبانی شبکه‌ و امنیت: بررسی پورت‌ها، پروتکل‌های کاربردی و مفاهیم اصلی +Network و +Security',
        },
        excerpt: {
            en: 'A foundational reference guide covering essential TCP/UDP well-known ports, core network protocols, OSI/TCP models, the CIA Triad, AAA, and threat baselines.',
            fa: 'مرجع جامع و کپسولی مفاهیم پایه شبکه و امنیت؛ شامل پورت‌های پرکاربرد TCP/UDP، پروتکل‌های اصلی، مدل OSI، مثلث CIA، مدل AAA و تهدیدات امنیتی.',
        },
        content: [
            {
                type: 'text',
                en: 'Mastering networking and cybersecurity requires a crystal-clear understanding of foundational building blocks. From transport layer port assignments to cryptographic security models, engineers must understand how traffic traverses network layers and how defenses are structured. This article serves as a technical cheat-sheet combining well-known TCP/UDP ports, essential network protocols, and core architectural concepts from Network+ and Security+.',
                fa: 'تسلط بر مفاهیم شبکه و امنیت نیازمند درک عمیق پایه‌ای‌ترین اصول زیرساختی است. از شماره پورت‌های لایه حمل گرفته تا مدل‌های رمزنگاری و امنیتی، مهندسان باید بدانند ترافیک چگونه در لایه‌های شبکه حرکت کرده و مکانیزم‌های دفاعی چگونه پیاده‌سازی می‌شوند. این مقاله یک مرجع کپسولی و کاربردی شامل پورت‌های پرکاربرد TCP/UDP، پروتکل‌های حیاتی و مفاهیم کلیدی دوره‌های +Network و Security+ است.',
            },
            {
                type: 'text',
                en: '1. Well-Known Ports Baseline (0 - 1023):\nBelow is a reference table of the most critical standard network ports and their associated transport layer protocols (TCP/UDP):',
                fa: '۱. جدول پورت‌های پرکاربرد و حیاتی شبکه (Well-Known Ports):\nجدول زیر شامل مهم‌ترین شماره پورت‌های استاندارد و پروتکل لایه حمل (TCP/UDP) مربوط به آن‌ها است:',
            },
            {
                type: 'table',
                headers: {
                    en: ['Port Number', 'Protocol Abbreviation', 'Transport Layer Protocol', 'Service Description'],
                    fa: ['شماره پورت', 'مخفف پروتکل', 'پروتکل لایه حمل', 'عنوان سرویس']
                },
                rows: {
                    en: [
                        ['20 / 21', 'FTP', 'TCP', 'File Transfer Protocol (Data / Control)'],
                        ['22', 'SSH / SFTP', 'TCP', 'Secure Shell / Secure File Transfer'],
                        ['23', 'Telnet', 'TCP', 'Unencrypted Text Telecommunication Network'],
                        ['25', 'SMTP', 'TCP', 'Simple Mail Transfer Protocol (Outbound Mail)'],
                        ['53', 'DNS', 'UDP / TCP', 'Domain Name System (Queries: UDP / Zone Transfer: TCP)'],
                        ['67 / 68', 'DHCP', 'UDP', 'Dynamic Host Configuration Protocol (Server / Client)'],
                        ['80', 'HTTP', 'TCP', 'Hypertext Transfer Protocol (Unencrypted Web)'],
                        ['110', 'POP3', 'TCP', 'Post Office Protocol v3 (Inbound Mail Retrieval)'],
                        ['123', 'NTP', 'UDP', 'Network Time Protocol (Clock Synchronization)'],
                        ['143', 'IMAP', 'TCP', 'Internet Message Access Protocol (Inbound Mail)'],
                        ['161 / 162', 'SNMP', 'UDP', 'Simple Network Management Protocol (Queries / Traps)'],
                        ['389', 'LDAP', 'TCP / UDP', 'Lightweight Directory Access Protocol'],
                        ['443', 'HTTPS', 'TCP', 'HTTP Secure over TLS/SSL'],
                        ['636', 'LDAPS', 'TCP / UDP', 'Directory Access Protocol over Secure TLS/SSL'],
                        ['3389', 'RDP', 'TCP / UDP', 'Remote Desktop Protocol (Microsoft RDP)']
                    ],
                    fa: [
                        ['۲۰ / ۲۱', 'FTP', 'TCP', 'انتقال فایل (FTP Data / Control)'],
                        ['۲۲', 'SSH / SFTP', 'TCP', 'اتصال ریموت امن و انتقال فایل امن'],
                        ['۲۳', 'Telnet', 'TCP', 'اتصال ریموت متنی متنی و رمزنگاری‌نشده'],
                        ['۲۵', 'SMTP', 'TCP', 'ارسال ایمیل (Outbound Mail Transfer)'],
                        ['۵۳', 'DNS', 'UDP / TCP', 'تبدیل نام به IP (پاسخ‌دهی: UDP / انتقال زون: TCP)'],
                        ['۶۷ / ۶۸', 'DHCP', 'UDP', 'تخصیص خودکار آدرس IP (سرور / کلاینت)'],
                        ['۸۰', 'HTTP', 'TCP', 'پروتکل وب ساده و رمزنگاری‌نشده'],
                        ['۱۱۰', 'POP3', 'TCP', 'دریافت ایمیل از سرور (حذف از سرور پس از دریافت)'],
                        ['۱۲۳', 'NTP', 'UDP', 'همگام‌سازی زمان سیستم‌ها و تجهیزات'],
                        ['۱۴۳', 'IMAP', 'TCP', 'دریافت و مدیریت متمرکز ایمیل‌ها روی سرور'],
                        ['۱۶۱ / ۱۶۲', 'SNMP', 'UDP', 'مانیتورینگ و پایش تجهیزات شبکه (Queries / Traps)'],
                        ['۳۸۹', 'LDAP', 'TCP / UDP', 'سرویس پرس‌وجوی دایرکتوری و اکتیو دایرکتوری'],
                        ['۴۴۳', 'HTTPS', 'TCP', 'پروتکل وب امن همراه با رمزنگاری TLS/SSL'],
                        ['۶۳۶', 'LDAPS', 'TCP / UDP', 'سرویس دایرکتوری امن روی لایه TLS/SSL'],
                        ['۳۳۸۹', 'RDP', 'TCP / UDP', 'ریموت دسکتاپ مایکروسافت']
                    ]
                }
            },
            {
                type: 'text',
                en: '2. Essential Network Protocols Categorized:\nCore network operational protocols categorized by their underlying function across infrastructure domains:',
                fa: '۲. پروتکل‌های کاربردی و اصلی شبکه (دسته‌بندی شده):\nمعرفی مهم‌ترین پروتکل‌های عملیاتی شبکه به تفکیک حوزه کارکرد در زیرساخت:',
            },
            {
                type: 'text',
                en: '• Network Infrastructure & Addressing Protocols:\n - IP (Internet Protocol - IPv4/IPv6): Handles packet addressing and routing across subnets.\n - ARP (Address Resolution Protocol): Resolves IPv4 addresses to physical MAC addresses.\n - ICMP (Internet Control Message Protocol): Used for diagnostic utility messages (Ping, Traceroute).\n\n• Network Security & Encryption Protocols:\n - TLS/SSL (Transport Layer Security): Encrypts transport layer traffic for web and services.\n - IPsec (Internet Protocol Security): Provides authentication and encryption for network-layer VPNs.\n - SSH (Secure Shell): Provides encrypted command-line sessions for device configuration.\n\n• Management & Telemetry Protocols:\n - SNMP (Simple Network Management Protocol): Collects status metrics from network routers/switches.\n - Syslog: Standardizes event logging and telemetry transmission to a central SIEM or log server.\n - NTP (Network Time Protocol): Synchronizes precise timestamping across domain nodes.',
                fa: '• پروتکل‌های زیرساخت و آدرس‌دهی:\n - پروتکل IP (IPv4/IPv6): مسئول آدرس‌دهی و مسیریابی بسته‌ها بین شبکه‌های مختلف.\n - پروتکل ARP: تبدیل آدرس IPv4 به آدرس فیزیکی (MAC Address) در شبکه محلی.\n - پروتکل ICMP: مورد استفاده در ابزارهای عیب‌یابی و بررسی اتصال (Ping و Traceroute).\n\n• پروتکل‌های امنیت و رمزنگاری:\n - پروتکل TLS/SSL: رمزنگاری ترافیک لایه حمل برای وب و سرویس‌های کاربردی.\n - پروتکل IPsec: تامین امنیت، احراز هویت و رمزنگاری در تونل‌های شبکه (VPN).\n - پروتکل SSH: ایجاد جلسات متنی رمزنگاری‌شده و امن برای مدیریت تجهیزات.\n\n• پروتکل‌های مدیریت و پایش (Telemetry):\n - پروتکل SNMP: جمع‌آوری اطلاعات و شاخص‌های عملکردی تجهیزات شبکه.\n - پروتکل Syslog: ارسال متمرکز لاگ‌ها و رویدادهای سیستم به سرور SIEM یا Log Server.\n - پروتکل NTP: همگام‌سازی دقیق زمان سیستم‌ها برای تطابق لاگ‌ها و هشدارهای امنیتی.',
            },
            {
                type: 'text',
                en: '3. Core Network+ Concepts:\nKey architectural principles forming the foundation of network engineering:',
                fa: '۳. مفاهیم اصلی و کلیدی +Network:\nاصول پایه و معمارانه‌ای که شالوده مهندسی شبکه را تشکیل می‌دهند:',
            },
            {
                type: 'text',
                en: '• OSI Model vs. TCP/IP Stack:\nThe OSI (Open Systems Interconnection) 7-layer theoretical model (Physical, Data Link, Network, Transport, Session, Presentation, Application) contrasts with the practical 4-layer TCP/IP Stack (Network Interface, Internet, Transport, Application).\n\n• Subnetting & CIDR (Classless Inter-Domain Routing):\nSubnetting divides a large network IP space into smaller broadcast domains, optimizing address utilization and reducing unnecessary ARP broadcast traffic.\n\n• Network Media & Topologies:\nPhysical media spans Coaxial, Twisted Pair (Cat5e/Cat6/Cat6a), and Fiber Optic (Single-Mode vs. Multi-Mode), configured in Star, Mesh, or Hybrid topologies for maximum redundancy.',
                fa: '• مقایسه مدل OSI و مدل TCP/IP:\nمدل ۷ لایه‌ای نظری OSI (شامل Physical, Data Link, Network, Transport, Session, Presentation, Application) در برابر مدل کاربردی ۴ لایه‌ای TCP/IP (شامل Network Interface, Internet, Transport, Application) قرار دارد.\n\n• سابنتینگ (Subnetting) و CIDR:\nسابنتینگ فرآیند تقسیم یک شبکه بزرگ به شبکه‌های کوچکتر جهت بهینه‌سازی آدرس‌دهی IP و کاهش ترافیک‌های منتشرشده (Broadcast Domains).\n\n• رسانه‌های انتقال و توپولوژی‌ها:\nشامل کابل‌های مسی (Cat6/Cat6a)، فیبر نوری (Single-Mode و Multi-Mode) و توپولوژی‌های Star (ستاره‌ای) و Mesh (مشبک) جهت ایجاد پایداری و مسیرهی جایگزین (Redundancy).',
            },
            {
                type: 'text',
                en: '4. Core Security+ Concepts:\nFundamental security frameworks and threat vectors governing cybersecurity postures:',
                fa: '۴. مفاهیم اصلی و کلیدی Security+:\nچارچوب‌های پایه امنیتی و برداری تهدیدات برای ایمن‌سازی زیرساخت‌های فناوری اطلاعات:',
            },
            {
                type: 'text',
                en: '• The CIA Triad:\n - Confidentiality: Ensuring data is accessible only to authorized personnel (Encryption, ACLs).\n - Integrity: Guaranteeing data remains untampered during storage or transit (Hashing, Digital Signatures).\n - Availability: Ensuring services remain accessible to legitimate users (Redundancy, Backups, Clustering).\n\n• The AAA Framework:\n - Authentication: Verifying the identity of a user or system (Passwords, MFA, Certificates).\n - Authorization: Determining what resources an authenticated entity can access (RBAC, NTFS Permissions).\n - Accounting: Tracking user activities and system access history (Audit Logs, Syslog).\n\n• Common Threat Vectors & Attacks:\n - Phishing & Social Engineering: Deceiving humans to divulge sensitive credentials.\n - Man-in-the-Middle (MITM): Intercepting and altering traffic between two communicating hosts.\n - Denial of Service (DoS/DDoS): Overwhelming resources with bogus traffic to cause outages.',
                fa: '• مثلث امنیت (CIA Triad):\n - محرمانگی (Confidentiality): اطمینان از دسترسی افراد مجاز به اطلاعات (با رمزنگاری و ACLs).\n - یکپارچگی (Integrity): تضمین عدم دستکاری داده‌ها هنگام ذخیره‌سازی یا انتقال (با Hashing و امضای دیجیتال).\n - در دسترس بودن (Availability): تضمین سرویس‌دهی مداوم به کاربران مجاز (با Redundancy، بکاپ و کلاسترینگ).\n\n• چارچوب امنیتی AAA:\n - احراز هویت (Authentication): تایید هویت کاربر یا سیستم (کلمه عبور، MFA، گواهی دیجیتال).\n - سطح دسترسی (Authorization): تعیین مجاز بودن کاربر برای دسترسی به منابع (RBAC و NTFS Permissions).\n - پاسخگویی و ثبت (Accounting): ثبت و پایش کلیه فعالیت‌ها و نشست‌های کاری کاربر (Audit Logs).\n\n• تهدیدات و حملات رایج امنیتی:\n - فیشینگ و مهندسی اجتماعی: فریب افراد برای افشای اطلاعات حساس و رمزهای عبور.\n - حمله مرد میانجی (MITM): شنود و دستکاری ترافیک بین دو مبدأ و مقصد در شبکه.\n - حملات منع سرویس (DoS / DDoS): از دسترس خارج کردن سرویس‌ها با ارسال ترافیک سنگین و کاذب.',
            },
            {
                type: 'text',
                en: 'Engineering Takeaway & Operational Considerations:\nA thorough knowledge of well-known ports and security models is essential when configuring enterprise firewalls, access control lists (ACLs), and SIEM rules. Always disable unnecessary open ports and unencrypted legacy protocols (e.g., Telnet, HTTP) in production, enforcing secure alternatives like SSH and HTTPS alongside strict AAA controls.',
                fa: 'جمع‌بندی مهندسی و نکات عملیاتی:\nتسلط بر پورت‌های استاندارد و اصول اولیه امنیت، الزامی‌ترین پیش‌نیاز برای تنظیم فایروال‌ها، لیست‌های دسترسی (ACL) و قواعد سیستم‌های SIEM است. همواره در محیط‌های عملیاتی پورت‌های غیرضروری و پروتکل‌های ناامن و قدیمی (مانند Telnet و HTTP) را مسدود کرده و گزینه‌های امن مانند SSH و HTTPS را همراه با الزامات کامل AAA پیاده‌سازی نمایید.',
            }
        ],
        author: 'obk',
        date: '2026-08-09',
        image: NetworkandSecurity,
        tags: ['Network Plus'],
    },

    // Virtualization articles
    // --- article #4 ---
    {
        id: 4,
        slug: 'enterprise-virtualization-esxi-vcenter-hyperv',
        title: {
            en: 'Enterprise Virtualization Architecture: ESXi, vCenter, Hyper-V & Workstation Implementation',
            fa: 'معماری مجازی‌سازی سازمانی: مقایسه و پیاده‌سازی VMware ESXi ،vCenter ،Hyper-V و Workstation',
        },
        excerpt: {
            en: 'A technical evaluation of enterprise virtualization—comparing Type 1 and Type 2 hypervisors, vCenter cluster management, Hyper-V, and Workstation alongside configuration baselines.',
            fa: 'بررسی تخصصی مجازی‌سازی سازمانی؛ مقایسه هایپروایزرهای نوع ۱ و ۲، مدیریت متمرکز کلاستر با vCenter، Hyper-V و Workstation به همراه راهنمای کانفیگ عملیاتی.',
        },
        content: [
            {
                type: 'text',
                en: 'Virtualization is the backbone of modern data center architecture, enabling efficient hardware resource utilization, isolation, and rapid disaster recovery. Enterprise deployment relies on selecting the appropriate hypervisor layer: VMware ESXi and Microsoft Hyper-V for production host servers, VMware vCenter Server for centralized cluster orchestration, and VMware Workstation for local engineering lab topologies.',
                fa: 'مجازی‌سازی زیربنای اصلی معماری دیتاسنترهای مدرن است که امکان بهره‌وری حداکثر از منابع سخت‌افزاری، ایزوله‌سازی سرویس‌ها و بازیابی سریع در شرایط بحران را فراهم می‌کند. پیاده‌سازی سازمانی نیازمند انتخاب درست لایه‌های مجازی‌سازی است: VMware ESXi و Microsoft Hyper-V برای سرورهای عملیاتی، VMware vCenter Server برای مدیریت متمرکز کلاستر، و VMware Workstation برای ساخت محیط‌های تست و آزمایشگاهی.',
            },
            {
                type: 'text',
                en: 'Hypervisor Architecture Fundamentals (Type 1 vs. Type 2):\n• Type 1 (Bare-Metal Hypervisor):\nInstalls directly on physical server hardware without an underlying host operating system. It provides direct hardware access, high performance, and ultra-low latency. Designed for production enterprise data centers (e.g., VMware ESXi, Microsoft Hyper-V).\n\n• Type 2 (Hosted Hypervisor):\nRuns as an application layer on top of an existing host operating system (such as Windows or Linux). Hardware access is mediated through the host OS, making it ideal for local testing, staging, and lab environments (e.g., VMware Workstation).',
                fa: 'اصول و طبقه بندی هایپروایزرها (نوع اول در برابر نوع دوم):\n• هایپروایزر نوع اول (Type 1 - Bare-Metal):\nمستقیماً روی سخت‌افزار فیزیکی سرور نصب می‌شود و سیستم‌عامل واسط ندارد. این نوع، دسترسی مستقیم به پردازنده و رم داشته و حداکثر کارایی و کمترین تاخیر را ارائه می‌دهد (مخصوص دیتاسنترهای عملیاتی مانند VMware ESXi و Hyper-V).\n\n• هایپروایزر نوع دوم (Type 2 - Hosted):\nبه عنوان یک نرم‌افزار روی سیستم‌عامل میزبان (مثل ویندوز یا لینوکس دسکتاپ) اجرا می‌شود. دسترسی به سخت‌افزار از طریق سیستم‌عامل اصلی انجام می‌شود و برای محیط‌های تست، توسعه و آزمایشگاه‌های شخصی مناسب است (مانند VMware Workstation).',
            },
            {
                type: 'text',
                en: '1. VMware ESXi (Type 1 Bare-Metal Hypervisor):\nVMware ESXi installs directly onto bare-metal server hardware (Dell PowerEdge, HPE ProLiant), offering near-zero OS overhead and industry-leading memory management (Transparent Page Sharing, Ballooning).\n\n• Key Features:\n - Direct VMkernel interaction with physical CPU, RAM, and Storage.\n - High-performance VMFS (Virtual Machine File System) clustered datastores.\n - Native support for enterprise distributed networking and hardware telemetry.',
                fa: '۱. بررسی VMware ESXi (هایپروایزر نوع اول بومی دیتاسنتر):\nنرم‌افزار VMware ESXi مستقیماً روی سخت‌افزار سرور نصب می‌شود و حداقل بار اضافی (Overhead) را به سیستم تحمیل می‌کند. این پلتفرم استاندارد اصلی دیتاسنترها برای اجرای مستقیم ماشین‌های مجازی است.\n\n• ویژگی‌های کلیدی:\n - ارتباط مستقیم هسته VMkernel با سخت‌افزار سرور (پردازنده، رم و استوریج).\n - سیستم‌فایل اختصاصی و پرسرعت VMFS برای مدیریت دیتا استورهای مشترک.\n - پشتیبانی کامل از شبکه توزیع‌شده و داده‌های دورسنجی (Telemetry) سخت‌افزاری سرورها.',
            },
            {
                type: 'text',
                en: '2. VMware vCenter Server (Centralized Cluster Orchestrator):\nvCenter Server Appliance (vCSA) acts as the centralized management plane for the entire VMware vSphere environment. It pools multiple physical ESXi hosts into unified Data Centers and Clusters, enabling advanced fault-tolerance features.',
                fa: '۲. بررسی VMware vCenter Server (مدیریت متمرکز و هوشمند کلاستر):\nسرویس vCenter Appliance (vCSA) به عنوان مغز متمرکز زیرساخت VMware vSphere عمل می‌کند. این ابزار چندین سرور فیزیکی ESXi را در قالب یک کلاستر یکپارچه مدیریت کرده و قابلیت‌های پایداری و عدم قطع سرویس را فعال می‌سازد.',
            },
            {
                type: 'text',
                en: 'Key vSphere Enterprise Features Overview:\n• vMotion: Live migration of running VMs between ESXi hosts with zero downtime.\n• Storage vMotion: Live migration of VM disk files across different datastores without interrupting service.\n• High Availability (HA): Automatically restarts VMs on healthy ESXi hosts if a physical server suffers a hardware failure.\n• Distributed Resource Scheduler (DRS): Automatically balances CPU and RAM workloads across ESXi hosts in a cluster.\n• Fault Tolerance (FT): Creates a continuous live shadow mirror of a VM for zero-data-loss protection against hardware faults.',
                fa: 'مفاهیم کلیدی و کاربردی vSphere در کلاستر:\n• قابلیت vMotion: انتقال زنده و بدون قطعی ماشین مجازی روشن از یک سرور ESXi به سرور دیگر.\n• قابلیت Storage vMotion: جابه‌جایی زنده فایل‌های دیسک ماشین مجازی بین دیتا استورهای مختلف بدون توقف سرویس.\n• قابلیت High Availability (HA): روشن کردن خودکار ماشین‌ها روی سرورهای سالم کلاستر در صورت بروز خرابی سخت‌افزاری در یک سرور.\n• قابلیت Distributed Resource Scheduler (DRS): توزیع و متعادل‌سازی خودکار بار پردازشی (CPU/RAM) بین سرورهای کلاستر.\n• قابلیت Fault Tolerance (FT): ساخت یک نسخه هم‌زمان و زنده (Mirror) از ماشین مجازی جهت جلوگیری از حتی یک ثانیه قطعی هنگام سوختن سرور.',
            },
            {
                type: 'text',
                en: '3. Microsoft Hyper-V (Type 1 Bare-Metal Hypervisor):\nIntegrated directly into Windows Server, Hyper-V leverages the Windows hypervisor layer below the management OS partition. It provides native ecosystem integration and cost efficiency for Windows-centric infrastructures.\n\n• Key Features:\n - Native PowerShell management (`Hyper-V Module`) and System Center Integration.\n - Failover Clustering with Cluster Shared Volumes (CSV) for zero-downtime migration.\n - Included within Windows Server licensing, reducing total cost of ownership (TCO).',
                fa: '۳. بررسی Microsoft Hyper-V (هایپروایزر نوع اول مایکروسافت):\nاین هایپروایزر به‌صورت بومی در ویندوز سرور قرار دارد و لایه مجازی‌سازی را زیر پارتیشن مدیریت اجرا می‌کند. این ابزار گزینه‌ای بسیار اقتصادی و قدرتمند برای شبکه‌های مبتنی بر زیرساخت مایکروسافت است.\n\n• ویژگی‌های کلیدی:\n - مدیریت یکپارچه با پاوِرشِل و کنسول‌های مدیریتی مایکروسافت.\n - پشتیبانی از Failover Clustering و دیسک‌های مشترک CSV جهت جابه‌جایی زنده ماشین‌ها.\n - کاهش هزینه‌های لایسنس به دلیل یکپارچگی با لایسنس ویندوز سرور.',
            },
            {
                type: 'text',
                en: '4. VMware Workstation Pro (Type 2 Hosted Hypervisor):\nWorkstation runs as an application on top of Windows or Linux desktop operating systems. It is engineered for systems engineers, developers, and security analysts to build complex lab topologies locally.\n\n• Key Features:\n - Rapid snapshotting, VM cloning (Linked/Full), and team network lab creation.\n - Advanced Virtual Network Editor for simulating multi-homed routers and isolated subnets.\n - Ideal for staging configurations before deployment to ESXi or Hyper-V production clusters.',
                fa: '۴. بررسی VMware Workstation Pro (هایپروایزر نوع دوم دسکتاپ):\nاین نرم‌افزار به عنوان یک برنامه روی سیستم‌عامل دسکتاپ اجرا می‌شود و ابزار دست‌راست مهندسان شبکه برای شبیه‌سازی سناریوها، تست نرم‌افزارها و آزمایشگاه‌های آموزشی است.\n\n• ویژگی‌های کلیدی:\n - امکان اخذ اسنپ‌شات‌های سریع، کلون‌گیری (Linked/Full) و ساخت شبکه‌های آزمایشگاهی پیچیده.\n - ابزار Virtual Network Editor جهت شبیه‌سازی شبکه‌های ایزوله، NAT و Bridged.\n - محیطی ایده‌آل برای تست سناریوها قبل از پیاده‌سازی نهایی روی سرورهای واقعی.',
            },
            {
                type: 'text',
                en: 'Key Type 2 Hypervisor Concepts & Operations:\n• Snapshot: Captures the exact state (memory, disk, settings) of a VM at a specific point in time, allowing instant rollback before applying system updates or risky tests.\n• Linked Clone: Creates a lightweight VM copy that references the parent VM\'s base virtual disk, saving significant storage space and deployment time.\n• Full Clone: Creates a completely independent, standalone copy of the VM with a separate virtual disk, isolated from the original parent.\n• OVF / OVA Export: Standardized packaging formats (Open Virtualization Format/Appliance) used to export, migrate, and distribute pre-configured VMs across different hypervisors.\n• Virtual Network Types (Bridged, NAT, Host-Only):\n - Bridged: Connects the VM directly to the physical network, obtaining its own IP from the physical router.\n - NAT: Shares the host IP address for outbound internet access while hiding the VM behind an internal network.\n - Host-Only: Completely isolates the VM, allowing network communication only between the host and other VMs on the same network.',
                fa: 'مفاهیم و عملیات‌های کلیدی در هایپروایزر نوع دوم:\n• اسنپ‌شات (Snapshot): ثبت و ذخیره وضعیت دقیق ماشین مجازی (رم، دیسک و تنظیمات) در یک لحظه از زمان جهت بازگشت سریع (Rollback) در صورت بروز مشکل پس از آپدیت یا تست‌های خطرناک.\n• کلون وابسته (Linked Clone): ساخت یک نسخه سبک از ماشین مجازی که به دیسک اصلی (Parent) وابسته است و باعث صرفه‌جویی شدید در فضای ذخیره‌سازی و زمان می‌شود.\n• کلون کامل (Full Clone): ساخت یک کپی کاملاً مستقل و مجزا از ماشین مجازی همراه با دیسک اختصاصی بدون هیچ وابستگی به ماشین اولیه.\n• خروجی OVF / OVA: فرمت‌های استاندارد و فشرده برای استخراج (Export)، جابه‌جایی و انتقال ماشین‌های مجازی آماده بین هایپروایزرهای مختلف.\n• انواع شبکه‌های مجازی (Bridged, NAT, Host-Only):\n - شبکه Bridged: اتصال مستقیم ماشین مجازی به شبکه فیزیکی و دریافت IP مستقل از روتر اصلی.\n - شبکه NAT: استفاده از IP سیستم‌عامل میزبان برای دسترسی به اینترنت و پنهان‌سازی ماشین در یک شبکه داخلی.\n - شبکه Host-Only: ایزوله‌سازی کامل ماشین مجازی به‌طوری‌که فقط با سیستم‌عامل میزبان و سایر ماشین‌های هم‌شبکه ارتباط دارد.',
            },
            {
                type: 'table',
                headers: {
                    en: ['Component / Feature', 'Architecture Type', 'Primary Function', 'Recovery / Migration Tech'],
                    fa: ['مولفه / ویژگی', 'نوع معماری', 'کارکرد اصلی', 'تکنولوژی بازیابی و جابه‌جایی']
                },
                rows: {
                    en: [
                        ['VMware ESXi', 'Type 1 (Bare-Metal)', 'Bare-Metal Compute Host', 'VMkernel & VMFS Datastores'],
                        ['VMware vCenter', 'Cluster Management Engine', 'Centralized Cluster Orchestration', 'vMotion, Storage vMotion, HA, DRS, FT'],
                        ['Microsoft Hyper-V', 'Type 1 (Bare-Metal)', 'Windows Server Virtualization', 'Live Migration & Failover Cluster'],
                        ['VMware Workstation', 'Type 2 (Hosted)', 'Local Engineer Testing Lab', 'Local VM Snapshots & Linked Clones']
                    ],
                    fa: [
                        ['VMware ESXi', 'نوع اول (Bare-Metal)', 'میزبان فیزیکی ماشین‌ها', 'هسته VMkernel و دیتا استورهای VMFS'],
                        ['VMware vCenter', 'موتور مدیریت کلاستر', 'مدیریت متمرکز کلاستر', 'پشتیبانی از vMotion ،HA ،DRS و FT'],
                        ['Microsoft Hyper-V', 'نوع اول (Bare-Metal)', 'مجازی‌سازی بومی مایکروسافت', 'قابلیت Live Migration و Failover Cluster'],
                        ['VMware Workstation', 'نوع دوم (Hosted)', 'محیط تست و آزمایشگاه شخصی', 'اسنپ‌شات‌های محلی و کلون‌گیری سریع']
                    ]
                }
            },
            {
                type: 'text',
                en: '1. VMware vCenter Cluster & vMotion Configuration:\nTo enable live VM migration (vMotion) across ESXi hosts managed by vCenter:',
                fa: '۱. پیکربندی کلاستر و vMotion در VMware vCenter Server:\nمراحل ساخت کلاستر و فعال‌سازی قابلیت جابه‌جایی زنده (vMotion) بین سرورهای ESXi در کنسول vCenter:',
            },
            {
                type: 'text',
                en: 'vCenter vMotion & Cluster Setup Path:',
                fa: 'مسیر ساخت Datacenter، کلاستر و فعال‌سازی vMotion در vCenter:',
            },
            {
                type: 'code',
                language: 'vSphere Client Path',
                code: `vSphere Client -> Menu -> Hosts and Clusters -> Actions -> New Datacenter -> New Cluster (Turn ON vSphere HA & DRS) -> Add ESXi Hosts -> Configure VMkernel Adapter (Enable vMotion service)`
            },
            {
                type: 'text',
                en: '2. Microsoft Hyper-V Virtual Switch Configuration via PowerShell:\nCreating an External Virtual Switch bound to a physical NIC via PowerShell:',
                fa: '۲. پیکربندی سوئیچ مجازی در Hyper-V با پاوِرشِل:\nساخت یک Virtual Switch از نوع External و متصل به کارت شبکه فیزیکی:',
            },
            {
                type: 'code',
                language: 'PowerShell (Hyper-V Module)',
                code: `# Create External Virtual Switch bound to physical interface
New-VMSwitch -Name "External_vSwitch" -NetAdapterName "Ethernet 1" -AllowManagementOS $true`
            },
            {
                type: 'text',
                en: '3. VMware Workstation Virtual Network Editor Mapping:\nFor local sandbox isolation, VMnet8 (NAT) can be modified in Virtual Network Editor to assign custom DHCP ranges and subnets:',
                fa: '۳. تنظیمات شبکه در VMware Workstation:\nتنظیم کارت شبکه VMnet8 (NAT) برای ایزوله‌سازی آزمایشگاه از شبکه واقعی:',
            },
            {
                type: 'code',
                language: 'Workstation Menu Path',
                code: `Edit -> Virtual Network Editor -> Change Settings -> Select VMnet8 (NAT) -> Subnet IP: 192.168.100.0/24`
            },
            {
                type: 'text',
                en: 'Engineering Takeaway & Operational Considerations:\nIn enterprise environments, standalone ESXi hosts without vCenter create management silos and eliminate high-availability protection. Always deploy Type 1 hypervisors for production workloads and use vCenter Server (vCSA) when operating two or more hosts. Reserve Type 2 hypervisors like VMware Workstation strictly for engineering prototyping and local sandbox testing.',
                fa: 'جمع‌بندی مهندسی و نکات عملیاتی:\nدر شبکه‌های سازمانی، استفاده از سرورهای ESXi به‌صورت منفرد و بدون vCenter باعث سردرگمی در مدیریت و از دست رفتن قابلیت‌های پایداری می‌شود. همواره برای محیط‌های واقعی از هایپروایزرهای نوع اول استفاده کرده و در صورت وجود دو یا چند سرور، vCenter Server را برای فعال‌سازی vMotion و HA مستقر کنید. از هایپروایزرهای نوع دوم مانند Workstation صرفاً برای تست اولیه سناریوها بهره بگیرید.',
            }
        ],
        references: [
            { url: 'https://www.vmware.com/products/cloud-infrastructure/esxi-and-esx', label: { en: 'VMware ESXi Official', fa: 'سایت رسمی VMware ESXi' } },
            { url: 'https://learn.microsoft.com/en-us/windows-server/virtualization/hyper-v/hyper-v-on-windows-server', label: { en: 'Microsoft Hyper-V Docs', fa: 'مستندات Hyper-V مایکروسافت' } },
        ],
        author: 'obk',
        date: '2026-08-09',
        image: Virtualization,
        tags: ['Virtualization'],
    },

    // monitoring software articles
    // --- article #5 ---
    {
        id: 5,
        slug: 'prtg-vs-opmanager-network-monitoring-guide',
        title: {
            en: 'PRTG vs. OpManager: Technical Evaluation & Configuration Guide',
            fa: 'ارزیابی فنی و راهنمای پیاده‌سازی: مقایسه جامع PRTG و OpManager',
        },
        excerpt: {
            en: 'A comprehensive engineering evaluation comparing PRTG and OpManager, analyzing features, pros, cons, and configuration steps to choose the ideal monitoring solution.',
            fa: 'بررسی و مقایسه مهندسی ابزارهای PRTG و OpManager؛ تحلیل ویژگی‌ها، مزایا، معایب و راهنمای کانفیگ جهت انتخاب بهترین راه‌حل مانیتورینگ برای سازمان.',
        },
        content: [
            {
                type: 'text',
                en: 'Selecting the right network monitoring architecture is a critical decision for IT managers and systems engineers. Deploying multiple monitoring tools simultaneously in a single enterprise infrastructure introduces unnecessary overhead, configuration sprawl, and alert duplication. Instead, organizations must evaluate their core operational needs, whether prioritizing granular SNMP traffic metrics or deep server and application topology, and select a single, robust platform. This article provides a comparative breakdown of PRTG and OpManager alongside practical configuration baselines for both.',
                fa: 'انتخاب یک ابزار مانیتورینگ مناسب، یکی از تصمیمات کلیدی در زیرساخت‌های فناوری اطلاعات است. پیاده‌سازی هم‌زمان چند ابزار مانیتورینگ در یک شبکه، علاوه بر ایجاد پیچیدگی‌های عملیاتی و مصرف بی‌مورد منابع، منجر به سردرگمی در مدیریت آلارم‌ها می‌شود. از این رو، مهندسان شبکه باید با بررسی دقیق نیازهای سازمان، چه تمرکز بر جزئیات ترافیک پورت‌ها باشد و چه پایش عمیق سرورها، مناسب‌ترین پلتفرم را انتخاب کنند. در این مقاله به ارزیابی تخصصی، بررسی مزایا و معایب PRTG و OpManager و نحوه کانفیگ عملیاتی آن‌ها می‌پردازیم.',
            },
            {
                type: 'text',
                en: '1. Paessler PRTG Overview:\nPRTG is renowned for its intuitive sensor-based licensing and swift out-of-the-box deployment. It excels at tracking bandwidth, network hardware status, and ping latency through clean GUI elements.\n\n• Pros:\n - Rapid deployment and seamless initial setup.\n - Highly flexible sensor architecture (SNMP, WMI, Packet Sniffing, NetFlow).\n - Excellent built-in maps and visual dashboard gauges.\n• Cons:\n - Licensing based on sensor count can become expensive in vast environments.\n - Database history can experience strain under extremely heavy sensor loads.',
                fa: '۱. بررسی نرم‌افزار Paessler PRTG:\nنرم‌افزار PRTG به دلیل مدل لایسنس‌دهی مبتنی بر سنسور و راه اندازی سریع بسیار محبوب است. این ابزار در مانیتورینگ پهنای باند، وضعیت تجهیزات شبکه و پایش تاخیر (Latency) عملکرد فوق‌العاده‌ای دارد.\n\n• مزایا:\n - راه‌اندازی بسیار سریع و رابط کاربری ساده و قدرتمند.\n - تنوع بالای سنسورهای پیش‌فرض (SNMP، WMI، NetFlow و Packet Sniffing).\n - قابلیت طراحی نقشه‌ها (PRTG Maps) و گیج‌های تصویری عالی.\n• معایب:\n - مدل لایسنس‌دهی سنسورمحور در شبکه‌های خیلی بزرگ می‌تواند پرهزینه باشد.\n - افت کارایی دیتابیس بومی در حجم‌های بسیار سنگین داده‌های تاریخی.',
            },
            {
                type: 'text',
                en: '2. OpManager Overview:\nOpManager is an enterprise-grade platform built for device-centric management, offering deep visibility into server health, virtualized environments, and automated workflow triggers.\n\n• Pros:\n - Device-based licensing model, ideal for high-density servers and switches.\n - Advanced topology mapping (3D Floor Maps, Rack views) for NOC rooms.\n - Strong integration with other enterprise IT management products.\n• Cons:\n - Steeper learning curve and higher initial setup complexity.\n - Requires higher underlying server compute resources compared to PRTG.',
                fa: '۲. بررسی نرم‌افزار OpManager:\nنرم‌افزار OpManager یک پلتفرم سازمانی قدرتمند با محوریت دستگاه (Device-centric) است که امکانات پیشرفته‌ای برای پایش سرورها، محیط‌های مجازی و اجرای خودکار اسکریپت‌های اصلاحی فراهم می‌کند.\n\n• مزایا:\n - لایسنس‌دهی بر اساس تعداد دستگاه (Device)، مناسب برای شبکه‌های عریض و سرورهای متعدد.\n - طراحی نقشه‌های دقیق، نمایش ۳ بعدی رک‌ها و دیتاسنتر مخصوص اتاق‌های NOC.\n - یکپارچگی عالی با سایر محصولات سازمانی مدیریت IT.\n• معایب:\n - پیچیدگی بیشتر در پیکربندی اولیه و منحنی یادگیری سنگین‌تر.\n - مصرف منابع سخت‌افزاری بالاتر سرور نسبت به PRTG.',
            },
            {
                type: 'table',
                headers: {
                    en: ['Evaluation Metric', 'PRTG', 'OpManager', 'Engineering Recommendation'],
                    fa: ['شاخص ارزیابی', 'PRTG', 'OpManager', 'توصیه مهندسی جهت انتخاب']
                },
                rows: {
                    en: [
                        ['Licensing Model', 'Sensor-based', 'Device-based', 'PRTG for focused links; OpManager for large node counts'],
                        ['Setup Complexity', 'Low (Minutes)', 'Medium / High', 'PRTG for quick wins; OpManager for complex enterprise NOCs'],
                        ['Server & Virt Monitoring', 'Standard (WMI/SNMP)', 'Advanced (Deep ESXi/Hyper-V)', 'OpManager wins for heavy virtual/server infra'],
                        ['Network Traffic Analysis', 'Built-in Flow Sensors', 'NetFlow Add-on module', 'PRTG offers easier out-of-the-box flow telemetry']
                    ],
                    fa: [
                        ['مدل لایسنس‌دهی', 'مبتنی بر سنسور (Sensor)', 'مبتنی بر دستگاه (Device)', 'PRTG برای جزئیات پورت‌ها؛ OpManager برای تعداد بالای نودها'],
                        ['پیچیدگی راه‌اندازی', 'کم (چند دقیقه)', 'متوسط تا بالا', 'PRTG برای سرعت عمل؛ OpManager برای مرکز عملیات شبکه (NOC)'],
                        ['پایش سرور و مجازی‌سازی', 'استاندارد (WMI/SNMP)', 'پیشرفته (پایش عمیق ESXi/VMware)', 'برتری OpManager در زیرساخت‌های سنگین سروری'],
                        ['تحلیل ترافیک شبکه', 'سنسورهای داخلی Flow', 'ماژول جداگانه NetFlow', 'سادگی بیشتر PRTG در تحلیل ترافیک و پهنای باند']
                    ]
                }
            },
            {
                type: 'text',
                en: '1. Practical PRTG Implementation (SNMP v3 Switch & Bandwidth Sensor):\nBelow is the command baseline for securing SNMP v3 on network hardware, followed by the GUI sensor setup in PRTG:',
                fa: '۱. پیاده‌سازی عملیاتی در PRTG (پیکربندی SNMP v3 و سنسور پهنای باند):\nدستورات زیر برای ایمن‌سازی پروتکل SNMP v3 روی سوئیچ سیسکو و سپس افزودن آن به PRTG استفاده می‌شود:',
            },
            {
                type: 'code',
                language: 'Cisco IOS Command Line',
                code: `! Configure Secure SNMP v3 Group and User on Cisco Switch
snmp-server group PRTG_GROUP v3 priv read PRTG_VIEW
snmp-server view PRTG_VIEW iso include
snmp-server user prtgadmin PRTG_GROUP v3 auth sha AuthPass2026! priv aes 128 PrivPass2026!`
            },
            {
                type: 'text',
                en: 'PRTG GUI Setup Path:',
                fa: 'مسیر اضافه کردن سنسور در کنسول PRTG:',
            },
            {
                type: 'code',
                language: 'PRTG Menu Path',
                code: `Devices -> Add Device -> Credentials for SNMP Devices (SNMP v3) -> Add Sensor -> SNMP Traffic`
            },
            {
                type: 'text',
                en: '2. Practical OpManager Implementation (Server WMI Monitoring & Thresholds):\nTo monitor Windows Server resources in OpManager via WMI, follow these configuration steps:',
                fa: '۲. پیاده‌سازی عملیاتی در OpManager (پایش سرورها با WMI و تنظیم آستانه هشدار):\nبرای پایش منابع سرورهای ویندوزی از طریق WMI در کنسول OpManager، مراحل زیر طی می‌شود:',
            },
            {
                type: 'text',
                en: 'OpManager GUI Setup Path:',
                fa: 'مسیر کشف دستگاه و تنظیم آستانه هشدار در OpManager:',
            },
            {
                type: 'code',
                language: 'OpManager Menu Path',
                code: `Settings -> Discovery -> Add Device -> Select Credential Profile(WMI) -> Edit Thresholds (CPU > 85%, RAM > 90%)`
            },
            {
                type: 'text',
                en: 'Engineering Takeaway & Operational Considerations:\nDo not deploy both tools in a production environment simultaneously. Choose PRTG if your network architecture prioritizes rapid setup, port-level traffic details, and streamlined sensor management. Opt for OpManager if you require centralized NOC visualization, deep server/virtualization metrics, and device-based scaling for large server farms.',
                fa: 'جمع‌بندی مهندسی و نکات عملیاتی:\nهرگز دو ابزار مانیتورینگ را به‌صورت هم‌زمان در شبکه عملیاتی زیر بار نبرید. اگر اولویت سازمان شما راه‌اندازی سریع، تحلیل ترافیک پورت‌ها و مدیریت ساده است، PRTG را انتخاب کنید. اگر نیازمند داشبوردهای عریض برای اتاق NOC، پایش عمیق سرورها/مجازی‌سازی و مدل لایسنس‌دهی مبتنی بر تعداد دستگاه هستید، OpManager گزینه برتر شما خواهد بود.',
            }
        ],
        references: [
            { url: 'https://www.paessler.com/prtg', label: { en: 'PRTG Official Site', fa: 'سایت رسمی PRTG' } },
            { url: 'https://www.manageengine.com/network-monitoring/', label: { en: 'ManageEngine OpManager', fa: 'سایت رسمی OpManager' } },
        ],
        author: 'obk',
        date: '2026-08-09',
        image: PRTGVSOpManager,
        tags: ['Monitoring'],
    },

    // windows server articles
    // --- article #6 (Active-Directory) ---
    {
        id: 6,
        slug: 'active-directory-domain-controller-security',
        title: {
            en: 'Designing Domain Controller Architecture & Active Directory Security Hardening',
            fa: 'طراحی معماری Domain Controller و ایمن‌سازی زیرساخت Active Directory (AD DS)',
        },
        excerpt: {
            en: 'Design a resilient Active Directory architecture, enforce Tiered Administration, and protect Domain Controllers against identity-based security threats.',
            fa: 'طراحی معماری پایداری اکتیو دایرکتوری، پیاده‌سازی مدل امنیتی سه لایه‌ای (Tiering) و ایمن‌سازی Domain Controllerها در برابر حملات هویت‌محور.',
        },
        content: [
            {
                type: 'text',
                en: 'Active Directory Domain Services (AD DS) is the central directory service providing identity verification, authentication, and authorization across enterprise networks. Because Domain Controllers (DCs) store all corporate credentials, security Kerberos tickets, and Access Control Lists (ACLs), they represent the highest-value target for identity-driven cyber attacks. Designing an enterprise AD DS deployment requires far more than setting up a single DC; it demands proper FSMO role placement, Active Directory-Integrated DNS architecture, structured OUs, and strict security hardening.',
                fa: 'سرویس Active Directory Domain Services (AD DS) هسته مرکزی احراز هویت و مدیریت سطح دسترسی‌ها در شبکه‌های سازمانی است. از آنجایی که دامین کنترلرها (DC) محل نگهداری تمامی هش‌های رمزعبور، تیکت‌های Kerberos و مجوزهای دسترسی (ACL) هستند، همواره هدف اصلی مهاجمان سایبری محسوب می‌شوند. طراحی یک زیرساخت اکتیو دایرکتوری سازمانی بسیار فراتر از نصب یک سرور ساده است و نیازمند مدیریت نقش‌های FSMO، یکپارچه‌سازی DNS، معماری دقیق OUها و سخت‌سازی امنیتی (Hardening) می‌باشد.',
            },
            {
                type: 'text',
                en: 'To prevent lateral movement and credential theft (such as Pass-the-Hash or Kerberoasting), enterprise AD architectures implement Microsoft’s Tiered Administration Model:\n• Tier 0 (Control Plane): Highest security boundary. Contains Domain Controllers, PKI servers, and Tier 0 accounts (Domain Admins). Admin accounts here NEVER log on to lower-tier systems.\n• Tier 1 (Server Plane): Manages enterprise application servers, file shares, and databases.\n• Tier 2 (Workstation Plane): Manages end-user devices (desktops, laptops, printers).',
                fa: 'جهت جلوگیری از حرکت عرضی مهاجمان (Lateral Movement) و سرقت هویت در شبکه، معماری استاندارد اکتیو دایرکتوری بر پایه «مدل امنیتی سه لایه‌ای» (Tiered Administration) طراحی می‌شود:\n• لایه صفر (Tier 0 - Control Plane): حساس‌ترین مرز امنیتی شامل دامین کنترلرها، سرورهای CA و اکانت‌های Domain Admin. مدیران این لایه هرگز نباید روی سیستم‌های پایین‌تر لاگین کنند.\n• لایه یک (Tier 1 - Server Plane): مدیریت سرورهای عملیاتی، فایل‌سرورها و دیتابیس‌ها.\n• لایه دو (Tier 2 - Workstation Plane): مدیریت کلاینت‌ها، دسکتاپ‌ها و دستگاه‌های کاربران نهایی.',
            },
            {
                type: 'table',
                headers: {
                    en: ['Administrative Tier', 'Target Asset Class', 'Logon Restrictions', 'Compromise Risk Impact'],
                    fa: ['لایه مدیریتی', 'تجهیزات و دارایی‌ها', 'محدودیت‌های لاگین', 'شعاع آسیب در صورت نفوذ']
                },
                rows: {
                    en: [
                        ['Tier 0', 'Domain Controllers, AD CS, ADFS', 'Denied logon to Tier 1 / Tier 2', 'Total Domain Takeover'],
                        ['Tier 1', 'App Servers, SQL, Hyper-V', 'Denied logon to Tier 2 devices', 'Application Data Loss'],
                        ['Tier 2', 'User Desktops, Laptops', 'Standard admin access only', 'Single Workstation Compromise']
                    ],
                    fa: [
                        ['لایه ۰ (Tier 0)', 'دامین کنترلرها، سرورهای کلیدی', 'ممنوعیت کامل لاگین روی T1 و T2', 'تسلط کامل مهاجم بر کل شبکه'],
                        ['لایه ۱ (Tier 1)', 'سرورهای برنامه، دیتابیس‌ها', 'ممنوعیت لاگین روی کلاینت‌ها (T2)', 'افشای اطلاعات سرور خاص'],
                        ['لایه ۲ (Tier 2)', 'سیستم‌های کلاینتی و لپ‌تاپ‌ها', 'فقط دسترسی لوکال ادمین', 'آسیب محدود به همان کلاینت']
                    ]
                }
            },
            {
                type: 'text',
                en: 'Step-by-Step Security Hardening & Administrative Setup:\n1. Deploy dedicated Tier 0 Administrative Accounts and separate them from standard user identity accounts.\n2. Add high-privilege administrative accounts to the built-in "Protected Users" security group to prevent credential caching (LSASS) and disable NTLM authentication.',
                fa: 'مراحل متنی ایمن‌سازی و پیاده‌سازی ساختار امنیتی:\n۱. ساخت حساب‌های مدیریتی مجزا برای لایه ۰ (Tier 0) و تفکیک کامل آن‌ها از اکانت کاربری روزمره.\n۲. قرار دادن حساب‌های حساسی مثل Domain Admins در گروه امنیتی بومی "Protected Users" جهت غیرفعال کردن ذخیره هش رمز عبور (LSASS) و لغو پروتکل ناامن NTLM.',
            },
            {
                type: 'text',
                en: 'Protected Users Security Group Path:',
                fa: 'مسیر گروه امنیتی Protected Users در اکتیو دایرکتوری:',
            },
            {
                type: 'code',
                language: 'Active Directory Path',
                code: `CN=Protected Users,CN=Users,DC=corp,DC=local`
            },
            {
                type: 'text',
                en: 'Standard Tier 0 Admin OU Isolation Path:',
                fa: 'مسیر ایزوله‌سازی حساب‌های مدیریتی لایه ۰ (Tier 0 Admin OU):',
            },
            {
                type: 'code',
                language: 'Active Directory Path',
                code: `OU=Tier0_Admins,OU=Admin_Accounts,DC=corp,DC=local`
            },
            {
                type: 'text',
                en: 'Automated Account Provisioning & Security Group Assignment via PowerShell:\nBelow is an enterprise PowerShell script to automate user onboarding while enforcing administrative account containment and security Group membership:',
                fa: 'اتوماسیون ساخت حساب‌های کاربری و اعمال گروه‌های امنیتی با پاوِرشِل:\nاسکریپت زیر فرآیند ساخت کاربران از فایل CSV، تخصیص OU مجزا و عضویت در گروه‌های امنیتی را به‌صورت خودکار اجرا می‌کند:',
            },
            {
                type: 'code',
                language: 'PowerShell (Active Directory Module)',
                code: `# Import Active Directory PowerShell Module
Import-Module ActiveDirectory

# Path to standard user onboarding CSV file
$csvPath = "C:\\AD_Automation\\users.csv"

# Import CSV and iterate through user entries
Import-Csv -Path $csvPath | ForEach-Object {
    # Generate random secure temporary password
    $SecurePassword = ConvertTo-SecureString "P@ssw0rd2026!" -AsPlainText -Force

    # Create user in designated department OU
    $NewUser = New-ADUser \`
        -GivenName $_.FirstName \`
        -Surname $_.LastName \`
        -Name "$($_.FirstName) $($_.LastName)" \`
        -SamAccountName $_.SamAccountName \`
        -UserPrincipalName "$($_.SamAccountName)@corp.local" \`
        -Department $_.Department \`
        -Path $_.OU \`
        -AccountPassword $SecurePassword \`
        -Enabled $true \`
        -ChangePasswordAtLogon $true \`
        -PassThru

    # Add user to standard Departmental Security Group
    Add-ADGroupMember -Identity "$($_.Department)_Group" -Members $NewUser
}`
            },
            {
                type: 'text',
                en: 'Engineering Takeaway & Operational Considerations:\nNever rely on snapshot-based backups for Domain Controllers, as restoring an uncoordinated snapshot introduces "USN Rollback", leading to database corruption across partner DCs. Always utilize System State backups or VSS Active Directory aware backups. Furthermore, ensure FSMO roles (especially PDC Emulator and Infrastructure Master) are split logically across multiple Domain Controllers, and auditing for failed logon attempts (`Event ID 4625`) is active cluster-wide.',
                fa: 'جمع‌بندی مهندسی و نکات عملیاتی:\nهرگز برای بکاپ‌گیری از Domain Controllerها به اسنپ‌شات‌های ساده مجازی‌سازی اعتماد نکنید؛ زیرا ریستور کردن اسنپ‌شات باعث پدیده خطرساز "USN Rollback" و نامعتبر شدن دیتابیس AD در سطح بقیه DCها می‌شود. همواره از بکاپ‌های System State یا راهکارهای VSS Aware استفاده کنید. همچنین مطمئن شوید نقش‌های FSMO (مخصوصاً PDC Emulator و Infrastructure Master) بین چند دامین کنترلر توزیع شده‌اند و لاگ‌برداری از تلاش‌های ناموفق ورود (Event ID 4625) فعال باشد.',
            }
        ],
        relatedProject: {
            path: '/Projects/Networking/ActiveDirectoryGpoLab',
            label: { en: 'View Full Lab', fa: 'مشاهده پروژه کامل' }
        },
        author: 'obk',
        date: '2026-08-09',
        image: ActiveDirectory,
        tags: ['MCSA'],
    },
    // --- article #7 (GPO) ---
    {
        id: 7,
        slug: 'windows-gpo-hardening-group-policy-objects',
        title: {
            en: 'Hardening Windows Clients using Group Policy Objects (GPO)',
            fa: 'ایمن‌سازی و مدیریت متمرکز کلاینت‌های ویندوز با Group Policy (GPO)',
        },
        excerpt: {
            en: 'Enforce enterprise security controls, disable USB storage access, and centralize Windows Defender settings across Active Directory clients using GPOs.',
            fa: 'اعمال سیاست‌های امنیتی، مسدودسازی حافظه‌های USB و مدیریت متمرکز تنظیمات ویندوز در اکتیو دایرکتوری با استفاده از Group Policy.',
        },
        content: [
            {
                type: 'text',
                en: 'Group Policy Objects (GPOs) serve as the backbone of centralized administration and security enforcement in an Active Directory Domain Services (AD DS) environment. Managing security configurations manually on dozens or hundreds of individual Windows clients is inefficient and error-prone. By leveraging GPOs linked to specific Organizational Units (OUs), system administrators can globally enforce security baselines, restrict unauthorized hardware access, configure software behavior, and maintain regulatory compliance across the entire enterprise.',
                fa: 'شیء سیاست گروهی (GPO) ستون فقرات مدیریت متمرکز و اعمال امنیت در زیرساخت اکتیو دایرکتوری (AD DS) به شمار می‌رود. اعمال دسترسی‌ها و تنظیمات امنیتی به‌صورت دستی روی ده‌ها یا صدها کامپیوتر کاری بسیار زمان‌بر و پرخطاست. با استفاده از GPO و لینک کردن آن به دامنه‌ها یا Organizational Unitها (OU)، مدیران شبکه می‌توانند الزامات امنیتی، بستن دسترسی به سخت‌افزارهای غیرمجاز و کانفیگ‌های ویندوز را به‌صورت یکپارچه و آنی در سراسر سازمان پیاده‌سازی کنند.',
            },
            {
                type: 'text',
                en: 'This article focuses on creating a comprehensive "Client Hardening Policy" targeting a specific Workstations OU, enforcing three core security requirements:\n1. Removable Storage Blocking: Disabling read/write execution access to USB flash drives to prevent data exfiltration and malware insertion.\n2. Password & Account Lockout Policy: Enforcing strong password complexity and lockouts after failed logon attempts.\n3. Disabling Local Administrative Tools: Restricting non-admin users from accessing Command Prompt, Registry Editor, and Control Panel.',
                fa: 'در این مقاله، یک سناریوی کاربردی تحت عنوان "سیاست ایمن‌سازی کلاینت‌ها" برای یک OU مشخص اجرا می‌شود که ۳ لایه امنیتی اصلی را اعمال می‌کند:\n۱. مسدودسازی حافظه‌های جانبی (USB): غیرفعال کردن دسترسی خواندن/نوشتن در فلش‌مموری‌ها جهت جلوگیری از سرقت اطلاعات و ورود بدافزار.\n۲. سیاست رمز عبور و قفل حساب کاربری: اجباری کردن پیچیدگی رمز عبور و قفل شدن اکانت پس از چند بار تلاش ناموفق.\n۳. محدودسازی ابزارهای مدیریتی محلی: سلب دسترسی کاربران عادی به ابزارهایی مانند CMD، Registry Editor و Control Panel.',
            },
            {
                type: 'table',
                headers: {
                    en: ['GPO Section', 'Target Entity', 'Processing Time', 'Example Use Cases'],
                    fa: ['بخش GPO', 'موجودیت هدف', 'زمان اعمال سیاست', 'نمونه کاربردها']
                },
                rows: {
                    en: [
                        ['Computer Configuration', 'Computer Objects / Devices', 'System Boot / Restart', 'USB blocking, Windows Defender, Firewall rules'],
                        ['User Configuration', 'User Accounts / Identities', 'User Logon / Sign-in', 'Drive mapping, Desktop background, CMD restriction']
                    ],
                    fa: [
                        ['Computer Configuration', 'دستگاه‌ها / کامپیوترها', 'زمان بوت شدن سیستم', 'بستن USB، تنظیمات فایروال، آنتی‌ویروس'],
                        ['User Configuration', 'حساب‌های کاربری / افراد', 'زمان لاگین کردن کاربر', 'مپ‌درایو، بک‌گراند دسکتاپ، بستن CMD']
                    ]
                }
            },
            {
                type: 'text',
                en: 'Step-by-Step GUI Configuration via Group Policy Management Console (`gpmc.msc`):\n1. Open `gpmc.msc` on the Domain Controller desktop.\n2. Right-click the target Organizational Unit (e.g., `OU=Workstations,DC=corp,DC=local`) and select "Create a GPO in this domain, and Link it here...". Name it `GPO_Client_Hardening`.\n3. Right-click the newly created GPO and click "Edit..." to launch the Group Policy Management Editor.',
                fa: 'مراحل متنی پیکربندی از طریق کنسول مدیریت Group Policy (`gpmc.msc`):\n۱. کنسول `gpmc.msc` را در دسکتاپ دامین کنترلر باز کنید.\n۲. روی OU مورد نظر (مثلاً `Workstations`) راست‌کلیک کرده و گزینه "Create a GPO in this domain, and Link it here" را انتخاب کنید. اسم آن را `GPO_Client_Hardening` بگذارید.\n۳. روی GPO ساخته‌شده راست‌کلیک کرده و Edit را بزنید تا پنجره ادیتور باز شود.',
            },
            {
                type: 'text',
                en: '1. USB Storage Restriction Policy:',
                fa: '۱. مسیر مسدودسازی حافظه‌های جانبی (USB):',
            },
            {
                type: 'code',
                language: 'GPO Path',
                code: `Computer Configuration -> Policies -> Administrative Templates -> System -> Removable Storage Access`
            },
            {
                type: 'text',
                en: 'Setting: Set `All Removable Storage classes: Deny all access` to `Enabled`.',
                fa: 'تنظیم: گزینه `All Removable Storage classes: Deny all access` را در حالت `Enabled` قرار دهید.',
            },
            {
                type: 'text',
                en: '2. Command Prompt (CMD) Restriction Policy:',
                fa: '۲. مسیر غیرفعال‌سازی و بستن CMD:',
            },
            {
                type: 'code',
                language: 'GPO Path',
                code: `User Configuration -> Policies -> Administrative Templates -> System`
            },
            {
                type: 'text',
                en: 'Setting: Set `Prevent access to the command prompt` to `Enabled`.',
                fa: 'تنظیم: گزینه `Prevent access to the command prompt` را در حالت `Enabled` قرار دهید.',
            },
            {
                type: 'text',
                en: 'Automated PowerShell Management & Policy Enforcement:\nAdministrators can create GPOs and force immediate policy updates on client devices using PowerShell:',
                fa: 'مدیریت خودکار با پاوِرشِل و به‌روزرسانی اجباری سیاست‌ها:\nمدیران شبکه می‌توانند با دستورات PowerShell ساخت GPO و بروزرسانی آنی تنظیمات روی سیستم کلاینت‌ها را انجام دهند:',
            },
            {
                type: 'code',
                language: 'PowerShell (Windows Server)',
                code: `# Create a new Group Policy Object
New-GPO -Name "GPO_Client_Hardening" -Comment "Security controls for workstation devices"

# Link GPO to target Organizational Unit (OU)
New-GPLink -Name "GPO_Client_Hardening" -Target "OU=Workstations,DC=corp,DC=local" -LinkEnabled Yes

# Force immediate Group Policy update on a local or remote client
gpupdate /force`
            },
            {
                type: 'text',
                en: 'Engineering Takeaway & Operational Considerations:\nWhen designing Group Policies, pay close attention to GPO Inheritance and Security Filtering. By default, GPOs apply to "Authenticated Users". To apply settings to specific subgroups, modify Security Filtering in GPMC. Additionally, when applying user-based policy settings to shared terminal servers or multi-user workstations, enable "Group Policy Loopback Processing Mode" under Computer Configuration. This ensures user settings are derived based on the computer object location rather than the logging-in user location.',
                fa: 'جمع‌بندی مهندسی و نکات عملیاتی:\nدر زمان طراحی Group Policy، توجه به ارث‌بری (Inheritance) و فیلترینگ امنیتی (Security Filtering) ضروری است. به‌صورت پیش‌فرض، هر GPO به گروه Authenticated Users اعمال می‌شود. برای محدود کردن دامنه اثر GPO به گروهی خاص، حتماً بخش Security Filtering را ویرایش کنید. همچنین در محیط‌های اشتراکی یا ریموت دسکتاپ (Terminal Server)، فعال کردن حالت "Loopback Processing Mode" باعث می‌شود سیاست‌های بخش User براساس OU سیستم‌عامل اعمال شوند، نه بر اساس مکان اکانت کاربر در اکتیو دایرکتوری.',
            }
        ],
        relatedProject: {
            path: '/Projects/Networking/ActiveDirectoryGpoLab',
            label: { en: 'View Full Lab', fa: 'مشاهده پروژه کامل' }
        },
        author: 'obk',
        date: '2026-08-09',
        image: GroupPolicy,
        tags: ['MCSA'],
    },
    // --- article #8 (dhcp-Failover) ---
    {
        id: 8,
        slug: 'dhcp-failover-high-availability-windows-server',
        title: {
            en: 'High Availability DHCP Failover Configuration in Windows Server',
            fa: 'پیکربندی DHCP Failover برای پایداری سرویس آدرس‌دهی در ویندوز سرور',
        },
        excerpt: {
            en: 'Ensure continuous network uptime and lease availability by configuring native DHCP Failover in Windows Server using Load Balance and Hot Standby modes.',
            fa: 'تضمین پایداری بدون قطعی سرویس آدرس‌دهی شبکه با پیکربندی DHCP Failover در ویندوز سرور به دو روش Load Balance و Hot Standby.',
        },
        content: [
            {
                type: 'text',
                en: 'Dynamic Host Configuration Protocol (DHCP) is a critical core network service. If a standalone DHCP server fails, hosts cannot obtain IP addresses, causing complete network outages. Traditional failover methods like Split-Scopes (50/50 rule) or DHCP Clustering were complex and required shared SAN storage. Starting with Windows Server 2012, Microsoft introduced native DHCP Failover, enabling two Windows DHCP servers to share scope information and seamlessly provide lease redundancy without third-party hardware.',
                fa: 'پروتکل DHCP یکی از حیاتی‌ترین سرویس‌های زیرساخت شبکه است. در صورت از دسترس خارج شدن یک DHCP سرور منفرد، کلاینت‌ها قادر به دریافت آدرس IP نخواهند بود و شبکه دچار قطعی کامل می‌شود. روش‌های قدیمی ایجاد پایداری مانند Split-Scope یا سناریوهای پیچیده DHCP Clustering نیازمند سخت‌افزار اشتراکی (SAN) بودند. مایکروسافت از ویندوز سرور ۲۰۱۲ به بعد قابلیت بومی DHCP Failover را معرفی کرد که امکان همگام‌سازی Scopeها و سرویس‌دهی بدون قطعی را بین دو سرور مجزا بدون نیاز به تجهیزات اضافی فراهم می‌سازد.',
            },
            {
                type: 'text',
                en: 'DHCP Failover operates in two distinct modes depending on network architecture requirements:\n• Load Balance Mode: Distributes IP address allocation active-active between both servers based on a configurable percentage split (e.g., 50/50). Ideal for multi-subnet topologies or single-site deployments.\n• Hot Standby Mode: Assigns one server as Active (serving 100% of leases) and the second as Standby. If the active server fails, the standby server takes over lease assignment after the Maximum Client Lead Time (MCLT) expires. Best suited for branch office / disaster recovery scenarios.',
                fa: 'قابلیت DHCP Failover متناسب با نیاز زیرساخت شبکه، در دو حالت متفاوت عمل می‌کند:\n• حالت Load Balance (توزیع بار): هر دو سرور به‌صورت فعال (Active-Active) بر اساس درصد تعیین‌شده (مثلاً ۵۰/۵۰) آی‌پادرس‌ها را بین کلاینت‌ها تقسیم می‌کنند. این حالت برای شبکه‌های تک‌سایته با ترافیک بالا بسیار ایده‌آل است.\n• حالت Hot Standby (پشتیبان آماده): یک سرور به عنوان سرور اصلی (Active) تمام درخواست‌ها را پاسخ می‌دهد و سرور دوم به عنوان پشتیبان (Standby) منتظر می‌ماند. در صورت بروز خطا در سرور اصلی، سرور پشتیبان پس از اتمام زمان استاندارد MCLT مدیریت آدرس‌دهی را به دست می‌گیرد. این حالت برای سناریوهای Disaster Recovery و شعبات شبکه مناسب است.',
            },
            {
                type: 'table',
                headers: {
                    en: ['Feature / Aspect', 'Load Balance Mode', 'Hot Standby Mode'],
                    fa: ['ویژگی / پارامتر', 'حالت Load Balance', 'حالت Hot Standby']
                },
                rows: {
                    en: [
                        ['Primary Use Case', 'High Traffic / Active-Active Sites', 'Branch Offices / Disaster Recovery'],
                        ['Active Lease Distribution', 'Split Traffic (e.g., 50% / 50%)', '100% Active / 0% Standby'],
                        ['Reserve Leases', 'Not Required', 'configurable % reserved for standby (e.g., 5%)'],
                        ['State Transition Time', 'Immediate / Concurrent', 'Gated by MCLT Timer']
                    ],
                    fa: [
                        ['کاربرد اصلی', 'شبکه‌های پرکابرد / Active-Active', 'شعبات شبکه / Disaster Recovery'],
                        ['توزیع ترافیک', 'تقسیم ترافیک (مثلاً ۵۰٪ / ۵۰٪)', '۱۰۰٪ سرور اصلی / ۰٪ سرور پشتیبان'],
                        ['رزرو آی‌پی برای پشتیبان', 'نیازی نیست', 'درصد مشخصی رزرو می‌شود (مثلاً ۵٪)'],
                        ['زمان سوئیچینگ (Failover)', 'آنی و هم‌زمان', 'وابسته به زمان‌سنج MCLT']
                    ]
                }
            },
            {
                type: 'text',
                en: 'Step-by-Step GUI Configuration Process:\n1. Install the DHCP Server Role on both Windows Servers and authorize them in Active Directory Domain Services (AD DS).\n2. Create and configure the DHCP Scope on the Primary Server.\n3. Right-click the configured Scope in the DHCP Management Console (`dhcpmgmt.msc`) and select "Configure Failover...".\n4. Select the target Scope and specify the Partner Server hostname or IP address.\n5. Name the Failover Relationship, set the Mode (Load Balance or Hot Standby), and define a strong Shared Secret for mutual MD5 authentication.\n6. Complete the wizard to initiate initial scope database replication.',
                fa: 'مراحل متنی پیکربندی از طریق کنسول گرافیکی (GUI Wizard):\n۱. رول DHCP Server را روی هر دو ویندوز سرور نصب کرده و آن‌ها را در Active Directory تایید (Authorize) کنید.\n۲. اسکوپ (Scope) مورد نظر را روی سرور اصلی بسازید و محدوده آدرس‌دهی را مشخص کنید.\n۳. در کنسول مدیریت DHCP (`dhcpmgmt.msc`) روی Scope راست‌کلیک کرده و گزینه Configure Failover را انتخاب کنید.\n۴. سرور دوم (Partner Server) را با وارد کردن IP یا Hostname انتخاب کنید.\n۵. نام ارتباط (Relationship Name)، حالت کاری (Load Balance یا Hot Standby) و یک کلید امنیتی (Shared Secret) برای رمزنگاری ارتباط تعیین کنید.\n۶. با زدن دکمه Finish فرآیند همگام‌سازی (Replication) اولیه داده‌ها انجام می‌شود.',
            },
            {
                type: 'text',
                en: 'Enterprise PowerShell Deployment Method:\nFor automated deployments or Server Core installations, execute the following PowerShell cmdlets to establish a DHCP Failover relationship in Load Balance mode:',
                fa: 'روش پیاده‌سازی حرفه‌ای با پاوِرشِل (PowerShell):\nبرای محیط‌های سازمانی یا سرورهای Server Core (بدون محیط گرافیکی)، می‌توانید با دستورات زیر ارتباط Failover را روی ویندوز سرور برقرار کنید:',
            },
            {
                type: 'code',
                language: 'PowerShell (Windows Server)',
                code: `# Create a DHCP Failover Relationship in Load Balance mode
Add-DhcpServerv4Failover \`
    -Name "HQ-DHCP-Failover" \`
    -ScopeId 192.168.10.0 \`
    -PartnerServer "DHCP-SRV02.corp.local" \`
    -Mode LoadBalance \`
    -LoadBalancePercent 50 \`
    -SharedSecret "ComplexSecretPass123!" \`
    -MaxClientLeadTime 01:00:00 \`
    -AutoStateTransition $true

# Force manual synchronization of Scope database to partner server
Invoke-DhcpServerv4FailoverReplication -Name "HQ-DHCP-Failover"`
            },
            {
                type: 'text',
                en: 'Engineering Takeaway & Operational Considerations:\nWhen designing DHCP Failover, understanding the Maximum Client Lead Time (MCLT) parameter is essential. MCLT defines the duration for which a partner server will wait after losing communication with the primary server before claiming full control over the entire IP scope. Additionally, administrators should enable "Auto State Transition" to automatically mark a non-responsive partner server as DOWN after a designated interval (e.g., StateSwitchInterval), preventing split-brain lease conflicts during transient network partitioning.',
                fa: 'جمع‌بندی مهندسی و نکات عملیاتی:\nدر زمان طراحی DHCP Failover، درک صحیح تایمر MCLT (Maximum Client Lead Time) اهمیت بالایی دارد. تایمر MCLT بازه زمانی را مشخص می‌کند که سرور پشتیبان پس از قطع ارتباط با سرور اصلی، صبر کرده و سپس کنترل کامل اسکوپ آی‌پی را بر عهده می‌گیرد. همچنین توصیه می‌شود ویژگی Auto State Transition فعال باشد تا در صورت قطع لینک شبکه بین دو سرور، سیستم پس از زمان مشخصی سرور قطع‌شده را به‌طور خودکار به وضعیت DOWN ببرد و از تداخل در صدور IP (رخداد Split-Brain) جلوگیری کند.',
            }
        ],
        relatedProject: {
            path: '/Projects/Networking/DnsDhcpLabView',
            label: { en: 'View Full Lab', fa: 'مشاهده پروژه کامل' }
        },
        author: 'obk',
        date: '2026-08-09',
        image: ConfigurationDHCPFailover,
        tags: ['MCSA'],
    },

    // Cisco Networking Articles
    // --- article #9 (EtherChannel) ---
    {
        id: 9,
        slug: 'cisco-etherchannel-lacp-802-3ad-configuration',
        title: {
            en: 'Configuring Cisco EtherChannel using LACP (802.3ad)',
            fa: 'پیکربندی EtherChannel در سوئیچ‌های سیسکو با پروتکل LACP (802.3ad)',
        },
        excerpt: {
            en: 'Increase network bandwidth and link redundancy by bundling multiple physical switch interfaces into a single logical Port-Channel using IEEE 802.3ad LACP.',
            fa: 'افزایش پهنای باند و ایجاد پشتیبان لینک (Redundancy) با تجمیع چندین اینترفیس فیزیکی در یک Port-Channel منطقی با استفاده از پروتکل LACP.',
        },
        content: [
            {
                type: 'text',
                en: 'In modern enterprise switch topologies, connecting redundant physical links between switches is essential to prevent single points of failure. However, Spanning Tree Protocol (STP) automatically blocks redundant paths to prevent Layer 2 loops and broadcast storms. Consequently, secondary links remain idle. EtherChannel (also known as Link Aggregation or IEEE 802.3ad) solves this by bundling up to 8 active physical Ethernet links into a single logical "Port-Channel" interface, effectively bypassing STP blocking while multiplying bandwidth.',
                fa: 'در توپولوژی شبکه‌های سازمانی امروز، اتصال لینک‌های فیزیکی پشتیبان (Redundant) بین سوئیچ‌ها برای جلوگیری از نقطه منفرد شکست ضروری است. با این حال، پروتکل Spanning Tree (STP) برای جلوگیری از ایجاد حلقه در لایه ۲ و طوفان Broadcast، پورت‌های اضافه را به‌صورت خودکار بلاک می‌کند. در نتیجه، لینک‌های دوم بی‌استفاده می‌مانند. فناوری EtherChannel (تجمیع لینک‌ها) این مشکل را با ترکیب حداکثر ۸ لینک فیزیکی فعال در قالب یک اینترفیس منطقی واحد به نام "Port-Channel" برطرف می‌سازد؛ روشی که ضمن افزایش پهنای باند، مانع بلاک شدن پورت‌ها توسط STP می‌شود.',
            },
            {
                type: 'image',
                src: EtherChannel2,
                alt: {
                    en: 'Cisco LACP EtherChannel Topology Diagram',
                    fa: 'دیاگرام سناریوی EtherChannel با پروتکل LACP در سیسکو',
                },
                caption: {
                    en: 'Two Cisco switches connected via a 2-Gbps bundled LACP Port-Channel.',
                    fa: 'اتصال دو سوئیچ سیسکو از طریق یک Port-Channel دو گیگابیتی منطقی با پروتکل LACP.',
                },
            },
            {
                type: 'text',
                en: 'Cisco switches support three mechanisms for forming an EtherChannel bundle:\n• LACP (Link Aggregation Control Protocol - IEEE 802.3ad): Open standard protocol allowing multi-vendor switch negotiation. Highly recommended for enterprise deployments.\n• PAgP (Port Aggregation Protocol): Cisco proprietary protocol that performs automated channel negotiation.\n• Static (Mode On): Forces interface bundling without exchanging control packets. It lacks dynamic error detection and requires identical manual settings on both ends.',
                fa: 'سوئیچ‌های سیسکو از سه روش برای ایجاد لینک EtherChannel پشتیبانی می‌کنند:\n• پروتکل LACP (استاندارد بین‌المللی IEEE 802.3ad): پروتکل باز و استاندارد که امکان مذاکره بین سوئیچ‌های برندهای مختلف را فراهم می‌کند و بهترین انتخاب برای شبکه‌های سازمانی است.\n• پروتکل PAgP: پروتکل اختصاصی سیسکو برای مذاکره خودکار لینک‌ها.\n• حالت Static (Mode On): لینک‌ها را اجباراً و بدون ارسال بسته‌های کنترلی ترکیب می‌کند. این روش قابلیت تشخیص هوشمند خطا را ندارد و نیازمند تنظیمات دقیق و یکسان در دو طرف است.',
            },
            {
                type: 'table',
                headers: {
                    en: ['Local Mode', 'Remote Mode', 'EtherChannel Status', 'Negotiation Type'],
                    fa: ['حالت سوئیچ مبدا', 'حالت سوئیچ مقصد', 'وضعیت لینک EtherChannel', 'نوع مذاکره']
                },
                rows: {
                    en: [
                        ['Active', 'Active', 'Established (Formed)', 'LACP Dynamic'],
                        ['Active', 'Passive', 'Established (Formed)', 'LACP Dynamic'],
                        ['Passive', 'Passive', 'Failed (No Channel)', 'No Negotiation Starts'],
                        ['On', 'On', 'Established (Static)', 'No Packets Exchanged']
                    ],
                    fa: [
                        ['Active', 'Active', 'موفق (تشکیل می‌شود)', 'مذاکره پویا با LACP'],
                        ['Active', 'Passive', 'موفق (تشکیل می‌شود)', 'مذاکره پویا با LACP'],
                        ['Passive', 'Passive', 'ناموفق (تشکیل نمی‌شود)', 'هیچ مذاکره‌ای شروع نمی‌شود'],
                        ['On (Static)', 'On (Static)', 'موفق (ثابت/استاتیک)', 'بدون تبادل بسته کنترلی']
                    ]
                }
            },
            {
                type: 'text',
                en: 'To configure an LACP EtherChannel carrying multiple VLANs (Trunk) between two switches, execute the following CLI commands on both devices:',
                fa: 'برای پیکربندی یک لینک EtherChannel از نوع LACP با قابلیت عبور ترافیک چندین VLAN (لینک Trunk) بین دو سوئیچ، دستورات زیر را وارد کنید:',
            },
            {
                type: 'code',
                language: 'Cisco IOS (LACP Configuration)',
                code: `# Select member physical interfaces
interface range GigabitEthernet0/1 - 2

# Assign interfaces to Channel Group 1 using LACP (Active mode)
 channel-group 1 mode active
 exit

# Configure the resulting logical Port-Channel interface
interface Port-channel 1
 switchport mode trunk
 switchport trunk allowed vlan 10,20,99`
            },
            {
                type: 'text',
                en: 'Verification Commands:\nTo verify EtherChannel status and ensure member interfaces are bundled correctly (indicated by flags "SU" for Switchport Up and "P" for Port-channel), use these diagnostic commands:',
                fa: 'دستورات بررسی و عیب‌یابی (Verification):\nبرای اطمینان از سلامت لینک EtherChannel و بررسی وضعیت پورت‌ها (نمایش عبارت "SU" برای فعال بودن سوئیچ‌پورت و حرف "P" برای عضویت موفق در Port-channel)، از دستورات زیر استفاده می‌شود:',
            },
            {
                type: 'code',
                language: 'Cisco IOS (Verification)',
                code: `# Display summary status of all Port-Channels
show etherchannel summary

# Verify LACP neighbor status and negotiation details
show lacp neighbor

# Check STP status to confirm Port-Channel is seen as a single interface
show spanning-tree summary`
            },
            {
                type: 'text',
                en: 'Engineering Takeaway & Operational Considerations:\nBefore adding interfaces to a Channel Group, ensure all physical member ports match in terms of speed, duplex, native VLAN, allowed VLAN list, and STP cost. A single mismatch will cause STP to place the inconsistent port into an "err-disabled" state. Additionally, Cisco EtherChannel uses frame hash load-balancing algorithms (such as src-dst-ip or src-dst-mac) rather than round-robin packet distribution. Choosing the correct load-balancing hash mechanism guarantees uniform traffic distribution across all active physical bundle links.',
                fa: 'جمع‌بندی مهندسی و نکات عملیاتی:\nقبل از قرار دادن پورت‌ها در یک Channel Group، حتماً اطمینان حاصل کنید که تمام اینترفیس‌های فیزیکی از نظر سرعت (Speed)، حالت Duplex، مقدار Native VLAN، لیست VLANهای مجاز و هزینه STP دقیقاً یکسان باشند. عدم تطابق حتی در یک پارامتر باعث می‌شود STP پورت متناقض را در وضعیت "err-disabled" قرار دهد. همچنین EtherChannel الگوریتم‌های تقسیم بار (Load Balancing) بر اساس هش (مانند IP مبدا/مقصد یا MAC مبدا/مقصد) را به کار می‌برد نه روش Round-Robin. انتخاب الگوریتم مناسب بر اساس الگوی ترافیک شبکه، توزیع متوازن ترافیک را روی تمام کابل‌های فیزیکی تضمین می‌کند.',
            }
        ],
        relatedProject: {
            path: '/Projects/Networking/EtherChannel-lab',
            label: { en: 'View Full Lab', fa: 'مشاهده پروژه کامل' }
        },
        author: 'obk',
        date: '2026-08-09',
        image: EtherChannel,
        tags: ['CCNA'],
    },
    // --- article #10 (Router on a Stick) ---
    {
        id: 10,
        slug: 'inter-vlan-routing-router-on-a-stick-802-1q',
        title: {
            en: 'Inter-VLAN Routing using Router on a Stick (802.1Q)',
            fa: 'مسیریابی بین VLANها با روش Router on a Stick و استاندارد 802.1Q',
        },
        excerpt: {
            en: 'Learn how to enable communication between isolated VLANs using a single physical router interface with 802.1Q sub-interfaces and Native VLAN configuration on Cisco devices.',
            fa: 'آموزش برقراری ارتباط بین VLANهای مجزا با استفاده از یک اینترفیس فیزیکی روتر، Sub-interfaceهای 802.1Q و پیکربندی Native VLAN در تجهیزات سیسکو.',
        },
        content: [
            {
                type: 'text',
                en: 'By default, a Cisco switch operates as a single Broadcast Domain (VLAN 1). When all network hosts share the same broadcast domain, broadcast storms degrade performance and any host can sniff traffic from others. Virtual Local Area Networks (VLANs) solve this by logically segmenting a single physical switch into multiple isolated Layer 2 networks, such as VLAN 10 (Sales - 192.168.10.0/24) and VLAN 20 (HR - 192.168.20.0/24). While VLANs isolate traffic at Layer 2, hosts in different VLANs cannot communicate without a Layer 3 device.',
                fa: 'به‌صورت پیش‌فرض، یک سوئیچ سیسکو به عنوان یک Broadcast Domain واحد (VLAN 1) عمل می‌کند. وقتی همه دستگاه‌ها در یک دامنه‌ی پخش مشترک قرار داشته باشند، طوفان‌های Broadcast باعث کاهش شدید کارایی شده و هر دستگاهی می‌تواند ترافیک دیگران را شنود کند. ایجاد VLANها (شبکه‌های محلی مجازی) این مشکل را با تفکیک منطقی یک سوئیچ فیزیکی به چند شبکه مجزای لایه ۲ برطرف می‌سازد؛ مانند VLAN 10 (فروش - 192.168.10.0/24) و VLAN 20 (منابع انسانی - 192.168.20.0/24). اگرچه VLANها ترافیک را در لایه ۲ از هم جدا می‌کنند، اما دستگاه‌های موجود در VLANهای مختلف بدون یک تجهیز لایه ۳ نمی‌توانند با هم ارتباط داشته باشند.',
            },
            {
                type: 'text',
                en: 'To manage traffic flow efficiently, switch ports are assigned specific roles:\n• Access Ports: Connect to end devices (PCs, printers) and belong to a single VLAN. Traffic traverses these links unencapsulated (untagged).\n• Trunk Ports: Connect switch-to-switch or switch-to-router and carry traffic for multiple VLANs simultaneously using IEEE 802.1Q encapsulation, which adds a 4-byte header tag to identify the frame origin VLAN.\n• Native VLAN: A special VLAN on an 802.1Q trunk link that carries untagged traffic (such as CDP, DTP, or legacy traffic). For security best practices, the default Native VLAN (VLAN 1) should be changed to an unused VLAN ID.',
                fa: 'برای مدیریت صحیح ترافیک، پورت‌های سوئیچ نقش‌های مشخصی ایفا می‌کنند:\n• پورت‌های Access: به دستگاه‌های نهایی (PC یا پرینتر) وصل می‌شوند و فقط به یک VLAN تعلق دارند. ترافیک روی این لینک‌ها بدون برچسب (Untagged) جابه‌جا می‌شود.\n• پورت‌های Trunk: ارتباط سوئیچ به سوئیچ یا سوئیچ به روتر را برقرار می‌کنند و ترافیک چندین VLAN را به‌طور هم‌زمان منتقل می‌سازند. این پورت‌ها از استاندارد IEEE 802.1Q استفاده می‌کنند که یک تگ ۴ بایتی به فریم اضافه می‌کند.\n• مفهوم Native VLAN: یک VLAN ویژه روی لینک Trunk است که ترافیک‌های بدون برچسب (Untagged) مانند پروتکل‌های مدیریتی CDP یا DTP را عبور می‌دهد. طبق اصول امنیتی، توصیه می‌شود Native VLAN پیش‌فرض (VLAN 1) به یک VLAN استفاده‌نشده تغییر یابد.',
            },
            {
                type: 'image',
                src: RouterOnAStick2,
                alt: {
                    en: 'Router on a Stick Topology Diagram with Native VLAN',
                    fa: 'دیاگرام سناریوی Router on a Stick به همراه Native VLAN',
                },
                caption: {
                    en: 'Single trunk cable connecting a Cisco Switch to a Router using 802.1Q sub-interfaces.',
                    fa: 'ارتباط کابل Trunk بین سوئیچ و روتر با استفاده از Sub-interfaceهای 802.1Q.',
                },
            },
            {
                type: 'text',
                en: 'Connecting a separate physical router interface for every VLAN is costly and inefficient. The Router on a Stick (RoaS) architecture solves this by using a single physical interface on the router connected to a Trunk port on the switch. The router interface is divided into virtual logical entities called "Sub-interfaces", where each sub-interface acts as the Default Gateway for its assigned VLAN.',
                fa: 'اختصاص یک اینترفیس فیزیکی مجزای روتر برای هر VLAN بسیار پرهزینه و غیراقتصادی است. معماری Router on a Stick (RoaS) این مشکل را با به‌کارگیری تنها یک اینترفیس فیزیکی روتر متصل به پورت Trunk سوئیچ حل می‌کند. این اینترفیس فیزیکی روی روتر به بخش‌های منطقی مجزایی به نام "Sub-interface" تقسیم می‌شود که هرکدام به عنوان Default Gateway برای VLAN مربوطه عمل می‌کنند.',
            },
            {
                type: 'table',
                headers: {
                    en: ['VLAN Name', 'VLAN ID', 'Role / Subnet', 'Sub-interface', 'Default Gateway IP'],
                    fa: ['نام VLAN', 'شناسه VLAN', 'نقش / رنج Subnet', 'اینترفیس مجازی', 'آدرس Default Gateway']
                },
                rows: {
                    en: [
                        ['Sales', '10', 'Data (192.168.10.0/24)', 'GigabitEthernet0/0/0.10', '192.168.10.1'],
                        ['HR', '20', 'Data (192.168.20.0/24)', 'GigabitEthernet0/0/0.20', '192.168.20.1'],
                        ['Native / Mgmt', '99', 'Untagged Traffic (192.168.99.0/24)', 'GigabitEthernet0/0/0.99', '192.168.99.1']
                    ],
                    fa: [
                        ['فروش (Sales)', '۱۰', 'ترافیک داده (192.168.10.0/24)', 'GigabitEthernet0/0/0.10', '192.168.10.1'],
                        ['منابع انسانی (HR)', '۲۰', 'ترافیک داده (192.168.20.0/24)', 'GigabitEthernet0/0/0.20', '192.168.20.1'],
                        ['نیتیو (Native / Mgmt)', '۹۹', 'ترافیک بدون برچسب (192.168.99.0/24)', 'GigabitEthernet0/0/0.99', '192.168.99.1']
                    ]
                }
            },
            {
                type: 'text',
                en: '1. Switch Configuration: Create VLANs, assign access ports, and configure the trunk port while explicitly defining the Native VLAN:',
                fa: '۱. تنظیمات سوئیچ: تعریف VLANها، تخصیص پورت‌های Access و فعال‌سازی لینک Trunk به همراه تغییر Native VLAN پیش‌فرض:',
            },
            {
                type: 'code',
                language: 'Cisco IOS (Switch)',
                code: `# Create VLANs
vlan 10
 name Sales
vlan 20
 name HR
vlan 99
 name Native_Management

# Configure Access Ports
interface FastEthernet0/1
 switchport mode access
 switchport access vlan 10

interface FastEthernet0/2
 switchport mode access
 switchport access vlan 20

# Configure Trunk Port & Native VLAN
interface GigabitEthernet0/1
 switchport mode trunk
 switchport trunk native vlan 99
 switchport trunk allowed vlan 10,20,99`
            },
            {
                type: 'text',
                en: '2. Router Configuration: Enable the physical interface and configure sub-interfaces using "encapsulation dot1Q <vlan-id>". Note the "native" keyword for VLAN 99:',
                fa: '۲. تنظیمات روتر: فعال‌سازی اینترفیس فیزیکی و کانفیگ Sub-interfaceها. به عبارت "native" برای VLAN 99 دقت کنید:',
            },
            {
                type: 'code',
                language: 'Cisco IOS (Router)',
                code: `# Enable physical interface
interface GigabitEthernet0/0/0
 no shutdown

# Sub-interface for VLAN 10 (Sales)
interface GigabitEthernet0/0/0.10
 encapsulation dot1Q 10
 ip address 192.168.10.1 255.255.255.0

# Sub-interface for VLAN 20 (HR)
interface GigabitEthernet0/0/0.20
 encapsulation dot1Q 20
 ip address 192.168.20.1 255.255.255.0

# Sub-interface for Native VLAN 99
interface GigabitEthernet0/0/0.99
 encapsulation dot1Q 99 native
 ip address 192.168.99.1 255.255.255.0`
            },
            {
                type: 'text',
                en: 'Engineering Takeaway & Operational Considerations:\nWhile Router on a Stick is an excellent solution for small-to-medium networks, it introduces a potential single point of failure and bandwidth bottleneck on the single trunk link. In high-density enterprise environments, Inter-VLAN Routing is typically offloaded to Layer 3 Switches using Switched Virtual Interfaces (SVIs) or Routed Ports. SVIs handle routing directly in hardware via Application-Specific Integrated Circuits (ASICs), achieving wire-speed performance without congesting external router interfaces.',
                fa: 'جمع‌بندی مهندسی و نکات عملیاتی:\nاگرچه روش Router on a Stick راهکاری عالی و مقرون‌به‌صرفه برای شبکه‌های کوچک و متوسط است، اما تنها لینک Trunk متصل به روتر می‌تواند به نقطه گلوگاه (Bottleneck) و نقطه منفرد شکست (Single Point of Failure) تبدیل شود. در شبکه‌های سازمانی بزرگ، مسیریابی بین VLANها معمولاً به سوئیچ‌های لایه ۳ (Multi-Layer Switch) با استفاده از اینترفیس‌های مجازی SVI (Switched Virtual Interface) واگذار می‌شود. سوئیچ‌های لایه ۳ عملیات مسیریابی را مستقیماً روی سخت‌افزار (تراشه‌های ASIC) انجام می‌دهند که باعث دستیابی به سرعت پردازش بالاتر (Wire-Speed) و جلوگیری از فشار روی روتر می‌شود.',
            },
        ],
        relatedProject: {
            path: '/Projects/Networking/VLANLab',
            label: { en: 'View Full Lab', fa: 'مشاهده پروژه کامل' }
        },
        author: 'obk',
        date: '2026-08-09',
        image: RouterOnAStick,
        tags: ['CCNA'],
    },
    // --- article #11 (Port Security) ---
    {
        id: 11,
        slug: 'cisco-port-security-layer2-mac-address',
        title: {
            en: 'Enhancing Layer 2 Security with Cisco Port Security',
            fa: 'ارتقای امنیت لایه ۲ با ویژگی Port Security در سوئیچ‌های سیسکو',
        },
        excerpt: {
            en: 'A comprehensive guide to securing Cisco switch access ports by restricting MAC addresses to prevent rogue access and Layer 2 network attacks.',
            fa: 'راهنمای جامع امن‌سازی پورت‌های دسترسی در سوئیچ‌های سیسکو با محدود کردن آدرس‌های MAC جهت جلوگیری از نفوذ غیرمجاز و حملات لایه ۲.',
        },
        content: [
            {
                type: 'text',
                en: 'In modern enterprise network infrastructure, Layer 2 security is often overlooked compared to edge firewalls and perimeter defenses. Unsecured wall jacks in conference rooms, waiting areas, or employee cubicles present a significant vulnerability. An attacker or unauthorized employee can easily plug in a rogue laptop, wireless router, or network sniffer and bypass perimeter controls. Cisco Port Security is a fundamental Layer 2 mitigation feature designed to restrict port access exclusively to authorized MAC addresses, effectively blocking unauthorized network entry at the physical layer.',
                fa: 'در زیرساخت شبکه‌های سازمانی امروز، امنیت لایه ۲ غالباً نسبت به دیوارهای آتش و تجهیزات لبه شبکه مغفول می‌ماند. پریزهای شبکه بدون محافظت در اتاق‌های کنفرانس، سالن‌های انتظار یا میزهای کاری، یک آسیب‌پذیری جدی به شمار می‌روند. یک مهاجم یا فرد غیرمجاز می‌تواند به‌راحتی با اتصال یک لپ‌تاپ ناشناس، روتر بی‌سیم یا ابزار شنود، کنترل‌های امنیتی لبه را دور بزند. ویژگی Port Security در سیسکو مکانیزم پایه‌ای لایه ۲ برای محدود کردن دسترسی پورت صرفاً به آدرس‌های MAC مجاز است که مانع ورود تجهیزات ناشناس در لایه فیزیکی می‌شود.',
            },
            {
                type: 'image',
                src: PortSecurityDiagram,
                alt: {
                    en: 'Cisco Port Security Topology Diagram',
                    fa: 'دیاگرام سناریوی Port Security در سوئیچ سیسکو',
                },
                caption: {
                    en: 'An authorized PC connects successfully, while an unknown MAC address triggers port violation.',
                    fa: 'سیستم مجاز متصل می‌شود، اما آدرس MAC ناشناس باعث تحریک حالت Violation پورت می‌گردد.',
                },
            },
            {
                type: 'text',
                en: 'Port Security works by monitoring the source MAC addresses of incoming Ethernet frames. Administrators can define the maximum number of allowable MAC addresses on an interface and select how those addresses are learned:',
                fa: 'ویژگی Port Security با بررسی آدرس MAC مبدا در فریم‌های ورودی اترنتی کار می‌کند. مدیران شبکه می‌توانند حداکثر تعداد MAC مجاز روی هر اینترفیس را تعیین کرده و یکی از روش‌های زیر را برای یادگیری آدرس‌ها انتخاب کنند:',
            },
            {
                type: 'list',
                items: {
                    en: [
                        'Static: MAC addresses are manually configured and stored in the running-configuration.',
                        'Dynamic: MAC addresses are learned dynamically from incoming traffic, stored only in RAM, and lost upon switch reboot.',
                        'Sticky: MAC addresses are learned dynamically and automatically saved to the running-configuration, providing an optimal blend of automation and persistence.'
                    ],
                    fa: [
                        'روش Static: آدرس‌های MAC به‌صورت دستی وارد شده و در running-config ذخیره می‌شوند.',
                        'روش Dynamic: آدرس‌ها به‌صورت پویا از ترافیک ورودی یاد گرفته شده، فقط در RAM نگهداری می‌شوند و با ریبوت سوئیچ پاک می‌گردند.',
                        'روش Sticky: آدرس‌ها به‌صورت پویا یاد گرفته شده و خودکار در running-config ثبت می‌شوند؛ روشی عالی برای راحتی مدیریت و ماندگاری تنظیمات.'
                    ]
                }
            },
            {
                type: 'text',
                en: 'To enable Port Security and switch to Sticky MAC learning on a Cisco access port, execute the following CLI commands:',
                fa: 'برای فعال‌سازی Port Security و استفاده از حالت Sticky روی پورت دسترسی سوئیچ سیسکو، دستورات زیر را وارد کنید:',
            },
            {
                type: 'code',
                language: 'Cisco IOS',
                code: `interface FastEthernet0/1
switchport mode access
switchport port-security
switchport port-security maximum 1
switchport port-security mac-address sticky`
            },
            {
                type: 'text',
                en: 'When an unauthorized MAC address sends traffic through a secured interface, a violation occurs. Cisco supports three violation modes with varying levels of security enforcement:',
                fa: 'هنگامی که یک آدرس MAC غیرمجاز ترافیکی را ارسال کند، Violation رخ می‌دهد. سیسکو ۳ حالت برخورد متفاوتی را برای مدیریت این خطای امنیتی ارائه می‌دهد:',
            },
            {
                type: 'table',
                headers: {
                    en: ['Violation Mode', 'Drop Packets', 'Log Syslog / SNMP', 'Port Action'],
                    fa: ['حالت برخورد (Violation)', 'حذف بسته', 'ثبت لاگ (Syslog/SNMP)', 'وضعیت پورت']
                },
                rows: {
                    en: [
                        ['Protect', 'Yes', 'No', 'Stays Up (Silent Drop)'],
                        ['Restrict', 'Yes', 'Yes', 'Stays Up (Increments Counter)'],
                        ['Shutdown (Default)', 'Yes', 'Yes', 'Enters err-disabled State']
                    ],
                    fa: [
                        ['Protect', 'بله', 'خیر', 'فعال می‌ماند (حذف بی‌صدا)'],
                        ['Restrict', 'بله', 'بله', 'فعال می‌ماند (افزایش شمارنده خطا)'],
                        ['Shutdown (پیش‌فرض)', 'بله', 'بله', 'خاموش می‌شود (وضعیت err-disabled)']
                    ]
                }
            },
            {
                type: 'text',
                en: 'You can explicitly set the desired violation mode using one of the commands below:',
                fa: 'شما می‌توانید حالت برخورد دلخواه خود را با یکی از دستورات زیر روی پورت اعمال کنید:',
            },
            {
                type: 'code',
                language: 'Cisco IOS',
                code: `# Set mode to Restrict (Generates logs without shutting down the port)
switchport port-security violation res

# Set mode to Shutdown (Default behavior - disables the port on breach)
switchport port-security violation shutdown`
            },
            {
                type: 'text',
                en: 'Engineering Takeaway & Operational Considerations:\nWhile Shutdown mode offers the highest security posture by immediately isolating rogue devices, it creates administrative overhead when legitimate users swap laptops or docks. When a port trips into the "err-disabled" state, administrators can manually reset the interface using the CLI:',
                fa: 'جمع‌بندی مهندسی و نکات عملیاتی:\nاگرچه حالت Shutdown با جداسازی فوری دستگاه‌های ناشناس بالاترین سطح امنیت را فراهم می‌کند، اما در صورت تعویض لپ‌تاپ توسط کاربران مجاز، باعث ایجاد زحمت نگهداری برای تیم پشتیبانی می‌شود. زمانی که پورتی وارد وضعیت "err-disabled" می‌شود، مدیر شبکه می‌تواند با دستورات زیر پورت را به‌صورت دستی بازنشانی کند:',
            },
            {
                type: 'code',
                language: 'Cisco IOS (Manual Recovery)',
                code: `interface FastEthernet0/1
 shutdown
 no shutdown`
            },
            {
                type: 'text',
                en: 'Alternatively, to avoid manual intervention in large enterprise environments, you can enable automatic recovery for Port Security violations with an interval timer (e.g., 300 seconds):',
                fa: 'همچنین برای جلوگیری از دخالت دستی در شبکه‌های بزرگ سازمانی، می‌توان بازنشانی خودکار را با تعیین بازه زمانی (مثلاً ۳۰۰ ثانیه) فعال کرد:',
            },
            {
                type: 'code',
                language: 'Cisco IOS (Auto-Recovery)',
                code: `# Enable automatic recovery for Port Security violations
errdisable recovery cause psecure-violation

# Set recovery interval timer (in seconds)
errdisable recovery interval 300`
            },
            {
                type: 'text',
                en: 'In mission-critical infrastructure, deploying Port Security alongside 802.1X Dynamic VLAN Assignment and DHCP Snooping delivers a robust Defense-in-Depth posture against Layer 2 attacks like ARP poisoning and MAC flooding.',
                fa: 'در زیرساخت‌های حیاتی، ترکیب Port Security با فناوری‌هایی نظیر 802.1X و DHCP Snooping یک ساختار دفاع در عمق (Defense-in-Depth) فوق‌العاده در برابر حملات لایه ۲ مانند ARP Poisoning و MAC Flooding ایجاد می‌کند.',
            }
        ],
        relatedProject: {
            path: '/Projects/Networking/PortSecurityDHCPSnooping',
            label: { en: 'View Full Lab', fa: 'مشاهده پروژه کامل' }
        },
        author: 'obk',
        date: '2026-08-09',
        image: PortSecurity,
        tags: ['CCNA'],
    },

    // --- article #12 ---

]