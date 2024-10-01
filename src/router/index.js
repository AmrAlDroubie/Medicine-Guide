import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/Home.vue";
import regestrationBox from "@/components/regestrationBox.vue";
import ContactUs from "@/components/ContactUS.vue";
import Search from "@/components/Search.vue";
import EditInfo from "@/components/pharmacyAdmin/EditInfo.vue";
import EditMedcines from "@/components/pharmacyAdmin/EditMedcines.vue";
import Admin from "@/components/admin/Admin.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/contact-us",
      component: ContactUs,
    },
    {
      path: "/search",
      component: Search,
    },
    {
      path: "/editinfo",
      component: EditInfo,
    },
    {
      path: "/editmedcines",
      component: EditMedcines,
    },
    {
      path: "/admin",
      component: Admin,
    },
  ],
});

export default router;
