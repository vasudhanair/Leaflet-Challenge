// Define streetmap and darkmap layers
var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 10,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
});

// Create our map, giving it the streetmap to display on load
var myMap = L.map("map", {
    center: [
      37.09, -95.71
    ],
    zoom: 5,
  
  });
  
  streetmap.addTo(myMap);

// Store our API endpoint inside queryUrl
var summaryqueryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";
d3.json(summaryqueryUrl, function(data) {

  /// Three functions created 
  // Function one for style, function two for color and function three for radius

  function mapStyle(feature) {
    return {
      opacity: 1,
      fillOpacity: 1,
      fillColor: mapColor(feature.properties.mag),
      color: "#000000",
      radius: mapRadius(feature.properties.mag),
      stroke: true,
      weight: 0.5
    };
  }
  function mapColor(mag) {
    switch (true) {
      case mag > 5:
        return "#ea2c2c";
      case mag > 4:
        return "#eaa92c";
      case mag > 3:
        return "#d5ea2c";
      case mag > 2:
        return "#92ea2c";
      case mag > 1:
        return "#2ceabf";
      default:
        return "#2c99ea";
    }
  }

  function mapRadius(mag) {
    if (mag === 0) {
      return 1;
    }

    return mag * 4;
  }

  