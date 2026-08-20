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
        meta: { title: 'Home | obkworks' }
    },
    // Articles
    {
        path: '/Articles', name: 'Articles', component: Articles,
        meta: { title: 'Articles | obkworks' }
    },
    {
        path: '/Articles/:id', name: 'ArticleDetails', component: ArticleDetails, props: true,
        meta: { title: 'Article Details | obkworks' }
    },
    // Projects
    {
        path: '/Projects', name: 'Projects', component: Projects,
        meta: { title: 'Projects | obkworks' }
    },
    // Front-End Projects
    {
        path: '/Projects/Front-End/FinancialCalculator', name: 'FinancialCalculator', component: FinancialCalculator,
        meta: { title: 'Financial Calculator | obkworks' }
    },
    {
        path: '/Projects/Front-End/Weather', name: 'Weather', component: Weather,
        meta: { title: 'Weather App | obkworks' }
    },
    {
        path: '/Projects/Front-End/TodoList', name: 'TodoList', component: TodoList,
        meta: { title: 'Todo List App | obkworks' }
    },
    {
        path: '/Projects/Front-End/Calendar', name: 'Calendar', component: () => import('../views/Front-End/Calendar.vue'),
        meta: { title: 'Calendar App | obkworks' }
    },
    {
        path: '/Projects/Front-End/UnitConversion', name: 'UnitConversion', component: UnitConversion,
        meta: { title: 'Unit Conversion | obkworks' }
    },
    {
        path: '/Projects/Front-End/QR-Barcode-Generator', name: 'QRBarcodeGenerator', component: () => import('../views/Front-End/QR-Barcode-Generator.vue'),
        meta: { title: 'QR & Barcode Generator | obkworks' }
    },
    {
        path: '/Projects/Front-End/BMICalculator', name: 'BMICalculator', component: BMICalculator,
        meta: { title: 'BMI Calculator | obkworks' }
    },
    {
        path: '/Projects/Front-End/Calculator', name: 'Calculator', component: Calculator,
        meta: { title: 'Calculator App | obkworks' }
    },
    {
        path: '/Projects/Front-End/TimeAndDate', name: 'TimeAndDate', component: () => import('../views/Front-End/Time&Date.vue'),
        meta: { title: 'Time & Date Tool | obkworks' }
    },
    {
        path: '/Projects/Front-End/Modals', name: 'Modals', component: () => import('../views/Front-End/Modals.vue'),
        meta: { title: 'Modal Examples | obkworks' }
    },
    // Networking Projects
    {
        path: '/Projects/Networking/VLAN-lab', name: 'VLANLab', component: VLANLab,
        meta: { title: 'VLAN Lab | obkworks' }
    },
    {
        path: '/Projects/Networking/OSPF-lab', name: 'OSPFLab', component: OSPFLab,
        meta: { title: 'OSPF Lab | obkworks' }
    },
    {
        path: '/Projects/Networking/EigrpLab', name: 'EigrpLab', component: EigrpLab,
        meta: { title: 'EIGRP Lab | obkworks' }
    },
    {
        path: '/Projects/Networking/EtherChannel-lab', name: 'EtherChannelLab', component: EtherChannelLab,
        meta: { title: 'EtherChannel Lab | obkworks' }
    },
    {
        path: '/Projects/Networking/Acl-Lab', name: 'Acl-Lab', component: AclLab,
        meta: { title: 'ACL Lab | obkworks' }
    },
    {
        path: '/Projects/Networking/PortSecurityDHCPSnooping', name: 'PortSecurityDHCPSnooping', component: PortSecurityDHCPSnooping,
        meta: { title: 'Port Security & DHCP Snooping | obkworks' }
    },
    {
        path: '/Projects/Networking/ActiveDirectoryGpoLab', name: 'ActiveDirectoryGpoLab', component: ActiveDirectoryGpoLab,
        meta: { title: 'Active Directory & GPO Lab | obkworks' }
    },
    {
        path: '/Projects/Networking/DnsDhcpLabView', name: 'DnsDhcpLabView', component: DnsDhcpLabView,
        meta: { title: 'DNS & DHCP Lab | obkworks' }
    },
    {
        path: '/Projects/Networking/SqlServerLab', name: 'SqlServerLab', component: SqlServerLab,
        meta: { title: 'SQL Server Lab | obkworks' }
    },
    // IT Infrastructure Tools
    {
        path: '/Projects/IT-Infrastructure-Tools/ip-subnet-calculator', name: 'IpSubnetCalculator', component: IpSubnetCalculator,
        meta: { title: 'IP Subnet Calculator | obkworks' }
    },
    {
        path: '/Projects/IT-Infrastructure-Tools/cctv-storage-calculator', name: 'CctvStorageCalculator', component: CctvStorageCalculator,
        meta: { title: 'CCTV Storage Calculator | obkworks' }
    },
    {
        path: '/Projects/IT-Infrastructure-Tools/raid-calculator', name: 'RaidCalculator', component: RaidCalculator,
        meta: { title: 'RAID Calculator | obkworks' }
    },
    {
        path: '/Projects/IT-Infrastructure-Tools/vm-resource-allocator', name: 'VmResourceAllocator', component: VmResourceAllocator,
        meta: { title: 'VM Resource Allocator | obkworks' }
    },
    {
        path: '/Projects/IT-Infrastructure-Tools/data-unit-converter', name: 'DataUnitConverter', component: DataUnitConverter,
        meta: { title: 'Data Unit Converter | obkworks' }
    },
    // 404 Page
    {
        path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound,
        meta: { title: '404 - Page Not Found | obkworks' }
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
    document.title = to.meta.title || 'obkworks';
    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
    }
    const cleanPath = to.path.endsWith('/')
        && to.path !== '/'
        ? to.path.slice(0, -1) : to.path;
    canonical.setAttribute('href', `https://obkworks.tr${cleanPath}`);
});

export default router