$(function () {
	if($('body').attr('data-template') == 'mmbbproject.github.io'){
				// alert(dicoba == 1 ? 'satu' : dicoba == 2 ? 'dua' : '');
		// baris pertama ragam warna biru, kedua hijau, ketiga kuning/merah

		var _colors = ['#00C7F2','#01B3E3','#00B0B9','#0093DA','#0072C6','#0074E4','#0084FF',
		'#4CAF50','#25D366','#107C10','#00B1AB','#39A85B','#21B352','#7AC142','#A4C639',
		'#E44600','#EE6123','#FE7A16','#F38936','#FB4226','#C50000','#FF4500'],
		hp = $(location).attr('search'), modehp = '',wheight = $(window).height(), wwidth = $(window).width();
		// var test = {
		// 		"satu" : "1",
		// 		"dua" : "2",
		// 		"categories" :
		// 				{
		// 					"satu"	: "1",
		// 					"dua"	: "2",
		// 					"tiga" : "3"
		// 				}
		// }
		// alert(test['categories']['tiga']);
		// function cekhp(){
		// 	return (hp.length > 0 || hp == '?m=1') ? true:false;
		// }
		// if(cekhp){
		// 	JQH['curl'] = JQH['curl'].substring(0, JQH['curl'].length-4);
		// 	modehp = '&nbsp;&nbsp;&nbsp;&nbsp;';
		// }

		// ikanan='&nbsp;&nbsp;<span class="icon jqh-plus-square-o icon-sm"></span>'+modehp, ibawah = '&nbsp;&nbsp;<span class="icon jqh-minus-square-o icon-sm"></span>'+modehp;
		

		// function modexs(){alert(window.matchMedia("(max-width:767px)").matches ? 'mobile':'desktop'}
		// function wlandscape(){ return (winheight < winwidth && window.matchMedia("(orientation: landscape)").matches) ? true : false;}
		// function modesm(){return (winwidth >= 768 && winwidth < 992) ? true : false;}
		// function modemd(){ return (winwidth >= 992 && winwidth < 1200) ? true : false;}
		// function modelg(){return (winwidth >= 1200) ? true : false;}
		// function fixdesktopcol(){
		// 	if(modesm && window.matchMedia("(min-width: 768px) and (max-width:991px)").matches){
		// 		// $('#jqh-sidebar .row .widget').each(function(i){
		// 		// 	$(this).find('.clearfix').remove();
		// 		// 	(i == 3 || i == 6) ? $(this).prepend('<div class="clearfix visible-sm-block"></div>'):'';
		// 		// });
		// 	}
		// }

		function wportrait(){
			return window.matchMedia("(orientation: portrait)").matches ? true : false}
		function modexs(){
			return window.matchMedia("(max-width:767px)").matches ? true:false}
		// function cropthumb(x,y){
		//   var a=x.attr('src').split('/');
		//   // a.splice(7,1),a.splice(7,0,y);
		//   a.splice(4,1),a.splice(4,0,y);
		//   return "<img src='"+a.toString().replace(/,/g,'/')+"' alt='"+x.attr
		//   ('alt')+"'></img>";
		// }

		function persingkat(kata,batas){
			var  singkat= kata.substring(0,batas);
			return (kata.length > (batas -3)) ? singkat + '...' : kata; 
		}

		function wbr(x){
			var y = x.split(""),z='<wbr />';
			for (var i=0;i<y.length; i++){
				if(!((i+1)%3)) y[i] = y[i]+z;
			}
			y.join("");
			return ("" + y).replace(/,/g,'');
		}
		function singkatpopular(){
				$('.jqh-sidepopularpost .media-body p').each(function(){
					// var x = $(this).closest('.media-body');
					// modexs;
					// alert(wportrait?'portrait':'landscape')
					// alert(window.matchMedia("(orientation: portrait)").matches ?'portrait':'landscape')
					// alert($(window).width());
					// alert(winwidth)
		  		var x=$(this).closest('.media-body'),y='<span class="singkat hidden">'+$(this).html()+'</span>';
			  	if(modexs()){
			  		if(wportrait()){
			  		x.find('.singkat').length ? '':x.append(y),$(this).html(persingkat($(this).html(), 100));
						}
			  		else {
			  		var z=$(this).siblings('.singkat');
			  		z.length ? $(this).html(z.html()) : x.append(y);
				  	}
			  	}
			  	
			  		// alert('summary');
			  	// alert('ssss');
			  })
		}	

		if(!JQH['modeHP']){
			$('.jqh-sidemenu a.unduh').click(function(){
				$(this).closest('div').find('#jqhunduh').toggleClass('hidden');
				$(this).hasClass('active') ? '' : $(this).toggleClass('terpilih');
				// $(this).toggleClass('sidelist').removeClass('sidelist');
			});
		}	

		// if(['index','archive'].indexOf(JQH['cpage'] != -1)){
		if(JQH['cpage'] == 'index' || JQH['cpage'] == 'archive'){	
			$('#jqh-home .thumbnail').each(function(){
				// alert($(this).find('a').html());
				// if($(this).has('a')){
					// $(this).children('a').html(persingkat($(this).children('a').html(), singkatjudul));
					// var a=$(this).find('.home-title a'),x = $(this).find('img'), y=x.attr('data-gambar').split('_');
					var z,a=$(this).find('.home-title a');
					a.length ? a.html(persingkat(a.html(), JQH['hmtitle'])):'';
					// $(this).find("img").trigger("unveil");
					// x.attr('src',y[0]+'_gray_'+y[2]+'_'+y[3]);
					// x.attr('src',y[0]+'/'+y[1]+'/'+y[2]+'/'+y[3]+'/'+y[4]+'/'+y[5]+'/'+y[6]+'/jqueryholic/'+y[8]);
					
					// $.each(y, function(){
					// y.forEach(function(){
						// var z=y.join();
					// });
					// x.attr(y.push())
					// alert(y);
					// y.join("/ ");
					// z=y.toString();
					// x.length ? x.closest('a').html(cropthumb(x,'jq')):'';
					// x.length ? x.closest('a').html(cropthumb(x,'jqueryholic')):'';
					// alert(z.replace(/,/g,'/'));
					// alert(y.toString());
					// setTimeout(x.attr('src',x.attr('data-gambar'),2000));
					// alert(d);
					// x.attr('src',x.attr('data-gambar'));
					// alert(x.attr('data-gambar'));
					// x.attr('src',x.attr('data-gambar'));
				// }
				// else { 
					// $(this).html(persingkat($(this).html(), singkatjudul));
				// }
			});
			$("#jqh-home .thumbnail img").unveil();
		}

		// $('.jqh-archive #BlogArchive1_ArchiveList > ul > li').each(function(){
		// 	$(this).find('a.toggle').html(ikanan);
		// 	$(this).find('ul').toggleClass('hidden').addClass('aktif');
		// 	$(this).children('a.toggle').first().click(function(){
		// 		$(this).closest('li').find('ul.hierarchy').toggleClass('hidden');

		// 		$(this).toggleClass('aktif').html(ikanan);
		// 		$(this).hasClass('aktif') ? $(this).html(ibawah):'';
		// 	});
		// });

		// $('.jqh-archive #BlogArchive1_ArchiveList > ul li ul li').click(function(){
		// 	var v = $(this).children('a.toggle');

		// 	$(this).children('ul.posts').toggleClass('hidden');
		// 	v.toggleClass('aktif').html(ikanan);

		// 	v.hasClass('aktif') ? v.html(ibawah):'';
		// });
		// function coba(){alert('test')}

		// if(['static','item'].indexOf(JQH['cpage'] != -1)){
		if(JQH['cpage'] == 'item' || JQH['cpage'] == "static"){
			if(JQH['cpage'] == 'item'){
				$('.detailpager li').each(function(){
					var x=$(this).find('a:last-of-type'),a=x.html(), b=a.length,
					c=a.substring(JQH["hmpage"].length + 8, b), d=(c.substring(c.length-4, c.length) == '?m=1' ? c.substring(0, c.length - 9) : c.substring(0, c.length - 5)), e=d.replace(/-/g,' '), f=e.substring(0,1).toUpperCase()+e.substring(1,e.length -1),y=x.siblings('a').html();
					// z=x.text().slice(x.text().length - 1);
					x.siblings('a').remove(),x.removeClass('hidden').html(f).closest('li').prepend(y);
					// alert(c);
				});

				$("article .post-detail .post-body img").unveil(15);
				
			}
		
			// var bulan = ['januari', 'februari', 'maret','april', 'mei', 'juni', 'juli', 'agustus', 'september', 'oktober', 'november', 'desember'];
			if(!JQH['modeHP']){
				var z = $('#jqh-postdetail .post-date .date'),
				x =z.text().split(' '),
			// y = {'januari':'01','agustus':'08'},
			// hari = x[0].substring(0, 3) + '<br />'+ (x[0].length < 6 ? "&bull;":"") + x[0].substring(3, 6),
			// bln=x[1].substring(0,3);
			// bln = bulan.indexOf(x[0]) + 1,
			// bln = (x[0] != 'oktober' || x[0] != 'november' || x[0] != 'desember' ? '0'+bln:bln),
			// bln = (bln.length == 1 ? '0 '+bln:bln),
			// bln = x[0].substring(0,3),
				tgl = x[1].replace(/[A-Za-z,]/g,''),
				tgl = (tgl.length == 1 ? '0'+tgl:tgl);

				z.html("<span class='tgl'>"+tgl+"</span><span class='bln'>"+x[0]+"</span><span class='thn'>"+x[2]+"</span>");

				$(".post-terkait .thumbnail img").unveil();
			}
			if(JQH['sidecolored']){
				$('#jqh-postdetail .crandom').each(function(){
					var color = _colors[Math.floor(Math.random() * _colors.length)];
					$(this).css({'border-right-color':color});
					// $(this).css({'border-color':color,'border-right-color':color});
				});
			}
		}

		if(JQH['modeHP']){
			
			$('#jqh-home .jqh-bars').closest('a').removeClass('hidden'),$('#jqh-home .sharemobile').hide();

			$('#jqh-home .jqh-bars').on('click',function(){
				$(this).toggleClass('active'),$(this).closest('.col-xs-2').siblings('.col-xs-12').find('.sharemobile').toggleClass('visible-xs');
			});
			singkatpopular();
			var a = $('#jqh-postdetail .post-body h3.m-post-title');
			a.html(wbr(a.html()));
			// alert(wbr(a.html()));
	  }

	  $("#jqh-sidebar .jqh-sidepopularpost .media-left img").unveil();
	  
	  $('.jqh-category ul li .btn-group a:first-of-type').each(function(){
	  	$(this).attr('href') ==  JQH['curl'] ? $(this).addClass('active').attr('href','javascript:;').siblings().addClass('active').attr('href','javascript:;'):'';
	  });

	  window.addEventListener("resize", function() {

	            var winwidth = $(window).width(),winheight=$(window).height();
	            var x=$('header .jqh-m-brand'),y=x.find('h5'),z=x.append('<h5 style="color:blue;float:right;top:5em;position:absolute;">w: <b>'+winwidth+'</b>; h: <b>'+winheight+'</b></h5>');
	            if(y.length)
	            	{y.remove();z;}else{z;}

	  JQH['modeHP'] ? singkatpopular():'';			
	            // alert('orientation changed')
	  }, false);




		// $('footer .container .col-xs-12:last-of-type').html(mmbb_logo);
		// fixdesktopcol();
		// styletgl();

		// $('#jqh-postdetail .jqh-popularpost .media .media-body .pdesc').each(function(){
		// 	$(this).html(persingkat($(this).html(), singkatpopular));
		// });

	}
});


// format tgl blogger post: April 5, 2017
/*
menambahkan nomor urut ke pre code 
var line = 1;

code = code.replace(/^/gm, function() {
    return '<span class="line-number-position">&#x200b;<span class="line-number">' + line++ + '</span></span>';
});

.line-number-position {
    position: relative;
    top: 0;
}

.line-number {
    position: absolute;
    text-align: right;
    right: 17px;
    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace;
    font-size: 12px;
}

*/
