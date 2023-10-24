// composition/useMode.js
import { createStore } from "vuex";

export default createStore({
  state: {
    mode: "light", // Initial mode
  },
  mutations: {
    toggleMode(state) {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});