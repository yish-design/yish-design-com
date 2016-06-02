$(function(){
  


    $(".preloader").delay(1000).fadeOut("slow");
	

	// window.DataShow = new DataShow({
	// 			reset: true,
	// 			move: '20px'
	// });
        
	ifworkLayout();
	
	// navFiex();
		
   window.onresize=function(){
	   
      ifworkLayout();
   }  	

   ImgLoadInit();
   
   $(".work-wrap").css({"display":"block"})
   
   
   $(".about-tab").on("click","a",function(e){
	   var _t = $(this),
	   	   _p = _t.parent();
	   	   _index = _t.index(),
		   manBox = $(".about-tab-content"),
		   man = manBox.find(".about-content");
		
		_p.children().removeClass('on');
		_t.addClass('on');
	   
	   man.hide().eq(_index).show();
	   
	   
	   e && e.preventDefault ? e.preventDefault() : window.event.returnValue = false;
	   
   });
   
   
   $(".nav-u").on('click','a',function(e){
	    var _t = $(this),
			go = _t.attr('go');
	   if(go){
		  
		  $('html,body').animate({'scrollTop':$(go).offset().top},500);
		  
		  e && e.preventDefault ? e.preventDefault() : window.event.returnValue = false; 
	   }
	    
	    
   });

})