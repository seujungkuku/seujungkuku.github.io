$(function () {
	if($('body').attr('data-template') == 'mmbbproject.github.io'){

		var mmbb_logo = '<a href="https://mmbbproject.github.io/" class="jqh-link" title="MMBB Template logo" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 4.2333332 4.2333335"><g><path d="M4.206 4.122c-.52.068-1.072.127-1.603.062-.274-.02-.424-.238-.67-.077-.474.126-1.09.164-1.527-.03C.04 3.89.044 3.582.04 3.318v-.93h.548c.005.37-.013.743.01 1.114.01.166.105.375.423.414.314.038.663.006.923-.105-.145-.296-.08-.604-.094-.907v-.516h.547c.005.37-.012.743.01 1.114.014.166.113.374.43.414.27.033.55.005.82-.02V2.388h.55v1.735zM.04.126C.56.056 1.112-.002 1.643.063c.273.02.424.24.67.077.474-.126 1.09-.164 1.526.03.367.188.362.496.366.76v.93h-.548c-.005-.37.012-.743-.01-1.114-.01-.164-.105-.374-.424-.413-.312-.037-.66-.006-.92.105.144.295.078.604.093.906v.516H1.85c-.007-.37.01-.743-.013-1.114-.012-.164-.11-.373-.427-.413C1.14.3.858.328.588.353V1.86H.04V.126z"/></g></svg></a>';
		// baris pertama ragam warna biru, kedua hijau, ketiga kuning/merah
		var _colors = ['#00C7F2','#01B3E3','#00B0B9','#0093DA','#0072C6','#0074E4','#0084FF',
		'#4CAF50','#25D366','#107C10','#00B1AB','#39A85B','#21B352','#7AC142','#A4C639',
		'#E44600','#EE6123','#FE7A16','#F38936','#FB4226','#C50000','#FF4500'],
		homepage = $(location).attr('href'), hp = $(location).attr('search'), modehp = '';

		if (hp.length > 0 || hp == '?m=1'){
			homepage = homepage.substring(0, homepage.length-4);
			modehp = '&nbsp;&nbsp;&nbsp;&nbsp;';
		}

		var winheight = $(window).height(), winwidth = $(window).width(),
		ikanan='&nbsp;&nbsp;<span class="icon jqh-plus-square-o icon-sm"></span>'+modehp, ibawah = '&nbsp;&nbsp;<span class="icon jqh-minus-square-o icon-sm"></span>'+modehp;

		
		function wpotrait(){return (winheight > winwidth && window.matchMedia("(orientation: potrait)").matches) ? true : false;}
		function wlandscape(){ return (winheight < winwidth && window.matchMedia("(orientation: landscape)").matches) ? true : false;}
		function modesm(){return (winwidth >= 768 && winwidth < 992) ? true : false;}
		function modemd(){ return (winwidth >= 992 && winwidth < 1200) ? true : false;}
		function modelg(){return (winwidth >= 1200) ? true : false;}
		function fixdesktopcol(){
			if(modesm && window.matchMedia("(min-width: 768px) and (max-width:991px)").matches){
				// $('#jqh-sidebar .row .widget').each(function(i){
				// 	$(this).find('.clearfix').remove();
				// 	(i == 3 || i == 6) ? $(this).prepend('<div class="clearfix visible-sm-block"></div>'):'';
				// });
			}
		}
		function persingkat(kata,batas){
			var  singkat= kata.substring(0,batas);
			return (kata.length > (batas -3)) ? singkat + '...' : kata; 
		}

		function styletgl(){
			var bulan = ['januari', 'februari', 'maret','april', 'mei', 'juni', 'juli', 'agustus', 'september', 'oktober', 'november', 'desember'];
			var z = $('#jqh-postdetail .post-date .date'),
			x =z.text().split(' '),
			// y = {'januari':'01','agustus':'08'},
			// hari = x[0].substring(0, 3) + '<br />'+ (x[0].length < 6 ? "&bull;":"") + x[0].substring(3, 6),
			// bln=x[1].substring(0,3);
			bln = bulan.indexOf(x[1]) + 1,
			bln = (x[1] != 'oktober' || x[1] != 'november' || x[1] != 'desember' ? '0'+bln:bln),
			// bln = (bln.length == 1 ? '0 '+bln:bln),
			tgl = x[2].replace(/[A-Za-z,]/g,''),
			tgl = (tgl.length == 1 ? '0'+tgl:tgl);

			z.html("<span class='tgl'>"+tgl+"</span><span class='bln'><abbr title='"+x[1]+"'>"+bln+"</abbr></span><span class='thn'>"+x[3]+"</span>");
		}
		$('#jqh-home .thumbnail > a:last-of-type').each(function(){
			$(this).html(persingkat($(this).html(), singkatjudul));
		});

		$('.jqh-category ul li .btn-group a:first-of-type').each(function(){
			$(this).attr('href') ==  homepage ? $(this).addClass('active').attr('href','javascript:;').siblings().addClass('active').attr('href','javascript:;'):'';
		});

		$('.jqh-archive #BlogArchive1_ArchiveList > ul > li').each(function(){
			$(this).find('a.toggle').html(ikanan);
			$(this).find('ul').toggleClass('hidden').addClass('aktif');
			$(this).children('a.toggle').first().click(function(){
				$(this).closest('li').find('ul.hierarchy').toggleClass('hidden');

				$(this).toggleClass('aktif').html(ikanan);
				$(this).hasClass('aktif') ? $(this).html(ibawah):'';
			});
		});

		$('.jqh-archive #BlogArchive1_ArchiveList > ul li ul li').click(function(){
			var v = $(this).children('a.toggle');

			$(this).children('ul.posts').toggleClass('hidden');
			v.toggleClass('aktif').html(ikanan);

			v.hasClass('aktif') ? v.html(ibawah):'';
		});

		$('.jqh-sidemenu a.unduh').click(function(){
			$(this).closest('div').find('#jqhunduh').toggleClass('hidden');
			$(this).hasClass('active') ? '' : $(this).toggleClass('terpilih');
			// $(this).toggleClass('sidelist').removeClass('sidelist');
		});

		$('footer .container .col-xs-12:last-of-type').html(mmbb_logo);

		if(sidepostcolored){
			$('#jqh-postdetail .crandom').each(function(){
				var color = _colors[Math.floor(Math.random() * _colors.length)];
				$(this).css({'border-right-color':color});
				// $(this).css({'border-color':color,'border-right-color':color});
			});
		}

		fixdesktopcol();
		styletgl();
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
