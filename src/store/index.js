import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import userinfo from './modules/userinfo'
import getters from './getters'


Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        app,
        userinfo
    },
    getters
})
  
export default store