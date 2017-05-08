//topページのサイズを読み取ってそのサイズの分に画像いっぱいにする
$(window).on('load resize', function(){
    var width = $(window).width();
    var height = $(window).height();

    //cssに入れる
    $('#top_image').css('width', width);
    $('#top_image').css('height', height);

});


//google mapのための関数
function initialize() {
    var latlng = new google.maps.LatLng(33.559659, 130.427883);
    var myOptions = {
        zoom: 18, /*拡大比率*/
        center: latlng, /*表示枠内の中心点*/
        mapTypeId: google.maps.MapTypeId.ROADMAP/*表示タイプの指定*/
    };
    var map = new google.maps.Map(document.getElementById('map_canvas'), myOptions);

    //地図上にマーカーを配置する
    var marker = new google.maps.Marker({
        position : latlng, //緯度・経度
        map : map          //表示する地図
    });
}
