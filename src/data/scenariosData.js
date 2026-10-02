export const initialStates = {
  adapterEnabled: true,
  dhcpEnabled: true,
  ipAddress: '192.168.1.105',
  subnetMask: '255.255.255.0',
  gateway: '192.168.1.1',
  dnsPrimary: '192.168.1.1',
  dnsSecondary: '8.8.8.8',
  dnsCacheCorrupted: false,
  dhcpServiceRunning: true,
  dnscacheServiceRunning: true,
  gatewayReachable: true,
  internetReachable: true,
  dnsResolutionWorking: true
};

export const scenarios = [
  {
    id: 'dns_corrupted_cache',
    titleKey: 'scenarios.dns_corrupted.title',
    descKey: 'scenarios.dns_corrupted.desc',
    symptomsKey: 'scenarios.dns_corrupted.symptoms',
    initialState: {
      ...initialStates,
      dnsCacheCorrupted: true,
      dnsResolutionWorking: false
    },
    requiredActions: ['FLUSH_DNS'],
    solutionHintKey: 'scenarios.dns_corrupted.hint',
    expectedRootCauseKey: 'scenarios.dns_corrupted.rootCause'
  },
  {
    id: 'dhcp_apipa_issue',
    titleKey: 'scenarios.dhcp_apipa.title',
    descKey: 'scenarios.dhcp_apipa.desc',
    symptomsKey: 'scenarios.dhcp_apipa.symptoms',
    initialState: {
      ...initialStates,
      dhcpEnabled: true,
      ipAddress: '169.254.120.44',
      subnetMask: '255.255.0.0',
      gateway: '0.0.0.0',
      dnsPrimary: '0.0.0.0',
      dnsSecondary: '0.0.0.0',
      gatewayReachable: false,
      internetReachable: false,
      dnsResolutionWorking: false,
      dhcpServiceRunning: false
    },
    requiredActions: ['START_DHCP_SERVICE', 'RENEW_DHCP'],
    solutionHintKey: 'scenarios.dhcp_apipa.hint',
    expectedRootCauseKey: 'scenarios.dhcp_apipa.rootCause'
  },
  {
    id: 'wrong_static_gateway',
    titleKey: 'scenarios.wrong_gateway.title',
    descKey: 'scenarios.wrong_gateway.desc',
    symptomsKey: 'scenarios.wrong_gateway.symptoms',
    initialState: {
      ...initialStates,
      dhcpEnabled: false,
      ipAddress: '192.168.1.50',
      subnetMask: '255.255.255.0',
      gateway: '192.168.1.254',
      gatewayReachable: false,
      internetReachable: false,
      dnsResolutionWorking: false
    },
    requiredActions: ['FIX_GATEWAY'],
    solutionHintKey: 'scenarios.wrong_gateway.hint',
    expectedRootCauseKey: 'scenarios.wrong_gateway.rootCause'
  },
  {
    id: 'disabled_adapter_dns_service',
    titleKey: 'scenarios.adapter_disabled.title',
    descKey: 'scenarios.adapter_disabled.desc',
    symptomsKey: 'scenarios.adapter_disabled.symptoms',
    initialState: {
      ...initialStates,
      adapterEnabled: false,
      ipAddress: '0.0.0.0',
      subnetMask: '0.0.0.0',
      gateway: '0.0.0.0',
      gatewayReachable: false,
      internetReachable: false,
      dnsResolutionWorking: false
    },
    requiredActions: ['ENABLE_ADAPTER'],
    solutionHintKey: 'scenarios.adapter_disabled.hint',
    expectedRootCauseKey: 'scenarios.adapter_disabled.rootCause'
  }
];

