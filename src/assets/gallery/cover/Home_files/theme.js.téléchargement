/* Copyright (C) YOOtheme GmbH, YOOtheme Proprietary Use License (http://www.yootheme.com/license) */

jQuery(function($) {

    var config = $('html').data('config') || {},
        win    = $(window),
        navbar = $('.tm-navbar'),
        body   = $('body');

    UIkit.$win.on('load resize', UIkit.Utils.debounce((function(block_navbar, block_main, block_footer, main_padding, fn, h) {

        block_navbar = $('.tm-navbar');
        block_main   = $('.tm-block-main');
        block_footer = $('.tm-footer');
        main_padding = block_main.outerHeight() - block_main.height();

        fn = function() {

            block_main.css('min-height', '');

            if (document.body.scrollHeight <= window.innerHeight) {

                if (body.hasClass('tm-navbar-fixed')) {
                    h = window.innerHeight - (block_footer.outerHeight() + main_padding);
                } else {
                    h = window.innerHeight - (block_footer.outerHeight() + navbar.outerHeight() + main_padding);
                }

                block_main.css('min-height', h);
            }

            return fn;
        };

        return fn();

    })(), 80));

    // Social buttons
    $('article[data-permalink]').socialButtons(config);

    navbar.find('.uk-dropdown').addClass('uk-dropdown-center');

    if(body.hasClass('tm-navbar-fixed')) {

        win.on('scroll', function() {

            if (win.scrollTop() > 100){
                navbar.addClass('tm-navbar-small');
            } else {
                navbar.removeClass('tm-navbar-small');
            }

        });

    }


    // Grid Lykka
    // Fix min-height bug on flex items (IE)
    // 1. set a height of 1px, so min-height come into action
    var ua = window.navigator.userAgent;
    if (ua.indexOf("MSIE") >= 0 || ua.indexOf("Trident/") >= 0) {
        $('.tm-grid-lykka .uk-panel > .uk-panel.uk-flex.uk-flex-center').each(function() {
            $(this).attr('style', 'height: 1px;');  /* 1 */
        });
    }

});
