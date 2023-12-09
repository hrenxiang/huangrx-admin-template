import { $t } from "@/plugins/i18n";

export default {
  path: "/system",
  meta: {
    title: $t("menus.hsSystemManage"),
    icon: "lollipop",
    rank: 10
  },
  children: [
    {
      path: "/system/user/index",
      name: "user",
      component: () => import("@/views/system/user/index.vue"),
      meta: {
        title: $t("menus.hsSystemUserManage")
      }
    },
    {
      path: "/system/dept/index",
      name: "dept",
      component: () => import("@/views/system/dept/index.vue"),
      meta: {
        title: $t("menus.hsSystemDeptManage")
      }
    }
  ]
};
