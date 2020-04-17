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
/* harmony import */ var _js_close__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/close */ "./src/js/close.js");
/* harmony import */ var _js_result__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/result */ "./src/js/result.js");







var BURGER = document.querySelector('.header__burger');
var MENU = document.querySelector('.sidebar');
var CONTENT = document.querySelector('.content');
var SWITCH = document.querySelector('.header__switcher');
var HEADER = document.querySelector('header');
var count = 1;
var countFail = 0;
var dataS = JSON.parse(localStorage.getItem("data"));

if (dataS == null) {
  localStorage.setItem("data", JSON.stringify(_js_data__WEBPACK_IMPORTED_MODULE_0__["default"]));
  dataS = JSON.parse(localStorage.getItem("data"));
}

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
    count = 1;
    countFail = 0;
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

      if (event.target.innerText == 'Statistics') {
        if (!document.querySelector('main').contains(document.querySelector('.button-statistics'))) Object(_js_generatePage__WEBPACK_IMPORTED_MODULE_2__["StatisticButton"])();
        CONTENT.classList.add('statistic');
      } else {
        if (document.querySelector('main').contains(document.querySelector('.button-statistics'))) {
          var elem = document.querySelector('.button-statistics');
          elem.parentNode.removeChild(elem);
        }
      }

      Object(_js_generatePage__WEBPACK_IMPORTED_MODULE_2__["createPage"])(choice);
      Object(_js_play__WEBPACK_IMPORTED_MODULE_3__["Play"])();
    }
  }
});

CONTENT.onclick = function () {
  Object(_js_close__WEBPACK_IMPORTED_MODULE_5__["close"])();

  if (event.target.classList.contains('button-sort')) {
    document.querySelector('.header__text_categories').classList.add('yes');
    Object(_js_generatePage__WEBPACK_IMPORTED_MODULE_2__["createPage"])(document.querySelector('.header__text_categories').innerHTML);
  } else if (event.target.classList.contains('button-restart')) {
    document.querySelector('.header__text_categories').classList.add('yes');
    Object(_js_generatePage__WEBPACK_IMPORTED_MODULE_2__["createPage"])(document.querySelector('.header__text_categories').innerHTML);
  } else if (event.target.classList.contains('rotate')) {
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
        var c = new _js_generate__WEBPACK_IMPORTED_MODULE_1__["Card"](dataS[choice][i]);
        dataS[choice][i].click += 1;
        localStorage.setItem("data", JSON.stringify(dataS));
        c.PlayAudio();
      }
    }
  } else if (event.target.closest('.card') && document.querySelector('.button_start').classList.contains('repeat') && event.target.closest('.card').classList.contains('play') && !event.target.closest('.card').classList.contains('inactive')) {
    var _elem = event.target.closest('.card').id;
    var n = new _js_audio__WEBPACK_IMPORTED_MODULE_4__["Sound"](document.querySelector('.header__text_categories').innerHTML);
    var soundList = JSON.parse(localStorage.getItem("soundList"));
    var m = localStorage.getItem("randAudio");

    if (n.Check(_elem, m)) {
      var k = n.AudioChoice(soundList, count);
      count++;
      setTimeout(n.Repeat, 1000, k);
      event.target.closest('.card').classList.add('inactive');
      Object(_js_result__WEBPACK_IMPORTED_MODULE_6__["createStar"])(true);
    } else {
      countFail++;
      Object(_js_result__WEBPACK_IMPORTED_MODULE_6__["createStar"])(false);
    }

    if (count == 9) {
      Object(_js_result__WEBPACK_IMPORTED_MODULE_6__["ResultPage"])(countFail);
      count = 1;
      countFail = 0;
      setTimeout(_js_generatePage__WEBPACK_IMPORTED_MODULE_2__["createPage"], 3000, 'Categories');
      setTimeout(_js_play__WEBPACK_IMPORTED_MODULE_3__["Play"], 3000);
    }
  } else if (event.target.closest('.card-categories')) {
    Object(_js_generatePage__WEBPACK_IMPORTED_MODULE_2__["createPage"])(event.target.closest('.card-categories').id);
    Object(_js_play__WEBPACK_IMPORTED_MODULE_3__["Play"])();
  }
};

