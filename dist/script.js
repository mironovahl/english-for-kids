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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/data */ "./src/js/data.js");
/* harmony import */ var _js_generate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/generate */ "./src/js/generate.js");
/* harmony import */ var _js_generatePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/generatePage */ "./src/js/generatePage.js");
/* harmony import */ var _js_play__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/play */ "./src/js/play.js");
/* harmony import */ var _js_audio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/audio */ "./src/js/audio.js");





var BURGER = document.querySelector('.header__burger');
var MENU = document.querySelector('.sidebar');
var CONTENT = document.querySelector('.content');
var SWITCH = document.querySelector('.header__switcher');
BURGER.addEventListener('click', function (event) {
  if (document.querySelector('.sidebar').classList.contains('show')) {
    document.querySelector('.sidebar').classList.remove('show');
    document.querySelector('.header__burger').classList.remove('open');
  } else {
    document.querySelector('.header__burger').classList.add('open');
    document.querySelector('.sidebar').classList.add('show');
  }
});
SWITCH.addEventListener('click', function (event) {
  if (document.querySelector('.header__switcher').classList.contains('check')) {
    document.querySelector('.header__switcher').classList.remove('check');
    Object(_js_play__WEBPACK_IMPORTED_MODULE_3__["Play"])();
  } else {
    document.querySelector('.header__switcher').classList.add('check');
    Object(_js_play__WEBPACK_IMPORTED_MODULE_3__["Play"])();
  }
});
MENU.addEventListener('click', function (event) {
  if (event.target.closest('.menu')) {
    MENU.querySelectorAll('li').forEach(function (el) {
      return el.classList.remove('active');
    });
    event.target.classList.add('active');

    if (!event.target.classList.contains('menu__categories')) {
      document.querySelector('.sidebar').classList.remove('show');
      document.querySelector('.header__burger').classList.remove('open');
      var choice = event.target.innerText;

      if (event.target.innerText == 'Main') {
        choice = 'Categories';
      }

      Object(_js_generatePage__WEBPACK_IMPORTED_MODULE_2__["createPage"])(choice);
      Object(_js_play__WEBPACK_IMPORTED_MODULE_3__["Play"])();
    }
  }
});
CONTENT.addEventListener('click', function (event) {
  if (event.target.classList.contains('rotate')) {
    event.target.closest('.card').classList.add('translate');

    event.target.closest('.card').onmouseleave = function () {
      event.target.closest('.card').classList.remove('translate');
    };
  } else if (event.target.closest('.card') && !event.target.closest('.card').classList.contains('translate') && !event.target.closest('.card').classList.contains('play')) {
    var elem = event.target.closest('.card');
    var choice = document.querySelector('.header__text_categories').innerHTML;
    var ListCard = document.querySelector('.content').childNodes;

    for (var i = 0; i < ListCard.length; i++) {
      if (ListCard[i] == elem) {
        var c = new _js_generate__WEBPACK_IMPORTED_MODULE_1__["Card"](_js_data__WEBPACK_IMPORTED_MODULE_0__["default"][choice][i]);
        c.PlayAudio();
      }
    }
  } else if (event.target.closest('.card') && document.querySelector('.button_start').classList.contains('repeat') && event.target.closest('.card').classList.contains('play')) {
    var _elem = event.target.closest('.card').id;
    var n = new _js_audio__WEBPACK_IMPORTED_MODULE_4__["Sound"](document.querySelector('.header__text_categories').innerHTML);
  } else if (event.target.closest('.card-categories')) {
    Object(_js_generatePage__WEBPACK_IMPORTED_MODULE_2__["createPage"])(event.target.closest('.card-categories').id);
    Object(_js_play__WEBPACK_IMPORTED_MODULE_3__["Play"])();
  }
});

window.onload = function () {
  Object(_js_generatePage__WEBPACK_IMPORTED_MODULE_2__["createPage"])('Categories');
};

/***/ }),

/***/ "./src/js/audio.js":
/*!*************************!*\
  !*** ./src/js/audio.js ***!
  \*************************/
