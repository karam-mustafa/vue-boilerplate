<script>
export default {
  name: "Forms",
  methods: {
    /**
     * @param {Object} model
     * @desc login function
     * @author karam mustafa
     * */
    $updateModel(model = {}) {
      if (this.model) {
        this.model[model.input] = model.value;
      } else {
        this.model = {};
        this.model[model.input] = model.value;
      }
    }
  }
};
</script>
