

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
 * work 布局2
 */

function workLayoutTwo(ele){
    
    var winW = window.innerWidth;
    
    var glw = winW/4;
    
    var f1 = glw*2;
    
    var onPaiLen = 5;
    
    var work = ele;
    
    var imgBox = work.children();
    var imgBoxLength = imgBox.length;
    
    var flooLeng = Math.ceil(imgBoxLength/onPaiLen);
    
    work.css({'height':flooLeng * f1});
    
   var backColor = ['111','5D5D5A','353533','282829','3C3E3E']
    
   imgBox.each(function(index){
       
      var _t = $(this);
      var _index = _t.index();
    
      var onPai = Math.ceil((_index+1)/onPaiLen);
      
      var isL = onPai % 2 == 1 ? 0 : f1;
      
      
      var paiIndex = _index - (onPai-1) *  onPaiLen;
      
      var paiInPai = Math.ceil((paiIndex)/2);
      
    //   console.log(paiIndex)
      
   
     
      
      var _w = glw;
      var _h = glw;
    //   var _left = (paiIndex+1) * glw + (paiIndex - paiInPai) / 2;
      var _left = (paiIndex+1) * glw - (paiInPai-1) *  glw * 2 - isL;
      var _top = glw * 2 * onPai - f1 + (paiInPai * glw - glw);
      
      _t.css({'backgroundColor':'#'+backColor[paiInPai]})
      _t.attr("data-index",_index)
      _t.attr("data-paiIndex",paiIndex)
      _t.attr("data-paiInPai",paiInPai)
      
      var isBig = _index % onPaiLen == 0 ? true : false;
       
       if(isBig){
           
           _w = f1;
           _h = f1;
           _left = 0 + isL
           _top = f1 * onPai - f1
       } 
       
       _t.animate({'width':_w,'height':_h,'left':_left,'top':_top},50)
       
       
   });

    
    
}
/**
 * iPad 界面布局
 */
function workLayoutIpad() {
    var winW = window.innerWidth;
    var glw = winW/2;
    clearStyle();
    
    
    var imgBox = $(".imgbox")
    imgBox.attr('style','').css({'width':glw,'height':glw})
    
    var backColor = ['111','5D5D5A','353533','282829','3C3E3E'];
    
    
    imgBox.each(function(e){
        
        var _t = $(this);
        
        _t.css({'backgroundColor':getRandomColor()})
        
        
    })
    
    
    
}

/**
 * 判断是否要布局 
 */

function ifworkLayout() {
    var winW = window.innerWidth;
    
    if(winW > 1023){
        // clearStyle();
        $(".work-floor").each(function(i){
   			 workLayoutTwo($(this))
 		});
    }else if(winW >= 768 && winW <= 1023){
        workLayoutIpad(); 
       
    }else{
        clearStyle();
        $(".work-floor div").css({'position':'relative','width':"100%"})
    } 
}

/**
 * 清除样式
 */
function clearStyle(){
    $(".work-floor").attr('style','')
    $(".imgbox").attr('style','')
}
/**
 * 导航fudge
 */

function navFiex(){
    
    
    $(window).on('scroll',function(){
		var st = $(document).scrollTop();
        var winH = window.innerHeight
		if( st > winH ){
			$("#nav-pla").css({'position':'fixed','top':"0",'left':'0','right':'0'})
		}else{
			$("#nav-pla").attr('style',"");
		}	
	});
    
    
}
/**
 * 
 * 
 *  */
 
function ImgLoadInit() {
     echo.init({
      offset: 10,
      throttle: 250,
      unload: false,
      callback: function (element, op) {
        console.log(element, 'has been', op + 'ed')
      }
    });
}

/**
 * 随机颜色
 */

function getRandomColor(){ 
    return "#"+("00000"+((Math.random()*16777215+0.5)>>0).toString(16)).slice(-6); 
} 