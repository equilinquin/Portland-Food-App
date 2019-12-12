

$(document).ready(function () {

    var favs = ["Marukin", "Fire%20on%20the%20Mountain%20Buffalo%20Wings", "Sizzle%20Pie", "Russell%20Street%20Bar.B.Que", "Screen%20Door", "Portland%20City%20Grill", "Pambiche", "Grassa", "Nicholas", "King%20Burrito", "Pip", "Sivalai%20Thai", "808%20Grindz"];
    var row = $("<div>").attr("class", "row")
    $(".card-container").append(row)

    $.each(favs, function (i, fav) {
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

        var divCol = $("<div>").attr("class", "col s12 m6 ");
        var divCard = $("<div>").attr("class", "card small");
        divCard.css("width", "400px")
        row.append(divCol);
        divCol.append(divCard);
        var divImg = $("<div>").attr("class", "card-image center-align");
        divCard.append(divImg);
        var img = $("<img>").attr("src", getImg);
        var span = $("<span>").attr("class", "card-title");
        span.css("font-weight", "800")
        span.css("-webkit-text-stroke-width", ".8px")
        span.css("-webkit-text-stroke-color", "black")
        divImg.append(img, span);
        var divP = $("<div>").attr("class", "card-content");
        var p = $("<p>")
        divP.append(p)
        divCard.append(divP)

        span.text(getname);
        p.html(location + "<br>" + "Rating: " + rating)

      });
    });
});
  