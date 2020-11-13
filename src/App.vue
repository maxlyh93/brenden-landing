<template>
  <div id="app">
    <Navi 
    :nav-links="navLinks"
    :image-path="require('./assets/etrenz-2.png')"
    background="#fff"
		link-color="#777"
		hoverBackground="#ddd"
    />
    <router-view />
  </div>
</template>

<script>
import Navi from "@/components/Navi";
export default {
  components: {
    Navi,
  },
  data: () => ({
    navLinks: [
      {
        text: "Contact",
        path: "/contact",
        icon: "ion-ios-megaphone",
      },
      {
        text: "About",
        path: "/aboutUs",
        icon: "ion-ios-business",
      },
    ],
  }),
};
</script>

<style scoped>
@import "https://unpkg.com/ionicons@4.2.2/dist/css/ionicons.min.css";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.full-height {
  min-height: 100vh;
}
</style>
