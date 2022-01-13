// This is a JavaScript file
//. 初期中心位置
var lat = 34.97262657552139;
var lng = 138.38885758465798;

//. 初期ズームレベル
var zoomlevel = 20;

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
    
L.marker([34.9725512351844,138.38884360696]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("パルシェ改札口".fontcolor(""))
      .openOn(map);
      
});
L.marker([34.9756424567411,138.387143926894]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("セノバ".fontcolor(""))
      .openOn(map);
      
});
L.marker([34.9735369138819,138.388474324492]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("松坂屋静岡店".fontcolor(""))
      .openOn(map);
      });
 });
