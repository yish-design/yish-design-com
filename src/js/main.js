D(function(){
  


    D(".preloader").delay(1000).fadeOut("slow");
	

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
   
   D(".work-wrap").css({"display":"block"})
   
   
   D(".about-tab").on("click","a",function(e){
	   var _t = D(this),
	   	   _p = _t.parent();
	   	   _index = _t.index(),
		   manBox = D(".about-tab-content"),
		   man = manBox.find(".about-content");
		
		_p.children().removeClass('on');
		_t.addClass('on');
	   
	   man.hide().eq(_index).show();
	   
	   
	   e && e.preventDefault ? e.preventDefault() : window.event.returnValue = false;
	   
   });
   
   
   D(".nav-u").on('click','a',function(e){
	    var _t = D(this),
			go = _t.attr('go');
	   if(go){
		  
		  D('html,body').animate({'scrollTop':D(go).offset().top},500);
		  
		  e && e.preventDefault ? e.preventDefault() : window.event.returnValue = false; 
	   }
	    
	    
   });

})