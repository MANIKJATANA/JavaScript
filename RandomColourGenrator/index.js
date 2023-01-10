const getColor=() => {
  const randomNumber=Math.floor(Math.random()*16777215);
  const randomCode="#"+randomNumber.toString(16);
  $("#color-code").html(randomCode);
  $("body").css("background-color", randomCode);
}

$("#btn").click(getColor)

getColor();
