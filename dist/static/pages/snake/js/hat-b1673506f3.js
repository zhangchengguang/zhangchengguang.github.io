"use strict";var _createClass=function(){function n(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}}();function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var Hat=function(){function s(t){var e=t.width,i=t.height,n=t.left,l=t.top;_classCallCheck(this,s),this.w=e,this.h=i,this.l=n,this.t=l,this.key=UUIDjs.create().toString(),this.el=null,this.init()}return _createClass(s,[{key:"init",value:function(){var t=document.createElement("div");t.className="hat",t.style.left=this.l+"px",t.style.top=this.t+"px",t.style.width=this.w+"px",t.style.height=this.h+"px",this.el=t,document.body.appendChild(t)}},{key:"destory",value:function(){document.body.removeChild(this.el)}}]),s}();