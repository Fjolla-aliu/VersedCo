<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
   <header> 
      <nav id="nav" v-if="$store.state.user">
        <img src="./img/logo.png" alt="" class="logo">
      
        <RouterLink to="/home">Home</RouterLink>
        <RouterLink to="/">Product</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <button @click="$store.dispatch('logout')"> Logout </button>
      </nav> 
  </header> 
  <RouterView />
</template>

<script>
import { onBeforeMount } from 'vue';
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()

    onBeforeMount(() => {
      store.dispatch('fetchUser')
    })

    return {
      user: store.state.user
    }
  }
}
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
}

.logo {
  display: block;
 
  width: 250px;
  height: 70px;
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


</style> 
