import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/Home.vue";
import regestrationBox from "@/components/regestrationBox.vue";
import ContactUs from "@/components/ContactUS.vue";
import Search from "@/components/Search.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/test",
      component: regestrationBox,
    },
    {
      path: "/contact-us",
      component: ContactUs,
    },
    {
      path: "/search",
      component: Search,
    },
  ],
});

export default router;
