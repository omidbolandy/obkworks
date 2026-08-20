import { createRouter, createWebHistory } from 'vue-router'
// Home
import Home from '../views/Home.vue'
// Articles
import Articles from '../views/Articles.vue'
import ArticleDetails from '@/views/ArticleDetails.vue'
// Projects
import Projects from '../views/Projects.vue'
// Front-End Projects
import Weather from '../views/Front-End/Weather.vue'
import Calculator from '../views/Front-End/Calculator.vue'
import TodoList from '../views/Front-End/TodoList.vue'
import UnitConversion from '../views/Front-End/Unit-Conversion.vue'
import BMICalculator from '../views/Front-End/BMICalculator.vue'
import FinancialCalculator from '../views/Front-End/FinancialCalculator.vue'
// Networking
import VLANLab from '../views/networking/VLANLab.vue'
import OSPFLab from '../views/networking/OSPFLab.vue'
import EigrpLab from '../views/networking/EigrpLab.vue'
import EtherChannelLab from '../views/networking/EtherChannelLab.vue'
import AclLab from '../views/networking/AclLab.vue'
import PortSecurityDHCPSnooping from '../views/networking/Port Security & DHCP Snooping.vue'
import ActiveDirectoryGpoLab from '../views/networking/ActiveDirectoryGpoLab.vue'
import DnsDhcpLabView from '../views/networking/DnsDhcpLabView.vue'
import SqlServerLab from '../views/networking/SqlServerLab.vue'
// IT Infrastructure Tools
import IpSubnetCalculator from '../views/IT-Infrastructure-Tools/IP-Subnet-Calculator.vue'
import CctvStorageCalculator from '../views/IT-Infrastructure-Tools/CCTV-Storage-Calculator.vue'
import RaidCalculator from '../views/IT-Infrastructure-Tools/RAID-Calculator.vue'
import VmResourceAllocator from '../views/IT-Infrastructure-Tools/VM-Resource-Allocator.vue'
import DataUnitConverter from '../views/IT-Infrastructure-Tools/Data-Unit-Converter.vue'
// 404 Page
import NotFound from '@/views/NotFound.vue'

