import dinoEdit from './dino_edit'
import dinoShow from './dino_show'

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
        quantity: 10,
        diet: 'Carnivore'
      },
      {
        text: "triceratops",
        weight: "6,000 kg",
        quantity: 8,
        diet: 'Herbivore'
      },
      {
        text: "Stegosaurus",
        weight: "2,500 kg",
        quantity: 3,
        diet: 'Herbivore'
      }
    ],
    text: "",
    buttonText: "Add Dinosaur",
    currentView: 'dino-counter',
    dino: ''
  },
  filters: {
    capitalize: (value) => value.charAt(0).toUpperCase() + value.slice(1).toLowerCase(),
    undercase: (value) => value.toLowerCase(),
    url: (value) => `https://en.wikipedia.org/wiki/${value}`
  },
  methods: {
    addDino: function () {
      if (this.dino !== '') {
        this.dinos.push({
          text: this.dino,
          quantity: 1
        });
        this.dino = '';
      }
    },
    deleteDino: function (index) {
      this.total -= this.dinos[index].quantity;
      this.dinos.splice(index, 1);
    },
    incrementTotal: function (amount) {
      this.total += amount;
    },
    toggle: function () {
      this.currentView = this.currentView === 'dino-counter' ? 'dino-show' : 'dino-counter'
    }
  },
  computed: {
    totalSpecies: function () {
      this.speciesUpdated += 1;
      return this.dinos.length;
    },
    buttonDisabled: function () {
      return this.dino === '';
    },
    editLabel: function () {
      return this.currentView === 'dino-counter' ? 'Show' : 'Edit'
    }
  },
  watch: {
    dino: _.debounce(function () {
        this.buttonText = this.dino !== '' ? `Add ${this.dino}` : `Add Dinosaur`;
      }
      , 250)
  },
  components: {
    'dino-counter': dinoEdit,
    'dino-show': dinoShow,
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
  },
  created: function () {
    console.log(`vm is created, the title is ${this.title}`);
  },
  beforeCreate: function () {
    console.log(`before my Vue instance created, what can I do here?`);
  }
})