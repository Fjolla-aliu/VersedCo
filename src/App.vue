<script setup>
//import { watch } from 'fs';
import { RouterLink, RouterView } from 'vue-router'
import "./css/home.css"

</script>

<template>
  
   <section id="topbar" class="mb-2 mb-lg-0 mb-sm-0 d-none d-lg-flex align-items-center pt-2 pb-2 text-white topbar-transparent">
        <div class="container">
          <div class="row">

            <div class="col-lg-6   text-start">
             <span class="px-3"><i class="fas fa-phone "></i> +1 5589 55488 55 </span>
             <i class="fas fa-clock"></i> Mon-Sat: 11:00 AM - 23:00 PM
            </div>
          </div>
        </div>
      </section>
      <nav class="navbar navbar-expand-lg navbar-light bg-light " id="nav">
            <div class="container">
                    <h1 class="fw-bold  mb-2 mb-lg-0 mb-sm-0">VersedCo</h1>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="fas fa-list">Menu</span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav m-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                          <a class="nav-link active " aria-current="page" href="#"> <RouterLink to="/home">Home</RouterLink></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><RouterLink to="/shop">Shop</RouterLink></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><RouterLink to="/about">About</RouterLink></a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="#"><RouterLink to="/contact">Contact</RouterLink></a>
                        </li>
                    </ul>
                    <!-- <ul class="navbar-nav mb-2 mb-lg-0 action-menu">
                        <li class="nav-item">
                          <button  @click="$store.dispatch('logout')"> Logout </button>
                        </li>
                    </ul> -->
                    
                     <div class="profile" ref="profile">
                      <div class="profile-menu">
                        <div class="right">
                          <p>{{ this.$store.state.profileUsername }} </p>
                       
                        </div>

                        <div class="ps">
                          <button  class="dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                           User
                           </button>
                           <ul class="dropdown-menu dropdown-menu-lg-end">
                                  <li><button class="dropdown-item" type="button">
                                  <a class="nav-link" href="#"><RouterLink :to="{ name: 'Login' }">Login/Register</RouterLink></a></button>
                                  </li>
                                  <li><button class="dropdown-item" type="button"> <a class="nav-link" href="#"><RouterLink to="/cart">My Cart</RouterLink></a></button></li>
                                  <li><button class="dropdown-item" type="button">Orders </button></li>
                                  <li><button class="dropdown-item" type="button">Admin </button></li>
                                  <li><button class="dropdown-item" type="button">SignOut </button></li>
                              </ul>
                        </div>
                       </div>
                     </div>
                </div>
            </div>
        </nav>
 
  <RouterView />
</template>

<script>

export default {
  
  name: "app",


  data() {
    return {
      user: null
      
    };
  },
 
  mounted() { },
    methods: {
    
    },
  watch: {
    
      
    $route() {
      console.log(this.$store.state.data);
     
      },
    },
  
};
</script>


<style scoped>
*{
  margin: 0;
  padding: 0;
 font-family: monospace;
 
}
#topbar{
  background: #a4d1b4;
}
header {
  width:100%;
  top: 0;
  left: 0;
  z-index: 9;
  background: #ececec;
  height: 120px;
}
#dropdownMenu2{
  background: #f9fafa;
}

#nav {
  width: 100%;
  font-size: 20px;
  text-align: center;
  padding: 10px 10vw;
  height: 50px;
  
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

#nav a.router-link-exact-active:hover {
  background-color: transparent;
}

#nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  text-decoration: none;
  color: black;
}

#nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
      text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0; 
    margin-top: 1rem; 
  }
}
.error{
  text-align: center;
  font-size: 12px;
  color: red;
}


</style> 
