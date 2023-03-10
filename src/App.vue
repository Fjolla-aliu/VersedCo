<script setup>
//import { watch } from 'fs';
import { RouterLink, RouterView } from 'vue-router'
import "./css/home.css"

</script>

<template>
  
   <section id="topbar" class="mb-2 mb-lg-0 mb-sm-0 d-none d-lg-flex align-items-center pt-2 pb-2 bg-success text-white topbar-transparent">
        <div class="container">
          <div class="row">
            <div class="col-lg-6   text-start">
             <span class="px-3"><i class="fas fa-phone "></i> +1 5589 55488 55 </span>
             <i class="fas fa-clock"></i> Mon-Sat: 11:00 AM - 23:00 PM
            </div>
          </div>
        </div>
      </section>
      <nav class="navbar navbar-expand-lg navbar-light bg-light"  v-if="$store.state.user">
            <div class="container">
                    <h2 class="fw-bold  mb-2 mb-lg-0 mb-sm-0">VersedCo</h2>
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
                            <a class="nav-link" href="#"><RouterLink to="/">Product</RouterLink></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><RouterLink to="/about">About</RouterLink></a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="#"><RouterLink to="/">Contact</RouterLink></a>
                        </li>
                        <li class="nav-item">
                              <a class="nav-link" href="#"><RouterLink :to="{ name: 'Login' }">Login/Register</RouterLink></a>
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
                          <p>{{ this.$store.state.profileEmail }}</p>
                        </div>

                        <div class="options">
                          <div class="option">
                            <RouterLink class="option" to="#">
                              <p>Profile</p>
                            </RouterLink>
                          </div>
                           <div class="option">
                              <RouterLink class="option" to="#">
                                <p>Admin</p>
                              </RouterLink>
                            </div>
                             <div class="option">
                              <RouterLink class="option" to="#">
                                <p>SignOut</p>
                              </RouterLink>
                            </div>
                        </div>
                      </div>
                     </div>
                </div>
            </div>
        </nav>
 
  <RouterView />
</template>

<script>
import { auth } from '@/firebase'

export default {
  name: "app",

  data() {
    return {
      user: null,
    };
  },
   created() {
    auth.onAuthStateChanged((user) => {
      this.$store.commit("updateUser", user);
      if (user) {
        this.$store.dispatch("getCurrentUser");
        console.log(this.$store.state.profileEmail);
        console.log(user.uid);
      }
    })
    this.checkRoute();
  },
  mounted() { },
    methods: {
      checkRoute() {
        if (
          this.$route.name === "Login" ||
          this.$route.name === "Register") {
          return;
        }


      },
    },
    watch: {
      $route() {
        this.checkRoute();
      },
    },
  
};
</script>


<style scoped>
*{
  margin: 0;
  padding: 0;
 
}
header {
  width:100%;
  top: 0;
  left: 0;
  z-index: 9;
  background: #ececec;
  height: 120px;
}

.logo {
  display: block;
 
  width: 250px;
  height: 50px;
} 

#nav {
  width: 100%;
  font-size: 20px;
  text-align: center;
  padding: 10px 10vw;
  
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
