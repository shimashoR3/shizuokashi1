// This is a JavaScript file
//. 初期中心位置
var lat = 34.97262657552139;
var lng = 138.38885758465798;

//. 初期ズームレベル
var zoomlevel = 15;

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
    
L.marker([35.000077,138.412447]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("追手町消防署　本署".fontcolor(""))
      .openOn(map);
      
});
L.marker([34.976069,138.38175]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("追手町消防署　平和出張所".fontcolor(""))
      .openOn(map);
      
});
L.marker([34.98831,138.365277]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("追手町消防署　南田町出張所".fontcolor(""))
      .openOn(map);
      
});
L.marker([34.977651,138.354688]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("追手町消防署　山崎出張所".fontcolor(""))
      .openOn(map);
      
});L.marker([35.001157,138.407664]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("千代田消防署　本署".fontcolor(""))
      .openOn(map);
      
});L.marker([ 34.987425,138.390604]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("千代田消防署　城東出張所".fontcolor(""))
      .openOn(map);
      
});L.marker([35.014068, 138.423794]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("千代田消防署　瀬名出張所".fontcolor(""))
      .openOn(map);
      
});L.marker([35.031649,138.37963]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("千代田消防署　しずはた出張所".fontcolor(""))
      .openOn(map);
      
});L.marker([35.221648, 138.240665]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("千代田消防署　井川出張所".fontcolor(""))
      .openOn(map);
      
});L.marker([34.949612,138.410947]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("石田消防署　本署".fontcolor(""))
      .openOn(map);
      
});L.marker([34.949612,138.410947]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("石田消防署　東豊田出張所".fontcolor(""))
      .openOn(map);
  });L.marker([34.967078,138.390942]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("石田消防署　稲川出張所".fontcolor(""))
      .openOn(map);
});L.marker([34.946145,138.360242 ]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("石田消防署　鎌田出張所".fontcolor(""))
      .openOn(map);
            
});L.marker([ 34.923982, 138.365143]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("石田消防署　用宗出張所".fontcolor(""))
      .openOn(map);

});L.marker([34.955691,138.428346 ]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("石田消防署　大谷出張所".fontcolor(""))
      .openOn(map);      
});L.marker([35.021502, 138.472945]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("清水消防署　本署".fontcolor(""))
      .openOn(map);  
});L.marker([35.030591, 138.455025]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("清水消防署　高部出張所".fontcolor(""))
      .openOn(map); 
 });L.marker([35.015368,138.458712 ]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("清水消防署　有渡出張所".fontcolor(""))
      .openOn(map); 
});L.marker([ 35.041166 ,138.505811]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("湾岸消防署　本署".fontcolor(""))
      .openOn(map); 

});L.marker([35.111088,138.570559]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("湾岸消防署　庵原分署".fontcolor(""))
      .openOn(map);   

 });L.marker([35.061982,138.524525 ]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("湾岸消防署　興津出張所".fontcolor(""))
      .openOn(map);  
});L.marker([35.124042,138.513722 ]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("湾岸消防署　小島出張所".fontcolor(""))
      .openOn(map);      
 });L.marker([34.989105,138.486545  ]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("日本平消防署　本署".fontcolor(""))
      .openOn(map);                            
});L.marker([35.005497,138.518782]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("日本平消防署　三保出張所".fontcolor(""))
      .openOn(map);                 
});L.marker([34.976069,138.38175]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("消防庁舎（追手町消防署）".fontcolor(""))
      .openOn(map);
});L.marker([34.97552 ,138.382847 ]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("静岡庁舎".fontcolor(""))
      .openOn(map);
 });L.marker([35.221645,138.2414 ]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("井川支所".fontcolor(""))
      .openOn(map);
});L.marker([34.991826 ,138.378489 ]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("梅ケ島キャンプ場".fontcolor(""))
      .openOn(map);
      });
;L.marker([35.163103,138.326717]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("城北運動場".fontcolor(""))
      .openOn(map);
      });
