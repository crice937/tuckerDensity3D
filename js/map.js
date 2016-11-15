
mapboxgl.accessToken = 'pk.eyJ1IjoiY3JpY2U5MzciLCJhIjoiZjhmNmY3NzFiN2ZmODExZmVlMWYyMGZlZWMzNzE1ZDcifQ.3435dWIDUWFnAa6oicXfRQ';

var map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/outdoors-v10',
	center: [-84.2,33.85],
	zoom: 13,
	pitch: 60
});

map.on('load', function () {
	map.addSource('addressDen', {
		type: 'vector',
		url: 'mapbox://crice937.2knjhdpu'
	});

	map.addLayer({
		"id": "crice937.2knjhdpu",
		"type": "vector",
		"source": "addressDen",
		"source-layer": "tuckerDensity-dsjg8d",
		'type': 'fill',
		'paint': {
			'fill-color': {
				'property':'ZONING',
				'type': 'categorical',
				'stops': [
				['C-1', '#FF0000'],
				['C-2', '#A50F15'],
				['HR-2', '#006837'],
				['M', '#828282'],
				['M-2', '#343434'],
				['MR-1', '#78C679'],
				['MR-2', '#31A354'],
				['MZ', '#DF73FF'],
				['NS', '#C88544'],
				['O-D', '#ACB0FF'],
				['O-I', '#657FF1'],
				['RE', '#FFFFCC'],
				['RSM', '#DEF0CC'],
				['R-60', '#FFFF4A'],
				['R-75', '#FEB24C'],
				['R-85', '#FED976'],
				['R-100', '#FFEDA0']
				]
			},
			'fill-extrude-height': {
				'property': 'addressDen',
				'type': 'identity'
			},
			'fill-opacity': .8
		}
	});

	//Legend
	var zoningLegend = document.getElementById('zoning-legend');
	zoningLegend.style.display = 'block';
	
	//Navigation control
	var nav = new mapboxgl.NavigationControl();
	map.addControl(nav, 'top-left');

	//Geolocate control
	map.addControl(new mapboxgl.GeolocateControl());

	//Scalebar control
	map.addControl(new mapboxgl.ScaleControl({
		maxWidth: 80,
		unit: 'imperial'
	}));
});