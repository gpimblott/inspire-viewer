var overlayData = [
  {
    url:'http://maps.communities.gov.uk/geoserver/dclg_inspire/wms?service=WMS',
    layers: 'Green_Belt_2015_16_WGS84',
    attribution: "Department for Communities and Local Government - Greenbelt 2015-16",
    tiled: true,
    name: 'Greenbelt 2015-16'
  },
  {
    url: 'http://maps.communities.gov.uk/geoserver/dclg_inspire/wms?service=WMS',
    layers: 'Local_Authority_Greenbelt_boundaries_2011-12',
    attribution: "Department for Communities and Local Government - Greenbelt 2011-12",
    tiled: true,
    name: 'Greenbelt 2011-12'
  },
  {
    url: 'http://environment.data.gov.uk/ds/wms?SERVICE=WMS&INTERFACE=ENVIRONMENT--576b6ade-d31f-470b-a044-624a3e7c77c0',
    layers: 'LIDAR-DTM-TSR-50CM-ENGLAND-EA-WMS',
    tiled: true,
    attribution: "Environment Agency - 50cm LIDAR",
    name: '50cm LIDAR'
  },
  {
    url: 'http://environment.data.gov.uk/ds/wms?SERVICE=WMS&INTERFACE=ENVIRONMENT--6f51a299-351f-4e30-a5a3-2511da9688f7',
    layers: 'LIDAR-DSM-TSR-1M-ENGLAND-EA-WMS',
    tiled: true,
    attribution: "Environment Agency - 1M LIDAR",
    name: '1M LIDAR'
  },
  {
    url: 'http://environment.data.gov.uk/ds/wms?SERVICE=WMS&INTERFACE=ENVIRONMENT--8d57464f-d465-11e4-8790-f0def148f590',
    layers: 'eainspire2011-wms-RoFRS',
    tiled: true,
    attribution: "Environment Agency - Risk of flooding from rivers and the sea",
    name: "Risk of flooding from rivers and the sea"
  },
  {
    url:'http://environment.data.gov.uk/ds/wms?SERVICE=WMS&INTERFACE=ENVIRONMENT--2791ebe0-8ebb-4d9f-98d6-bce907becf33',
    layers: 'eainspire2011-wms-rd_noise_eng_lq16',
    attribution: "Department for Environment, Food and Rural Affairs - Road Noise",
    tiled: true,
    name: 'Road noise'
  },
  {
    url : 'http://inspire.landregistry.gov.uk/inspire/ows',
    layers : 'CP.CadastralParcel',
    name : 'Land Registry Land Parcels',
    tiled : false,
    attribution: "Land Registry"
  },
  {
    url: 'http://environment.data.gov.uk/ds/wms?SERVICE=WMS&INTERFACE=ENVIRONMENT--8d57464f-d465-11e4-8790-f0def148f590',
    layers: 'eainspire2011-wms-nat_hfm_inspire',
    tiled: true,
    attribution: "Environment Agency - Historic flooding",
    name: 'Historic flooding'
  },
  {
    url: 'http://environment.data.gov.uk/ds/wms?SERVICE=WMS&INTERFACE=ENVIRONMENT--7a955570-d465-11e4-a37c-f0def148f590',
    layers: 'eainspire2011-wms-historic_landfill_sites_010k_inspire',
    tiled: true,
    attribution: "Environment Agency - Historic Landfill",
    name: 'Historic Landfill'
  },
  {
    url: 'http://environment.data.gov.uk/ds/wms?SERVICE=WMS&INTERFACE=ENVIRONMENT--b07dc5b5-f382-4dc1-be4b-464f1e64f12b',
    layers: 'eainspire2011-wms-spatial-flood-defences',
    attribution: "Environment Agency - Flood Defences",
    tiled: true,
    name: 'Flood Defences'
  }

];
