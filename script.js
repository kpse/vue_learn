var card = new Vue({
  el: "#card",
  data: {
    title: "Dinosaurs",
    content: "<strong>Dinosaurs</strong> are a diverse group of animals of the clade <em>Dinosauria</em> that first appeared during the Triassic period.",
    dinos: [
      {
        text: "Velociraptor",
        weight: "15 kg"
      },
      {
        text: "triceratops",
        weight: "6,000 kg"
      },
      {
        text: "Stegosaurus",
        weight: "2,500 kg"
      }
    ]
  },
  filters: {
    capitalize: (value) => value.charAt(0).toUpperCase() + value.slice(1).toLowerCase(),
    undercase: (value) => value.toLowerCase(),
    url: (value) => `https://en.wikipedia.org/wiki/${value}`
  },
  methods: {
    addDino: function() {
      const input = document.getElementById('dino-form');
      if(input.value !== '') {
        this.dinos.push({
          text: input.value
        });
        input.value = '';
      }
    },
    deleteDino: function (index) {
      this.dinos.splice(index, 1)
    }
  }
});