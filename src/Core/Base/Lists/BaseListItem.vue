<template>
  <v-list-item>
    <v-list-item-title class="white--text">
      <slot></slot>
    </v-list-item-title>
  </v-list-item>
</template>

<script>
export default {
  name: "BaseListItem"
};
</script>

<style scoped></style>
