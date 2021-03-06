// import dependency to handle HTTP request to our back end
import axios from 'axios'
import Vuex from 'vuex'
import Vue from 'vue'


Vue.use(Vuex);

//to handle state
const state = {
    posts: [],
    profiles: []
    }

//to handle state
const getters = {}

//to handle actions
const actions = {
    getPosts({ commit }) {
    axios.get('https://private-anon-69c839e631-wad20postit.apiary-mock.com/posts')
    .then(response => {
    commit('SET_POSTS', response.data)
    })
    }, 
    getProfiles({ commit }) {
    axios.get('https://private-anon-69c839e631-wad20postit.apiary-mock.com/profiles')
    .then(response => {
    commit('SET_PROFILES', response.data)
    })
    }
    }

//to handle mutations
const mutations = {
    SET_POSTS(state, posts) {
    state.posts = posts
    },
    SET_PROFILES(state, profiles){
        state.profiles = profiles
    }
    }

//export store module
export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
    })
/** we have just created a boiler plate for our vuex store module**/