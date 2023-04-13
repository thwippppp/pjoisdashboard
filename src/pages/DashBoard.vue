<template>
  <q-layout view="hHh Lpr lff">
    <q-header elevated>
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

    <q-page-container class="q-pa-md items-stretch">
      <div class="q-mt-md no-margin">
        <q-splitter disable v-model="splitterModel" style="height: 200px">
          <template v-slot:before>
            <div class="q-pa-md">
              <q-tree
                :nodes="simple"
                node-key="label"
                selected-color="primary"
                v-model:selected="selected"
              />
            </div>
          </template>

          <template v-slot:after>
            <q-tab-panels
              v-model="selected"
              animated
              transition-prev="jump-up"
              transition-next="jump-up"
            >
              <q-tab-panel name="Dashboard">
                <div
                  class="text-h5 q-mb-lg q-mt-lg text-center text-weight-medium"
                >
                  JOB STATUS
                </div>

                <div class="flex flex-center q-gutter-xl">
                  <q-btn color="primary" push>
                    <div class="row items-center no-wrap">
                      <q-icon left name="trending_up" size="35px" />
                      <div class="text-center">
                        Ongoing<br />
                        {{ onGoing }}
                      </div>
                    </div>
                  </q-btn>
                  <q-btn color="secondary" push>
                    <div class="row items-center no-wrap">
                      <q-icon left name="done_all" size="35px" />
                      <div class="text-center">
                        Completed<br />
                        {{ completed }}
                      </div>
                    </div>
                  </q-btn>
                  <q-btn color="positive" push>
                    <div class="row items-center no-wrap">
                      <q-icon left name="how_to_reg" size="35px" />
                      <div class="text-center">
                        Claimed<br />
                        {{ claimed }}
                      </div>
                    </div>
                  </q-btn>
                </div>
              </q-tab-panel>

              <q-tab-panel name="Job Status">
                <div
                  class="text-h5 q-mb-lg q-mt-lg text-center text-weight-medium"
                >
                  JOB STATUS
                </div>
                <div class="flex flex-center q-gutter-xl">
                  <q-btn color="primary" push>
                    <div class="row items-center no-wrap">
                      <q-icon left name="trending_up" size="35px" />
                      <div class="text-center">Ongoing<br />{{ onGoing }}</div>
                    </div>
                  </q-btn>
                  <q-btn color="secondary" push>
                    <div class="row items-center no-wrap">
                      <q-icon left name="done_all" size="35px" />
                      <div class="text-center">
                        Completed<br />{{ completed }}
                      </div>
                    </div>
                  </q-btn>
                  <q-btn color="positive" push>
                    <div class="row items-center no-wrap">
                      <q-icon left name="how_to_reg" size="35px" />
                      <div class="text-center">Claimed<br />{{ claimed }}</div>
                    </div>
                  </q-btn>
                </div>
              </q-tab-panel>

              <q-tab-panel
                name="Classification of Customers"
                class="text-center"
              >
                <h5 class="text-weight-medium">
                  CLASSIFICATION OF ALL CUSTOMERS
                </h5>

                <div class="flex flex-center q-gutter-xl">
                  <q-btn-group push>
                    <q-btn
                      glossy
                      push
                      label="Internal"
                      icon="person"
                      style="width: 200px"
                    >
                      <q-badge color="red" floating>{{ interNal }}</q-badge>
                    </q-btn>

                    <q-btn
                      glossy
                      push
                      label="External"
                      icon="people_alt"
                      style="width: 200px"
                    >
                      <q-badge color="red" floating>{{ exterNal }}</q-badge>
                    </q-btn>

                    <q-btn
                      glossy
                      push
                      label="Student"
                      icon="school"
                      style="width: 200px"
                    >
                      <q-badge color="red" floating>{{ stuDent }}</q-badge>
                    </q-btn>
                  </q-btn-group>
                </div>
              </q-tab-panel>

              <q-tab-panel name="Job Types" class="text-center">
                <h5 class="text-weight-medium">JOB TYPES</h5>

                <div class="flex flex-center q-gutter-xl">
                  <q-btn-group push>
                    <q-btn
                      glossy
                      push
                      label="Internal"
                      icon="person"
                      style="width: 200px"
                    >
                      <q-badge color="primary" floating>{{
                        interNal2
                      }}</q-badge>
                    </q-btn>

                    <q-btn
                      glossy
                      push
                      label="External"
                      icon="people_alt"
                      style="width: 200px"
                    >
                      <q-badge color="primary" floating>{{
                        exterNal2
                      }}</q-badge>
                    </q-btn>

                    <q-btn
                      glossy
                      push
                      label="Student"
                      icon="school"
                      style="width: 200px"
                    >
                      <q-badge color="primary" floating>{{ stuDent2 }}</q-badge>
                    </q-btn>
                  </q-btn-group>
                </div>
              </q-tab-panel>
            </q-tab-panels>
          </template>
        </q-splitter>
      </div>

      <div class="q-mx-lg" style="max-width: 300px; height: 5">
        <q-input filled :model-value="`${dateRange.from} - ${dateRange.to}`">
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date v-model="dateRange" range>
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>

      <div
        class="q-mx-lg q-mb-lg no-padding flex flex-center bg-grey-3 text-black shadow-2 rounded-borders"
      >
        <q-carousel
          v-model="slide"
          vertical
          transition-prev="slide-down"
          transition-next="slide-up"
          swipeable
          animated
          control-color="primary"
          control-type="regular"
          navigation-icon="radio_button_unchecked"
          navigation
          padding
          arrows
          class="bg-grey-3 text-black"
          style="width: 1650px; height: 600px"
        >
          <q-carousel-slide
            name="customers"
            class="no-wrap text-center q-gutter-xs"
          >
            <h4 class="q-mb-xs q-mt-none text-weight-medium no-margin">
              CLASSIFICATION OF ALL CUSTOMERS
            </h4>
            <br />
            <div class="flex-center row q-gutter-md">
              <chartExample></chartExample>
              <chartExample2></chartExample2>
              <chartExample3></chartExample3>
            </div>
          </q-carousel-slide>
          <q-carousel-slide name="jobs" class="no-wrap text-center q-gutter-xs">
            <h4 class="q-mb-xs q-mt-md text-weight-medium">
              PERCENTAGE OF COMPLETED JOBS
            </h4>
            <br />
            <div class="flex-center row q-gutter-md">
              <chartExample4></chartExample4>
              <chartExample5></chartExample5>
              <chartExample6></chartExample6>
            </div>
          </q-carousel-slide>
          <q-carousel-slide
            name="methods"
            class="no-wrap text-center q-gutter-xs"
          >
            <h4 class="q-mb-xs q-mt-md text-weight-medium">TEST METHODS</h4>
            <br />
            <div class="flex-center row q-gutter-md">
              <chartExample7></chartExample7>
            </div>
          </q-carousel-slide>
          <q-carousel-slide
            name="types"
            class="no-wrap text-center q-gutter-xs"
          >
            <h4 class="q-mb-xs q-mt-md text-weight-medium">TYPE OF TESTS</h4>
            <br />
            <div class="flex-center row q-gutter-md">
              <chartExample8></chartExample8>
            </div>
          </q-carousel-slide>
        </q-carousel>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { defineAsyncComponent, onMounted } from "vue";
