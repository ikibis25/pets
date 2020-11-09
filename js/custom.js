/*
Copyright (c) 2017 
------------------------------------------------------------------
[Master Javascript]

Project:	PetCare Responsive Template

-------------------------------------------------------------------*/
(function($) {
    "use strict";
    var landingpage = {
        initialised: false,
        version: 1.0,
        mobile: false,
        init: function() {

            if (!this.initialised) {
                this.initialised = true;
            } else {
                return;
            }

            /*-------------- PetCare Functions Calling ---------------------------------------------------
            ------------------------------------------------------------------------------------------------*/
            this.Mobilemenu();
            this.Slider();
            this.Menu_bar();
            this.Map();
            this.Gallery();
            this.Testimonial();
            this.MailFunction();



        },

        /*-------------- PetCare Functions definition ---------------------------------------------------
        ---------------------------------------------------------------------------------------------------*/
        //menu on small width
        Mobilemenu: function() {
            if ($(window).width() < 991) {
                $('.menu-expander > i ').on('click', function() {
                    $('.pet_menu > ul').slideToggle();
                    return false;
                });
                $('.pet_menu ul li.dropdown').children('a').append(function() {
                    return '<div class="dropdown-expander"><i class="fa fa-bars"></i></div>';
                });
                $('.pet_menu > ul > li.dropdown a >.dropdown-expander').on('click', function() {
                    $(this).parent().parent().children('.sub-menu').slideToggle();
                    return false;
                });

            }
        },


        //banner slider
        Slider: function() {
            if ($(".rev_slider_wrapper").length) {
                var tpj = jQuery;

                var revapi1078;
                tpj(document).ready(function() {
                    if (tpj("#rev_slider_1078_1").revolution == undefined) {
                        revslider_showDoubleJqueryError("#rev_slider_1078_1");
                    } else {
                        revapi1078 = tpj("#rev_slider_1078_1").show().revolution({
                            sliderType: "standard",
                            jsFileLocation: "plugins/revolution/js",
                            sliderLayout: "fullscreen",
                            dottedOverlay: "none",
                            delay: 9000,
                            navigation: {
                                keyboardNavigation: "off",
                                keyboard_direction: "horizontal",
                                mouseScrollNavigation: "off",
                                mouseScrollReverse: "default",
                                onHoverStop: "off",
                                touch: {
                                    touchenabled: "on",
                                    swipe_threshold: 75,
                                    swipe_min_touches: 1,
                                    swipe_direction: "horizontal",
                                    drag_block_vertical: false
                                },
                                arrows: {
                                    style: "zeus",
                                    enable: true,
                                    hide_onmobile: true,
                                    hide_under: 600,
                                    hide_onleave: true,
                                    hide_delay: 200,
                                    hide_delay_mobile: 1200,
                                    tmp: '<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div> </div>',
                                    left: {
                                        h_align: "left",
                                        v_align: "center",
                                        h_offset: 30,
                                        v_offset: 0
                                    },
                                    right: {
                                        h_align: "right",
                                        v_align: "center",
                                        h_offset: 30,
                                        v_offset: 0
                                    }
                                },
                                bullets: {
                                    enable: false,
                                    hide_onmobile: true,
                                    hide_under: 600,
                                    style: "metis",
                                    hide_onleave: true,
                                    hide_delay: 200,
                                    hide_delay_mobile: 1200,
                                    direction: "horizontal",
                                    h_align: "center",
                                    v_align: "bottom",
                                    h_offset: 0,
                                    v_offset: 30,
                                    space: 5,
                                    tmp: '<span class="tp-bullet-img-wrap">  <span class="tp-bullet-image"></span></span><span class="tp-bullet-title">{{title}}</span>'
                                }
                            },
                            viewPort: {
                                enable: true,
                                outof: "pause",
                                visible_area: "80%",
                                presize: false
                            },
                            responsiveLevels: [1240, 1024, 778, 480],
                            visibilityLevels: [1240, 1024, 778, 480],
                            gridwidth: [1240, 1024, 778, 480],
                            gridheight: [600, 600, 500, 400],
                            lazyType: "none",
                            parallax: {
                                type: "mouse",
                                origo: "slidercenter",
                                speed: 2000,
                                levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50, 47, 48, 49, 50, 51, 55],
                            },
                            shadow: 0,
                            spinner: "off",
                            stopLoop: "off",
                            stopAfterLoops: -1,
                            stopAtSlide: -1,
                            shuffle: "off",
                            autoHeight: "off",
                            hideThumbsOnMobile: "off",
                            hideSliderAtLimit: 0,
                            hideCaptionAtLimit: 0,
                            hideAllCaptionAtLilmit: 0,
                            debugMode: false,
                            fallbacks: {
                                simplifyAll: "off",
                                nextSlideOnWindowFocus: "off",
                                disableFocusListener: false,
                            }
                        });
                    }
                }); /*ready*/
            }
        },

        //menu
        Menu_bar: function() {
            var counter = 0;
            $('.cr_menu_btn').click(function() {
                if (counter == '0') {
                    $('.cr_menu_wrapper').addClass('cr_main_menu_hide');
                    $(this).children().removeAttr('class');
                    $(this).children().attr('class', 'glyphicon glyphicon-align-justify');
                    counter++;
                } else {
                    $('.cr_menu_wrapper').removeClass('cr_main_menu_hide');
                    $(this).children().removeAttr('class');
                    $(this).children().attr('class', 'glyphicon glyphicon-align-justify');
                    counter--;
                }
            });
        },
        //Map
        Map: function() {
            if ($(".ed_map").length) {
                $(".ed_map").each(function(index) {
                    var id = $(this).attr("id");
                    var address = $(this).attr("data-address");
                    $(this).googleMap({
                        scrollwheel: true
                    });
                    $(this).addMarker({
                        //coords: [22.9622672, 76.05079490000003] // for using lat long for marker
                        address: "address"
                    });
                });
            }


        },

        //Gallery
        Gallery: function() {
            if ($(".popup-gallery").length) {
                $('.popup-gallery').magnificPopup({
                    delegate: 'a',
                    type: 'image',
                    removalDelay: 500,
                    mainClass: 'mfp-img-mobile',
                    gallery: {
                        enabled: true
                    },
                });
            }


            //gallery 1  
            if ($(".popup-gallery1").length) {
                $('.popup-gallery1').magnificPopup({
                    delegate: 'a',
                    type: 'image',
                    removalDelay: 500,
                    mainClass: 'mfp-img-mobile',
                    gallery: {
                        enabled: true
                    },
                });
            }
            //gallery2	  
            if ($(".popup-gallery2").length) {
                $('.popup-gallery2').magnificPopup({
                    delegate: 'a',
                    type: 'image',
                    removalDelay: 500,
                    mainClass: 'mfp-img-mobile',
                    gallery: {
                        enabled: true
                    },
                });
            }
            //gallery3
            if ($(".popup-gallery3").length) {
                $('.popup-gallery3').magnificPopup({
                    delegate: 'a',
                    type: 'image',
                    removalDelay: 500,
                    mainClass: 'mfp-img-mobile',
                    gallery: {
                        enabled: true
                    },
                });
            }

        },

        //testimonial slider	
        Testimonial: function() {
            if ($(".slick_crousel").length) {
                $('.slick_crousel').slick({
                    centerMode: true,
                    autoplay: true,
                    centerPadding: '10px',
                    slidesToShow: 3,
                    arrows: true,
                    responsive: [{
                            breakpoint: 992,
                            settings: {
                                arrows: true,
                                centerMode: true,
                                centerPadding: '10px',
                                slidesToShow: 2
                            }
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                arrows: true,
                                centerMode: true,
                                centerPadding: '10px',
                                slidesToShow: 2
                            }
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                arrows: true,
                                centerMode: true,
                                centerPadding: '10px',
                                slidesToShow: 1
                            }
                        }

                    ]
                });

                $('.content_1').show();
                $('.slick_crousel').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
                    $('.slick_cls').hide();
                    $('.content_' + (parseInt(nextSlide) + 1)).show();
                });

            }
        },
        //contact mail
        MailFunction: function() {	
            $('.submit_frm').on('click', function() {
                var u_name = $('#name').val();
                var u_email = $('#email').val();
                var u_phone = $('#number').val();
                var u_service = $('#service').val();
                var u_msg = $('#message').val();

                $.ajax({
                    type: "POST",
                    url: "contactmail.php",
                    data: {
                        'username': u_name,
                        'useremail': u_email,
                        'userphone': u_phone,
                        'userservice': u_service,
                        'user_msg': u_msg,
                    },
                    success: function(msg) {
                        var full_msg = msg.split("#");
                        if (full_msg[0] == '1') {
                            $('#name').val("");
                            $('#email').val("");
                            $('#number').val("");
                            $('#service').val("");
                            $('#message').val("");
                            $('#err_msg').html(full_msg[1]);
                        } else {
                            $('#name').val(u_name);
                            $('#email').val(u_email);
                            $('#number').val(u_phone);
                            $('#service').val(u_service);
                            $('#message').val(u_msg);
                            $('#err_msg').html(full_msg[1]);
                        }
                    }
                });
            });
        }




    };
    $(document).ready(function() {
        landingpage.init();
    });



})(jQuery);