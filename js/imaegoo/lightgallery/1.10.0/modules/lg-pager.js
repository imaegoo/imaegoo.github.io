!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e(require("jquery")):e(jQuery)}(function(o){!function(){"use strict";function e(e){return this.core=o(e).data("lightGallery"),this.$el=o(e),this.core.s=o.extend({},s,this.core.s),this.core.s.pager&&1<this.core.$items.length&&this.init(),this}var s={pager:!1};e.prototype.init=function(){var t,e,s,a=this,n="";if(a.core.$outer.find(".lg").append('<div class="lg-pager-outer"></div>'),a.core.s.dynamic)for(var r=0;r<a.core.s.dynamicEl.length;r++)n+='<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="'+a.core.s.dynamicEl[r].thumb+'" /></div></span>';else a.core.$items.each(function(){a.core.s.exThumbImage?n+='<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="'+o(this).attr(a.core.s.exThumbImage)+'" /></div></span>':n+='<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="'+o(this).find("img").attr("src")+'" /></div></span>'});(e=a.core.$outer.find(".lg-pager-outer")).html(n),(t=a.core.$outer.find(".lg-pager-cont")).on("click.lg touchend.lg",function(){var e=o(this);a.core.index=e.index(),a.core.slide(a.core.index,!1,!0,!1)}),e.on("mouseover.lg",function(){clearTimeout(s),e.addClass("lg-pager-hover")}),e.on("mouseout.lg",function(){s=setTimeout(function(){e.removeClass("lg-pager-hover")})}),a.core.$el.on("onBeforeSlide.lg.tm",function(e,s,a){t.removeClass("lg-pager-active"),t.eq(a).addClass("lg-pager-active")})},e.prototype.destroy=function(){},o.fn.lightGallery.modules.pager=e}()});