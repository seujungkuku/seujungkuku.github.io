/**
 * jQuery Unveil
 * A very lightweight jQuery plugin to lazy load images
 * http://luis-almeida.github.com/unveil
 *
 * Licensed under the MIT license.
 * Copyright 2013 Luís Almeida
 * https://github.com/luis-almeida
 */

;(function($) {

  $.fn.unveil = function(threshold, callback) {

    var $w = $(window),
        th = threshold || 0,
        retina = window.devicePixelRatio > 1,
        attrib = "data-src",
        // attrib = retina? "data-src-retina" : "data-src",
        images = this,
        loaded;

    this.one("unveil", function() {
      var source = this.getAttribute(attrib),
          mHP=source.split('/'),
          sz=mHP[7];
      source = source || this.getAttribute("data-src");

      /* 
      alt=75x75 adalah image thumbnail widget popular post
      load gambar full s1600 jika mode HP halaman home (index/archive thumbnail post)
      */

      if(this.getAttribute('alt') != '75x75'){
        if(JQH['cpage'] == 'index' || JQH['cpage'] == 'archive'){
          // sz = (!JQH['modeHP'] ? 's320' : sz);
          //w300-h30-c

          if(!JQH['modeHP'] || window.matchMedia("(max-width: 346px)").matches || window.matchMedia("(max-width: 640px) and (orientation: landscape)").matches){
            sz = 's320';
          }
          else if(retina || (JQH['modeHP'] && window.matchMedia("(min-width: 360px)").matches) || sz == 's1600'){
            sz = 's1600';
          }
          // sz = (!JQH['modeHP'] ? 's320' : sz);
          mHP.splice(7,1),mHP.splice(7,0,sz),mHP.toString(),mHP=("" + mHP).replace(/,/g,'/'),source = mHP;
        }
      }

      if (source) {
        this.setAttribute("src", source);
        // alert(source);
        if (typeof callback === "function") callback.call(this);
      }
    });

    function unveil() {
      var inview = images.filter(function() {
        var $e = $(this);
		/* tambahan, fix jika JS di disable oleh user */
        // $e.removeClass("hidden").addClass("bgnone");
    		$e.removeClass("hidden");
        if ($e.is(":hidden")) return;
		       
		var wt = $w.scrollTop(),
            wb = wt + $w.height(),
            et = $e.offset().top,
            eb = et + $e.height();

        return eb >= wt - th && et <= wb + th;
      });

      loaded = inview.trigger("unveil");
      images = images.not(loaded);
    }

    $w.on("scroll.unveil resize.unveil lookup.unveil", unveil);

    unveil();

    return this;

  };

})(window.jQuery || window.Zepto);
