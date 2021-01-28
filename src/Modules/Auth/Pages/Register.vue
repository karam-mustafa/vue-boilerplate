<template>
  <div class="my-container">
    <base-form-builder
      :valid="valid"
      :inputs="inputs"
      :options="formOptions"
      :model="model"
      @updateModel="$updateModel"
      class="d-flex justify-center align-center"
      ref="form"
    >
      <template #formFooter>
        <div class="d-flex justify-center mb-10">
          <base-button
            rounded
            color="green"
            class="mx-2"
            @click="registerMethod()"
            >{{ $t("register") }}
          </base-button>
          <base-button
            rounded
            outlined
            color="secondary"
            class="mx-2"
            :to="{ name: 'home' }"
            >{{ $t("cancel") }}
          </base-button>
        </div>
        <div class="text-center">
          <span>{{ $t("haveAccount") }}</span>
          <br />
          <base-button rounded outlined color="green" class="mt-3">
            <router-link
              class="text-sm-center green--text"
              :to="{ name: 'login' }"
              style="text-decoration: none"
              >{{ $t("login") }}</router-link
            >
          </base-button>
        </div>
      </template>
    </base-form-builder>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { registerInputs, registerModel } from "../Services/Auth.static";
export default {
  name: "Register",
  data: () => ({
    /**
     * @desc valid form value
     * @author karam mustafa*/
    valid: true,
    model: registerModel,
    inputs: registerInputs,
    formOptions: {
      title: "register form",
      description: "this auto generate forms"
    }
  }),
  methods: {
    ...mapActions("Auth", { register: "register" }),
    /**
     * @desc register function
     * @author karam mustafa
     * */
    registerMethod() {
      if (!this.$refs.form.$refs.form.validate()) return;
      this.register(this.model)
        .then(() => this.$router.push({ name: "home" }))
        .catch(() => {});
    }
  }
};
</script>

<style scoped></style>
