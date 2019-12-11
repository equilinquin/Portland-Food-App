$(document).ready(function () {
  var favs = ["Marukin", "Fire%20on%20the%20Mountain%20Buffalo%20Wings", "Sizzle%20Pie", "Russell%20Street%20Bar.B.Que", "Screen%20Door", "Han%20Oak", "Portland%20City%20Grill", "Pambiche", "Grassa", "Nicholas", "King%20Burrito", "Pip", "Sivalai%20Thai", "808%20Grindz"];
  var href = ["#one!", "#two!", "#three!", "#four!", "#five!", "#six!", "#seven!", "#eight!", "#nine!", "#ten!", "#eleven!", "#twelve!", "#thirteen!", "#fourteen!"];
  

  $.each(href, function (i, val) {;
    var divSlide = $("<div>").attr("class", "carousel-item  black-text");
      divSlide.attr("href", val)
      $(".carousel").append(divSlide);
    })
  
    $.each(favs, function(i, fav) {
    var url = "https://developers.zomato.com/api/v2.1/search?entity_id=286&entity_type=city&q=" + fav;
  
  $.ajax({
    method: "GET",
    crossDomain: true,
    url: url,
    dataType: "json",
    async: true,
    headers: {
      "user-key": "3247f4fa7ee79cabb69997b6827c2e80"
    }
  
  }).then(function (data) {
    
    var getInfo = data.restaurants[0].restaurant;
    var getname = getInfo.name;
    var location = getInfo.location.address;
    var rating = getInfo.user_rating.aggregate_rating;
    var img = getInfo.featured_image;
    console.log(img)


  });
})




  $('.carousel').carousel();
  $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
  });
  // setInterval(function() {
  //     $('.carousel').carousel("next");

  // }, 5000);
})