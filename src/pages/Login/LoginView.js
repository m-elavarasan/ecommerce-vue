import Vue from 'vue'; 
 export default {
    data() {
      return {
        phone:'',
        password:'',
      }
    },
    methods: {
      resetFun()
      {
        this.phone='',
        this.password=''
      },
      handleLogin() {
        if(this.phone!=='' && this.password!==''){
        this.$store.dispatch('AUTH_USER', {
          data:{
            phone:this.phone,
            password:this.password
          },
          success:this.onSuccess,
          fail:this.onFail,
        })
      }
    },
    onSuccess(data)
    {
      console.log("inside on onSucces")
      this.resetFun,
      localStorage.setItem('isLogined',true)
      Vue.$toast.success('Logged In Successfully', {
              position: 'top-right',
              duration:3000
          })
          console.log(data);
          this.$router.push({path:'/'})
    },
    onFail(error)
    {
      this.resetFun,
      console.log(error);
      console.log("inside on onLogin")
      localStorage.setItem('isLogined',false)
      Vue.$toast.error('Login Failed', {
              position: 'top-right',
              duration:3000
          })
          this.$router.push({path:'/login'})
    },
  }
}