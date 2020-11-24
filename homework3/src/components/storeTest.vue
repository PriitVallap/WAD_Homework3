<template>
  <div>
    <!--<div v-for='post in posts' :key='post.id'>
  <h3>Post Title: </h3>  {{post.media}}
      <h3>Post Body: </h3>{{post.author}}
    </div> -->
    <div v-for='profile in profiles' :key='profile.id'>
        <span>{{profile.firstname}} {{profile.lastname}}</span>
        <img :src="profile.avatar">
        <button>AAA </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'myStore',
  computed: {
    /*posts() {
    return this.$store.state.posts
    }, */
    profiles(){
    return this.$store.state.profiles
    }
  },
  mounted() {
    //this.$store.dispatch("getPosts");
    this.$store.dispatch("getProfiles");
  }
}
</script>