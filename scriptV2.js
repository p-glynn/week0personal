$(document).ready(function(){
  $.ajax('http://ron-swanson-quotes.herokuapp.com/v2/quotes/1', {
    success: function(result){
      var quote = '"' + result + '"';
      var imgID = Math.floor(Math.random() * 34);
      var img = images[imgID];
      var image = $('<img>').attr('src', img.link);
      $("#images").append(image);
      $("#quotes").append(quote);
    }
  }
)
})
