var card = new Vue({
  el: "#card",
  data: {
    title: "Dinosaurs",
    content: "<strong>Dinosaurs</strong> are a diverse group of animals of the clade <em>Dinosauria</em> that first appeared during the Triassic period.",
    dinoUpdated: 0,
    speciesUpdated: 0,
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
    ]
  },
  filters: {
    capitalize: (value) => value.charAt(0).toUpperCase() + value.slice(1).toLowerCase(),
    undercase: (value) => value.toLowerCase(),
    url: (value) => `https://en.wikipedia.org/wiki/${value}`
  },
  methods: {
    addDino: function () {
      const input = document.getElementById('dino-form');
      if (input.value !== '') {
        this.dinos.push({
          text: input.value,
          quantity: 0
        });
        input.value = '';
      }
    },
    deleteDino: function (index) {
      this.dinos.splice(index, 1)
    }
  },
  computed: {
    totalDinos: function () {
      this.dinoUpdated += 1;
      return _.sum(_.map(this.dinos, 'quantity'));
    },
    totalSpecies: function () {
      this.speciesUpdated += 1;
      return this.dinos.length;
    }
  }
});