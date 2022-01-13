// This is a JavaScript file

// This is a JavaScript file
//. 初期中心位置
var lat = 34.97262657552139;
var lng = 138.38885758465798;

//. 初期ズームレベル
var zoomlevel = 12;

var map = null;


$(function(){
  //. 初期位置を中心とした地図を OpenStreetMap データで表示
  map = L.map('demoMap', { dragging: true, zoomControl: false }).setView( [ lat, lng ], zoomlevel );
  L.control.zoom( { position: 'bottomright' } ).addTo( map );
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © <a href="//openstreetmap.org/">OpenStreetMap</a>',
    }).addTo( map );
    var popup = L.popup();});