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
       
        },
    actions: {
        async getCurrentUser({ commit }) {
            const dataBase = await db.collection("users").doc(auth.currentUser.uid);
            const dbResults = await dataBase.get();
            commit("setProfileInfo", dbResults);
            
        },
      },
  

});

