"use strict";

jQuery(document).ready(function ($) {

    //make the top nave clickable in small mode
    $('.navbar .dropdown-toggle').hover(function() {
        if (document.documentElement.clientWidth > 769) { $(this).addClass('disabled');}
        else { $(this).removeClass('disabled'); }
    });

    // -------------------------------------------------------------
    // WOW
    // -------------------------------------------------------------
/*    var wow = new WOW(
        {
            boxClass: 'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset: 0,          // distance to the element when triggering the animation (default is 0)
            mobile: false,       // trigger animations on mobile devices (default is true)
            live: true,       // act on asynchronously loaded content (default is true)
            callback: function (box) {
                // the callback is fired every time an animation is started
                // the argument that is passed in is the DOM node being animated
            }
        }
    );

    wow.init();*/

    // -------------------------------------------------------------
    // WOW END
    // -------------------------------------------------------------


    /*Menu Scroll start*/

    var s = $("#menu-offscroll");
    var pos = s.position();
    var scrollmenu = $("#menu-offscroll");
    var scrollmenu_pos = scrollmenu.position();
    var windowpos = $(window).scrollTop();

    if (windowpos - scrollmenu_pos.top > 50) {
        s.addClass("menu-onscroll");
    }
    else {
        s.removeClass("menu-onscroll");
    }

    $(window).scroll(function () {
        windowpos = $(window).scrollTop();
        if (windowpos - scrollmenu_pos.top > 50) {
            s.addClass("menu-onscroll");
        }
        else {
            s.removeClass("menu-onscroll");
        }
    });
    /*Menu Scroll end*/


    //adding yamm mega menu
    $(document).on('click', '.yamm .dropdown-menu', function (e) {
        //e.stopPropagation()
    });


    //Breaking News
    var $nt_example2 = $('#nt-example2');
    $nt_example2.newsTicker({
        row_height: 40,
        max_rows: 1,
        speed: 300,
        duration: 2000,
        pauseOnHover: 1,
        stopButton: $nt_example2.find('.fa-play'),
        startButton: $nt_example2.find('.fa-pause'),
        start: function () {


        },
        stop: function () {


        },


        pause: function () {
            $nt_example2.find('li i').removeClass('fa-play').addClass('fa-pause');
        },
        unpause: function () {
            $nt_example2.find('li i').removeClass('fa-pause').addClass('fa-play');
        }
    });

    //smooth scroll
    $('.gotome').smoothScroll(
        {
            speed: 600
        }
    );


    /*******************************************
     ***  OWL SLider
     *******************************************/

    var $homesliedshow = $("#home-slider, #home-slider2").owlCarousel({

        navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        addClassActive: true,
        pagination: true,
        paginationNumbers: false,
        navigationText: ["", ""],
        beforeInit: function () {

        },
        afterInit: function () {
            var cbpagination = this.paginationWrapper;
            $.each(this.$userItems, function (key, singleitem) {
                cbpagination.find('.owl-page').eq(key).hide();
            });


            var cbcount = 0;
            $.each(this.$userItems, function (key, singleitem) {

                if (key < 3) {
                    cbpagination.find('.owl-page').eq(key).show();
                }
                cbpagination.find('.owl-page').eq(cbcount).html('<span class="owlpagenationextra owlpagenationextral"><img src="' + $(singleitem).data('thumb') + '" alt="newsitem" /></span><span class="owlpagenationextra owlpagenationextrar">' + $(singleitem).data('title') + '</span>');
                cbcount++;
            });
        },
        afterUpdate: function () {

            var cbpagination = this.paginationWrapper;
            $.each(this.$userItems, function (key, singleitem) {
                cbpagination.find('.owl-page').eq(key).hide();
            });

            var cbcount = 0;
            $.each(this.$userItems, function (key, singleitem) {

                if (key < 3) {
                    cbpagination.find('.owl-page').eq(key).show();
                }
                cbpagination.find('.owl-page').eq(cbcount).html('<span class="owlpagenationextra owlpagenationextral"><img src="' + $(singleitem).data('thumb') + '" alt="newsitem" /></span><span class="owlpagenationextra owlpagenationextrar">' + $(singleitem).data('title') + '</span>');
                cbcount++;
            });
        },
        afterMove: function () {
            var cbpagination = this.paginationWrapper;
            var cbcount = 0;
            var takeaction = false;
            var actionkey = '';
            $.each(this.$userItems, function (key, singleitem) {
                if ($(singleitem).parent().hasClass('active')) {
                    //console.log(key);
                    //console.log(cbpagination.find('.owl-page').eq(key).attr('style'));
                    if (cbpagination.find('.owl-page').eq(key).attr('style') == "display: none;") {
                        takeaction = true;
                        actionkey = key;
                        //console.log(takeaction);
                    }
                }
            });

            if (takeaction) {

                cbpagination.find('.owl-page').hide();
                if (cbpagination.find('.owl-page').eq(actionkey).length) {
                    cbpagination.find('.owl-page').eq(actionkey).show();

                    if (cbpagination.find('.owl-page').eq(actionkey + 1).length) {
                        cbpagination.find('.owl-page').eq(actionkey + 1).show();
                    }
                    if (cbpagination.find('.owl-page').eq(actionkey + 2).length) {
                        cbpagination.find('.owl-page').eq(actionkey + 2).show();
                    }
                }
                else {
                    //will never reach here
                    console.log("here");
                    if (cbpagination.find('.owl-page').eq(0).length) {
                        cbpagination.find('.owl-page').eq(0).show();
                    }

                    if (cbpagination.find('.owl-page').eq(1).length) {
                        cbpagination.find('.owl-page').eq(1).show();
                    }

                    if (cbpagination.find('.owl-page').eq(2).length) {
                        cbpagination.find('.owl-page').eq(2).show();
                    }

                }
                actionkey = '';
                takeaction = false;

            }

        }

    });


    //magnific popup
    $('#cbx-photo-galary').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            // options for gallery
            enabled: true
        },
        image: {
            // options for image content type
            titleSrc: 'title'
        }
        // other options
    });


    //magnific popup end

    //adding twitter feed, dependency js location siteroot/tweetie/tweetie.js
    if ($("#tweetiefeed").length > 0) {

        $('#tweetiefeed').twittie(
            {
                'username': 'codeboxr',
                'hideReplies': true,
                'count': 10,
                'apiPath': 'tweetie/api/tweet.php',
                'dateFormat': '%b-%d-%Y',
                'template': '{{tweet}}-<span class="cbx-date"><a href="{{url}}" target="_blank">{{date}}</a></span>'
            }, function () {
                //using owl carousel
                $("#tweetiefeed ul").owlCarousel({
                    navigation: false, // Show next and prev buttons
                    slideSpeed: 900,
                    rewindSpeed: 1000,
                    paginationSpeed: 400,
                    navigationText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
                    pagination: false,
                    autoPlay: true,
                    stopOnHover: false,
                    singleItem: true,
                    addClassActive: true
                });
                //tweet sliding using owl carousel ends
            }
        );
    }
    //twitter feed done.

    //audio,vide player
    $('audio,video').mediaelementplayer({
        loop: true,
        shuffle: true,
        playlist: true,
        audioHeight: 30,
        playlistposition: 'bottom',
        features: ['playlistfeature', 'prevtrack', 'playpause', 'nexttrack', 'loop', 'shuffle', 'playlist', 'current', 'progress', 'duration', 'volume']
    });

});//jQuery DOM READY END

