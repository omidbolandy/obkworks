import { createI18n } from 'vue-i18n'

const DEFAULT_LOCALE = 'en'

const storedLocale = (() => {
    try {
        return localStorage.getItem('locale')
    } catch (e) {
        return null
    }
})()

const locale = storedLocale || DEFAULT_LOCALE

const messages = {
    // en language
    en: {
        appName: 'obk Portfolio',
        nav: {
            home: 'Home',
            articles: 'Articles',
            projects: 'Projects',
            functionalSites: 'Functional Sites',
            financialCalculator: 'Financial Calculator',
            weather: 'Weather',
            todoList: 'Todo List',
            calculator: 'Calculator',
            unitConversion: 'Unit Conversion',
            bmiCalculator: 'BMI Calculator',
            timeAndDate: 'Time And Date',
            calendar: 'Calendar',
            modals: 'Modals',
            openMenu: "Open main menu",
            closeMenu: "Close main menu"
        },
        qrBarcodeGenerator: {
            title: 'Test Page for QR & Barcode Generator',
        },
        projectsPage: {
            title: 'Projects',
            description: 'Explore a curated selection of my front-end work, networking laboratories, and infrastructure utilities.',
            backToProjects: 'Back to Projects',
            frontEnd: {
                title: 'Front-End Projects',
                description: 'A collection of my front-end applications built with Vue.js, Tailwind CSS, and JavaScript.',
                button: 'View Projects',
                items: {
                    weather: {
                        title: 'Weather',
                        description: 'Live weather app with search and detailed forecast information.',
                        link: 'Open Weather',
                    },
                    calendar: {
                        title: 'Calendar',
                        description: 'Interactive calendar with localized dates and holiday details.',
                        link: 'Open Calendar',
                    },
                    todo: {
                        title: 'Todo List',
                        description: 'Simple and practical task manager for daily planning.',
                        link: 'Open Todo List',
                    },
                    unitConversion: {
                        title: 'Unit Conversion',
                        description: 'Measurement and currency conversion tools in one place.',
                        link: 'Open Unit Conversion',
                    },
                    bmiCalculator: {
                        title: 'BMI Calculator',
                        description: 'A quick body mass index calculator for everyday health tracking.',
                        link: 'Open BMI Calculator',
                    },
                    calculator: {
                        title: 'Calculator',
                        description: 'A simple calculator with essential arithmetic operations.',
                        link: 'Open Calculator',
                    },
                    financialCalculator: {
                        title: 'Financial Calculator',
                        description: 'Tools for interest, installment, and financial calculations.',
                        link: 'Open Financial Calculator',
                    },
                    modals: {
                        title: 'Modals',
                        description: 'Reusable modal interactions for richer UI experiences.',
                        link: 'Open Modals',
                    },
                    timeAndDate: {
                        title: 'Clock, Stopwatch & Timer',
                        description: 'A live digital and analog clock, alongside a stopwatch and countdown timer — all on one page.',
                        link: 'Open Clock, Stopwatch & Timer',
                    },
                    qrBarcodeGenerator: {
                        title: 'QR & Barcode Generator',
                        description: 'A lightweight generator for creating QR codes and barcodes.',
                        link: 'Open QR & Barcode Generator',
                    },
                },
            },
            networking: {
                title: 'Networking Projects',
                description: 'A collection of my networking labs and scenarios including Cisco, Windows Server, SQL Server, and other infrastructure projects.',
                button: 'View Projects',
                items: {
                    VLAN: {
                        title: 'VLAN Lab',
                        description: 'Configuration and routing experiment focusing on VLAN behavior and Router-on-a-Stick.',
                        link: 'Open VLAN Lab',
                    },
                    OSPF: {
                        title: 'OSPF Lab',
                        description: 'Enterprise multi-LAN routing configuration using OSPFv2.',
                        link: 'Open OSPF Lab',
                    },
                    eigrpLabCard: {
                        title: "EIGRP Dynamic Routing",
                        description: "EIGRP dynamic routing implementation for multi-LAN interconnection.",
                        link: 'Open EIGRP Lab',
                    },
                    etherchannelLabCard: {
                        title: "EtherChannel (LACP) Configuration",
                        description: "EtherChannel (LACP) configuration for bandwidth aggregation and link redundancy on Cisco switches.",
                        link: 'Open EtherChannel (LACP) Lab',
                    },
                    AclLab: {
                        title: "Access Control Lists (ACL)",
                        description: "Network traffic filtering and security policy enforcement using Standard and Extended ACLs on Cisco routers.",
                        link: 'Open Access Control Lists Lab',
                    },
                    dhcpSecurityLabCard: {
                        title: "Port Security & DHCP Snooping",
                        description: "Implemented Port Security and DHCP Snooping to protect against MAC spoofing, MAC flooding, and rogue DHCP attacks.",
                        link: 'Open Port Security & DHCP Snooping Lab',
                    },
                    ActiveDirectoryGpoLab: {
                        title: "Active Directory, GPO & FSRM",
                        description: "Deploying obk.local domain, OU hierarchy design, GPO enforcement, and File Server management with FSRM & NTFS permissions.",
                        link: "Open AD DS, GPO & FSRM Lab"
                    },
                    dnsDhcpLab: {
                        title: "DHCP Failover & DNS Lab",
                        description: "Configuring High Availability DHCP service alongside AD DS integrated DNS zones in Windows Server 2022.",
                        link: "View DHCP Failover & DNS Lab"
                    },
                    SqlServerLab: {
                        title: "SQL Server & T-SQL Lab Scenario",
                        description: "Implemented SQL Server, configured SSMS, developed T-SQL scripts, managed databases, and performed backup and restore operations.",
                        link: "View SQL Server & T-SQL Lab"
                    },
                },
            },
            itInfrastructureTools: {
                title: 'IT Infrastructure Tools',
                description: 'A collection of practical tools and calculators to streamline IT infrastructure design, estimation, and resource management.',
                items: {
                    subnetCalculator: {
                        title: 'IP Subnet Calculator',
                        description: 'Quickly calculate subnets, host values, and usable ranges.',
                        link: 'View Tool',
                    },
                    cctvStorageCalculator: {
                        title: 'CCTV Storage Calculator',
                        description: 'Estimate retention volume for CCTV recording systems.',
                        link: 'View Tool',
                    },
                    raidCalculator: {
                        title: 'RAID Calculator',
                        description: 'Compare storage layouts and usable capacity for RAID setups.',
                        link: 'View Tool',
                    },
                    vmResourceAllocator: {
                        title: 'VM Resource Allocator',
                        description: 'Plan CPU, RAM, and storage allocation for virtual machines.',
                        link: 'View Tool',
                    },
                    dataUnitConverter: {
                        title: 'Data Unit Converter',
                        description: 'Convert between common digital storage units with ease.',
                        link: 'View Tool',
                    },
                },
            },
        },
        // itInfrastructureTools page en language
        itInfrastructureTools: {
            pages: {
                ipSubnetCalculator: {
                    title: "IP Subnet Calculator",
                    description: "Enter an IP address and prefix length to see full subnet details.",
                    calc: {
                        inputTitle: "Inputs",
                        ipLabel: "IP Address",
                        invalidIp: "The entered IP address is not valid.",
                        prefixLabel: "Prefix Length",
                        presets: "Quick Presets",
                        resultsTitle: "Results",
                        emptyState: "Enter a valid IP address to see results.",
                        showBinary: "Show Binary View",
                        hideBinary: "Hide Binary View",
                        network: "Network Address",
                        broadcast: "Broadcast Address",
                        subnetMask: "Subnet Mask",
                        wildcardMask: "Wildcard Mask",
                        hostRange: "Host Range",
                        totalAddresses: "Total Addresses",
                        usableHosts: "Usable Hosts",
                        ipClass: "IP Class",
                        addressType: "Address Type",
                        calculateButton: "Calculate",
                        resetButton: "Reset",
                        types: {
                            private: "Private",
                            public: "Public",
                            loopback: "Loopback",
                            linkLocal: "Link-Local",
                            multicast: "Multicast",
                            reserved: "Reserved",
                        },
                    },
                },
                cctvStorageCalculator: {
                    title: "CCTV Storage Calculator",
                    description: "Quickly calculate the required daily and total storage space by entering the camera specifications and retention period.",
                    calculator: {
                        form: {
                            camerasCount: "Number of Cameras",
                            resolution: "Camera Resolution",
                            fps: "Frame Rate (FPS)",
                            codec: "Video Codec",
                            quality: "Video Quality",
                            recordHours: "Recording Hours per Day",
                            retentionDays: "Retention Period (Days)",
                            motionDetection: "Motion-based Recording",
                            motionPercent: "Active (Motion) Time Percentage",
                            resetButton: "Reset Values",
                            calculateButton: "Calculate",
                            validationHint: "Please fill in all the fields."
                        },
                        options: {
                            resolution: {
                                r720p: "720p (1MP)",
                                r1080p: "1080p (2MP)",
                                r3mp: "3MP",
                                r4mp: "4MP",
                                r5mp: "5MP",
                                r4k: "4K (8MP)",
                            },
                            codec: {
                                h264: "H.264",
                                h265: "H.265",
                                h265plus: "H.265+",
                            },
                            quality: {
                                low: "Low",
                                medium: "Medium",
                                high: "High",
                            },
                        },
                        result: {
                            dailyTitle: "Daily Storage Required",
                            totalTitle: "Total Storage Required",
                            hddSuggestionSingle: "We recommend using one {size}TB hard drive.",
                            hddSuggestionMulti: "We recommend using {count} x {size}TB hard drives.",
                        },
                        units: {
                            gb: "GB",
                            tb: "TB",
                        },
                    },
                    relatedArticle: {
                        label: 'Want to learn the architecture behind this calculator?',
                        description: 'Read the full article on IP cameras, NVR, DVR and video transmission protocols.',
                        button: 'Read Article',
                    },
                },
                raidCalculator: {
                    title: "RAID Calculator",
                    description: "Calculate usable capacity, storage efficiency, and fault tolerance for common RAID configurations.",
                    form: {
                        raidLevelLabel: "RAID Level",
                        diskCountLabel: "Number of Disks",
                        diskCapacityLabel: "Disk Capacity",
                        diskCostLabel: "Cost per Disk",
                        diskCostPlaceholder: "e.g. 120",
                        optional: "optional",
                        minDisksBadge: "min {min} disks",
                        increase: "Increase disk count",
                        decrease: "Decrease disk count",
                        reset: "Reset to defaults",
                        calculate: "Calculate",
                    },
                    levels: {
                        raid0: {
                            label: "RAID 0",
                            description: "Striping across all disks. Maximum capacity and speed, but zero redundancy — any disk failure means total data loss."
                        },
                        raid1: {
                            label: "RAID 1",
                            description: "Mirroring. Full redundancy but usable capacity is limited to a single disk's capacity regardless of disk count."
                        },
                        raid5: {
                            label: "RAID 5",
                            description: "Striping with single distributed parity. Tolerates one disk failure. Requires at least 3 disks."
                        },
                        raid6: {
                            label: "RAID 6",
                            description: "Striping with double distributed parity. Tolerates two disk failures. Requires at least 4 disks."
                        },
                        raid10: {
                            label: "RAID 10",
                            description: "Striped set of mirrors. Strong performance and redundancy, but requires an even number of disks (min. 4)."
                        }
                    },
                    results: {
                        usableCapacity: "Usable Capacity",
                        totalRaw: "Total Raw",
                        efficiency: "Efficiency",
                        faultTolerance: "Fault Tolerance",
                        disksUnit: "disk(s)",
                        totalCost: "Total Cost",
                        costPerUnit: "Cost per Usable {unit}",
                        raid10Note: "Fault tolerance assumes at most one failed disk per mirrored pair; a second failure in the same pair causes data loss.",
                        raid1Note: "With more than 2 disks, RAID 1 mirrors the same data across all of them — usable capacity stays at one disk's capacity.",
                        copySummary: "Copy Summary",
                        copied: "Copied!"
                    },
                    validation: {
                        minDisksError: "{level} requires at least {min} disks.",
                        evenDisksError: "{level} requires an even number of disks."
                    }
                },
                vmResourceAllocator: {
                    title: "VM Resource Allocator",
                    description: "Enter your host's hardware resources (CPU, RAM, storage) and per-VM requirements to calculate the maximum number of virtual machines you can provision and how each resource is utilized.",
                    calculator: {
                        form: {
                            hostSectionLabel: "Host Resources",
                            totalCores: "Total CPU Cores",
                            totalRamGb: "Total RAM (GB)",
                            totalStorageGb: "Total Storage (GB)",
                            reservedPercent: "Hypervisor Reserved (%)",
                            vmSectionLabel: "Per-VM Requirements",
                            vcpuPerVm: "vCPUs per VM",
                            ramPerVmGb: "RAM per VM (GB)",
                            storagePerVmGb: "Storage per VM (GB)",
                            cpuOvercommitRatio: "CPU Overcommit Ratio",
                            ramOvercommitRatio: "RAM Overcommit Ratio",
                            calculateButton: "Calculate",
                            resetButton: "Reset Values",
                        },
                        options: {
                            cpuOvercommit: {
                                r1: "1:1",
                                r2: "2:1",
                                r3: "3:1",
                                r4: "4:1",
                            },
                            ramOvercommit: {
                                r1: "1:1 (Recommended)",
                                r125: "1.25:1",
                                r15: "1.5:1",
                            },
                        },
                        result: {
                            maxVmsTitle: "Maximum Virtual Machines",
                            bottleneck: {
                                cpu: "Primary constraint: CPU",
                                ram: "Primary constraint: RAM",
                                storage: "Primary constraint: Storage",
                            },
                            cpuUtilization: "CPU Utilization",
                            ramUtilization: "RAM Utilization",
                            storageUtilization: "Storage Utilization",
                            emptyStateHint: "Enter your values and click Calculate to see the result.",
                        },
                        units: {
                            vms: "VMs",
                        },
                    },
                },
                dataUnitConverter: {
                    title: "Data Unit Converter",
                    description: "Convert data values between bits, bytes, kilobytes, megabytes, gigabytes, terabytes, and petabytes, with support for both decimal (1000) and binary (1024) bases.",
                    calculator: {
                        form: {
                            value: "Value",
                            base: "Calculation Base",
                            fromUnit: "From Unit",
                            toUnit: "To Unit",
                            swapUnitsLabel: "Swap units",
                            calculateButton: "Calculate",
                            resetButton: "Reset",
                            validationHint: "Please enter a valid value (zero or greater)."
                        },
                        options: {
                            base: {
                                decimal: "Decimal (1000) — KB, MB, GB...",
                                binary: "Binary (1024) — KiB, MiB, GiB..."
                            },
                            unit: {
                                bit: "Bit (bit)",
                                byte: "Byte (B)",
                                decimal: {
                                    kb: "Kilobyte (KB)",
                                    mb: "Megabyte (MB)",
                                    gb: "Gigabyte (GB)",
                                    tb: "Terabyte (TB)",
                                    pb: "Petabyte (PB)"
                                },
                                binary: {
                                    kib: "Kibibyte (KiB)",
                                    mib: "Mebibyte (MiB)",
                                    gib: "Gibibyte (GiB)",
                                    tib: "Tebibyte (TiB)",
                                    pib: "Pebibyte (PiB)"
                                }
                            }
                        },
                        result: {
                            title: "Conversion Result",
                            disclaimer: "Note: the decimal base uses a factor of 1000 and the binary base uses 1024; results will differ depending on the selected base."
                        }
                    }
                },
            },
        },
        subnetCalculator: {
            ipv4Classes: {
                title: "IPv4 Address Classes",
                class: "Class",
                firstOctet: "First Octet Range",
                defaultMask: "Default Mask",
                cidr: "CIDR",
                usableHosts: "Usable Hosts",
                classDETitle: "Note",
                classDEInfo: "Class D is used for multicast, while Class E is reserved for experimental purposes. Therefore, they are not used for normal IP address assignment to hosts."
            },
        },

        // calendar page en language
        calendar: {
            title: 'Calendar',
            holidays: 'Holidays',
            noHolidays: 'No holidays this month.',
            previousMonth: 'Go to previous month',
            nextMonth: 'Go to next month',
            currentMonth: 'Back to the current month',
            nowruz: {
                title: "Persian New Year",
                jalali: "Jalali",
                gregorian: "Gregorian"
            },
            holidayNames: {
                newYear: 'New Year\'s Day',
                christmas: 'Christmas Day',
                thanksgiving: 'Thanksgiving Day',
                halloween: 'Halloween',
                independence: 'Independence Day',
                laborDay: 'Labor Day',
                memorial: 'Memorial Day',
                veterans: 'Veterans Day',
                juneteenth: 'Juneteenth',
                goodFriday: 'Good Friday',
                easterMonday: 'Easter Monday',
                blackFriday: 'Black Friday',
                newYearEve: 'New Year\'s Eve',
                columbus: 'Columbus Day',
                patriotsDay: 'Patriots\' Day',
                martinLutherKing: 'Martin Luther King Jr. Day',
                presidentsDay: 'Presidents\' Day',
            },
            holidayReasons: {
                newYear: 'Celebration of the first day of the year.',
                christmas: 'Celebration of the birth of Jesus Christ.',
                thanksgiving: 'A day of giving thanks for the harvest and blessings of the year.',
                halloween: 'Celebration of All Hallows\' Eve.',
                independence: 'Celebrating the adoption of the Declaration of Independence.',
                laborDay: 'Celebrating the achievements of workers.',
                memorial: 'Honoring the men and women who have died in military service.',
                veterans: 'Honoring military veterans.',
                juneteenth: 'Commemoration of the end of slavery in the United States.',
                goodFriday: 'Commemoration of the crucifixion of Jesus Christ.',
                easterMonday: 'Celebration of the resurrection of Jesus Christ.',
                blackFriday: 'Day after Thanksgiving, known for shopping deals.',
                newYearEve: 'Celebration of the last day of the year.',
                columbus: 'Commemorating Christopher Columbus\'s landing in the Americas.',
                patriotsDay: 'Commemoration of the battles of Lexington and Concord.',
                martinLutherKing: 'Commemoration of the civil rights leader\'s birthday.',
                presidentsDay: 'Honoring all U.S. presidents.',
                default: 'Official holiday',
            },
        },
        footer: {
            quickAccess: 'Quick access',
            functionalSites: 'Functional sites',
            tagline: "Personal portfolio featuring networking projects, front-end applications, technical articles, and IT infrastructure tools, developed using Vue.js and Tailwind CSS, and hosted on Vercel.",
            copyright: '© 2026 obk Portfolio. All rights reserved.',
        },
        // bmiCalculator page en language
        bmiCalculator: {
            title: 'BMI Calculator',
            description: 'Calculate your Body Mass Index quickly and safely.',
            height: 'Height (cm)',
            weight: 'Weight (kg)',
            calculate: 'Calculate BMI',
            result: 'Your BMI',
            note: 'BMI is a general health indicator and may not reflect body composition for athletes or certain groups.',
            invalid: 'Enter valid height and weight values to see your BMI result.',
            chartTitle: "Range chart BMI",
            chartRangeMin: "{value}",
            chartRangeMax: "{value}",
            reset: "Reset",
            categories: {
                underweight: 'Underweight',
                normal: 'Normal range',
                overweight: 'Overweight',
                obese: 'Obese',
            },
        },
        // home page en language
        home: {
            hero: {
                hi: "Hi, I'm",
                name: "Omid Bolandy Natag",
                title: "Network and Infrastructure Engineer and Front-End Developer",
                description: "Welcome to my website — where the stable world of network infrastructure and virtualization expertise merges with modern front-end development. Specializing in Cisco technologies, Microsoft services, and building optimized websites with Vue.js.",
                projectsButton: "View Projects"
            },
            about: {
                title: "About Me",
                textPart1: "I am a Computer Engineering graduate with a strong foundation in network operations and system administration. My core expertise revolves around",
                textPart2: "Routing & Switching, Windows Server infrastructure, and virtualization. To complement my infrastructure skills, I actively design and develop responsive web interfaces using",
                textPart3: "and",
                textPart4: ". I am deeply passionate about continuous learning, maintaining high system availability, and troubleshooting complex technical environments.",
            },
            skills: {
                title: "Technical Toolkit",
                subtitle: "Technologies and tools I work with daily",
                categories: {
                    network: {
                        title: "Networking",
                        text: "Network+, CCNA, MTCNA, MCSA, Security+, CCTV"
                    },
                    virtualization: {
                        title: "Virtualization & OS",
                        text: "ESXi, Hyper-V, VMware Workstation, Oracle Virtual Box, Windows Server"
                    },
                    web: {
                        title: "Web Development",
                        text: "Vue.js, JavaScript, Tailwind CSS, HTML & CSS, WordPress, SEO Fundamentals"
                    },
                    tools: {
                        title: "Tools & Application Software",
                        text: "SQL, Veeam Backup, PRTG, OPManager, EVE-NG, GNS3, WinSCP, WinBox, Microsoft Visio, VS Code"
                    },
                    remoteManagement: {
                        title: "Remote Management Tools",
                        text: "DameWare, Goverlan, TeamViewer, AnyDesk, Remote Desktop, VNC, Radmin"
                    },
                    officeAutomation: {
                        title: "Office Automation Systems",
                        text: "Faragostar, Chargoon, ican, Pargar, Payvast"
                    },
                }
            },
            roadmap: {
                title: "Growth & Roadmap",
                description: "Technology never stops, and neither do I. Here is the structured path I am pursuing to expand my engineering expertise:",
                steps: [
                    "Enterprise Monitoring (Zabbix & SolarWinds)",
                    "Network Security & Infrastructure (SANS 275 & SANS 401)",
                    "Firewall & Security Management (FortiGate)"
                ]
            },
            contact: {
                title: "Let's Connect",
                subtitle: "Looking for a versatile engineer who can handle both infrastructure and modern web tools? Let's talk.",
                gmail: "Gmail",
                github: "Github",
                linkedin: "Linkedin",
                copyEmail: "Copy Email Address",
                copied: "Copied!"
            },
            education: {
                sectionTitle: "Academic Education",
                degree: "Bachelor in Computer Engineering",
                university: "Islamic Azad University",
                location: "Ahvaz, Iran",
                duration: "2021 — 2025",
            }
        },
        // weather page en language
        weather: {
            title: 'Weather App',
            searchPlaceholder: 'Search',
            searchButton: 'Search',
            tempC: 'Temperature in Celsius',
            tempK: 'Temperature in Kelvin',
            feelsLike: 'Feels Like',
            humidity: 'Humidity',
            windSpeed: 'Wind Speed',
            clouds: 'Clouds',
            dateFormat: '{day} {date} {month} {year}',
            loading: "Fetching the latest weather...",
            notFound: "City not found. Check the spelling and try again.",
            searchError: "Something went wrong while fetching the weather.",
            tryAgainHint: "Try a different city name.",
            emptyTitle: "Search for a city",
            resetButton: "Reset",
            emptyHint: "Type a city name above and hit Enter to see the current weather.",
            attribution: "Weather data provided by",
        },
        // Articles page en language
        articles: {
            title: 'All Articles',
            readMore: 'Read More',
            backToAll: 'Back to All Articles',
            notFound: 'Article not found!',
            filterByTags: "Filter by tags",
            clearFilters: "Clear filters",
            noResults: "No articles found with these tags",
            author: "Author",
            publishedOn: "Published on",
            backToAllArticles: "Back to All Articles",
            notFound: "Article not found!",
            Copied: "Copied",
            relatedProject: 'Related Project',
            references: 'References',
            relatedTool: 'Related Tool',
        },
        // todo page en language
        todo: {
            title: 'Todo List',
            description: 'Description',
            tip: 'Note: To add a to-do item, press Enter or the "Add" button.',
            features: 'Features',
            addTask: 'Add a task.',
            deleteTask: 'Delete a task.',
            checkComplete: 'Check / Complete a task.',
            toggleView: 'Toggle to view all tasks / hide completed tasks.',
            tasksLeft: '{count} task(s) left!',
            hideCompleted: 'Hide Completed',
            showAll: 'Show All',
            addNewTask: 'Add a new task',
            add: "Add",
            limitReached: "You've reached the limit of {max} tasks",
        },
        // unitConversion page en language
        unitConversion: {
            title: 'Unit Conversion',
            chooseConversion: 'Conversion of measurement units',
            description: 'Select a conversion from the dropdown, enter a value, then press Enter or click Convert.',
            conversionType: 'Conversion type',
            enterAmount: 'Enter amount',
            convertButton: 'Convert',
            resultLabel: 'Result',
            invalidInput: 'Invalid input',
            invalidConversion: 'Invalid conversion type',
            resetButton: "Reset",
            options: {
                meterToFeet: 'Meters → Feet',
                feetToMeter: 'Feet → Meters',
                meterToCentimeter: 'Meters → Centimeters',
                centimeterToMeter: 'Centimeters → Meters',
                meterToKilometer: 'Meters → Kilometers',
                kilometerToMeter: 'Kilometers → Meters',
                rialToUsd: "",
                usdToRial: "",
                rialToEur: "",
                eurToRial: "",
                rialToCny: "",
                cnyToRial: "",
                usdToEur: "",
                eurToUsd: "",
                usdToCny: "",
                cnyToUsd: "",
                eurToCny: "",
                cnyToEur: ""
            },
            currencyTitle: 'Currency Conversion',
            currencyDescription: 'Convert between Iranian Rial, US Dollar, Euro, and Chinese Yuan. Enter an amount, choose a conversion type, and click Convert.', currencyType: 'Conversion type',
            currencyAmount: 'Enter amount',
            currencyConvertButton: 'Convert Currency',
            currencyResultLabel: 'Currency result',
            invalidCurrencyInput: 'Invalid currency amount',
            currencyLoading: "Fetching rate...",
            currencyFetchError: "Failed to fetch exchange rate, please try again",
            wordsTitle: "Number & Words Conversion",
            wordsDescription: "Convert a number to words or words to a number.",
            wordsTypeLabel: "Conversion Type",
            wordsNumberInput: "Enter a number",
            wordsTextInput: "Enter text",
            wordsResultLabel: "Result",
            invalidWordsInput: "Invalid input",
            NumberToWordsoptions: {
                numberToWords: "Number to Words",
                wordsToNumber: "Words to Number"
            },
            currencyAttribution: "Exchange rates provided by",
        },
        // Calculator page en language
        Calculator: {
            title: 'Calculator',
        },
        // Icon page en language
        commonlanguage: {
            language: 'Language',
            en: 'EN',
            fa: 'FA',
        },
        // converter page in calendar page en language
        converterLabels: {
            titleToGregorian: "Convert Jalali to Gregorian",
            titleToJalali: "Convert Gregorian to Jalali",
            year: "Year",
            day: "Day",
            convert: "Convert",
            invalid: "The entered date is invalid",
            reset: "Reset"
        },
        // experience section in home page en language
        experience: {
            title: "Professional Experience",
            subtitle: "My career journey and practical training",
            company: "Arvand Petrochemical Company",
            role: "Software Engineering Intern",
            date: "Feb 2025 – May 2025",
            tasksTitle: "Practical Achievements:",
            tasks: [
                "Familiarization and hands-on experience with internal company enterprise systems and automation software.",
                "Assisted in end-user support, resolving software issues and system queries for corporate staff.",
                "Utilized and mastered Goverlan and DameWare tools for secure remote desktop management and troubleshooting.",
                "Gained insight into workflow processes, ticketing, and operational documentation within the software department."
            ]
        },
        // aboutWebsite section in home page en language
        aboutWebsite: {
            title: "About This Website",
            part1: "This website is designed as my personal portfolio, featuring network projects, front-end applications, technical articles, and IT infrastructure tools. Built with ",
            vue: "Vue.js",
            part2: " and ",
            tailwind: "Tailwind CSS",
            part3: " with a responsive design, it supports both Persian and English languages and is hosted on ",
            cloudflare: "Vercel",
            part4: ". New projects, scenarios, and articles will be added in the future."
        },
        // financialCalculator page en language
        financialCalculator: {
            title: "Financial Calculator",
            currency: "IRR",
            currencyNoteLabel: "Note:",
            currencyNoteText: "All calculations in this calculator are based on the Rial value.",
            wordsLabel: "In words",
            deposit: {
                title: "Deposit Interest Calculator",
                description: "Calculate your deposit's profit based on the amount, annual interest rate, and duration in days, or work out the interest rate from a known profit amount.",
                calcType: "Calculation type",
                options: {
                    amount: "Calculate profit amount",
                    rate: "Calculate interest rate"
                },
                amountLabel: "Deposit amount (IRR)",
                rateLabel: "Annual interest rate (%)",
                daysLabel: "Duration (days)",
                knownProfitLabel: "Received profit amount (IRR)",
                convertButton: "Calculate",
                resetButton: "Reset",
                dailyProfitLabel: "Daily profit",
                monthlyProfitLabel: "Monthly profit (approx.)",
                totalProfitLabel: "Total profit for the period",
                rateResultLabel: "Annual interest rate",
                invalidInput: "Please enter valid values."
            },
            loan: {
                title: "Loan Installment Calculator",
                description: "Calculate the monthly installment based on the loan amount, annual interest rate, and number of installments, or work out the interest rate from a known installment amount.",
                calcType: "Calculation type",
                options: {
                    installment: "Calculate installment amount",
                    rate: "Calculate interest rate"
                },
                amountLabel: "Loan amount (IRR)",
                rateLabel: "Annual interest rate (%)",
                monthsLabel: "Number of installments (months)",
                installmentAmountLabel: "Installment amount (IRR)",
                convertButton: "Calculate",
                resetButton: "Reset",
                installmentResultLabel: "Installment amount",
                totalPaymentLabel: "Total payment",
                totalInterestLabel: "Total interest",
                rateResultLabel: "Annual interest rate",
                invalidInput: "Please enter valid values.",
                invalidRateRange: "The installment amount is below the minimum possible (would imply a negative interest rate)."
            }
        },
        // qrBarcode page en language
        qrBarcode: {
            title: "QR Code & Barcode Generator",
            qrTitle: "Generate QR Code",
            barcodeTitle: "Generate Barcode",
            qrPlaceholder: "Enter text or a link",
            barcodePlaceholder: "Enter text or code",
            generate: "Generate",
            size: "Size",
            sizeSmall: "Small",
            sizeMedium: "Medium",
            sizeLarge: "Large",
            emptyResult: "Result will appear here",
            downloadPng: "Download PNG",
            downloadSvg: "Download SVG",
            errorEmpty: "Please enter some text",
            errorTooLong: "Text exceeds the allowed length",
            errorGeneric: "Failed to generate code, please try again",
            errorBarcodeUnsupported: "This text contains characters unsupported by barcode format",
            errorPersianUnsupported: "Linear barcodes do not support Persian characters; use the QR Code for Persian text",
            reset: "Reset",
        },
        // modals page en language
        common: {
            close: "Close",
            cancel: "Cancel",
            confirm: "Confirm",
            previous: "Previous",
            next: "Next",
            finish: "Finish"
        },
        modals: {
            pageTitle: "Modals",
            cta: "View",
            buttons: {
                modal1: "Open Modal 1",
                modal4: "Open Modal 4",
                modal5: "Open Modal 5",
                modal6: "Open Modal 6",
                modal7: "Open Modal 7",
                modal8: "Open Modal 8",
                modal9: "Open Modal 9",
                modal10: "Open Modal 10",
                modal11: "Open Modal 11",
                step: "Step-by-step Modal",
                confirm: "Confirmation Modal",
                auto: "Timed Modal",
                carousel: "Image Gallery Modal",
                fullscreen: "Fullscreen Modal"
            },
            cards: {
                modal1: { description: "A simple modal for showing a short message" },
                modal4: { description: "A larger modal with scroll support and an image" },
                modal5: { description: "A login form with simple validation" },
                modal6: { description: "A modal with a fade-in/fade-out effect" },
                modal7: { description: "A modal with a smooth rotating animation" },
                modal8: { description: "A modal that slides in from the bottom" },
                modal9: { description: "A modal that slides in from the top" },
                modal10: { description: "A modal that slides in from the right" },
                modal11: { description: "A modal that slides in from the left" },
                step: { description: "A three-step wizard to guide the user" },
                confirm: { description: "Asks the user to confirm a sensitive action" },
                auto: { description: "A modal that closes automatically after a few seconds" },
                carousel: { description: "An image gallery with next/previous navigation" },
                modal12: { description: "A modal with a smooth zoom-in/zoom-out effect" },
                fullscreen: { description: "A modal that fills the entire screen" }
            },
            modal1: { "title": "Modal One", "text": "This is the text inside modal one." },
            modal4: {
                title: "Larger Modal",
                text1: "This modal is larger and can hold longer content. It also supports internal scrolling to make the best use of screen space.",
                text2: "You can show more information here, such as images, lists, or even forms.",
                imageAlt: "Sample image"
            },
            modal5: {
                title: "User Login",
                emailLabel: "Email:",
                passwordLabel: "Password:",
                submit: "Log in",
                validationError: "Please enter your email and password."
            },
            modal6: { "title": "Animated Modal", "text": "This modal opens and closes with an animation." },
            modal7: { "title": "Beautiful Animated Modal", "text": "This modal has a nice animation that plays when it opens and closes." },
            modal8: { "title": "Slide Animation Modal", "text": "This modal slides in beautifully from the bottom." },
            modal9: { "title": "Slide Animation Modal", "text": "This modal slides in beautifully from the top." },
            modal10: { "title": "Slide Animation Modal", "text": "This modal slides in beautifully from the right." },
            modal11: { "title": "Slide Animation Modal", "text": "This modal slides in beautifully from the left." },
            modal2: { "title": "Modal Two", "text": "This is the text inside modal two." },
            step: {
                title: "Step {step} of {total}",
                text: "This is the content for step {step}."
            },
            confirmModal: {
                title: "Are you sure?",
                text: "This action cannot be undone.",
                confirmedAlert: "Action confirmed!"
            },
            auto: {
                title: "Notification",
                text: "This modal will close in {timer} seconds."
            },
            carousel: { "title": "Image Gallery Modal" },
            fullscreen: {
                title: "Fullscreen Modal",
                text: "This is a fullscreen modal."
            },
            fullscreen: {
                title: "Fullscreen Modal",
                text: "This is a fullscreen modal."
            },
            modal12: {
                title: "Zoom Animation Modal",
                text: "This modal opens and closes with a smooth zoom animation."
            }
        },
        // timeDate page en language
        timeDate: {
            pageTitle: "Time and Date",
            digitalClock: "Digital Clock",
            analogClock: "Analog Clock",
            currentDate: "Current date:",
            currentTime: "Current time:",
            am: "AM",
            pm: "PM",
            timeCounter: {
                title: "Time Counter",
                start: "Start",
                stop: "Stop",
                reset: "Reset"
            },
            countdown: {
                title: "Countdown Timer",
                hoursPlaceholder: "Hours",
                minutesPlaceholder: "Minutes",
                secondsPlaceholder: "Seconds",
                start: "Start",
                stop: "Stop",
                reset: "Reset",
                setTimeAlert: "Please set the reverse time.",
                timeUpAlert: "Time is up!",
                hoursLabel: "Hours",
                minutesLabel: "Minutes",
                secondsLabel: "Seconds"
            },
            fullDate: "Full Date:",
            time24h: "Time (24h):",
        },
        // networkingLabs page en language
        networkingLabs: {
            pages: {
                vlanRouterOnAStick: {
                    badge: "CCNA Practical Lab",
                    title: "VLAN & Router-on-a-Stick Implementation",
                    imageAlt: "VLAN and Router-on-a-Stick Topology",
                    intro: "The concept of a Virtual Local Area Network (VLAN) is used to logically separate broadcast domains at Layer 2. Communication between separate VLANs requires a Layer 3 device. The Router-on-a-Stick method, using logical subinterfaces over a single physical trunk link, provides Inter-VLAN routing in the most efficient way.",
                    labels: {
                        switchTerminal: "Switch Terminal",
                        routerTerminal: "Router Terminal",
                    },
                    sections: {
                        addressing: {
                            heading: "2. Network Structure & Addressing Scheme",
                            intro: "The logical network infrastructure consists of two separate segments, isolated based on security and management requirements:",
                            salesLabel: "Sales Department (VLAN 10):",
                            salesDesc: "Network range {network} with gateway address {gateway}. Clients PC-1 ({pc1}) and PC-2 ({pc2}) reside in this domain.",
                            marketingLabel: "Marketing Department (VLAN 20):",
                            marketingDesc: "Network range {network} with gateway address {gateway}. Clients PC-3 ({pc3}) and PC-4 ({pc4}) reside in this domain.",
                        },
                        switchConfig: {
                            heading: "4. Switch Configuration Commands",
                            intro: "At the access layer, VLANs are first defined, ports connected to end systems are set to access mode, and the uplink to the router is set to trunk mode:",
                        },
                        routerConfig: {
                            heading: "5. Router Configuration (Router-on-a-Stick)",
                            intro: "On the router, the main physical port is enabled, and subinterfaces for each VLAN are created using standard IEEE 802.1Q encapsulation:",
                        },
                        verification: {
                            heading: "6. Verification & Troubleshooting",
                            intro: "To confirm correct Layer 2 and Layer 3 operation, the following commands are executed:",
                            item1: "Run `show vlan brief` on the switch to verify correct port assignment to VLAN 10 and VLAN 20.",
                            item2: "Run `show interfaces trunk` on the switch to confirm trunk mode is active on port GigabitEthernet 0/1.",
                            item3: "Run `show ip route` on the router to confirm networks {net1} and {net2} appear as Connected.",
                            item4: "Test connectivity (ping) between PC-1 ({pc1}) and PC-3 ({pc3}) to confirm Inter-VLAN routing works correctly.",
                        },
                    },
                    codeComments: {
                        switch: {
                            createVlans: "Create VLAN 10 and VLAN 20",
                            assignVlan10Ports: "Assign FastEthernet 0/1 and 0/2 ports to VLAN 10",
                            assignVlan20Ports: "Assign FastEthernet 0/3 and 0/4 ports to VLAN 20",
                            setTrunk: "Set the main uplink to the router to trunk mode",
                            saveConfig: "Save configuration",
                        },
                        router: {
                            enablePhysical: "Enable the main physical interface without an IP address",
                            createSubVlan10: "Create subinterface for VLAN 10",
                            createSubVlan20: "Create subinterface for VLAN 20",
                            saveConfig: "Save configuration",
                        },
                    },
                    meta: {
                        estimatedTime: "⏱ Estimated time: 20 minutes",
                    },
                    pitfalls: {
                        heading: "7. Common Pitfalls",
                        intro: "A few common mistakes tend to come up when implementing this scenario:",
                        item1: "Forgetting to save the configuration (`write memory`) — without it, settings are lost on reload or power loss.",
                        item2: "Native VLAN mismatch between the two ends of the trunk link (switch and router), which triggers CDP Native VLAN Mismatch warnings and can leak traffic between VLANs.",
                        item3: "A mismatch between the VLAN number in the router's `encapsulation dot1Q` command and the VLAN defined on the switch.",
                        item4: "Accidentally setting the port connected to the router to access mode instead of trunk mode, which completely breaks inter-VLAN connectivity.",
                        item5: "Incorrectly configuring the PCs' default gateway to not match the IP address of the corresponding subinterface.",
                    },
                    conclusion: {
                        heading: "8. Technical Conclusion",
                        paragraph1: "This lab demonstrates the fundamental concept of Inter-VLAN routing — a core CCNA exam topic — using the Router-on-a-Stick method, which uses a single physical trunk link and multiple logical subinterfaces to avoid needing several physical ports on the router.",
                        paragraph2: "However, in enterprise environments with high traffic volume, this single trunk link can become a bandwidth bottleneck. In such cases, Layer 3 switching using SVIs (Switched Virtual Interfaces) on multilayer switches is generally the better choice for scalability and performance, since it relies on hardware-based (ASIC) switching rather than the router's software-based processing.",
                    },
                    concepts: {
                        heading: "1. VLAN Core Concepts",
                        intro: "Before diving into configuration, a few key concepts make the rest of this lab easier to follow:",
                        items: {
                            broadcastDomain: {
                                title: "What is a Broadcast Domain?",
                                desc: "Each VLAN creates a separate broadcast domain — broadcast traffic from one VLAN never leaks into another, even on the same physical switch.",
                            },
                            segmentation: {
                                title: "Logical Segmentation, Independent of Physical Location",
                                desc: "VLANs let you group users logically by department or security level, without depending on which physical port or switch they're connected to.",
                            },
                            portModes: {
                                title: "Access vs. Trunk Ports",
                                desc: "An access port belongs to a single VLAN and connects end clients; a trunk port carries traffic for multiple VLANs at once, typically between switches or to a router.",
                            },
                            tagging: {
                                title: "802.1Q Tagging and the Native VLAN",
                                desc: "The IEEE 802.1Q standard tags every frame crossing a trunk link with its VLAN ID, except for Native VLAN traffic, which passes untagged.",
                            },
                            interVlanRouting: {
                                title: "Why Is Inter-VLAN Routing Needed?",
                                desc: "Layer 2 switches can't route between separate VLANs, so a Layer 3 device (a router or multilayer switch) is required for them to communicate.",
                            },
                        },
                    },
                    connections: {
                        heading: "3. Physical Connections",
                        intro: "The table below shows the exact physical port mapping between the clients, switch, and router in this topology:",
                        headers: {
                            sourceDevice: "Source Device",
                            sourcePort: "Source Port",
                            destDevice: "Destination Device",
                            destPort: "Destination Port",
                            linkType: "Link Type",
                        },
                        linkTypes: {
                            accessVlan10: "Access mode (VLAN 10)",
                            accessVlan20: "Access mode (VLAN 20)",
                            trunk8021q: "Trunk mode (802.1Q)",
                        },
                    },
                },
                ospfSingleArea: {
                    badge: "CCNA Practical Lab",
                    title: "OSPF Single-Area Configuration with Transit Network (Area 0)",
                    imageAlt: "Online diagram of OSPF Single Area topology with three isolated LANs",
                    intro: "In this networking lab, we cover how to configure OSPFv2 dynamic routing in a single area (Area 0). The goal of this topology is to establish full end-to-end routing between three isolated LANs using dedicated routers linked through a central backbone switch.",
                    meta: {
                        estimatedTime: "Estimated Time: 15 mins"
                    },
                    labels: {
                        routersTerminal: "CLI Commands for Routers R1, R2, and R3",
                        switchesTerminal: "CLI Commands for Access Switches and SW-CORE"
                    },
                    concepts: {
                        heading: "1. Fundamental OSPF Concepts",
                        intro: "Before applying configurations, it is crucial to understand the core concepts behind OSPF routing:",
                        items: {
                            linkState: {
                                title: "Link-State Protocol",
                                desc: "OSPF is a Link-State routing protocol that calculates the shortest path based on full topology visibility."
                            },
                            wildcardMask: {
                                title: "Wildcard Mask",
                                desc: "OSPF network commands use a wildcard mask (inverse of subnet mask). For 255.255.255.0, the wildcard is 0.0.0.255."
                            },
                            areaConcept: {
                                title: "Area Concept (Area 0)",
                                desc: "All routers in this lab belong to Area 0 (Backbone Area), which carries inter-network traffic."
                            },
                            drBdr: {
                                title: "DR / BDR Election",
                                desc: "In multi-access broadcast networks (like SW-CORE connection), OSPF elects a DR and BDR to manage LSA exchanges."
                            }
                        }
                    },
                    sections: {
                        addressing: {
                            heading: "2. IP Addressing Scheme",
                            intro: "The network IP layout is allocated as follows:",
                            lan1Label: "LAN 1 Network:",
                            lan1Desc: "Subnet {network} | Gateway: {gateway} | PC: {pc1}",
                            lan2Label: "LAN 2 Network:",
                            lan2Desc: "Subnet {network} | Gateway: {gateway} | PC: {pc2}",
                            lan3Label: "LAN 3 Network:",
                            lan3Desc: "Subnet {network} | Gateway: {gateway} | PC: {pc3}",
                            backboneLabel: "Backbone Network (SW-CORE):",
                            backboneDesc: "Subnet {network} | R1: {r1} | R2: {r2} | R3: {r3}"
                        },
                        routersConfig: {
                            heading: "4. Routers Configuration (R1, R2, R3)",
                            intro: "Apply the following CLI syntax on each router to initialize interfaces and enable OSPF:"
                        },
                        switchesConfig: {
                            heading: "5. Switches Configuration",
                            intro: "Ensure all switch ports are enabled and operational using these commands:"
                        },
                        verification: {
                            heading: "6. Verification & Testing",
                            intro: "Run these verification steps to ensure optimal network operations:",
                            item1: "On R1, execute 'show ip route ospf' and verify routes 192.168.2.0/24 and 192.168.3.0/24 exist.",
                            item2: "Run 'show ip ospf neighbor' to check neighbor states (must be FULL state).",
                            item3: "From PC1, ping its default gateway at 192.168.1.1.",
                            item4: "Ping PC2 (192.168.2.10) and PC3 (192.168.3.10) from PC1 to verify end-to-end connectivity."
                        }
                    },
                    connections: {
                        heading: "3. Physical Connections Table",
                        intro: "The network cabling connections are organized as listed below:",
                        headers: {
                            sourceDevice: "Source Device",
                            sourcePort: "Source Port",
                            destDevice: "Destination Device",
                            destPort: "Destination Port",
                            linkType: "Link Type"
                        },
                        linkTypes: {
                            accessLan: "Local LAN Link (Straight-Through Cable)",
                            backbone: "OSPF Backbone Link (Straight-Through Cable)"
                        }
                    },
                    pitfalls: {
                        heading: "7. Common Pitfalls & Troubleshooting",
                        intro: "If you experience 'Destination host unreachable' errors, review these factors:",
                        item1: "Missing Default Gateway: PC hosts must have router interfaces set as Default Gateway.",
                        item2: "Incorrect Wildcard Mask: Verify wildcard mask 0.0.0.255 is used for /24 networks.",
                        item3: "Shutdown Interfaces: Ensure 'no shutdown' command has been applied to all ports.",
                        item4: "Area Mismatch: Confirm all network commands belong to area 0."
                    },
                    codeComments: {
                        routers: {
                            r1Title: "Router R1 Configurations",
                            r1Interfaces: "Configure LAN and Backbone interfaces",
                            r1Ospf: "Enable OSPF Process on Area 0",
                            r2Title: "Router R2 Configurations",
                            r2Interfaces: "Configure LAN and Backbone interfaces",
                            r2Ospf: "Enable OSPF Process on Area 0",
                            r3Title: "Router R3 Configurations",
                            r3Interfaces: "Configure LAN and Backbone interfaces",
                            r3Ospf: "Enable OSPF Process on Area 0"
                        },
                        switches: {
                            accessSwitchesTitle: "Enable ports for access switches (SW1, SW2, SW3)",
                            coreSwitchTitle: "Enable ports for central SW-CORE switch"
                        }
                    },
                    conclusion: {
                        heading: "8. Conclusion",
                        paragraph1: "OSPF is an essential routing protocol for enterprise networks due to its fast convergence and scalability. In this lab, we linked three isolated LANs using Single Area OSPF.",
                        paragraph2: "Correct Default Gateway settings on hosts and precise network statements in OSPF guarantee seamless inter-subnet communications."
                    },
                    githubLink: "View Source Code on GitHub"
                },
                eigrpRouting: {
                    badge: "CCNA Practical Lab",
                    title: "EIGRP Dynamic Routing Configuration: Interconnecting Multiple LANs",
                    imageAlt: "Diagram of EIGRP Routing lab topology linking three isolated LANs",
                    intro: "In this lab, we configure Cisco's EIGRP (Enhanced Interior Gateway Routing Protocol) across three routers. We establish rapid route convergence, dual-link redundancy, and optimized metrics for connecting three distinct local subnets.",
                    meta: {
                        estimatedTime: "Estimated Time: 15 mins"
                    },
                    githubLink: "View Source Code on GitHub",
                    labels: {
                        routersTerminal: "CLI Commands for Routers R1, R2, and R3",
                        switchesTerminal: "CLI Commands for Switches SW1, SW2, and SW3"
                    },
                    concepts: {
                        heading: "1. Fundamental EIGRP Concepts",
                        intro: "Understanding these core mechanism components is critical before configuring EIGRP:",
                        items: {
                            dualAlgorithm: {
                                title: "DUAL Algorithm",
                                desc: "EIGRP uses the Diffusing Update Algorithm (DUAL) to guarantee loop-free backup routes (Feasible Successors) and instant convergence."
                            },
                            asNumber: {
                                title: "Autonomous System (AS)",
                                desc: "Routers must share the exact same Autonomous System Number (e.g., AS 100) to form neighbor relationships."
                            },
                            compositeMetric: {
                                title: "Composite Metric",
                                desc: "EIGRP calculates path cost using Bandwidth and Delay by default, making routing decisions highly accurate."
                            },
                            passiveInterface: {
                                title: "Passive Interface",
                                desc: "Disables EIGRP Hello packets on user-facing LAN interfaces to enhance security and reduce CPU overhead."
                            }
                        }
                    },
                    sections: {
                        addressing: {
                            heading: "2. IP Addressing Scheme",
                            intro: "The subnet allocation across LAN and WAN interfaces is structured as follows:",
                            lan1Label: "LAN 1 Subnet:",
                            lan1Desc: "Subnet {network} | Gateway: {gateway} | PC1: {pc1}",
                            lan2Label: "LAN 2 Subnet:",
                            lan2Desc: "Subnet {network} | Gateway: {gateway} | PC2: {pc2}",
                            lan3Label: "LAN 3 Subnet:",
                            lan3Desc: "Subnet {network} | Gateway: {gateway} | PC3: {pc3}",
                            wanLabel: "Inter-Router WAN Links (/30):",
                            wanDesc: "R1-R2: 10.12.0.0/30 | R2-R3: 10.23.0.0/30 | R3-R1: 10.31.0.0/30"
                        },
                        routersConfig: {
                            heading: "4. Routers Configuration (R1, R2, R3)",
                            intro: "Apply the following Cisco CLI configurations to enable interfaces and EIGRP AS 100:"
                        },
                        switchesConfig: {
                            heading: "5. Switches Configuration (SW1, SW2, SW3)",
                            intro: "Enable active interface ports connected to PCs and Routers on each switch:"
                        },
                        verification: {
                            heading: "6. Verification & Testing",
                            intro: "Verify your EIGRP routing topology and neighbor states using these commands:",
                            item1: "Run 'show ip eigrp neighbors' to verify established neighbor adjacencies with neighboring routers.",
                            item2: "Run 'show ip route eigrp' on R1 and verify routes marked with 'D' for distant subnets.",
                            item3: "Execute 'show ip eigrp topology' to view Successors and Feasible Successors.",
                            item4: "Ping from PC1 (192.168.10.10) to PC2 (192.168.20.10) and PC3 (192.168.30.10) to confirm full end-to-end routing."
                        }
                    },
                    connections: {
                        heading: "3. Physical Connections Table",
                        intro: "All physical cabling details between devices are listed in the table below:",
                        headers: {
                            sourceDevice: "Source Device",
                            sourcePort: "Source Port",
                            destDevice: "Destination Device",
                            destPort: "Destination Port",
                            linkType: "Link Type"
                        },
                        linkTypes: {
                            accessLan: "Local LAN Link (Straight-Through Cable)",
                            backbone: "EIGRP WAN Backbone Link (Cross-Over/Straight)"
                        }
                    },
                    pitfalls: {
                        heading: "7. Common Pitfalls & Troubleshooting",
                        intro: "If EIGRP neighbors do not form or routing fails, verify the following:",
                        item1: "Mismatched AS Number: Neighboring routers must use the exact same Autonomous System ID.",
                        item2: "Missing 'no auto-summary': Without this, subnets are summarized at classful boundaries, causing routing loops.",
                        item3: "Mismatched K-Values: EIGRP metric calculation weights must match across all routers.",
                        item4: "Passive-Interface on WAN: Do not set WAN links as passive, or neighbor adjacencies will fail."
                    },
                    codeComments: {
                        routers: {
                            r1Title: "Router R1 Configuration",
                            r1Interfaces: "Configure LAN 1 and WAN Interfaces",
                            r1Eigrp: "Enable EIGRP AS 100 & Passive Interface",
                            r2Title: "Router R2 Configuration",
                            r2Interfaces: "Configure LAN 2 and WAN Interfaces",
                            r2Eigrp: "Enable EIGRP AS 100 & Passive Interface",
                            r3Title: "Router R3 Configuration",
                            r3Interfaces: "Configure LAN 3 and WAN Interfaces",
                            r3Eigrp: "Enable EIGRP AS 100 & Passive Interface"
                        },
                        switches: {
                            sw1Title: "Switch SW1 Active Ports Configuration",
                            sw2Title: "Switch SW2 Active Ports Configuration",
                            sw3Title: "Switch SW3 Active Ports Configuration"
                        }
                    },
                    conclusion: {
                        heading: "8. Conclusion",
                        paragraph1: "EIGRP is Cisco's premier distance-vector protocol, renowned for its minimal network overhead and rapid convergence using the DUAL algorithm.",
                        paragraph2: "Implementing passive interfaces on client subnets and disabling auto-summarization guarantees secure, predictable routing across enterprise networks."
                    }
                },
                etherchannelLacp: {
                    badge: "CCNA Practical Lab",
                    title: "EtherChannel LACP Configuration: Link Aggregation & Redundancy",
                    imageAlt: "Diagram of EtherChannel LACP lab topology bundling 4 links between two switches",
                    intro: "In this lab, we configure EtherChannel using IEEE 802.3ad Link Aggregation Control Protocol (LACP) between two switches. Bundling four physical links into a single logical Trunk connection enhances throughput and provides instant link failover.",
                    meta: {
                        estimatedTime: "Estimated Time: 10 mins"
                    },
                    githubLink: "View Source Code on GitHub",
                    labels: {
                        switchesTerminal: "CLI Commands for Switches SW1 and SW2"
                    },
                    concepts: {
                        heading: "1. Fundamental EtherChannel Concepts",
                        intro: "Key operational concepts regarding Link Aggregation and LACP protocol:",
                        items: {
                            lacpProtocol: {
                                title: "LACP Protocol (802.3ad)",
                                desc: "An open standard protocol that dynamically negotiates link bundling between switches using Active/Passive modes."
                            },
                            bandwidthAggregation: {
                                title: "Bandwidth Aggregation",
                                desc: "Combines multiple physical links into one logical connection, dramatically increasing overall throughput between switches."
                            },
                            redundancy: {
                                title: "Fault Tolerance",
                                desc: "If an active physical link fails, traffic automatically fails over to remaining active links in the bundle without downtime."
                            },
                            portChannel: {
                                title: "Port-Channel Interface",
                                desc: "A single logical interface representing the bundled links, where configuration (e.g. Trunk) is applied uniformly."
                            }
                        }
                    },
                    sections: {
                        addressing: {
                            heading: "2. Addressing & Link Layout",
                            intro: "EtherChannel operates at Layer 2. Host IP parameters in the flat subnet are configured as follows:",
                            pc1Label: "PC1 Address:",
                            pc1Desc: "192.168.10.10 /24 (Connected to SW1 Fa0/1)",
                            pc2Label: "PC2 Address:",
                            pc2Desc: "192.168.10.20 /24 (Connected to SW2 Fa0/1)",
                            channelLabel: "Logical Bundle:",
                            channelDesc: "Port-channel 1 combining interfaces Gi0/1-2 and Fa0/23-24"
                        },
                        switchesConfig: {
                            heading: "4. Switches Configuration (SW1, SW2)",
                            intro: "Apply these Cisco CLI commands to group ports into LACP Port-Channel 1 and configure Trunk mode:"
                        },
                        verification: {
                            heading: "5. Verification & Failover Testing",
                            intro: "Verify EtherChannel status and test redundancy with the following steps:",
                            item1: "Run 'show etherchannel summary' on both switches and confirm state is 'SU' (Layer 2, In-Use) and bundled ports show 'P'.",
                            item2: "Run 'show interfaces port-channel 1' to verify the combined bandwidth and trunk status.",
                            item3: "Initiate a continuous ping from PC1 to PC2, disconnect one cable, and observe uninterrupted connectivity."
                        }
                    },
                    connections: {
                        heading: "3. Physical Connections Table",
                        intro: "The cabling setup between PC endpoints and the bundled switch interconnections is detailed below:",
                        headers: {
                            sourceDevice: "Source Device",
                            sourcePort: "Source Port",
                            destDevice: "Destination Device",
                            destPort: "Destination Port",
                            linkType: "Link Type"
                        },
                        linkTypes: {
                            accessLan: "Access Endpoint Link (Straight-Through Cable)",
                            lacpMember: "EtherChannel LACP Member Link"
                        }
                    },
                    pitfalls: {
                        heading: "6. Common Pitfalls & Troubleshooting",
                        intro: "If Port-Channel fails to form or ports get suspended, check the following matching criteria:",
                        item1: "Speed & Duplex Mismatch: All ports in the bundle must have identical speed and duplex settings.",
                        item2: "VLAN Mismatch: All member interfaces must belong to the exact same VLAN or share trunk settings before aggregation.",
                        item3: "Incompatible Modes: LACP 'Passive to Passive' mode will not initiate bundle negotiation; at least one side must be 'Active'."
                    },
                    codeComments: {
                        sw1Title: "Switch SW1 EtherChannel & Access Port Configuration",
                        sw2Title: "Switch SW2 EtherChannel & Access Port Configuration",
                        accessPort: "Configure Access Interface for Host",
                        lacpGroup: "Group Interfaces into LACP (Active Mode)",
                        portChannelTrunk: "Configure Logical Port-Channel Interface as Trunk"
                    },
                    conclusion: {
                        heading: "7. Conclusion",
                        paragraph1: "EtherChannel (LACP) is essential in enterprise switching for eliminating bandwidth bottlenecks and preventing Spanning Tree Protocol (STP) port blocking on redundant links.",
                        paragraph2: "By logically grouping physical connections, network engineers achieve high-speed interconnection and instant resilience against single link failures."
                    }
                },
                aclLab: {
                    badge: "CCNA Practical Lab",
                    title: "Access Control Lists (Standard & Extended ACL) Configuration",
                    imageAlt: "Diagram of Standard and Extended ACL filtering traffic on a Cisco Router",
                    intro: "In this lab, we configure Standard (ACL 10) and Extended (ACL 101) Access Control Lists on a Cisco Router. We demonstrate traffic filtering based on source IP address as well as protocol-specific restrictions (blocking HTTP while allowing ICMP).",
                    meta: {
                        estimatedTime: "Estimated Time: 12 mins"
                    },
                    githubLink: "View Source Code on GitHub",
                    labels: {
                        routerTerminal: "CLI Commands for Router R1"
                    },
                    concepts: {
                        heading: "1. Fundamental ACL Concepts",
                        intro: "Key operational concepts regarding Cisco Access Control Lists:",
                        items: {
                            standardAcl: {
                                title: "Standard ACL (1-99)",
                                desc: "Filters traffic solely based on the Source IP address. Placed as close to the destination as possible."
                            },
                            extendedAcl: {
                                title: "Extended ACL (100-199)",
                                desc: "Filters traffic based on Source IP, Destination IP, Protocol (TCP/UDP/ICMP), and Port numbers. Placed close to the source."
                            },
                            implicitDeny: {
                                title: "Implicit Deny All",
                                desc: "Every ACL has an invisible 'deny ip any any' rule at the end. An explicit 'permit' statement is required for allowed traffic."
                            },
                            placementRule: {
                                title: "ACL Placement Strategy",
                                desc: "Proper interface and directional application (Inbound vs. Outbound) prevents unnecessary processing overhead on the router."
                            }
                        }
                    },
                    sections: {
                        addressing: {
                            heading: "2. IP Addressing & Subnet Layout",
                            intro: "The topology consists of three isolated subnets connected via Router R1:",
                            pcConfigNote: "Ensure static IP addresses, Subnet Masks, and Default Gateways are manually configured in the Desktop settings of each PC and Server.",
                            pc1Label: "PC1 (Sales):",
                            pc1Desc: "192.168.10.10 /24 | Gateway: 192.168.10.1 (LAN 1)",
                            pc2Label: "PC2 (HR):",
                            pc2Desc: "192.168.10.20 /24 | Gateway: 192.168.10.1 (LAN 1)",
                            serverLabel: "Server1 (Web/Ping):",
                            serverDesc: "172.16.1.100 /24 | Gateway: 172.16.1.1 (Server Zone)",
                            pc3Label: "PC3 (Remote User):",
                            pc3Desc: "10.0.0.10 /24 | Gateway: 10.0.0.1 (Outside Network)"
                        },
                        routerConfig: {
                            heading: "4. Router R1 Configuration",
                            intro: "Apply these Cisco CLI commands to configure router interfaces and enforce Standard and Extended ACL rules:"
                        },
                        verification: {
                            heading: "5. Verification & Testing Steps",
                            intro: "Verify traffic filtering rules from client devices and the router CLI:",
                            item1: "Ping from PC1 to Server1 (172.16.1.100): Successful (Allowed by Standard ACL).",
                            item2: "Ping from PC2 to Server1 (172.16.1.100): Fails / Destination Host Unreachable (Blocked by Standard ACL 10).",
                            item3: "Ping from PC3 to Server1 (172.16.1.100): Successful (ICMP permitted by Extended ACL 101).",
                            item4: "HTTP Web access from PC3 to Server1 (172.16.1.100): Fails / Connection Timed Out (Blocked on Port 80 by Extended ACL 101)."
                        }
                    },
                    connections: {
                        heading: "3. Physical Connections Table",
                        intro: "The physical cabling setup connecting PCs, Switches, and Router interfaces:",
                        headers: {
                            sourceDevice: "Source Device",
                            sourcePort: "Source Port",
                            destDevice: "Destination Device",
                            destPort: "Destination Port",
                            linkType: "Link Type"
                        },
                        linkTypes: {
                            lanAccess: "Internal LAN Link (Straight-Through Cable)",
                            routerGateway: "Subnet Gateway Link (Straight-Through Cable)",
                            serverAccess: "Server Farm Link (Straight-Through Cable)",
                            wanLink: "External / Remote Link"
                        }
                    },
                    pitfalls: {
                        heading: "6. Common Pitfalls & Troubleshooting",
                        intro: "Avoid these common mistakes when working with Cisco ACLs:",
                        item1: "Missing Explicit Permit: Forgetting 'permit ip any any' at the end will cause all traffic to be dropped due to Implicit Deny.",
                        item2: "Incorrect ACL Placement: Applying Standard ACLs too close to the source can prematurely block access to legitimate unintended destinations.",
                        item3: "Inbound vs. Outbound Direction: Applying an ACL in the wrong direction (In vs. Out) will cause traffic rules to be ignored completely."
                    },
                    codeComments: {
                        r1Title: "Router R1 Interface & ACL Configuration",
                        intLan1: "Configure LAN 1 Interface (Gi0/0)",
                        intServer: "Configure Server Zone Interface (Gi0/1)",
                        intRemote: "Configure Outside/Remote Interface (Gi0/2)",
                        standardAclDef: "Define Standard ACL 10 (Block PC2, Permit others)",
                        applyStandardAcl: "Apply Standard ACL 10 Outbound on Server Interface",
                        extendedAclDef: "Define Extended ACL 101 (Block HTTP port 80 from PC3 to Server1, Permit IP)",
                        applyExtendedAcl: "Apply Extended ACL 101 Inbound on Outside Interface"
                    },
                    conclusion: {
                        heading: "7. Conclusion",
                        paragraph1: "Access Control Lists are fundamental tools for network security, offering precise traffic regulation based on IPs, protocols, and ports.",
                        paragraph2: "Mastering the distinction between Standard and Extended ACL placement ensures effective security enforcement without causing accidental disruption to valid network traffic."
                    }
                },
                dhcpSecurityLab: {
                    badge: "CCNA Practical Lab",
                    title: "Layer 2 Security: Port Security & DHCP Snooping",
                    imageAlt: "Diagram of DHCP Snooping and Port Security configured on a Cisco switch",
                    intro: "In this lab, we configure DHCP Snooping and Port Security on a Cisco Switch to mitigate Layer 2 infrastructure attacks. We enforce Trusted Ports to suppress Rogue DHCP servers and apply Sticky MAC limits to prevent MAC Spoofing and Flooding.",
                    meta: {
                        estimatedTime: "Estimated Time: 15 mins"
                    },
                    githubLink: "View Source Code on GitHub",
                    labels: {
                        routerTerminal: "CLI Commands for Router R1",
                        switchTerminal: "CLI Commands for Switch SW1"
                    },
                    concepts: {
                        heading: "1. Key Layer 2 Defense Concepts",
                        intro: "Core mechanisms used to protect access layer ports on Cisco switches:",
                        items: {
                            dhcpSnooping: {
                                title: "DHCP Snooping",
                                desc: "Filters untrusted DHCP messages. Blocks unauthorized DHCP Offer and ACK packets coming from untrusted user ports."
                            },
                            portSecurity: {
                                title: "Port Security",
                                desc: "Restricts port access to authorized MAC addresses only. Prevents CAM table exhaustion attacks."
                            },
                            rogueDhcp: {
                                title: "Rogue DHCP Server",
                                desc: "An unauthorized DHCP server setup by an attacker to intercept traffic, assign bad gateways, or perform Man-in-the-Middle attacks."
                            },
                            stickyMac: {
                                title: "Sticky MAC Learning",
                                desc: "Dynamically learns connected MAC addresses and saves them automatically into the switch running configuration."
                            }
                        }
                    },
                    connections: {
                        heading: "2. Physical Connections & Security Roles",
                        intro: "Topological cabling connections and their applied security roles on Switch SW1:",
                        headers: {
                            sourceDevice: "Source Device",
                            sourcePort: "Source Port",
                            destDevice: "Destination Device",
                            destPort: "Destination Port",
                            securityRole: "Security Configuration Role"
                        },
                        roles: {
                            trustedAndPortSec: "Trusted Port (DHCP Snooping) + Port Security",
                            trustedOnly: "Trusted Port (DHCP Snooping Uplink)",
                            untrustedPortSec: "Untrusted Port + Port Security (Sticky MAC)"
                        }
                    },
                    dhcpServerSetup: {
                        heading: "3. Graphical DHCP Server Setup",
                        intro: "The dedicated DHCP server was configured using the graphical interface in Cisco Packet Tracer with the following parameters:",
                        step1Title: "1. IP Configuration (Desktop Tab):",
                        step2Title: "2. DHCP Service Settings (Services > DHCP):"
                    },
                    routerConfig: {
                        heading: "4. Router Gateway Configuration",
                        intro: "Basic IP interface configuration on Router R1 acting as Default Gateway for subnet 192.168.1.0/24:"
                    },
                    switchConfig: {
                        heading: "5. Switch Layer 2 Security Configuration",
                        intro: "Apply these Cisco CLI commands on SW1 to enable global DHCP Snooping and enforce Port Security:"
                    },
                    verification: {
                        heading: "6. Verification & Verification Commands",
                        intro: "Verify security bindings and violation states using the following CLI commands on SW1:",
                        item1: "Show DHCP Snooping Bindings: 'show ip dhcp snooping binding' - Displays IP-to-MAC mapping captured dynamically.",
                        item2: "Show Port Security Status: 'show port-security interface FastEthernet0/2' - Checks violation counts and learned MAC addresses.",
                        item3: "Show Port Security Summary: 'show port-security' - Provides an overview of secure ports across the switch."
                    },
                    codeComments: {
                        r1Title: "Router R1 Gateway Configuration",
                        intGateway: "Configure LAN Gateway interface connected to SW1 Fa0/24",
                        sw1Title: "Switch SW1 Security Configuration",
                        globalSnooping: "Global DHCP Snooping activation for VLAN 1",
                        trustServerPort: "Mark Server Port Fa0/1 as Trusted for DHCP Snooping",
                        trustRouterPort: "Mark Router Port Fa0/24 as Trusted for DHCP Snooping",
                        portSecurityConfig: "Configure Access Mode, Max MAC 1, Sticky MAC, and Violation Shutdown on user ports"
                    },
                    conclusion: {
                        heading: "7. Conclusion",
                        paragraph1: "Combining DHCP Snooping and Port Security creates a resilient defense baseline at Layer 2, effectively stopping rogue network devices and address spoofing.",
                        paragraph2: "Proper classification of Trusted vs. Untrusted interfaces ensures legitimate clients receive valid network parameters while rogue servers are instantly neutralized."
                    }
                },
                adGpoLab: {
                    badge: "MCSA Hands-on Lab",
                    title: "Deploying Active Directory Domain Services, GPO & FSRM",
                    intro: "In this scenario, Active Directory DS is implemented with a well-structured OU topology. Beyond enforcing GPO security policies (such as Password Policy and Restricted Admins), file share management, NTFS access permissions, quota management, and file screening using FSRM are fully implemented.",
                    meta: {
                        estimatedTime: "Estimated Time: 35 mins"
                    },
                    githubLink: "View scripts and source code on GitHub",
                    labels: {
                        psScript: "PowerShell Script: Automated OU & Group Creation",
                        cmdTerminal: "CLI Verification Commands",
                        step1OuTitle: "3.1 Creating Organizational Unit (OU) Structure",
                        step2GroupTitle: "3.2 Creating Global Security Groups",
                        step3UserTitle: "3.3 Creating Users & Assigning Group Membership",
                        psOuScript: "PowerShell Script: OU Provisioning",
                        psGroupScript: "PowerShell Script: Security Group Provisioning",
                        psUserScript: "PowerShell Script: User & Membership Provisioning",
                        psFsrmScript: "PowerShell Script: Folder Share, NTFS Permissions & FSRM Setup"
                    },
                    architecture: {
                        heading: "1. Network Topology & IP Addressing",
                        intro: "Lab environment servers and workstations setup for domain obk.local:",
                        headers: {
                            hostname: "Hostname",
                            role: "Domain Role",
                            os: "Operating System",
                            ip: "IP Address"
                        }
                    },
                    wizard: {
                        heading: "2. Step-by-Step Installation Wizard",
                        intro: "Detailed steps to promote a standalone Windows Server 2022 to Primary Domain Controller:",
                        phase1Title: "Phase 1: Add Roles and Features Wizard",
                        phase1Steps: {
                            step1: "Open Server Manager and click on Manage > Add Roles and Features.",
                            step2: "On the Before You Begin page, click Next.",
                            step3: "Select 'Role-based or feature-based installation' and click Next.",
                            step4: "Select DC1 server from the Server Pool and click Next.",
                            step5: "Check 'Active Directory Domain Services'. Click Add Features in the pop-up window.",
                            step6: "In the Features page, ensure 'Group Policy Management' is selected and click Next.",
                            step7: "Review the AD DS summary information and click Next.",
                            step8: "On the Confirmation page, click Install to begin role installation."
                        },
                        phase2Title: "Phase 2: Domain Controller Promotion Wizard (AD DS Setup)",
                        phase2Steps: {
                            step1: "Click the notifications flag icon at the top of Server Manager and select 'Promote this server to a domain controller'.",
                            step2: "Select 'Add a new forest' and enter obk.local as the Root domain name.",
                            step3: "Set Functional Level to Windows Server 2016. Keep DNS and Global Catalog checked, then enter the DSRM password.",
                            step4: "In DNS Options, ignore the delegation warning and click Next.",
                            step5: "Confirm the suggested NetBIOS name (OBK) and click Next.",
                            step6: "Leave default paths for Database, Log files, and SYSVOL intact, then click Next.",
                            step7: "After passing the Prerequisites Check, click Install. The server will restart upon completion."
                        }
                    },
                    ouStructure: {
                        heading: "3. Organizational Unit (OU) & Group Hierarchy",
                        intro: "Logical OU structure designed for GPO scoping and security group definition based on AGDLP standard:"
                    },
                    gpo: {
                        heading: "4. Group Policy Objects (GPO) Configuration",
                        intro: "Group policies implemented for domain-wide centralized security hardening and access restrictions.",
                        targetLabel: "Applied Target",
                        items: {
                            passwordPolicy: {
                                title: "Default Domain Policy (Password & Lockout)",
                                target: "Entire Domain (obk.local)",
                                desc: "Enforces password complexity (min 10 characters) and automatic account lockout after 3 failed attempts to mitigate Brute-Force attacks."
                            },
                            hardeningPolicy: {
                                title: "Security Hardening Policy",
                                target: "OU=Workstations",
                                desc: "Disables insecure legacy protocols (LM/NTLMv1), blocks execution of unknown binaries in Temp directories, and controls local privileges."
                            },
                            desktopPolicy: {
                                title: "User Environment Policy",
                                target: "OU=Departments",
                                desc: "Sets corporate wallpaper centrally, enforces interactive logon banner, and restricts access to Control Panel."
                            },
                            localAdminPolicy: {
                                title: "Restricted Local Admins Policy",
                                target: "OU=Workstations",
                                desc: "Removes standard domain users from local computer Administrators group to prevent unauthorized local system changes."
                            }
                        }
                    },
                    fsrmWizard: {
                        heading: "5. FSRM & NTFS Permissions Setup Wizard",
                        intro: "Configuring File Server management, network sharing, NTFS permission alignment, and disk quotas using FSRM:",
                        phase1Title: "Phase 1: Installing FSRM Role in Server Manager",
                        phase1Steps: {
                            step1: "Open Server Manager and navigate to Add Roles and Features.",
                            step2: "Under Server Roles, expand File and Storage Services > File and iSCSI Services, then check File Server Resource Manager.",
                            step3: "Click Add Features and complete the wizard installation.",
                            step4: "Confirm the installation completes successfully and review the FSRM console availability.",
                            step5: "Verify the role is installed and ready for quota and file screening configuration."
                        },
                        phase2Title: "Phase 2: Creating SMB Share & Configuring NTFS Permissions",
                        phase2Steps: {
                            step1: "Create HR_Data folder on the server drive and navigate to Properties > Sharing.",
                            step2: "Share the folder and set SMB share permission for GG_HR_Dept to Change.",
                            step3: "Go to Security tab (NTFS settings), disable inheritance, and grant Modify permission explicitly to GG_HR_Dept.",
                            step4: "Confirm the share is visible to the appropriate domain users and groups.",
                            step5: "Test access from a client machine to validate read and modify permissions."
                        },
                        phase3Title: "Phase 3: Configuring Quotas & File Screening in FSRM",
                        phase3Steps: {
                            step1: "Launch the File Server Resource Manager console.",
                            step2: "Under Quota Management, create a 2GB Hard Quota on the HR_Data folder path.",
                            step3: "Under File Screen Management, apply the Block Executable Files template to prevent malicious executable files from being saved.",
                            step4: "Review the generated quota and file screening policies for accuracy.",
                            step5: "Test the policy by attempting to save blocked file types and confirm the warning."
                        }
                    },
                    verification: {
                        heading: "6. Client Domain Join & Policy Testing",
                        intro: "Steps to join Client-01 (Windows 10) to the domain and verify policy enforcement:",
                        step1: "Set Preferred DNS address on the client to the Domain Controller IP (192.168.10.10).",
                        step2: "Open System Properties, change Member Of to Domain, enter obk.local, and log in with Domain Administrator.",
                        step3: "Log in with a standard non-IT user (user.hr) to verify restricted Control Panel access and active corporate wallpaper."
                    },
                    conclusion: {
                        heading: "7. Conclusion",
                        paragraph1: "Deploying Active Directory and GPO alongside File Server management with FSRM ensures centralized authentication, system hardening, and precise storage control across the network.",
                        paragraph2: "Leveraging the AGDLP access model combined with NTFS control and file screening significantly lowers unauthorized access risks and ransomware propagation."
                    }
                },
                dnsDhcpLab: {
                    header: {
                        badge: "MCSA Practical Lab",
                        title: "DHCP Failover & DNS Configuration Lab",
                        description: "Step-by-step setup of high-availability DHCP service (Failover) alongside AD DS integrated DNS zones in Windows Server 2022 environment."
                    },
                    architecture: {
                        heading: "Lab Network Architecture",
                        intro: "Overview of servers and network infrastructure roles defined in this environment:",
                        headers: {
                            hostname: "Hostname",
                            role: "Role",
                            os: "OS / Platform",
                            ip: "IP Address"
                        },
                        rows: {
                            dc1: {
                                role: "Domain Controller & Primary DNS Server",
                                os: "Windows Server 2022 Standard"
                            },
                            dhcp1: {
                                role: "Primary DHCP Server (Primary Node)",
                                os: "Windows Server 2022 Standard"
                            },
                            dhcp2: {
                                role: "Secondary DHCP Server (Failover Partner)",
                                os: "Windows Server 2022 Standard"
                            },
                            printer: {
                                role: "HR Printer (Static IP Reservation Test)",
                                os: "Network Appliance"
                            }
                        },
                        note: "DHCP Failover mode is configured as Load Balance (50/50). DNS zones are integrated with Active Directory (AD-Integrated) for automatic replication across Domain Controllers."
                    },
                    tabs: {
                        all: "All Steps",
                        gui: "GUI Steps",
                        ps: "PowerShell Commands"
                    },
                    steps: {
                        heading: "Lab Execution Steps",
                        intro: "You can follow the configuration steps either via Graphical User Interface (GUI) or using PowerShell commands.",
                        dhcpSetup: {
                            title: "Create & Configure Main DHCP Scope",
                            desc: "Define IP pool range for internal network clients and set scope options including Gateway and DNS Server addresses.",
                            guiTitle: "GUI Steps",
                            guiSteps: [
                                "Open DHCP Console from Administrative Tools.",
                                "Right-click on IPv4 and select New Scope.",
                                "Name the scope LAN_Clients_Scope.",
                                "Set the IP address range from 192.168.10.100 to 192.168.10.200 with Subnet Mask 255.255.255.0.",
                                "Under Scope Options, set Router (192.168.10.1) and DNS Server (192.168.10.10).",
                                "Activate the scope."
                            ],
                            psTitle: "PowerShell Commands",
                            psComments: {
                                step1: "1. Install DHCP Server role along with management tools",
                                step2: "2. Authorize DHCP server in Active Directory",
                                step3: "3. Create a new DHCP scope for internal network clients",
                                step4: "4. Configure scope options (Gateway, DNS Server, Domain Name)"
                            }
                        },
                        failoverReservation: {
                            title: "Configure IP Reservation & DHCP Failover",
                            desc: "Reserve static IP for specific network appliances (e.g., printers) and set up high availability failover between two DHCP servers.",
                            guiTitle: "GUI Steps",
                            guiSteps: [
                                "In the DHCP Console, navigate to Reservations and select New Reservation.",
                                "Enter name, IP address (192.168.10.50), and MAC address for the HR Printer.",
                                "Right-click on the scope and select Configure Failover.",
                                "Select DHCP2 server (dhcp2.obk.local) as the Partner Server.",
                                "Set mode to Load Balance (50/50) and define a Shared Secret."
                            ],
                            psTitle: "PowerShell Commands",
                            psComments: {
                                step1: "1. Create a static IP reservation for HR Department printer",
                                step2: "2. Configure DHCP Failover between two servers (Load Balance 50/50 mode)"
                            }
                        },
                        dnsSetup: {
                            title: "Configure DNS Zones & Resource Records",
                            desc: "Create Reverse Lookup Zone, add A and CNAME records, and configure external DNS Forwarders.",
                            guiTitle: "GUI Steps",
                            guiSteps: [
                                "Open DNS Manager and right-click on Reverse Lookup Zones.",
                                "Create a New Primary AD-Integrated Zone for network ID 192.168.10.0/24.",
                                "In obk.local Forward Lookup Zone, add a new A Record for app-server and check 'Create associated PTR record'.",
                                "Create a CNAME record named erp alias pointing to app-server.obk.local.",
                                "In DNS Server Properties, open Forwarders tab and add public DNS servers 1.1.1.1 and 8.8.8.8."
                            ],
                            psTitle: "PowerShell Commands",
                            psComments: {
                                step1: "1. Create Reverse Lookup Zone for 192.168.10.x subnet",
                                step2: "2. Add A Record and automatically generate corresponding PTR record",
                                step3: "3. Add CNAME Alias record",
                                step4: "4. Configure public DNS Forwarders to resolve external requests"
                            }
                        },
                    },
                    conclusion: {
                        heading: "Conclusion & Key Takeaways",
                        desc: "In this lab, the core network infrastructure was successfully implemented and deployed. Key achievements include:",
                        points: [
                            "Achieved High Availability for DHCP services using a 50/50 Load Balancing failover setup across two distinct servers.",
                            "Implemented standardized static IP reservation for specialized network devices like network printers.",
                            "Configured robust forward/reverse DNS resolution alongside external public forwarders for Internet queries."
                        ]
                    }
                },
                sqlLab: {
                    badge: "SQL Practical Lab",
                    title: "Microsoft SQL Server & T-SQL Database",
                    intro: "In this scenario, we cover the comprehensive structure of SQL Server database, installation steps, core concepts, practical T-SQL operations, and GUI management via SSMS.",
                    meta: {
                        estimatedTime: "Estimated Time: 45 Mins"
                    },
                    concepts: {
                        heading: "1. Fundamental Concepts & Terminology",
                        intro: "Understanding key definitions, acronyms, and basic structures in SQL Server:",
                        acronyms: {
                            sql: {
                                full: "Structured Query Language",
                                desc: "The international standard language for managing, querying, and interacting with relational databases. It allows you to create tables, insert, update, or delete data. Almost all major RDBMS platforms support standard SQL."
                            },
                            tsql: {
                                full: "Transact-SQL",
                                desc: "Microsoft's proprietary extension for SQL that provides advanced capabilities. T-SQL adds programming constructs like variables, conditions (IF), loops (WHILE), and error handling. All SQL Server scripts and stored procedures are written in T-SQL."
                            },
                            ssms: {
                                full: "SQL Server Management Studio",
                                desc: "Microsoft's official graphical user interface (GUI) software for configuring, managing, and administering SQL Server instances. SSMS allows database administration without complex code and includes a Query Editor to run T-SQL scripts."
                            }
                        },
                        cards: {
                            rdbms: {
                                title: "RDBMS & Instance",
                                desc: "Relational Database Management System storing data in tables. Each isolated SQL Server service running on a host is called an Instance."
                            },
                            auth: {
                                title: "Authentication Modes",
                                desc: "Supports Windows Authentication (integrated with Active Directory) and Mixed Mode (combining Windows and SQL Server logins)."
                            },
                            systemDbs: {
                                title: "System Databases",
                                desc: "Default system databases including master, msdb, model, and tempdb that maintain critical server functions and configurations."
                            },
                            dataTypes: {
                                title: "Data Types",
                                desc: "Common data types such as INT for numbers, NVARCHAR for Unicode text, DECIMAL for financial values, and DATETIME for timestamps."
                            },
                            constraints: {
                                title: "Constraints & Keys",
                                desc: "Primary Key guarantees row uniqueness, while Foreign Key maintains relationships and referential integrity between tables."
                            },
                            indexes: {
                                title: "Indexes",
                                desc: "Specialized data structures that significantly accelerate search and query performance (including Clustered and Non-Clustered indexes)."
                            }
                        }
                    },
                    wizard: {
                        heading: "2. SQL Server Installation Wizard",
                        intro: "Step-by-step guide to installing SQL Server instance with recommended lab settings:",
                        steps: {
                            step1: {
                                title: "Start Installation Setup",
                                desc: "Run setup.exe and select New SQL Server stand-alone installation from the Installation tab."
                            },
                            step2: {
                                title: "Select Edition",
                                desc: "Choose the free Developer or Evaluation edition for test and lab environments."
                            },
                            step3: {
                                title: "Feature Selection",
                                desc: "Select Database Engine Services which forms the core data storage and processing engine."
                            },
                            step4: {
                                title: "Instance Configuration",
                                desc: "Choose Default Instance or specify a custom Named Instance for your server."
                            },
                            step5: {
                                title: "Server Configuration & Auth",
                                desc: "Select Mixed Mode, set the System Administrator (sa) password, and add the current Windows user."
                            },
                            step6: {
                                title: "Complete Installation",
                                desc: "Finish setup and verify that the MSSQLSERVER service is running in Windows Services."
                            }
                        }
                    },
                    practical: {
                        heading: "3. Database & Table Operations",
                        intro: "In this section, we explore both SSMS Graphical Management and T-SQL Scripting approaches:",
                        ssmsTitle: "Graphical Management Approach (SSMS Wizard)",
                        ssmsSteps: {
                            step1: "Connect to SQL Server via SSMS, right-click the Databases folder, and select New Database.",
                            step2: "Enter Database Name and configure initial settings for data (.mdf) and log (.ldf) files.",
                            step3: "Expand created DB, right-click Tables, and select New ➔ Table.",
                            step4: "Define columns, set Data Types, mark Primary Key, and save the table schema."
                        },
                        tsqlTitle: "T-SQL Scripting Method",
                        tsqlDesc: "For development, automation, and deployment scripts, standard T-SQL is the fastest and most reliable approach:"
                    },
                    backup: {
                        heading: "4. Backup & Restore Operations",
                        intro: "Graphical and script-based options for database backup and recovery:",
                        gui: {
                            backupTitle: "Graphical Backup Wizard",
                            backupSteps: {
                                step1: "Right-click the database in SSMS and select Tasks ➔ Back Up.",
                                step2: "In the open wizard, select Backup Type (Full or Differential).",
                                step3: "Under Destination, set the target file path with .bak extension.",
                                step4: "Optionally enable backup compression in Media Options tab.",
                                step5: "Click OK to execute backup operation until completion message appears."
                            },
                            restoreTitle: "Graphical Restore Wizard",
                            restoreSteps: {
                                step1: "Right-click Databases folder and select Tasks ➔ Restore ➔ Database.",
                                step2: "Select Device option and locate your source .bak file.",
                                step3: "Specify Target Database name.",
                                step4: "Under Options, check 'Overwrite the existing database (WITH REPLACE)' if replacing existing DB.",
                                step5: "Click OK to start database restore."
                            }
                        }
                    },
                    importExport: {
                        heading: "5. Import & Export Operations",
                        intro: "Transferring data between SQL Server and external sources like Excel or CSV files:",
                        gui: {
                            importTitle: "Import Data Wizard",
                            importSteps: {
                                step1: "Right-click the target database and choose Tasks ➔ Import Data.",
                                step2: "Select Data Source (e.g., Microsoft Excel or Flat File CSV).",
                                step3: "Set Destination to SQL Server Native Client or OLE DB Provider.",
                                step4: "Choose 'Copy data from one or more tables or views'.",
                                step5: "Review Column Mappings and click Finish to execute import."
                            },
                            exportTitle: "Export Data Wizard",
                            exportSteps: {
                                step1: "Right-click database and select Tasks ➔ Export Data.",
                                step2: "Confirm current database as Data Source.",
                                step3: "Select Destination format (e.g., creating a new Excel or CSV file).",
                                step4: "Select tables or specify queries to export.",
                                step5: "Review summary wizard and complete export job."
                            }
                        }
                    },
                    conclusion: {
                        heading: "6. Conclusion",
                        paragraph1: "Mastering SQL Server involves leveraging both SSMS graphical management for administration tasks and T-SQL scripting for application development and automation."
                    }
                },
            },
        },
        // notFound page en language
        notFound: {
            badge: "Error Code",
            title: "404",
            subtitle: "Page Not Found",
            description: "The page you are looking for does not exist or has been moved.",
            backHome: "Back to Home"
        },
    },
    // fa language
    fa: {
        appName: 'نمونه‌کارهای obk',
        nav: {
            home: 'خانه',
            articles: 'مقالات',
            projects: 'پروژه‌ها',
            functionalSites: 'ابزارها',
            financialCalculator: 'ماشین‌حساب مالی',
            weather: 'آب و هوا',
            todoList: 'تودو لیست',
            calculator: 'ماشین‌حساب',
            unitConversion: 'تبدیل واحد',
            bmiCalculator: 'ماشین‌حساب BMI',
            timeAndDate: 'زمان و تاریخ',
            calendar: 'تقویم',
            modals: 'مودال‌ها',
            openMenu: "باز کردن منو",
            closeMenu: "بستن منو"
        },
        projects: {
            frontEnd: 'فرانت‌اند',
            networking: 'شبکه',

            vlanLab: 'آزمایش VLAN',
            vlanLabDescription: 'یک آزمایش عملی برای طراحی و سوئیچینگ VLAN.',
        },
        qrBarcodeGenerator: {
            title: 'صفحه‌ی تستی سازنده QR و بارکد',
        },
        projectsPage: {
            title: 'پروژه‌ها',
            description: 'در این بخش می‌توانید نمونه‌هایی از کارهای فرانت‌اند، آزمایشگاه‌های شبکه و ابزارهای زیرساختی من را مشاهده کنید.',
            backToProjects: 'بازگشت به پروژه‌ها',
            frontEnd: {
                title: 'پروژه‌های Front-End',
                description: 'مجموعه‌ای از برنامه‌های فرانت‌اند من که با Vue.js، Tailwind CSS و JavaScript ساخته شده‌اند.',
                button: 'مشاهده پروژه‌ها',
                items: {
                    weather: {
                        title: 'آب‌وهوا',
                        description: 'اپلیکیشن آب و هوا با جستجو و اطلاعات پیش‌بینی دقیق.',
                        link: 'باز کردن آب‌وهوا',
                    },
                    calendar: {
                        title: 'تقویم',
                        description: 'تقویم تعاملی با تاریخ‌های محلی و جزئیات تعطیلات.',
                        link: 'باز کردن تقویم',
                    },
                    todo: {
                        title: 'تودو لیست',
                        description: 'مدیر وظایف ساده و کاربردی برای برنامه‌ریزی روزانه.',
                        link: 'باز کردن تودو لیست',
                    },
                    unitConversion: {
                        title: 'تبدیل واحد',
                        description: 'ابزارهای تبدیل اندازه‌گیری و ارز در یکجا.',
                        link: 'باز کردن تبدیل واحد',
                    },
                    bmiCalculator: {
                        title: 'ماشین‌حساب BMI',
                        description: 'ماشین‌حساب سریع شاخص توده بدنی برای پیگیری سلامت روزانه.',
                        link: 'باز کردن BMI',
                    },
                    calculator: {
                        title: 'ماشین‌حساب',
                        description: 'ماشین‌حساب ساده با عملیات حسابی پایه.',
                        link: 'باز کردن ماشین‌حساب',
                    },
                    financialCalculator: {
                        title: 'ماشین‌حساب مالی',
                        description: 'ابزارهایی برای محاسبه سود، اقساط و امور مالی.',
                        link: 'باز کردن ماشین‌حساب مالی',
                    },
                    modals: {
                        title: 'مودال‌ها',
                        description: 'تعامل‌های قابل استفاده مجدد برای تجربه کاربری غنی‌تر.',
                        link: 'باز کردن مودال‌ها',
                    },
                    timeAndDate: {
                        title: 'ساعت، کرنومتر و تایمر',
                        description: 'ساعت دیجیتال و عقربه‌ای زنده، به‌همراه کرنومتر و تایمر شمارش معکوس — همه در یک صفحه',
                        link: 'باز کردن ساعت، کرنومتر و تایمر',
                    },
                    qrBarcodeGenerator: {
                        title: 'سازنده QR و بارکد',
                        description: 'ابزاری سبک برای ساخت QR کد و بارکد.',
                        link: 'باز کردن سازنده QR و بارکد',
                    },
                },
            },
            networking: {
                title: 'پروژه‌های شبکه',
                description: 'مجموعه‌ای از آزمایشگاه‌ها و سناریوهای شبکه من شامل Cisco، Windows Server، SQL Server و سایر پروژه‌های زیرساختی.',
                button: 'مشاهده پروژه‌ها',
                items: {
                    VLAN: {
                        title: 'آزمایشگاه VLAN',
                        description: 'آزمایشگاه پیکربندی و مسیریابی با تمرکز بر رفتار VLAN و Router-on-a-Stick.',
                        link: 'باز کردن آزمایشگاه VLAN',
                    },
                    OSPF: {
                        title: 'آزمایشگاه OSPF ',
                        description: 'پیکربندی سناریوی ارتباط چند شبکه داخلی (LAN) با پروتکل OSPFv2',
                        link: 'باز کردن آزمایشگاه OSPF',
                    },
                    eigrpLabCard: {
                        title: "مسیریابی پویا با EIGRP",
                        description: "پیکربندی مسیریابی پویا با EIGRP برای ارتباط چند شبکه داخلی.",
                        link: 'باز کردن آزمایشگاه EIGRP',
                    },
                    etherchannelLabCard: {
                        title: "تجمیع لینک با EtherChannel (LACP)",
                        description: "پیکربندی EtherChannel (LACP) برای افزایش پهنای باند و ایجاد لینک‌های جایگزین بین سوئیچ‌های سیسکو.",
                        link: 'باز کردن آزمایشگاه EtherChannel (LACP)',
                    },
                    AclLab: {
                        title: "کنترل دسترسی با ACL",
                        description: "فیلتر کردن ترافیک و اعمال سیاست‌های امنیتی شبکه با ACL استاندارد و گسترده در روترهای سیسکو.",
                        link: 'باز کردن آزمایشگاه ACL',
                    },
                    dhcpSecurityLabCard: {
                        title: "امنیت لایه ۲ (Port Security & DHCP Snooping)",
                        description: "پیاده‌سازی Port Security و DHCP Snooping برای جلوگیری از حملات MAC Spoofing، Flooding و Rogue DHCP.",
                        link: 'باز کردن آزمایشگاه Port Security-DHCP Snooping',
                    },
                    ActiveDirectoryGpoLab: {
                        title: "اکتیو دایرکتوری، GPO و FSRM",
                        description: "راه‌اندازی دامین obk.local، طراحی ساختار OU، پیاده‌سازی GPO و مدیریت فایل‌سرور با FSRM و مجوزهای NTFS.",
                        link: "باز کردن آزمایشگاه اکتیو دایرکتوری، GPO و FSRM"
                    },
                    dnsDhcpLab: {
                        title: "سناریوی کاربردی DHCP Failover و DNS",
                        description: "پیکربندی ساختار پایداری high availability برای سرویس DHCP و زون‌های یکپارچه AD DS در ویندوز سرور 2022.",
                        link: "مشاهده سناریو DHCP Failover و DNS"
                    },
                    SqlServerLab: {
                        title: "سناریوی عملیاتی SQL Server و T-SQL",
                        description: "پیاده‌سازی SQL Server، پیکربندی SSMS، اسکریپت‌نویسی T-SQL، مدیریت پایگاه داده و عملیات Backup/Restore.",
                        link: "مشاهده سناریو SQL Server و T-SQL"
                    },
                },
            },
            itInfrastructureTools: {
                title: 'ابزارهای زیرساخت IT',
                description: 'مجموعه ابزارها و محاسبات کاربردی برای تسهیل و شتاب‌بخشی به فرآیندهای طراحی، تخمین و مدیریت زیرساخت‌های IT.',
                items: {
                    subnetCalculator: {
                        title: 'ماشین‌حساب IP Subnet',
                        description: 'محاسبه سریع ساب‌نت، مقدارها و بازه‌های میزبان.',
                        link: 'مشاهده ابزار',
                    },
                    cctvStorageCalculator: {
                        title: 'ماشین‌حساب ذخیره‌سازی CCTV',
                        description: 'برآورد حجم نگهداری برای سیستم‌های ضبط دوربین مداربسته.',
                        link: 'مشاهده ابزار',
                    },
                    raidCalculator: {
                        title: 'ماشین‌حساب RAID',
                        description: 'مقایسه چیدمان‌های RAID و ظرفیت قابل استفاده.',
                        link: 'مشاهده ابزار',
                    },
                    vmResourceAllocator: {
                        title: 'تخصیص‌دهنده منابع VM',
                        description: 'برنامه‌ریزی CPU، RAM و فضای ذخیره‌سازی برای ماشین‌های مجازی.',
                        link: 'مشاهده ابزار',
                    },
                    dataUnitConverter: {
                        title: 'تبدیل‌کننده واحد داده',
                        description: 'تبدیل بین واحدهای رایج فضای ذخیره‌سازی.',
                        link: 'مشاهده ابزار',
                    },
                },
            },
        },
        // itInfrastructureTools page fa language
        itInfrastructureTools: {
            pages: {
                ipSubnetCalculator: {
                    title: "محاسبه‌گر ساب‌نت IP",
                    description: "آدرس IP و پیشوند شبکه رو وارد کن تا جزئیات کامل ساب‌نت رو ببینی.",
                    calc: {
                        inputTitle: "ورودی‌ها",
                        ipLabel: "آدرس IP",
                        invalidIp: "آدرس IP وارد شده معتبر نیست.",
                        prefixLabel: "طول پیشوند (Prefix)",
                        presets: "پیش‌تنظیم‌های سریع",
                        resultsTitle: "نتایج",
                        emptyState: "برای مشاهده نتایج، یک آدرس IP معتبر وارد کنید.",
                        showBinary: "نمایش حالت دودویی",
                        hideBinary: "مخفی کردن حالت دودویی",
                        network: "آدرس شبکه",
                        broadcast: "آدرس Broadcast",
                        subnetMask: "ماسک ساب‌نت",
                        wildcardMask: "ماسک Wildcard",
                        hostRange: "بازه آدرس‌های میزبان",
                        totalAddresses: "تعداد کل آدرس‌ها",
                        usableHosts: "تعداد میزبان‌های قابل استفاده",
                        ipClass: "کلاس آدرس",
                        addressType: "نوع آدرس",
                        calculateButton: "محاسبه ",
                        resetButton: "بازنشانی",
                        types: {
                            private: "خصوصی",
                            public: "عمومی",
                            loopback: "Loopback",
                            linkLocal: "Link-Local",
                            multicast: "Multicast",
                            reserved: "رزرو شده"
                        }
                    }
                },
                cctvStorageCalculator: {
                    title: "ماشین‌حساب ذخیره‌سازی CCTV",
                    description: "با وارد کردن مشخصات دوربین‌ها و مدت نگهداری، فضای ذخیره‌سازی روزانه و کل موردنیاز را به‌سرعت محاسبه کنید.",
                    calculator: {
                        form: {
                            camerasCount: "تعداد دوربین‌ها",
                            resolution: "رزولوشن دوربین",
                            fps: "فریم ریت (FPS)",
                            codec: "کدک ویدیو",
                            quality: "کیفیت تصویر",
                            recordHours: "ساعت ضبط در روز",
                            retentionDays: "مدت نگهداری (روز)",
                            motionDetection: "ضبط بر اساس تشخیص حرکت",
                            motionPercent: "درصد زمان فعالیت (حرکت)",
                            resetButton: "بازنشانی مقادیر",
                            calculateButton: "محاسبه",
                            validationHint: "لطفاً همه‌ی فیلدها را پر کنید."
                        },
                        options: {
                            resolution: {
                                r720p: "720p (1MP)",
                                r1080p: "1080p (2MP)",
                                r3mp: "3MP",
                                r4mp: "4MP",
                                r5mp: "5MP",
                                r4k: "4K (8MP)"
                            },
                            codec: {
                                h264: "H.264",
                                h265: "H.265",
                                h265plus: "H.265+"
                            },
                            quality: {
                                low: "کم",
                                medium: "متوسط",
                                high: "زیاد"
                            }
                        },
                        result: {
                            dailyTitle: "حجم مورد نیاز روزانه",
                            totalTitle: "حجم کل مورد نیاز",
                            hddSuggestionSingle: "پیشنهاد می‌شود از یک هارد {size} ترابایتی استفاده کنید.",
                            hddSuggestionMulti: "پیشنهاد می‌شود از {count} عدد هارد {size} ترابایتی استفاده کنید."
                        },
                        units: {
                            gb: "گیگابایت",
                            tb: "ترابایت"
                        },
                    },
                    relatedArticle: {
                        label: 'می‌خواهید معماری پشت این ماشین‌حساب را بهتر بشناسید؟',
                        description: 'مقاله جامع دوربین‌های IP، NVR، DVR و پروتکل‌های انتقال تصویر را مطالعه کنید.',
                        button: 'مطالعه مقاله',
                    },
                },
                raidCalculator: {
                    title: "ماشین‌حساب RAID",
                    description: "ظرفیت قابل استفاده، بازده ذخیره‌سازی و میزان تحمل خطا را برای پیکربندی‌های رایج RAID محاسبه کنید.",
                    form: {
                        raidLevelLabel: "سطح RAID",
                        diskCountLabel: "تعداد دیسک‌ها",
                        diskCapacityLabel: "ظرفیت هر دیسک",
                        minDisksBadge: "حداقل {min} دیسک",
                        increase: "افزایش تعداد دیسک",
                        decrease: "کاهش تعداد دیسک",
                        reset: "بازگشت به حالت پیش‌فرض",
                        calculate: "محاسبه",
                    },
                    levels: {
                        raid0: {
                            label: "RAID 0",
                            description: "استریپینگ روی همه دیسک‌ها. بیشترین ظرفیت و سرعت، اما بدون افزونگی — خرابی هر دیسک یعنی از دست رفتن کل داده‌ها."
                        },
                        raid1: {
                            label: "RAID 1",
                            description: "آینه‌سازی (Mirroring). افزونگی کامل، اما ظرفیت قابل استفاده صرف‌نظر از تعداد دیسک‌ها برابر ظرفیت یک دیسک است."
                        },
                        raid5: {
                            label: "RAID 5",
                            description: "استریپینگ همراه با یک پریتی توزیع‌شده. تحمل یک خرابی دیسک. حداقل به ۳ دیسک نیاز دارد."
                        },
                        raid6: {
                            label: "RAID 6",
                            description: "استریپینگ همراه با دو پریتی توزیع‌شده. تحمل دو خرابی دیسک همزمان. حداقل به ۴ دیسک نیاز دارد."
                        },
                        raid10: {
                            label: "RAID 10",
                            description: "ترکیب استریپینگ و آینه‌سازی. کارایی و افزونگی بالا، اما نیاز به تعداد زوج دیسک دارد (حداقل ۴ دیسک)."
                        }
                    },
                    results: {
                        usableCapacity: "ظرفیت قابل استفاده",
                        totalRaw: "ظرفیت خام کل",
                        efficiency: "بازده",
                        faultTolerance: "تحمل خطا",
                        disksUnit: "دیسک",
                        raid10Note: "تحمل خطا با فرض حداکثر یک خرابی در هر جفت آینه‌ای محاسبه شده؛ خرابی دوم در همان جفت باعث از دست رفتن داده می‌شود.",
                        raid1Note: "با بیش از ۲ دیسک، RAID 1 همان داده را روی همه دیسک‌ها آینه می‌کند — ظرفیت قابل استفاده همچنان برابر یک دیسک باقی می‌ماند.",
                        copySummary: "کپی خلاصه نتایج",
                        copied: "کپی شد!"
                    },
                    validation: {
                        minDisksError: "{level} حداقل به {min} دیسک نیاز دارد.",
                        evenDisksError: "{level} به تعداد زوجی از دیسک‌ها نیاز دارد."
                    }
                },
                vmResourceAllocator: {
                    title: "ماشین‌حساب تخصیص منابع ماشین مجازی",
                    description: "با وارد کردن منابع سخت‌افزاری هاست (CPU، RAM، فضای ذخیره‌سازی) و نیاز هر ماشین مجازی، حداکثر تعداد VM قابل ساخت و میزان مصرف هر منبع را محاسبه کنید.",
                    calculator: {
                        form: {
                            hostSectionLabel: "منابع کل هاست",
                            totalCores: "تعداد هسته پردازنده (CPU Cores)",
                            totalRamGb: "حافظه رم (گیگابایت)",
                            totalStorageGb: "فضای ذخیره‌سازی (گیگابایت)",
                            reservedPercent: "درصد رزرو برای هایپروایزر",
                            vmSectionLabel: "نیاز هر ماشین مجازی",
                            vcpuPerVm: "تعداد vCPU هر VM",
                            ramPerVmGb: "رم هر VM (گیگابایت)",
                            storagePerVmGb: "فضای هر VM (گیگابایت)",
                            cpuOvercommitRatio: "نسبت Overcommit پردازنده",
                            ramOvercommitRatio: "نسبت Overcommit حافظه",
                            calculateButton: "محاسبه",
                            resetButton: "بازنشانی مقادیر"
                        },
                        options: {
                            cpuOvercommit: {
                                r1: "1:1",
                                r2: "2:1",
                                r3: "3:1",
                                r4: "4:1"
                            },
                            ramOvercommit: {
                                r1: "1:1 (توصیه‌شده)",
                                r125: "1.25:1",
                                r15: "1.5:1"
                            }
                        },
                        result: {
                            maxVmsTitle: "حداکثر تعداد ماشین مجازی",
                            bottleneck: {
                                cpu: "محدودکننده اصلی: پردازنده (CPU)",
                                ram: "محدودکننده اصلی: حافظه (RAM)",
                                storage: "محدودکننده اصلی: فضای ذخیره‌سازی"
                            },
                            cpuUtilization: "میزان مصرف CPU",
                            ramUtilization: "میزان مصرف RAM",
                            storageUtilization: "میزان مصرف فضای ذخیره‌سازی",
                            emptyStateHint: "برای مشاهده نتیجه، مقادیر را وارد کرده و دکمه محاسبه را بزنید."
                        },
                        units: {
                            vms: "دستگاه مجازی"
                        }
                    },
                },
                dataUnitConverter: {
                    title: "مبدل واحدهای داده",
                    description: "مقادیر داده را بین بیت، بایت، کیلوبایت، مگابایت، گیگابایت، ترابایت و پتابایت با پشتیبانی از هر دو مبنای دهدهی (۱۰۰۰) و دودویی (۱۰۲۴) تبدیل کنید.",
                    calculator: {
                        form: {
                            value: "مقدار",
                            base: "مبنای محاسبه",
                            fromUnit: "از واحد",
                            toUnit: "به واحد",
                            swapUnitsLabel: "جابه‌جایی واحدها",
                            calculateButton: "محاسبه",
                            resetButton: "بازنشانی",
                            validationHint: "لطفاً یک مقدار معتبر (صفر یا بیشتر) وارد کنید."
                        },
                        options: {
                            base: {
                                decimal: "دهدهی (۱۰۰۰) — KB, MB, GB...",
                                binary: "دودویی (۱۰۲۴) — KiB, MiB, GiB..."
                            },
                            unit: {
                                bit: "بیت (bit)",
                                byte: "بایت (Byte)",
                                decimal: {
                                    kb: "کیلوبایت (KB)",
                                    mb: "مگابایت (MB)",
                                    gb: "گیگابایت (GB)",
                                    tb: "ترابایت (TB)",
                                    pb: "پتابایت (PB)"
                                },
                                binary: {
                                    kib: "کیلوبایت دودویی (KiB)",
                                    mib: "مگابایت دودویی (MiB)",
                                    gib: "گیگابایت دودویی (GiB)",
                                    tib: "ترابایت دودویی (TiB)",
                                    pib: "پتابایت دودویی (PiB)"
                                }
                            },
                        },
                        result: {
                            title: "نتیجه تبدیل",
                            disclaimer: "توجه: مبنای دهدهی بر پایه ۱۰۰۰ و مبنای دودویی بر پایه ۱۰۲۴ محاسبه می‌شود؛ با تغییر مبنا نتیجه متفاوت خواهد بود."
                        }
                    }
                },
            },
        },
        subnetCalculator: {
            ipv4Classes: {
                title: "کلاس‌های آدرس IPv4",
                class: "کلاس",
                firstOctet: "بازه اکتت اول",
                defaultMask: "ماسک پیش‌فرض",
                cidr: "CIDR",
                usableHosts: "تعداد میزبان‌های قابل استفاده",
                classDETitle: "نکته",
                classDEInfo: "کلاس D برای Multicast و کلاس E برای اهداف رزرو‌ شده و آزمایشی استفاده می‌شوند؛ بنابراین برای تخصیص معمول آدرس IP به میزبان‌ها (Host) کاربرد ندارند."
            },
        },
        // calendar page fa language
        calendar: {
            title: 'تقویم',
            holidays: 'تعطیلات',
            noHolidays: 'در این ماه تعطیلی وجود ندارد.',
            previousMonth: 'رفتن به ماه قبل',
            nextMonth: 'رفتن به ماه بعد',
            currentMonth: 'بازگشت به ماه جاری',
            nowruz: {
                title: "لحظه تحویل سال",
                jalali: "شمسی",
                gregorian: "میلادی"
            },
            holidayNames: {
                newYear: 'سال نو',
                christmas: 'کریسمس',
                thanksgiving: 'روز شکرگزاری',
                halloween: 'هالووین',
                independence: 'روز استقلال',
                laborDay: 'روز کارگر',
                memorial: 'روز یادبود',
                veterans: 'روزVeterans',
                juneteenth: 'Juneteenth',
                goodFriday: 'جمعه نیک',
                easterMonday: 'دوشنبه عید پاک',
                blackFriday: 'جمعه سیاه',
                newYearEve: 'شب سال نو',
                columbus: 'روز کلمبوس',
                patriotsDay: 'روزپاتریوت‌ها',
                martinLutherKing: 'روز مارتین لوتر کینگ',
                presidentsDay: 'روز رؤسای جمهور',
            },
            holidayReasons: {
                newYear: 'جشن آغاز سال نو.',
                christmas: 'جشن تولد عیسی مسیح.',
                thanksgiving: 'روزی برای سپاسگزاری از حاصل و برکات سال.',
                halloween: 'جشن شب هالووین.',
                independence: 'جشن پذیرش اعلامیه استقلال.',
                laborDay: 'جشن دستاوردهای کارگران.',
                memorial: 'بزرگداشت مردان و زنان کشته‌شده در خدمت نظامی.',
                veterans: 'بزرگداشت جانبازان و سربازان سابق.',
                juneteenth: 'بزرگداشت پایان بردگی در آمریکا.',
                goodFriday: 'یادبود آزار و شکنجه عیسی مسیح.',
                easterMonday: 'جشن رستاخیز عیسی مسیح.',
                blackFriday: 'روز بعد از شکرگزاری، معروف به فروش ویژه.',
                newYearEve: 'جشن آخرین روز سال.',
                columbus: 'یادبود رسیدن کریستف کلمبوس به قاره آمریکا.',
                patriotsDay: 'یادبود نبردهای لکسینگتون و کنکورد.',
                martinLutherKing: 'یادبود تولد رهبر حقوق مدنی.',
                presidentsDay: 'بزرگداشت همه رؤسای جمهور آمریکا.',
                default: 'تعطیلات رسمی',
            },
        },
        footer: {
            quickAccess: 'دسترسی سریع',
            functionalSites: 'ابزارها',
            tagline: "نمونه‌کارهای شخصی شامل پروژه‌های شبکه، برنامه‌های فرانت‌اند، مقالات تخصصی و ابزارهای زیرساخت IT، توسعه‌یافته با Vue.js و Tailwind CSS و میزبانی‌شده روی Vercel.",
            copyright: '© 2026  نمونه کار های  obk. تمامی حقوق محفوظ است.',
        },
        // bmiCalculator page fa language
        bmiCalculator: {
            title: 'ماشین‌حساب BMI',
            description: 'شاخص توده بدنی خود را سریع و ساده محاسبه کنید.',
            height: 'قد (سانتی‌متر)',
            weight: 'وزن (کیلوگرم)',
            calculate: 'محاسبه BMI',
            result: 'BMI شما',
            note: 'BMI یک شاخص کلی برای سلامت است و ممکن است برای ورزشکاران یا افراد با ترکیب بدنی خاص دقیق نباشد.',
            invalid: 'برای مشاهده نتیجه BMI، قد و وزن معتبر وارد کنید.',
            chartTitle: "نمودار محدوده‌ی BMI",
            chartRangeMin: "{value}",
            chartRangeMax: "{value}",
            reset: "پاک کردن",
            categories: {
                underweight: 'کم‌وزن',
                normal: 'محدوده طبیعی',
                overweight: 'اضافه‌وزن',
                obese: 'چاق',
            },
        },
        // home page fa language
        home: {
            hero: {
                hi: "سلام، من",
                name: "امید بلندی نتاج ",
                name1: "هستم",
                title: "مهندس شبکه و زیرساخت و توسعه‌دهنده فرانت‌اند",
                description: "به وب‌سایت من خوش آمدید؛ جایی برای تلفیق دنیای پایدار زیرساخت شبکه و تخصص مجازی‌سازی با دنیای مدرن فرانت‌اند. متخصص در حوزه‌های سیسکو، سرویس‌های مایکروسافت و توسعه وب‌سایت‌های بهینه با Vue.js.",
                projectsButton: "مشاهده پروژه‌ها"
            },
            about: {
                title: "درباره من",
                textPart1: "فارغ‌التحصیل مهندسی کامپیوتر و کارشناس شبکه با پایه‌ای قوی در حوزه شبکه و مدیریت سیستم. تخصص اصلی من بر",
                textPart2: "Routing & Switching، زیرساخت ویندوز سرور و مجازی‌سازی متمرکز است. در کنار تخصص‌های زیرساختی، با استفاده از",
                textPart3: "و",
                textPart4: "رابط‌ها و ابزارهای وب واکنش‌گرا توسعه می‌دهم. همواره به یادگیری مستمر، حفظ پایداری سیستم‌ها و عیب‌یابی محیط‌های فنی علاقه‌مند هستم."
            },
            skills: {
                title: "جعبه‌ابزار تخصصی",
                subtitle: "تکنولوژی‌ها و ابزارهایی که به آن‌ها تسلط دارم",
                categories: {
                    network: {
                        title: "شبکه و امنیت",
                        text: "Network+, CCNA, MTCNA, MCSA, Security+, CCTV"
                    },
                    virtualization: {
                        title: "مجازی‌سازی و سیستم‌عامل",
                        text: "ESXi, Hyper-V, VMware Workstation, Oracle Virtual Box, Windows Server"
                    },
                    web: {
                        title: "توسعه وب",
                        text: "Vue.js, JavaScript, Tailwind CSS, HTML & CSS, WordPress, SEO Fundamentals"
                    },
                    tools: {
                        title: "ابزارها و نرم‌افزارهای کاربردی",
                        text: "SQL, Veeam Backup, PRTG, OPManager, EVE-NG, GNS3, WinSCP, WinBox, Microsoft Visio, VS Code"
                    },
                    remoteManagement: {
                        title: "ابزارهای مدیریت از راه دور",
                        text: "DameWare, Goverlan, TeamViewer, AnyDesk, Remote Desktop, VNC, Radmin"
                    },
                    officeAutomation: {
                        title: "نرم‌افزارهای اتوماسیون اداری",
                        text: "Faragostar, Chargoon, ican, Pargar, Payvast"
                    },
                }
            },
            roadmap: {
                title: "مسیر توسعه فردی و هدف",
                description: "دنیای تکنولوژی متوقف نمی‌شود. این مسیر منسجمی است که در حال حاضر برای ارتقای دانش فنی‌ام طی می‌کنم:",
                steps: [
                    "سیستم‌های مانیتورینگ پیشرفته (SolarWinds و Zabbix)",
                    "امنیت شبکه و زیرساخت (SANS 275 و SANS 401)",
                    "مدیریت تجهیزات امنیتی دیواره آتش (FortiGate)"
                ]
            },
            contact: {
                title: "ارتباط با من",
                subtitle: "به دنبال نیروی فنی چندبعدی هستید که هم زیرساخت شبکه را بشناسد و هم ابزارهای مدرن وب؟ با من در ارتباط باشید.",
                gmail: "Gmail",
                github: "Github",
                linkedin: "Linkedin",
                copyEmail: "کپی آدرس ایمیل",
                copied: "کپی شد!"
            },
            education: {
                sectionTitle: "تحصیلات دانشگاهی",
                degree: "کارشناسی مهندسی کامپیوتر",
                university: "دانشگاه آزاد اسلامی",
                location: "ایران, اهواز",
                duration: "1400 — 1404",
            },
        },
        // weather page fa language
        weather: {
            title: 'اپلیکیشن آب و هوا',
            searchPlaceholder: 'جستجو',
            searchButton: 'جستجو',
            tempC: 'دما به سانتی‌گراد',
            tempK: 'دما به کلوین',
            feelsLike: 'احساس واقعی',
            humidity: 'رطوبت',
            windSpeed: 'سرعت باد',
            clouds: 'ابرها',
            dateFormat: '{day} {date} {month} {year}',
            loading: "در حال دریافت آخرین وضعیت آب‌وهوا...",
            notFound: "شهری با این نام پیدا نشد. املا رو بررسی کنید و دوباره امتحان کنید.",
            searchError: "مشکلی در دریافت اطلاعات آب‌وهوا پیش اومد.",
            tryAgainHint: "یه نام شهر دیگه رو امتحان کنید.",
            emptyTitle: "یک شهر رو جست‌وجو کنید",
            resetButton: "پاک کردن",
            emptyHint: "نام شهر رو بالا بنویسید و Enter بزنید تا وضعیت فعلی آب‌وهوا رو ببینید.",
            attribution: "داده‌های آب‌وهوا ارائه‌شده توسط",
        },
        // Articles page fa language
        articles: {
            title: 'مقالات',
            readMore: 'بیشتر بخوانید',
            backToAll: 'بازگشت به همه مقالات',
            notFound: 'مقاله یافت نشد!',
            filterByTags: "بر اساس تگ فیلتر کنید",
            clearFilters: "پاک کردن فیلتر",
            noResults: "مقاله‌ای با این تگ‌ها پیدا نشد",
            author: "نویسنده",
            publishedOn: "تاریخ انتشار",
            backToAllArticles: "بازگشت به همه مقالات",
            notFound: "مقاله پیدا نشد!",
            Copied: "کپی شد",
            relatedProject: 'پروژه مرتبط',
            references: 'منابع',
            relatedTool: 'ابزار مرتبط',
        },
        // todo page fa language
        todo: {
            title: 'تودو لیست',
            description: 'توضیحات',
            tip: 'نکته: برای اضافه کردن تودو، اینتر یا دکمه ی افزودن را فشار دهید.',
            features: 'ویژگی‌ها',
            addTask: 'افزودن یک کار.',
            deleteTask: 'حذف یک کار.',
            checkComplete: 'بررسی / تکمیل یک کار.',
            toggleView: 'نمایش همه کارها / پنهان کردن کارهای تکمیل‌شده.',
            tasksLeft: '{count} کار باقی مانده!',
            hideCompleted: 'پنهان کردن تکمیل‌شده‌ها',
            showAll: 'نمایش همه',
            addNewTask: 'افزودن یک کار جدید',
            add: "افزودن",
            limitReached: "به حداکثر تعداد {max} تسک رسیدید",
        },
        // unitConversion page fa language
        unitConversion: {
            title: 'تبدیل واحد',
            chooseConversion: 'تبدیل واحدهای اندازه‌گیری',
            description: 'یک تبدیل از منو انتخاب کنید، مقدار را وارد کنید، سپس Enter یا دکمه تبدیل را بزنید.',
            conversionType: 'نوع تبدیل',
            enterAmount: 'مقدار را وارد کنید',
            convertButton: 'تبدیل',
            resultLabel: 'نتیجه',
            invalidInput: 'ورودی نامعتبر',
            invalidConversion: 'نوع تبدیل نامعتبر',
            resetButton: "بازنشانی",
            options: {
                meterToFeet: 'متر ← فوت',
                feetToMeter: 'فوت ← متر',
                meterToCentimeter: 'متر ← سانتی‌متر',
                centimeterToMeter: 'سانتی‌متر ← متر',
                meterToKilometer: 'متر ← کیلومتر',
                kilometerToMeter: 'کیلومتر ← متر',
                rialToUsd: "",
                usdToRial: "",
                rialToEur: "",
                eurToRial: "",
                rialToCny: "",
                cnyToRial: "",
                usdToEur: "",
                eurToUsd: "",
                usdToCny: "",
                cnyToUsd: "",
                eurToCny: "",
                cnyToEur: ""
            },
            currencyTitle: 'تبدیل ارز',
            currencyDescription: 'تبدیل بین ریال ایران، دلار آمریکا، یورو و یوان چین. یک مبلغ وارد کنید، نوع تبدیل را انتخاب کنید و روی تبدیل کلیک کنید.', currencyType: 'نوع تبدیل',
            currencyAmount: 'مبلغ را وارد کنید',
            currencyConvertButton: 'تبدیل ارز',
            currencyResultLabel: 'نتیجه تبدیل ارز',
            invalidCurrencyInput: 'مبلغ وارد شده معتبر نیست',
            currencyLoading: "در حال دریافت نرخ...",
            currencyFetchError: "دریافت نرخ ارز با خطا مواجه شد، دوباره تلاش کنید",
            wordsTitle: "تبدیل عدد و حروف",
            wordsDescription: "عدد را به حروف یا حروف را به عدد تبدیل کنید.",
            wordsTypeLabel: "نوع تبدیل",
            wordsNumberInput: "عدد را وارد کنید",
            wordsTextInput: "متن را وارد کنید",
            wordsResultLabel: "نتیجه",
            invalidWordsInput: "ورودی نامعتبر است",
            NumberToWordsoptions: {
                numberToWords: "عدد به حروف",
                wordsToNumber: "حروف به عدد"
            },
            currencyAttribution: "نرخ‌های ارز ارائه‌شده توسط",
        },
        // Calculator page fa language
        Calculator: {
            title: 'ماشین حساب',
        },
        // Icon page fa language
        commonlanguage: {
            language: 'زبان',
            en: 'EN',
            fa: 'FA',
        },
        dateBoxLabels: {
            gregorian: 'میلادی',
            jalali: 'شمسی',
            hijri: 'قمری',
        },
        // converter page in calendar page fa language
        converterLabels: {
            titleToGregorian: "تبدیل تاریخ شمسی به میلادی",
            titleToJalali: "تبدیل تاریخ میلادی به شمسی",
            year: "سال",
            day: "روز",
            convert: "تبدیل",
            invalid: "تاریخ واردشده معتبر نیست",
            reset: "پاک کردن"
        },
        // experience section in home page en language
        experience: {
            title: "سابقه شغلی و کارآموزی",
            subtitle: "تجربیات عملی و ورود به دنیای حرفه‌ای",
            company: "شرکت پتروشیمی اروند",
            role: "کارآموز مهندسی نرم‌افزار",
            date: "اسفند ۱۴۰۳ – اردیبهشت ۱۴۰۴",
            tasksTitle: "تجربیات عملی:",
            tasks: [
                "آشنایی و کار با سامانه‌های داخلی شرکت و سیستم اتوماسیون اداری",
                "کمک در پاسخ‌گویی به درخواست‌ها و رفع مشکلات نرم‌افزاری و سامانه‌ای کارکنان",
                "کار و یادگیری با نرم‌افزارهای Goverlan و DameWare برای پشتیبانی از راه دور",
                "آشنایی با فرآیندها و فرم‌های کاری واحد نرم‌افزار"
            ]
        },
        // aboutWebsite section in home page en language
        aboutWebsite: {
            title: "درباره این وب‌سایت",
            part1: "این وب‌سایت به عنوان نمونه‌کار شخصی من طراحی شده است و شامل پروژه‌های شبکه، پروژه‌های فرانت‌اند و مقالات فنی و ابزارهای زیرساخت IT است. این سایت با ",
            vue: "Vue.js",
            part2: " و ",
            tailwind: "Tailwind CSS",
            part3: " به صورت واکنش‌گرا (Responsive) توسعه داده شده، از زبان‌های فارسی و انگلیسی پشتیبانی می‌کند و با استفاده از ",
            cloudflare: "Vercel",
            part4: " منتشر شده است. در آینده پروژه‌ها، سناریوها و مقالات جدید به آن اضافه خواهند شد."
        },
        // financialCalculator page fa language
        financialCalculator: {
            title: "محاسبه‌گر مالی",
            currency: "ریال",
            currencyNoteLabel: "نکته:",
            currencyNoteText: "تمامی محاسبات این ماشین‌حساب بر ارزش ریالی است.",
            wordsLabel: "به حروف",
            deposit: {
                title: "محاسبه سود سپرده",
                description: "سود سپرده خود را بر اساس مبلغ، نرخ سود سالانه و مدت زمان (روز) محاسبه کنید، یا نرخ سود را از روی سود دریافتی به‌دست آورید.",
                calcType: "نوع محاسبه",
                options: {
                    amount: "محاسبه مبلغ سود",
                    rate: "محاسبه درصد سود"
                },
                amountLabel: "مبلغ سپرده (ریال)",
                rateLabel: "نرخ سود سالانه (درصد)",
                daysLabel: "مدت زمان (روز)",
                knownProfitLabel: "مبلغ سود دریافتی (ریال)",
                convertButton: "محاسبه",
                resetButton: "بازنشانی",
                dailyProfitLabel: "سود روزانه",
                monthlyProfitLabel: "سود ماهانه (تقریبی)",
                totalProfitLabel: "سود کل بازه",
                rateResultLabel: "نرخ سود سالانه",
                invalidInput: "لطفاً مقادیر را به‌درستی وارد کنید."
            },
            loan: {
                title: "محاسبه اقساط وام",
                description: "مبلغ قسط ماهانه وام را بر اساس مبلغ وام، نرخ سود سالانه و تعداد اقساط محاسبه کنید، یا نرخ سود را از روی مبلغ قسط به‌دست آورید.",
                calcType: "نوع محاسبه",
                options: {
                    installment: "محاسبه مبلغ قسط",
                    rate: "محاسبه درصد سود"
                },
                amountLabel: "مبلغ وام (ریال)",
                rateLabel: "نرخ سود سالانه (درصد)",
                monthsLabel: "تعداد اقساط (ماه)",
                installmentAmountLabel: "مبلغ هر قسط (ریال)",
                convertButton: "محاسبه",
                resetButton: "بازنشانی",
                installmentResultLabel: "مبلغ هر قسط",
                totalPaymentLabel: "مجموع پرداختی",
                totalInterestLabel: "مجموع سود",
                rateResultLabel: "نرخ سود سالانه",
                invalidInput: "لطفاً مقادیر را به‌درستی وارد کنید.",
                invalidRateRange: "مبلغ قسط وارد شده کمتر از حداقل ممکن است (نرخ سود منفی می‌شود)."
            }
        },
        // qrBarcode page fa language
        qrBarcode: {
            title: "تولید کد QR و بارکد",
            qrTitle: "تولید کد QR",
            barcodeTitle: "تولید بارکد خطی",
            qrPlaceholder: "متن یا لینک را وارد کنید",
            barcodePlaceholder: "متن یا کد را وارد کنید",
            generate: "تولید",
            size: "اندازه",
            sizeSmall: "کوچک",
            sizeMedium: "متوسط",
            sizeLarge: "بزرگ",
            emptyResult: "نتیجه اینجا نمایش داده می‌شود",
            downloadPng: "دانلود PNG",
            downloadSvg: "دانلود SVG",
            errorEmpty: "لطفاً متنی وارد کنید",
            errorTooLong: "متن وارد شده بیش از حد مجاز است",
            errorGeneric: "خطا در تولید کد، دوباره تلاش کنید",
            errorBarcodeUnsupported: "این متن شامل کاراکترهای غیرمجاز برای بارکد است",
            errorPersianUnsupported: "بارکد خطی از حروف فارسی پشتیبانی نمی‌کند؛ برای متن فارسی از QR Code استفاده کنید",
            reset: "پاک کردن",
        },
        // modals page fa language
        common: {
            close: "بستن",
            cancel: "لغو",
            confirm: "تایید",
            previous: "قبلی",
            next: "بعدی",
            finish: "اتمام"
        },
        modals: {
            pageTitle: "مدال‌ها",
            cta: "مشاهده",
            buttons: {
                modal1: "باز کردن مدال اول",
                modal4: "باز کردن مدال چهارم",
                modal5: "باز کردن مدال پنجم",
                modal6: "باز کردن مدال ششم",
                modal7: "باز کردن مدال هفتم",
                modal8: "باز کردن مدال هشتم",
                modal9: "باز کردن مدال نهم",
                modal10: "باز کردن مدال دهم",
                modal11: "باز کردن مدال یازدهم",
                step: "مدال گام‌به‌گام",
                confirm: "مدال تاییدیه",
                auto: "مدال با تایمر",
                carousel: "مدال گالری تصاویر",
                fullscreen: "مدال تمام صفحه"
            },
            cards: {
                modal1: { "description": "یک مدال ساده برای نمایش یک پیام کوتاه" },
                modal4: { "description": "مدالی بزرگ‌تر با پشتیبانی از اسکرول و نمایش تصویر" },
                modal5: { "description": "فرم ورود کاربر همراه با اعتبارسنجی ساده" },
                modal6: { "description": "مدال با افکت محو شدن (fade) هنگام باز و بسته شدن" },
                modal7: { "description": "مدال با یک انیمیشن چرخشی و نرم" },
                modal8: { "description": "مدال با انیمیشن اسلاید از پایین به بالا" },
                modal9: { "description": "مدال با انیمیشن اسلاید از بالا به پایین" },
                modal10: { "description": "مدال با انیمیشن اسلاید از راست به چپ" },

                modal12: {
                    description: "مدال با انیمیشن بزرگ‌نمایی هنگام باز و بسته شدن"
                }, modal11: { "description": "مدال با انیمیشن اسلاید از چپ به راست" },
                step: { "description": "یک ویزارد سه مرحله‌ای برای راهنمایی گام‌به‌گام کاربر" },
                confirm: { "description": "درخواست تایید از کاربر پیش از انجام یک عملیات حساس" },
                auto: { "description": "مدالی که به‌صورت خودکار پس از چند ثانیه بسته می‌شود" },
                carousel: { "description": "نمایش گالری تصاویر با قابلیت جابه‌جایی بین آن‌ها" },
                fullscreen: { "description": "مدالی که تمام صفحه‌ی نمایش را پر می‌کند" }
            },
            modal1: { "title": "مدال اول", "text": "این متن داخل مدال اول است." },
            modal4: {
                title: "مدال بزرگ‌تر",
                text1: "این مدال بزرگ‌تر است و می‌توانید محتوای طولانی‌تری داخل آن بگذارید. همچنین از اسکرول داخلی پشتیبانی می‌کند تا فضای صفحه بهینه استفاده شود.",
                text2: "شما می‌توانید اطلاعات بیشتری مانند تصاویر، لیست‌ها یا حتی فرم‌ها را داخل این مدال نمایش دهید.",
                imageAlt: "تصویر نمونه"
            },
            modal5: {
                title: "ورود کاربران",
                emailLabel: "ایمیل:",
                passwordLabel: "رمز عبور:",
                submit: "ورود",
                validationError: "لطفاً ایمیل و رمز عبور را وارد کنید."
            },
            modal6: { "title": "مدال با انیمیشن", "text": "این مدال با انیمیشن باز و بسته می‌شود." },
            modal7: { "title": "مدال زیبا با انیمیشن", "text": "این مدال یک انیمیشن زیبا دارد که هنگام باز و بسته شدن اجرا می‌شود." },
            modal8: { "title": "مدال با انیمیشن اسلاید", "text": "این مدال با انیمیشن زیبای لغزیدن از پایین به بالا باز می‌شود." },
            modal9: { "title": "مدال با انیمیشن اسلاید", "text": "این مدال با انیمیشن زیبای لغزیدن از بالا به پایین باز می‌شود." },
            modal10: { "title": "مدال با انیمیشن اسلاید", "text": "این مدال با انیمیشن زیبای لغزیدن از راست به چپ باز می‌شود." },
            modal11: { "title": "مدال با انیمیشن اسلاید", "text": "این مدال با انیمیشن زیبای لغزیدن از چپ به راست باز می‌شود." },

            step: {
                title: "مرحله {step} از {total}",
                text: "این متن مربوط به مرحله {step} است."
            },
            confirmModal: {
                title: "آیا مطمئن هستید؟",
                text: "این عملیات غیر قابل بازگشت است.",
                confirmedAlert: "عملیات تایید شد!"
            },
            auto: {
                title: "پیام اطلاع‌رسانی",
                text: "این مدال پس از {timer} ثانیه بسته می‌شود."
            },
            carousel: { "title": "مدال گالری تصاویر" },
            fullscreen: {
                title: "مدال تمام صفحه",
                text: "این یک مدال تمام صفحه است."
            },
            fullscreen: {
                title: "مدال تمام صفحه",
                text: "این یک مدال تمام صفحه است."
            },
            modal12: {
                title: "مدال با انیمیشن بزرگ‌نمایی",
                text: "این مدال با یک انیمیشن بزرگ‌نمایی (zoom) نرم باز و بسته می‌شود."
            },
        },
        // timeDate page fa language
        timeDate: {
            pageTitle: "زمان و تاریخ",
            digitalClock: "ساعت دیجیتال",
            analogClock: "ساعت آنالوگ",
            currentDate: "تاریخ فعلی:",
            currentTime: "زمان فعلی:",
            am: "AM",
            pm: "PM",
            timeCounter: {
                title: "تایمر شمارش",
                start: "شروع",
                stop: "توقف",
                reset: "بازنشانی"
            },
            countdown: {
                title: "شمارش معکوس",
                hoursPlaceholder: "ساعت",
                minutesPlaceholder: "دقیقه",
                secondsPlaceholder: "ثانیه",
                start: "شروع",
                stop: "توقف",
                reset: "بازنشانی",
                setTimeAlert: "لطفاً زمان شمارش معکوس را تنظیم کنید.",
                timeUpAlert: "زمان به پایان رسید!",
                hoursLabel: "ساعت",
                minutesLabel: "دقیقه",
                secondsLabel: "ثانیه"
            },
            fullDate: "تاریخ کامل:",
            time24h: "ساعت (۲۴ ساعته):"
        },
        // networkingLabs page fa language
        networkingLabs: {
            pages: {
                vlanRouterOnAStick: {
                    badge: "آزمایشگاه عملی CCNA",
                    title: "پیاده‌سازی سناریوی VLAN و Router-on-a-Stick",
                    imageAlt: "توپولوژی VLAN و Router-on-a-Stick",
                    intro: "مفهوم Virtual Local Area Network (VLAN) جهت جداسازی منطقی Broadcast Domainها در لایه 2 به کار می‌رود. برای برقراری ارتباط بین VLANهای مجزا نیاز به یک تجهیز لایه 3 وجود دارد. روش Router-on-a-Stick با تعریف Subinterfaceهای منطقی روی یک لینک Trunk فیزیکی، امکان Inter-VLAN Routing را به بهینه‌ترین شکل فراهم می‌سازد.",
                    labels: {
                        switchTerminal: "ترمینال سوئیچ",
                        routerTerminal: "ترمینال روتر"
                    },
                    sections: {
                        addressing: {
                            heading: "2. ساختار شبکه و آدرس‌دهی (Addressing Scheme)",
                            intro: "زیرساخت منطقی شبکه شامل دو بخش مجزا است که بر اساس الزامات امنیتی و مدیریتی ایزوله شده‌اند:",
                            salesLabel: "دپارتمان Sales (VLAN 10):",
                            salesDesc: "محدوده شبکه {network} همراه با آدرس Gateway تعیین‌شده برابر با {gateway}. کلاینت‌های PC-1 ({pc1}) و PC-2 ({pc2}) در این دامنه قرار دارند.",
                            marketingLabel: "دپارتمان Marketing (VLAN 20):",
                            marketingDesc: "محدوده شبکه {network} همراه با آدرس Gateway تعیین‌شده برابر با {gateway}. کلاینت‌های PC-3 ({pc3}) و PC-4 ({pc4}) در این دامنه حضور دارند."
                        },
                        switchConfig: {
                            heading: "4. دستورات پیکربندی سوئیچ (Switch Configuration)",
                            intro: "در لایه Access، ابتدا VLANها تعریف شده، پورت‌های متصل به سیستم‌های نهایی روی حالت Access تنظیم می‌شوند و اتصال به روتر روی حالت Trunk قرار می‌گیرد:"
                        },
                        routerConfig: {
                            heading: "5. دستورات پیکربندی روتر (Router-on-a-Stick)",
                            intro: "روی روتر، پورت فیزیکی اصلی فعال شده و Subinterfaceهای مربوط به هر VLAN با کپسوله‌سازی استاندارد IEEE 802.1Q ایجاد می‌گردند:"
                        },
                        verification: {
                            heading: "6. صحت‌سنجی و عیب‌یابی (Verification)",
                            intro: "جهت اطمینان از عملکرد صحیح لایه 2 و لایه 3، دستورات زیر اجرا می‌شوند:",
                            item1: "اجرای `show vlan brief` روی سوئیچ جهت بررسی صحت تخصیص پورت‌ها به VLAN 10 و VLAN 20.",
                            item2: "اجرای `show interfaces trunk` روی سوئیچ برای اطمینان از فعال بودن حالت Trunk روی پورت GigabitEthernet 0/1.",
                            item3: "اجرای `show ip route` روی روتر برای صحت وجود شبکه‌های {net1} و {net2} به صورت Connected.",
                            item4: "تست ارتباط (Ping) بین PC-1 ({pc1}) و PC-3 ({pc3}) جهت تایید صحت عملکرد Inter-VLAN Routing."
                        }
                    },
                    codeComments: {
                        switch: {
                            createVlans: "ایجاد VLAN 10 و VLAN 20",
                            assignVlan10Ports: "تخصیص پورت‌های FastEthernet 0/1 و 0/2 به VLAN 10",
                            assignVlan20Ports: "تخصیص پورت‌های FastEthernet 0/3 و 0/4 به VLAN 20",
                            setTrunk: "تنظیم لینک اصلی ارتباطی به روتر روی حالت Trunk",
                            saveConfig: "ذخیره پیکربندی"

                        },
                        router: {
                            enablePhysical: "فعال‌سازی اینترفیس فیزیکی اصلی بدون تخصیص IP",
                            createSubVlan10: "ایجاد Subinterface برای VLAN 10",
                            createSubVlan20: "ایجاد Subinterface برای VLAN 20",
                            saveConfig: "ذخیره پیکربندی"

                        }
                    },
                    meta: {
                        estimatedTime: "⏱ زمان تخمینی: ۲۰ دقیقه"
                    },
                    pitfalls: {
                        heading: "7. اشتباهات رایج (Common Pitfalls)",
                        intro: "در پیاده‌سازی این سناریو، چند اشتباه رایج وجود دارد که باید از آن‌ها آگاه بود:",
                        item1: "فراموش کردن ذخیره پیکربندی (`write memory`) — بدون این دستور، تنظیمات با ریست یا قطع برق دستگاه از بین می‌رود.",
                        item2: "عدم تطابق Native VLAN بین دو سمت لینک Trunk (سوئیچ و روتر)، که باعث هشدار CDP Native VLAN Mismatch و نشت ترافیک بین VLANها می‌شود.",
                        item3: "مغایرت شماره VLAN بین دستور `encapsulation dot1Q` روی Subinterface روتر و VLAN تعریف‌شده روی سوئیچ.",
                        item4: "تنظیم اشتباه پورت متصل به روتر روی حالت Access به‌جای Trunk، که باعث قطع کامل ارتباط بین VLANها می‌شود.",
                        item5: "عدم تنظیم صحیح Default Gateway در PCها مطابق آدرس IP همان Subinterface مربوطه."
                    },
                    conclusion: {
                        heading: "8. نتیجه‌گیری تخصصی",
                        paragraph1: "این آزمایشگاه مفهوم بنیادین Inter-VLAN Routing را که یکی از موضوعات کلیدی آزمون CCNA است، از طریق روش Router-on-a-Stick به‌صورت عملی نشان می‌دهد؛ روشی که با استفاده از یک لینک Trunk فیزیکی و چند Subinterface منطقی، نیاز به چندین پورت فیزیکی روی روتر را از بین می‌برد.",
                        paragraph2: "با این حال، در محیط‌های سازمانی با حجم ترافیک بالا، این لینک Trunk تک‌گانه می‌تواند تبدیل به گلوگاه پهنای‌باند شود؛ در چنین شرایطی، استفاده از Layer 3 Switching با تعریف SVI (Switched Virtual Interface) روی سوئیچ‌های Multilayer، به‌دلیل پردازش سخت‌افزاری (ASIC) به‌جای پردازش نرم‌افزاری روتر، گزینه مناسب‌تری برای مقیاس‌پذیری و کارایی خواهد بود."
                    },
                    concepts: {
                        heading: "1. مفاهیم پایه VLAN",
                        intro: "پیش از ورود به پیکربندی، آشنایی با چند مفهوم کلیدی زیرساخت این آزمایشگاه را قابل‌فهم‌تر می‌کند:",
                        items: {
                            broadcastDomain: {
                                title: "Broadcast Domain چیست؟",
                                desc: "هر VLAN یک دامنه Broadcast مجزا ایجاد می‌کند؛ یعنی ترافیک Broadcast یک VLAN هرگز به VLAN دیگر نشت نمی‌کند، حتی اگر روی همان سوئیچ فیزیکی باشند."
                            },
                            segmentation: {
                                title: "جداسازی منطقی، مستقل از مکان فیزیکی",
                                desc: "VLANها امکان گروه‌بندی منطقی کاربران بر اساس دپارتمان یا سطح امنیتی را فراهم می‌کنند، بدون وابستگی به موقعیت فیزیکی پورت یا سوئیچ."
                            },
                            portModes: {
                                title: "پورت Access در برابر Trunk",
                                desc: "پورت Access فقط به یک VLAN مشخص تعلق دارد و برای اتصال کلاینت نهایی استفاده می‌شود؛ پورت Trunk ترافیک چند VLAN را همزمان بین سوئیچ‌ها یا به سمت روتر حمل می‌کند."
                            },
                            tagging: {
                                title: "تگ‌گذاری 802.1Q و Native VLAN",
                                desc: "استاندارد IEEE 802.1Q هر فریم عبوری از لینک Trunk را با شماره VLAN تگ می‌زند، به‌جز ترافیک Native VLAN که بدون تگ عبور می‌کند."
                            },
                            interVlanRouting: {
                                title: "چرا Inter-VLAN Routing لازم است؟",
                                desc: "چون سوئیچ‌های لایه ۲ نمی‌توانند بین VLANهای مجزا مسیر‌یابی کنند، برای برقراری ارتباط بین آن‌ها به یک دستگاه لایه ۳ (روتر یا سوئیچ Multilayer) نیاز است."
                            }
                        }
                    },
                    connections: {
                        heading: "3. اتصالات فیزیکی (Physical Connections)",
                        intro: "جدول زیر نگاشت دقیق پورت‌های فیزیکی بین کلاینت‌ها، سوئیچ و روتر را در این توپولوژی نشان می‌دهد:",
                        headers: {
                            sourceDevice: "دستگاه مبدأ",
                            sourcePort: "پورت مبدأ",
                            destDevice: "دستگاه مقصد",
                            destPort: "پورت مقصد",
                            linkType: "نوع لینک"
                        },
                        linkTypes: {
                            accessVlan10: "حالت Access (VLAN 10)",
                            accessVlan20: "حالت Access (VLAN 20)",
                            trunk8021q: "حالت Trunk (802.1Q)"
                        }
                    }
                },
                ospfSingleArea: {
                    badge: "آزمایشگاه عملی CCNA",
                    title: "پیکربندی OSPF Single-Area با Transit Network (Area 0)",
                    imageAlt: "دیاگرام آنلاین سناریوی OSPF Single Area به همراه سه LAN مجزا",
                    intro: "در این آزمایشگاه شبکه، نحوه پیکربندی پروتکل مسیریابی پویا OSPFv2 در یک ناحیه واحد (Area 0) را مرور می‌کنیم. هدف این سناریو برقراری ارتباط کامل و دوطرفه بین سه شبکه‌ مجزای داخلی (LAN) از طریق روترهای اختصاصی متصل به یک سوئیچ مرکزی است.",
                    meta: {
                        estimatedTime: "زمان تقریبی: ۱۵ دقیقه"
                    },
                    labels: {
                        routersTerminal: "دستورات CLI برای روترهای R1، R2 و R3",
                        switchesTerminal: "دستورات CLI برای سوئیچ‌های دسترسی و SW-CORE"
                    },
                    concepts: {
                        heading: "1. مفاهیم اولیه OSPF",
                        intro: "پیش از شروع پیکربندی، آشنایی با مفاهیم کلیدی الگوریتم مسیریابی OSPF و نحوه تبادل داده‌ها در آن ضروری است:",
                        items: {
                            linkState: {
                                title: "پروتکل Link-State",
                                desc: "OSPF یک پروتکل وضعیت لینک است که بر اساس آگاهی کامل از تمام توپولوژی شبکه، بهینه‌ترین مسیر را محاسبه می‌کند."
                            },
                            wildcardMask: {
                                title: "وایلدکارت ماسک (Wildcard Mask)",
                                desc: "در اعلام شبکه‌ها در OSPF از Wildcard Mask (معکوس Subnet Mask) استفاده می‌شود. برای مثال برای ماسک 255.255.255.0 مقدار وایلدکارت برابر 0.0.0.255 خواهد بود."
                            },
                            areaConcept: {
                                title: "مفهوم ناحیه (Area 0)",
                                desc: "تمامی روترها در این سناریو عضو Area 0 (ناحیه Backbone اصلی) هستند که تمام ترافیک‌های بین-شبکه‌ای را جابجا می‌سازد."
                            },
                            drBdr: {
                                title: "انتخاب DR و BDR",
                                desc: "در شبکه‌های مبتنی بر Multi-access (مانند اتصال سوئیچ SW-CORE)، روترها یک DR و BDR برای مدیریت تبادل LSAها انتخاب می‌کنند."
                            }
                        }
                    },
                    sections: {
                        addressing: {
                            heading: "2. جدول آدرس‌دهی IP",
                            intro: "آدرس‌دهی IP تجهیزات در این آزمایشگاه به صورت زیر بخش‌بندی شده است:",
                            lan1Label: "شبکه LAN 1:",
                            lan1Desc: "محدوده {network} | درگاه خروجی: {gateway} | سیستم: {pc1}",
                            lan2Label: "شبکه LAN 2:",
                            lan2Desc: "محدوده {network} | درگاه خروجی: {gateway} | سیستم: {pc2}",
                            lan3Label: "شبکه LAN 3:",
                            lan3Desc: "محدوده {network} | درگاه خروجی: {gateway} | سیستم: {pc3}",
                            backboneLabel: "شبکه Backbone (SW-CORE):",
                            backboneDesc: "محدوده {network} | آدرس R1: {r1} | آدرس R2: {r2} | آدرس R3: {r3}"
                        },
                        routersConfig: {
                            heading: "4. پیکربندی روترها (R1, R2, R3)",
                            intro: "دستورات زیر را روی هر روتر وارد کنید تا اینترفیس‌ها و فرایند OSPF به‌طور دقیق فعال شوند:"
                        },
                        switchesConfig: {
                            heading: "5. پیکربندی سوئیچ‌ها",
                            intro: "برای حصول اطمینان از فعال بودن تمامی پورت‌ها و عدم افت ترافیک، پورت‌های سوئیچ‌ها را فعال سازید:"
                        },
                        verification: {
                            heading: "6. تست و اعتبارسنجی شبکه",
                            intro: "پس از اعمال دستورات، مراحل زیر را جهت اطمینان از صحت عملکرد اجرا کنید:",
                            item1: "در روتر R1 دستور show ip route ospf را اجرا کرده و از مشاهده مسیرهای 192.168.2.0/24 و 192.168.3.0/24 مطمئن شوید.",
                            item2: "دستور show ip ospf neighbor را وارد کرده و وضعیت همسایگی (State) روترها را چک کنید (باید در حالت FULL باشد).",
                            item3: "از سیستم PC1 آی‌پی Default Gateway خودش یعنی 192.168.1.1 را پینگ بگیرید.",
                            item4: "از PC1، آی‌پی PC2 (یعنی 192.168.2.10) و PC3 (یعنی 192.168.3.10) را پینگ کنید تا ارتباط انتهای به انتها تأیید شود."
                        }
                    },
                    connections: {
                        heading: "3. اتصالات فیزیکی تجهیزات",
                        intro: "ارتباطات کابل‌کشی بین تجهیزات شبکه مطابق با جدول زیر انجام شده است:",
                        headers: {
                            sourceDevice: "دستگاه مبدا",
                            sourcePort: "پورت مبدا",
                            destDevice: "دستگاه مقصد",
                            destPort: "پورت مقصد",
                            linkType: "نوع لینک"
                        },
                        linkTypes: {
                            accessLan: "لینک داخلی LAN (کابل Straight-Through)",
                            backbone: "لینک بک‌بون OSPF (کابل Straight-Through)"
                        }
                    },
                    pitfalls: {
                        heading: "7. اشتباهات رایج و نکات عیب‌یابی",
                        intro: "در صورت بروز خطاهایی نظیر Destination host unreachable، موارد زیر را چک کنید:",
                        item1: "تنظیم نبودن Default Gateway در سیستم‌ها: عدم تنظیم IP روتر روی PCها مانع از خروج بسته به خارج از LAN می‌شود.",
                        item2: "اشتباه در وایلدکارت ماسک: مطمئن شوید برای Subnet Mask کلاس C از وایلدکارت 0.0.0.255 استفاده کرده‌اید.",
                        item3: "خاموش بودن پورت‌ها (Shutdown): عدم اجرای دستور no shutdown روی اینترفیس‌های روتر یا سوئیچ.",
                        item4: "عدم تطابق Area: تمام دستورات network در OSPF باید حتماً روی area 0 تنظیم شده باشند."
                    },
                    codeComments: {
                        routers: {
                            r1Title: "تنظیمات روتر R1",
                            r1Interfaces: "تنظیمات اینترفیس‌های LAN و Backbone",
                            r1Ospf: "فعال‌سازی فرآیند OSPF روی Area 0",
                            r2Title: "تنظیمات روتر R2",
                            r2Interfaces: "تنظیمات اینترفیس‌های LAN و Backbone",
                            r2Ospf: "فعال‌سازی فرآیند OSPF روی Area 0",
                            r3Title: "تنظیمات روتر R3",
                            r3Interfaces: "تنظیمات اینترفیس‌های LAN و Backbone",
                            r3Ospf: "فعال‌سازی فرآیند OSPF روی Area 0"
                        },
                        switches: {
                            accessSwitchesTitle: "فعال‌سازی تمام پورت‌های سوئیچ‌های دسترسی (SW1, SW2, SW3)",
                            coreSwitchTitle: "فعال‌سازی پورت‌های سوئیچ مرکزی SW-CORE"
                        }
                    },
                    conclusion: {
                        heading: "8. نتیجه‌گیری",
                        paragraph1: "پروتکل OSPF به دلیل سرعت بالای همگرایی (Convergence) و قابلیت توسعه، گزینه‌ای ایده‌آل برای شبکه سازمانی محسوب می‌شود. در این سناریو یاد گرفتیم چگونه چند شبکه LAN مجزا را به کمک OSPF Single Area متصل کنیم.",
                        paragraph2: "تنظیم دقیق آدرس‌های Gateway در لایه کامپیوترها و اعلام دقیق رنج شبکه‌ها در OSPF اساس یک ارتباط موفق بی‌نقص را تشکیل می‌دهد."
                    },
                    githubLink: "مشاهده سورس‌کد پروژه در گیت‌هاب"
                },
                eigrpRouting: {
                    badge: "آزمایشگاه عملی CCNA",
                    title: "پیکربندی مسیریابی پویا با EIGRP: اتصال شبکه‌های داخلی در Packet Tracer",
                    imageAlt: "دیاگرام آنلاین سناریوی مسیریابی EIGRP شامل سه روتر و سه شبکه LAN مجزا",
                    intro: "در این سناریوی عملی، نحوه پیکربندی پروتکل مسیریابی پیشرفته سیسکو یعنی EIGRP را روی سه روتر بررسی می‌کنیم. هدف این آزمایشگاه برقراری ارتباط سریع، ایجاد مسیرهای پشتیبان (Redundancy) و بهینه‌سازی ترافیک بین سه شبکه داخلی مجزا است.",
                    meta: {
                        estimatedTime: "زمان تقریبی: ۱۵ دقیقه"
                    },
                    githubLink: "مشاهده سورس‌کد پروژه در گیت‌هاب",
                    labels: {
                        routersTerminal: "دستورات CLI برای روترهای R1، R2 و R3",
                        switchesTerminal: "دستورات CLI برای سوئیچ‌های SW1، SW2 و SW3"
                    },
                    concepts: {
                        heading: "1. مفاهیم اولیه EIGRP",
                        intro: "پیش از اعمال دستورات، درک مفاهیم و الگوریتم‌های حیاتی پروتکل EIGRP ضروری است:",
                        items: {
                            dualAlgorithm: {
                                title: "الگوریتم DUAL",
                                desc: "پروتکل EIGRP از الگوریتم DUAL بهره می‌برد که مسیرهای جایگزین (Feasible Successors) را بدون احتمال بروز Loop به‌صورت لحظه‌ای جایگزین می‌کند."
                            },
                            asNumber: {
                                title: "شماره سیستم مستقل (AS)",
                                desc: "تمامی روترها برای همسایه‌شدن و تبادل جداول مسیریابی باید دقیقاً دارای یک AS Number یکسان (مثلاً ۱۰۰) باشند."
                            },
                            compositeMetric: {
                                title: "معیار ترکیبی (Composite Metric)",
                                desc: "محاسبه متریمک در EIGRP به‌صورت پیش‌فرض بر اساس پهنای باند (Bandwidth) و تاخیر (Delay) صورت می‌گیرد تا دقیق‌ترین مسیر انتخاب شود."
                            },
                            passiveInterface: {
                                title: "اینترفیس غیرفعال (Passive)",
                                desc: "ارسال بسته‌های Hello به سمت شبکه کاربران (LAN) را متوقف می‌کند تا امنیت افزایش یافته و از پهنای باند شبکه محافظت شود."
                            }
                        }
                    },
                    sections: {
                        addressing: {
                            heading: "2. جدول آدرس‌دهی IP",
                            intro: "آدرس‌دهی IP تجهیزات در این سناریو به شرح زیر بخش‌بندی شده است:",
                            lan1Label: "شبکه LAN 1:",
                            lan1Desc: "محدوده {network} | درگاه خروجی: {gateway} | سیستم: {pc1}",
                            lan2Label: "شبکه LAN 2:",
                            lan2Desc: "محدوده {network} | درگاه خروجی: {gateway} | سیستم: {pc2}",
                            lan3Label: "شبکه LAN 3:",
                            lan3Desc: "محدوده {network} | درگاه خروجی: {gateway} | سیستم: {pc3}",
                            wanLabel: "لینک‌های ارتباطی روترها (/30):",
                            wanDesc: "لینک R1-R2: 10.12.0.0/30 | لینک R2-R3: 10.23.0.0/30 | لینک R3-R1: 10.31.0.0/30"
                        },
                        routersConfig: {
                            heading: "4. پیکربندی روترها (R1, R2, R3)",
                            intro: "دستورات زیر را روی روترها وارد کنید تا اینترفیس‌ها و فرآیند EIGRP با شماره AS 100 فعال شوند:"
                        },
                        switchesConfig: {
                            heading: "5. پیکربندی سوئیچ‌ها (SW1, SW2, SW3)",
                            intro: "روی سوئیچ‌ها تنها دو پورتی که به PC و روتر متصل هستند را فعال سازید:"
                        },
                        verification: {
                            heading: "6. تست و اعتبارسنجی شبکه",
                            intro: "پس از پیکربندی، با دستورات زیر از سلامت همسایگی‌ها و مسیرهای EIGRP مطمئن شوید:",
                            item1: "دستور show ip eigrp neighbors را اجرا کرده و از تشکیل همسایگی کامل بین روترها اطمینان حاصل کنید.",
                            item2: "در روتر R1 دستور show ip route eigrp را اجرا کنید؛ مسیرهای دریافت شده با علامت 'D' مشخص می‌شوند.",
                            item3: "دستور show ip eigrp topology را برای مشاهده مسیر اصلی و مسیرهای جایگزین (Feasible Successors) بررسی کنید.",
                            item4: "از PC1 (192.168.10.10) آی‌پی PC2 (192.168.20.10) و PC3 (192.168.30.10) را پینگ بگیرید تا ارتباط تأیید شود."
                        }
                    },
                    connections: {
                        heading: "3. اتصالات فیزیکی تجهیزات",
                        intro: "ارتباطات کابل‌کشی بین تجهیزات شبکه مطابق با جدول زیر انجام شده است:",
                        headers: {
                            sourceDevice: "دستگاه مبدا",
                            sourcePort: "پورت مبدا",
                            destDevice: "دستگاه مقصد",
                            destPort: "پورت مقصد",
                            linkType: "نوع لینک"
                        },
                        linkTypes: {
                            accessLan: "لینک داخلی LAN (کابل Straight-Through)",
                            backbone: "لینک بک‌بون EIGRP (کابل Cross-Over یا Straight)"
                        }
                    },
                    pitfalls: {
                        heading: "7. اشتباهات رایج و نکات عیب‌یابی",
                        intro: "در صورت عدم تشکیل همسایگی یا قطعی ارتباط، موارد زیر را چک کنید:",
                        item1: "عدم تطابق AS Number: روترها حتماً باید دارای یک Autonomous System ID یکسان باشند.",
                        item2: "فراموش کردن no auto-summary: عدم اجرای این دستور باعث خلاصه شدن آدرس‌ها در مرز Classful و بروز اختلال مسیریابی می‌شود.",
                        item3: "دستکاری K-Values: مقادیر K-Value در محاسبه متلیک باید روی همه روترها یکسان باشد.",
                        item4: "تنظیم Passive-Interface روی لینک‌های بین روترها: این کار مانع از تشکیل همسایگی EIGRP خواهد شد."
                    },
                    codeComments: {
                        routers: {
                            r1Title: "تنظیمات روتر R1",
                            r1Interfaces: "تنظیمات اینترفیس‌های LAN 1 و لینک‌های بین روتری",
                            r1Eigrp: "فعال‌سازی فرآیند EIGRP AS 100 و Passive Interface",
                            r2Title: "تنظیمات روتر R2",
                            r2Interfaces: "تنظیمات اینترفیس‌های LAN 2 و لینک‌های بین روتری",
                            r2Eigrp: "فعال‌سازی فرآیند EIGRP AS 100 و Passive Interface",
                            r3Title: "تنظیمات روتر R3",
                            r3Interfaces: "تنظیمات اینترفیس‌های LAN 3 و لینک‌های بین روتری",
                            r3Eigrp: "فعال‌سازی فرآیند EIGRP AS 100 و Passive Interface"
                        },
                        switches: {
                            sw1Title: "فعال‌سازی پورت‌های فعال سوئیچ SW1",
                            sw2Title: "فعال‌سازی پورت‌های فعال سوئیچ SW2",
                            sw3Title: "فعال‌سازی پورت‌های فعال سوئیچ SW3"
                        }
                    },
                    conclusion: {
                        heading: "8. نتیجه‌گیری",
                        paragraph1: "پروتکل EIGRP یکی از بهترین پروتکل‌های مسیریابی سیسکو است که سرعت همگرایی فوق‌العاده بالا و مصرف بهینه منابع شبکه را فراهم می‌کند.",
                        paragraph2: "استفاده از Passive Interface روی شبکه‌های محلی و غیرفعال کردن Auto-summary، ساختار شبکه را در برابر ناامنی و اختلالات مسیریابی ایزوله و پایدار می‌سازد."
                    }
                },
                etherchannelLacp: {
                    badge: "آزمایشگاه عملی CCNA",
                    title: "پیکربندی EtherChannel (LACP): تجمیع لینک‌ها و افزایش پهنای باند",
                    imageAlt: "دیاگرام آنلاین سناریوی EtherChannel با پروتکل LACP شامل دو سوئیچ و چهار لینک تجمیع‌شده",
                    intro: "در این سناریو، نحوه راه‌اندازی EtherChannel با استفاده از پروتکل استاندارد LACP (802.3ad) بین دو سوئیچ بررسی می‌شود. ترکیب چهار لینک فیزیکی در قالب یک لینک منطقی Port-Channel باعث افزایش پهنای باند و ایجاد پشتیبان (Redundancy) لحظه‌ای در صورت قطعی کابل می‌شود.",
                    meta: {
                        estimatedTime: "زمان تقریبی: ۱۰ دقیقه"
                    },
                    githubLink: "مشاهده سورس‌کد پروژه در گیت‌هاب",
                    labels: {
                        switchesTerminal: "دستورات CLI برای سوئیچ‌های SW1 و SW2"
                    },
                    concepts: {
                        heading: "1. مفاهیم اولیه EtherChannel و LACP",
                        intro: "پیش از اعمال دستورات، درک مفاهیم تجمیع لینک و پروتکل LACP اهمیت دارد:",
                        items: {
                            lacpProtocol: {
                                title: "پروتکل LACP (802.3ad)",
                                desc: "پروتکل استاندارد و باز برای تجمیع پورت‌ها بین سوئیچ‌ها که از مودهای Active و Passive پشتیبانی می‌کند."
                            },
                            bandwidthAggregation: {
                                title: "افزایش پهنای باند (Aggregation)",
                                desc: "با ترکیب پهنای باند پورت‌های فیزیکی، یک مسیر ارتباطی پرسرعت و عریض بین سوئیچ‌ها ایجاد می‌شود."
                            },
                            redundancy: {
                                title: "پایداری و پشتیبانی (Redundancy)",
                                desc: "در صورت قطعی یک یا چند کابل، ترافیک شبکه بدون قطعی از مابقی لینک‌های فعال منتقل خواهد شد."
                            },
                            portChannel: {
                                title: "اینترفیس منطقی Port-Channel",
                                desc: "یک پورت مجازی که نماینده همه لینک‌های تجمیع‌شده است و تنظیمات (مانند Trunk) روی آن اعمال می‌شود."
                            }
                        }
                    },
                    sections: {
                        addressing: {
                            heading: "2. آدرس‌دهی و ساختار لینک‌ها",
                            intro: "فن‌آوری EtherChannel در لایه ۲ عمل می‌کند؛ آدرس‌دهی سیستم‌ها در یک زیرشبکه به شکل زیر است:",
                            pc1Label: "آدرس PC1:",
                            pc1Desc: "192.168.10.10 /24 (متصل به پورت Fa0/1 سوئیچ SW1)",
                            pc2Label: "آدرس PC2:",
                            pc2Desc: "192.168.10.20 /24 (متصل به پورت Fa0/1 سوئیچ SW2)",
                            channelLabel: "لینک منطقی تجمیع‌شده:",
                            channelDesc: "اینترفیس Port-channel 1 شامل پورت‌های Gi0/1-2 و Fa0/23-24"
                        },
                        switchesConfig: {
                            heading: "4. پیکربندی سوئیچ‌ها (SW1, SW2)",
                            intro: "دستورات زیر را روی سوئیچ‌ها وارد کنید تا پورت‌ها در Port-Channel 1 گروه‌بندی شده و مود Trunk روی آن فعال شود:"
                        },
                        verification: {
                            heading: "5. تست و اعتبارسنجی پایداری شبکه",
                            intro: "پس از کانفیگ، مراحل زیر را برای اعتبارسنجی انجام دهید:",
                            item1: "دستور show etherchannel summary را روی سوئیچ‌ها اجرا کرده و عبارت 'SU' (لایه ۲ و فعال) و حرف 'P' برای پورت‌ها را بررسی کنید.",
                            item2: "با دستور show interfaces port-channel 1 پهنای باند کل و وضعیت Trunk بودن را بررسی نمایید.",
                            item3: "از PC1 به PC2 پینگ مداوم بگیرید و همزمان یکی از کابل‌ها را قطع کنید؛ پینگ نباید قطع شود."
                        }
                    },
                    connections: {
                        heading: "3. اتصالات فیزیکی تجهیزات",
                        intro: "کابل‌کشی بین سیستم‌ها و چهار لینک بین سوئیچ‌ها مطابق جدول زیر است:",
                        headers: {
                            sourceDevice: "دستگاه مبدا",
                            sourcePort: "پورت مبدا",
                            destDevice: "دستگاه مقصد",
                            destPort: "پورت مقصد",
                            linkType: "نوع لینک"
                        },
                        linkTypes: {
                            accessLan: "لینک اتصال سیستم کاربران (کابل Straight-Through)",
                            lacpMember: "عضو گروه تجمیع لینک LACP"
                        }
                    },
                    pitfalls: {
                        heading: "6. اشتباهات رایج و نکات عیب‌یابی",
                        intro: "در صورت عدم تشکیل Port-Channel یا غیرفعال شدن پورت‌ها، موارد زیر را چک کنید:",
                        item1: "عدم تطابق Speed و Duplex: تمام پورت‌های عضو باید دقیقاً سرعت و حالت Duplex یکسان داشته باشند.",
                        item2: "تفاوت در تنظیمات VLAN: تمام پورت‌ها باید قبل از گروه‌بندی تنظیمات VLAN یا Trunk کاملاً مشابه داشته باشند.",
                        item3: "مد Passive در هر دو سمت: اگر هر دو طرف LACP در حالت Passive باشند، تجمیع لینک شکل نمی‌گیرد (حداقل یک سمت باید Active باشد)."
                    },
                    codeComments: {
                        sw1Title: "تنظیمات EtherChannel و پورت Access روی سوئیچ SW1",
                        sw2Title: "تنظیمات EtherChannel و پورت Access روی سوئیچ SW2",
                        accessPort: "پیکربندی اینترفیس Access برای سیستم کاربر",
                        lacpGroup: "گروه‌بندی اینترفیس‌ها در پروتکل LACP (مد Active)",
                        portChannelTrunk: "پیکربندی اینترفیس منطقی Port-Channel به عنوان Trunk"
                    },
                    conclusion: {
                        heading: "7. نتیجه‌گیری",
                        paragraph1: "فن‌آوری EtherChannel (LACP) یکی از حیاتی‌ترین مباحث در زیرساخت سوئیچینگ است که جلوی مسدود شدن لینک‌ها توسط STP را گرفته و پهنای باند خروجی را چند برابر می‌کند.",
                        paragraph2: "با تجمیع منطقی پورت‌ها، پایداری شبکه در برابر قطعی‌های فیزیکی کابل‌ها به ۱۰۰ درصد می‌رسد."
                    }
                },
                aclLab: {
                    badge: "آزمایشگاه عملی CCNA",
                    title: "پیکربندی Access Control Lists (Standard & Extended ACL)",
                    imageAlt: "دیاگرام فیلتر کردن ترافیک شبکه با ACL استاندارد و گسترده روی روتر سیسکو",
                    intro: "در این سناریو، نحوه ساخت و پیاده‌سازی لیست‌های کنترل دسترسی استاندارد (ACL 10) و گسترده (ACL 101) روی روتر سیسکو بررسی می‌شود. فیلتر کردن ترافیک بر اساس IP مبدا و همچنین محدودسازی سرویس‌های خاص (مسدود کردن HTTP در عین باز بودن پینگ) به صورت عملی آموزش داده می‌شود.",
                    meta: {
                        estimatedTime: "زمان تقریبی: ۱۲ دقیقه"
                    },
                    githubLink: "مشاهده سورس‌کد پروژه در گیت‌هاب",
                    labels: {
                        routerTerminal: "دستورات CLI برای روتر R1"
                    },
                    concepts: {
                        heading: "1. مفاهیم اولیه Access Control Lists (ACL)",
                        intro: "پیش از اجرای دستورات، درک تفاوت انواع لیست‌های کنترل دسترسی اهمیت دارد:",
                        items: {
                            standardAcl: {
                                title: "ACL استاندارد (1-99)",
                                desc: "ترافیک را فقط بر اساس آدرس IP مبدا فیلتر می‌کند. همیشه تا حد امکان نزدیک به مقصد قرار می‌گیرد."
                            },
                            extendedAcl: {
                                title: "ACL گسترده (100-199)",
                                desc: "ترافیک را بر اساس IP مبدا، IP مقصد، پروتکل (TCP/UDP/ICMP) و شماره پورت فیلتر می‌کند. نزدیک به مبدا قرار می‌گیرد."
                            },
                            implicitDeny: {
                                title: "قانون بستن ضمنی (Implicit Deny)",
                                desc: "در انتهای تمام ACLها یک قانون ناپیدای 'deny ip any any' وجود دارد؛ بنابراین نوشتن دستور permit برای ترافیک مجاز الزامی است."
                            },
                            placementRule: {
                                title: "استراتژی محل قرارگیری ACL",
                                desc: "اعمال صحیح ACL روی اینترفیس و جهت مناسب (Inbound یا Outbound) مانع از پردازش اضافی روی پردازنده روتر می‌شود."
                            }
                        }
                    },
                    sections: {
                        addressing: {
                            heading: "2. آدرس‌دهی و ساختار زیرشبکه‌ها",
                            intro: "توپولوژی از سه زیرشبکه مجزا تشکیل شده که از طریق روتر R1 به هم متصل هستند:",
                            pcConfigNote: "توجه داشته باشید که آدرس IP، Subnet Mask و Default Gateway باید به صورت دستی در بخش Desktop تنظیمات هر PC و سرور وارد شوند.",
                            pc1Label: "آدرس PC1 (Sales):",
                            pc1Desc: "192.168.10.10 /24 | گیت‌وی: 192.168.10.1 (شبکه داخلی LAN 1)",
                            pc2Label: "آدرس PC2 (HR):",
                            pc2Desc: "192.168.10.20 /24 | گیت‌وی: 192.168.10.1 (شبکه داخلی LAN 1)",
                            serverLabel: "آدرس Server1 (وب/پینگ):",
                            serverDesc: "172.16.1.100 /24 | گیت‌وی: 172.16.1.1 (شبکه سرورها)",
                            pc3Label: "آدرس PC3 (Remote):",
                            pc3Desc: "10.0.0.10 /24 | گیت‌وی: 10.0.0.1 (شبکه خارجی/خارج از سازمان)"
                        },
                        routerConfig: {
                            heading: "4. پیکربندی روتر R1",
                            intro: "دستورات زیر را روی روتر R1 وارد کنید تا اینترفیس‌ها تنظیم شده و قوانین Standard ACL و Extended ACL اعمال شوند:"
                        },
                        verification: {
                            heading: "5. مراحل اعتبارسنجی و تست قوانین",
                            intro: "پس از کانفیگ، مراحل زیر را برای تست صحت عملکرد ACLها انجام دهید:",
                            item1: "تست پینگ از PC1 به Server1 (172.16.1.100): موفقیت‌آمیز (مجاز توسط Standard ACL).",
                            item2: "تست پینگ از PC2 به Server1 (172.16.1.100): ناموفق / Destination Host Unreachable (مسدود شده توسط Standard ACL 10).",
                            item3: "تست پینگ از PC3 به Server1 (172.16.1.100): موفقیت‌آمیز (پروتکل ICMP توسط Extended ACL 101 مجاز است).",
                            item4: "تست مرور وب (HTTP) از PC3 به Server1 (172.16.1.100): ناموفق / Connection Timed Out (پورت 80 توسط Extended ACL 101 مسدود شده است)."
                        }
                    },
                    connections: {
                        heading: "3. اتصالات فیزیکی تجهیزات",
                        intro: "کابل‌کشی بین PCها، سوئیچ‌ها و اینترفیس‌های روتر مطابق جدول زیر است:",
                        headers: {
                            sourceDevice: "دستگاه مبدا",
                            sourcePort: "پورت مبدا",
                            destDevice: "دستگاه مقصد",
                            destPort: "پورت مقصد",
                            linkType: "نوع لینک"
                        },
                        linkTypes: {
                            lanAccess: "لینک شبکه داخلی (کابل Straight-Through)",
                            routerGateway: "لینک اتصال به گیت‌وی روتر (کابل Straight-Through)",
                            serverAccess: "لینک شبکه سرورها (کابل Straight-Through)",
                            wanLink: "لینک شبکه خارجی / ریموت"
                        }
                    },
                    pitfalls: {
                        heading: "6. اشتباهات رایج و نکات عیب‌یابی",
                        intro: "در زمان کار با ACLهای سیسکو مراقب این خطاهای متداول باشید:",
                        item1: "فراموش کردن Permit صریح: اگر دستور permit ip any any را در پایان ننویسید، کل ترافیک به دلیل Implicit Deny قطع خواهد شد.",
                        item2: "محل قرارگیری نادرست ACL: اگر Standard ACL بیش از حد به مبدا نزدیک باشد، دسترسی به مقاصد مجاز دیگر را هم به اشتباه می‌بندد.",
                        item3: "اشتباه در جهت Inbound یا Outbound: اعمال ACL در جهت اشتباه باعث می‌شود روتر قوانین را روی بسته‌ها اعمال نکند."
                    },
                    codeComments: {
                        r1Title: "تنظیمات اینترفیس‌ها و ACL روی روتر R1",
                        intLan1: "پیکربندی اینترفیس شبکه داخلی LAN 1 (Gi0/0)",
                        intServer: "پیکربندی اینترفیس شبکه سرورها (Gi0/1)",
                        intRemote: "پیکربندی اینترفیس شبکه خارجی (Gi0/2)",
                        standardAclDef: "تعریف Standard ACL 10 (مسدودسازی PC2 و مجاز بودن مابقی)",
                        applyStandardAcl: "اعمال Standard ACL 10 به صورت خروجی روی اینترفیس سرورها",
                        extendedAclDef: "تعریف Extended ACL 101 (مسدودسازی HTTP پورت 80 از PC3 به سرور و مجاز بودن IP)",
                        applyExtendedAcl: "اعمال Extended ACL 101 به صورت ورودی روی اینترفیس خارجی"
                    },
                    conclusion: {
                        heading: "7. نتیجه‌گیری",
                        paragraph1: "لیست‌های کنترل دسترسی (ACL) ابزار پایه و حیاتی امنیت در شبکه هستند که امکان مدیریت ترافیک بر اساس IP، پروتکل و شماره پورت را فراهم می‌کنند.",
                        paragraph2: "تسلط بر تفاوت Standard ACL و Extended ACL و محل قرارگیری آن‌ها، امنیت شبکه را بدون اختلال در ترافیک مجاز تضمین می‌کند."
                    }
                },
                dhcpSecurityLab: {
                    badge: "آزمایشگاه عملی CCNA",
                    title: "پیکربندی امنیت لایه ۲: Port Security و DHCP Snooping",
                    imageAlt: "دیاگرام پیاده‌سازی DHCP Snooping و Port Security روی سوئیچ سیسکو",
                    intro: "در این سناریو، نحوه ایمن‌سازی لایه دسترسی (Access Layer) در برابر سرورهای DHCP غیرمجاز (Rogue DHCP) و حملات MAC Spoofing بررسی می‌شود. با فعال‌سازی DHCP Snooping و Port Security روی سوئیچ سیسکو، ترافیک لایه ۲ کنترل و پورت‌های متخلف مسدود می‌گردند.",
                    meta: {
                        estimatedTime: "زمان تقریبی: ۱۵ دقیقه"
                    },
                    githubLink: "مشاهده سورس‌کد پروژه در گیت‌هاب",
                    labels: {
                        routerTerminal: "دستورات CLI برای روتر R1",
                        switchTerminal: "دستورات CLI برای سوئیچ SW1"
                    },
                    concepts: {
                        heading: "1. مفاهیم پایه امنیت لایه ۲",
                        intro: "مکانیزم‌های اصلی جهت حفاظت از پورت‌های لایه دسترسی روی سوئیچ‌های سیسکو:",
                        items: {
                            dhcpSnooping: {
                                title: "سرویس DHCP Snooping",
                                desc: "فیلتر کردن پیام‌های DHCP غیرمجاز. بسته‌های Offer و ACK صادر شده از سمت پورت‌های غیرقابل اعتماد (Untrusted) را بلافاصله Drop می‌کند."
                            },
                            portSecurity: {
                                title: "قابلیت Port Security",
                                desc: "محدود کردن دسترسی پورت سوئیچ به آدرس‌های MAC مشخص. جلوگیری از حملات پر کردن جدول مک (CAM Table Exhaustion)."
                            },
                            rogueDhcp: {
                                title: "سرور DHCP غیرمجاز (Rogue)",
                                desc: "سرور DHCP قلابی که توسط مهاجم راه انداخته می‌شود تا با اعطای Gateway اشتباه، ترافیک شبکه را سرقت (MITM) کند."
                            },
                            stickyMac: {
                                title: "یادگیری Sticky MAC",
                                desc: "شناسایی خودکار آدرس MAC متصل شده به پورت و ذخیره آن در کانفیگ فعال (Running Config) سوئیچ."
                            }
                        }
                    },
                    connections: {
                        heading: "2. اتصالات فیزیکی و نقش‌های امنیتی",
                        intro: "جدول کابل‌کشی تجهیزات و نقش‌های امنیتی تعریف‌شده روی سوئیچ SW1:",
                        headers: {
                            sourceDevice: "دستگاه مبدا",
                            sourcePort: "پورت مبدا",
                            destDevice: "دستگاه مقصد",
                            destPort: "پورت مقصد",
                            securityRole: "نقش و تنظیمات امنیتی"
                        },
                        roles: {
                            trustedAndPortSec: "پورت مورد اعتماد (Trusted) + فعال بودن Port Security",
                            trustedOnly: "پورت مورد اعتماد (Trusted Uplink)",
                            untrustedPortSec: "پورت غیر قابل اعتماد (Untrusted) + فعال بودن Port Security"
                        }
                    },
                    dhcpServerSetup: {
                        heading: "3. تنظیمات سرور DHCP (محیط گرافیکی)",
                        intro: "سرور اختصاصی شبکه از طریق رابط گرافیکی پکت تریسر با پارامترهای زیر راه‌اندازی گردید:",
                        step1Title: "۱. آدرس‌دهی IP استاتیک (تب Desktop):",
                        step2Title: "۲. تنظیمات سرویس DHCP (تب Services > DHCP):"
                    },
                    routerConfig: {
                        heading: "4. پیکربندی روتر (Default Gateway)",
                        intro: "تنظیم آدرس IP اینترفیس روتر R1 به عنوان Gateway شبکه 192.168.1.0/24:",

                    },
                    switchConfig: {
                        heading: "5. پیکربندی امنیتی سوئیچ SW1",
                        intro: "دستورات زیر را روی سوئیچ SW1 وارد کنید تا DHCP Snooping فعال شده و Port Security روی پورت‌های دسترسی اعمال گردد:"
                    },
                    verification: {
                        heading: "6. مراحل اعتبارسنجی و دستورات تست",
                        intro: "برای اطمینان از عملکرد صحیح مکانیزم‌های امنیتی، دستورات زیر را روی سوئیچ وارد کنید:",
                        item1: "مشاهده جدول Binding: دستور 'show ip dhcp snooping binding' لیست آدرس‌های IP و MAC مجاز دریافت شده از DHCP را نشان می‌دهد.",
                        item2: "بررسی وضعیت Port Security: دستور 'show port-security interface FastEthernet0/2' تعداد تخلفات و MAC ثبت‌شده روی پورت را نمایش می‌دهد.",
                        item3: "خلاصه وضعیت امنیت پورت‌ها: دستور 'show port-security' خلاصه کلی پورت‌های امن‌شده را ارائه می‌دهد."
                    },
                    codeComments: {
                        r1Title: "پیکربندی گیت‌وی روی روتر R1",
                        intGateway: "تنظیم اینترفیس شبکه داخلی متصل به پورت Fa0/24 سوئیچ",
                        sw1Title: "تنظیمات امنیتی سوئیچ SW1",
                        globalSnooping: "فعال‌سازی سراسری DHCP Snooping برای VLAN 1",
                        trustServerPort: "تعریف پورت سرور Fa0/1 به عنوان Trusted برای DHCP Snooping",
                        trustRouterPort: "تعریف پورت روتر Fa0/24 به عنوان Trusted برای DHCP Snooping",
                        portSecurityConfig: "اعمال Port Security با حد مجاز ۱ آدرس MAC، حالت Sticky و بسته شدن پورت در صورت تخلف"
                    },
                    conclusion: {
                        heading: "7. نتیجه‌گیری",
                        paragraph1: "ترکیب دو راهکار DHCP Snooping و Port Security یک لایه دفاعی قوی در لایه ۲ ایجاد می‌کند که مانع از فعالیت سرورهای غیرمجاز و حملات دستکاری آدرس MAC می‌شود.",
                        paragraph2: "تفکیک دقیق پورت‌های Trusted از Untrusted تضمین می‌کند که کلاینت‌های مجاز آدرس‌دهی صحیح را دریافت کرده و تهدیدات شبکه محلی به سرعت خنثی شوند."
                    }
                },
                adGpoLab: {
                    badge: "آزمایشگاه عملی MCSA",
                    title: "راه‌اندازی Active Directory Domain Services، GPO و FSRM",
                    intro: "در این سناریو، سرویس Active Directory DS همراه با ساختار تفکیک‌شده OUها پیاده‌سازی شده است. علاوه بر اعمال سیاست‌های امنیتی GPO (شامل Password Policy و Restricted Admins)، مدیریت اشتراک‌گذاری فایل‌ها، سطح دسترسی NTFS و محدودیت‌های حجم و فیلترینگ فایل با FSRM پیاده‌سازی شده است.",
                    meta: {
                        estimatedTime: "زمان تقریبی: ۳۵ دقیقه"
                    },
                    githubLink: "مشاهده اسکریپت‌ها و سورس‌کد در گیت‌هاب",
                    labels: {
                        psScript: "اسکریپت پاورشل: ساخت خودکار ساختار OU و گروه‌ها",
                        cmdTerminal: "دستورات اعتبارسنجی در محیط CLI",
                        step1OuTitle: "۳.۱ ساخت ساختار واحدهای سازمانی (OUs)",
                        step2GroupTitle: "۳.۲ ساخت گروه‌های امنیتی (Global Security Groups)",
                        step3UserTitle: "۳.۳ ساخت کاربران و عضویت در گروه‌ها",
                        psOuScript: "اسکریپت پاورشل: ایجاد ساختار OUها",
                        psGroupScript: "اسکریپت پاورشل: ایجاد گروه‌های امنیتی",
                        psUserScript: "اسکریپت پاورشل: ایجاد کاربران و عضویت در گروه‌ها",
                        psFsrmScript: "اسکریپت پاورشل: ساخت پوشه، مجوزهای NTFS و تنظیمات FSRM"
                    },
                    architecture: {
                        heading: "1. توپولوژی و آدرس‌دهی شبکه",
                        intro: "مشخصات سرورها و کلاینت‌های آزمایشگاهی برای دامین obk.local:",
                        headers: {
                            hostname: "نام دستگاه",
                            role: "نقش در دامین",
                            os: "سیستم‌عامل",
                            ip: "آدرس IP"
                        }
                    },
                    wizard: {
                        heading: "2. راهنمای گام‌به‌گام ویزارد نصب",
                        intro: "مراحل دقیق ارتقای یک ویندوز سرور 2022 مستقل به Domain Controller اصلی شبکه:",
                        phase1Title: "فاز اول: ویزارد Add Roles and Features",
                        phase1Steps: {
                            step1: "برنامه Server Manager را باز کرده و روی Manage > Add Roles and Features کلیک کنید.",
                            step2: "در صفحه Before You Begin روی گزینه Next کلیک کنید.",
                            step3: "گزینه 'Role-based or feature-based installation' را انتخاب کرده و Next بزنید.",
                            step4: "سرور DC1 را از لیست Server Pool انتخاب کرده و Next بزنید.",
                            step5: "تیک گزینه 'Active Directory Domain Services' را بزنید. در پنجره باز شده روی Add Features کلیک کنید.",
                            step6: "در صفحه Features از انتخاب بودن ابزار 'Group Policy Management' مطمئن شده و Next بزنید.",
                            step7: "توضیحات کلی AD DS را مطالعه کرده و روی Next کلیک کنید.",
                            step8: "در صفحه Confirmation روی Install کلیک کنید تا فرآیند نصب نقش‌ها آغاز شود."
                        },
                        phase2Title: "فاز دوم: ویزارد پروموت کردن سرور (AD DS Configuration Wizard)",
                        phase2Steps: {
                            step1: "روی آیکون پرچم/اعلامیه‌ها در بالای Server Manager کلیک کرده و گزینه 'Promote this server to a domain controller' را انتخاب کنید.",
                            step2: "گزینه 'Add a new forest' را انتخاب کرده و نام دامین اصلی را obk.local وارد کنید.",
                            step3: "سطح عملکردی (Functional Level) را روی Windows Server 2016 تنظیم کنید. تیک‌های DNS و Global Catalog را زده و رمز عبور DSRM را وارد کنید.",
                            step4: "در بخش DNS Options هشدار عدم وجود مرکز بالادستی را نادیده گرفته و Next بزنید.",
                            step5: "نام NetBIOS پیشنهادی (OBK) را تایید کرده و Next بزنید.",
                            step6: "مسیرهای پیش‌فرض دیتابیس، لوگ‌ها و SYSVOL را دست‌نخورده باقی گذاشته و روی Next کلیک کنید.",
                            step7: "پس از تایید پیش‌نیازها در صفحه Prerequisites Check، روی Install کلیک کنید. سرور پس از اتمام نصب ریستارت می‌شود."
                        }
                    },
                    ouStructure: {
                        heading: "3. ساختار واحدهای سازمانی (OU) و گروه‌ها",
                        intro: "طراحی منطقی واحدهای سازمانی (OUs) جهت اعمال سیاست‌های GPO و تعریف گروه‌های امنیتی (Global Group) طبق استاندارد AGDLP:"
                    },
                    gpo: {
                        heading: "4. تنظیمات Group Policy Objects (GPO)",
                        intro: "سیاست‌های گروهی جهت ایمن‌سازی متمرکز (Security Hardening) و اعمال محدودیت‌های دسترسی روی سطح دامین پیاده‌سازی شده‌اند.",
                        targetLabel: "هدف اعمال",
                        items: {
                            passwordPolicy: {
                                title: "Default Domain Policy (Password & Lockout)",
                                target: "کل دامین (obk.local)",
                                desc: "الزام رمز عبور پیچیده (حداقل ۱۰ کاراکتر) و قفل شدن خودکار حساب کاربری پس از ۳ تلاش ناموفق برای مقابله با حملات Brute-Force."
                            },
                            hardeningPolicy: {
                                title: "Security Hardening Policy",
                                target: "OU=Workstations",
                                desc: "غیرفعال‌سازی پروتکل‌های ناامن قدیمی (LM/NTLMv1)، مسدودسازی اجرای فایل‌های ناشناس در مسیرهای Temp و کنترل دسترسی‌های محلی."
                            },
                            desktopPolicy: {
                                title: "User Environment Policy",
                                target: "OU=Departments",
                                desc: "تنظیم متمرکز والپیپر سازمانی، نمایش پیام قانونی پیش از ورود (Logon Banner) و محدودسازی دسترسی به Control Panel."
                            },
                            localAdminPolicy: {
                                title: "Restricted Local Admins Policy",
                                target: "OU=Workstations",
                                desc: "حذف دسترسی کاربران عادی از گروه Administrators محلی سیستم‌ها جهت جلوگیری از تغییرات غیرمجاز."
                            }
                        }
                    },
                    fsrmWizard: {
                        heading: "5. راهنمای گام‌به‌گام FSRM و سطوح دسترسی NTFS",
                        intro: "پیکربندی مدیریت فایل‌سرور، اشتراک‌گذاری داده‌ها، اعمال مجوزهای NTFS و سهمیه‌بندی دیسک با استفاده از کنسول FSRM:",
                        phase1Title: "فاز اول: نصب نقش FSRM در Server Manager",
                        phase1Steps: {
                            step1: "کنسول Server Manager را باز کرده و وارد بخش Add Roles and Features شوید.",
                            step2: "در بخش Server Roles، زیرمجموعه File and Storage Services > File and iSCSI Services را باز کرده و تیک File Server Resource Manager را بزنید.",
                            step3: "روی دکمه Add Features کلیک کرده و فرایند نصب را به اتمام برسانید."
                        },
                        phase2Title: "فاز دوم: ایجاد SMB Share و تنظیم مجوزهای NTFS",
                        phase2Steps: {
                            step1: "در درایو سرور پوشه HR_Data را ایجاد کرده و وارد Properties > Sharing شوید.",
                            step2: "پوشه را به اشتراک گذاشته و دسترسی SMB را برای گروه GG_HR_Dept روی Change تنظیم کنید.",
                            step3: "وارد تب Security (تنظیمات NTFS) شده، میراث‌بری را غیرفعال کرده و مجوز Modify را مستقیماً به گروه GG_HR_Dept اختصاص دهید."
                        },
                        phase3Title: "فاز سوم: اعمال Quota و فیلترینگ فایل (File Screen)",
                        phase3Steps: {
                            step1: "کنسول File Server Resource Manager را باز کنید.",
                            step2: "از بخش Quota Management یک 2GB Hard Quotas روی پوشه HR_Data تعریف کنید.",
                            step3: "از بخش File Screen Management الگوی Block Executable Files را روی پوشه فعال کنید تا از ذخیره فایل‌های مخرب جلوگیری شود."
                        }
                    },
                    verification: {
                        heading: "6. جوین کردن کلاینت و اعتبارسنجی سیاست‌ها",
                        intro: "مراحل اتصال کلاینت Client-01 (ویندوز 10) به دامین و تست سیاست‌ها:",
                        step1: "تنظیم آدرس Preferred DNS کلاینت روی IP سرور دامین (192.168.10.10).",
                        step2: "ورود به System Properties، تغییر بخش Member Of به Domain و وارد کردن عبارت obk.local و لاگین با اکانت Administrator.",
                        step3: "لاگین با کاربر غیر IT (user.hr) و بررسی مسدود بودن Control Panel و فعال بودن Wallpaper سازمانی."
                    },
                    conclusion: {
                        heading: "7. نتیجه‌گیری",
                        paragraph1: "پیاده‌سازی اکتیو دایرکتوری و GPO در کنار مدیریت فایل‌سرور با FSRM، احراز هویت متمرکز، ایمن‌سازی سیستم‌ها و کنترل دقیق روی فضای ذخیره‌سازی شبکه را تضمین می‌کند.",
                        paragraph2: "استفاده از الگوی AGDLP و کنترل دسترسی‌های NTFS همراه با فیلترینگ فایل، ریسک نفوذ و انتشار باج‌افزارها را به حداقل می‌رساند."
                    },
                    fsrm: {
                        heading: 'مدیریت فایل‌سرور و سطوح دسترسی (FSRM & NTFS)',
                        intro: 'طراحی ساختار اشتراک‌گذاری داده‌ها، اعمال دقیق مجوزهای امنیتی NTFS و محدودسازی حجم دیسک کاربران.',
                        items: {
                            ntfs: {
                                title: 'مجوزهای NTFS و SMB Share',
                                desc: 'تنظیم دسترسی‌های Read/Modify بر اساس گروه دامنه‌ای کاربران (AGDLP) و رعایت اصل حداقل دسترسی (Least Privilege).'
                            },
                            quota: {
                                title: 'سهمیه‌بندی دیسک (FSRM Quota)',
                                desc: 'تعریف محدودیت‌های Hard Quota و Soft Quota روی پوشه‌های به اشتراک‌گذاشته‌شده جهت جلوگیری از پر شدن دیسک سرور.'
                            },
                            antiRansomware: {
                                title: 'فیلترینگ فایل و ضد باج‌افزار',
                                desc: 'مسدودسازی پسوندهای مخرب (مانند .exe و فایل‌های مشکوک باج‌افزار) و ارسال هشدار خودکار در FSRM.'
                            }
                        }
                    },
                    labels: {
                        psFsrmScript: 'اسکریپت پیکربندی SMB Share، مجوزهای NTFS و FSRM'
                    },
                    fsrmWizard: {
                        heading: '5. پیکربندی گام‌به‌گام فایل‌سرور، NTFS و FSRM',
                        intro: 'مراحل عملی نصب کنسول FSRM، ساخت پوشه‌های به اشتراک‌گذاشته‌شده، تعیین سطوح دسترسی و اعمال محدودیت‌های دیسک.',
                        phase1Title: 'فاز اول: نصب نقش FSRM در Server Manager',
                        phase1Steps: {
                            step1: 'کنسول Server Manager را باز کرده و روی Add Roles and Features کلیک کنید.',
                            step2: 'در بخش Installation Type گزینه Role-based or feature-based installation را انتخاب کنید.',
                            step3: 'سرور هدف (DC1) را از لیست Server Pool انتخاب کرده و به مرحله بعد بروید.',
                            step4: 'در بخش Roles، زیرمجموعه File and Storage Services > File and iSCSI Services را باز کرده و گزینه File Server Resource Manager را علامت بزنید.',
                            step5: 'روی Add Features کلیک کنید و در نهایت با زدن دکمه Install فرایند نصب را به پایان برسانید.'
                        },
                        phase2Title: 'فاز دوم: ایجاد پوشه، SMB Share و تنظیم مجوزهای NTFS',
                        phase2Steps: {
                            step1: 'در درایو دلخواه یک پوشه جدید به نام HR_Data ایجاد کنید.',
                            step2: 'روی پوشه راست‌کلیک کرده، Properties را بزنید و وارد تب Sharing > Advanced Sharing شوید.',
                            step3: 'تیک Share this folder را بزنید و در بخش Permissions، دسترسی گروه GG_HR_Dept را روی Change/Read قرار دهید.',
                            step4: 'وارد تب Security (تنظیمات NTFS) شده و روی Advanced کلیک کنید.',
                            step5: 'میراث‌بری (Inheritance) را غیرفعال کرده و مجوز Modify را مستقیماً به گروه GG_HR_Dept اختصاص دهید.'
                        },
                        phase3Title: 'فاز سوم: پیکربندی سهمیه‌بندی (Quota) و File Screen در FSRM',
                        phase3Steps: {
                            step1: 'از مسیر Administrative Tools کنسول File Server Resource Manager را باز کنید.',
                            step2: 'در منوی سمت چپ روی Quota Management > Quotas راست‌کلیک کرده و Create Quota را بزنید.',
                            step3: 'مسیر پوشه C:\\Shares\\HR_Data را انتخاب کرده و یک الگوی 2GB Hard Quota روی آن اعمال کنید.',
                            step4: 'از منوی سمت چپ وارد File Screen Management شوید و گزینه Create File Screen را انتخاب کنید.',
                            step5: 'مسیر پوشه را مشخص کرده و الگوی Block Executable Files را برای جلوگیری از ذخیره فایل‌های اجرایی و مخرب فعال کنید.'
                        }
                    },
                    labels: {
                        psScript: "اسکریپت پاورشل: ساخت خودکار ساختار OU و گروه‌ها",
                        cmdTerminal: "دستورات اعتبارسنجی در محیط CLI",
                        step1OuTitle: "۳.۱ ساخت ساختار واحدهای سازمانی (OUs)",
                        step2GroupTitle: "۳.۲ ساخت گروه‌های امنیتی (Global Security Groups)",
                        step3UserTitle: "۳.۳ ساخت کاربران و عضویت در گروه‌ها",
                        psOuScript: "اسکریپت پاورشل: ایجاد ساختار OUها",
                        psGroupScript: "اسکریپت پاورشل: ایجاد گروه‌های امنیتی",
                        psUserScript: "اسکریپت پاورشل: ایجاد کاربران و عضویت در گروه‌ها",
                        psFsrmScript: "اسکریپت پاورشل جهت اتوماسیون کامل FSRM و NTFS"
                    }
                },
                dnsDhcpLab: {
                    header: {
                        badge: "آزمایشگاه عملی MCSA",
                        title: "پیاده‌سازی متمرکز DNS و DHCP و Failover در ویندوز سرور",
                        description: "پیکربندی کامل سرویس‌های زیرساختی DNS و DHCP به همراه Failover (پشتیبان‌گیری ۵۰/۵۰)، رزرو اختصاصی IP و تنظیم زون‌های Forward و Reverse در محیط اکتیو دایرکتوری."
                    },
                    architecture: {
                        heading: "معماری سناریو و جدول آدرس‌دهی",
                        intro: "جدول زیر مشخصات سرورها و کلاینت‌های موجود در این آزمایشگاه شبکه را نشان می‌دهد.",
                        headers: {
                            hostname: "نام میزبان (Hostname)",
                            role: "نقش سرویس",
                            os: "سیستم‌عامل",
                            ip: "آدرس IP / ماسک"
                        },
                        rows: {
                            dc1: {
                                role: "Domain Controller اصلی / Primary DNS",
                                os: "Windows Server 2022"
                            },
                            dhcp1: {
                                role: "سرور DHCP اصلی (Failover Partner 1)",
                                os: "Windows Server 2022"
                            },
                            dhcp2: {
                                role: "سرور DHCP ثانویه (Failover Partner 2)",
                                os: "Windows Server 2022"
                            },
                            printer: {
                                role: "پرینتر شبکه بخش منابع انسانی (تخصیص Static Reservation)",
                                os: "Embedded Firmware"
                            }
                        },
                        note: "نکته معماری: برای پایداری سرویس‌ها، دو سرور DHCP در حالت Load Balance با تقسیم بار ۵۰/۵۰ همگام‌سازی شده‌اند و کلیه زون‌های DNS به صورت Active Directory-Integrated ذخیره می‌شوند."
                    },
                    tabs: {
                        all: "همه موارد",
                        gui: "محیط گرافیکی (GUI)",
                        ps: "پاورشل (PowerShell)"
                    },
                    steps: {
                        heading: "مراحل اجرای سناریو",
                        intro: "راه‌اندازی گام‌به‌گام را می‌توانید هم از طریق محیط گرافیکی و هم با دستورات PowerShell دنبال کنید.",
                        dhcpSetup: {
                            title: "ایجاد و تنظیم Scope اصلی DHCP",
                            desc: "تعریف محدوده آدرس‌دهی برای کلاینت‌های شبکه داخلی و تنظیم گزینه‌های Scope شامل Gateway و DNS Server.",
                            guiTitle: "مراحل انجام در محیط گرافیکی (GUI)",
                            guiSteps: [
                                "کنسول DHCP را از بخش Administrative Tools باز کنید.",
                                "روی IPv4 راست‌کلیک کرده و گزینه New Scope را انتخاب کنید.",
                                "نام Scope را LAN_Clients_Scope قرار دهید.",
                                "محدوده IP را از 192.168.10.100 تا 192.168.10.200 با Subnet Mask 255.255.255.0 تعیین کنید.",
                                "در بخش Scope Options، آدرس Router (192.168.10.1) و DNS Server (192.168.10.10) را وارد نمایید.",
                                "Scope را فعال (Activate) کنید."
                            ],
                            psTitle: "دستورات PowerShell مربوطه",
                            psComments: {
                                step1: "نصب رول DHCP Server به همراه ابزارهای مدیریتی",
                                step2: "اعتبارسنجی (Authorize) سرور DHCP در اکتیو دایرکتوری",
                                step3: "ایجاد Scope جدید برای کلاینت‌های شبکه داخلی",
                                step4: "تنظیم پارامترهای Scope (Gateway, DNS Server, Domain Name)"
                            }
                        },
                        failoverReservation: {
                            title: "تنظیم IP Reservation و DHCP Failover",
                            desc: "رزرو آدرس ثابت برای تجهیزات خاص مانند پرینترها و پیکربندی ساختار پایداری high availability بین دو سرور DHCP.",
                            guiTitle: "مراحل انجام در محیط گرافیکی (GUI)",
                            guiSteps: [
                                "در کنسول DHCP، وارد بخش Reservations شده و New Reservation را انتخاب کنید.",
                                "نام، آدرس IP (192.168.10.50) و MAC Address پرینتر HR را وارد کنید.",
                                "روی Scope راست‌کلیک کرده و گزینه Configure Failover را انتخاب نمایید.",
                                "سرور DHCP2 (dhcp2.obk.local) را به عنوان Partner Server انتخاب کنید.",
                                "حالت را روی Load Balance (50/50) تنظیم کرده و یک Shared Secret مشخص کنید."
                            ],
                            psTitle: "دستورات PowerShell مربوطه",
                            psComments: {
                                step1: "ایجاد رزرو IP ثابت برای پرینتر بخش منابع انسانی",
                                step2: "پیکربندی DHCP Failover بین دو سرور (حالت Load Balancing 50/50)"
                            }
                        },
                        dnsSetup: {
                            title: "پیکربندی زون‌های DNS و رکوردها",
                            desc: "ایجاد زون Reverse Lookup، اضافه کردن رکوردهای A و CNAME و تنظیم Forwarder برای دسترسی به اینترنت.",
                            guiTitle: "مراحل انجام در محیط گرافیکی (GUI)",
                            guiSteps: [
                                "کنسول DNS Manager را باز کرده و روی Reverse Lookup Zones راست‌کلیک کنید.",
                                "یک New Zone از نوع Primary و AD-Integrated با شناسه شبکه 192.168.10.0/24 ایجاد کنید.",
                                "در Forward Lookup Zone مربوط به obk.local، یک رکورد A جدید برای app-server ثبت کرده و تیک Create PTR را بزنید.",
                                "یک رکورد CNAME با نام erp ایجاد کرده و آن را به app-server.obk.local متصل کنید.",
                                "در خواص سرور DNS، بخش Forwarders را باز کرده و آدرس‌های 1.1.1.1 و 8.8.8.8 را اضافه کنید."
                            ],
                            psTitle: "دستورات PowerShell مربوطه",
                            psComments: {
                                step1: "ایجاد زون Reverse Lookup برای ساب‌نت 192.168.10.x",
                                step2: "افزودن رکورد A و ساخت همزمان رکورد PTR متناظر",
                                step3: "افزودن رکورد المستعار (CNAME Alias)",
                                step4: "تنظیم Forwarderهای عمومی جهت هدایت درخواست‌های عمومی"
                            }
                        },
                    },
                    conclusion: {
                        heading: "نتیجه‌گیری و دستاوردهای سناریو",
                        desc: "در این آزمایشگاه، زیرساخت شبکه با موفقیت پیاده‌سازی و عملیاتی شد. دستاوردهای کلیدی این سناریو عبارتند از:",
                        points: [
                            "پایداری بالایی در ارائه سرویس DHCP با مکانیزم Load Balancing (توزیع بار ۵۰/۵۰) بین دو سرور مجزا ایجاد شد.",
                            "فرآیند رزرو آدرس IP ثابت برای تجهیزات سخت‌افزاری مانند پرینتر شبکه به‌صورت استاندارد صورت گرفت.",
                            "پاسخ‌گویی به درخواست‌های نام‌گذاری داخلی و معکوس (Reverse Lookup) به‌همراه هدایت ترافیک اینترنت از طریق Forwarderها عملیاتی گردید."
                        ]
                    }
                },
                sqlLab: {
                    badge: "آزمایشگاه عملی SQL",
                    title: "پایگاه داده Microsoft SQL Server و T-SQL",
                    intro: "در این سناریو به بررسی جامع ساختار پایگاه داده SQL Server، نحوه نصب، مفاهیم کلیدی، دستورات عملیاتی T-SQL و مدیریت گرافیکی از طریق SSMS می‌پردازیم.",
                    meta: {
                        estimatedTime: "مدت زمان تقریبی: ۴۵ دقیقه"
                    },
                    concepts: {
                        heading: "1. مفاهیم و اصطلاحات پایه",
                        intro: "آشنایی با تعاریف کلیدی، اختصارات و ساختارهای پایه در SQL Server:",
                        acronyms: {
                            sql: {
                                full: "Structured Query Language",
                                desc: "زبان استاندارد بین‌المللی برای مدیریت، پرس‌وجو و تعامل با پایگاه‌های داده رابطه‌ای است. این زبان به شما اجازه می‌دهد جدول بسازید، داده‌ها را ذخیره، ویرایش یا حذف کنید. تقریباً تمامی سیستم‌های مدیریت دیتابیس معروف از استاندارد SQL پشتیبانی می‌کنند."
                            },
                            tsql: {
                                full: "Transact-SQL",
                                desc: "توسعه اختصاصی مایکروسافت بر روی زبان استاندارد SQL است که قابلیت‌های پیشرفته‌ای ارائه می‌دهد. T-SQL امکاناتی مانند متغیرها، شرط‌ها (IF)، حلقه‌ها (WHILE) و مدیریت خطا را اضافه می‌کند. تمام اسکریپت‌ها و Stored Procedureها در SQL Server با این زبان نوشته می‌شوند."
                            },
                            ssms: {
                                full: "SQL Server Management Studio",
                                desc: "نرم‌افزار گرافیکی (GUI) رسمی مایکروسافت برای پیکربندی، مدیریت و توسعه SQL Server است. با SSMS می‌توانید بدون نیاز به کدنویسی پیچیده، دیتابیس‌ها را به‌صورت بصری مدیریت کنید. همچنین شامل محیط Query Editor برای نوشتن و اجرای دستورات T-SQL می‌باشد."
                            }
                        },
                        cards: {
                            rdbms: {
                                title: "RDBMS & Instance",
                                desc: "سیستم مدیریت دیتابیس رابطه‌ای که اطلاعات را در جدول‌ها ذخیره می‌کند. هر سرویس مجزای SQL Server روی سرور یک Instance نامیده می‌شود."
                            },
                            auth: {
                                title: "Authentication Modes",
                                desc: "پشتیبانی از دو حالت Windows Authentication (اعتبارسنجی یکپارچه با اکتیو دایرکتوری) و Mixed Mode (ترکیب احراز هویت ویندوز و SQL)."
                            },
                            systemDbs: {
                                title: "System Databases",
                                desc: "پایگاه‌های داده پیش‌فرض شامل master ،msdb ،model و tempdb که کارکردهای حیاتی سرور و پیکربندی‌های اصلی را نگهداری می‌کنند."
                            },
                            dataTypes: {
                                title: "Data Types",
                                desc: "انواع داده متداول مانند INT برای اعداد، NVARCHAR برای متن‌های فارسی/یونیکد، DECIMAL برای مقادیر مالی و DATETIME برای تاریخ استفاده می‌شوند."
                            },
                            constraints: {
                                title: "Constraints & Keys",
                                desc: "کلید اصلی (Primary Key) یکتایی هر سطر را تضمین می‌کند و کلید خارجی (Foreign Key) ارتباط بین جدول‌ها و یکپارچگی ارجاعی داده‌ها را حفظ می‌نماید."
                            },
                            indexes: {
                                title: "Indexes",
                                desc: "ساختارهای داده‌ای ویژه‌ای که سرعت جستجو و اجرای کوری‌ها را به‌شدت افزایش می‌دهند (شامل ایندکس‌های Clustered و Non-Clustered)."
                            }
                        }
                    },
                    wizard: {
                        heading: "2. مراحل نصب و پیکربندی SQL Server",
                        intro: "راهنمای گام‌به‌گام نصب سرویس‌دهنده SQL Server به همراه نمونه تنظیمات محیط آزمایشگاهی:",
                        steps: {
                            step1: {
                                title: "شروع فرایند نصب (Setup)",
                                desc: "اجرای فایل setup.exe و انتخاب گزینه New SQL Server stand-alone installation از بخش Installation."
                            },
                            step2: {
                                title: "انتخاب نسخه (Product Key & Edition)",
                                desc: "انتخاب نسخه رایگان Developer یا Evaluation جهت استفاده در محیط‌های تست و توسعه."
                            },
                            step3: {
                                title: "انتخاب ویژگی‌ها (Feature Selection)",
                                desc: "علامت زدن گزینه Database Engine Services که هسته اصلی پردازش داده‌ها می‌باشد."
                            },
                            step4: {
                                title: "پیکربندی نمونه (Instance Configuration)",
                                desc: "انتخاب حالت Default Instance یا تعیین یک Named Instance دلخواه برای سرور."
                            },
                            step5: {
                                title: "تنظیمات احراز هویت (Server Configuration)",
                                desc: "تعیین حالت Mixed Mode و مشخص کردن رمز عبور برای کاربر ارشد سیستم (sa) و افزودن کاربر ویندوز جاری."
                            },
                            step6: {
                                title: "پایان نصب و بررسی سرویس‌ها",
                                desc: "تکمیل فرایند نصب و اطمینان از در حال اجرا بودن سرویس MSSQLSERVER در پنجره Services ویندوز."
                            }
                        }
                    },
                    practical: {
                        heading: "3. عملیات کاربردی ساخت پایگاه داده و جدول",
                        intro: "در این بخش دو روش مدیریت گرافیکی (SSMS) و استفاده از دستورات T-SQL را بررسی می‌کنیم:",
                        ssmsTitle: "روش مدیریت گرافیکی (SSMS Wizard)",
                        ssmsSteps: {
                            step1: "اتصال به سرویس‌دهنده از طریق SSMS و راست‌کلیک روی پوشه Databases و انتخاب New Database.",
                            step2: "وارد کردن نام پایگاه داده و تنظیم پارامترهای اولیه فایل‌های داده (.mdf) و لوگ (.ldf).",
                            step3: "باز کردن دیتابیس ساخته‌شده، راست‌کلیک روی Tables و انتخاب New ➔ Table.",
                            step4: "تعریف ستون‌ها، تعیین Data Type، تعیین Primary Key و ذخیره‌سازی جدول."
                        },
                        tsqlTitle: "روش دستورات T-SQL (کدنویسی دیتابیس)",
                        tsqlDesc: "برای سناریوهای توسعه، اتوماسیون و اسکریپت‌نویسی، استفاده از دستورات T-SQL استانداردترین و سریع‌ترین روش است:"
                    },
                    backup: {
                        heading: "4. عملیات پشتیبان‌گیری و بازیابی (Backup & Restore)",
                        intro: "روش‌های گرافیکی و کدی جهت پشتیبان‌گیری و بازیابی اطلاعات پایگاه داده:",
                        gui: {
                            backupTitle: "مراحل پشتیبان‌گیری گرافیکی (Backup Wizard)",
                            backupSteps: {
                                step1: "در SSMS روی پایگاه داده راست‌کلیک کرده و مسیر Tasks ➔ Back Up را انتخاب کنید.",
                                step2: "در پنجره باز شده، نوع پشتیبان‌گیری (Full یا Differential) را تعیین کنید.",
                                step3: "در بخش Destination، مسیر ذخیره‌سازی فایل با پسوند .bak را تنظیم کنید.",
                                step4: "در تب Media Options می‌توانید فشرده‌سازی (Compress Backup) را فعال کنید.",
                                step5: "روی دکمه OK کلیک کنید تا فرآیند شروع و پیغام موفقیت‌آمیز ظاهر شود."
                            },
                            restoreTitle: "مراحل بازیابی گرافیکی (Restore Wizard)",
                            restoreSteps: {
                                step1: "روی پوشه Databases یا پایگاه داده مقصد راست‌کلیک کرده و مسیر Tasks ➔ Restore ➔ Database را بزنید.",
                                step2: "گزینه Device را انتخاب کرده و فایل بک‌آپ (.bak) خود را فراخوانی کنید.",
                                step3: "در بخش Target Database اسم پایگاه داده مقصد را مشخص نمایید.",
                                step4: "در صورت بازنویسی روی دیتابیس موجود، در تب Options گزینه Overwrite the existing database (WITH REPLACE) را علامت بزنید.",
                                step5: "روی دکمه OK کلیک کنید تا عملیات بازیابی تکمیل گردد."
                            }
                        }
                    },
                    importExport: {
                        heading: "5. ورود و خروج اطلاعات (Import & Export Wizard)",
                        intro: "انتقال داده‌ها بین SQL Server و سایر منابع ذخیره‌سازی مانند Excel یا CSV:",
                        gui: {
                            importTitle: "مراحل ورود داده (Import Data Wizard)",
                            importSteps: {
                                step1: "روی دیتابیس راست‌کلیک کرده و مسیر Tasks ➔ Import Data را باز کنید.",
                                step2: "در بخش Data Source، منبع ورود داده (مانند فایلهای اکسل یا Flat File CSV) را انتخاب کنید.",
                                step3: "در بخش Destination، گزینه SQL Server Native Client یا OLE DB Provider را تنظیم نمایید.",
                                step4: "نحوه انتقال را بر روی Copy data from one or more tables قرار دهید.",
                                step5: "جدول‌ها و نگاشت فیلدها (Column Mapping) را بررسی کرده و روی Finish کلیک کنید."
                            },
                            exportTitle: "مراحل خروج داده (Export Data Wizard)",
                            exportSteps: {
                                step1: "روی دیتابیس مورد نظر راست‌کلیک کرده و مسیر Tasks ➔ Export Data را انتخاب کنید.",
                                step2: "مبدا داده‌ها (Data Source) را روی پایگاه داده جاری تایید کنید.",
                                step3: "مقصد خروجی (Destination) را تعیین کنید (مثلاً ایجاد یک فایل Excel یا CSV جدید).",
                                step4: "جدول‌ها یا کوری‌های مدنظر جهت خروجی‌گرفتن را علامت بزنید.",
                                step5: "مراحل ویزارد را تایید کرده و فرآیند خروجی‌گیری را اجرا نمایید."
                            }
                        }
                    },
                    conclusion: {
                        heading: "6. جمع‌بندی",
                        paragraph1: "تسلط بر SQL Server نیازمند درک همزمان ابزارهای مدیریتی گرافیکی (SSMS) برای کارهای روزمره و دستورات T-SQL برای توسعه برنامه‌ها و اتوماسیون است. مراقبت از دیتابیس با پشتیبان‌گیری منظم و انتقال صحیح داده‌ها از ارکان اصلی مدیریت دیتابیس محسوب می‌شود."
                    }
                },
            },
        },
        // notFound page fa language
        notFound: {
            badge: "کد خطا",
            title: "۴۰۴",
            subtitle: "صفحه مورد نظر پیدا نشد",
            description: "صفحه‌ای که به دنبال آن هستید وجود ندارد یا آدرس آن تغییر کرده است.",
            backHome: "بازگشت به صفحه اصلی"
        },
    },
}

const i18n = createI18n({
    legacy: true,
    globalInjection: true,
    locale,
    fallbackLocale: DEFAULT_LOCALE,
    messages,
})

const applyDirection = (localeValue) => {
    if (typeof document !== 'undefined') {
        document.documentElement.dir = localeValue === 'fa' ? 'rtl' : 'ltr'
    }
}

applyDirection(locale)

export { applyDirection }
export default i18n
