const routes = [
  {
    path: "/",
    component: () => import("src/layouts/MainLayout.vue"),
    children: [
      { path: "/home", component: () => import("src/pages/HomePage.vue") },
    ],
  },

  {
    path: "/dashboard",
    component: () => import("src/pages/DashBoard.vue"),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
