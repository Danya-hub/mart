import { createApp } from "vue";
import App from "./App.vue";

import Components from "@/components/UI/index";
import Vuex from "@/vuex/index"

const vm = 
    createApp(App)
    .use(Vuex);

Components.forEach(component => vm.component(component.name, component));
vm.mount("#app");