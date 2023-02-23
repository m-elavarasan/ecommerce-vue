import Vue from 'vue'
import Vuex from 'vuex'
import userAuth from '@/apiservice/userAuth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userData:{},
  },
  getters: {
    userData: (state) => state.userData,
  },
  mutations: {
    setUserData(state, userData) {
      console.log('Inside setuser mutation');
      state.userData = userData;
    },
  },
  actions: {
    AUTH_USER({commit},{data}){
    userAuth.userLogin({
        data,
        success: (response) => {
          console.log(" AUTH_USER success")
          commit("setUserData", response.data)
        },
        fail: (error) => {
          console.log(" AUTH_USER fail")
        }
      })
    },

  },
  modules: {
  }
})
