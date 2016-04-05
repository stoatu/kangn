

;(function ($){
   var _slide=$('.banner_silde_in'),
       _ul=_slide.children('ul'),
       _lis=_ul.children('li'),
       page=0,
       _prev=_slide.children('.prev'),
       _next=_slide.children('.next'),
       slidePage=function (page) {
       	_lis.eq(page).fadeIn(1000).siblings('li').hide();
       	$('.slide_nav li').eq(page).css('background','rgb(50,90,20)').siblings('li').css('background','rgb(80,142,27)')
       };




$.preloadImages = function() {
  for (var i = 0; i < _lis.length; i++) {
    $("<img />").attr("src", _lis.eq(i).data('src')).appendTo(_lis.eq(i).find('a'));

  }
}
$.preloadImages();



   _lis.hide();
   if (_lis.length>1) {
   	_slide.append('<ul class="slide_nav"></ul>')
   	for (var i=0; i<_lis.length; i+=1) {
   		$('.slide_nav').append('<li></li>')
   	}
   } 
   slidePage(0);
   _next.on('click',function (){
   	   page=page>_lis.length-2?0:page+1;
   	   slidePage(page)
   })
   _prev.on('click',function (){
   	   page=page<1?_lis.length-1:page-1;
   	   slidePage(page)
   })
   $('.slide_nav li').on('click',function (){
   	   page=$(this).index();
   	   slidePage(page)
   })

   _lis.eq(0).find('img').css('opacity','0').load(function (){
   	$(this).css('opacity','1')
   })

}(window.jQuery));