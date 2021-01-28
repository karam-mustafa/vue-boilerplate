<script>
export default {
  name: "Direction",
  computed: {
    /**
     * @desc login function
     * @author karam mustafa
     * @return Boolean
     * */
    $isRTL() {
      return this.$vuetify.rtl;
    }
  },
  methods: {
    /**
     * @param {String} lang
     * @desc login function
     * @author karam mustafa
     * @return void
     * */
    $setLang(lang) {
      this.$i18n.locale = lang;
      this.$vuetify.rtl = lang == "ar" ? true : false;
      localStorage.setItem("locale", lang);
      localStorage.setItem("rtl", this.$vuetify.rtl);
    }
  }
};
</script>
