import Vue from "vue";
export default {
  data() {
    return {
      phone: "",
      password: "",
    };
  },
  methods: {
    resetFun() {
      (this.phone = ""), (this.password = "");
    },
    userValidate() {
      if (this.phone !== "" && this.password !== "") {
        return true;
      } else {
        Vue.$toast.error("Enter Username and Password", {
          position: "top-right",
          duration: 3000,
        })
        return false;
      }
    },
    handleLogin() {
      if (this.userValidate()) {
        this.$store.dispatch("AUTH_USER", {
          success: this.onSuccess,
          fail: this.onFail,
          data: {
            phone: this.phone,
            password: this.password,
          },
        });
      }
    },
    onSuccess(data) {
      console.log("inside on onSucces");
      this.resetFun(), 
      localStorage.setItem("isLogined", true);
      Vue.$toast.success("Logged In Successfully", {
        position: "top-right",
        duration: 3000,
      });
      console.log(data);
      this.$router.push({ path: "/" });
    },
    onFail(err) {
      this.resetFun(), console.log("inside on onLogin");
      localStorage.setItem("isLogined", false);
      Vue.$toast.error(err, {
        position: "top-right",
        duration: 3000,
      });
    },
  },
};
