$(document).ready(function () {
  
  var favs = ["Marukin", "Fire%20on%20the%20Mountain%20Buffalo%20Wings", "Sizzle%20Pie", "Russell%20Street%20Bar.B.Que", "Screen%20Door",  "Portland%20City%20Grill", "Pambiche", "Grassa", "Nicholas", "King%20Burrito", "Pip", "Sivalai%20Thai", "808%20Grindz"];
  var href = ["#one!", "#two!", "#three!", "#four!", "#five!", "#six!", "#seven!", "#eight!", "#nine!", "#ten!", "#eleven!", "#twelve!", "#thirteen!", "#fourteen!"];

//     //  for (var i = 0; i < href.length; i++) {

//     // //var img = $("<img>").attr("src", getImg)
//     // divSlide.attr("href", val);
 
//     //   //$(".carousel").append(divSlide);
//     // };

  
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
    var getImg = getInfo.featured_image;
    var img = $("<img>").attr("src", getImg)
    var divSlide = $("<div>").attr("class", "carousel-item");
    divSlide.attr("href", href[i])
    var h2 = $("<h2>");
    var p = $("<p>");
    var a = $("<a>").attr("class", "carousel-item")
    a.attr("href", href[i]);
    a.append(img)
    h2.text(getname);
    p.html(location + "<br>" + rating);
    divSlide.append(h2, p, a)
    $(".carousel").append(divSlide, a)

    

  });
});







$('.carousel.carousel-item').carousel({
    fullWidth: true,
    indicators: true
});





//}));
//});



  // setInterval(function() {
  //     $('.carousel').carousel("next");

  // }, 5000);
});  
