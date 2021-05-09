(function(){

  var count = 0
  var buttons = $('.counterBtn')

  buttons.each(function(button){
    $(this).on('click', function(){
      if($(this).hasClass('lowerBtn')){
        count--
      } else if($(this).hasClass('upperBtn')) {
        count++
      }

      var counter = $('#counter')
      counter.text(count)

      if(count < 0){
        counter.css('color','red')
      }else if (count > 0) {
        counter.css('color','green')
      }else {
        counter.css('color','black')
      }

    })
  })

})()
