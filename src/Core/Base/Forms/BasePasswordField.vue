<template>
  <v-text-field
    v-bind="$attrs"
    v-on="$listeners"
    outlined
    rounded
    dense
    autocorrect="off"
    autocapitalize="off"
    spellcheck="false"
  ></v-text-field>
</template>

<script>
export default {
  name: "BasePasswordField"
};
</script>

<style scoped></style>
