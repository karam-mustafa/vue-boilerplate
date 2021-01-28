<template>
  <v-btn
    v-on="$listeners"
    v-bind="$attrs"
    :loading="loading"
    class="white--text"
  >
    <slot></slot>
  </v-btn>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    loading: {
      type: Boolean,
      default: () => false
    }
  },
  methods: {}
};
</script>

<style scoped></style>
