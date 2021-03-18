

var animateMain = function(){


    //index ---------------------------------

    var overviewIndex = function(a_type){
        
        
        var target = $("#index .overview");
        switch(a_type){

            case "init":
                overviewIndex("reset");
                new Waypoint({
                    element: target,
                    handler: function(dir) {
                        switch(dir){
                            case "down":                      
                                overviewIndex("display");
                            break;
                            case "up":                      
                                //overviewIndex("destroy");
                            break;

                        }
                    },
                    offset: "100%"
                });
            break;


            case "display":
                
                $(".group_index_overview_product_l").addClass("show");

                TweenMax.to($(".logo_fevo"), 0.6, { scale: 1, opacity: 1, repeat: 0, delay: 0.2, ease: Power4.easeOut });


                TweenMax.to($(".title_overview_l"), 0.6, { left: "0%", top: "0%", opacity: 1, repeat: 0, delay: 0.4, ease: Power4.easeOut });

            break;


            case "destroy":
                
            break;


            case "reset":
                TweenMax.set($(".logo_fevo"), { scale: 0.8, opacity: 0 });
                TweenMax.set($(".title_overview_l"), { left: "40%", top: "-25%", opacity: 0 });

            break;
        }
        
    }

    var overviewMIndex = function(a_type){
        
        
        var target = $("#index .overview");
        switch(a_type){

            case "init":
                overviewMIndex("reset");
                new Waypoint({
                    element: target,
                    handler: function(dir) {
                        switch(dir){
                            case "down":                      
                                overviewMIndex("display");
                            break;
                            case "up":                      
                                //overviewMIndex("destroy");
                            break;

                        }
                    },
                    offset: "60%"
                });
            break;


            case "display":

                $(".group_index_overview_product_m").addClass("show");
                //media m
                TweenMax.to($(".title_overview_m"), 0.8, { scale: 1, opacity: 1, repeat: 0, delay: 0.3, ease: Power4.easeOut });


            break;


            case "destroy":
                
            break;


            case "reset":

                //media m
                TweenMax.set($(".title_overview_m"), { scale: 1.2,opacity: 0 });
            break;
        }
        
    }

    var techIndex = function(a_type){
        
        
        var target = $("#index .tech");
        switch(a_type){

            case "init":
                techIndex("reset");
                new Waypoint({
                    element: target,
                    handler: function(dir) {
                        switch(dir){
                            case "down":                      
                                techIndex("display");
                            break;
                            case "up":                      
                                //techIndex("destroy");
                            break;

                        }
                    },
                    offset: "60%"
                });
            break;


            case "display":

                TweenMax.to($(".header_feature_tech"), 0.6, { top: 0, opacity: 1, repeat: 0, delay: 0.3, ease: Power4.easeOut });
                TweenMax.to($(".left_tech"), 0.6, { top: 0, opacity: 1, repeat: 0, delay: 0.5, ease: Power4.easeOut });
                TweenMax.to($(".right_tech"), 0.6, { top: 0, opacity: 1, repeat: 0, delay: 0.7, ease: Power4.easeOut });


            break;


            case "destroy":

            break;


            case "reset":

                TweenMax.set($(".header_feature_tech"), { top: 80,opacity: 0 });
                TweenMax.set($(".left_tech"), { top: 80,opacity: 0 });
                TweenMax.set($(".right_tech"), { top: 80,opacity: 0 });
            break;
        }
        
    }

    var newIndex = function(a_type){
        
        
        var target = $("#index .new");
        switch(a_type){

            case "init":
                newIndex("reset");
                new Waypoint({
                    element: target,
                    handler: function(dir) {
                        switch(dir){
                            case "down":                      
                                newIndex("display");
                            break;
                            case "up":                      
                                //newIndex("destroy");
                            break;

                        }
                    },
                    offset: "60%"
                });
            break;


            case "display":

                TweenMax.to($(".logo_index_feature_new"), 0.6, { scale: 1, opacity: 1, repeat: 0, delay: 0.3, ease: Power4.easeOut });
                TweenMax.to($(".group_feature_new"), 0.6, { top: 0, opacity: 1, repeat: 0, delay: 0.6, ease: Power4.easeOut });


            break;


            case "destroy":
                
            break;


            case "reset":

                TweenMax.set($(".logo_index_feature_new"), { scale: 0, opacity: 0 });
                TweenMax.set($(".group_feature_new"), { top: 80,opacity: 0 });
            break;
        }
        
    }

    //End of index ---------------------------------



    //coldwash ---------------------------------
    var overviewColdwash = function(a_type){
        
        
        var target = $("#coldwash .overview");
        switch(a_type){

            case "init":
                overviewColdwash("reset");
                new Waypoint({
                    element: target,
                    handler: function(dir) {
                        switch(dir){
                            case "down":                      
                                overviewColdwash("display");
                            break;
                            case "up":                      
                                //overviewColdwash("destroy");
                            break;

                        }
                    },
                    offset: "100%"
                });
            break;


            case "display":
                $(".btn_menu_guide_coldwash").removeClass("on");
                $("#btn_menu_guide_coldwash_overview").addClass("on");

                TweenMax.to($(".group_title_l"), 0.6, { scale: 1, opacity: 1, repeat: 0, delay: 0.2, ease: Power4.easeOut });

                TweenMax.to($(".img_square_1"), 0.8, { right: "-11.6%", top: "0%", opacity: 1, repeat: 0, delay: 0.3, ease: Power4.easeOut });


                TweenMax.to($(".img_square_2"), 0.8, { left: "10.8%",  top: "15.5%", opacity: 1, repeat: 0, delay: 0.4, ease: Power4.easeOut });
                
                TweenMax.to($(".img_kv_people_l"), 0.7, { left: "6%", bottom: "8%", opacity: 1, repeat: 0, delay: 0.6, ease: Power4.easeOut });

                TweenMax.to($(".img_kv_product_l"), 0.8, { left: "0%", bottom: "0%", opacity: 1, repeat: 0, delay: 0.7, ease: Power4.easeOut });

                //media m
                TweenMax.to($(".group_event_kv_m"), 0.8, { opacity: 1, repeat: 0, delay: 0.3, ease: Power4.easeOut });


            break;


            case "destroy":
                $(".btn_menu_guide_coldwash").removeClass("on");
            break;


            case "reset":
                TweenMax.set($(".group_title_l"), { scale: 0.8, opacity: 0 });
                TweenMax.set($(".img_square_1"), { right: "-111.6%", top: "-15%", opacity: 0 });
                TweenMax.set($(".img_square_2"), { left: "110.8%", top: "0%", opacity: 0 });
                TweenMax.set($(".img_kv_people_l"), { left: "46%", bottom: "13%", opacity: 0 });
                TweenMax.set($(".img_kv_product_l"), { left: "60%", bottom: "-50%", opacity: 0 });

                //media m
                TweenMax.set($(".group_event_kv_m"), { opacity: 0 });
            break;
        }
        
    }

    var overviewMColdwash = function(a_type){
        
        
        var target = $("#coldwash .overview");
        switch(a_type){

            case "init":
                overviewMColdwash("reset");
                new Waypoint({
                    element: target,
                    handler: function(dir) {
                        switch(dir){
                            case "down":                      
                                overviewMColdwash("display");
                            break;
                            case "up":                      
                                //overviewMColdwash("destroy");
                            break;

                        }
                    },
                    offset: "60%"
                });
            break;


            case "display":

                //media m
                TweenMax.to($(".img_overview_kv_m"), 0.8, { top: 0, opacity: 1, repeat: 0, delay: 0.3, ease: Power4.easeOut });


            break;


            case "destroy":
                
            break;


            case "reset":

                //media m
                TweenMax.set($(".img_overview_kv_m"), { top: 80,opacity: 0 });
            break;
        }
        
    }

    var aboutColdwash = function(a_type){
        
        
        var target = $("#coldwash .about");
        switch(a_type){

            case "init":
                aboutColdwash("reset");
                new Waypoint({
                    element: target,
                    handler: function(dir) {
                        switch(dir){
                            case "down":                      
                                aboutColdwash("display");
                            break;
                            case "up":                      
                                aboutColdwash("destroy");
                                overviewColdwash("display");
                            break;

                        }
                    },
                    offset: "60%"
                });
            break;


            case "display":
                $(".btn_menu_guide_coldwash").removeClass("on");
                $("#btn_menu_guide_coldwash_about").addClass("on");

                TweenMax.to($(".img_coldwash_about"), 0.5, { left: "0%", opacity: 1, repeat: 0, delay: 0.2, ease: Power4.easeOut });

                TweenMax.to($(".group_right_coldwash_about"), 0.6, { left: "0%", opacity: 1, repeat: 0, delay: 0.4, ease: Power4.easeOut });


                TweenMax.to($(".group_coldwash_about_m"), 0.8, { top: 0, opacity: 1, repeat: 0, delay: 0.6, ease: Power4.easeOut });


            break;


            case "destroy":
                $(".btn_menu_guide_coldwash").removeClass("on");
            break;


            case "reset":
                TweenMax.set($(".img_coldwash_about"), { left: "30%", opacity: 0 });
                TweenMax.set($(".group_right_coldwash_about"), { left: "30%", opacity: 0 });

                //media m
                TweenMax.set($(".group_coldwash_about_m"), { top: 80, opacity: 0 });
            break;
        }
        
    }

    var howColdwash = function(a_type){
        
        
        var target = $("#coldwash .how");
        switch(a_type){

            case "init":
                howColdwash("reset");
                new Waypoint({
                    element: target,
                    handler: function(dir) {
                        switch(dir){
                            case "down":                      
                                howColdwash("display");
                            break;
                            case "up":                      
                                howColdwash("destroy");
                                aboutColdwash("display");
                            break;

                        }
                    },
                    offset: "60%"
                });
            break;


            case "display":
                $(".btn_menu_guide_coldwash").removeClass("on");
                $("#btn_menu_guide_coldwash_how").addClass("on");
                TweenMax.to($(".title_unit_coldwash_how"), 0.6, { top: 0, opacity: 1, repeat: 0, delay: 0.4, ease: Power4.easeOut });
                TweenMax.to($(".slider_coldwash_how"), 0.6, { top: 0, opacity: 1, repeat: 0, delay: 0.6, ease: Power4.easeOut });


            break;


            case "destroy":
                $(".btn_menu_guide_coldwash").removeClass("on");
                
            break;


            case "reset":

                TweenMax.set($(".title_unit_coldwash_how"), { top: 80,opacity: 0 });
                TweenMax.set($(".slider_coldwash_how"), { top: 80,opacity: 0 });
            break;
        }
        
    }

    var point5Coldwash = function(a_type){
        
        
        var target = $("#coldwash .point_5");
        switch(a_type){

            case "init":
                point5Coldwash("reset");
                new Waypoint({
                    element: target,
                    handler: function(dir) {
                        switch(dir){
                            case "down":                      
                                point5Coldwash("display");
                            break;
                            case "up":                      
                                point5Coldwash("destroy");
                                howColdwash("display");
                            break;

                        }
                    },
                    offset: "60%"
                });
            break;


            case "display":

                $(".btn_menu_guide_coldwash").removeClass("on");
                $("#btn_menu_guide_coldwash_feature").addClass("on");
                TweenMax.to($(".title_unit_coldwash_feature_point_5"), 0.6, { left: 0, top: 0, opacity: 1, repeat: 0, delay: 0.3, ease: Power4.easeOut });
                TweenMax.to($(".img_coldwash_feature_point_5"), 0.6, { top: 0, opacity: 1, repeat: 0, delay: 0.5, ease: Power4.easeOut });
                TweenMax.to($(".subtitle_coldwash_feature_point_5"), 0.6, { top: 0, opacity: 1, repeat: 0, delay: 0.7, ease: Power4.easeOut });
                TweenMax.to($(".list_coldwash_feature_point_5"), 0.6, { top: 0, opacity: 1, repeat: 0, delay: 0.7, ease: Power4.easeOut });


                $(".list_coldwash_feature_point_5").addClass("show");

            break;


            case "destroy":
                $(".btn_menu_guide_coldwash").removeClass("on");
            break;


            case "reset":

                TweenMax.set($(".title_unit_coldwash_feature_point_5"), { left: -220, top: 40,opacity: 0 });
                TweenMax.set($(".img_coldwash_feature_point_5"), { top: 80,opacity: 0 });
                TweenMax.set($(".subtitle_coldwash_feature_point_5"), { top: 80,opacity: 0 });
                TweenMax.set($(".list_coldwash_feature_point_5"), { top: 80,opacity: 0 });
            break;
        }
        
    }

    var techColdwash = function(a_type){
        
        
        var target = $("#coldwash .tech");
        switch(a_type){

            case "init":
                techColdwash("reset");
                new Waypoint({
                    element: target,
                    handler: function(dir) {
                        switch(dir){
                            case "down":                      
                                techColdwash("display");
                            break;
                            case "up":                      
                                //techColdwash("destroy");
                            break;

                        }
                    },
                    offset: "60%"
                });
            break;


            case "display":

                TweenMax.to($(".header_feature_tech"), 0.6, { left: 0, top: 0, opacity: 1, repeat: 0, delay: 0.3, ease: Power4.easeOut });
                TweenMax.to($(".text_feature_tech"), 0.6, { top: 0, opacity: 1, repeat: 0, delay: 0.5, ease: Power4.easeOut });
                TweenMax.to($(".list_coldwash_feature_tech"), 0.6, { top: 0, opacity: 1, repeat: 0, delay: 0.7, ease: Power4.easeOut });


                $(".list_coldwash_feature_tech").addClass("show");

            break;


            case "destroy":
                $(".btn_menu_guide_coldwash").removeClass("on");
            break;


            case "reset":

                TweenMax.set($(".header_feature_tech"), { left: -220, top: 40,opacity: 0 });
                TweenMax.set($(".text_feature_tech"), { top: 80,opacity: 0 });
                TweenMax.set($(".list_coldwash_feature_tech"), { top: 80,opacity: 0 });
            break;
        }
        
    }

    var smellColdwash = function(a_type){
        
        
        var target = $("#coldwash .smell");
        switch(a_type){

            case "init":
                smellColdwash("reset");
                new Waypoint({
                    element: target,
                    handler: function(dir) {
                        switch(dir){
                            case "down":                      
                                smellColdwash("display");
                            break;
                            case "up":                      
                                //smellColdwash("destroy");
                            break;

                        }
                    },
                    offset: "60%"
                });
            break;


            case "display":

                TweenMax.to($(".title_unit_coldwash_feature_dry"), 0.6, { left: 0, top: 0, opacity: 1, repeat: 0, delay: 0.3, ease: Power4.easeOut });
                TweenMax.to($(".text_feature_dry"), 0.6, { top: 0, opacity: 1, repeat: 0, delay: 0.5, ease: Power4.easeOut });
                TweenMax.to($(".img_coldwash_feature_dry"), 0.6, { top: 0, opacity: 1, repeat: 0, delay: 0.7, ease: Power4.easeOut });


            break;


            case "destroy":
                $(".btn_menu_guide_coldwash").removeClass("on");
            break;


            case "reset":

                TweenMax.set($(".title_unit_coldwash_feature_dry"), { left: -220, top: 40,opacity: 0 });
                TweenMax.set($(".text_feature_dry"), { top: 80,opacity: 0 });
                TweenMax.set($(".img_coldwash_feature_dry"), { top: 80,opacity: 0 });
            break;
        }
        
    }

    var dryColdwash = function(a_type){
        
        
        var target = $("#coldwash .dry");
        switch(a_type){

            case "init":
                dryColdwash("reset");
                new Waypoint({
                    element: target,
                    handler: function(dir) {
                        switch(dir){
                            case "down":                      
                                dryColdwash("display");
                            break;
                            case "up":                      
                                //dryColdwash("destroy");
                            break;

                        }
                    },
                    offset: "60%"
                });
            break;


            case "display":

                TweenMax.to($(".title_unit_coldwash_feature_dry"), 0.6, { left: 0, top: 0, opacity: 1, repeat: 0, delay: 0.3, ease: Power4.easeOut });
                TweenMax.to($(".text_feature_dry"), 0.6, { top: 0, opacity: 1, repeat: 0, delay: 0.5, ease: Power4.easeOut });
                TweenMax.to($(".img_coldwash_feature_dry"), 0.6, { top: 0, opacity: 1, repeat: 0, delay: 0.7, ease: Power4.easeOut });


            break;


            case "destroy":
                $(".btn_menu_guide_coldwash").removeClass("on");
            break;


            case "reset":

                TweenMax.set($(".title_unit_coldwash_feature_dry"), { left: -220, top: 40,opacity: 0 });
                TweenMax.set($(".text_feature_dry"), { top: 80,opacity: 0 });
                TweenMax.set($(".img_coldwash_feature_dry"), { top: 80,opacity: 0 });
            break;
        }
        
    }

    var bubbleColdwash = function(a_type){
        
        
        var target = $("#coldwash .bubble");
        switch(a_type){

            case "init":
                bubbleColdwash("reset");
                new Waypoint({
                    element: target,
                    handler: function(dir) {
                        switch(dir){
                            case "down":                      
                                bubbleColdwash("display");
                            break;
                            case "up":                      
                                //bubbleColdwash("destroy");
                            break;

                        }
                    },
                    offset: "60%"
                });
            break;


            case "display":

                TweenMax.to($(".bubble"), 0.8, { backgroundPosition: "center 0px", opacity: 1, repeat: 0, delay: 0.2, ease: Circ.easeOut });
                TweenMax.to($(".group_feature_bubble"), 0.8, { scale: 1, top: 0, opacity: 1, repeat: 0, delay: 0.7, ease: Power4.easeOut });


            break;


            case "destroy":
                $(".btn_menu_guide_coldwash").removeClass("on");
            break;


            case "reset":

                TweenMax.set($(".bubble"), { backgroundPosition: "center 150px", opacity: 0 });
                TweenMax.set($(".group_feature_bubble"), { scale: 0.85, top: 150, opacity: 0 });
            break;
        }
        
    }

    var testColdwash = function(a_type){
        
        
        var target = $("#coldwash .test");
        switch(a_type){

            case "init":
                testColdwash("reset");
                new Waypoint({
                    element: target,
                    handler: function(dir) {
                        switch(dir){
                            case "down":                      
                                testColdwash("display");
                            break;
                            case "up":                      
                                testColdwash("destroy");
                                point5Coldwash("display");
                            break;

                        }
                    },
                    offset: "60%"
                });
            break;


            case "display":


                $(".btn_menu_guide_coldwash").removeClass("on");
                $("#btn_menu_guide_coldwash_test").addClass("on");
                TweenMax.to($(".header_coldwash_test"), 0.6, {  opacity: 1, repeat: 0, delay: 0.4, ease: Power2.easeOut });
                TweenMax.to($(".group_coldwash_test"), 0.6, {  opacity: 1, repeat: 0, delay: 0.4, ease: Power2.easeOut });


            break;


            case "destroy":
                $(".btn_menu_guide_coldwash").removeClass("on");
            break;


            case "reset":


                TweenMax.set($(".header_coldwash_test"), { opacity: 0 });
                TweenMax.set($(".group_coldwash_test"), { opacity: 0 });
            break;
        }
        
    }

    var fitColdwash = function(a_type){
        
        
        var target = $("#coldwash .fit");
        switch(a_type){

            case "init":
                fitColdwash("reset");
                new Waypoint({
                    element: target,
                    handler: function(dir) {
                        switch(dir){
                            case "down":                      
                                fitColdwash("display");
                            break;
                            case "up":                      
                                //fitColdwash("destroy");
                                //testColdwash("destroy");
                            break;

                        }
                    },
                    offset: "60%"
                });
            break;


            case "display":
                
                TweenMax.to($(".title_unit_coldwash_fit"), 0.6, { top: 0, opacity: 1, repeat: 0, delay: 0.3, ease: Power4.easeOut });
                TweenMax.to($(".intro_coldwash_fit"), 0.6, { top: 0, opacity: 1, repeat: 0, delay: 0.5, ease: Power4.easeOut });
                TweenMax.to($(".list_coldwash_fit_cloth"), 0.6, { top: 0, opacity: 1, repeat: 0, delay: 0.7, ease: Power4.easeOut });
                TweenMax.to($(".list_coldwash_fit_type"), 0.6, { top: 0, opacity: 1, repeat: 0, delay: 1.1, ease: Power4.easeOut });


                $(".list_coldwash_fit_cloth").addClass("show");
                $(".list_coldwash_fit_type").addClass("show");

            break;


            case "destroy":
                $(".btn_menu_guide_coldwash").removeClass("on");
            break;


            case "reset":

                TweenMax.set($(".title_unit_coldwash_fit"), { top: 80,opacity: 0 });
                TweenMax.set($(".intro_coldwash_fit"), { top: 80,opacity: 0 });
                TweenMax.set($(".list_coldwash_fit_cloth"), { top: 80,opacity: 0 });
                TweenMax.set($(".list_coldwash_fit_type"), { top: 80,opacity: 0 });
            break;
        }
        
    }

    var bloggerColdwash = function(a_type){
        
        
        var target = $("#coldwash .blogger");
        switch(a_type){

            case "init":
                bloggerColdwash("reset");
                new Waypoint({
                    element: target,
                    handler: function(dir) {
                        switch(dir){
                            case "down":                      
                                bloggerColdwash("display");
                            break;
                            case "up":                      
                                bloggerColdwash("destroy");
                                testColdwash("display");
                            break;

                        }
                    },
                    offset: "60%"
                });
            break;


            case "display":

                $(".btn_menu_guide_coldwash").removeClass("on");
                $("#btn_menu_guide_coldwash_blogger").addClass("on");
                TweenMax.to($(".title_unit_coldwash_blogger"), 0.6, { top: 0, opacity: 1, repeat: 0, delay: 0.3, ease: Power4.easeOut });
                TweenMax.to($(".list_coldwash_blogger"), 0.6, { top: 0, opacity: 1, repeat: 0, delay: 0.5, ease: Power4.easeOut });


                $(".list_coldwash_blogger").addClass("show");

            break;


            case "destroy":
                $(".btn_menu_guide_coldwash").removeClass("on");
            break;


            case "reset":

                TweenMax.set($(".title_unit_coldwash_blogger"), { top: 80,opacity: 0 });
                TweenMax.set($(".list_coldwash_blogger"), { top: 80,opacity: 0 });
            break;
        }
        
    }

    var qaColdwash = function(a_type){
        
        
        var target = $("#coldwash .qa");
        switch(a_type){

            case "init":
                qaColdwash("reset");
                new Waypoint({
                    element: target,
                    handler: function(dir) {
                        switch(dir){
                            case "down":                      
                                qaColdwash("display");
                            break;
                            case "up":                      
                                qaColdwash("destroy");     
                                bloggerColdwash("display");
                            break;

                        }
                    },
                    offset: "60%"
                });
            break;


            case "display":
                
                $(".btn_menu_guide_coldwash").removeClass("on");
                $("#btn_menu_guide_coldwash_qa").addClass("on");

                TweenMax.to($(".title_unit_coldwash_qa"), 0.6, { top: 0, opacity: 1, repeat: 0, delay: 0.3, ease: Power4.easeOut });
                TweenMax.to($(".slider_coldwash_qa"), 0.6, { top: 0, opacity: 1, repeat: 0, delay: 0.5, ease: Power4.easeOut });


            break;


            case "destroy":
                $(".btn_menu_guide_coldwash").removeClass("on");
            break;


            case "reset":

                TweenMax.set($(".title_unit_coldwash_qa"), { top: 80,opacity: 0 });
                TweenMax.set($(".slider_coldwash_qa"), { top: 80,opacity: 0 });
            break;
        }
        
    }

    var sellStoreColdwash = function(a_type){
        
        
        var target = $("#coldwash .sell");
        switch(a_type){

            case "init":
                sellStoreColdwash("reset");
                new Waypoint({
                    element: target,
                    handler: function(dir) {
                        switch(dir){
                            case "down":                      
                                sellStoreColdwash("display");
                            break;
                            case "up":  
                                sellStoreColdwash("destroy");
                                qaColdwash("display");         
                            break;

                        }
                    },
                    offset: "60%"
                });
            break;


            case "display":
                
                $(".btn_menu_guide_coldwash").removeClass("on");
                $("#btn_menu_guide_coldwash_sell").addClass("on");

                TweenMax.to($(".title_sell_stroe"), 0.6, { top: 0, opacity: 1, repeat: 0, delay: 0.3, ease: Power4.easeOut });
                TweenMax.to($(".list_sell_store"), 0.6, { top: 0, opacity: 1, repeat: 0, delay: 0.5, ease: Power4.easeOut });


                $(".list_sell_store").addClass("show");

            break;


            case "destroy":
                
            break;


            case "reset":

                TweenMax.set($(".title_sell_stroe"), { top: 80,opacity: 0 });
                TweenMax.set($(".list_sell_store"), { top: 80,opacity: 0 });
            break;
        }
        
    }

    var sellWebColdwash = function(a_type){
        
        
        var target = $("#coldwash .group_sell_web");
        switch(a_type){

            case "init":
                sellWebColdwash("reset");
                new Waypoint({
                    element: target,
                    handler: function(dir) {
                        switch(dir){
                            case "down":                      
                                sellWebColdwash("display");
                            break;
                            case "up":                      
                                //sellWebColdwash("destroy");
                            break;

                        }
                    },
                    offset: "60%"
                });
            break;


            case "display":

                TweenMax.to($(".title_sell_web"), 0.6, { top: 0, opacity: 1, repeat: 0, delay: 0.3, ease: Power4.easeOut });
                TweenMax.to($(".list_sell_web"), 0.6, { top: 0, opacity: 1, repeat: 0, delay: 0.5, ease: Power4.easeOut });


                $(".list_sell_web").addClass("show");

            break;


            case "destroy":
                
            break;


            case "reset":

                TweenMax.set($(".title_sell_web"), { top: 80,opacity: 0 });
                TweenMax.set($(".list_sell_web"), { top: 80,opacity: 0 });
            break;
        }
        
    }


    //laundry ---------------------------------
    var overviewLaundry = function(a_type){
        
        
        var target = $("#laundry .overview");
        switch(a_type){

            case "init":
                overviewLaundry("reset");
                new Waypoint({
                    element: target,
                    handler: function(dir) {
                        switch(dir){
                            case "down":                      
                                overviewLaundry("display");
                            break;
                            case "up":                      
                                //overviewLaundry("destroy");
                            break;

                        }
                    },
                    offset: "100%"
                });
            break;


            case "display":
                $(".btn_menu_guide_laundry").removeClass("on");
                $("#btn_menu_guide_laundry_overview").addClass("on");


                TweenMax.to($(".group_title_l"), 0.6, { scale: 1, opacity: 1, repeat: 0, delay: 0.2, ease: Power4.easeOut });


                TweenMax.to($(".img_kv_product_l"), 0.8, { left: "4%", bottom: "0%", opacity: 1, repeat: 0, delay: 0.6, ease: Power4.easeOut });
                
                TweenMax.to($(".img_kv_people_l"), 0.7, { left: "0%", bottom: "46%", opacity: 1, repeat: 0, delay: 0.8, ease: Power4.easeOut });

            break;


            case "destroy":
                $(".btn_menu_guide_laundry").removeClass("on");
            break;


            case "reset":
                TweenMax.set($(".group_title_l"), { scale: 0.8, opacity: 0 });
                TweenMax.set($(".img_kv_product_l"), { left: "40%", bottom: "-50%", opacity: 0 });
                TweenMax.set($(".img_kv_people_l"), { left: "20%", bottom: "26%", opacity: 0 });

            break;
        }
        
    }

    var aboutLaundry = function(a_type){
        
        
        var target = $("#laundry .about");
        switch(a_type){

            case "init":
                aboutLaundry("reset");
                new Waypoint({
                    element: target,
                    handler: function(dir) {
                        switch(dir){
                            case "down":                      
                                aboutLaundry("display");
                            break;
                            case "up":                      
                                aboutLaundry("destroy");
                                overviewLaundry("display");
                            break;

                        }
                    },
                    offset: "60%"
                });
            break;


            case "display":
                $(".btn_menu_guide_laundry").removeClass("on");
                $("#btn_menu_guide_laundry_about").addClass("on");

                TweenMax.to($(".group_laundry_about"), 0.6, { top: "0%", opacity: 1, repeat: 0, delay: 0.4, ease: Power4.easeOut });

            break;


            case "destroy":
                $(".btn_menu_guide_laundry").removeClass("on");
            break;


            case "reset":
                TweenMax.set($(".group_laundry_about"), { top: "40%", opacity: 0 });

            break;
        }
        
    }



    var techLaundry = function(a_type){
        
        
        var target = $("#laundry .tech");
        switch(a_type){

            case "init":
                techLaundry("reset");
                new Waypoint({
                    element: target,
                    handler: function(dir) {
                        switch(dir){
                            case "down":                      
                                techLaundry("display");
                            break;
                            case "up":                      
                                techLaundry("destroy");
                                aboutLaundry("display");
                            break;

                        }
                    },
                    offset: "60%"
                });
            break;


            case "display":
                $(".btn_menu_guide_laundry").removeClass("on");
                $("#btn_menu_guide_laundry_feature").addClass("on");

                TweenMax.to($(".header_feature_tech"), 0.6, { top: 0, opacity: 1, repeat: 0, delay: 0.3, ease: Power4.easeOut });
                TweenMax.to($(".left_tech"), 0.6, { top: 0, opacity: 1, repeat: 0, delay: 0.5, ease: Power4.easeOut });
                TweenMax.to($(".right_tech"), 0.6, { top: 0, opacity: 1, repeat: 0, delay: 0.7, ease: Power4.easeOut });


            break;


            case "destroy":
                $(".btn_menu_guide_laundry").removeClass("on");
            break;


            case "reset":

                TweenMax.set($(".header_feature_tech"), { top: 80,opacity: 0 });
                TweenMax.set($(".left_tech"), { top: 80,opacity: 0 });
                TweenMax.set($(".right_tech"), { top: 80,opacity: 0 });
            break;
        }
        
    }

    var newLaundry = function(a_type){
        
        
        var target = $("#laundry .new");
        switch(a_type){

            case "init":
                newLaundry("reset");
                new Waypoint({
                    element: target,
                    handler: function(dir) {
                        switch(dir){
                            case "down":                      
                                newLaundry("display");
                            break;
                            case "up":                      
                                //newLaundry("destroy");
                            break;

                        }
                    },
                    offset: "60%"
                });
            break;


            case "display":

                TweenMax.to($(".logo_laundry_feature_new"), 0.6, { scale: 1, opacity: 1, repeat: 0, delay: 0.3, ease: Power4.easeOut });
                TweenMax.to($(".group_feature_new"), 0.6, { top: 0, opacity: 1, repeat: 0, delay: 0.6, ease: Power4.easeOut });


            break;


            case "destroy":
                $(".btn_menu_guide_coldwash").removeClass("on");
            break;


            case "reset":

                TweenMax.set($(".logo_laundry_feature_new"), { scale: 0, opacity: 0 });
                TweenMax.set($(".group_feature_new"), { top: 80,opacity: 0 });
            break;
        }
        
    }



    var researchLaundry = function(a_type){
        
        
        var target = $("#laundry .research");
        switch(a_type){

            case "init":
                researchLaundry("reset");
                new Waypoint({
                    element: target,
                    handler: function(dir) {
                        switch(dir){
                            case "down":                      
                                researchLaundry("display");
                            break;
                            case "up":                      
                                //researchLaundry("destroy");
                            break;

                        }
                    },
                    offset: "60%"
                });
            break;


            case "display":

                TweenMax.to($(".header_research"), 0.6, { top: 0, opacity: 1, repeat: 0, delay: 0.3, ease: Power4.easeOut });
                TweenMax.to($(".table_feature_research"), 0.6, { top: 0, opacity: 1, repeat: 0, delay: 0.5, ease: Power4.easeOut });


            break;


            case "destroy":
                $(".btn_menu_guide_laundry").removeClass("on");
            break;


            case "reset":

                TweenMax.set($(".header_research"), { top: 80,opacity: 0 });
                TweenMax.set($(".table_feature_research"), { top: 80,opacity: 0 });
            break;
        }
        
    }

    var testLaundry = function(a_type){
        
        
        var target = $("#laundry .test");
        switch(a_type){

            case "init":
                testLaundry("reset");
                new Waypoint({
                    element: target,
                    handler: function(dir) {
                        switch(dir){
                            case "down":                      
                                testLaundry("display");
                            break;
                            case "up":                      
                                testLaundry("destroy");
                                techLaundry("display");
                            break;

                        }
                    },
                    offset: "60%"
                });
            break;


            case "display":


                $(".btn_menu_guide_laundry").removeClass("on");
                $("#btn_menu_guide_laundry_test").addClass("on");
                TweenMax.to($(".header_laundry_test"), 0.6, {  
                    top: 0, opacity: 1, repeat: 0, delay: 0.4, ease: Power2.easeOut });
                TweenMax.to($(".group_laundry_test"), 0.6, {  top: 0, opacity: 1, repeat: 0, delay: 0.6, ease: Power2.easeOut });


            break;


            case "destroy":
                $(".btn_menu_guide_laundry").removeClass("on");
            break;


            case "reset":


                TweenMax.set($(".header_laundry_test"), { top: 80, opacity: 0 });
                TweenMax.set($(".group_laundry_test"), { top: 80, opacity: 0 });
            break;
        }
        
    }


    var promiseLaundry = function(a_type){
        
        
        var target = $("#laundry .promise");
        switch(a_type){

            case "init":
                promiseLaundry("reset");
                new Waypoint({
                    element: target,
                    handler: function(dir) {
                        switch(dir){
                            case "down":                      
                                promiseLaundry("display");
                            break;
                            case "up":                      
                                //promiseLaundry("destroy");
                                //testColdwash("destroy");
                            break;

                        }
                    },
                    offset: "60%"
                });
            break;


            case "display":
                
                TweenMax.to($(".header_laundry_promise"), 0.6, {  
                    top: 0, opacity: 1, repeat: 0, delay: 0.4, ease: Power2.easeOut });
                TweenMax.to($(".group_laundry_promise"), 0.6, {  top: 0, opacity: 1, repeat: 0, delay: 0.6, ease: Power2.easeOut });


            break;


            case "destroy":
                $(".btn_menu_guide_laundry").removeClass("on");
            break;


            case "reset":

                TweenMax.set($(".header_laundry_promise"), { top: 80, opacity: 0 });
                TweenMax.set($(".group_laundry_promise"), { top: 80, opacity: 0 });
            break;
        }
        
    }

    var qaLaundry = function(a_type){
        
        
        var target = $("#laundry .qa");
        switch(a_type){

            case "init":
                qaLaundry("reset");
                new Waypoint({
                    element: target,
                    handler: function(dir) {
                        switch(dir){
                            case "down":                      
                                qaLaundry("display");
                            break;
                            case "up":                      
                                qaLaundry("destroy");     
                                testLaundry("display");
                            break;

                        }
                    },
                    offset: "60%"
                });
            break;


            case "display":
                
                $(".btn_menu_guide_laundry").removeClass("on");
                $("#btn_menu_guide_laundry_qa").addClass("on");

                TweenMax.to($(".title_unit_laundry_qa"), 0.6, { top: 0, opacity: 1, repeat: 0, delay: 0.3, ease: Power4.easeOut });
                TweenMax.to($(".slider_laundry_qa"), 0.6, { top: 0, opacity: 1, repeat: 0, delay: 0.5, ease: Power4.easeOut });


            break;


            case "destroy":
                $(".btn_menu_guide_laundry").removeClass("on");
            break;


            case "reset":

                TweenMax.set($(".title_unit_laundry_qa"), { top: 80,opacity: 0 });
                TweenMax.set($(".slider_laundry_qa"), { top: 80,opacity: 0 });
            break;
        }
        
    }

    var sellStoreLaundry = function(a_type){
        
        
        var target = $("#laundry .sell");
        switch(a_type){

            case "init":
                sellStoreLaundry("reset");
                new Waypoint({
                    element: target,
                    handler: function(dir) {
                        switch(dir){
                            case "down":                      
                                sellStoreLaundry("display");
                            break;
                            case "up":  
                                sellStoreLaundry("destroy");
                                qaLaundry("display");         
                            break;

                        }
                    },
                    offset: "60%"
                });
            break;


            case "display":
                
                $(".btn_menu_guide_laundry").removeClass("on");
                $("#btn_menu_guide_laundry_sell").addClass("on");

                TweenMax.to($(".title_sell_stroe"), 0.6, { top: 0, opacity: 1, repeat: 0, delay: 0.3, ease: Power4.easeOut });
                TweenMax.to($(".list_sell_store"), 0.6, { top: 0, opacity: 1, repeat: 0, delay: 0.5, ease: Power4.easeOut });


                $(".list_sell_store").addClass("show");

            break;


            case "destroy":
                
            break;


            case "reset":

                TweenMax.set($(".title_sell_stroe"), { top: 80,opacity: 0 });
                TweenMax.set($(".list_sell_store"), { top: 80,opacity: 0 });
            break;
        }
        
    }

    var sellWebLaundry = function(a_type){
        
        
        var target = $("#laundry .group_sell_web");
        switch(a_type){

            case "init":
                sellWebLaundry("reset");
                new Waypoint({
                    element: target,
                    handler: function(dir) {
                        switch(dir){
                            case "down":                      
                                sellWebLaundry("display");
                            break;
                            case "up":                      
                                //sellWebLaundry("destroy");
                            break;

                        }
                    },
                    offset: "60%"
                });
            break;


            case "display":

                TweenMax.to($(".title_sell_web"), 0.6, { top: 0, opacity: 1, repeat: 0, delay: 0.3, ease: Power4.easeOut });
                TweenMax.to($(".list_sell_web"), 0.6, { top: 0, opacity: 1, repeat: 0, delay: 0.5, ease: Power4.easeOut });


                $(".list_sell_web").addClass("show");

            break;


            case "destroy":
                
            break;


            case "reset":

                TweenMax.set($(".title_sell_web"), { top: 80,opacity: 0 });
                TweenMax.set($(".list_sell_web"), { top: 80,opacity: 0 });
            break;
        }
        
    }





    //additive ---------------------------------
    var overviewAdditive = function(a_type){
        
        
        var target = $("#additive .overview");
        switch(a_type){

            case "init":
                overviewAdditive("reset");
                new Waypoint({
                    element: target,
                    handler: function(dir) {
                        switch(dir){
                            case "down":                      
                                overviewAdditive("display");
                            break;
                            case "up":                      
                                //overviewAdditive("destroy");
                            break;

                        }
                    },
                    offset: "100%"
                });
            break;


            case "display":
                $(".btn_menu_guide_additive").removeClass("on");
                $("#btn_menu_guide_additive_overview").addClass("on");
                $(".list_product_overview").addClass("show");

                TweenMax.to($(".img_kv_product_l"), 0.6, { left: "0%", opacity: 1, repeat: 0, delay: 0.2, ease: Power4.easeOut });

                TweenMax.to($(".group_title_l"), 0.6, { scale: 1, opacity: 1, repeat: 0, delay: 0.45, ease: Power4.easeOut });


                TweenMax.to($(".group_video_l"), 0.6, { opacity: 1, repeat: 0, delay: 0.7, ease: Power4.easeOut });
            break;


            case "destroy":
                $(".btn_menu_guide_additive").removeClass("on");
            break;


            case "reset":
                TweenMax.set($(".img_kv_product_l"), { left: "-100%", opacity: 0 });
                TweenMax.set($(".group_title_l"), { scale: 0.7, opacity: 0 });
                TweenMax.set($(".group_video_l"), { opacity: 0 });

            break;
        }
        
    }

    var antiOdorAdditive = function(a_type){
        
        
        var target = $("#additive .anti_odor");
        switch(a_type){

            case "init":
                antiOdorAdditive("reset");
                new Waypoint({
                    element: target,
                    handler: function(dir) {
                        switch(dir){
                            case "down":                      
                                antiOdorAdditive("display");
                            break;
                            case "up":                      
                                antiOdorAdditive("destroy");
                                overviewAdditive("display");
                            break;

                        }
                    },
                    offset: "60%"
                });
            break;


            case "display":
                $(".btn_menu_guide_additive").removeClass("on");
                $("#btn_menu_guide_additive_about").addClass("on");

                TweenMax.to($(".header_anti_odor"), 0.5, { top: 0, opacity: 1, repeat: 0, delay: 0.3, ease: Power4.easeOut });

                TweenMax.to($(".body_anti_odor"), 0.6, { top: 0, opacity: 1, repeat: 0, delay: 0.7, ease: Power4.easeOut });

            break;


            case "destroy":
                $(".btn_menu_guide_additive").removeClass("on");
            break;


            case "reset":
                TweenMax.set($(".header_anti_odor"), { top: 100, opacity: 0 });
                TweenMax.set($(".body_anti_odor"), { top: 100, opacity: 0 });
            break;
        }
        
    }

    var moistureWickingAdditive = function(a_type){
        
        
        var target = $("#additive .moisture_wicking");
        switch(a_type){

            case "init":
                moistureWickingAdditive("reset");
                new Waypoint({
                    element: target,
                    handler: function(dir) {
                        switch(dir){
                            case "down":                      
                                moistureWickingAdditive("display");
                            break;
                            case "up":                      
                                //moistureWickingAdditive("destroy");
                                //antiOdorAdditive("display");
                            break;

                        }
                    },
                    offset: "60%"
                });
            break;


            case "display":

                TweenMax.to($(".header_moisture_wicking"), 0.5, { top: 0, opacity: 1, repeat: 0, delay: 0.3, ease: Power4.easeOut });

                TweenMax.to($(".body_moisture_wicking"), 0.6, { top: 0, opacity: 1, repeat: 0, delay: 0.7, ease: Power4.easeOut });

            break;


            case "destroy":
                $(".btn_menu_guide_additive").removeClass("on");
            break;


            case "reset":
                TweenMax.set($(".header_moisture_wicking"), { top: 100, opacity: 0 });
                TweenMax.set($(".body_moisture_wicking"), { top: 100, opacity: 0 });
            break;
        }
        
    }

    var waterRepellentAdditive = function(a_type){
        
        
        var target = $("#additive .water_repellent");
        switch(a_type){

            case "init":
                waterRepellentAdditive("reset");
                new Waypoint({
                    element: target,
                    handler: function(dir) {
                        switch(dir){
                            case "down":                      
                                waterRepellentAdditive("display");
                            break;
                            case "up":                      
                                //waterRepellentAdditive("destroy");
                                //moistureWickingAdditive("display");
                            break;

                        }
                    },
                    offset: "60%"
                });
            break;


            case "display":

                TweenMax.to($(".header_water_repellent"), 0.5, { top: 0, opacity: 1, repeat: 0, delay: 0.3, ease: Power4.easeOut });

                TweenMax.to($(".body_water_repellent"), 0.6, { top: 0, opacity: 1, repeat: 0, delay: 0.7, ease: Power4.easeOut });

            break;


            case "destroy":
                $(".btn_menu_guide_additive").removeClass("on");
            break;


            case "reset":
                TweenMax.set($(".header_water_repellent"), { top: 100, opacity: 0 });
                TweenMax.set($(".body_water_repellent"), { top: 100, opacity: 0 });
            break;
        }
        
    }

    var testAdditive = function(a_type){
        
        
        var target = $("#additive .empiric");
        switch(a_type){

            case "init":
                testAdditive("reset");
                new Waypoint({
                    element: target,
                    handler: function(dir) {
                        switch(dir){
                            case "down":                      
                                testAdditive("display");
                            break;
                            case "up":                      
                                testAdditive("destroy");
                                antiOdorAdditive("display");
                            break;

                        }
                    },
                    offset: "60%"
                });
            break;


            case "display":


                $(".btn_menu_guide_additive").removeClass("on");
                $("#btn_menu_guide_additive_test").addClass("on");
                $(".list_additive_test").addClass("show");
                TweenMax.to($(".header_additive_test"), 0.6, { top: 0, opacity: 1, repeat: 0, delay: 0.4, ease: Power2.easeOut });


            break;


            case "destroy":
                $(".btn_menu_guide_additive").removeClass("on");
            break;


            case "reset":


                TweenMax.set($(".header_additive_test"), { top: 100, opacity: 0 });
            break;
        }
        
    }

    var promiseAdditive = function(a_type){
        
        
        var target = $("#additive .promise");
        switch(a_type){

            case "init":
                promiseAdditive("reset");
                new Waypoint({
                    element: target,
                    handler: function(dir) {
                        switch(dir){
                            case "down":                      
                                promiseAdditive("display");
                            break;
                            case "up":                      
                                //promiseAdditive("destroy");
                                //testAdditive("destroy");
                            break;

                        }
                    },
                    offset: "60%"
                });
            break;


            case "display":
                
                TweenMax.to($(".title_unit_additive_promise"), 0.6, { top: 0, opacity: 1, repeat: 0, delay: 0.3, ease: Power4.easeOut });
                TweenMax.to($(".intro_additive_promise"), 0.6, { top: 0, opacity: 1, repeat: 0, delay: 0.5, ease: Power4.easeOut });
                TweenMax.to($(".group_additive_promise"), 0.6, { top: 0, opacity: 1, repeat: 0, delay: 0.7, ease: Power4.easeOut });



            break;


            case "destroy":
                $(".btn_menu_guide_additive").removeClass("on");
            break;


            case "reset":

                TweenMax.set($(".title_unit_additive_promise"), { top: 80,opacity: 0 });
                TweenMax.set($(".intro_additive_promise"), { top: 80,opacity: 0 });
                TweenMax.set($(".group_additive_promise"), { top: 80,opacity: 0 });
            break;
        }
        
    }

    var qa1Additive = function(a_type){
        
        
        var target = $("#additive .qa_1");
        switch(a_type){

            case "init":
                qa1Additive("reset");
                new Waypoint({
                    element: target,
                    handler: function(dir) {
                        switch(dir){
                            case "down":                      
                                qa1Additive("display");
                            break;
                            case "up":                      
                                qa1Additive("destroy");     
                                testAdditive("display");
                            break;

                        }
                    },
                    offset: "60%"
                });
            break;


            case "display":
                
                $(".btn_menu_guide_additive").removeClass("on");
                $("#btn_menu_guide_additive_qa").addClass("on");

                TweenMax.to($(".qa_1 .title_unit_additive_qa"), 0.6, { top: 0, opacity: 1, repeat: 0, delay: 0.3, ease: Power4.easeOut });
                TweenMax.to($(".qa_1 .subtitle_unit_additive_qa"), 0.6, { top: 0, opacity: 1, repeat: 0, delay: 0.5, ease: Power4.easeOut });
                TweenMax.to($(".qa_1 .slider_additive_qa"), 0.6, { top: 0, opacity: 1, repeat: 0, delay: 0.7, ease: Power4.easeOut });


            break;


            case "destroy":
                $(".btn_menu_guide_additive").removeClass("on");
            break;


            case "reset":

                TweenMax.set($(".qa_1 .title_unit_additive_qa"), { top: 80,opacity: 0 });
                TweenMax.set($(".qa_1 .subtitle_unit_additive_qa"), { top: 80,opacity: 0 });
                TweenMax.set($(".qa_1 .slider_additive_qa"), { top: 80,opacity: 0 });
            break;
        }
        
    }

    var qa2Additive = function(a_type){
        
        
        var target = $("#additive .qa_2");
        switch(a_type){

            case "init":
                qa2Additive("reset");
                new Waypoint({
                    element: target,
                    handler: function(dir) {
                        switch(dir){
                            case "down":                      
                                qa2Additive("display");
                            break;
                            case "up":                      
                                qa2Additive("destroy");     
                                qa1Additive("display");
                            break;

                        }
                    },
                    offset: "60%"
                });
            break;


            case "display":

                TweenMax.to($(".qa_2 .title_unit_additive_qa"), 0.6, { top: 0, opacity: 1, repeat: 0, delay: 0.3, ease: Power4.easeOut });
                TweenMax.to($(".qa_2 .subtitle_unit_additive_qa"), 0.6, { top: 0, opacity: 1, repeat: 0, delay: 0.5, ease: Power4.easeOut });
                TweenMax.to($(".qa_2 .slider_additive_qa"), 0.6, { top: 0, opacity: 1, repeat: 0, delay: 0.7, ease: Power4.easeOut });


            break;


            case "destroy":
                $(".btn_menu_guide_additive").removeClass("on");
            break;


            case "reset":

                TweenMax.set($(".qa_2 .title_unit_additive_qa"), { top: 80,opacity: 0 });
                TweenMax.set($(".qa_2 .subtitle_unit_additive_qa"), { top: 80,opacity: 0 });
                TweenMax.set($(".qa_2 .slider_additive_qa"), { top: 80,opacity: 0 });
            break;
        }
        
    }

    var qa3Additive = function(a_type){
        
        
        var target = $("#additive .qa_3");
        switch(a_type){

            case "init":
                qa3Additive("reset");
                new Waypoint({
                    element: target,
                    handler: function(dir) {
                        switch(dir){
                            case "down":                      
                                qa3Additive("display");
                            break;
                            case "up":                      
                                qa3Additive("destroy");     
                                qa2Additive("display");
                            break;

                        }
                    },
                    offset: "60%"
                });
            break;


            case "display":

                TweenMax.to($(".qa_3 .title_unit_additive_qa"), 0.6, { top: 0, opacity: 1, repeat: 0, delay: 0.3, ease: Power4.easeOut });
                TweenMax.to($(".qa_3 .subtitle_unit_additive_qa"), 0.6, { top: 0, opacity: 1, repeat: 0, delay: 0.5, ease: Power4.easeOut });
                TweenMax.to($(".qa_3 .slider_additive_qa"), 0.6, { top: 0, opacity: 1, repeat: 0, delay: 0.7, ease: Power4.easeOut });


            break;


            case "destroy":
                $(".btn_menu_guide_additive").removeClass("on");
            break;


            case "reset":

                TweenMax.set($(".qa_3 .title_unit_additive_qa"), { top: 80,opacity: 0 });
                TweenMax.set($(".qa_3 .subtitle_unit_additive_qa"), { top: 80,opacity: 0 });
                TweenMax.set($(".qa_3 .slider_additive_qa"), { top: 80,opacity: 0 });
            break;
        }
        
    }

    var sellStoreAdditive = function(a_type){
        
        
        var target = $("#additive .sell");
        switch(a_type){

            case "init":
                sellStoreAdditive("reset");
                new Waypoint({
                    element: target,
                    handler: function(dir) {
                        switch(dir){
                            case "down":                      
                                sellStoreAdditive("display");
                            break;
                            case "up":  
                                sellStoreAdditive("destroy");
                                qa1Additive("display");         
                            break;

                        }
                    },
                    offset: "60%"
                });
            break;


            case "display":
                
                $(".btn_menu_guide_additive").removeClass("on");
                $("#btn_menu_guide_additive_sell").addClass("on");

                TweenMax.to($(".title_sell_stroe"), 0.6, { top: 0, opacity: 1, repeat: 0, delay: 0.3, ease: Power4.easeOut });
                TweenMax.to($(".list_sell_store"), 0.6, { top: 0, opacity: 1, repeat: 0, delay: 0.5, ease: Power4.easeOut });


                $(".list_sell_store").addClass("show");

            break;


            case "destroy":
                
            break;


            case "reset":

                TweenMax.set($(".title_sell_stroe"), { top: 80,opacity: 0 });
                TweenMax.set($(".list_sell_store"), { top: 80,opacity: 0 });
            break;
        }
        
    }

    var sellWebAdditive = function(a_type){
        
        
        var target = $("#additive .group_sell_web");
        switch(a_type){

            case "init":
                sellWebAdditive("reset");
                new Waypoint({
                    element: target,
                    handler: function(dir) {
                        switch(dir){
                            case "down":                      
                                sellWebAdditive("display");
                            break;
                            case "up":                      
                                //sellWebColdwash("destroy");
                            break;

                        }
                    },
                    offset: "60%"
                });
            break;


            case "display":

                TweenMax.to($(".title_sell_web"), 0.6, { top: 0, opacity: 1, repeat: 0, delay: 0.3, ease: Power4.easeOut });
                TweenMax.to($(".list_sell_web"), 0.6, { top: 0, opacity: 1, repeat: 0, delay: 0.5, ease: Power4.easeOut });


                $(".list_sell_web").addClass("show");

            break;


            case "destroy":
                
            break;


            case "reset":

                TweenMax.set($(".title_sell_web"), { top: 80,opacity: 0 });
                TweenMax.set($(".list_sell_web"), { top: 80,opacity: 0 });
            break;
        }
        
    }

    var indexAni = function(){
        overviewIndex("init");
        overviewMIndex("init");
        techIndex("init");
        newIndex("init");

    }
    var coldwashAni = function(){

        overviewColdwash("init");
        overviewMColdwash("init");
        aboutColdwash("init");
        howColdwash("init");
        point5Coldwash("init");
        techColdwash("init");
        smellColdwash("init");
        bubbleColdwash("init");
        testColdwash("init");
        fitColdwash("init");
        bloggerColdwash("init");
        qaColdwash("init");
        sellStoreColdwash("init");
        sellWebColdwash("init");

    }

    var laundryAni = function(){

        overviewLaundry("init");
        aboutLaundry("init");
        techLaundry("init");
        newLaundry("init");
        researchLaundry("init");
        testLaundry("init");
        promiseLaundry("init");
        qaLaundry("init");
        sellStoreLaundry("init");
        sellWebLaundry("init");
    }

    var additiveAni = function(){

        overviewAdditive("init");
        antiOdorAdditive("init");
        moistureWickingAdditive("init");
        waterRepellentAdditive("init");
        testAdditive("init");
        promiseAdditive("init");
        qa1Additive("init");
        qa2Additive("init");
        qa3Additive("init");
        sellStoreAdditive("init");
        sellWebAdditive("init");
    }

    var initAnimation = function(page){
        switch(page){


            case "index":
                indexAni();
            break;

            case "coldwash":
                coldwashAni();
            break;

            case "laundry":
                laundryAni();
            break;

            case "additive":
                additiveAni();
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