import { useQuasar } from "quasar";
import { ref, getCurrentInstance, computed } from "vue";
import Axios from "axios";

const onGoing = ref(0);
const completed = ref(0);
const claimed = ref(0);
const interNal = ref(0);
const exterNal = ref(0);
const stuDent = ref(0);
const interNal2 = ref(0);
const exterNal2 = ref(0);
const stuDent2 = ref(0);

onMounted(() => {
  console.log("URL CHECK");
  const url1 = "http://10.10.120.32:1337/api/jobOrderStatus";
  const url2 = "http://10.10.120.32:1337/api/classificationOfAllCustomer";
  const url3 = "http://10.10.120.32:1337/api/job-Types";

  Axios({
    method: "GET",
    url: url1,
  }).then((response) => {
    console.log("boom panes", response.data.Ongoing);
    onGoing.value = response.data.Ongoing;
    console.log("boom panes", response.data.Completed);
    completed.value = response.data.Completed;
    console.log("boom panes", response.data.Claimed);
    claimed.value = response.data.Claimed;
  });

  Axios({
    method: "GET",
    url: url2,
  }).then((response) => {
    console.log("boom panes", response.data.customertypeCount.Internal);
    interNal.value = response.data.customertypeCount.Internal;
    console.log("boom panes", response.data.customertypeCount.External);
    exterNal.value = response.data.customertypeCount.External;
    console.log("boom panes", response.data.customertypeCount.Student);
    stuDent.value = response.data.customertypeCount.Student;
  });

  Axios({
    method: "GET",
    url: url3,
  }).then((response) => {
    console.log("boom panes", response.data.jobTypes.Internal);
    interNal2.value = response.data.jobTypes.Internal;
    console.log("boom panes", response.data.jobTypes.External);
    exterNal2.value = response.data.jobTypes.External;
    console.log("boom panes", response.data.jobTypes.Student);
    stuDent2.value = response.data.jobTypes.Student;
  });
});

const chartExample = defineAsyncComponent(() =>
  import("src/components/charts/internalchart.vue")
);

const chartExample2 = defineAsyncComponent(() =>
  import("src/components/charts/externalchart.vue")
);

const chartExample3 = defineAsyncComponent(() =>
  import("src/components/charts/studentchart.vue")
);

const chartExample4 = defineAsyncComponent(() =>
  import("src/components/charts/2internalchart.vue")
);

const chartExample5 = defineAsyncComponent(() =>
  import("src/components/charts/2externalchart.vue")
);

const chartExample6 = defineAsyncComponent(() =>
  import("src/components/charts/2studentchart.vue")
);

const chartExample7 = defineAsyncComponent(() =>
  import("src/components/charts/testmethodschart.vue")
);

const chartExample8 = defineAsyncComponent(() =>
  import("src/components/charts/typeoftestschart.vue")
);

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
const slide = ref("customers");

const splitterModel = ref(50);
const selected = ref("Job Status");

const dateRange = ref({ from: "2022/01/01", to: "2022/01/05" });

const simple = [
  {
    label: "Dashboard",
    icon: "dashboard",
    children: [
      {
        label: "Job Status",
        icon: "work_outline",
      },
      {
        label: "Classification of Customers",
        icon: "face",
      },
      {
        label: "Job Types",
        icon: "checklist",
      },
    ],
  },
];

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
</style>
