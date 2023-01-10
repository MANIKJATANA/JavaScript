const endDate="26 January 2023 10:00 PM";

$(document).ready(function(){
  $("#end-date").text(endDate);
});


const inputs=$("input");

function clock(){
  const end=new Date(endDate);
  const now=new Date();

  const diff=(end-now)/1000;
  inputs[0].value= Math.floor(diff / 3600 / 24);
  inputs[1].value= Math.floor(diff / 3600 )%24;
  inputs[2].value= Math.floor(diff / 60)%(60);
  inputs[3].value= Math.floor(diff )%(60);

}
setInterval(clock, 1000);

clock()
