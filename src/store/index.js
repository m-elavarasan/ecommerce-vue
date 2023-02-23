import Vue from 'vue'
import Vuex from 'vuex'
import userAuth from '@/apiservice/userAuth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userData:{}
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
          localStorage.setItem('userData',JSON.stringify(res.data))
          commit("setUserData", res.data)
          
          success(res.data)
        },
        fail: (err) => {
          fail(err)
          localStorage.setItem("isLogined", false)
        }
      })
    },
    VERIFY_USER({commit},phone)
    {
      userAuth.verifyUser({
        phone,
        success: (res) => {
          console.log(" VERIFY_USER success")
          localStorage.setItem('userData',JSON.stringify(res.data))
          commit("setUserData", res.data)
          localStorage.setItem("isLogined", true)
        },
        fail: (err) => {
          console.log(err)
          console.log("inside Fail");
          localStorage.removeItem('isLogined')
          window.location.reload()
        }
      })
    }

  },
  modules: {
  }
})
