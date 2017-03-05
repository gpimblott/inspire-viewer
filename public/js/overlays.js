var overlayData = [

  {
    groupName: 'Geology',
    layers: [
      {
        url: 'https://map.bgs.ac.uk/arcgis/services/UKSO/UKSO_BGS_NSI/MapServer/WmsServer',
        layers: 'Topsoil.Lanthanum',
        tiled: true,
        opacity: 0.5,
        name: 'Lanthanum concentrations',
        attribution: "British geological Society"
      },
      {
        url: 'https://map.bgs.ac.uk/arcgis/services/UKSO/UKSO_BGS_NSI/MapServer/WmsServer',
        layers: 'Topsoil.Magnesium',
        tiled: true,
        opacity: 0.5,
        name: 'Magnesium concentrations',
        attribution: "British geological Society"
      },
      {
        url: 'https://map.bgs.ac.uk/arcgis/services/UKSO/UKSO_BGS_NSI/MapServer/WmsServer',
        layers: 'Topsoil.Molybdenum',
        tiled: true,
        opacity: 0.5,
        name: 'Molybdenum concentrations',
        attribution: "British geological Society"
      },
      {
        url: 'https://map.bgs.ac.uk/arcgis/services/UKSO/UKSO_BGS_NSI/MapServer/WmsServer',
        layers: 'Topsoil.Sodium',
        tiled: true,
        opacity: 0.5,
        name: 'Sodium concentrations',
        attribution: "British geological Society"
      },
      {
        url: 'https://map.bgs.ac.uk/arcgis/services/UKSO/UKSO_BGS_NSI/MapServer/WmsServer',
        layers: 'Topsoil.Niobium',
        tiled: true,
        opacity: 0.5,
        name: 'Niobium concentrations',
        attribution: "British geological Society"
      },
      {
        url: 'https://map.bgs.ac.uk/arcgis/services/UKSO/UKSO_BGS_NSI/MapServer/WmsServer',
        layers: 'Topsoil.Neodymium',
        tiled: true,
        opacity: 0.5,
        name: 'Neodymium concentrations',
        attribution: "British geological Society"
      },
      {
        url: 'https://map.bgs.ac.uk/arcgis/services/UKSO/UKSO_BGS_NSI/MapServer/WmsServer',
        layers: 'Topsoil.Nickel',
        tiled: true,
        opacity: 0.5,
        name: 'Nickel concentrations',
        attribution: "British geological Society"
      },
      {
        url: 'https://map.bgs.ac.uk/arcgis/services/UKSO/UKSO_BGS_NSI/MapServer/WmsServer',
        layers: 'Topsoil.Lead',
        tiled: true,
        opacity: 0.5,
        name: 'Lead concentrations',
        attribution: "British geological Society"
      },
      {
        url: 'https://map.bgs.ac.uk/arcgis/services/UKSO/UKSO_BGS_NSI/MapServer/WmsServer',
        layers: 'Topsoil.Phosphorus',
        tiled: true,
        opacity: 0.5,
        name: 'Phosphorus concentrations',
        attribution: "British geological Society"
      },
      {
        url: 'https://map.bgs.ac.uk/arcgis/services/UKSO/UKSO_BGS_NSI/MapServer/WmsServer',
        layers: 'Topsoil.Manganese',
        tiled: true,
        opacity: 0.5,
        name: 'Manganese concentrations',
        attribution: "British geological Society"
      },
      {
        url: 'https://map.bgs.ac.uk/arcgis/services/UKSO/UKSO_BGS_NSI/MapServer/WmsServer',
        layers: 'Topsoil.Aluminium',
        tiled: true,
        opacity: 0.5,
        name: 'Aluminium concentrations',
        attribution: "British geological Society"
      },
      {
        url: 'https://map.bgs.ac.uk/arcgis/services/UKSO/UKSO_BGS_NSI/MapServer/WmsServer',
        layers: 'Topsoil.Calcium',
        tiled: true,
        opacity: 0.5,
        name: 'Calcium concentrations',
        attribution: "British geological Society"
      }
    ]
  },
  {
    groupName: 'Land Usage',
    layers: [
      {
        url: 'http://maps.communities.gov.uk/geoserver/dclg_inspire/wms?service=WMS',
        layers: 'Green_Belt_2015_16_WGS84',
        attribution: "Department for Communities and Local Government",
        tiled: true,
        opacity: 0.5,
        name: 'Greenbelt 2015-16',
      },
      {
        url: 'http://maps.communities.gov.uk/geoserver/dclg_inspire/wms?service=WMS',
        layers: 'Local_Authority_Greenbelt_boundaries_2011-12',
        attribution: "Department for Communities and Local Government",
        tiled: true,
        opacity: 0.5,
        name: 'Greenbelt 2011-12',
      },
      {
        url: 'http://inspire.landregistry.gov.uk/inspire/ows',
        layers: 'CP.CadastralParcel',
        name: 'Land Registry Land Parcels',
        tiled: false,
        attribution: "Land Registry"
      },
      {
        url: 'https://environment.data.gov.uk/ds/wms?SERVICE=WMS&INTERFACE=ENVIRONMENT&LC=10000000000000000000000000000000000000000000000000000000',
        layers: 'eainspire2011-wms-agri_land_class_inspire',
        attribution: 'Natural England',
        tiled: true,
        name: 'Agricultural Land Classification'
      },
      {
        url: 'https://environment.data.gov.uk/ds/wms?SERVICE=WMS&INTERFACE=ENVIRONMENT--7a955570-d465-11e4-a37c-f0def148f590',
        layers: 'eainspire2011-wms-historic_landfill_sites_010k_inspire',
        tiled: true,
        attribution: "Environment Agency - Historic Landfill",
        name: 'Historic Landfill'
      } ]
  },
  {
    groupName: 'LIDAR',
    layers: [
      {
        url: 'https://environment.data.gov.uk/ds/wms?SERVICE=WMS&INTERFACE=ENVIRONMENT--6f59c1ce-cc11-43aa-b11d-e1c3ab43a192',
        layers: 'LIDAR-DTM-TSR-25CM-ENGLAND-EA-WMS',
        tiled: true,
        opacity: 0.75,
        attribution: "Environment Agency",
        name: '25cm DTM LIDAR',
        group: 'LIDAR'
      },
      {
        url: 'https://environment.data.gov.uk/ds/wms?SERVICE=WMS&INTERFACE=ENVIRONMENT--576b6ade-d31f-470b-a044-624a3e7c77c0',
        layers: 'LIDAR-DTM-TSR-50CM-ENGLAND-EA-WMS',
        tiled: true,
        opacity: 0.75,
        attribution: "Environment Agency",
        name: '50cm DTM LIDAR',
        group: 'LIDAR'
      },
      {
        url: 'https://environment.data.gov.uk/ds/wms?SERVICE=WMS&INTERFACE=ENVIRONMENT--aace5ed3-2580-4c2e-bdd8-69b3d473d99d',
        layers: 'LIDAR-DTM-TSR-1M-ENGLAND-EA-WMS',
        tiled: true,
        opacity: 0.75,
        attribution: "Environment Agency",
        name: '1M DTM LIDAR',
        group: 'LIDAR'
      },
      {
        url: 'https://environment.data.gov.uk/ds/wms?SERVICE=WMS&INTERFACE=ENVIRONMENT--c67f6085-1ef9-46c8-b908-67e9143deedf',
        layers: 'LIDAR-DTM-TSR-2M-ENGLAND-EA-WMS',
        tiled: true,
        opacity: 0.75,
        attribution: "Environment Agency",
        name: '2M DTM LIDAR',
        group: 'LIDAR'
      } ]
  },
  {
    groupName: 'Flooding',
    layers: [
      {
        url: 'https://environment.data.gov.uk/ds/wms?SERVICE=WMS&INTERFACE=ENVIRONMENT--8d57464f-d465-11e4-8790-f0def148f590',
        layers: 'eainspire2011-wms-RoFRS',
        tiled: true,
        attribution: "Environment Agency",
        name: "Risk of flooding from rivers and the sea",
        group: 'Flooding'
      },
      {
        url: 'https://environment.data.gov.uk/ds/wms?SERVICE=WMS&INTERFACE=ENVIRONMENT--8d57464f-d465-11e4-8790-f0def148f590',
        layers: 'eainspire2011-wms-nat_hfm_inspire',
        tiled: true,
        attribution: "Environment Agency",
        name: 'Historic flooding'
      },
      {
        url: 'https://environment.data.gov.uk/ds/wms?SERVICE=WMS&INTERFACE=ENVIRONMENT--b07dc5b5-f382-4dc1-be4b-464f1e64f12b',
        layers: 'eainspire2011-wms-spatial-flood-defences',
        attribution: "Environment Agency",
        tiled: true,
        name: 'Flood Defences'
      }

    ]
  },
  {
    groupName: 'Noise',
    layers: [
      {
        url: 'https://environment.data.gov.uk/ds/wms?SERVICE=WMS&INTERFACE=ENVIRONMENT--2791ebe0-8ebb-4d9f-98d6-bce907becf33',
        layers: 'eainspire2011-wms-rd_noise_eng_lq16',
        attribution: "Department for Environment, Food and Rural Affairs",
        tiled: true,
        name: 'Road noise',
      },
      {
        url: 'https://environment.data.gov.uk/ds/wms?SERVICE=WMS&INTERFACE=ENVIRONMENT--db2d82e4-ba81-4fa6-91b0-cc36b2318c9f',
        layers: 'eainspire2011-wms-rl_noise_eng_lq16',
        attribution: "Department for Environment, Food and Rural Affairs",
        tiled: true,
        name: 'Rail noise'
      },
      {
        url: 'https://environment.data.gov.uk/ds/wms?SERVICE=WMS&INTERFACE=ENVIRONMENT--c4bc5ebd-eab8-4b8a-be54-83d2f7132059',
        layers: 'eainspire2011-wms-env_noise_dir_aggloms',
        attribution: 'Department for Environment, Food and Rural Affairs',
        tiled: true,
        name: 'Noise agglomerations'
      } ]
  },
  {
    groupName: 'Maritime',
    layers: [
      {
        url: 'https://environment.data.gov.uk/ds/wms?SERVICE=WMS&INTERFACE=ENVIRONMENT&LC=80000000000',
        layers: 'eainspire2011-wms-protectedwrecks_inspire',
        attribution: 'Historic England',
        tiled: true,
        name: 'Protected wrecks'
      },
      {
        url: 'https://environment.data.gov.uk/ds/wms?SERVICE=WMS&INTERFACE=ENVIRONMENT--13f606fb-237d-4e60-ac9e-1fde07f094fb',
        layers: 'eainspire2011-wms-nest00000060_inspire',
        attribution: 'Natural England',
        tiled: true,
        name: 'Marine conservation zones (England)'
      },
      {
        url: 'https://environment.data.gov.uk/ds/wms?SERVICE=WMS&INTERFACE=ENVIRONMENT--e42abb1210a2366c105e9441e6a2f8b9',
        layers: 'eainspire2011-wms-eaimmor00170095',
        attribution: 'Marine Management Organisation',
        tiled: true,
        name: 'AIS (Shipping) centre-lines 2014'
      } ]
  },
  {
    groupName: 'National Parks',
    layers: [
      {
        url: 'http://sedsh127.sedsh.gov.uk/arcgis/rest/services/ScotGov/ProtectedSites/MapServer/exts/InspireView/service?Service=WMS',
        layers: 'National_Scenic_Areas__1998_',
        attribution: 'Scottish Government',
        tiled: true,
        name: 'Scottish National Scenic Areas'
      },
      {
        url: 'http://sedsh127.sedsh.gov.uk/arcgis/rest/services/ScotGov/ProtectedSites/MapServer/exts/InspireView/service?Service=WMS',
        layers: 'Environmentally_Sensitive_Areas__1996_',
        attribution: 'Scottish Government',
        tiled: true,
        name: 'Scottish Environmentally sensitiive areas'
      },
      {
        url: 'http://sedsh127.sedsh.gov.uk/arcgis/rest/services/ScotGov/ProtectedSites/MapServer/exts/InspireView/service?Service=WMS',
        layers: 'Cairngorms_National_Park__2010_',
        attribution: 'Scottish Government',
        tiled: true,
        name: 'Cairngorms National Park'
      },
      {
        url: 'http://sedsh127.sedsh.gov.uk/arcgis/rest/services/ScotGov/ProtectedSites/MapServer/exts/InspireView/service?Service=WMS',
        layers: 'Loch_Lomond_and_the_Trossachs_National_Park__2002_',
        attribution: 'Scottish Government',
        tiled: true,
        name: 'Loch Lomond and Trossachs National Park'
      },
      {
        url: 'https://environment.data.gov.uk/ds/wms?SERVICE=WMS&INTERFACE=ENVIRONMENT--f425f1e1-fc18-4b5a-88d8-76934125627c',
        layers: 'eainspire2011-wms-ancient_woodlandv_inspire',
        attribution: 'Natural England',
        tiled: true,
        opacity: 0.5,
        name: 'Ancient woodland'
      },
      {
        url: 'https://environment.data.gov.uk/ds/wms?SERVICE=WMS&INTERFACE=ENVIRONMENT&LC=40000000000000000',
        layers: 'eainspire2011-wms-areas_of_onb_inspire',
        attribution: 'Natural England',
        tiled: true,
        opacity: 0.5,
        name: 'Areas of outstanding natural beauty'
      },
      {
        url: 'https://environment.data.gov.uk/ds/wms?SERVICE=WMS&INTERFACE=ENVIRONMENT--ff213e4c-423a-4d7e-9e6f-b220600a8db3',
        layers: 'eainspire2011-wms-national_nature_reserve_inspire',
        attribution: 'Natural England',
        tiled: true,
        name: 'Nature reserves (England)'
      },
      {
        url: 'https://environment.data.gov.uk/ds/wms?SERVICE=WMS&INTERFACE=ENVIRONMENT--ba8dc201-66ef-4983-9d46-7378af21027e',
        layers: 'eainspire2011-wms-sites_of_ssi_inspire',
        attribution: 'Natural England',
        tiled: true,
        name: 'Sites of special scientific interest'
      },
      {
        url: 'https://environment.data.gov.uk/ds/wms?SERVICE=WMS&INTERFACE=ENVIRONMENT&LC=400000000000',
        layers: 'eainspire2011-wms-worldheritagesite_inspire',
        attribution: 'Historic England',
        tiled: true,
        opacity: 0.5,
        name: 'World Heritage Sites'
      } ]
  },
  {
    groupName: 'Other',
    layers: [
      {
        url: 'https://environment.data.gov.uk/ds/wms?SERVICE=WMS&INTERFACE=ENVIRONMENT&LC=10000000000',
        layers: 'eainspire2011-wms-listedbuildingpoints_inspire',
        attribution: 'Historic England',
        tiled: true,
        opacity: 0.5,
        name: 'Listed buildings'
      },
      {
        url: 'https://environment.data.gov.uk/ds/wms?SERVICE=WMS&INTERFACE=ENVIRONMENT&LC=200000000000',
        layers: 'eainspire2011-wms-battlefield_inspire',
        attribution: 'Historic England',
        tiled: true,
        opacity: 0.5,
        name: 'Registered Battlefields'
      } ]
  }
];