const routes = [
    // Home
    {
        path: '/', name: 'home', component: Home,
        meta: {
            title: 'Home | obkworks',
            description: {
                fa: 'پورتفولیوی شخصی obkworks شامل ابزارهای فرانت‌اند، سناریوهای شبکه سیسکو، مقالات تخصصی و محاسبه‌گرهای زیرساخت IT.',
                en: 'Personal portfolio of obkworks featuring front-end web tools, Cisco networking labs, technical articles, and IT infrastructure calculators.'
            }
        }
    },
    // Articles
    {
        path: '/Articles', name: 'Articles', component: Articles,
        meta: {
            title: 'Articles | obkworks',
            description: {
                fa: 'مجموعه مقالات تخصصی شبکه، مفاهیم فرانت‌اند، امنیت لایه ۲ سیسکو، ویندوز سرور و مدیریت سیستم‌ها.',
                en: 'Technical articles covering front-end development, Cisco networking, Layer 2 security, Windows Server, and system administration.'
            }
        }
    },
    {
        path: '/Articles/:id', name: 'ArticleDetails', component: ArticleDetails, props: true,
        meta: {
            title: 'Article Details | obkworks',
            description: {
                fa: 'جزئیات و آموزش‌های تخصصی مقالات توسعه وب، شبکه‌های سیسکو، ویندوز سرور و زیرساخت IT در obkworks.',
                en: 'Detailed technical guides and insights on web development, Cisco networking, Windows Server, and IT infrastructure by obkworks.'
            }
        }
    },
    // Projects
    {
        path: '/Projects', name: 'Projects', component: Projects,
        meta: {
            title: 'Projects | obkworks',
            description: {
                fa: 'مشاهده و بررسی تمام پروژه‌ها، اپلیکیشن‌های تحت وب، لابراتوارهای شبکه و ابزارهای محاسباتی زیرساخت IT.',
                en: 'Explore interactive web apps, hands-on network lab configurations, and IT infrastructure tools.'
            }
        }
    },
    // Front-End Projects
    {
        path: '/Projects/Front-End/FinancialCalculator', name: 'FinancialCalculator', component: FinancialCalculator,
        meta: {
            title: 'Financial Calculator | obkworks',
            description: {
                fa: 'محاسبه‌گر مالی آنلاین برای محاسبه اقساط وام، سود سپرده و مدیریت پروژه‌های مالی با رابط کاربری ساده.',
                en: 'Online financial calculator for loan installment, interest calculation, and quick financial planning.'
            }
        }
    },
    {
        path: '/Projects/Front-End/Weather', name: 'Weather', component: Weather,
        meta: {
            title: 'Weather App | obkworks',
            description: {
                fa: 'برنامه هواشناسی آنلاین برای مشاهده وضعیت آب‌وهوا و پیش‌بینی دما در شهرهای مختلف.',
                en: 'Real-time weather application to check temperature, forecast, and atmospheric conditions globally.'
            }
        }
    },
    {
        path: '/Projects/Front-End/TodoList', name: 'TodoList', component: TodoList,
        meta: {
            title: 'Todo List App | obkworks',
            description: {
                fa: 'ابزار مدیریت کارهای روزانه برای ثبت، ویرایش و دسته‌بندی لیست وظایف.',
                en: 'A clean todo list application for organizing daily tasks, tracking progress, and managing activities.'
            }
        }
    },
    {
        path: '/Projects/Front-End/Calendar', name: 'Calendar', component: () => import('../views/Front-End/Calendar.vue'),
        meta: {
            title: 'Calendar App | obkworks',
            description: {
                fa: 'تقویم تعاملی آنلاین برای بررسی رویدادها، تاریخ‌ها و برنامه‌ریزی زمان.',
                en: 'Interactive web calendar app for checking dates, planning schedules, and organizing tasks.'
            }
        }
    },
    {
        path: '/Projects/Front-End/UnitConversion', name: 'UnitConversion', component: UnitConversion,
        meta: {
            title: 'Unit Conversion | obkworks',
            description: {
                fa: 'ابزار چندمنظوره تبدیل واحدهای اندازه‌گیری (طول، وزن و...)، نرخ آنلاین ارز با Exchange Rate API و تبدیل اعداد به حروف.',
                en: 'Multi-purpose converter for measurement units (length, weight, etc.), live currency exchange rates, and number-to-words.'
            }
        }
    },
    {
        path: '/Projects/Front-End/QR-Barcode-Generator', name: 'QRBarcodeGenerator', component: () => import('../views/Front-End/QR-Barcode-Generator.vue'),
        meta: {
            title: 'QR & Barcode Generator | obkworks',
            description: {
                fa: 'ابزار ساخت کد QR و بارکد آنلاین با قابلیت سفارشی‌سازی و دانلود فایل خروجی.',
                en: 'Online QR code and barcode generator with customization options and instant image download.'
            }
        }
    },
    {
        path: '/Projects/Front-End/BMICalculator', name: 'BMICalculator', component: BMICalculator,
        meta: {
            title: 'BMI Calculator | obkworks',
            description: {
                fa: 'محاسبه‌گر شاخص توده بدنی (BMI) برای سنجش تناسب اندام بر اساس قد و وزن.',
                en: 'Calculate Body Mass Index (BMI) instantly to monitor weight status and health metrics.'
            }
        }
    },
    {
        path: '/Projects/Front-End/Calculator', name: 'Calculator', component: Calculator,
        meta: {
            title: 'Calculator App | obkworks',
            description: {
                fa: 'ماشین حساب آنلاین تحت وب برای انجام محاسبات ریاضی روزمره با طراحی مدرن.',
                en: 'Sleek and responsive web calculator for daily mathematical operations and fast calculations.'
            }
        }
    },
    {
        path: '/Projects/Front-End/TimeAndDate', name: 'TimeAndDate', component: () => import('../views/Front-End/Time&Date.vue'),
        meta: {
            title: 'Time & Date Tool | obkworks',
            description: {
                fa: 'ابزار محاسبه تاریخ و زمان، اختلاف زمانی ساعت‌ها و نمایش زمان جهانی.',
                en: 'Utility tool for calculating date intervals, time differences, and comparing global time zones.'
            }
        }
    },
    {
        path: '/Projects/Front-End/Modals', name: 'Modals', component: () => import('../views/Front-End/Modals.vue'),
        meta: {
            title: 'Modal Examples | obkworks',
            description: {
                fa: 'نمونه‌کارهای طراحی پاپ‌آپ و مودال‌های تعاملی در فرانت‌اند.',
                en: 'Demonstration of responsive UI modal dialogs and interactive popup components.'
            }
        }
    },

    // Networking Projects
    {
        path: '/Projects/Networking/VLAN-lab', name: 'VLANLab', component: VLANLab,
        meta: {
            title: 'VLAN Lab | obkworks',
            description: {
                fa: 'سناریوی پیکربندی VLAN، ترانکینگ 802.1Q و روتینگ بین شبکه ای (Inter-VLAN Routing) در سوئیچ‌های سیسکو.',
                en: 'Hands-on Cisco lab for configuring VLANs, 802.1Q trunking, and Inter-VLAN routing.'
            }
        }
    },
    {
        path: '/Projects/Networking/OSPF-lab', name: 'OSPFLab', component: OSPFLab,
        meta: {
            title: 'OSPF Lab | obkworks',
            description: {
                fa: 'پیاده‌سازی و پیکربندی پروتکل مسیریابی پویا OSPF در شبکه‌های Single-Area و Multi-Area سیسکو.',
                en: 'Cisco OSPF dynamic routing protocol configuration lab covering single-area and multi-area setups.'
            }
        }
    },
    {
        path: '/Projects/Networking/EigrpLab', name: 'EigrpLab', component: EigrpLab,
        meta: {
            title: 'EIGRP Lab | obkworks',
            description: {
                fa: 'آموزش و سناریوی عملی پیکربندی پروتکل EIGRP در روترهای سیسکو و تنظیم سیستم خودمختار.',
                en: 'Step-by-step EIGRP dynamic routing lab configuration on Cisco routers with AS setup.'
            }
        }
    },
    {
        path: '/Projects/Networking/EtherChannel-lab', name: 'EtherChannelLab', component: EtherChannelLab,
        meta: {
            title: 'EtherChannel Lab | obkworks',
            description: {
                fa: 'تجمیع پهنای باند و پیکربندی EtherChannel با پروتکل‌های LACP و PAgP در سوئیچ‌های سیسکو.',
                en: 'Link aggregation configuration lab using LACP (802.3ad) and PAgP EtherChannel on Cisco switches.'
            }
        }
    },
    {
        path: '/Projects/Networking/Acl-Lab', name: 'Acl-Lab', component: AclLab,
        meta: {
            title: 'ACL Lab | obkworks',
            description: {
                fa: 'کنترل ترافیک شبکه با پیکربندی Access Control List (ACL) استاندارد و گسترش‌یافته سیسکو.',
                en: 'Network traffic control lab featuring Cisco Standard and Extended Access Control Lists (ACL).'
            }
        }
    },
    {
        path: '/Projects/Networking/PortSecurityDHCPSnooping', name: 'PortSecurityDHCPSnooping', component: PortSecurityDHCPSnooping,
        meta: {
            title: 'Port Security & DHCP Snooping | obkworks',
            description: {
                fa: 'افزایش امنیت لایه ۲ شبکه با پیاده‌سازی Port Security و جلوگیری از حملات با DHCP Snooping.',
                en: 'Layer 2 security lab implementing Port Security rules and DHCP Snooping protection on Cisco switches.'
            }
        }
    },
    {
        path: '/Projects/Networking/ActiveDirectoryGpoLab', name: 'ActiveDirectoryGpoLab', component: ActiveDirectoryGpoLab,
        meta: {
            title: 'Active Directory & GPO Lab | obkworks',
            description: {
                fa: 'راه اندازی Active Directory Domain Services و اعمال سیاست‌های گروهی (GPO) در ویندوز سرور.',
                en: 'Windows Server Active Directory Domain Services setup and Group Policy Management (GPO) lab.'
            }
        }
    },
    {
        path: '/Projects/Networking/DnsDhcpLabView', name: 'DnsDhcpLabView', component: DnsDhcpLabView,
        meta: {
            title: 'DNS & DHCP Lab | obkworks',
            description: {
                fa: 'سناریوی عملی راه اندازی و مدیریت سرویس‌های زیرساختی DNS و DHCP در شبکه.',
                en: 'Infrastructure services lab covering DNS resolution setup and DHCP scope management.'
            }
        }
    },
    {
        path: '/Projects/Networking/SqlServerLab', name: 'SqlServerLab', component: SqlServerLab,
        meta: {
            title: 'SQL Server Lab | obkworks',
            description: {
                fa: 'طراحی پایگاه داده رابطه‌ای، کوئری‌نویسی T-SQL و مدیریت بانک‌های اطلاعاتی SQL Server.',
                en: 'Relational database design, T-SQL query optimization, and SQL Server administration lab.'
            }
        }
    },

    // IT Infrastructure Tools
    {
        path: '/Projects/IT-Infrastructure-Tools/ip-subnet-calculator', name: 'IpSubnetCalculator', component: IpSubnetCalculator,
        meta: {
            title: 'IP Subnet Calculator | obkworks',
            description: {
                fa: 'محاسبه‌گر سابنت IP و CIDR برای تعیین محدوده آدرس‌ها، نت‌ماسک، آدرس شبکه و Broadcast.',
                en: 'Calculate CIDR subnet masks, network ranges, broadcast addresses, and usable host IPs.'
            }
        }
    },
    {
        path: '/Projects/IT-Infrastructure-Tools/cctv-storage-calculator', name: 'CctvStorageCalculator', component: CctvStorageCalculator,
        meta: {
            title: 'CCTV Storage Calculator | obkworks',
            description: {
                fa: 'محاسبه‌گر هارد دوربین مداربسته جهت تخمین حجم ذخیره‌سازی و پهنای باند NVR/DVR بر اساس رزولوشن و تعداد دوربین.',
                en: 'Calculate required hard drive storage capacity and bandwidth for CCTV cameras and NVR/DVR systems.'
            }
        }
    },
    {
        path: '/Projects/IT-Infrastructure-Tools/raid-calculator', name: 'RaidCalculator', component: RaidCalculator,
        meta: {
            title: 'RAID Calculator | obkworks',
            description: {
                fa: 'محاسبه ظرفیت قابل استفاده، تحمل خطا و کارایی انواع آرایه‌های RAID (0, 1, 5, 6, 10).',
                en: 'Calculate usable disk space, fault tolerance, and efficiency for RAID 0, 1, 5, 6, and 10 arrays.'
            }
        }
    },
    {
        path: '/Projects/IT-Infrastructure-Tools/vm-resource-allocator', name: 'VmResourceAllocator', component: VmResourceAllocator,
        meta: {
            title: 'VM Resource Allocator | obkworks',
            description: {
                fa: 'ابزار تخمین و تخصیص منابع CPU، رم و دیسک برای سرورهای مجازی‌سازی VMware ESXi.',
                en: 'Plan and allocate CPU, RAM, and storage resources for virtual machines on VMware ESXi hosts.'
            }
        }
    },
    {
        path: '/Projects/IT-Infrastructure-Tools/data-unit-converter', name: 'DataUnitConverter', component: DataUnitConverter,
        meta: {
            title: 'Data Unit Converter | obkworks',
            description: {
                fa: 'مبدل واحدهای ذخیره‌سازی و سرعت شبکه شامل بایت، کیلوبایت، مگابایت، گیگابایت و نرخ انتقال داده.',
                en: 'Convert digital storage units and data transfer rates between Bytes, KB, MB, GB, TB, and bitrates.'
            }
        }
    },

    // 404 Page
    {
        path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound,
        meta: {
            title: '404 - Page Not Found | obkworks',
            description: {
                fa: 'صفحه مورد نظر شما پیدا نشد.',
                en: 'The requested page could not be found.'
            }
        }
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return { top: 0 }
    },
})

router.afterEach((to) => {
    document.title = to.meta.title || 'obkworks';
    const currentLang = localStorage.getItem('locale') || 'en';
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'fa' ? 'rtl' : 'ltr';
    let metaDescription = document.querySelector("meta[name='description']");
    if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
    }
    let descText = '';
    if (to.meta.description) {
        descText = typeof to.meta.description === 'object'
            ? (to.meta.description[currentLang] || to.meta.description.en)
            : to.meta.description;
    } else {
        descText = currentLang === 'fa'
            ? 'نمونه‌کار شخصی obkworks شامل ابزارهای توسعه وب، آزمایشگاه‌های شبکه سیسکو و ویندوز سرور، ابزارهای محاسباتی زیرساخت فناوری اطلاعات و مقالات فنی.'
            : 'Personal portfolio of obkworks featuring web development tools, Cisco & Windows Server networking labs, IT infrastructure calculators, and technical articles.';
    }
    metaDescription.setAttribute('content', descText);
});

export default router