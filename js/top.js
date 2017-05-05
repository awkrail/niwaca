$(window).on('load resize', function(){
    //topページのサイズを読み取ってそのサイズの分に画像いっぱいにする
    var width = $(window).width();
    var height = $(window).height();

    //cssに入れる
    $('#top_image').css('width', width);
    $('#top_image').css('height', height);
});


$(function() {
    var nav = $('#global-nav');

    console.log(nav);

    // メニューのtop座標を取得する
    var offsetTop = nav.offset().top;

    var floatMenu = function() {
        // スクロール位置がメニューのtop座標を超えたら固定にする
        if ($(window).scrollTop() > offsetTop) {
            nav.addClass('fixed');
            nav.css('opacity', 1);
        } else {
            nav.removeClass('fixed');
            nav.css('opacity', 0);
        }
    }
    $(window).scroll(floatMenu);
    $('body').bind('touchmove', floatMenu);
});
