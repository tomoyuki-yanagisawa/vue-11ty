Vue.createApp({
  mounted() {
    fetch('../data/list.json')
      .then((response) => response.json())
      .then((data) => {
        this.items = data
      });
  },
  data() {
    return {
      message: 'Hello Vue!',
      items: []
    }
  }
}).mount('#app')
