// Grabbing the button
var btn = $('#btn')
hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']



btn.on('click',changeBackground)

function changeBackground(){
  color='#' // Re-initializes the color on every click
  for(var i=0; i<6;i++){
    colorIndex = parseInt(Math.random()*hex.length)
    color += hex[colorIndex]
  }
  $('body').css('background-color',color)
  $('#hex').text(color)
}
