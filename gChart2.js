
function init(){
  cont =0;
  //Carga la visualización de la API
  google.charts.load('current', {'packages':['corechart']});

  //Configura el callback para correr cuando la API esté cargada
  google.charts.setOnLoadCallback(draw);

}

function draw(x,y){
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
    'width':400,
    'height':300,
    'colors':["#1D84CE","#EF1C27","#7B4977","#eb6109","#D42B16","#2AAB8C",
    "#FFDF5E","#00447B","#0036FF","#008000","#B5CF18","#FFD700"],
  };
  var chart = new google.visualization.PieChart(document.getElementById('chart'));
  chart.draw(table, options);
  window.setTimeout(modifyChart, 10000, chart, table, options);
}
function modifyChart(table, data, options){
  for(let i=11; i<12;i++){
    let change = data.getValue(i,1) + Math.floor((Math.random() * 80) + 1);
    data.setValue(i, 1, change);
  }
  table.draw(data, options)
}


window.onload=function(){
  init();
};