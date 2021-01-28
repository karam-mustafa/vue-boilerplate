<template>
  <v-navigation-drawer
    v-model="drawerValue"
    clipped
    app
    :right="!$isRTL"
    color="green"
  >
    <base-list>
      <base-list-item>
        test
      </base-list-item>
    </base-list>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from "vuex";
import BaseList from "../../Base/Lists/BaseList";
import BaseListItem from "../../Base/Lists/BaseListItem";

export default {
  name: "SideNav",
  components: { BaseListItem, BaseList },
  data: () => ({
    drawer: false
  }),
  computed: {
    ...mapGetters({ getDrawerVisibilityValue: "getDrawerVisibilityValue" }),
    drawerValue: {
      set() {
        return this.getDrawerVisibilityValue;
      },
      get() {
        return this.getDrawerVisibilityValue;
      }
    }
  }
};
</script>

<style scoped></style>
