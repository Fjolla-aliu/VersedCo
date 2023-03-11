/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { createStore } from 'vuex'
// import router from '../router'
import { auth } from '../firebase'
import { ref } from 'vue'
 import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'



export default createStore({
    state: {
        user: null,
        profileEmail: null,
        profileId: null,
        profileUsername: null,
         loggedIn: false,
    data: null
    },
    getters: {
    user(state){
      return state.user
    }
  },
    
    mutations: {
        
        updateUser(state, payload) {
            state.user = payload;
        },
        setProfileInfo(state, doc) {
            state.profileId = doc.id;
            state.profileEmail = doc.data().email;
            state.profileUsername = doc.data().username;

        },
        SET_LOGGED_IN(state, value) {
    state.user.loggedIn = value;
  },
  SET_USER(state, data) {
    state.user.data = data;
  }
       
        },
    actions: {
        async getCurrentUser({ commit }) {
            const dataBase = await db.collection("users").doc(auth.currentUser.uid);
            const dbResults = await dataBase.get();
            commit("setProfileInfo", dbResults);
            
        },
           async register(context, { email, password, name}){
          const response = await createUserWithEmailAndPassword(auth, email, password)
          if (response) {
              context.commit('SET_USER', response.user)
              response.user.updateProfile({displayName: name})
          } else {
              throw new Error('Unable to register user')
          }
      },

      async logIn(context, { email, password }){
        const response = await signInWithEmailAndPassword(auth, email, password)
        if (response) {
            context.commit('SET_USER', response.user)
        } else {
            throw new Error('login failed')
        }
    },

    async logOut(context){
        await signOut(auth)
        context.commit('SET_USER', null)
    },

    async fetchUser(context ,user) {
      context.commit("SET_LOGGED_IN", user !== null);
      if (user) {
        context.commit("SET_USER", {
          displayName: user.displayName,
          email: user.email
        });
      } else {
        context.commit("SET_USER", null);
      }
  }
      },
  

});

