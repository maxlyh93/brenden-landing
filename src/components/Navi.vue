<template>
  <nav :style="{ background: background || '#333' }">
    <figure class="image-logo" @click="toggleNav">
      <img
        class="float-left"
        :src="imagePath"
        height="40px"
        width="40px"
        alt=""
      />
    </figure>
    <ul
      class="float-right"
      :style="{ background: background || '#333' }"
      ref="nav"
    >
      <li
        v-for="(link, index) in navLinks"
        :key="index"
        @mouseenter="
          $event.currentTarget.style.background = hoverBackground || '#999'
        "
        @mouseleave="
          $event.currentTarget.style.background = background || '#333'
        "
      >
        <router-link :to="link.path" :style="{ color: linkColor || '#DDD' }">
          {{ link.text }}
          <i :class="link.icon" />
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: [
    "navLinks",
    "background",
    "linkColor",
    "hoverbackground",
    "imagePath",
  ],
  methods: {
    toggleNav() {
      const nav = this.$refs.nav.classList;
      nav.contains("active") ? nav.remove("active") : nav.add("active");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav {
  height: 60px;
  width: 100%;
}
ul {
  display: flex;
  height: 100%;
  align-items: flex-end;
  box-shadow: 2px 2px 2px #ccc;
  padding-inline-start: 0;
  padding-inline-end: 0;
  z-index: 1;
}
a {
  text-decoration: none;
  display: flex;
  flex-direction: row-reverse;
  margin-bottom: 10px;
  align-items: center;
}
li {
  list-style-type: none;
  padding: 7px 20px;
}
img {
  margin-bottom: 0px;
  margin-left: 10px;
}
figure {
  cursor: pointer;
  margin-right: 10px;
  float: left;
  margin-top: 10px;
}
i {
  margin-right: 10px;
  font-size: 22px;
}

@media screen and (max-width: 759px) {
  ul {
    position: absolute;
    width: 300px;
    flex-direction: column;
    left: -240px;
    transition: 300ms ease all;
    top: 60px;
  }
  ul.active {
    left: 0px;
  }
  figure {
    position: fixed;
    z-index: 1;
    top: 10px;
    left: 2px;
  }
  li {
    width: 100%;
    padding-left: 0;
    padding-right: 0;
  }
  a {
    flex-direction: row;
    margin-left: 20px;
    justify-content: space-between;
    margin-right: 13px;
  }
}
</style>
