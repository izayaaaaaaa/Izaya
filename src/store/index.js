// store/index.js
import { createStore } from "vuex";

export default createStore({
    state: {
        mode: "light", 
    },
    mutations: {
        toggleMode(state) {
            state.mode = state.mode === "light" ? "dark" : "light";
        },
    },
});