<template>
  <body>
    <header>
      <nav>
        <div class="logo-container">
          <a href="" v-on:click="go_to_index">
          <img src="@/res/images/logo.png" alt="postIt">
          </a>
        </div>
        <div class="search-container">
          <input type="text" name="search"><button @click="go_to_browse" type="button">Search</button>
        </div>
        <div class="avatar-container">
          <!-- <a href="#" v-on:click.prevent="showDropDown=!showDropDown"> -->
          <a href="" v-on:click="go_to_dropdown">
        <img src="@/res/images/avatar.png" alt="avatar">
        </a>
        </div>
      </nav>
    </header>
    <div class="main-container">
      <div class="profile"  v-for='profile in profiles' :key='profile.id'>
        <img :src="profile.avatar">
        <h2>{{profile.firstname}} {{profile.lastname}}</h2>
        <button class="follow-button">Follow</button>

      </div>
    </div>
  </body>
</template>

<script>

//import Dropdown from "@/components/Dropdown";
export default {
  name: 'Browse',
  //components: {Dropdown},
  methods: {
    go_to_browse: function() {
      this.$router.push("/browse")
    },
    go_to_index: function() {
      this.$router.push("/index")
    },
    go_to_dropdown: function() {
      this.$router.push("/dropdown")
    },
  },
  computed: {
    profiles(){
    return this.$store.state.profiles
    }
  },
  mounted() {
    this.$store.dispatch("getProfiles");
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="@/res/css/style.css">
</style>