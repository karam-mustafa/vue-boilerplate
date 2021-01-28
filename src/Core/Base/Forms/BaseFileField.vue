<template>
  <v-file-input
    v-bind="$attrs"
    v-on="$listeners"
    outlined
    rounded
    dense
    autocorrect="off"
    autocapitalize="off"
    spellcheck="false"
  ></v-file-input>
</template>

<script>
export default {
  name: "BaseFileField"
};
</script>

<style scoped></style>