HEADER.addEventListener('click', function (event) {
  if (!event.target.classList.contains('header__burger') && !event.target.closest('.header__burger') && !event.target.closest('.sidebar')) Object(_js_close__WEBPACK_IMPORTED_MODULE_5__["close"])();
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

      return sounds.sort(function () {
        return Math.random() - 0.5;
      });
    }
  }, {
    key: "AudioChoice",
    value: function AudioChoice(sounds, i) {
      var audio = new Audio(sounds[i]);
      localStorage.setItem("randAudio", sounds[i]);
      return audio;
    }
  }, {
    key: "Repeat",
    value: function Repeat(audio) {
      this.audio = audio;
      audio.play();
    }
  }, {
    key: "Check",
    value: function Check(id, randAudio) {
      for (var i = 0; i < _data__WEBPACK_IMPORTED_MODULE_0__["default"][this.categ].length; i++) {
        if (_data__WEBPACK_IMPORTED_MODULE_0__["default"][this.categ][i].word == id) {
          if (_data__WEBPACK_IMPORTED_MODULE_0__["default"][this.categ][i].audio == randAudio) {
            var audio = new Audio('../src/audio/correct.mp3');
            var dataS = JSON.parse(localStorage.getItem("data"));
            dataS[this.categ][i].win += 1;
            localStorage.setItem("data", JSON.stringify(dataS));
            audio.play();
            return true;
          } else {
            var _audio = new Audio('../src/audio/error.mp3');

            _audio.play();

            for (var _i = 0; _i < _data__WEBPACK_IMPORTED_MODULE_0__["default"][this.categ].length; _i++) {
              if (_data__WEBPACK_IMPORTED_MODULE_0__["default"][this.categ][_i].audio == randAudio) {
                var _dataS = JSON.parse(localStorage.getItem("data"));

                _dataS[this.categ][_i].fail += 1;
                localStorage.setItem("data", JSON.stringify(_dataS));
              }
            }

            return false;
          }
        }
      }
    }
  }]);

  return Sound;
}();

/***/ }),

/***/ "./src/js/close.js":
/*!*************************!*\
  !*** ./src/js/close.js ***!
  \*************************/
