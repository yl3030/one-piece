var pageId = $("body").attr("id"); 
var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

if(!isMobile.any()){
    document.write('<script type="text/javascript" src="animation.js"></script>');
}else{
    if(pageId == "index"){

        $(".group_index_overview_product_l").addClass("show");
        $(".group_index_overview_product_m").addClass("show");

    }else if(pageId == "coldwash"){

        $(".list_coldwash_feature_point_5").addClass("show");
        $(".list_coldwash_feature_tech").addClass("show");
        $(".list_coldwash_fit_cloth").addClass("show");
        $(".list_coldwash_fit_type").addClass("show");
        $(".list_coldwash_blogger").addClass("show");
        $(".list_sell_store").addClass("show");
        $(".list_sell_web").addClass("show");

    }else if(pageId == "laundry"){

        $(".list_sell_store").addClass("show");
        $(".list_sell_web").addClass("show");

    }else if(pageId == "additive"){
        $(".list_product_overview").addClass("show");
        $(".list_additive_test").addClass("show");
        $(".list_sell_store").addClass("show");
        $(".list_sell_web").addClass("show");

    }


    
}

$(window).load(function(){
    $("#loader").fadeOut(600);
});

/*if (navigator.userAgent.search("Line") > -1) {
    alert("為獲得最佳使用體驗，請使用 Safari 或 Chrome 等標準瀏覽器觀看");
}*/
 
$(function(){
    
    //var MenuMain = function(){
        var hashId = location.hash;
        var headerH = $("#header").height();
        //var navGuideH = $("#frame_nav_guide").height();
        $("#btn_nav").click(function(){
            $(".nav_menu").toggleClass("open");
            $(this).toggleClass("open");
            return false;
        });

        $("#btn_menu_main_"+pageId).addClass("on");
       
        // 次選單切換
        /*$(".menu_guide").hide();
        if(pageId == "index"){
            $(".menu_main").find("li").first().hide();
            $("#frame_nav_guide").hide();
        }else if(pageId == "coldwash"){
            $(".menu_guide_coldwash").show();
        }else if(pageId == "laundry"){
            $(".menu_guide_laundry").show();
        }else if(pageId == "additive"){
            $(".menu_guide_additive").show();
        }else if(pageId == "abric"){
            $(".menu_guide_abric").show();
        }*/

        // 點選滾動本頁某區塊
        $(".btn_main_m").on('click', function(){
            var contentScrollTo = $(this).attr("data-href");
            var headerH = $("#header").height();
            $(".nav_menu").toggleClass("open");
            $("#btn_nav").toggleClass("open");
            
            $("html, body").animate({ scrollTop: $(contentScrollTo).offset().top - headerH }, 600);
            return false;
            
            
        });
	$(".btn_menu_main").on('click', function(){
            var contentScrollTo = $(this).attr("data-href");
            var headerH = $("#header").height();
            $(".nav_menu").toggleClass("open");
            $("#btn_nav").toggleClass("open");

            $("html, body").animate({ scrollTop: $(contentScrollTo).offset().top - headerH }, 600);
            return false;


        });



        // btn_go_top
        $(window).scroll(function(){
            if ($(this).scrollTop() > 20) {
                $("#btn_go_top").show();
            } else {
                $("#btn_go_top").hide();
            }
        }); 
        $("#btn_go_top").click(function(){
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });

    //}

    //MenuMain();

    var parallaxImg = function(){
        
        var $win = $(window);
        var headerH = $("header").height();

        var winH;
        var frameH;
        var moveImgH;

        var frameOffsetTop;
        var winScrollTop;
        function parallaxPosition(e){
            winH = $win.height();
            winScrollTop = $win.scrollTop();

            
            $(".parallax_layer").each(function(i){
                var $this = $(this);
                var $frame = $this.parent(".frame_parallax");
                frameH = $frame.height();
                moveImgH = $this.attr("data-img-height");

                frameOffsetTop = $frame.offset().top;
                //console.log(moveImgH);
                //console.log("winH:"+winH+"; frameH:"+ frameH +"; winScrollTop:"+winScrollTop+"; frameOffsetTop:"+frameOffsetTop );
                
                if( winH + winScrollTop > frameOffsetTop && frameOffsetTop+frameH > winScrollTop ){
                    
                    var posRange= (moveImgH-frameH-headerH)/(winH+frameH-headerH)
                    var nextTop = (frameOffsetTop-frameH-winScrollTop)*posRange;
                    if(nextTop>0){
                        nextTop = 0;
                    }
                    //console.log(nextTop)
                    //TweenMax.to($this,.2,{"background-position": "center "+nextTop+"px", ease:  Circ.easeOut})
                    if($this.hasClass("bg_r")){
                        $this.css("background-position", "right "+nextTop+"px");
                    }else{
                        $this.css("background-position", "center "+nextTop+"px");
                    }
                    
                }
            });
        }
        //$(window).scroll(parallaxPosition);
        $(window).bind('scroll resize', function(){

            parallaxPosition();

        }).scroll();
        parallaxPosition();
    }

    parallaxImg();


    // uniform
    $("select, input, textarea").uniform();


    $(".fancybox").fancybox({
        padding: 0,
        //minWidth: 300,
        width       : '100%',
        maxHeight   : '88%',
        autoSize    : true,
        //scrolling: 'no',
        //fitToView: false,
        helpers : {
            overlay : {
                css : {
                    'background' : 'rgba(48, 62, 72, 0.8)'
                }
            }
        }

    });


    $(".btn_fancybox_close").click(function(){
        $.fancybox.close(); 
        return false;
    });
    
    
})
