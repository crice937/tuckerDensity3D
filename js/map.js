
mapboxgl.accessToken = 'pk.eyJ1IjoiY3JpY2U5MzciLCJhIjoiZjhmNmY3NzFiN2ZmODExZmVlMWYyMGZlZWMzNzE1ZDcifQ.3435dWIDUWFnAa6oicXfRQ';

var map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/outdoors-v10',
	center: [-84.2,33.85],
	zoom: 12
});

map.on('load', function () {
	map.addSource('addressDen', {
		type: 'vector',
		url: 'mapbox://crice937.5sm2dk25'
	});
	map.addLayer({
		"id": "crice937.5sm2dk25",
		"type": "vector",
		"source": "addressDen",
		"source-layer": "parcel_dwellingUnit-3mizhu",
		'type': 'fill',
		'paint': {
			'fill-color': '#aaa',
			'fill-extrude-height': {
				'property': 'addressDen',
				'type': 'identity'
			},
			'fill-opacity': .6
		}
	});
});