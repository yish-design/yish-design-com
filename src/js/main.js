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

})