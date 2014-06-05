var map;

var addr = "http://mapserver.esipe.geonef.fr/gotham-city/map?"

			function init() {

				map = new OpenLayers.Map('map');

				var nature = new OpenLayers.Layer.WMS(

					"Nature",

					addr,
	
					//{layers: 'gothammap,nature2,nature1,nature3,zonesDetails,batiments,personnages,personnagesImage,zones,zonesLabel,zonesNature,transports1,transports2,transports3',format: 'image/png' },
					
					{layers: 'nature2,nature1,nature3',transparent:true,format: 'image/png' }
				
					
				);

				var terrain = new OpenLayers.Layer.WMS(

					"Terrain",

					addr,					
					
					{layers: 'gothammap,gothammapzoom',format: 'image/png' }				
					
				);
				
				var zones = new OpenLayers.Layer.WMS(

					"Zones",

					addr,					
					
					{layers: 'zonesDetails,zones,zonesLabel,zonesNature',transparent:true,format: 'image/png' },
					{singleTile: true, ratio: 1}			
					
				);
				
				var poi = new OpenLayers.Layer.WMS(

					"POI",

					addr,					
					
					{layers: 'trophes,batiments',transparent:true,format: 'image/png' },
					{singleTile: true, ratio: 1}			
					
				);

				var personnages = new OpenLayers.Layer.WMS(

					"Personnages",

					addr,					
					
					{layers: 'personnages,personnages2,personnagesImage',transparent:true,format: 'image/png' },
					{singleTile: true, ratio: 1}			
					
				);

				var transport = new OpenLayers.Layer.WMS(

					"Transports",

					addr,					
					
					{layers: 'transports1,transports2,transports3',transparent:true,format: 'image/png' }			
					
				);


				map.addLayers([terrain,nature,zones,personnages,poi,transport]);
				map.addControl(new OpenLayers.Control.LayerSwitcher({'div':OpenLayers.Util.getElement('layerStack')}));
				map.addControl(new OpenLayers.Control.ScaleLine());
				
				var bounds = new OpenLayers.Bounds(-74.4895592927001013, 39.4732721981750174, -74.3250454782537247, 39.5639846679358200);
				map.zoomToExtent(bounds, false);
				//map.moveTo(new OpenLayers.LonLat(-8283819, 4794222), 9);
				

			}