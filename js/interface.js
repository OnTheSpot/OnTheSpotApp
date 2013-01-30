// custom javascript functions

// this object to be called whatever the project name is
Project = {
	init : function()
	{
		this.createMap();
	},
	createMap : function() {

		if ($("#map").length > 0) {

			$("#map").mapMe({
				mapCanvas : 'map',
				pinCenter : true, 
                trackLocation : false,
                trackingPeriod : false, 
                trackingCircle : false,
				markerCluster : true,
				markers : [							  				
					{
						title: 'The Forbes Club', 
						lat: -33.8745313807035, 
						lng: 151.219060499969, 
						pin: "demoPin", 
						infoWindow: "<h1><a href='content/forbesclub.html'>The Forbes Club</a></h1>"
					},
					{
						title: 'First TV Broadcast', 
						lat: -33.874798, 
						lng: 151.222892, 
						pin: "demoPin", 
						infoWindow: "<h1><a href='content/firsttvbroadcast.html'>First TV Broadcast</a></h1>"
					},
					{
						title: 'Bea Miles', 
						lat: -33.8747286865796, 
						lng: 151.220262129608, 
						pin: "demoPin", 
						infoWindow: "<h1><a href='content/beamiles.html'>The Dirty Half Mile</a></h1>"
					},
					{
						title: 'The Dirty Half Mile', 
						lat: -33.8740245296579, 
						lng: 151.223105271164, 
						pin: "demoPin", 
						infoWindow: "<h1><a href='content/dirtyhalfmile.html'>The Dirty Half Mile</a></h1>"
					},
					{
						title: 'The Juanita Nielsen Mystery', 
						lat: -33.8736325865397, 
						lng: 151.222568829361, 
						pin: "demoPin", 
						infoWindow: "<h1><a href='content/juanitenielsen.html'>The Juanita Nielsen Mystery</a></h1>"
					},
					{
						title: 'Kings Cross Train Station', 
						lat: -33.8745679023673, 
						lng: 151.222440083328, 
						pin: "demoPin", 
						infoWindow: "<h1><a href='content/kctrainstation.html'>Kings Cross Train Station</a></h1>"
					},
					{
						title: 'The Sebel Townhouse', 
						lat: -33.8725810120763, 
						lng: 151.227235873047, 
						pin: "demoPin", 
						infoWindow: "<h1><a href='content/sebeltownhouse.html'>The Sebel Townhouse</a></h1>"
					},
					{
						title: 'Mick Fowler - 115 Victoria St', 
						lat: -33.8712532750295, 
						lng: 151.222794134918, 
						pin: "demoPin", 
						infoWindow: "<h1><a href='content/mickfowler.html'>Mick Fowler - 115 Victoria St</a></h1>"
					},
					{
						title: 'The Kid Stakes', 
						lat: -33.8688949500999, 
						lng: 151.222839725987, 
						pin: "demoPin", 
						infoWindow: "<h1><a href='content/kidstakes.html'>The Kid Stakes</a></h1>"
					},
					{
						title: 'The Sydney Stadium', 
						lat: -33.8760, 
						lng: 151.2258, 
						pin: "demoPin", 
						infoWindow: "<h1><a href='content/sydneystadium.html'>The Sydney Stadium</a></h1>"
					},
					{
						title: 'Victoria Heights', 
						lat: -33.8699, 
						lng: 151.2230, 
						pin: "demoPin", 
						infoWindow: "<h1><a href='content/victoriaheights.html'>Victoria Heights</a></h1>"
					},
					{
						title: "Fishing in the 'Loo", 
						lat: -33.8695185297341, 
						lng: 151.220747602956, 
						pin: "demoPin", 
						infoWindow: "<h1><a href='content/fishingintheloo.html'>Fishing in the 'Loo</a></h1>"
					},
					{
						title: "Saving Woolloomooloo", 
						lat: -33.8727, 
						lng: 151.2191, 
						pin: "demoPin", 
						infoWindow: "<h1><a href='content/savingloo.html'>Saving Woolloomooloo</a></h1>"
					},
					{
						title: "The Yellow House", 
						lat: -33.8688410547891, 
						lng: 151.225468290822, 
						pin: "demoPin", 
						infoWindow: "<h1><a href='content/yellowhouse.html'>The Yellow House</a></h1>"
					}
				],
				customPins :	{							  					
					"demoPin" : {
						pinImg : "img/pin.png",
						pinImgSize : [36, 55],
						pinOrigin : [0,0],
						pinAnchor : [18, 55],
						pinShape : 	{coord: [1, 1, 1, 36, 55, 36, 55, 1], type: 'poly'},
						pinShadow : "img/pin-shadow.png",
						pinShadowSize : [77, 58],
						pinShadowOrigin : [0,0],
						pinShadowAnchor : [22,55]
					}
				},
				polygons : [
					// add polygons to the map
					{
						title : "King's Cross",
						lat : -33.87116383262648,
						lng : 151.22358798980713,
						options : {
							paths : [
								new google.maps.LatLng(-33.87460896158698, 151.21810421347618),
								new google.maps.LatLng(-33.87437290676817, 151.21812835335732),
								new google.maps.LatLng(-33.87431834683508, 151.21811628341675),
								new google.maps.LatLng(-33.86884102014114, 151.21934473514557),
								new google.maps.LatLng(-33.869150583653024, 151.21982216835022),
								new google.maps.LatLng(-33.86915392426034, 151.2199079990387),
								new google.maps.LatLng(-33.86919401153792, 151.22000187635422),
								new google.maps.LatLng(-33.8692853213777, 151.22044175863266),
								new google.maps.LatLng(-33.86935324692687, 151.22139930725098),
								new google.maps.LatLng(-33.86928420784366, 151.22170507907867),
								new google.maps.LatLng(-33.86919512507315, 151.22199475765228),
								new google.maps.LatLng(-33.868883334644245, 151.22247219085693),
								new google.maps.LatLng(-33.867431267074046, 151.22324466705322),
								new google.maps.LatLng(-33.86536447799911, 151.22443556785583),
								new google.maps.LatLng(-33.865373386680076, 151.22503638267517),
								new google.maps.LatLng(-33.86551147111619, 151.22519195079803),
								new google.maps.LatLng(-33.865680735604165, 151.22519195079803),
								new google.maps.LatLng(-33.86566069114285, 151.22519999742508),
								new google.maps.LatLng(-33.8659435403284, 151.22491836547852),
								new google.maps.LatLng(-33.86669186121351, 151.22479498386383),
								new google.maps.LatLng(-33.86781433024252, 151.2258356809616),
								new google.maps.LatLng(-33.86802813219378, 151.22674226760864),
								new google.maps.LatLng(-33.868348834116695, 151.22680127620697),
								new google.maps.LatLng(-33.86837110503884, 151.22676372528076),
								new google.maps.LatLng(-33.868486913740256, 151.22677981853485),
								new google.maps.LatLng(-33.869244120608435, 151.22663497924805),
								new google.maps.LatLng(-33.86943119421178, 151.2266457080841),
								new google.maps.LatLng(-33.8694668272326, 151.2265545129776),
								new google.maps.LatLng(-33.869742982639636, 151.2264847755432),
								new google.maps.LatLng(-33.87010376497056, 151.22669398784637),
								new google.maps.LatLng(-33.8705001783661, 151.22673153877258),
								new google.maps.LatLng(-33.87147561472574, 151.2273108959198),
								new google.maps.LatLng(-33.871604781261794, 151.22770249843597),
								new google.maps.LatLng(-33.87174285561868, 151.22771859169006),
								new google.maps.LatLng(-33.871858659745776, 151.2276327610016),
								new google.maps.LatLng(-33.87217934727778, 151.22863054275513),
								new google.maps.LatLng(-33.8724020462439, 151.22828722000122),
								new google.maps.LatLng(-33.87340418440095, 151.22756838798523),
								new google.maps.LatLng(-33.874072269968785, 151.22844815254211),
								new google.maps.LatLng(-33.874455303335694, 151.22863590717316),
								new google.maps.LatLng(-33.874914050338404, 151.22867345809937),
								new google.maps.LatLng(-33.87520354960505, 151.2285715341568),
								new google.maps.LatLng(-33.876219016192096, 151.22782588005066),
								new google.maps.LatLng(-33.87625464637925, 151.2271499633789),
								new google.maps.LatLng(-33.876236831287535, 151.22630774974823),
								new google.maps.LatLng(-33.87599632718539, 151.22445166110992),
								new google.maps.LatLng(-33.87579145278601, 151.22286915779114),
								new google.maps.LatLng(-33.87541287923225, 151.22202157974243),
								new google.maps.LatLng(-33.87511892684406, 151.22138857841492),
								new google.maps.LatLng(-33.87490959649586, 151.22040152549744),
								new google.maps.LatLng(-33.87492741186464, 151.22024595737457),
								new google.maps.LatLng(-33.87485169652168, 151.2198168039322),
								new google.maps.LatLng(-33.87486951190253, 151.21967196464539)
							],
							strokeColor : "#0000bf", 
							strokeWidth : 5,
							strokeOpacity : 0.3,
							fillColor : "#b5b5ff",
							fillOpacity : 0.3
							//editable: true
						},
						events : true,
						callback : false
					}
				],
				mapOptions : 	{
					center : [-33.87116383262648, 151.22358798980713],
					zoom: 15
				}					   
			});
		}  // end of if statement

	} // end of createMap function
};


$(document).ready(function()
{
	// initialise the Project object
	Project.init();
	// call plugins from here
});























