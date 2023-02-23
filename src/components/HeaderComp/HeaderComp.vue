<template>
  <div class="">
    <nav class="navbar navbar-expand-lg sticky-top" style="background-color:#28364d;">
      <div class="container-fluid">
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon color-white"></span>
          </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item active text-white">
              <a class="nav-link text-light f-bold">Seller Center</a>
            </li>
            <p class="line nav-link text-white">|</p>
            <li class="nav-item text-white">
              <a class="nav-link text-light f-bold">Products</a>
            </li>
            <li class="nav-item text-white">
              <a class="nav-link text-light f-bold">Orders</a>
            </li>
            <li class="nav-item text-white">
              <a class="nav-link text-light f-bold">Payments</a>
            </li>
            <li class="nav-item text-white">
              <a class="nav-link text-light f-bold">Refunds</a>
            </li>
            </ul>
            <ul class="navbar-nav ml-auto">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle text-light" href="#" id="userDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="text-light">{{ userData.name }} </span>
                <img src="@/assets/avatar.png" width="40vw" height="40vh" alt="user avatar" class="img-fluid rounded-circle ">
              </a>
              <div class="dropdown-menu" aria-labelledby="userDropdown">
                <a class="dropdown-item" id="updateModal">Profile</a>
                
                <a class="dropdown-item" v-b-modal.signout-confim>Sign Out</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      </nav>
      <b-modal id="signout-confim" title="Sign Out" ok-title="Sign Out" @ok="userSignOut">
        <p class="my-4">Confirm to SignOut</p>
      </b-modal>
  </div>
</template>

<script src="./HeaderComp.js"></script>
<style lang="scss" scoped>
@media screen and (min-width: 0px) and (max-width: 991px) {
  .line{ display: none; }   /* hide it elsewhere */
}
</style>