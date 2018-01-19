jssor_1_slider_init = function() {
                      var jssor_1_SlideoTransitions = [
                        [{b:0,d:580,x:771,y:6}],
                        [{b:0,d:580,x:-3,y:-20},{b:580,d:580,x:768,y:9}],
                        [{b:0,d:1340,x:-5,y:271,sX:9,sY:9},{b:1340,d:660,x:81,y:-454,sX:-9,sY:-9}]
                      ];

                      var jssor_1_options = {
                        $AutoPlay: true,
                        $SlideDuration: 900,
                        $SlideEasing: $Jease$.$OutQuint,
                        $CaptionSliderOptions: {
                          $Class: $JssorCaptionSlideo$,
                          $Transitions: jssor_1_SlideoTransitions
                        },
                        $ArrowNavigatorOptions: {
                          $Class: $JssorArrowNavigator$
                        },
                        $BulletNavigatorOptions: {
                          $Class: $JssorBulletNavigator$
                        }
                      };

                      var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

                      /*responsive code begin*/
                      /*you can remove responsive code if you don't want the slider scales while window resizing*/
                      function ScaleSlider() {
                        var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
                        if (refSize) {
                          refSize = Math.min(refSize, 1920);
                          jssor_1_slider.$ScaleWidth(refSize);
                        }else{
                          window.setTimeout(ScaleSlider, 30);
                        }
                      }
                        ScaleSlider();
                        $Jssor$.$AddEvent(window, "load", ScaleSlider);
                        $Jssor$.$AddEvent(window, "resize", ScaleSlider);
                        $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
                        /*responsive code end*/
                        
                      
                      };
jssor_1_slider_init();