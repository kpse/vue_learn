export default Vue.component('dino-counter', {
  template: '#dino-counter',
  props: ['name', 'initialQuantity'],
  data: function () {
    this.$emit('increment', this.initialQuantity);
    return {
      quantity: this.initialQuantity
    }
  },
  methods: {
    increment: function () {
      this.quantity += 1;
      this.$emit('increment', 1);
    }
  },
  filters: {
    capitalize: (value) => value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
  }
});