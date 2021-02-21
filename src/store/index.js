import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        modalOpenned: false,
    },
    mutations: {
        closeModal(state) {
            state.modalOpenned = false
        },
        openModal(state) {
            state.modalOpenned = true
        },
    },
    actions: {},
    modules: {},
})
