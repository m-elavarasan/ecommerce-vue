import { mapState } from "vuex" 
import Vue from "vue";
export default{
  computed: {
    ...mapState(['userData'])
  },
  methods: {
    userSignOut()
    {   
      console.log("signout called")
      localStorage.clear()
      window.location.reload()
      Vue.$toast.warning('User Logged Out', {
      position: "top-right",
      duration: 3000,
        })
    }
  },
}