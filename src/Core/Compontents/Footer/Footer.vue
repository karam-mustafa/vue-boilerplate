<template>
  <v-footer color="default border-top" padless>
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="link in links"
        :key="link"
        text
        rounded
        class="my-2 dark-color"
      >
        {{ link }}
      </v-btn>
      <v-col class="default py-4 text-center dark-color" cols="12">
        {{ new Date().getFullYear() }} — Base Vue Template@karam-mustafa
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({
    links: ["Home", "About Us", "Team", "Services", "Blog", "Contact Us"]
  })
};
</script>

<style scoped></style>
