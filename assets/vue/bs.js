Vue.createApp({
  methods: {
    setupForm(id) {
      if(this.formId == id) {
        return
      }
      this.formId = id
      this.formData = this.$options.data().formData // reset formData
    }
  },
  data() {
    return {
      formId: null,
      formData: {
        amount: 0
      }
    }
  }
}).mount('#app')