/*! exports provided: close */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "close", function() { return close; });
var close = function close() {
  document.querySelector('.sidebar').classList.remove('show');
  document.querySelector('.header__burger').classList.remove('open');
};



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
    audio: '../src/audio/family/mother.mp3',
    click: 0,
    win: 0,
    fail: 0,
    proc: 0
  }, {
    word: 'Father',
    translate: 'Папа',
    image: '../src/img/family/father.jpg',
    audio: '../src/audio/family/father.mp3',
    click: 0,
    win: 0,
    fail: 0,
    proc: 0
  }, {
    word: 'Brother',
    translate: 'Брат',
    image: '../src/img/family/brother.jpg',
    audio: '../src/audio/family/brother.mp3',
    click: 0,
    win: 0,
    fail: 0,
    proc: 0
  }, {
    word: 'Sister',
    translate: 'Сестра',
    image: '../src/img/family/sister.jpg',
    audio: '../src/audio/family/sister.mp3',
    click: 0,
    win: 0,
    fail: 0,
    proc: 0
  }, {
    word: 'Son',
    translate: 'Сын',
    image: '../src/img/family/son.jpg',
    audio: '../src/audio/family/son.mp3',
    click: 0,
    win: 0,
    fail: 0,
    proc: 0
  }, {
    word: 'Daughter',
    translate: 'Дочь',
    image: '../src/img/family/daughter.jpg',
    audio: '../src/audio/family/daughter.mp3',
    click: 0,
    win: 0,
    fail: 0,
    proc: 0
  }, {
    word: 'Grandmother',
    translate: 'Бабушка',
    image: '../src/img/family/grandmother.jpg',
    audio: '../src/audio/family/grandmother.mp3',
    click: 0,
    win: 0,
    fail: 0,
    proc: 0
  }, {
    word: 'Grandfather',
    translate: 'Дедушка',
    image: '../src/img/family/grandfather.jpg',
    audio: '../src/audio/family/grandfather.mp3',
    click: 0,
    win: 0,
    fail: 0,
    proc: 0
  }],
  Clothes: [{
    word: 'Socks',
    translate: 'Носки',
    image: '../src/img/clothes/socks.jpg',
    audio: '../src/audio/clothes/socks.mp3',
    click: 0,
    win: 0,
    fail: 0,
    proc: 0
  }, {
    word: 'Jeans',
    translate: 'Джинсы',
    image: '../src/img/clothes/jeans.jpg',
    audio: '../src/audio/clothes/jeans.mp3',
    click: 0,
    win: 0,
    fail: 0,
    proc: 0
  }, {
    word: 'Shirt',
    translate: 'Рубашка',
    image: '../src/img/clothes/shirt.jpg',
    audio: '../src/audio/clothes/shirt.mp3',
    click: 0,
    win: 0,
    fail: 0,
    proc: 0
  }, {
    word: 'Dress',
    translate: 'Платье',
    image: '../src/img/clothes/dress.jpg',
    audio: '../src/audio/clothes/dress.mp3',
    click: 0,
    win: 0,
    fail: 0,
    proc: 0
  }, {
    word: 'Skirt',
    translate: 'Юбка',
    image: '../src/img/clothes/skirt.jpg',
    audio: '../src/audio/clothes/skirt.mp3',
    click: 0,
    win: 0,
    fail: 0,
    proc: 0
  }, {
    word: 'Cap',
    translate: 'Шапка',
    image: '../src/img/clothes/cap.jpg',
    audio: '../src/audio/clothes/cap.mp3',
    click: 0,
    win: 0,
    fail: 0,
    proc: 0
  }, {
    word: 'Sweater',
    translate: 'Свитер',
    image: '../src/img/clothes/sweater.jpg',
    audio: '../src/audio/clothes/sweater.mp3',
    click: 0,
    win: 0,
    fail: 0,
    proc: 0
  }, {
    word: 'Boots',
    translate: 'Ботинки',
    image: '../src/img/clothes/boots.jpg',
    audio: '../src/audio/clothes/boots.mp3',
    click: 0,
    win: 0,
    fail: 0,
    proc: 0
  }],
  Animal: [{
    word: 'Cat',
    translate: 'Кошка',
    image: '../src/img/animals/cat.jpg',
    audio: '../src/audio/animal/cat.mp3',
    click: 0,
    win: 0,
    fail: 0,
    proc: 0
  }, {
    word: 'Turtle',
    translate: 'Черепаха',
    image: '../src/img/animals/turtle.jpg',
    audio: '../src/audio/animal/turtle.mp3',
    click: 0,
    win: 0,
    fail: 0,
    proc: 0
  }, {
    word: 'Horse',
    translate: 'Лошадь',
    image: '../src/img/animals/horse.jpg',
    audio: '../src/audio/animal/horse.mp3',
    click: 0,
    win: 0,
    fail: 0,
    proc: 0
  }, {
    word: 'Rabbit',
    translate: 'Кролик',
    image: '../src/img/animals/rabbit.jpg',
    audio: '../src/audio/animal/rabbit.mp3',
    click: 0,
    win: 0,
    fail: 0,
    proc: 0
  }, {
    word: 'Lion',
    translate: 'Лев',
    image: '../src/img/animals/lion.jpg',
    audio: '../src/audio/animal/lion.mp3',
    click: 0,
    win: 0,
    fail: 0,
    proc: 0
  }, {
    word: 'Bird',
    translate: 'Птица',
    image: '../src/img/animals/bird.jpg',
    audio: '../src/audio/animal/bird.mp3',
    click: 0,
    win: 0,
    fail: 0,
    proc: 0
  }, {
    word: 'Giraffe',
    translate: 'Жираф',
    image: '../src/img/animals/giraffe.jpg',
    audio: '../src/audio/animal/giraffe.mp3',
    click: 0,
    win: 0,
    fail: 0,
    proc: 0
  }, {
    word: 'Dog',
    translate: 'Собака',
    image: '../src/img/animals/dog.jpg',
    audio: '../src/audio/animal/dog.mp3',
    click: 0,
    win: 0,
    fail: 0,
    proc: 0
  }],
  Food: [{
    word: 'Bread',
    translate: 'Хлеб',
    image: '../src/img/food/bread.jpg',
    audio: '../src/audio/food/bread.mp3',
    click: 0,
    win: 0,
    fail: 0,
    proc: 0
  }, {
    word: 'Egg',
    translate: 'Яйца',
    image: '../src/img/food/eggs.jpg',
    audio: '../src/audio/food/eggs.mp3',
    click: 0,
    win: 0,
    fail: 0,
    proc: 0
  }, {
    word: 'Cherry',
    translate: 'Вишня',
    image: '../src/img/food/cherry.jpg',
    audio: '../src/audio/food/cherry.mp3',
    click: 0,
    win: 0,
    fail: 0,
    proc: 0
  }, {
    word: 'Cheese',
    translate: 'Сыр',
    image: '../src/img/food/cheese.jpg',
    audio: '../src/audio/food/cheese.mp3',
    click: 0,
    win: 0,
    fail: 0,
    proc: 0
  }, {
    word: 'Tomato',
    translate: 'Помидор',
    image: '../src/img/food/tomato.jpg',
    audio: '../src/audio/food/tomato.mp3',
    click: 0,
    win: 0,
    fail: 0,
    proc: 0
  }, {
    word: 'Pizza',
    translate: 'Пицца',
    image: '../src/img/food/pizza.jpg',
    audio: '../src/audio/food/pizza.mp3',
    click: 0,
    win: 0,
    fail: 0,
    proc: 0
  }, {
    word: 'Soup',
    translate: 'Суп',
    image: '../src/img/food/soup.jpg',
    audio: '../src/audio/food/soup.mp3',
    click: 0,
    win: 0,
    fail: 0,
    proc: 0
  }, {
    word: 'Sandwich',
    translate: 'Ботинки',
    image: '../src/img/food/sandwich.jpg',
    audio: '../src/audio/food/sandwich.mp3',
    click: 0,
    win: 0,
    fail: 0,
    proc: 0
  }],
  Figures: [{
    word: 'Circle',
    translate: 'Круг',
    image: '../src/img/figure/circle.jpg',
    audio: '../src/audio/figure/circle.mp3',
    click: 0,
    win: 0,
    fail: 0,
    proc: 0
  }, {
    word: 'Rectangle',
    translate: 'Прямоугольник',
    image: '../src/img/figure/rectangle.jpg',
    audio: '../src/audio/figure/rectangle.mp3',
    click: 0,
    win: 0,
    fail: 0,
    proc: 0
  }, {
    word: 'Triangle',
    translate: 'Треугольник',
    image: '../src/img/figure/triangle.jpg',
    audio: '../src/audio/figure/triangle.mp3',
    click: 0,
    win: 0,
    fail: 0,
    proc: 0
  }, {
    word: 'Square',
    translate: 'Квадрат',
    image: '../src/img/figure/square.jpg',
    audio: '../src/audio/figure/square.mp3',
    click: 0,
    win: 0,
    fail: 0,
    proc: 0
  }, {
    word: 'Ellipse',
    translate: 'Эллипс',
    image: '../src/img/figure/ellipse.jpg',
    audio: '../src/audio/figure/ellipse.mp3',
    click: 0,
    win: 0,
    fail: 0,
    proc: 0
  }, {
    word: 'Star',
    translate: 'Звезда',
    image: '../src/img/figure/star.jpg',
    audio: '../src/audio/figure/star.mp3',
    click: 0,
    win: 0,
    fail: 0,
    proc: 0
  }, {
    word: 'Diamond',
    translate: 'Ромб',
    image: '../src/img/figure/diamond.jpg',
    audio: '../src/audio/figure/diamond.mp3',
    click: 0,
    win: 0,
    fail: 0,
    proc: 0
  }, {
    word: 'Heart',
    translate: 'Сердце',
    image: '../src/img/figure/heart.jpg',
    audio: '../src/audio/figure/heart.mp3',
    click: 0,
    win: 0,
    fail: 0,
    proc: 0
  }],
  Nature: [{
    word: 'Tree',
    translate: 'Дерево',
    image: '../src/img/nature/tree.jpg',
    audio: '../src/audio/nature/tree.mp3',
    click: 0,
    win: 0,
    fail: 0,
    proc: 0
  }, {
    word: 'Flower',
    translate: 'Цветок',
    image: '../src/img/nature/flower.jpg',
    audio: '../src/audio/nature/flower.mp3',
    click: 0,
    win: 0,
    fail: 0,
    proc: 0
  }, {
    word: 'Sea',
    translate: 'Море',
    image: '../src/img/nature/sea.jpg',
    audio: '../src/audio/nature/sea.mp3',
    click: 0,
    win: 0,
    fail: 0,
    proc: 0
  }, {
    word: 'Mountain',
    translate: 'Гора',
    image: '../src/img/nature/mountain.jpg',
    audio: '../src/audio/nature/mountain.mp3',
    click: 0,
    win: 0,
    fail: 0,
    proc: 0
  }, {
    word: 'Leaf',
    translate: 'Лист',
    image: '../src/img/nature/leaf.jpg',
    audio: '../src/audio/nature/leaf.mp3',
    click: 0,
    win: 0,
    fail: 0,
    proc: 0
  }, {
    word: 'Flame',
    translate: 'Пламя',
    image: '../src/img/nature/flame.jpg',
    audio: '../src/audio/nature/flame.mp3',
    click: 0,
    win: 0,
    fail: 0,
    proc: 0
  }, {
    word: 'Grass',
    translate: 'Трава',
    image: '../src/img/nature/grass.jpg',
    audio: '../src/audio/nature/grass.mp3',
    click: 0,
    win: 0,
    fail: 0,
    proc: 0
  }, {
    word: 'Sky',
    translate: 'Небо',
    image: '../src/img/nature/sky.jpg',
    audio: '../src/audio/nature/sky.mp3',
    click: 0,
    win: 0,
    fail: 0,
    proc: 0
  }],
  Emotion: [{
    word: 'Happy',
    translate: 'Счастливый',
    image: '../src/img/emotion/happy.jpg',
    audio: '../src/audio/emotion/happy.mp3',
    click: 0,
    win: 0,
    fail: 0,
    proc: 0
  }, {
    word: 'Angry',
    translate: 'Сердитый',
    image: '../src/img/emotion/angry.jpg',
    audio: '../src/audio/emotion/angry.mp3',
    click: 0,
    win: 0,
    fail: 0,
    proc: 0
  }, {
    word: 'Surprised',
    translate: 'Удивленный',
    image: '../src/img/emotion/surprised.jpg',
    audio: '../src/audio/emotion/surprised.mp3',
    click: 0,
    win: 0,
    fail: 0,
    proc: 0
  }, {
    word: 'Sad',
    translate: 'Грустный',
    image: '../src/img/emotion/sad.jpg',
    audio: '../src/audio/emotion/sad.mp3',
    click: 0,
    win: 0,
    fail: 0,
    proc: 0
  }, {
    word: 'Smile',
    translate: 'Улыбка',
    image: '../src/img/emotion/smile.jpg',
    audio: '../src/audio/emotion/smile.mp3',
    click: 0,
    win: 0,
    fail: 0,
    proc: 0
  }, {
    word: 'Scared',
    translate: 'Испуганный',
    image: '../src/img/emotion/scared.jpg',
    audio: '../src/audio/emotion/scared.mp3',
    click: 0,
    win: 0,
    fail: 0,
    proc: 0
  }, {
    word: 'Laugh',
    translate: 'Смех',
    image: '../src/img/emotion/laugh.jpg',
    audio: '../src/audio/emotion/laugh.mp3',
    click: 0,
    win: 0,
    fail: 0,
    proc: 0
  }, {
    word: 'Tired',
    translate: 'Уставший',
    image: '../src/img/emotion/tired.jpg',
    audio: '../src/audio/emotion/tired.mp3',
    click: 0,
    win: 0,
    fail: 0,
    proc: 0
  }],
  Action: [{
    word: 'Cook',
    translate: 'Готовить',
    image: '../src/img/action/cook.jpg',
    audio: '../src/audio/action/cook.mp3',
    click: 0,
    win: 0,
    fail: 0,
    proc: 0
  }, {
    word: 'Dance',
    translate: 'Танцевать',
    image: '../src/img/action/dance.jpg',
    audio: '../src/audio/action/dance.mp3',
    click: 0,
    win: 0,
    fail: 0,
    proc: 0
  }, {
    word: 'Draw',
    translate: 'Рисовать',
    image: '../src/img/action/draw.jpg',
    audio: '../src/audio/action/draw.mp3',
    click: 0,
    win: 0,
    fail: 0,
    proc: 0
  }, {
    word: 'Sing',
    translate: 'Петь',
    image: '../src/img/action/sing.jpg',
    audio: '../src/audio/action/sing.mp3',
    click: 0,
    win: 0,
    fail: 0,
    proc: 0
  }, {
    word: 'Read',
    translate: 'Чиать',
    image: '../src/img/action/read.jpg',
    audio: '../src/audio/action/read.mp3',
    click: 0,
    win: 0,
    fail: 0,
    proc: 0
  }, {
    word: 'Run',
    translate: 'Бегать',
    image: '../src/img/action/run.jpg',
    audio: '../src/audio/action/run.mp3',
    click: 0,
    win: 0,
    fail: 0,
    proc: 0
  }, {
    word: 'Jump',
    translate: 'Прыгать',
    image: '../src/img/action/jump.jpg',
    audio: '../src/audio/action/jump.mp3',
    click: 0,
    win: 0,
    fail: 0,
    proc: 0
  }, {
    word: 'Swim',
    translate: 'Ботинки',
    image: '../src/img/action/swim.jpg',
    audio: '../src/audio/action/swim.mp3',
    click: 0,
    win: 0,
    fail: 0,
    proc: 0
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
  }],
  Statistics: [{
    word: 'Family'
  }, {
    word: 'Clothes'
  }, {
    word: 'Animal'
  }, {
    word: 'Food'
  }, {
    word: 'Figures'
  }, {
    word: 'Nature'
  }, {
    word: 'Emotion'
  }, {
    word: 'Action'
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
/*! exports provided: createPage, StatisticButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPage", function() { return createPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticButton", function() { return StatisticButton; });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/js/data.js");
/* harmony import */ var _generate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generate */ "./src/js/generate.js");
/* harmony import */ var _statistic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./statistic */ "./src/js/statistic.js");



