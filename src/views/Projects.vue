<template>
  <section class="mx-auto max-w-7xl px-4 pt-8 pb-16 sm:px-6 lg:px-6">
    <!-- title -->
    <div class="mx-auto mb-10 max-w-3xl text-center">
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
        {{ $t("projectsPage.title") }}
      </h1>
      <p
        class="mt-2 sm:mt-3 md:mt-4 text-sm sm:text-base md:text-lg leading-6 sm:leading-7 md:leading-8 text-gray-600 dark:text-gray-300">
        {{ $t("projectsPage.description") }}
      </p>
    </div>

    <!-- tabs -->
    <div class="mb-6 lg:hidden">
      <div
        class="grid grid-cols-3 gap-2 rounded-2xl border border-gray-200/70 bg-white/80 p-1.5 shadow-sm dark:border-gray-700 dark:bg-gray-900/70">
        <button v-for="tab in tabs" :key="tab.key" type="button" @click="activeTab = tab.key" :class="[
          'rounded-xl px-2 py-2 text-xs font-semibold transition-colors duration-200 sm:text-sm',
          activeTab === tab.key
            ? 'bg-blue-600 text-white shadow'
            : 'text-gray-600 hover:bg-blue-50 dark:text-gray-300 dark:hover:bg-gray-800',
        ]">
          {{ $t(tab.labelKey) }}
        </button>
      </div>
    </div>

    <!-- Projects -->
    <div class="grid items-start gap-3 lg:grid-cols-3">
      <!-- frontEnd Projects -->
      <div :class="activeTab === 'frontEnd' ? 'block' : 'hidden'"
        class="lg:block rounded-3xl border border-gray-200/70 bg-gray-200 p-4 shadow-xl shadow-gray-900/10 dark:border-gray-700 dark:bg-gray-900/70 dark:shadow-black/30">
        <div class="flex items-center gap-3.5">
          <div
            class="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-300">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M9.75 17L9 20l-1 1h8l-1-1l-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 class="text-2xl font-semibold text-gray-900 dark:text-white">
            {{ $t("projectsPage.frontEnd.title") }}
          </h3>
        </div>
        <p class="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
          {{ $t("projectsPage.frontEnd.description") }}
        </p>

        <div class="mt-8 grid gap-4">
          <ProjectLinkCard :title="$t('projectsPage.frontEnd.items.financialCalculator.title')" :description="$t('projectsPage.frontEnd.items.financialCalculator.description')
            " to="/Projects/Front-End/FinancialCalculator" :link-text="$t('projectsPage.frontEnd.items.financialCalculator.link')" />
          <ProjectLinkCard :title="$t('projectsPage.frontEnd.items.weather.title')"
            :description="$t('projectsPage.frontEnd.items.weather.description')" to="/Projects/Front-End/Weather"
            :link-text="$t('projectsPage.frontEnd.items.weather.link')" />
          <ProjectLinkCard :title="$t('projectsPage.frontEnd.items.todo.title')"
            :description="$t('projectsPage.frontEnd.items.todo.description')" to="/Projects/Front-End/TodoList"
            :link-text="$t('projectsPage.frontEnd.items.todo.link')" />
          <ProjectLinkCard :title="$t('projectsPage.frontEnd.items.calendar.title')" :description="$t('projectsPage.frontEnd.items.calendar.description')
            " to="/Projects/Front-End/Calendar" :link-text="$t('projectsPage.frontEnd.items.calendar.link')" />
          <ProjectLinkCard :title="$t('projectsPage.frontEnd.items.unitConversion.title')" :description="$t('projectsPage.frontEnd.items.unitConversion.description')
            " to="/Projects/Front-End/UnitConversion" :link-text="$t('projectsPage.frontEnd.items.unitConversion.link')" />
          <ProjectLinkCard :title="$t('projectsPage.frontEnd.items.qrBarcodeGenerator.title')" :description="$t('projectsPage.frontEnd.items.qrBarcodeGenerator.description')
            " to="/Projects/Front-End/QR-Barcode-Generator" :link-text="$t('projectsPage.frontEnd.items.qrBarcodeGenerator.link')" />
          <ProjectLinkCard :title="$t('projectsPage.frontEnd.items.bmiCalculator.title')" :description="$t('projectsPage.frontEnd.items.bmiCalculator.description')
            " to="/Projects/Front-End/BMICalculator" :link-text="$t('projectsPage.frontEnd.items.bmiCalculator.link')" />
          <ProjectLinkCard :title="$t('projectsPage.frontEnd.items.calculator.title')" :description="$t('projectsPage.frontEnd.items.calculator.description')
            " to="/Projects/Front-End/Calculator" :link-text="$t('projectsPage.frontEnd.items.calculator.link')" />
          <ProjectLinkCard :title="$t('projectsPage.frontEnd.items.timeAndDate.title')" :description="$t('projectsPage.frontEnd.items.timeAndDate.description')
            " to="/Projects/Front-End/TimeAndDate" :link-text="$t('projectsPage.frontEnd.items.timeAndDate.link')" />
          <ProjectLinkCard :title="$t('projectsPage.frontEnd.items.modals.title')"
            :description="$t('projectsPage.frontEnd.items.modals.description')" to="/Projects/Front-End/Modals"
            :link-text="$t('projectsPage.frontEnd.items.modals.link')" />
        </div>
      </div>

      <!-- networking Projects -->
      <div :class="activeTab === 'networking' ? 'block' : 'hidden'"
        class="lg:block rounded-3xl border border-gray-200/70 bg-gray-200 p-4 shadow-xl shadow-gray-900/10 dark:border-gray-700 dark:bg-gray-900/70 dark:shadow-black/30">
        <div class="flex items-center gap-3.5">
          <div
            class="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-300">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M12 21a9 9 0 100-18 9 9 0 000 18zM3.6 9h16.8M3.6 15h16.8M12 3a14.25 14.25 0 00-4 9 14.25 14.25 0 004 9 14.25 14.25 0 004-9 14.25 14.25 0 00-4-9z" />
            </svg>
          </div>
          <h3 class="text-2xl font-semibold text-gray-900 dark:text-white">
            {{ $t("projectsPage.networking.title") }}
          </h3>
        </div>
        <p class="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
          {{ $t("projectsPage.networking.description") }}
        </p>
        <div class="mt-8 grid gap-4">
          <ProjectLinkCard :title="$t('projectsPage.networking.items.VLAN.title')"
            :description="$t('projectsPage.networking.items.VLAN.description')" to="/Projects/Networking/VLAN-lab"
            :link-text="$t('projectsPage.networking.items.VLAN.link')" />
          <ProjectLinkCard :title="$t('projectsPage.networking.items.OSPF.title')"
            :description="$t('projectsPage.networking.items.OSPF.description')" to="/Projects/Networking/OSPF-lab"
            :link-text="$t('projectsPage.networking.items.OSPF.link')" />
          <ProjectLinkCard :title="$t('projectsPage.networking.items.eigrpLabCard.title')"
            :description="$t('projectsPage.networking.items.eigrpLabCard.description')"
            to="/Projects/Networking/EigrpLab" :link-text="$t('projectsPage.networking.items.eigrpLabCard.link')" />
          <ProjectLinkCard :title="$t('projectsPage.networking.items.etherchannelLabCard.title')"
            :description="$t('projectsPage.networking.items.etherchannelLabCard.description')"
            to="/Projects/Networking/EtherChannel-lab"
            :link-text="$t('projectsPage.networking.items.etherchannelLabCard.link')" />
          <ProjectLinkCard :title="$t('projectsPage.networking.items.AclLab.title')"
            :description="$t('projectsPage.networking.items.AclLab.description')" to="/Projects/Networking/Acl-Lab"
            :link-text="$t('projectsPage.networking.items.AclLab.link')" />
          <ProjectLinkCard :title="$t('projectsPage.networking.items.dhcpSecurityLabCard.title')"
            :description="$t('projectsPage.networking.items.dhcpSecurityLabCard.description')"
            to="/Projects/Networking/PortSecurityDHCPSnooping"
            :link-text="$t('projectsPage.networking.items.dhcpSecurityLabCard.link')" />
          <ProjectLinkCard :title="$t('projectsPage.networking.items.ActiveDirectoryGpoLab.title')"
            :description="$t('projectsPage.networking.items.ActiveDirectoryGpoLab.description')"
            to="/Projects/Networking/ActiveDirectoryGpoLab"
            :link-text="$t('projectsPage.networking.items.ActiveDirectoryGpoLab.link')" />
          <ProjectLinkCard :title="$t('projectsPage.networking.items.dnsDhcpLab.title')"
            :description="$t('projectsPage.networking.items.dnsDhcpLab.description')"
            to="/Projects/Networking/DnsDhcpLabView" :link-text="$t('projectsPage.networking.items.dnsDhcpLab.link')" />
          <ProjectLinkCard :title="$t('projectsPage.networking.items.SqlServerLab.title')"
            :description="$t('projectsPage.networking.items.SqlServerLab.description')"
            to="/Projects/Networking/SqlServerLab" :link-text="$t('projectsPage.networking.items.SqlServerLab.link')" />
        </div>
      </div>

      <!-- itInfrastructureTools Projects -->
      <div :class="activeTab === 'itInfrastructureTools' ? 'block' : 'hidden'"
        class="lg:block rounded-3xl border border-gray-200/70 bg-gray-200 p-4 shadow-xl shadow-gray-900/10 dark:border-gray-700 dark:bg-gray-900/70 dark:shadow-black/30">
        <div class="flex items-center gap-3.5">
          <div
            class="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-300">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
            </svg>
          </div>
          <h3 class="text-2xl font-semibold text-gray-900 dark:text-white">
            {{ $t("projectsPage.itInfrastructureTools.title") }}
          </h3>
        </div>
        <p class="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
          {{ $t("projectsPage.itInfrastructureTools.description") }}
        </p>
        <div class="mt-8 grid gap-4">
          <ProjectLinkCard :title="$t(
            'projectsPage.itInfrastructureTools.items.subnetCalculator.title')" 
            :description="$t('projectsPage.itInfrastructureTools.items.subnetCalculator.description')" 
            to="/Projects/IT-Infrastructure-Tools/ip-subnet-calculator" 
              :link-text="$t('projectsPage.itInfrastructureTools.items.subnetCalculator.link')" />
          <ProjectLinkCard :title="$t(
            'projectsPage.itInfrastructureTools.items.cctvStorageCalculator.title')"
           :description="$t(
              'projectsPage.itInfrastructureTools.items.cctvStorageCalculator.description')
              " to="/Projects/IT-Infrastructure-Tools/cctv-storage-calculator"
               :link-text="$t('projectsPage.itInfrastructureTools.items.cctvStorageCalculator.link')" />
          <ProjectLinkCard :title="$t(
            'projectsPage.itInfrastructureTools.items.raidCalculator.title')"
           :description="$t('projectsPage.itInfrastructureTools.items.raidCalculator.description')
              " to="/Projects/IT-Infrastructure-Tools/raid-calculator" 
              :link-text="$t('projectsPage.itInfrastructureTools.items.raidCalculator.link')" />
          <ProjectLinkCard :title="$t(
            'projectsPage.itInfrastructureTools.items.vmResourceAllocator.title')"
           :description="$t('projectsPage.itInfrastructureTools.items.vmResourceAllocator.description')
              " to="/Projects/IT-Infrastructure-Tools/vm-resource-allocator" 
              :link-text="$t('projectsPage.itInfrastructureTools.items.vmResourceAllocator.link')" />
          <ProjectLinkCard :title="$t(
            'projectsPage.itInfrastructureTools.items.dataUnitConverter.title')" 
            :description="$t('projectsPage.itInfrastructureTools.items.dataUnitConverter.description')
              " to="/Projects/IT-Infrastructure-Tools/data-unit-converter"
               :link-text="$t('projectsPage.itInfrastructureTools.items.dataUnitConverter.link')" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import ProjectLinkCard from "../components/ProjectLinkCard.vue";

const activeTab = ref("frontEnd");

const tabs = [
  { key: "frontEnd", labelKey: "projectsPage.frontEnd.title" },
  { key: "networking", labelKey: "projectsPage.networking.title" },
  { key: "itInfrastructureTools", labelKey: "projectsPage.itInfrastructureTools.title",},
];
</script>