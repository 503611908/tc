$(document).ready(function () {
    if (set.module.imglightbox == 1) {
        $('.post-content-content img').not('.c-downbtn-icon,.cp-postcard-item img,.wxshow-img-plane img').each(function () {
            $(this).attr('data-fancybox', 'gallery');
            if (set.module.imglazyload == 1) {
                $(this).attr('data-src', $(this).attr('data-original'));
            }
        });
        Fancybox.bind("[data-fancybox=gallery]", {
            backFocus : false,
            Toolbar: {
                display: [
                    "zoom",
                    "slideshow",
                    "fullscreen",
                    "close",
                    "counter"
                ],
            },
            Thumbs: {
                autoStart: false,
            }
        });
    }
});


