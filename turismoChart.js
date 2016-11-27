function init(){
  google.charts.load('upcoming', {'packages':['geochart']});
  google.charts.setOnLoadCallback(drawRegionsMap);
}


function drawRegionsMap() {

  var data = google.visualization.arrayToDataTable([
    ['Country', 'Popularity'],
    ['Alemania', 33],
    ['Francia', 83.7],
    ['Estados Unidos', 74.8],
    ['España', 65],
    ['China', 55.6],
    ['Italia', 48.6],
    ['Turquía', 39.8],
    ['Reino Unido', 32.6],
    ['Rusia', 29.8],
    ['México', 29.1]
  ]);

  var options = { 
    "width": 900,
    "height": 500
  };

  var chart = new google.visualization.GeoChart(document.getElementById('chart'));

  chart.draw(data, options);
}
window.onload=function(){
  init();
};
