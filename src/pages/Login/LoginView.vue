<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-7 vh-100 bg-info row align-items-center">
        <img src="@/assets/Authentication-rafiki.svg" width="50%" height="50%" alt="" srcset="">
      </div>
      <div class="col-lg-5 vh-100 row align-items-center">
        
        <div class="d-flex justify-content-center">
          
          <form class="p-5 bg-light border rounded-lg" @submit.prevent="handleLogin">
            <h4 class="text-center ">Seller Login</h4>
            <div class="form-group">
              <label for="phone">Phone</label>
              <input type="text" class="form-control" id="phone" v-model="phone">
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" class="form-control" id="password" v-model="password">
            </div>
            <div class="form-group p-2">
              <a href=""> Reset Password</a>
            </div>
            <button type="submit" class="btn btn-primary w-100 mt-3">Login</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./LoginView"></script>

<style lang="scss" scoped>
@media screen and (min-width: 0px) {
  .col-lg-5 { display: flex; } 
}
@media screen and (min-width: 0px) and (max-width: 991px) {
  .col-lg-7{ display: none; }   /* hide it elsewhere */
}
</style>