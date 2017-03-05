var mapboxStreets = new ol.layer.Tile({
  source: new ol.source.XYZ({
    url: 'https://api.mapbox.com/styles/v1/mapbox/streets-v9/tiles/256/{z}/{x}/{y}?access_token=' + mapbox_token
  }),
  visible: false,
  attribution: 'Satellite © <a href="http://www.mapbox.com">Mapbox</a>'
});

var mapboxSat = new ol.layer.Tile({
  source: new ol.source.XYZ({
    url: 'https://api.mapbox.com/styles/v1/gpimblott/cizl21vq3000p2snuftwgj7q1/tiles/256/{z}/{x}/{y}?access_token=' + mapbox_token
  }),
  visible: false,
  attribution: 'Satellite © <a href="http://www.mapbox.com">Mapbox</a>'
});

var nlsHistoric = new ol.layer.Tile({
  source: new ol.source.XYZ({
    tileUrlFunction: function (src) {
      return NLSTileUrlOS(src[ 1 ], src[ 2 ], src[ 0 ]);
    }
  }),
  visible: false
});

// Open Street Map
var osm = new ol.layer.Tile({
  source: new ol.source.OSM(),
  visible: true
});

var baseMaps = [ osm, mapboxStreets, mapboxSat, nlsHistoric ];

var centre = ol.proj.transform([-1.812, 52.443], 'EPSG:4326', 'EPSG:3857');


var map = new ol.Map({
  target: 'map',
  layers: baseMaps,
  view: new ol.View({
    center: centre,
    zoom: 7,
    projection: 'EPSG:3857'
  })
});

var layers = [];
var layerNum = 0;
for (var g = 0; g < overlayData.length; g++) {

  var r = $('<li class="menu-item dropdown dropdown-submenu">'
    + '<a href="#" class="dropdown-toggle" data-toggle="dropdown">' + overlayData[ g ].groupName + '</a>'
    + '<ul class="dropdown-menu" id="layer_group_' + g + '"></ul>'
    + '</li>');
  $("#layer-menu").append(r);

  for (var l = 0; l < overlayData[ g ].layers.length; l++) {
    var item = overlayData[ g ].layers[ l ];
    var b = $('<li class="menu-item layer-item" ><input type="checkbox" id="' + layerNum + '" onchange = "changeLayer(this)"/>&nbsp;' + item.name + '</a></li>');
    $("#layer_group_" + g).append(b);

    var layer

    if (item.tiled) {
      layer = new ol.layer.Tile({
        source: new ol.source.TileWMS({
          url: item.url,
          params: {
            'LAYERS': item.layers,
            'VERSION': '1.1.1',
            'FORMAT': 'image/png'
          }
        }),
        visible: false,
        opacity: item.opacity
      });
    } else {

      layer = new ol.layer.Image({
        source: new ol.source.ImageWMS({
          url: item.url,
          ratio: 1,
          params: {
            'LAYERS': item.layers,
            'VERSION': '1.1.1',
            'FORMAT': 'image/png'
          },
          serverType: 'mapserver'
        }),
        visible: false,
        opacity: item.opacity
      });
    }

    map.addLayer(layer);
    layers.push(layer);
    layerNum += 1;
  }

};

$("#hideAllButton").click(function () {
  layers.forEach(function (layer) {
    layer.setVisible(false);
  })
  $('input[type=checkbox]').attr('checked', false);
});

$("#osm").click(function () {
  clearBaseMaps();
  osm.setVisible(true);
});

$("#mbstreet").click(function () {
  clearBaseMaps();
  mapboxStreets.setVisible(true);
});

$("#mbsat").click(function () {
  clearBaseMaps();
  mapboxSat.setVisible(true);
});

$("#nls").click(function () {
  //clearBaseMaps();
  osm.setVisible(false);
  nlsHistoric.setVisible(true);
});

function clearBaseMaps () {
  baseMaps.forEach(function (layer) {
    layer.setVisible(false);
  })
}

function changeLayer (element) {
  layers[ element.id ].setVisible(element.checked);
}