var sortby;

var createPage = function createPage(choice) {
  document.querySelector('.content').classList.remove('result-win');
  document.querySelector('.content').classList.remove('result-lose');
  var dataS = JSON.parse(localStorage.getItem("data"));
  document.querySelector('.header__text_categories').innerHTML = choice;

  var renderCard = function renderCard() {
    var content = getContainer();

    if (choice == 'Statistics') {
      generateStats(dataS[choice]).forEach(function (el) {
        content.append(el.generateStat());
      });
      document.querySelectorAll('.card').forEach(function (el) {
        return el.classList.add('stat');
      });
    } else {
      generateCards(dataS[choice]).forEach(function (el) {
        content.append(el.generateCard());
      });
    }
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

  var generateCardStat = function generateCardStat(d) {
    var cards = [];
    d.forEach(function (el) {
      cards.push(new _statistic__WEBPACK_IMPORTED_MODULE_2__["Statistic"](el));
    });
    return cards;
  };

  var generateStats = function generateStats(d) {
    var cards = [];
    d.forEach(function (el) {
      cards.push(generateCardStat(dataS[el.word]));
    });
    var cardList = [];
    var k = 0;

    for (var i = 0; i < cards.length; i++) {
      for (var j = 0; j < cards[i].length; j++) {
        k++;
        cardList[k] = cards[i][j];
      }
    }

    if (sortby) {
      console.log(987654);
      console.log(sortby);
      cardList = Sort(cardList, sortby);
    }

    return cardList;
  };

  var Sort = function Sort(d, sortby) {
    d.sort(function (prev, next) {
      if (prev[sortby] < next[sortby]) return -1;
    });
    return d;
  };

  if (dataS) {
    renderCard();
  }
};

var StatisticButton = function StatisticButton() {
  var div = document.createElement('div');
  div.className = 'statistic-button';
  document.querySelector('main').prepend(div);
  var template = '';
  var ul = document.createElement('ul');
  ul.className = 'ul-statistics';
  template += 'Сортировать';
  template += '<li class="sort-li" id="word">По слову</li>';
  template += '<li class="sort-li" id="translate">По переводу</li>';
  template += '<li class="sort-li" id="click">По кликам</li>';
  template += '<li class="sort-li" id="win">По угадываниям</li>';
  template += '<li class="sort-li" id="error">По ошибкам</li>';
  template += '<li class="sort-li" id="proc">По процентам ошибок</li>';
  ul.innerHTML = template;
  document.querySelector('.statistic-button').prepend(ul);
  var button = document.createElement('button');
  button.className = 'button-reset';
  button.innerText = 'Reset';
  document.querySelector('.statistic-button').append(button);

  document.querySelector('.ul-statistics').onclick = function () {
    if (!document.querySelector('.ul-statistics').classList.contains('active')) {
      document.querySelector('.ul-statistics').classList.add('active');
    } else {
      document.querySelector('.ul-statistics').classList.remove('active');
      console.log(event.target);

      if (event.target.classList.contains('sort-li')) {
        sortby = event.target.id;
        createPage('Statistics');
      }
    }
  };

  document.querySelector('.button-reset').onclick = function () {
    localStorage.setItem("data", JSON.stringify(_data__WEBPACK_IMPORTED_MODULE_0__["default"]));
    createPage('Statistics');
  };
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
/* harmony import */ var _generatePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generatePage */ "./src/js/generatePage.js");



var Play = function Play() {
  if (document.querySelector('.header__switcher').classList.contains('check') && document.querySelector('.header__text_categories').innerHTML != 'Statistics') {
    document.querySelectorAll('.card').forEach(function (el) {
      return el.classList.add('play');
    });
    document.querySelectorAll('.card-categories').forEach(function (el) {
      return el.classList.add('play');
    });
    var div = document.createElement('div');

    if (document.querySelector('.content').children[1].classList.contains('card')) {
      var divK = document.createElement('div');
      divK.className = 'star';
      document.querySelector('.content').prepend(divK);
      div.className = 'button game';
      div.innerHTML = "<button class=\"button_start\">Start game</button>";
      document.querySelector('.content').append(div);
      var n = new _audio__WEBPACK_IMPORTED_MODULE_0__["Sound"](document.querySelector('.header__text_categories').innerHTML);
      var soundList = n.AudioGenerate();
      localStorage.setItem("soundList", JSON.stringify(soundList));
      var choice = n.AudioChoice(soundList, 0);

      document.querySelector('.button_start').onclick = function () {
        if (!document.querySelector('.button_start').classList.contains('repeat')) {
          document.querySelector('.button_start').classList.add('repeat');
          document.querySelector('.button_start').innerHTML = 'R';
          n.Repeat(choice);
        } else {
          var m = localStorage.getItem("randAudio");

          var _choice = new Audio(m);

          n.Repeat(_choice);
        }
      };
    }
  } else {
    if (document.querySelector('.game') && document.querySelector('.star')) {
      document.querySelector('.game').parentNode.removeChild(document.querySelector('.game'));
      document.querySelector('.star').parentNode.removeChild(document.querySelector('.star'));
    }

    document.querySelectorAll('.card').forEach(function (el) {
      el.classList.remove('play');
      el.classList.remove('inactive');
    });
    document.querySelectorAll('.card-categories').forEach(function (el) {
      return el.classList.remove('play');
    });
  }
};



/***/ }),

