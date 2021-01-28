<template>
  <div class="my-container">
    <base-form-builder
      :valid="valid"
      :inputs="inputs"
      :options="formOptions"
      @updateModel="$updateModel"
      class="d-flex justify-center align-center"
      ref="form"
    >
      <template #formFooter>
        <div class="d-flex justify-center mb-10">
          <base-button rounded color="green" class="mx-2" @click="loginMethod()"
            >{{ $t("login") }}
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
          <span>{{ $t("ifNotHaveAccount") }}</span>
          <br />
          <base-button rounded outlined color="green" class="mt-3">
            <router-link
              class="text-sm-center green--text"
              :to="{ name: 'register' }"
              style="text-decoration: none"
              >{{ $t("register") }}</router-link
            >
          </base-button>
        </div>
      </template>
    </base-form-builder>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Login",
  data: () => ({
    /**
     * @desc valid form value
     * @author karam mustafa*/
    valid: true,
    inputs: [
      {
        title: "name",
        type: "v-text-field",
        model: "userName",
        rules: [v => !!v || "field required"]
      },
      {
        title: "password",
        type: "v-text-field",
        model: "password",
        rules: [v => !!v || "password required"]
      }
    ],
    formOptions: {
      title: "login",
      description: "this auto generate forms"
    },
    showPassword: false
  }),
  methods: {
    ...mapActions("Auth", { login: "login" }),
    /**
     * @desc login function
     * @author karam mustafa
     * */
    loginMethod() {
      if (!this.$refs.form.$refs.form.validate()) return;
      this.login(this.model)
        .then(() => this.$router.push({ name: "home" }))
        .catch(() => {});
    }
  }
};
</script>

<style scoped></style>