/*! exports provided: Sound */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sound", function() { return Sound; });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/js/data.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var Sound = /*#__PURE__*/function () {
  function Sound(categ) {
    _classCallCheck(this, Sound);

    this.categ = categ;
  }

  _createClass(Sound, [{
    key: "AudioGenerate",
    value: function AudioGenerate() {
      var sounds = [];

      for (var i = 0; i < _data__WEBPACK_IMPORTED_MODULE_0__["default"][this.categ].length; i++) {
        sounds[i] = _data__WEBPACK_IMPORTED_MODULE_0__["default"][this.categ][i].audio;
      }

      return sounds;
    }
  }, {
    key: "AudioChoice",
    value: function AudioChoice(sounds) {
      var rand = Math.floor(Math.random() * sounds.length);
      var audio = new Audio(sounds[rand]);
      return audio;
    }
  }, {
    key: "Repeat",
    value: function Repeat(audio) {
      this.audio = audio;
      audio.play();
    }
  }]);

  return Sound;
}();

/***/ }),

/***/ "./src/js/data.js":
/*!************************!*\
  !*** ./src/js/data.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var data = {
  Family: [{
    word: 'Mother',
    translate: 'Мама',
    image: '../src/img/family/mother.jpg',
    audio: '../src/audio/family/mother.mp3'
  }, {
    word: 'Father',
    translate: 'Папа',
    image: '../src/img/family/father.jpg',
    audio: '../src/audio/family/father.mp3'
  }, {
    word: 'Brother',
    translate: 'Брат',
    image: '../src/img/family/brother.jpg',
    audio: '../src/audio/family/brother.mp3'
  }, {
    word: 'Sister',
    translate: 'Сестра',
    image: '../src/img/family/sister.jpg',
    audio: '../src/audio/family/sister.mp3'
  }, {
    word: 'Son',
    translate: 'Сын',
    image: '../src/img/family/son.jpg',
    audio: '../src/audio/family/son.mp3'
  }, {
    word: 'Daughter',
    translate: 'Дочь',
    image: '../src/img/family/daughter.jpg',
    audio: '../src/audio/family/daughter.mp3'
  }, {
    word: 'Grandmother',
    translate: 'Бабушка',
    image: '../src/img/family/grandmother.jpg',
    audio: '../src/audio/family/grandmother.mp3'
  }, {
    word: 'Grandfather',
    translate: 'Дедушка',
    image: '../src/img/family/grandfather.jpg',
    audio: '../src/audio/family/grandfather.mp3'
  }],
  Clothes: [{
    word: 'Socks',
    translate: 'Носки',
    image: '../src/img/clothes/socks.jpg',
    audio: '../src/audio/clothes/socks.mp3'
  }, {
    word: 'Jeans',
    translate: 'Джинсы',
    image: '../src/img/clothes/jeans.jpg',
    audio: '../src/audio/clothes/jeans.mp3'
  }, {
    word: 'Shirt',
    translate: 'Рубашка',
    image: '../src/img/clothes/shirt.jpg',
    audio: '../src/audio/clothes/shirt.mp3'
  }, {
    word: 'Dress',
    translate: 'Платье',
    image: '../src/img/clothes/dress.jpg',
    audio: '../src/audio/clothes/dress.mp3'
  }, {
    word: 'Skirt',
    translate: 'Юбка',
    image: '../src/img/clothes/skirt.jpg',
    audio: '../src/audio/clothes/skirt.mp3'
  }, {
    word: 'Cap',
    translate: 'Шапка',
    image: '../src/img/clothes/cap.jpg',
    audio: '../src/audio/clothes/cap.mp3'
  }, {
    word: 'Sweater',
    translate: 'Свитер',
    image: '../src/img/clothes/sweater.jpg',
    audio: '../src/audio/clothes/sweater.mp3'
  }, {
    word: 'Boots',
    translate: 'Ботинки',
    image: '../src/img/clothes/boots.jpg',
    audio: '../src/audio/clothes/boots.mp3'
  }],
  Animal: [{
    word: 'Cat',
    translate: 'Кошка',
    image: '../src/img/animals/cat.jpg',
    audio: '../src/audio/animal/cat.mp3'
  }, {
    word: 'Turtle',
    translate: 'Черепаха',
    image: '../src/img/animals/turtle.jpg',
    audio: '../src/audio/animal/turtle.mp3'
  }, {
    word: 'Horse',
    translate: 'Лошадь',
    image: '../src/img/animals/horse.jpg',
    audio: '../src/audio/animal/horse.mp3'
  }, {
    word: 'Rabbit',
    translate: 'Кролик',
    image: '../src/img/animals/rabbit.jpg',
    audio: '../src/audio/animal/rabbit.mp3'
  }, {
    word: 'Lion',
    translate: 'Лев',
    image: '../src/img/animals/lion.jpg',
    audio: '../src/audio/animal/lion.mp3'
  }, {
    word: 'Bird',
    translate: 'Птица',
    image: '../src/img/animals/bird.jpg',
    audio: '../src/audio/animal/bird.mp3'
  }, {
    word: 'Giraffe',
    translate: 'Жираф',
    image: '../src/img/animals/giraffe.jpg',
    audio: '../src/audio/animal/giraffe.mp3'
  }, {
    word: 'Dog',
    translate: 'Собака',
    image: '../src/img/animals/dog.jpg',
    audio: '../src/audio/animal/dog.mp3'
  }],
  Food: [{
    word: 'Bread',
    translate: 'Хлеб',
    image: '../src/img/food/bread.jpg',
    audio: '../src/audio/food/bread.mp3'
  }, {
    word: 'Egg',
    translate: 'Яйца',
    image: '../src/img/food/eggs.jpg',
    audio: '../src/audio/food/eggs.mp3'
  }, {
    word: 'Cherry',
    translate: 'Вишня',
    image: '../src/img/food/cherry.jpg',
    audio: '../src/audio/food/cherry.mp3'
  }, {
    word: 'Cheese',
    translate: 'Сыр',
    image: '../src/img/food/cheese.jpg',
    audio: '../src/audio/food/cheese.mp3'
  }, {
    word: 'Tomato',
    translate: 'Помидор',
    image: '../src/img/food/tomato.jpg',
    audio: '../src/audio/food/tomato.mp3'
  }, {
    word: 'Pizza',
    translate: 'Пицца',
    image: '../src/img/food/pizza.jpg',
    audio: '../src/audio/food/pizza.mp3'
  }, {
    word: 'Soup',
    translate: 'Cуп',
    image: '../src/img/food/soup.jpg',
    audio: '../src/audio/food/soup.mp3'
  }, {
    word: 'Sandwich',
    translate: 'Ботинки',
    image: '../src/img/food/sandwich.jpg',
    audio: '../src/audio/food/sandwich.mp3'
  }],
  Figures: [{
    word: 'Circle',
    translate: 'Круг',
    image: '../src/img/figure/circle.jpg',
    audio: '../src/audio/figure/circle.mp3'
  }, {
    word: 'Rectangle',
    translate: 'Прямоугольник',
    image: '../src/img/figure/rectangle.jpg',
    audio: '../src/audio/figure/rectangle.mp3'
  }, {
    word: 'Triangle',
    translate: 'Треугольник',
    image: '../src/img/figure/triangle.jpg',
    audio: '../src/audio/figure/triangle.mp3'
  }, {
    word: 'Square',
    translate: 'Квадрат',
    image: '../src/img/figure/square.jpg',
    audio: '../src/audio/figure/square.mp3'
  }, {
    word: 'Ellipse',
    translate: 'Эллипс',
    image: '../src/img/figure/ellipse.jpg',
    audio: '../src/audio/figure/ellipse.mp3'
  }, {
    word: 'Star',
    translate: 'Звезда',
    image: '../src/img/figure/star.jpg',
    audio: '../src/audio/figure/star.mp3'
  }, {
    word: 'Diamond',
    translate: 'Ромб',
    image: '../src/img/figure/diamond.jpg',
    audio: '../src/audio/figure/diamond.mp3'
  }, {
    word: 'Heart',
    translate: 'Сердце',
    image: '../src/img/figure/heart.jpg',
    audio: '../src/audio/figure/heart.mp3'
  }],
  Nature: [{
    word: 'Tree',
    translate: 'Дерево',
    image: '../src/img/nature/tree.jpg',
    audio: '../src/audio/nature/tree.mp3'
  }, {
    word: 'Flower',
    translate: 'Цветок',
    image: '../src/img/nature/flower.jpg',
    audio: '../src/audio/nature/flower.mp3'
  }, {
    word: 'Sea',
    translate: 'Море',
    image: '../src/img/nature/sea.jpg',
    audio: '../src/audio/nature/sea.mp3'
  }, {
    word: 'Mountain',
    translate: 'Гора',
    image: '../src/img/nature/mountain.jpg',
    audio: '../src/audio/nature/mountain.mp3'
  }, {
    word: 'Leaf',
    translate: 'Лист',
    image: '../src/img/nature/leaf.jpg',
    audio: '../src/audio/nature/leaf.mp3'
  }, {
    word: 'Flame',
    translate: 'Пламя',
    image: '../src/img/nature/flame.jpg',
    audio: '../src/audio/nature/flame.mp3'
  }, {
    word: 'Grass',
    translate: 'Трава',
    image: '../src/img/nature/grass.jpg',
    audio: '../src/audio/nature/grass.mp3'
  }, {
    word: 'Sky',
    translate: 'Небо',
    image: '../src/img/nature/sky.jpg',
    audio: '../src/audio/nature/sky.mp3'
  }],
  Emotion: [{
    word: 'Happy',
    translate: 'Счастливый',
    image: '../src/img/emotion/happy.jpg',
    audio: '../src/audio/emotion/happy.mp3'
  }, {
    word: 'Angry',
    translate: 'Сердитый',
    image: '../src/img/emotion/angry.jpg',
    audio: '../src/audio/emotion/angry.mp3'
  }, {
    word: 'Surprised',
    translate: 'Удивленный',
    image: '../src/img/emotion/surprised.jpg',
    audio: '../src/audio/emotion/surprised.mp3'
  }, {
    word: 'Sad',
    translate: 'Грустный',
    image: '../src/img/emotion/sad.jpg',
    audio: '../src/audio/emotion/sad.mp3'
  }, {
    word: 'Smile',
    translate: 'Улыбка',
    image: '../src/img/emotion/smile.jpg',
    audio: '../src/audio/emotion/smile.mp3'
  }, {
    word: 'Scared',
    translate: 'Испуганный',
    image: '../src/img/emotion/scared.jpg',
    audio: '../src/audio/emotion/scared.mp3'
  }, {
    word: 'Laugh',
    translate: 'Смех',
    image: '../src/img/emotion/laugh.jpg',
    audio: '../src/audio/emotion/laugh.mp3'
  }, {
    word: 'Tired',
    translate: 'Уставший',
    image: '../src/img/emotion/tired.jpg',
    audio: '../src/audio/emotion/tired.mp3'
  }],
  Action: [{
    word: 'Cook',
    translate: 'Готовить',
    image: '../src/img/action/cook.jpg',
    audio: '../src/audio/action/cook.mp3'
  }, {
    word: 'Dance',
    translate: 'Танцевать',
    image: '../src/img/action/dance.jpg',
    audio: '../src/audio/action/dance.mp3'
  }, {
    word: 'Draw',
    translate: 'Рисовать',
    image: '../src/img/action/draw.jpg',
    audio: '../src/audio/action/draw.mp3'
  }, {
    word: 'Sing',
    translate: 'Петь',
    image: '../src/img/action/sing.jpg',
    audio: '../src/audio/action/sing.mp3'
  }, {
    word: 'Read',
    translate: 'Чиать',
    image: '../src/img/action/read.jpg',
    audio: '../src/audio/action/read.mp3'
  }, {
    word: 'Run',
    translate: 'Бегать',
    image: '../src/img/action/run.jpg',
    audio: '../src/audio/action/run.mp3'
  }, {
    word: 'Jump',
    translate: 'Прыгать',
    image: '../src/img/action/jump.jpg',
    audio: '../src/audio/action/jump.mp3'
  }, {
    word: 'Swim',
    translate: 'Ботинки',
    image: '../src/img/action/swim.jpg',
    audio: '../src/audio/action/swim.mp3'
  }],
  Categories: [{
    word: 'Family',
    image: '../src/img/categories/Family.jpg'
  }, {
    word: 'Clothes',
    image: '../src/img/categories/clothes.jpg'
  }, {
    word: 'Animal',
    image: '../src/img/categories/animal.jpg'
  }, {
    word: 'Food',
    image: '../src/img/categories/food.jpg'
  }, {
    word: 'Figures',
    image: '../src/img/categories/figure.jpg'
  }, {
    word: 'Nature',
    image: '../src/img/categories/nature.jpg'
  }, {
    word: 'Emotion',
    image: '../src/img/categories/emotion.jpg'
  }, {
    word: 'Action',
    image: '../src/img/categories/Action.jpg'
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (data);

/***/ }),

