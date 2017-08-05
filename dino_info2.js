new Vue({
  el: '#card2',
  data: {
    title: 'Style Bindings',
    isRounding: false,
    sizeToggle: false,
    disabled: false,
    backgroundColor: '#CCCCCC',
    fontColor: '#000000',
    range: 50
  },
  computed: {
    styles: function () {
      return {
        color: this.fontColor,
        background: this.backgroundColor,
        'margin-left': this.range + '%'
      }
    }
  },
  created: function () {
    console.log(`vm is created, the title is ${this.title}`);
  },
  beforeCreate: function () {
    console.log(`before my Vue instance created, what can I do here?`);
  }
})