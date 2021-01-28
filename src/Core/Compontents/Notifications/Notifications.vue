<template>
  <notifications
    position="bottom right"
    :duration="10000"
    class="mt-2"
    group="public"
  >
    <template slot="body" slot-scope="props">
      <v-alert
        :type="props.item.type"
        border="left"
        elevation="2"
        colored-border
      >
        <v-row no-gutters>
          <v-col cols="10">
            <div
              v-html="props.item.title"
              style="font-size: 14px; text-align: center;"
            ></div>
          </v-col>
          <v-col cols="2">
            <v-btn @click="props.close" icon>
              <v-icon>mdi-close-circle-outline</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-alert>
    </template>
  </notifications>
</template>

<script>
export default {
  name: "Notification"
};
</script>

<style scoped>
.notify {
  width: 100%;
  border-radius: 2px;
  background-color: #383838;
  box-shadow: 5px 10px 18px #888888;
  color: white;
}
</style>
