
mapboxgl.accessToken = 'pk.eyJ1IjoiY3JpY2U5MzciLCJhIjoiZjhmNmY3NzFiN2ZmODExZmVlMWYyMGZlZWMzNzE1ZDcifQ.3435dWIDUWFnAa6oicXfRQ';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/outdoors-v10',
    center: [-84.2,33.85],
    zoom: 12
});

map.on('load', function () {
    map.addSource('parcel_dwellingUnit-3mizhu', {
        type: 'vector',
        url: 'mapbox://crice937.5sm2dk25'
    });
    map.addLayer({
        "id": "terrain-data",
        "type": "line",
        "source": "terrain-data",
        "source-layer": "contour",
        "layout": {
            "line-join": "round",
            "line-cap": "round"
        },
        "paint": {
            "line-color": "#ff69b4",
            "line-width": 1
        }
    });
});