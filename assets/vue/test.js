Vue.createApp({
  mounted() {
    fetch('../data/list.json')
      .then((response) => response.json())
      .then((data) => {
        this.items = data
      });
    this.account_id = Cookies.get('_account_id') // check login
  },
  methods: {
    login(newValue) {
      Cookies.set('_account_id', newValue)
      this.redirect_to(window.location.href)
    },
    logout() {
      Cookies.remove('_account_id')
      this.redirect_to(window.location.href)
    },
    redirect_to(href) {
      this.$nextTick(() => {
        window.location.href = href
      })
    }
  },
  data() {
    return {
      account_id: null,
      message: 'Hello Vue!',
      items: []
    }
  }
}).mount('#app')
