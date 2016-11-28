
function init(){
  //Carga la visualización de la API
  google.charts.load('current', {'packages':['corechart']});
  google.charts.load('upcoming', {'packages':['geochart']});

  //Configura el callback para correr cuando la API esté cargada
  google.charts.setOnLoadCallback(draw);
  google.charts.setOnLoadCallback(drawRegionsMap);
}

function draw(){
  var table= new google.visualization.arrayToDataTable([]);
  table.addColumn("string", "Topping");
  table.addColumn('number', 'Slices');
  table.addRows([
    ["PP", 137],
    ["PSOE",85],
    ["Podemos",45],
    ["C's",32],
    ["ECP",12],
    ["EUPV",9],
    ["ERC-CATSÍ",9],
    ["CDC",8],
    ["EU",5],
    ["PNV",5],
    ["Bildu",2],
    ["PNC",1]
    ]);
  var options = {
    'title':'Congreso de los diputados: 2016',
    'width':300,
    'height':200,
    'colors':["#1D84CE","#EF1C27","#7B4977","#eb6109","#D42B16","#2AAB8C",
    "#FFDF5E","#00447B","#0036FF","#008000","#B5CF18","#FFD700"]
  };

  var chart = new google.visualization.PieChart(document.getElementById('chart'));
  chart.draw(table, options);
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
    "width": 300,
    "height": 200
  };

  var chart = new google.visualization.GeoChart(document.getElementById('turisChart'));

  chart.draw(data, options);
}

window.onload=function(){
  init();
};