;L.marker([34.981657 , 138.384909]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("玉川キャンプセンター".fontcolor(""))
      .openOn(map);
});L.marker([35.001286 ,138.408665 ]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("中央体育館".fontcolor(""))
      .openOn(map);
});L.marker([35.013429,138.353491 ]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("東部体育館".fontcolor(""))
      .openOn(map);
});L.marker([35.025795 ,138.412495 ]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("西ケ谷総合運動場".fontcolor(""))
      .openOn(map);
});L.marker([34.969541 ,138.37344 ]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("ふれあい健康増進館（ゆ・ら・ら）".fontcolor(""))
      .openOn(map);
});L.marker([35.018363 ,138.373109 ]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("北部勤労者福祉センター".fontcolor(""))
      .openOn(map);
});L.marker([35.215645 ,138.27892 ]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("北部体育館".fontcolor(""))
      .openOn(map);
});L.marker([34.983459 ,138.38566 ]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("リバウエル井川スキー場".fontcolor(""))
      .openOn(map);
});L.marker([35.243435 ,138.340951 ]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("葵生涯学習センター（アイセル２１）".fontcolor(""))
      .openOn(map);
});L.marker([35.08261 ,138.242214 ]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("梅ヶ島生涯学習交流館".fontcolor(""))
      .openOn(map);
});L.marker([35.141878 ,138.365415 ]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("大川生涯学習交流館".fontcolor(""))
      .openOn(map);
});L.marker([35.034518 ,138.253509 ]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("大河内生涯学習交流館".fontcolor(""))
      .openOn(map);
});L.marker([34.970846 ,138.367105 ]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("清沢生涯学習交流館".fontcolor(""))
      .openOn(map);
});L.marker([35.110475 ,138.331391]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("西部生涯学習センター".fontcolor(""))
      .openOn(map);
});L.marker([35.001448 ,138.406029 ]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("玉川生涯学習交流館".fontcolor(""))
      .openOn(map);
});L.marker([35.017446 ,138.42286 ]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("東部生涯学習センター".fontcolor(""))
      .openOn(map);
});L.marker([35.001972 ,138.369515 ]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("西奈生涯学習センター".fontcolor(""))
      .openOn(map);

});L.marker([34.983742 ,138.328847 ]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("藁科生涯学習センター".fontcolor(""))
      .openOn(map);
});L.marker([34.988287 ,138.37805 ]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("中央図書館".fontcolor(""))
      .openOn(map);

});L.marker([35.029246 ,138.387591 ]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("中央図書館麻機分館".fontcolor(""))
      .openOn(map);

});L.marker([35.022236 ,138.364475]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("中央図書館美和分館".fontcolor(""))
      .openOn(map);
});L.marker([35.01841 ,138.372173 ]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("北部図書館".fontcolor(""))
      .openOn(map);
      });
;L.marker([34.97499 ,138.386244 ]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("御幸町図書館".fontcolor(""))
      .openOn(map);
      });
;L.marker([34.976666 ,138.384774]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("クリエーター支援センター".fontcolor(""))
      .openOn(map);
      });
;L.marker([34.97499 ,138.386244 ]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("産学交流センター".fontcolor(""))
      .openOn(map);
      });
;L.marker([34.971146 ,138.386392 ]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("静岡音楽館".fontcolor(""))
      .openOn(map);
      });
;L.marker([34.972449 ,138.386614 ]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("静岡市美術館".fontcolor(""))
      .openOn(map);
      });
;L.marker([34.980883,138.386869 ]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("静岡市民文化会館".fontcolor(""))
      .openOn(map);
      });;L.marker([,]).addTo(map).on('click', function (e) {
   
;L.marker([34.981352 ,138.385976 ]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("静岡市民文化会館前駐車場".fontcolor(""))
      .openOn(map);
      });
;L.marker([35.072589 ,138.372391 ]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("賎機都市山村交流センター（安倍ごころ）".fontcolor(""))
      .openOn(map);
      });
;L.marker([34.985164 ,138.317511 ]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("中勘助文学記念館".fontcolor(""))
      .openOn(map);
      });
;L.marker([34.976339 ,138.372352 ]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("番町市民活動センター".fontcolor(""))
      .openOn(map);
      });

;L.marker([34.982575 ,138.376261 ]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("文化財資料館".fontcolor(""))
      .openOn(map);
      });
;L.marker([35.013442 ,138.270656 ]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("藁科都市山村交流センター（わらびこ）".fontcolor(""))
      .openOn(map);
      });
;L.marker([ 35.265099 ,138.330452 ]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("梅ヶ島コンヤの里".fontcolor(""))
      .openOn(map);
      });
;L.marker([35.265184 ,138.330837 ]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("梅ヶ島新田温泉浴場".fontcolor(""))
      .openOn(map);
      });
;L.marker([34.976666 ,138.384774 ]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("駿府城跡観光バス駐車場".fontcolor(""))
      .openOn(map);
      });
;L.marker([35.18182 ,138.27373 ]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("口坂本温泉浴場".fontcolor(""))
      .openOn(map);
     
      });
 ;L.marker([35.049758 ,138.313219 ]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("高山・市民の森".fontcolor(""))
      .openOn(map);
     
      });
;L.marker([35.121006 ,138.214745 ]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("楢尾クリエーターズビレッジ".fontcolor(""))
      .openOn(map);
     
      });
