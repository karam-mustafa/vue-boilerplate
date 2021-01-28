<template>
  <div class="loading-area">
    <v-progress-linear
      :active="getIsLoading"
      indeterminate
      absolute
      top
      color="green"
      height="5px"
      class="mt-0 progress-bar"
    ></v-progress-linear>
<!--    <div class="loading-img" v-if="getIsLoading">-->
<!--      <v-progress-circular-->
<!--        :active="getIsLoading"-->
<!--        :size="100"-->
<!--        absolute-->
<!--        color="green"-->
<!--        indeterminate-->
<!--      ></v-progress-circular>-->
<!--    </div>-->
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "LoadingProgress",
  computed: {
    ...mapGetters(["getIsLoading"])
  }
};
</script>

<style scoped>
.progress-bar {
  z-index: 999;
  position: fixed;
}
.loading-img {
  height: 100vh;
  width: 100vw;
  position: fixed;
  background: black;
  z-index: 999;
  opacity: 0.7;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
</style>
