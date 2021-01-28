<template>
  <v-text-field
    v-on="$listeners"
    v-bind="$attrs"
    outlined
    rounded
    dense
    autocomplete="off"
    autocorrect="off"
  ></v-text-field>
</template>

<script>
export default {
  name: "BaseTextField"
};
</script>

<style scoped></style>
