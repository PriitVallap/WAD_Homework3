<template>
  <body>
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap" rel="stylesheet">
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

        <Dropdown :items="links" />

      </nav>
    </header>
    <div class="main-container">
      <div class="post" v-for='post in posts' :key='post.id'>
        <div class="post-author">
          <div class="post-author-info">
            <img :src="post.author.avatar">
            {{post.author.firstname}} {{post.author.lastname}}
            
          </div>
                  <small>
          {{post.createTime}}
        </small>
        </div>
        <div class="post-image" v-if="post.media === null">
        </div>
       <div class="post-image" v-else-if="post.media.type === 'video'">
          <video controls> 
            <source :src="post.media.url"></video>
      </div>
             <div class="post-image" v-else>
          <img :src="post.media.url">
      </div>

      <div>
        <h3> {{post.text}} </h3>
      </div>
      <button class="like-button"> {{post.likes}} </button>
      </div>
    </div>
  </body>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import Dropdown from "./Dropdown";

export default {
    name: 'Index',
    components: {
      Dropdown
    },
    data () {
      return{
        links: [
          {link: 'user-name', name: "John Doe"},
          {link: 'user-email', name: "e-mail"},
          {link: "go_to_browse", name: "Browse"},
          {link: "go_to_login", name: "Logout"}
        ]
      }
    },
    methods: {
    go_to_browse: function() {
      this.$router.push("/browse")
    },
      go_to_index: function() {
      this.$router.push("/index")
    },
      go_to_login: function () {
        this.$router.push("/login")
      }
  }, 
  computed: {
    posts() {
      return this.$store.state.posts
    }
    },
    mounted() {
    this.$store.dispatch("getPosts");
  }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only 
  components: {Dropdown},
  data () {
            return {
                msg: '123'
            }
        },
        methods: {
            navigate() {
                router.push({ name: "login" });
            }
        }
    }
    -->
<style scoped src="@/res/css/style.css">

</style>