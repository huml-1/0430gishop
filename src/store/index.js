import Vue from "vue";
import Vuex from 'vuex';
import home from '@/store/modules/home'
import user from '@/store/modules/user'
Vue.use(Vuex)
export default new Vuex.Store({
    modules:{
        home,
        user
    },
})