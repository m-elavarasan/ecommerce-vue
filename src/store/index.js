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
    AUTH_USER({commit},{success,fail,data}){
    userAuth.userLogin({
        data,
        success: (res) => {
          console.log(" AUTH_USER success")
          commit("setUserData", res.data)
          success(res.data)
        },
        fail: (err) => {
          fail(err)
        }
      })
    },

  },
  modules: {
  }
})
