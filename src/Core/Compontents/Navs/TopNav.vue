<template>
  <v-app-bar
    color="bg-gray accent-4"
    class="border"
    dark
    height="50px"
    :clipped-right="$isRTL"
  >
    <v-app-bar-nav-icon
      class="green-color"
      @click="changeDrawerVisibility()"
    ></v-app-bar-nav-icon>
    <v-toolbar-title class="dark-color">Page title</v-toolbar-title>
    <v-spacer></v-spacer>
    <base-button
      @click="$router.push({ name: 'login' })"
      color="green"
      rounded
      class="mx-4"
      >{{ $t("login") }}</base-button
    >
    <base-button
      @click="$router.push({ name: 'register' })"
      color="green"
      outlined
      rounded
      class="mx-4"
      >{{ $t("register") }}</base-button
    >
    <v-icon class="mx-4 dark-color">mdi-logout</v-icon>
    <v-icon class="mx-4 dark-color">mdi-account</v-icon>
    <v-menu transition="slide-y-transition" bottom offset-y>
      <template v-slot:activator="{ on: menu, attrs }">
        <v-tooltip bottom :open-delay="500">
          <template v-slot:activator="{ on: tooltip }">
            <v-btn icon v-bind="attrs" v-on="{ ...tooltip, ...menu }">
              <v-icon class="dark-color">mdi-web</v-icon>
            </v-btn>
          </template>
          <span>{{ $t("language") }}</span>
        </v-tooltip>
      </template>
      <v-list>
        <v-list-item @click="$setLang('ar')">
          <v-list-item-title>العربية</v-list-item-title>
        </v-list-item>
        <v-list-item @click="$setLang('en')">
          <v-list-item-title>English</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "TopNav",
  methods: {
    ...mapMutations({
      changeDrawerVisibilityAction: "CHANGE_DRAWER_VISIBILITY"
    }),
    changeDrawerVisibility() {
      return this.changeDrawerVisibilityAction();
    }
  }
};
</script>

<style scoped></style>
