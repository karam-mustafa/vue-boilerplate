<template>
  <v-form ref="form" lazy-validation>
    <v-row justify="center">
      <v-col cols="12" md="12" xl="3">
        <v-card shaped elevation="3">
          <v-card-text class="d-flex flex-column justify-center align-center">
            <slot name="header"></slot>
            <div class="text-center">
              <h2 class="green--text">{{ $t(options.title) }}</h2>
              <h3>{{ $t(options.description) }}</h3>
            </div>
            <div
              style="width: 100%;"
              v-for="(input, index) in inputs"
              :key="index"
            >
              <base-text-field
                v-if="getOnlyTextType(input.type)"
                :rules="input.rules"
                :placeholder="$t(input.title)"
                @input="changeInputValue($event, input.model, input.type)"
              ></base-text-field>
              <base-select-field
                @input="changeInputValue($event, input.model, input.type)"
                v-if="input.type == 'v-select'"
                :placeholder="$t(input.title)"
                :items="input.items"
                :label="input.label"
                :rules="input.rules"
              >
              </base-select-field>
              <base-password-field
                v-if="input.type == 'v-password'"
                :type="showPassword ? 'text' : 'password'"
                @input="changeInputValue($event, input.model, input.type)"
                :placeholder="$t('password')"
                :rules="input.rules"
                @click:append="showPassword = !showPassword"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              >
              </base-password-field>
              <base-file-field
                v-if="input.type == 'v-file-input'"
                @change="changeInputValue($event, input.model, input.type)"
                :rules="input.rules"
              >
              </base-file-field>
            </div>
            <slot name="customInputs"></slot>
            <slot name="formFooter"></slot>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import File from "../../Classes/File/File";

export default {
  name: "BaseFormBuilder",
  data: () => ({
    showPassword: false
  }),
  props: {
    valid: {
      type: Boolean,
      default: () => false
    },
    options: {
      type: Object,
      default: () => {}
    },
    inputs: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    getOnlyTextType(type) {
      let nonStringType = ["v-select", "v-password", "v-file-input"];
      return !nonStringType.includes(type);
    },
    changeInputValue(value, inputModel, inputType) {
      if (inputType == "file") {
        value = File.basicReturnFile(value);
      }
      this.$emit("updateModel", { input: inputModel, value: value });
    }
  }
};
</script>

<style scoped></style>
