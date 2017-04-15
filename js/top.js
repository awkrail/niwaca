$(function(){
    //topページのサイズを読み取ってそのサイズの分に画像いっぱいにする
    var width = $(window).width();
    var height = $(window).height();

    //cssに入れる
    $('#top_image').css('width', width);
    $('#top_image').css('height', height);
});