export const simulatorI18nMessages = {
  fa: {
    troubleshooting: {
      title: 'شبیه‌ساز عیب‌یابی شبکه و ویندوز',
      subtitle: 'یک محیط تعاملی برای عیب‌یابی مشکلات واقعی زیرساخت و شبکه',
      selectScenario: 'انتخاب سناریو',
      symptoms: 'نشانی‌ها و علائم گزارش‌شده',
      systemActions: 'اقدامات و ابزارهای سیستم',
      terminalHeader: 'ترمینال عیب‌یابی (CMD)',
      investigationLog: 'لاگ بررسی‌ها و تست‌ها',
      getHint: 'دریافت راهنمایی',
      solveScenario: 'بررسی و ثبت گزارش نهایی',
      resetScenario: 'بازنشانی سناریو',
      scenarioSolvedTitle: 'سناریو با موفقیت حل شد!',
      scenarioNotSolvedTitle: 'مشکل هنوز به طور کامل حل نشده است',
      summaryReport: 'گزارش نهایی عیب‌یابی',
      timeSpent: 'زمان صرف‌شده',
      testsExecuted: 'تعداد تست‌های انجام‌شده',
      actionsTaken: 'اقدامات انجام‌شده',
      rootCause: 'علت اصلی مشکل',
      close: 'بستن',
      scenarioNotSolvedDesc: "مشکل شبکه هنوز برطرف نشده است. به عیب‌یابی با دستورات ترمینال یا اقدامات سیستم ادامه دهید.",
      noLogsYet: "هنوز هیچ اقدام عیب‌یابی ثبت نشده است.",
      actions: {
        renewDhcp: 'درخواست مجدد IP (Renew DHCP)',
        flushDns: 'پاکسازی کش DNS (Flush DNS)',
        enableAdapter: 'فعال‌سازی کارت شبکه (Enable Adapter)',
        restartAdapter: 'راه‌اندازی مجدد کارت شبکه',
        startDhcpService: 'استارت سرویس DHCP Client',
        fixGateway: 'تصحیح Default Gateway (192.168.1.1)',
        setGoogleDns: 'تنظیم DNS روی 8.8.8.8'
      }
    },
    scenarios: {
      dns_corrupted: {
        title: 'عدم باز شدن وب‌سایت‌ها',
        desc: 'کاربر امکان پینگ گرفتن به IPهای عمومی مثل 8.8.8.8 را دارد اما هیچ دامنه‌ای در مرورگر باز نمی‌شود.',
        symptoms: 'خطای Server IP address could not be found در مرورگر.',
        hint: 'مستقیماً یک آدرس مثل google.com را nslookup کنید یا کش DNS سیستم را بررسی کنید.',
        rootCause: 'خرابی و ذخیره شدن کش نادرست در DNS Cache ویندوز.'
      },
      dhcp_apipa: {
        title: 'دریافت IP آدرس  (APIPA)',
        desc: 'سیستم به سوئیچ متصل است اما IP معتبر از شبکه‌ی 192.168.1.0 دریافت نکرده است.',
        symptoms: 'عدم دسترسی به اینترنت و شبکه داخلی، IP در محدوده 169.254.x.x قرار دارد.',
        hint: 'وضعیت سرویس DHCP Client و فرآیند DHCP Request را بررسی کنید.',
        rootCause: 'توقف سرویس DHCP Client و عدم دریافت پاسخ از DHCP Server.'
      },
      wrong_gateway: {
        title: 'عدم دسترسی به اینترنت',
        desc: 'کارت شبکه به‌صورت Static تنظیم شده است. شبکه داخلی در دسترس است اما اینترنت وصل نمی‌شود.',
        symptoms: 'پینگ سیستم‌های همسایه برقرار است ولی اینترنت و Gateway پاسخ نمی‌دهند.',
        hint: 'آدرس Default Gateway را با ipconfig بررسی و صحت آدرس آن را تست کنید.',
        rootCause: 'تنظیم اشتباه آدرس Default Gateway روی کارت شبکه.'
      },
      adapter_disabled: {
        title: 'قطع بودن کامل کارت شبکه',
        desc: 'آیکون شبکه در ویندوز ضربدر قرمز دارد و هیچ ارتباطی برقرار نیست.',
        symptoms: 'کارت شبکه در حالت Disabled قرار گرفته است.',
        hint: 'وضعیت Adapter را بررسی و آن را فعال (Enable) کنید.',
        rootCause: 'غیرفعال بودن نرم‌افزاری کارت شبکه در ویندوز.'
      }
    }
  },
  en: {
    troubleshooting: {
      title: 'Network & Windows Troubleshooting Simulator',
      subtitle: 'An interactive environment for diagnosing real-world infrastructure issues',
      selectScenario: 'Select Scenario',
      symptoms: 'Reported Symptoms',
      systemActions: 'System Actions & Tools',
      terminalHeader: 'Troubleshooting Terminal (CMD)',
      investigationLog: 'Investigation Log',
      getHint: 'Get Hint',
      solveScenario: 'Verify & Submit Report',
      resetScenario: 'Reset Scenario',
      scenarioSolvedTitle: 'Scenario Resolved Successfully!',
      scenarioNotSolvedTitle: 'Issue Is Not Fully Resolved',
      summaryReport: 'Final Troubleshooting Report',
      timeSpent: 'Time Elapsed',
      testsExecuted: 'Tests Executed',
      actionsTaken: 'Actions Taken',
      rootCause: 'Root Cause',
      close: 'Close',
      scenarioNotSolvedDesc: "The network issue is still affecting the host. Keep diagnosing using terminal commands or system actions.",
      noLogsYet: "No investigation actions recorded yet.",
      actions: {
        renewDhcp: 'Request New IP (Renew DHCP)',
        flushDns: 'Flush DNS Cache',
        enableAdapter: 'Enable Network Adapter',
        restartAdapter: 'Restart Network Adapter',
        startDhcpService: 'Start DHCP Client Service',
        fixGateway: 'Fix Default Gateway (192.168.1.1)',
        setGoogleDns: 'Set DNS to 8.8.8.8'
      }
    },
    scenarios: {
      dns_corrupted: {
        title: 'Websites Not Loading',
        desc: 'User can ping public IPs like 8.8.8.8 but domains fail to resolve in the browser.',
        symptoms: 'Server IP address could not be found error in browsers.',
        hint: 'Try resolving a domain via nslookup or inspect the system DNS cache.',
        rootCause: 'Corrupted entries stored in the Windows DNS Resolver Cache.'
      },
      dhcp_apipa: {
        title: 'APIPA IP Address Assigned',
        desc: 'System is connected to switch but failed to receive a valid 192.168.1.0/24 IP.',
        symptoms: 'No local or internet connection, IP address starts with 169.254.',
        hint: 'Check the DHCP Client service status and execute a DHCP renew request.',
        rootCause: 'DHCP Client service was stopped and failed to fetch lease from DHCP Server.'
      },
      wrong_gateway: {
        title: 'No Internet Access',
        desc: 'Network adapter is configured statically. Local LAN works, but Internet is unreachable.',
        symptoms: 'Local IP ping works, but Default Gateway and Internet do not respond.',
        hint: 'Check Default Gateway IP via ipconfig and verify its reachability.',
        rootCause: 'Incorrect Default Gateway address set on the static IPv4 configuration.'
      },
      adapter_disabled: {
        title: 'Network Adapter Disabled',
        desc: 'Windows network icon shows a red X and no connection is available.',
        symptoms: 'Ethernet adapter is in Disabled state.',
        hint: 'Inspect network adapter state and enable the interface.',
        rootCause: 'Network Interface Card (NIC) software adapter was disabled.'
      }
    }
  }
};