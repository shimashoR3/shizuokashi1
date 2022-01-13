// This is a JavaScript file
//. 初期中心位置
var lat = 34.97262657552139;
var lng = 138.38885758465798;

//. 初期ズームレベル
var zoomlevel = 18;

var map = null;


$(function(){
  //. 初期位置を中心とした地図を OpenStreetMap データで表示
  map = L.map('demoMap', { dragging: true, zoomControl: false }).setView( [ lat, lng ], zoomlevel );
  L.control.zoom( { position: 'bottomright' } ).addTo( map );
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © <a href="//openstreetmap.org/">OpenStreetMap</a>',
    }).addTo( map );
    var popup = L.popup();
    //.マーカー
    
L.marker([34.976987,138.383057]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("静岡県庁".fontcolor(""))
      .openOn(map);
      
});
L.marker([34.968688,138.406391]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("静岡総合庁舎".fontcolor(""))
      .openOn(map);
      
});
L.marker([35.015729,138.489582]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("静岡市役所 清水庁舎".fontcolor(""))
      .openOn(map);
      
});
L.marker([34.975401,138.383268]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("静岡市役所静岡庁舎及び葵区役所".fontcolor(""))
      .openOn(map);
      
});L.marker([35.015729,138.489582]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("静岡市役所 清水庁舎".fontcolor(""))
      .openOn(map);
      
});L.marker([34.945907,138.365418]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("駿河区役所".fontcolor(""))
      .openOn(map);
      
});L.marker([35.116402,138.595493]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("清水区役所 蒲原支所".fontcolor(""))
      .openOn(map);
      
});L.marker([35.221614,138.241234]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("井川支所".fontcolor(""))
      .openOn(map);
      
});L.marker([34.992554,138.354295]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("林業センター".fontcolor(""))
      .openOn(map);
      
});L.marker([34.979423,138.386409]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("総合社会福祉会館 シズウエル".fontcolor(""))
      .openOn(map);
      
});L.marker([34.980595,138.389845]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("もくせい会館".fontcolor(""))
      .openOn(map);
      
});L.marker([34.969399,138.383757]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("静岡労政会館".fontcolor(""))
      .openOn(map);
      
});L.marker([34.968807,138.383163]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("あざれあ".fontcolor(""))
      .openOn(map);
      
});L.marker([34.949629,34.949629]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("ハローワーク静岡".fontcolor(""))
      .openOn(map);
      
});L.marker([34.974982,138.38406]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("ハローワークプラザ静岡".fontcolor(""))
      .openOn(map);
      
});L.marker([34.966179,138.382439]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("シルバーワークステーション".fontcolor(""))
      .openOn(map);
      
});L.marker([34.965724,138.373652]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("ギャラリーココ".fontcolor(""))
      .openOn(map);
      
});L.marker([35.015055,138.482561]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("".fontcolor("静岡市シルバー人材センター 本部事務局・東事務所"))
      .openOn(map);
      
});L.marker([34.979565,138.399358]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("静岡市ワーク春日".fontcolor(""))
      .openOn(map);
      
});L.marker([34.970735,138.368383]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("静岡家庭授産福祉センター 田町本所".fontcolor(""))
      .openOn(map);
      
});L.marker([35.014191,138.489069]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("清水産業・情報プラザ".fontcolor(""))
      .openOn(map);
      
});L.marker([34.976595,138.384796]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("静岡市クリエーター支援センター".fontcolor(""))
      .openOn(map);
      
});L.marker([34.979423,138.386409]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("総合社会福祉会館 シズウエル　（ダブリ）".fontcolor(""))
      .openOn(map);
      
});L.marker([34.986211,138.387609]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("城東保健福祉エリア内 地域福祉交流プラザ".fontcolor(""))
      .openOn(map);
      
});L.marker([34.981889,138.381204]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("中央福祉センター ".fontcolor(""))
      .openOn(map);
      
});L.marker([34.97278,138.421073]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("南部勤労者福祉センター".fontcolor(""))
      .openOn(map);
      
});L.marker([35.222103,138.244287]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("井川高齢者生活福祉センター".fontcolor(""))
      .openOn(map);
      
});L.marker([34.97278,138.421073]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("小鹿老人福祉センター".fontcolor(""))
      .openOn(map);
      
});L.marker([34.941126,138.369316]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("長田保健福祉センター".fontcolor(""))
      .openOn(map);
      
});L.marker([35.021259,138.481501]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("清水テルサ".fontcolor(""))
      .openOn(map);
      
});L.marker([35.02404,138.483828]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("はーとぴあ清水".fontcolor(""))
      .openOn(map);
      
});L.marker([35.023481,138.346259]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("静岡市桜の園".fontcolor(""))
      .openOn(map);
      
});L.marker([35.004536,138.383414]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("静岡市桜の園 城北館".fontcolor(""))
      .openOn(map);
      
});L.marker([34.982163,138.309923]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("静岡市足久保学園".fontcolor(""))
      .openOn(map);
      
});L.marker([34.982163,138.309923]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("静岡市わらしな学園 わらしなロッジ".fontcolor(""))
      .openOn(map);
      
});L.marker([34.98141,138.312231]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("救護所".fontcolor(""))
      .openOn(map);
      
});L.marker([35.041793,138.383797]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("鯨ケ池老人福祉センター".fontcolor(""))
      .openOn(map);
      
});L.marker([35.082589,138.24216]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("大川高齢者生活福祉センター".fontcolor(""))
      .openOn(map);
      
});L.marker([35.232243,138.34474]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("静岡市梅ケ島 高齢者生活福祉センター".fontcolor(""))
      .openOn(map);
      
});L.marker([34.919024,138.362457]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("用宗老人福祉センター".fontcolor(""))
      .openOn(map);
      
});L.marker([34.979314,138.504019]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("南部交流センター 浜路の郷".fontcolor(""))
      .openOn(map);
      
});L.marker([35.06058,138.527789]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("清水東部老人憩いの家".fontcolor(""))
      .openOn(map);
      
});L.marker([34.998176,138.492422]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("清開きらく荘".fontcolor(""))
      .openOn(map);
      
});L.marker([34.996504,138.519715]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("清水松風荘".fontcolor(""))
      .openOn(map);
      
});L.marker([34.990449,138.513628]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("折戸老人福祉センター 羽衣荘".fontcolor(""))
      .openOn(map);
      
});L.marker([35.04104,138.471206]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("ふれあいの郷".fontcolor(""))
      .openOn(map);
      
});L.marker([35.086385,138.514545]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("テラス・おれんぢ".fontcolor(""))
      .openOn(map);
      
});L.marker([35.034585,138.470554]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("テラス・きらっと".fontcolor(""))
      .openOn(map);
      
});L.marker([34.975309,138.492751]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("静岡市清水みなとふれあいセンター".fontcolor(""))
      .openOn(map);
      
});L.marker([34.975309,138.492751]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("静岡市清水うみのこセンター".fontcolor(""))
      .openOn(map);
      
});L.marker([34.975309,138.492751]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("静岡市清水ひびきワーク".fontcolor(""))
      .openOn(map);
      
});L.marker([34.975309,138.492751]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("静岡市清水うしおワーク".fontcolor(""))
      .openOn(map);
      
});L.marker([34.975309,138.492751]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("静岡市清水うなばら学園".fontcolor(""))
      .openOn(map);
      
});L.marker([34.97086,138.367075]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("西部生涯学習センター".fontcolor(""))
      .openOn(map);
      
});L.marker([35.001454,138.405946]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("東部生涯学習センター".fontcolor(""))
      .openOn(map);
      
});L.marker([35.001981,138.369507]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("北部生涯学習センター".fontcolor(""))
      .openOn(map);
      
});L.marker([35.071587,138.362358]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("蒲原御殿山観光トイレ".fontcolor(""))
      .openOn(map);
      
});L.marker([35.036911,138.288635]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("学習展示施設 森の恵".fontcolor(""))
      .openOn(map);
      
});L.marker([34.974693,138.381079]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("高松若宮公園".fontcolor(""))
      .openOn(map);
      
});L.marker([34.972168,138.38874]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("パルシェ".fontcolor(""))
      .openOn(map);
      
});L.marker([34.974693,138.381079]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("静岡伊勢丹".fontcolor(""))
      .openOn(map);
      
});L.marker([35.012105,138.530303]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("清水三保海浜公園".fontcolor(""))
      .openOn(map);
      
});L.marker([35.004282,138.469353]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("木の下公園".fontcolor(""))
      .openOn(map);
      
});L.marker([35.007948,138.4907]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("港橋観光トイレ".fontcolor(""))
      .openOn(map);
      
});L.marker([34.972729,138.385784]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("静岡パルコ".fontcolor(""))
      .openOn(map);
      
});L.marker([34.962908,138.401358]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("松坂屋静岡店".fontcolor(""))
      .openOn(map);
      
});L.marker([34.973204,138.388142]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("静岡市三保松原文化創造センター「みほしるべ」".fontcolor(""))
      .openOn(map);
      
});L.marker([35.124,138.2745]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("北脇新田公園".fontcolor(""))
      .openOn(map);
      
});L.marker([34.972754,138.386376]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("葵タワー".fontcolor(""))
      .openOn(map);
      
});L.marker([34.940486,138.36381]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("安倍川駅西口駐輪場".fontcolor(""))
      .openOn(map);
      
});L.marker([34.975873,138.387545]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("新静岡セノバ".fontcolor(""))
      .openOn(map);
      
});L.marker([34.953625,138.332932]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("駿府匠宿".fontcolor(""))
      .openOn(map);
      
});L.marker([35.00805,138.491144]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent(" 清水次郎長の船宿「末廣」 ".fontcolor(""))
      .openOn(map);
      
});L.marker([35.046482,138.510447]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("興津坐漁荘".fontcolor(""))
      .openOn(map);
      
});L.marker([35.107726,138.567423]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("東海道由比宿交流館".fontcolor(""))
      .openOn(map);
      
});L.marker([34.980474,138.448104]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("静岡県舞台芸術公園 ".fontcolor(""))
      .openOn(map);
      
});L.marker([34.991709,138.446045]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("静岡県立美術館".fontcolor(""))
      .openOn(map);
      
});L.marker([34.985692,138.417148]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("グランシップ".fontcolor(""))
      .openOn(map);
      
});L.marker([34.985692,138.417148]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("静岡市美術館".fontcolor(""))
      .openOn(map);
      
});L.marker([34.971049,138.386254]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("静岡音楽館AOI".fontcolor(""))
      .openOn(map);
      
});L.marker([34.975401,138.383268]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("静岡市民ギャラリー".fontcolor(""))
      .openOn(map);
      
});L.marker([34.970707,138.390376]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("静岡科学館るくる".fontcolor(""))
      .openOn(map);
      
});L.marker([34.982595,138.376229]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("静岡市文化財資料館".fontcolor(""))
      .openOn(map);
      
});L.marker([34.980903,138.38719]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("静岡市民文化会館".fontcolor(""))
      .openOn(map);
      
});L.marker([35.022009,138.489644]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("マリナート 静岡市清水文化会館".fontcolor(""))
      .openOn(map);
      
});L.marker([34.973718,138.389595]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("静岡シネ・ギャラリー".fontcolor(""))
      .openOn(map);
      
});L.marker([34.985165,138.317522]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("中勘助文学記念館".fontcolor(""))
      .openOn(map);
      
});L.marker([34.955098,138.408211]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("静岡市立登呂博物館".fontcolor(""))
      .openOn(map);
      
});L.marker([34.991575,138.429163]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("草薙総合運動公園".fontcolor(""))
      .openOn(map);
      
});
L.marker([34.980759,138.381787]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("駿府公園".fontcolor(""))
      .openOn(map);
      
});
});