/***/ "./src/js/result.js":
/*!**************************!*\
  !*** ./src/js/result.js ***!
  \**************************/
/*! exports provided: ResultPage, createStar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultPage", function() { return ResultPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStar", function() { return createStar; });
/* harmony import */ var _generatePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generatePage */ "./src/js/generatePage.js");


var ResultPage = function ResultPage(countFail) {
  document.querySelector('.content').innerHTML = '';
  var audio;

  if (countFail == 0) {
    audio = new Audio('../src/audio/success.mp3');
    document.querySelector('.content').classList.add('result-win');
  } else {
    audio = new Audio('../src/audio/failure.mp3');
    document.querySelector('.content').classList.add('result-lose');
    var div = document.createElement('div');
    div.className = 'result-text';
    div.innerHTML = "<p class=\"error\">\u0421\u0434\u0435\u043B\u0430\u043D\u043E \u043E\u0448\u0438\u0431\u043E\u043A: ".concat(countFail, " \u0440\u0430\u0437</p>");
    div.innerHTML += "<p class=\"error\">\u041D\u0430\u0434\u043E \u043F\u043E\u0442\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u0435\u0449\u0451</p>";
    document.querySelector('.content').append(div);
  }

  audio.play();
};

var createStar = function createStar(res) {
  var star;

  if (res == true) {
    star = "<img class=\"image\" src=../src/img/happy-star.png alt=\"happy-star\">";
  } else {
    star = "<img class=\"image\" src=../src/img/sad-star.png alt=\"sad-star\">";
  }

  document.querySelector('.star').innerHTML += star;
};



