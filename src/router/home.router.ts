import { ABOUT, HOME } from "@/settings/constant";
import About from "./../components/About.vue";
import HelloWorld from "./../components/HelloWorld.vue";

export const routes = [
  { path: ABOUT, name: "about", component: About },
  { path: HOME, name: "home", component: HelloWorld },
];
