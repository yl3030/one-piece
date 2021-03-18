

var animateMain = function(){

	//PM25 ---------------------------------
    var overviewPM25 = function(a_type){
        
        
        var target = $("#pm25 .overview");
        switch(a_type){

            case "init":
                overviewPM25("reset");
                new Waypoint({
                    element: target,
                    handler: function(dir) {
                        switch(dir){
                            case "down":                      
                                overviewPM25("display");
                            break;
                            case "up":                      
                                //overviewPM25("destroy");
                            break;

                        }
                    },
                    offset: "100%"
                });
            break;


            case "display":
                $(".btn_menu_main").removeClass("on");
                $("#btn_menu_main_overview").addClass("on");
                TweenMax.to($(".pm25_overview1_1"), 0.6, { top: "0", opacity: 1, repeat: 0, delay: 0.2, ease: Power4.easeOut });
                TweenMax.to($(".pm25_overview1_2"), 0.6, { top: "0", opacity: 1, repeat: 0, delay: 0.4, ease: Power4.easeOut });
                TweenMax.to($(".pm25_overview1_3"), 0.6, { top: "0", opacity: 1, repeat: 0, delay: 0.6, ease: Power4.easeOut });
                TweenMax.to($(".pm25_overview1_4_1"), 0.6, { top: "0", opacity: 1, repeat: 0, delay: 0.8, ease: Power4.easeOut });
                TweenMax.to($(".pm25_overview1_4_2"), 0.6, { top: "0", opacity: 1, repeat: 0, delay: 1, ease: Power4.easeOut });
				TweenMax.to($(".pm25_overview2_1"), 0.6, { scale: 1, opacity: 1, repeat: 0, delay: 0.2, ease: Power4.easeOut });
                TweenMax.to($(".pm25_overview2_2"), 0.6, { top: "0", opacity: 1, repeat: 0, delay: 0.4, ease: Power4.easeOut });
                TweenMax.to($(".pm25_overview2_2"), 0.6, { left: "0", opacity: 1, repeat: 0, delay: 0.4, ease: Power4.easeOut });
            break;


            case "destroy":
                $(".btn_menu_main").removeClass("on");
            break;


            case "reset":
				TweenMax.set($(".pm25_overview1_1"), { top: "50px", opacity: 0 });
                TweenMax.set($(".pm25_overview1_2"), { top: "50px", opacity: 0 });
                TweenMax.set($(".pm25_overview1_3"), { top: "50px", opacity: 0 });
                TweenMax.set($(".pm25_overview1_4_1"), { top: "50px", opacity: 0 });
                TweenMax.set($(".pm25_overview1_4_2"), { top: "50px", opacity: 0 });
				TweenMax.set($(".pm25_overview2_1"), { scale: 0.5, opacity: 1 });
				TweenMax.set($(".pm25_overview2_2"), { top: "50px", opacity: 0 });
				TweenMax.set($(".pm25_overview2_2"), { left: "50px", opacity: 0 });

            break;
        }
        
    }
	
	var youtubePM25 = function(a_type){
        
        var target = $(".pm25_youtube");
        switch(a_type){

            case "init":
                youtubePM25("reset");
                new Waypoint({
                    element: target,
                    handler: function(dir) {
                        switch(dir){
                            case "down":                      
                                youtubePM25("display");
                            break;
                            case "up":                      
                                youtubePM25("destroy");
								overviewPM25("display");
                            break;

                        }
                    },
                    offset: "60%"
                });
            break;


            case "display":
                //$(".btn_menu_main").removeClass("on");
                $("#btn_menu_main_overview").addClass("on");

				
				TweenMax.to($(".group_youtube_1"), 0.6, { scale: 1, opacity: 1, repeat: 0, delay: 0.2, ease: Power4.easeOut });
				TweenMax.to($(".group_youtube_2"), 0.6, { scale: 1, opacity: 1, repeat: 0, delay: 0.4, ease: Power4.easeOut });
            break;


            case "destroy":
                $(".btn_menu_main").removeClass("on");
            break;


            case "reset":
                TweenMax.set($(".group_youtube_1"), { scale: 0.6, opacity: 0 });
                TweenMax.set($(".group_youtube_2"), { scale: 0.6, opacity: 0 });

            break;
        }
        
    }
	
	var newtechPM25 = function(a_type){
        
        
        var target = $(".pm25_newtech");
        switch(a_type){

            case "init":
                newtechPM25("reset");
                new Waypoint({
                    element: target,
                    handler: function(dir) {
                        switch(dir){
                            case "down":                      
                                newtechPM25("display");
                            break;
                            case "up":                      
                                newtechPM25("destroy");
								youtubePM25("display");
                            break;

                        }
                    },
                    offset: "60%"
                });
            break;


            case "display":
                //$(".btn_menu_main").removeClass("on");
                $("#btn_menu_main_overview").addClass("on");

				
                TweenMax.to($(".group_newtech_1"), 0.6, { left: "0", opacity: 1, repeat: 0, delay: 0.2, ease: Power4.easeOut });
				TweenMax.to($(".group_newtech_2"), 0.6, { scale: 1, opacity: 1, repeat: 0, delay: 0.4, ease: Power4.easeOut });
            break;


            case "destroy":
                $(".btn_menu_guide_abric").removeClass("on");
            break;


            case "reset":
                TweenMax.set($(".group_newtech_1"), { left: "-50px", opacity: 0 });
				TweenMax.set($(".group_newtech_2"), { scale: 0.8, opacity: 0 });

            break;
        }
        
    }
	
	var product1PM25 = function(a_type){
        
        
        var target = $(".pm25_product1");
        switch(a_type){

            case "init":
                product1PM25("reset");
                new Waypoint({
                    element: target,
                    handler: function(dir) {
                        switch(dir){
                            case "down":                      
                                product1PM25("display");
                            break;
                            case "up":                      
                                product1PM25("destroy");
								newtechPM25("display");
                            break;

                        }
                    },
                    offset: "60%"
                });
            break;


            case "display":
                $(".btn_menu_main").removeClass("on");
                $("#btn_menu_main_product1").addClass("on");

				
				TweenMax.to($(".group_product1_1"), 0.6, { scale: 1, opacity: 1, repeat: 0, delay: 0.2, ease: Power4.easeOut });
                TweenMax.to($(".product1_2_1"), 0.6, { left: "0", opacity: 1, repeat: 0, delay: 0.4, ease: Power4.easeOut });
                TweenMax.to($(".product1_2_2"), 0.6, { right: "0", opacity: 1, repeat: 0, delay: 0.4, ease: Power4.easeOut });
            break;


            case "destroy":
                $(".btn_menu_main").removeClass("on");
            break;


            case "reset":
				TweenMax.set($(".group_product1_1"), { scale: 0.8, opacity: 0 });
                TweenMax.set($(".product1_2_1"), { left: "-50px", opacity: 0 });
                TweenMax.set($(".product1_2_2"), { right: "-50px", opacity: 0 });

            break;
        }
        
    }
	
	var product2PM25 = function(a_type){
        
        
        var target = $(".pm25_product2");
        switch(a_type){

            case "init":
                product2PM25("reset");
                new Waypoint({
                    element: target,
                    handler: function(dir) {
                        switch(dir){
                            case "down":                      
                                product2PM25("display");
                            break;
                            case "up":                      
								product2PM25("destroy");
								product1PM25("display");
                            break;

                        }
                    },
                    offset: "60%"
                });
            break;


            case "display":
                $(".btn_menu_main").removeClass("on");
                $("#btn_menu_main_product2").addClass("on");

				
                TweenMax.to($(".group_product2_1"), 0.6, { scale: 1, opacity: 1, repeat: 0, delay: 0.2, ease: Power4.easeOut });
                TweenMax.to($(".product2_2_1"), 0.6, { left: "0", opacity: 1, repeat: 0, delay: 0.4, ease: Power4.easeOut });
                TweenMax.to($(".product2_2_2"), 0.6, { right: "0", opacity: 1, repeat: 0, delay: 0.4, ease: Power4.easeOut });
            break;


            case "destroy":
                $(".btn_menu_main").removeClass("on");
            break;


            case "reset":
                TweenMax.set($(".group_product2_1"), { scale: 0.8, opacity: 0 });
                TweenMax.set($(".product2_2_1"), { left: "-50px", opacity: 0 });
                TweenMax.set($(".product2_2_2"), { right: "-50px", opacity: 0 });

            break;
        }
        
    }
	
	var videoPM25 = function(a_type){
        
        
        var target = $(".pm25_video");
        switch(a_type){

            case "init":
                videoPM25("reset");
                new Waypoint({
                    element: target,
                    handler: function(dir) {
                        switch(dir){
                            case "down":                      
                                videoPM25("display");
                            break;
                            case "up":                      
                                videoPM25("destroy");
								product2PM25("display");
                            break;

                        }
                    },
                    offset: "60%"
                });
            break;


            case "display":
                $(".btn_menu_main").removeClass("on");
                $("#btn_menu_main_video").addClass("on");

				
                TweenMax.to($(".pm25_video_p"), 0.6, { left: "0", opacity: 1, repeat: 0, delay: 0.2, ease: Power4.easeOut });
				TweenMax.to($(".pm25_video_img"), 0.6, { top: "0", opacity: 1, repeat: 0, delay: 0.4, ease: Power4.easeOut });
            break;


            case "destroy":
                $(".btn_menu_main").removeClass("on");
            break;


            case "reset":
                TweenMax.set($(".pm25_video_p"), { left: "0", opacity: 0.3 });
				TweenMax.set($(".pm25_video_img"), { top: "50px", opacity: 0 });

            break;
        }
        
    }
	
	var sgsPM25 = function(a_type){
        
        
        var target = $(".pm25_sgs");
        switch(a_type){

            case "init":
                sgsPM25("reset");
                new Waypoint({
                    element: target,
                    handler: function(dir) {
                        switch(dir){
                            case "down":                      
                                sgsPM25("display");
                            break;
                            case "up":                      
                                sgsPM25("destroy");
								videoPM25("display");
                            break;

                        }
                    },
                    offset: "60%"
                });
            break;


            case "display":
                $(".btn_menu_main").removeClass("on");
                $("#btn_menu_main_sgs").addClass("on");

				
                TweenMax.to($(".sgs_1_1"), 0.6, { scale: 1, opacity: 1, repeat: 0, delay: 0.2, ease: Power4.easeOut });
				TweenMax.to($(".sgs_2_1"), 0.6, { top: "0", opacity: 1, repeat: 0, delay: 0.4, ease: Power4.easeOut });
				TweenMax.to($(".sgs_2_2"), 0.6, { top: "0", opacity: 1, repeat: 0, delay: 0.6, ease: Power4.easeOut });
				TweenMax.to($(".sgs_2_3"), 0.6, { top: "0", opacity: 1, repeat: 0, delay: 0.8, ease: Power4.easeOut });
            break;


            case "destroy":
                $(".btn_menu_main").removeClass("on");
            break;


            case "reset":
                TweenMax.set($(".sgs_1_1"), { scale: 0.6, opacity: 0 });
				TweenMax.set($(".sgs_2_1"), { top: "50px", opacity: 0 });
				TweenMax.set($(".sgs_2_2"), { top: "50px", opacity: 0 });
				TweenMax.set($(".sgs_2_3"), { top: "50px", opacity: 0 });

            break;
        }
        
    }
	
	var comparePM25 = function(a_type){
        
        
        var target = $(".pm25_compare");
        switch(a_type){

            case "init":
                comparePM25("reset");
                new Waypoint({
                    element: target,
                    handler: function(dir) {
                        switch(dir){
                            case "down":                      
                                comparePM25("display");
                            break;
                            case "up":                      
                                comparePM25("destroy");
								sgsPM25("display");
                            break;

                        }
                    },
                    offset: "60%"
                });
            break;


            case "display":
                $(".btn_menu_main").removeClass("on");
                $("#btn_menu_main_compare").addClass("on");

				
				TweenMax.to($(".group_compare_1"), 0.6, { scale: 1, opacity: 1, repeat: 0, delay: 0.2, ease: Power4.easeOut });
				TweenMax.to($(".group_compare_2"), 0.6, { scale: 1, opacity: 1, repeat: 0, delay: 0.8, ease: Power4.easeOut });
				TweenMax.to($(".group_compare_3"), 0.6, { right: "0", opacity: 1, repeat: 0, delay: 0.4, ease: Power4.easeOut });
            break;


            case "destroy":
                $(".btn_menu_main").removeClass("on");
            break;


            case "reset":
				TweenMax.set($(".group_compare_1"), { scale: 0.6, opacity: 0 });
				TweenMax.set($(".group_compare_2"), { scale: 0.6, opacity: 0 });
				TweenMax.set($(".group_compare_3"), { right: "-50px", opacity: 0 });

            break;
        }
        
    }
	
	var qaPM25 = function(a_type){
        
        
        var target = $(".pm25_qa");
        switch(a_type){

            case "init":
                qaPM25("reset");
                new Waypoint({
                    element: target,
                    handler: function(dir) {
                        switch(dir){
                            case "down":                      
                                qaPM25("display");
                            break;
                            case "up":                      
                                qaPM25("destroy");
								comparePM25("display");
                            break;

                        }
                    },
                    offset: "60%"
                });
            break;


            case "display":
                $(".btn_menu_main").removeClass("on");
                $("#btn_menu_main_qa").addClass("on");

				
				TweenMax.to($(".title_unit_coldwash_qa"), 0.6, { scale: 1, opacity: 1, repeat: 0, delay: 0.2, ease: Power4.easeOut });
				TweenMax.to($(".slider_coldwash_qa"), 0.6, { top: "0", opacity: 1, repeat: 0, delay: 0.4, ease: Power4.easeOut });
            break;


            case "destroy":
                $(".btn_menu_main").removeClass("on");
            break;


            case "reset":
				TweenMax.set($(".title_unit_coldwash_qa"), { scale: 0.6, opacity: 0 });
				TweenMax.set($(".slider_coldwash_qa"), { top: "50px", opacity: 0 });

            break;
        }
        
    }
	
	

	
	var pm25Ani = function(){

        overviewPM25("init");
        youtubePM25("init");
        newtechPM25("init");
        product1PM25("init");
        product2PM25("init");
        //videoPM25("init");
        sgsPM25("init");
        comparePM25("init");
        qaPM25("init");
    }

    var initAnimation = function(page){
        switch(page){

			case "pm25":
                pm25Ani();
            break;

        }
    }

    return {
        //main function to initiate the module
        init: function (page) {

            initAnimation(page);
                
          
        }

    };

}();


$(window).load(function(){
    var pageName = $("body").attr("class");
    animateMain.init(pageName);

    
});
