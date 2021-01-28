<template>
  <v-list>
    <v-list-item-group active-class="deep-purple--text">
      <slot></slot>
    </v-list-item-group>
  </v-list>
</template>

<script>
export default {
  name: "BaseList"
};
</script>

<style scoped></style>
