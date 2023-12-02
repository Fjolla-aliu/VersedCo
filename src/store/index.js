/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { createStore } from 'vuex'
import { auth, db } from '../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'

export default createStore({
  state: {
    user: {
      profileEmail: null,
      profileId: null,
      profileUsername: null,
      loggedIn: false,
    },
    data: null, 
  },
  getters: {
    user(state) {
      return state.data;
    },
  },
  mutations: {
    updateUser(state, payload) {
      state.user = payload;
    },
    setProfileInfo(state, doc) {
      state.user.profileId = doc.id; 
      state.user.profileEmail = doc.data().email;
      state.user.profileUsername = doc.data().username;
    },
    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value;
    },
    SET_USER(state, data) {
      state.data = data;
    },
  },
  actions: {
    async getCurrentUser({ commit }) {
      const dataBase = await db.collection("users").doc(auth.currentUser.uid);
      const dbResults = await dataBase.get();
      commit("setProfileInfo", dbResults);
    },
    async register({ commit }, { email, password, name }) { 
      try {
        const response = await createUserWithEmailAndPassword(auth, email, password);
        commit('SET_USER', response.user);
      } catch (error) {
        throw new Error('Unable to register user: ' + error.message);
      }
    },
    async logIn({ commit }, { email, password }) { 
      try {
        const response = await signInWithEmailAndPassword(auth, email, password);
        commit('SET_USER', response.user);
      } catch (error) {
        throw new Error('Login failed: ' + error.message);
      }
    },
    async logOut({ commit }) { 
      try {
        await signOut(auth);
        commit('SET_USER', null);
      } catch (error) {
        throw new Error('Logout failed: ' + error.message);
      }
    },
    async fetchUser({ commit }, user) { 
      commit("SET_LOGGED_IN", user !== null);
      if (user) {
        commit("SET_USER", {
          displayName: user.displayName,
          email: user.email
        });
      } else {
        commit("SET_USER", null);
      }
    },
  },
});
