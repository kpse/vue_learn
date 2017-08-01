Vue.component('dino-counter', {
    template: '#dino-counter',
    props: ['name', 'initialq'],
    data: function () {
      console.log(`data init??`, this.initialq);
      this.$emit('increment', this.initialq);
      return {
        quantity: this.initialq
      }
    },
    methods: {
      increment: function () {
        this.quantity += 1;
        this.$emit('increment', 1);
      }
    }
  }
)

new Vue({
  el: "#card",
  data: {
    title: "Dinosaurs",
    content: "<strong>Dinosaurs</strong> are a diverse group of animals of the clade <em>Dinosauria</em> that first appeared during the Triassic period.",
    dinoUpdated: 0,
    speciesUpdated: 0,
    total: 0,
    message: `The page is rendered at ${new Date}`,
    dinos: [
      {
        text: "Velociraptor",
        weight: "15 kg",
        quantity: 10
      },
      {
        text: "triceratops",
        weight: "6,000 kg",
        quantity: 8
      },
      {
        text: "Stegosaurus",
        weight: "2,500 kg",
        quantity: 3
      }
    ],
    text: "",
    buttonText: "Add Dinosaur"
  },
  filters: {
    capitalize: (value) => value.charAt(0).toUpperCase() + value.slice(1).toLowerCase(),
    undercase: (value) => value.toLowerCase(),
    url: (value) => `https://en.wikipedia.org/wiki/${value}`
  },
  methods: {
    addDino: function () {
      if (this.input !== '') {
        this.dinos.push({
          text: this.input,
          quantity: 0
        });
        this.input = '';
      }
    },
    deleteDino: function (index) {
      this.dinos.splice(index, 1)
    },
    incrementTotal: function (amount) {
      console.log('counting', this.total, amount);
      this.total += amount;
    }
  },
  computed: {
    totalSpecies: function () {
      this.speciesUpdated += 1;
      return this.dinos.length;
    },
    buttonDisabled: function () {
      return this.input === '';
    }
  },
  watch: {
    input: _.debounce(function () {
        this.buttonText = this.input !== '' ? `Add ${this.input}` : `Add Dinosaur`;
      }
      , 250)
  }
});

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
  }
})