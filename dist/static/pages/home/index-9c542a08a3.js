"use strict";var _createClass=function(){function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}}();function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var WorkBus=function(t){function e(t){return _classCallCheck(this,e),_possibleConstructorReturn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t))}return _inherits(e,BaseWorkBus),_createClass(e,[{key:"playWork",value:function(){var e=this;this.isWorking=!0,this.iTimer=requestAnimationFrame(function(){e.list.forEach(function(t){e.collection(t),t.move()}),e.isWorking&&e.playWork()})}}]),e}(),bus=new WorkBus;bus.playWork();var num=200;function addDot(){if(bus.list.length<num){var t=winHeight>winWidth?winWidth:winHeight,e=Math.random()*t/2,n=new Dot({left:winWidth/2,top:winHeight/2,radius:10,speed:e});bus.add(n)}requestAnimationFrame(function(){addDot()})}addDot(),window.onclick=function(){window.location.href="snake.html"};