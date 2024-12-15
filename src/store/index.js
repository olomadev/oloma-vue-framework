import { defineStore } from "pinia";
import axios from 'axios';

const store = defineStore('index', {
  state: () => {
    return { 
      locale: "en",
      modules: [],
      drawer: true,
      navbarKey: 0,
    }
  },
  getters: {
    getNavbarKey() {
      return this.navbarKey;
    },
    getLocale() {
      return this.locale
    },
    getResource: (state) => {
      return function (name) {
        this.modules["resource"].setResource(name);
        return this.modules["resource"];
      }
    },
    getModule: (state) => {
      return function (name) {
        return this.modules[name];
      }
    },
    getDrawer() {
      return this.drawer;
    },
  },
  actions: {
    setNavbarKey() {
      this.navbarKey = this.navbarKey + 1;
    },
    setModule(storeName, useStore) {
      this.modules[storeName] = useStore();
      return this.modules[storeName];
    },
    setLocale(locale) {
      this.locale = locale;
      axios.defaults.headers.common['X-Client-Locale'] = locale;
    },
    setDrawer(drawer) {
      this.drawer = drawer;
    },
  }
});

export default store;