/***/ "./src/js/generate.js":
/*!****************************!*\
  !*** ./src/js/generate.js ***!
  \****************************/
/*! exports provided: Card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Card = /*#__PURE__*/function () {
  function Card(_ref) {
    var word = _ref.word,
        translate = _ref.translate,
        image = _ref.image,
        audio = _ref.audio;

    _classCallCheck(this, Card);

    this.word = word;
    this.translate = translate;

    if (translate == undefined) {
      translate = false;
    }

    ;

    if (audio == undefined) {
      audio = false;
    }

    ;
    this.image = image;
    this.audio = audio;
  }

  _createClass(Card, [{
    key: "generateCard",
    value: function generateCard() {
      var template = '';
      var div = document.createElement('div');
      div.className = 'card';
      div.id = this.word;
      template += "<div class=\"front\">";
      template += "<img class=\"image\" src=".concat(this.image, " alt=").concat(this.word, ">");
      template += "<div class=\"card_text\">";
      template += "<span class=\"word\">".concat(this.word, "</span>");
      template += "</div>";

      if (this.audio || this.translate) {
        template += "<img class=\"rotate\" src=../src/img/rotate.png alt=arrow>";
      }

      template += "</div>";
      template += "</div>";

      if (this.audio || this.translate) {
        template += "<div class=\"back\">";
        template += "<img class=\"image\" src=".concat(this.image, " alt=").concat(this.word, ">");
        template += "<div class=\"card_text\">";
        template += "<span class=\"translate\">".concat(this.translate, "</span>");
        template += "</div>";
        template += "</div>";
      } else {
        div.className += '-categories';
      }

      div.innerHTML = template;
      return div;
    }
  }, {
    key: "PlayAudio",
    value: function PlayAudio() {
      var audio = new Audio(this.audio);
      audio.play();
    }
  }]);

  return Card;
}();

