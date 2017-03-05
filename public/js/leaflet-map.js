var map = new L.Map('map');

// create the tile layer with correct attribution
var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var osmAttrib = 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
var osm = new L.TileLayer(osmUrl, { minZoom: 5, maxZoom: 18, attribution: osmAttrib });

// start the map in South-East England
map.setView(new L.LatLng(53, -2.5), 6.5);
map.addLayer(osm);

var mapBounds = new L.LatLngBounds(
  new L.LatLng(49.852539, -7.793077),
  new L.LatLng(60.894042, 1.790425));
var mapMinZoom = 1;
var mapMaxZoom = 17;

// Base World map
var mapBoxStreets = L.tileLayer(
  'https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token={accessToken}', {
    accessToken: '{{mapbox_token}}',
    attribution: 'Streets © <a href="http://www.mapbox.com">Mapbox</a>'
  });

var mapBoxSatellite = L.tileLayer(
  'https://api.mapbox.com/styles/v1/gpimblott/cizl21vq3000p2snuftwgj7q1/tiles/256/{z}/{x}/{y}?access_token={accessToken}', {
    accessToken: '{{mapbox_token}}',
    attribution: 'Satellite © <a href="http://www.mapbox.com">Mapbox</a>'
  });

var historicMap = L.tileLayer('http://nls-{s}.tileserver.com/nls/{z}/{x}/{y}.jpg', {
  minZoom: mapMinZoom,
  maxZoom: mapMaxZoom,
  bounds: mapBounds,
  attribution: 'Historical Maps Layer, 1919-1947 from the <a href="http://maps.nls.uk/projects/api/">NLS Maps API</a>',
  opacity: 0.85,
  subdomains: '0123'
});

var baseMaps = [
  {
    groupName: "Base Maps",
    expanded: true,
    layers: {
      "Open Street Map": osm,
      "1919-47 OS Maps": historicMap,
      "Mapbox Street": mapBoxStreets,
      "Mapbox Satellite": mapBoxSatellite
    }
  }
];


var overlays = [];

overlayData.forEach(function (groupData) {

  var group = { groupName: groupData.groupName, expanded: false, layers: {} };
  overlays.push(group);

  groupData.layers.forEach(function (server) {

    var overlay = null;
    var opacity = 1.0;
    var groupName = groupData.groupName;

    if (server.opacity != undefined) {
      opacity = server.opacity;
    }

    if (server.tiled) {
      overlay = L.tileLayer.wms(server.url, {
        layers: server.layers,
        format: 'image/png',
        transparent: true,
        attribution: server.attribution,
        opacity: opacity
      });
    } else {
      overlay = L.WMS.overlay(server.url, {
        format: 'image/png',
        layers: server.layers,
        transparent: true,
        attribution: server.attribution,
        opacity: opacity
      });
    }

    group.layers[server.name] = overlay;
  })
});

var options = {
  container_width: "250px",
  container_maxHeight: "50px",
  group_maxHeight: "200px",
  exclusive: false
};

var control = L.Control.styledLayerControl(baseMaps, overlays, options);
map.addControl(control);
