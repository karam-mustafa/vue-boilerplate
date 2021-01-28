export const registerInputs = [
  {
    title: "name",
    type: "v-text-field",
    model: "name",
    rules: [v => !!v || "field required"]
  },
  {
    title: "password",
    type: "v-password",
    model: "password",
    rules: [v => !!v || "field required"]
  },
  {
    title: "type",
    type: "v-select",
    model: "type",
    items: [
      { id: 1, name: "user" },
      { id: 2, name: "admin" }
    ],
    rules: [v => !!v || "field required"]
  },
  {
    title: "image",
    type: "v-file-input",
    model: "image",
    rules: [v => !!v || "field required"]
  }
];
export const registerModel = {
  name: "karam",
  password: "karam",
  type: "test1",
  image: ""
};