/***/ }),

/***/ "./src/js/statistic.js":
/*!*****************************!*\
  !*** ./src/js/statistic.js ***!
  \*****************************/
/*! exports provided: Statistic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Statistic", function() { return Statistic; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Statistic = /*#__PURE__*/function () {
  function Statistic(_ref) {
    var word = _ref.word,
        translate = _ref.translate,
        image = _ref.image,
        audio = _ref.audio,
        click = _ref.click,
        win = _ref.win,
        fail = _ref.fail,
        proc = _ref.proc;

    _classCallCheck(this, Statistic);

    this.word = word;
    this.translate = translate;
    this.image = image;
    this.audio = audio;
    this.click = click;
    this.win = win;
    this.fail = fail;

    if (this.fail != 0) {
      this.proc = (this.fail / (this.win + this.fail) * 100).toFixed(1);
    } else {
      this.proc = proc;
    }
  }

  _createClass(Statistic, [{
    key: "generateStat",
    value: function generateStat() {
      var template = '';
      var div = document.createElement('div');
      div.className = 'card-stat';
      div.id = this.word;
      template += "<div class=\"card-stat__img\">";
      template += "<img class=\"image\" src=".concat(this.image, " alt=").concat(this.word, ">");
      template += "</div>";
      template += "<div class=\"card-stat__text\">";
      template += "<p class=\"word\">".concat(this.word, "</p>");
      template += "<p class=\"translate\">\u041F\u0435\u0440\u0435\u0432\u043E\u0434: ".concat(this.translate, "</p>");
      template += "<p class=\"click\">\u041A\u043B\u0438\u043A\u0438: ".concat(this.click, " \u0440\u0430\u0437</p>");
      template += "<p class=\"win\">\u0423\u0433\u0430\u0434\u0430\u043D\u043E: ".concat(this.win, " \u0440\u0430\u0437</p>");
      template += "<p class=\"fail\">\u041D\u0435 \u0443\u0433\u0430\u0434\u0430\u043D\u043E: ".concat(this.fail, " \u0440\u0430\u0437</p>");
      template += "<p class=\"proc\">% \u043E\u0448\u0438\u0431\u043E\u043A: ".concat(this.proc, " %</p>");
      template += "</div>";
      div.innerHTML = template;
      return div;
    }
  }]);

  return Statistic;
}();

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