/***/ }),

/***/ "./src/js/generatePage.js":
/*!********************************!*\
  !*** ./src/js/generatePage.js ***!
  \********************************/
/*! exports provided: createPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPage", function() { return createPage; });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/js/data.js");
/* harmony import */ var _generate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generate */ "./src/js/generate.js");



var createPage = function createPage(choice) {
  document.querySelector('.header__text_categories').innerHTML = choice;

  var renderCard = function renderCard() {
    var content = getContainer();
    generateCards(_data__WEBPACK_IMPORTED_MODULE_0__["default"][choice]).forEach(function (el) {
      content.append(el.generateCard());
    });
  };

  var getContainer = function getContainer() {
    var container = document.querySelector('.content');
    container.innerHTML = '';
    return container;
  };

  var generateCards = function generateCards(d) {
    var cards = [];
    d.forEach(function (el) {
      cards.push(new _generate__WEBPACK_IMPORTED_MODULE_1__["Card"](el));
    });
    return cards;
  };

  if (_data__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    renderCard();
  }
};



/***/ }),

/***/ "./src/js/play.js":
/*!************************!*\
  !*** ./src/js/play.js ***!
  \************************/
/*! exports provided: Play */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Play", function() { return Play; });
/* harmony import */ var _audio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./audio */ "./src/js/audio.js");


