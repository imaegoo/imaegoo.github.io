!function(t,e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&module.exports?module.exports=e(require("jquery")):e(t.jQuery)}(this,function(i){!function(){"use strict";function t(t){return this.core=i(t).data("lightGallery"),this.core.s=i.extend({},e,this.core.s),this.core.s.rotate&&this.core.doCss()&&this.init(),this}var e={rotate:!0,rotateLeft:!0,rotateRight:!0,flipHorizontal:!0,flipVertical:!0};t.prototype.buildTemplates=function(){var t="";this.core.s.flipVertical&&(t+='<button aria-label="Flip vertical" class="lg-flip-ver lg-icon"></button>'),this.core.s.flipHorizontal&&(t+='<button aria-label="flip horizontal" class="lg-flip-hor lg-icon"></button>'),this.core.s.rotateLeft&&(t+='<button aria-label="Rotate left" class="lg-rotate-left lg-icon"></button>'),this.core.s.rotateRight&&(t+='<button aria-label="Rotate right" class="lg-rotate-right lg-icon"></button>'),this.core.$outer.find(".lg-toolbar").append(t)},t.prototype.init=function(){var o=this;this.buildTemplates(),this.rotateValuesList={},this.core.$el.on("onAferAppendSlide.lg.tm.rotate",function(t,e){o.core.$slide.eq(e).find(".lg-img-wrap").wrap('<div class="lg-img-rotate"></div>')}),this.core.$outer.find(".lg-rotate-left").on("click.lg",this.rotateLeft.bind(this)),this.core.$outer.find(".lg-rotate-right").on("click.lg",this.rotateRight.bind(this)),this.core.$outer.find(".lg-flip-hor").on("click.lg",this.flipHorizontal.bind(this)),this.core.$outer.find(".lg-flip-ver").on("click.lg",this.flipVertical.bind(this)),this.core.$el.on("onBeforeSlide.lg.tm.rotate",function(t,e,i){o.rotateValuesList[i]||(o.rotateValuesList[i]={rotate:0,flipHorizontal:1,flipVertical:1})})},t.prototype.applyStyles=function(){this.core.$slide.eq(this.core.index).find(".lg-img-rotate").css("transform","rotate("+this.rotateValuesList[this.core.index].rotate+"deg) scale3d("+this.rotateValuesList[this.core.index].flipHorizontal+", "+this.rotateValuesList[this.core.index].flipVertical+", 1)")},t.prototype.getCurrentRotation=function(t){if(t){t=window.getComputedStyle(t,null),t=t.getPropertyValue("-webkit-transform")||t.getPropertyValue("-moz-transform")||t.getPropertyValue("-ms-transform")||t.getPropertyValue("-o-transform")||t.getPropertyValue("transform")||"none";if("none"!==t){var t=t.split("(")[1].split(")")[0].split(",");if(t)return(t=Math.round(Math.atan2(t[1],t[0])*(180/Math.PI)))<0?t+360:t}}return 0},t.prototype.rotateLeft=function(){this.rotateValuesList[this.core.index].rotate-=90,this.applyStyles()},t.prototype.rotateRight=function(){this.rotateValuesList[this.core.index].rotate+=90,this.applyStyles()},t.prototype.flipHorizontal=function(){var t=this.core.$slide.eq(this.core.index).find(".lg-img-rotate")[0],t=this.getCurrentRotation(t),t=90!==t&&270!==t?"flipHorizontal":"flipVertical";this.rotateValuesList[this.core.index][t]*=-1,this.applyStyles()},t.prototype.flipVertical=function(){var t=this.core.$slide.eq(this.core.index).find(".lg-img-rotate")[0],t=this.getCurrentRotation(t),t=90!==t&&270!==t?"flipVertical":"flipHorizontal";this.rotateValuesList[this.core.index][t]*=-1,this.applyStyles()},t.prototype.destroy=function(){this.core.$el.off(".lg.tm.rotate"),this.rotateValuesList={}},i.fn.lightGallery.modules.rotate=t}()});