;L.marker([35.283825 ,138.343911 ]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("日影沢親水園「魚魚の里」".fontcolor(""))
      .openOn(map);
     
      });
;L.marker([35.306979 ,138.196413 ]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("南アルプス赤石温泉白樺荘".fontcolor(""))
      .openOn(map);
     
      });
;L.marker([35.107421 ,138.22747 ]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("湯ノ島温泉浴場".fontcolor(""))
      .openOn(map);
     
      });
;L.marker([34.945816 ,138.36559 ]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("長田支所".fontcolor(""))
      .openOn(map);
     
      });
;L.marker([34.96074 ,138.404096 ]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("駿河区役所".fontcolor(""))
      .openOn(map);
     
      });
;L.marker([34.9523 ,138.385322 ]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("大里生涯学習センター".fontcolor(""))
      .openOn(map);
     
      });
;L.marker([34.939314 ,138.358759 ]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("長田生涯学習センター".fontcolor(""))
      .openOn(map);
     
      });
;L.marker([34.972609 ,138.420777 ]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("駿河生涯学習センター（来・て・こ）".fontcolor(""))
      .openOn(map);
     
      });
;L.marker([34.39016 ,133.318717 ]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("南部生涯学習センター".fontcolor(""))
      .openOn(map);
     
      });
;L.marker([34.953382 ,138.333393 ]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("駿府匠宿".fontcolor(""))
      .openOn(map);
     
      });
;L.marker([34.979901 ,138.439466 ]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("日本平動物園".fontcolor(""))
      .openOn(map);
     
      });
;L.marker([35.116524 ,138.595318 ]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("蒲原支所".fontcolor(""))
      .openOn(map);
     
      });
;L.marker([35.015729 ,138.489582 ]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("清水区役所".fontcolor(""))
      .openOn(map);
     
      });
;L.marker([35.115041 ,138.581314 ]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("蒲原西部コミュニティセンター".fontcolor(""))
      .openOn(map);
     
      });
;L.marker([35.116346 ,138.595837 ]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("蒲原体育館".fontcolor(""))
      .openOn(map);
     
      });
;L.marker([35.129773 ,138.623657 ]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("蒲原東部コミュニティセンター".fontcolor(""))
      .openOn(map);
     
      });
;L.marker([35.056554 ,138.470345 ]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("清水庵原球場".fontcolor(""))
      .openOn(map);
     
      });
;L.marker([35.045833 ,138.510849 ]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("清水清見潟公園".fontcolor(""))
      .openOn(map);
     
      });
;L.marker([34.998073 ,138.492628 ]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("清水総合運動場".fontcolor(""))
      .openOn(map);
     
      });

;L.marker([35.016534 ,138.449411 ]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("清水長崎新田スポーツ交流センター".fontcolor(""))
      .openOn(map);
     
      });
;L.marker([35.054808 ,138.480989 ]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("清水ナショナルトレーニングセンター".fontcolor(""))
      .openOn(map);
     
      });
;L.marker([34.984621 ,138.480206 ]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("清水日本平運動公園".fontcolor(""))
      .openOn(map);
     
      });
;L.marker([34.965437 ,138.474943 ]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("清水蛇塚スポーツグラウンド".fontcolor(""))
      .openOn(map);
     
      });
;L.marker([35.010308 ,138.527301 ]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("清水三保体育館".fontcolor(""))
      .openOn(map);
     
      });
;L.marker([35.019876 ,138.489741 ]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("東部勤労者福祉センター".fontcolor(""))
      .openOn(map);
     
      });
;L.marker([35.019833 ,138.521195 ]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("三保真崎海水浴場（海水浴場開設期間のみ）".fontcolor(""))
      .openOn(map);
     
      });
;L.marker([35.110845 ,138.562386 ]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("由比体育館".fontcolor(""))
      .openOn(map);
     
      });
;L.marker([35.045833 ,138.510849 ]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("清水清見潟公園".fontcolor(""))
      .openOn(map);
     
      });
;L.marker([35.119036 ,138.428116 ]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("清水森林公園管理事務所".fontcolor(""))
      .openOn(map);
     
      });
;L.marker([34.997917 ,138.466057 ]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("清水船越堤公園管理事務所".fontcolor(""))
      .openOn(map);
     
      });
;L.marker([35.019193 ,138.516992 ]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("三保真崎広場（三保真崎グラウンドゴルフ場）".fontcolor(""))
      .openOn(map);
     
      });
;L.marker([35.070044 ,138.524395 ]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("八木間六本松公園".fontcolor(""))
      .openOn(map);
     
            });
       });
 });
