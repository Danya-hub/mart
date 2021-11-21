import { createStore } from "vuex";

// ---- state ----
import navProd from "@/vuex/state/navProd";
import products from "@/vuex/state/products";
import lang from "@/vuex/state/lang";
import socNetWork from "@/vuex/state/socNetWork";

export default createStore({
    getters: {
        navProd: () => navProd,
        products: () => products,
        lang: () => lang,
        socNetWork: () => socNetWork,
    },
});