var Play = function Play() {
  if (document.querySelector('.header__switcher').classList.contains('check')) {
    document.querySelectorAll('.card').forEach(function (el) {
      return el.classList.add('play');
    });
    document.querySelectorAll('.card-categories').forEach(function (el) {
      return el.classList.add('play');
    });
    var div = document.createElement('div');

    if (document.querySelector('.content').children[1].classList.contains('card')) {
      div.className = 'button game';
      div.innerHTML = "<button class=\"button_start\">Start game</button>";
      document.querySelector('.content').append(div);
      var n = new _audio__WEBPACK_IMPORTED_MODULE_0__["Sound"](document.querySelector('.header__text_categories').innerHTML);
      var soundList = n.AudioGenerate();
      var choice = n.AudioChoice(soundList);

      document.querySelector('.button_start').onclick = function () {
        if (!document.querySelector('.button_start').classList.contains('repeat')) {
          document.querySelector('.button_start').classList.add('repeat');
          document.querySelector('.button_start').innerHTML = 'R';
          n.Repeat(choice);
        } else {
          n.Repeat(choice);
        }
      };
    }
  } else {
    document.querySelectorAll('.card').forEach(function (el) {
      return el.classList.remove('play');
    });
    document.querySelectorAll('.card-categories').forEach(function (el) {
      return el.classList.remove('play');
    });
    document.querySelectorAll('.button').forEach(function (el) {
      return el.classList.remove('game');
    });
  }
};



/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!**************************************************!*\
  !*** multi ./src/index.js ./src/sass/style.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/index.js */"./src/index.js");
module.exports = __webpack_require__(/*! ./src/sass/style.scss */"./src/sass/style.scss");


/***/ })

/******/ });
//# sourceMappingURL=script.js.map