<template>
  <div id="app">
    <Navi 
    :nav-links="navLinks"
    :image-path="require('./assets/etrenznav1.png')"
    background="#fff"
		link-color="#777"
		hoverBackground="#ddd"
    />
    <router-view />
    <Footer/>
  </div>
</template>

<script>
import Navi from "@/components/Navi";
import Footer from "@/components/Footer";
export default {
  components: {
    Navi,
    Footer,
  },
  data: () => ({
    navLinks: [
      {
        text: "HOME",
        path: "/",
        icon: "ion-ios-home",
      },
      {
        text: "MERCHANTS",
        path: "/merchants",
        icon: "ion-ios-business",
      },
      {
        text: "ABOUT",
        path: "/aboutUs",
        icon: "ion-ios-people",
      },
    ],
  }),
};
</script>

<style scoped>
@import "https://unpkg.com/ionicons@4.2.2/dist/css/ionicons.min.css";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-weight: 500;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
ul.list-unstyled li {
    font-size: 16px !important;
}
</style>
