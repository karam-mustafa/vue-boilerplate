<template>
  <v-app>
    <notification></notification>
    <loading-progress></loading-progress>
    <top-nav></top-nav>
    <side-nav></side-nav>
    <router-view :key="$route.fullPath" />
    <Footer></Footer>
  </v-app>
</template>

<script>
import TopNav from "./Core/Compontents/Navs/TopNav";
import Footer from "./Core/Compontents/Footer/Footer";
import SideNav from "./Core/Compontents/Navs/SideNav";
import LoadingProgress from "./Core/Compontents/Loader/LoadingProgress";
import Notification from "./Core/Compontents/Notifications/Notifications";
export default {
  components: { Notification, LoadingProgress, SideNav, Footer, TopNav }
};
</script>
<style lang="scss">
.my-container {
  min-height: 100vh;
  width: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
.center-element {
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
.dark-color {
  color: black !important;
}
.green-color {
  color: green !important;
}
.bg-gray {
  background-color: #f5f5f5 !important;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
