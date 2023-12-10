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
      path: "/system/dept/index",
      name: "Dept",
      component: () => import("@/views/system/dept/index.vue"),
      meta: {
        icon: "dept",
        title: $t("menus.hsSystemDeptManage")
      }
    }
  ]
};
