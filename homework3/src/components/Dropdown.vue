<template>
  <div class="avatar-container" @click="showDropDown = !showDropDown">
    <img src="@/res/images/avatar.png" alt="avatar">
    <transition name="dropdown" appear>
      <div v-if="showDropDown">
        <span v-for="(item, i) in items" :key="i">
          <div v-if="item.link.includes('user')">
            <p :class="item.link">{{ item.name }}</p>
          </div>
          <div v-else>
            <a href="" @click="linkTo(item.link)" >{{ item.name }}</a>
          </div>
        </span>
      </div>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'Dropdown',
  props: ['name', 'items'],
  data() {
    return {
      showDropDown: false
    };
  },
  methods: {
    linkTo(e) {
      if (e === 'Browse') {
        this.$router.push("/browse");
      } else if(e === "Logout") {
        this.$router.push("/")
      } else if(e === "Index"){
        this.$router.push("/index")
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="@/res/css/style.css">

</style>
