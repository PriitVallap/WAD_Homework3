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
    <transition name="slide-fade">
      <div v-if="!showDropDown">
        <span  v-for="l in links" :key="l" class="list"> 
          <div v-if="l.link.includes('user')">
          <p :class="l.link">{{l.name}}}</p>
          </div>
          <div v-else>
            <a :href="l.link">{{l.name}}</a>
          </div>
        </span>
      </div>
      
    </transition>


</body>
</template>

<script>
import Browse from "@/components/Browse";
import Login from "@/components/Login";

export default {
  name: 'Dropdown',
  data() {
    return {
      showDropDown: true,
      links: [
        {link: 'user-name',name:"John Doe"},
        {link: 'user-email',name:"e-mail"},
        {link: Browse,name: "Browse"},
        {link: Login,name: "Logout"}
      ]
    };
  }, 
  methods: {
      go_to_browse: function() {
      this.$router.push("/browse")
    },
    go_to_index: function() {
      this.$router.push("/index")
    }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="@/res/css/style.css">
</style>
