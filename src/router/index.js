import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Projects from '../views/Projects.vue'
import { updateSeo } from '../utils/seo'

const routes = [
    // Home Route
    {
        path: '/', name: 'home',
        component: Home,
        meta: { title: 'Home | obkworks', description: { fa: 'پورتفولیوی شخصی obkworks شامل ابزارهای فرانت اند، سناریو های شبکه سیسکو، مقالات تخصصی و محاسبه گرهای زیر ساخت IT.', en: 'Personal portfolio of obkworks featuring front-end web tools, Cisco networking labs, technical articles, and IT infrastructure calculators.' } }
    },
    // Articles Route
    {
        path: '/Articles', name: 'Articles',
        component: () => import('../views/Articles.vue'),
        meta: { title: 'Articles | obkworks', description: { fa: 'مجموعه مقالات تخصصی شبکه، مفاهیم فرانت اند، امنیت لایه ۲ سیسکو، ویندوز سرور و مدیریت سیستم ها.', en: 'Technical articles covering front-end development, Cisco networking, Layer 2 security, Windows Server, and system administration.' } }
    },
    // Article Details Route
    {
        path: '/Articles/:slug', name: 'ArticleDetails',
        component: () => import('@/views/ArticleDetails.vue'), props: true,
        meta: { title: 'Article Details | obkworks', description: { fa: 'جزئیات و آموزش های تخصصی مقالات توسعه وب، شبکه های سیسکو، ویندوز سرور و زیرساخت IT در obkworks.', en: 'Detailed technical guides and insights on web development, Cisco networking, Windows Server, and IT infrastructure by obkworks.' } }
    },
    // Projects Route
    {
        path: '/Projects', name: 'Projects',
        component: Projects,
        meta: { title: 'Projects | obkworks', description: { fa: 'مشاهده و بررسی تمام پروژه ها، اپلیکیشن های تحت وب، لابراتوارهای شبکه و ابزارهای محاسباتی زیر ساخت IT.', en: 'Explore interactive web apps, hands-on network lab configurations, and IT infrastructure tools.' } }
    },
    // Front-End Projects
    {
        path: '/Projects/Front-End/FinancialCalculator', name: 'FinancialCalculator',
        component: () => import('../views/Front-End/FinancialCalculator.vue'),
        meta: { title: 'Financial Calculator | obkworks', description: { fa: 'محاسبه گر مالی آنلاین برای محاسبه اقساط وام، سود سپرده و مدیریت پروژه های مالی با رابط کاربری ساده.', en: 'Online financial calculator for loan installment, interest calculation, and quick financial planning.' } }
    },
    {
        path: '/Projects/Front-End/Weather', name: 'Weather',
        component: () => import('../views/Front-End/Weather.vue'),
        meta: { title: 'Weather App | obkworks', description: { fa: 'برنامه هواشناسی آنلاین برای مشاهده وضعیت آب و هوا و پیش بینی دما در شهرهای مختلف.', en: 'Real-time weather application to check temperature, forecast, and atmospheric conditions globally.' } }
    },
    {
        path: '/Projects/Front-End/TodoList', name: 'TodoList',
        component: () => import('../views/Front-End/TodoList.vue'),
        meta: { title: 'Todo List App | obkworks', description: { fa: 'ابزار مدیریت کارهای روزانه برای ثبت، ویرایش و دسته بندی لیست وظایف.', en: 'A clean todo list application for organizing daily tasks, tracking progress, and managing activities.' } }
    },
    {
        path: '/Projects/Front-End/Calendar', name: 'Calendar',
        component: () => import('../views/Front-End/Calendar.vue'),
        meta: { title: 'Calendar App | obkworks', description: { fa: 'تقویم تعاملی آنلاین برای بررسی رویداد ها، تاریخ ها و برنامه ریزی زمان.', en: 'Interactive web calendar app for checking dates, planning schedules, and organizing tasks.' } }
    },
    {
        path: '/Projects/Front-End/UnitConversion', name: 'UnitConversion',
        component: () => import('../views/Front-End/Unit-Conversion.vue'),
        meta: { title: 'Unit Conversion | obkworks', description: { fa: 'ابزار چند منظوره تبدیل واحدهای اندازه گیری (طول، وزن و...)، نرخ آنلاین ارز با Exchange Rate API و تبدیل اعداد به حروف.', en: 'Multi-purpose converter for measurement units (length, weight, etc.), live currency exchange rates, and number-to-words.' } }
    },
    {
        path: '/Projects/Front-End/QR-Barcode-Generator', name: 'QRBarcodeGenerator',
        component: () => import('../views/Front-End/QR-Barcode-Generator.vue'),
        meta: { title: 'QR & Barcode Generator | obkworks', description: { fa: 'ابزار ساخت کد QR و بارکد آنلاین با قابلیت سفارشی سازی و دانلود فایل خروجی.', en: 'Online QR code and barcode generator with customization options and instant image download.' } }
    },
    {
        path: '/Projects/Front-End/BMICalculator', name: 'BMICalculator',
        component: () => import('../views/Front-End/BMICalculator.vue'),
        meta: { title: 'BMI Calculator | obkworks', description: { fa: 'محاسبه گر شاخص توده بدنی (BMI) برای سنجش تناسب اندام بر اساس قد و وزن.', en: 'Calculate Body Mass Index (BMI) instantly to monitor weight status and health metrics.' } }
    },
    {
        path: '/Projects/Front-End/Calculator', name: 'Calculator',
        component: () => import('../views/Front-End/Calculator.vue'),
        meta: { title: 'Calculator App | obkworks', description: { fa: 'ماشین حساب آنلاین تحت وب برای انجام محاسبات ریاضی روزمره با طراحی مدرن.', en: 'Sleek and responsive web calculator for daily mathematical operations and fast calculations.' } }
    },
    {
        path: '/Projects/Front-End/TimeAndDate', name: 'TimeAndDate',
        component: () => import('../views/Front-End/Time&Date.vue'),
        meta: { title: 'Time & Date Tool | obkworks', description: { fa: 'ابزار محاسبه تاریخ و زمان، اختلاف زمانی ساعت ها و نمایش زمان جهانی.', en: 'Utility tool for calculating date intervals, time differences, and comparing global time zones.' } }
    },
    {
        path: '/Projects/Front-End/Modals', name: 'Modals',
        component: () => import('../views/Front-End/Modals.vue'),
        meta: { title: 'Modal Examples | obkworks', description: { fa: 'نمونه های مختلف Modal و پنجره های تعاملی طراحی شده با Vue.js و Tailwind CSS.', en: 'Interactive modal and dialog examples built with Vue.js and Tailwind CSS.' } }
    },
    // Networking Labs
    {
        path: '/Projects/Networking/VLAN-Lab', name: 'VLANLab',
        component: () => import('../views/networking/VLANLab.vue'),
        meta: { title: 'VLAN Lab | obkworks', description: { fa: 'پیکربندی عملی VLAN، Inter-VLAN Routing و تنظیم Trunk Port در سوئیچ های سیسکو.', en: 'Hands-on VLAN segmentation, Inter-VLAN routing, and Cisco trunk port configuration lab.' } }
    },
    {
        path: '/Projects/Networking/OSPF-Lab', name: 'OSPFLab',
        component: () => import('../views/networking/OSPFLab.vue'),
        meta: { title: 'OSPF Lab | obkworks', description: { fa: 'آموزش پیکربندی پروتکل مسیریابی OSPF نسخه ۲ در روترهای سیسکو با تنظیم Area و Router ID.', en: 'OSPFv2 dynamic routing protocol configuration lab on Cisco routers with area and router ID setup.' } }
    },
    {
        path: '/Projects/Networking/EigrpLab', name: 'EigrpLab',
        component: () => import('../views/networking/EigrpLab.vue'),
        meta: { title: 'EIGRP Lab | obkworks', description: { fa: 'آموزش و سناریوی عملی پیکربندی پروتکل EIGRP در روترهای سیسکو و تنظیم سیستم خودمختار.', en: 'Step-by-step EIGRP dynamic routing lab configuration on Cisco routers with AS setup.' } }
    },
    {
        path: '/Projects/Networking/EtherChannel-lab', name: 'EtherChannelLab',
        component: () => import('../views/networking/EtherChannelLab.vue'),
        meta: { title: 'EtherChannel Lab | obkworks', description: { fa: 'تجمیع پهنای باند و پیکربندی EtherChannel با پروتکل های LACP و PAgP در سوئیچ های سیسکو.', en: 'Link aggregation configuration lab using LACP (802.3ad) and PAgP EtherChannel on Cisco switches.' } }
    },
    {
        path: '/Projects/Networking/Acl-Lab', name: 'Acl-Lab',
        component: () => import('../views/networking/AclLab.vue'),
        meta: { title: 'ACL Lab | obkworks', description: { fa: 'کنترل ترافیک شبکه با پیکربندی Access Control List (ACL) استاندارد و گسترش یافته سیسکو.', en: 'Network traffic control lab featuring Cisco Standard and Extended Access Control Lists (ACL).' } }
    },
    {
        path: '/Projects/Networking/PortSecurityDHCPSnooping', name: 'PortSecurityDHCPSnooping',
        component: () => import('../views/networking/Port Security & DHCP Snooping.vue'),
        meta: { title: 'Port Security & DHCP Snooping | obkworks', description: { fa: 'افزایش امنیت لایه ۲ شبکه با پیاده سازی Port Security و جلوگیری از حملات با DHCP Snooping.', en: 'Layer 2 security lab implementing Port Security rules and DHCP Snooping protection on Cisco switches.' } }
    },
    {
        path: '/Projects/Networking/ActiveDirectoryGpoLab', name: 'ActiveDirectoryGpoLab',
        component: () => import('../views/networking/ActiveDirectoryGpoLab.vue'),
        meta: { title: 'Active Directory & GPO Lab | obkworks', description: { fa: 'راه اندازی Active Directory Domain Services و اعمال سیاست های گروهی (GPO) در ویندوز سرور.', en: 'Windows Server Active Directory Domain Services setup and Group Policy Management (GPO) lab.' } }
    },
    {
        path: '/Projects/Networking/DnsDhcpLabView', name: 'DnsDhcpLabView',
        component: () => import('../views/networking/DnsDhcpLabView.vue'),
        meta: { title: 'DNS & DHCP Lab | obkworks', description: { fa: 'سناریوی عملی راه اندازی و مدیریت سرویس های زیرساختی DNS و DHCP در شبکه.', en: 'Infrastructure services lab covering DNS resolution setup and DHCP scope management.' } }
    },
    {
        path: '/Projects/Networking/SqlServerLab', name: 'SqlServerLab',
        component: () => import('../views/networking/SqlServerLab.vue'),
        meta: { title: 'SQL Server Lab | obkworks', description: { fa: 'طراحی پایگاه داده رابطه ای، کوئری نویسی T-SQL و مدیریت بانک های اطلاعاتی SQL Server.', en: 'Relational database design, T-SQL query optimization, and SQL Server administration lab.' } }
    },
    // IT Infrastructure Tools
    {
        path: '/Projects/IT-Infrastructure-Tools/ip-subnet-calculator', name: 'IpSubnetCalculator',
        component: () => import('../views/IT-Infrastructure-Tools/IP-Subnet-Calculator.vue'),
        meta: { title: 'IP Subnet Calculator | obkworks', description: { fa: 'محاسبه گر سابنت IP و CIDR برای تعیین محدوده آدرس ها، نت ماسک، آدرس شبکه و Broadcast.', en: 'Calculate CIDR subnet masks, network ranges, broadcast addresses, and usable host IPs.' } }
    },
    {
        path: '/Projects/IT-Infrastructure-Tools/cctv-storage-calculator', name: 'CctvStorageCalculator',
        component: () => import('../views/IT-Infrastructure-Tools/CCTV-Storage-Calculator.vue'),
        meta: { title: 'CCTV Storage Calculator | obkworks', description: { fa: 'محاسبه گر هارد دوربین مداربسته جهت تخمین حجم ذخیره سازی و پهنای باند NVR/DVR بر اساس رزولوشن و تعداد دوربین.', en: 'Calculate required hard drive storage capacity and bandwidth for CCTV cameras and NVR/DVR systems.' } }
    },
    {
        path: '/Projects/IT-Infrastructure-Tools/raid-calculator', name: 'RaidCalculator',
        component: () => import('../views/IT-Infrastructure-Tools/RAID-Calculator.vue'),
        meta: { title: 'RAID Calculator | obkworks', description: { fa: 'محاسبه ظرفیت قابل استفاده، تحمل خطا و کارایی انواع آرایه های RAID (0, 1, 5, 6, 10).', en: 'Calculate usable disk space, fault tolerance, and efficiency for RAID 0, 1, 5, 6, and 10 arrays.' } }
    },
    {
        path: '/Projects/IT-Infrastructure-Tools/vm-resource-allocator', name: 'VmResourceAllocator',
        component: () => import('../views/IT-Infrastructure-Tools/VM-Resource-Allocator.vue'),
        meta: { title: 'VM Resource Allocator | obkworks', description: { fa: 'ابزار تخمین و تخصیص منابع CPU، رم و دیسک برای سرورهای مجازی سازی VMware ESXi.', en: 'Plan and allocate CPU, RAM, and storage resources for virtual machines on VMware ESXi hosts.' } }
    },
    {
        path: '/Projects/IT-Infrastructure-Tools/data-unit-converter', name: 'DataUnitConverter',
        component: () => import('../views/IT-Infrastructure-Tools/Data-Unit-Converter.vue'),
        meta: { title: 'Data Unit Converter | obkworks', description: { fa: 'مبدل واحدهای ذخیره سازی و سرعت شبکه شامل بایت، کیلوبایت، مگابایت، گیگابایت و نرخ انتقال داده.', en: 'Convert digital storage units and data transfer rates between Bytes, KB, MB, GB, TB, and bitrates.' } }
    },
    // Not Found Route
    {
        path: '/:pathMatch(.*)*', name: 'NotFound',
        component: () => import('@/views/NotFound.vue'),
        meta: { title: '404 - Page Not Found | obkworks', description: { fa: 'صفحه مورد نظر شما پیدا نشد.', en: 'The requested page could not be found.' } }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return { top: 0 }
    },
})

router.afterEach((to) => {
    const currentLang = localStorage.getItem('locale') || 'en';
    updateSeo(to, currentLang);
});

export default router