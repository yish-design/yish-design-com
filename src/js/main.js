$(function(){
  


    $(".preloader").delay(1000).fadeOut("slow");
	

	window.DataShow = new DataShow({
				reset: true,
				move: '20px'
	});
        
	ifworkLayout()
		
   window.onresize=function(){
	   
      ifworkLayout();
   }  	

})