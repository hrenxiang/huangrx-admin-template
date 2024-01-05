import { $t } from "@/plugins/i18n";

export default {
  path: "/system",
  redirect: "/system/user/index",
  meta: {
    icon: "setting",
    title: $t("menus.hsSystemManage"),
    rank: 10
  },
  children: [
    {
      path: "/system/user/index",
      name: "User",
      component: () => import("@/views/system/user/index.vue"),
      meta: {
        icon: "flUser",
        title: $t("menus.hsSystemUserManage")
      }
    },
    {
      path: "/system/api/index",
      name: "Api",
      component: () => import("@/views/system/api/index.vue"),
      meta: {
        icon: "dept",
        title: $t("menus.hsSystemApiManage")
      }
    }
  ]
};
