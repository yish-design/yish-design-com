

/**
 * work 布局
 */

function workLayout(ele) {
    var winW = window.innerWidth;
    
    var glw = winW/4;
    
    var f1 = glw*2;
    
    var work = ele;
    
    var index = work.index();
    
    var cNum = index % 2;
    
  
    
    var arrCh = work.children();
    
    work.css("height",f1);
    
    var isL = cNum == 0 ? 0 : f1;
    
    $(".imgbox").css({'position':'absolute'})
    arrCh.eq(0).css({'position':'absolute','left':0+isL,'width':f1,'height':f1})
    arrCh.eq(1).animate({'width':glw,'height':glw,'left':glw*2 - isL},50)
    arrCh.eq(2).animate({'width':glw,'height':glw,'left':glw*3 - isL},50)
    arrCh.eq(3).animate({'width':glw,'height':glw,'left':glw*2 - isL,'top':glw},50)
    arrCh.eq(4).animate({'width':glw,'height':glw,'left':glw*3 - isL,'top':glw},50)
    
}

/**
 * iPad 界面布局
 */
function workLayoutIpad() {
    var winW = window.innerWidth;
    var glw = winW/2;
    $(".work-floor").attr('style','')
    $(".imgbox").attr('style','').css({'width':glw,'height':glw})
    
    
}

/**
 * 判断是否要布局
 */

function ifworkLayout() {
    var winW = window.innerWidth;
    
    if(winW > 1023){
        $(".work-floor").each(function(i){
   			 workLayout($(this))
 		});
    }else if(winW > 768 && winW < 1023){
        workLayoutIpad();
       
    }else{
        $(".work-floor div").css({'position':'relative','width':"100%"})
    }
    
}