$(function(){
  

         // niceScroll
        // $("html").niceScroll();
          
          
        // Stick menu
         $(".menu").sticky({topSpacing:0});


        // Menu Scroll to content and Active menu
        var lastId,
          topMenu = $("#menu"),
          topMenuHeight = topMenu.outerHeight()+145,
          menuItems = topMenu.find(".oka"),
          scrollItems = menuItems.map(function(){
            var item = $($(this).attr("href"));
            if (item.length) { return item; }
          });

        $('.navBox .oka').on('click', function(e) {
            e.preventDefault();
                
            var target = $(this).attr("href");
                
            if($(target).length){
              
                $('html, body').stop().animate({ scrollTop: $(target).offset().top-140 }, 1000, function() {

                });
            }
           
                
            return false;
        });


        // $(window).scroll(function(){
        //     var fromTop = $(this).scrollTop()+topMenuHeight;
        //     var cur = scrollItems.map(function(){
        //       if ($(this).offset().top < fromTop)
        //         return this;
        //     });

        //     cur = cur[cur.length-1];
        //     var id = cur && cur.length ? cur[0].id : "";
            
        //     if (lastId !== id) {
        //         lastId = id;
        //         menuItems
        //           .parent().removeClass("active")
        //           .end().filter("[href=#"+id+"]").parent().addClass("active");
        //     }                   
        // });  
        

      if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
          
          $(".footer").css( "position", "relative" );
          $(".contact").css( "marginBottom", "0" );

      } else {

        // FadeTo elements
        if ( $(window).width() > 1023) {  

          tiles = $("h2, h3, .column-one, .column-two, .column-three, .grid li, .contact .content .form, .contact .content .contact-text ").fadeTo(0, 0);

          $(window).scroll(function(d,h) {
            tiles.each(function(i) {
                a = $(this).offset().top + $(this).height();
                b = $(window).scrollTop() + $(window).height();
                if (a < b) $(this).fadeTo(1000,1);
            });
          });

        }

      }



        //Menu mobile click
        $( ".icon" ).click(function() {
          $( " ul.menu-click" ).slideToggle( "slow", function() {
          });
        });


    

      $(".preloader").delay(1000).fadeOut("slow");

        // Parallax
        if ($('.parallax-background').length) {
          $(".parallax-background").parallax();
        }
        
        // Parallax
        if ($('.parallax-background-partners').length) {
          $(".parallax-background-partners").parallax();
        }  

     

        window.DataShow = new DataShow({
					reset: true,
					move: '20px'
				});
        
        
        $("img.lazy").lazyload();
        
        
        
        
        
        
        var offset = 800,
        //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
        offset_opacity = 1200,
        //duration of the top scrolling animation (in ms)
        scroll_top_duration = 700,
        //grab the "back to top" link
        $back_to_top = $('.cd-top');

      //hide or show the "back to top" link
      $(window).scroll(function(){
        ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
        if( $(this).scrollTop() > offset_opacity ) { 
          $back_to_top.addClass('cd-fade-out');
        }
      });
      //www.sucaijiayuan.com
      //smooth scroll to top
      $back_to_top.on('click', function(event){
        event.preventDefault();
        $('body,html').animate({
          scrollTop: 0 ,
          }, scroll_top_duration
        );
      });
        
        
        

})