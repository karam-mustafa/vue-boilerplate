<template>
  <v-select
    v-on="$listeners"
    v-bind="$attrs"
    outlined
    rounded
    dense
    item-text="name"
    item-value="id"
    autocomplete="off"
    autocorrect="off"
  ></v-select>
</template>

<script>
export default {
  name: "BaseSelectField"
};
</script>

<style scoped></style>
