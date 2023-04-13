<template>
  <q-layout view="hHh Lpr lff">
    <q-header reveal elevated>
      <q-toolbar class="glossy">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
          class="q-mr-md"
        />
        <img width="40" height="40" src="~assets/logo.png" />
        <q-toolbar-title>
          PhysMet Job Order Information System (PJOIS)
        </q-toolbar-title>

        <q-btn flat round dense icon="person" />
        <q-btn flat round dense icon="arrow_drop_down" />
      </q-toolbar>
    </q-header>

    <q-page-container class="q-px-xl">
      <div class="q-px-lg q-pt-lg q-gutter-sm">
        <q-breadcrumbs>
          <q-breadcrumbs-el label="Homepage" icon="home" />
        </q-breadcrumbs>
      </div>
      <div
        class="no-wrap items-center q-ma-lg q-px-lg bg-grey-3 rounded-borders text-justify"
      >
        <div class="text-center text-h4 q-pa-md">
          Welcome to PhysMet Job Order Information System (PJOIS)
        </div>
        <q-separator />

        <div
          class="flex flex-center text-center text-justify text-weight-medium q-py-lg"
        >
          The Planning and Management Division (PMD) through the Management
          Information System (MIS) unit has been actively engaged in developing
          and maintaining information systems that are beneficial for the
          Center. Indeed, MIS keeps track of the Center’s Information Systems
          Strategic Plan (ISSP) whose main goal is to intensify the Center’s
          operational excellence through the acquisition of ICT infrastructure
          and implementation information systems in support of the productivity
          and competitiveness of the metals, engineering (M&E) and allied
          Industries. The PhysMet Job Order Information System is a web-based
          system developed for the acceptance, processing, and release of
          Physical Metallurgy service requests covering Metallography, Macro
          Examination, Photomicrography, among others. The system shall be
          developed under the Medium-Term Information and Communications
          Technology Harmonization Initiative (MITHI) project. The system’s main
          objective is to manage, monitor, and facilitate the Physical
          Metallurgy technical service requests entered by the clients of the
          Center. PhysMet Job Order Information System shall have a database of
          customer profiles, job profiles, cost estimates, status of jobs, and a
          library of Types of tests, Test method to be utilized for the specific
          service to be rendered. The system shall process the request up to
          billing and payment. It will have a dashboard that features
          information analytics and could generate reports. This concept paper
          discusses the requirement details that serve as analysis inputs to the
          design and development of the PhysMet Job Order Information System. It
          aims to minimize the iterations in the system’s development process
          and to anticipate possible problems, risks and opportunities.
        </div>
      </div>
    </q-page-container>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      :width="260"
      class="bg-grey-2"
      :mini="miniState"
      @mouseover="miniState = false"
      @mouseout="miniState = true"
      :breakpoint="500"
    >
      <q-list class="text-primary">
        <q-item
          active-class="my-menu-link"
          v-for="link in linksList"
          :key="link.title"
          clickable
          exact
          :to="link.path"
        >
          <q-item-section v-if="link.icon" avatar>
            <q-icon :name="link.icon" />
          </q-item-section>

          <q-item-section>
            <q-item-label>{{ link.title }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container> </q-page-container>
  </q-layout>
</template>

<script setup>
import { useQuasar } from "quasar";
import { ref, getCurrentInstance, computed } from "vue";

const $q = useQuasar();
const app = getCurrentInstance().appContext.config.globalProperties;

const linksList = [
  {
    title: "Homepage",
    icon: "home",
    path: "/home",
  },
  {
    title: "Dashboard",
    icon: "dashboard",
    path: "/dashboard",
  },
  {
    title: "Customer",
    icon: "people",
    path: "/customer",
  },
  {
    title: "Job Order",
    icon: "list",
    path: "/job-order",
  },

  {
    title: "Downloadable File",
    icon: "download",
    path: "/downloadable-file",
  },
];

const leftDrawerOpen = ref(false);
const miniState = ref(true);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

function openInNewTab(url) {
  window.open(url, "_blank").focus();
}
</script>

<style scoped>
.footerCustomStyle {
  min-height: 24px;
}

.my-menu-link {
  color: rgb(255, 255, 255);
  background: #1976d2;
  /* background: #26A69A; */
}

.mild-shadow {
  box-shadow: 0 2px 4px rgb(0 0 0 / 12%), 0 0 6px rgb(0 0 0 / 4%);
  transition: box-shadow 0.4s;
}
</style>
