import HeaderCompVue from "@/components/HeaderComp/HeaderComp.vue"
import StatsCard from '@/components/StatsCardComp/StatsCard.vue';
export default{
  components:{
    HeaderCompVue,
    StatsCard
  },
  mounted() {
    let user = JSON.parse(localStorage.getItem("userData"))
    console.log(user);
    if (user) {
    this.$store.dispatch('VERIFY_USER',user.phone)
    }
  },
}