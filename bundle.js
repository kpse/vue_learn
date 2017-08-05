/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dino_edit__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dino_show__ = __webpack_require__(2);



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
      this.dinos.splice(index, 1)
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
    'dino-counter': __WEBPACK_IMPORTED_MODULE_0__dino_edit__["a" /* default */],
    'dino-show': __WEBPACK_IMPORTED_MODULE_1__dino_show__["a" /* default */],
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

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (Vue.component('dino-counter', {
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
}));

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (Vue.component('dino-show', {
  template: '#dino-show',
  props: ['name', 'diet']
}));

/***/ })
/******/ ]);