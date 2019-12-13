

$(document).ready(function recomendedData() {

  $("ul").empty();




  var favs = ["Marukin", "Fire%20on%20the%20Mountain%20Buffalo%20Wings", "Sizzle%20Pie", "Russell%20Street%20Bar.B.Que", "Screen%20Door", "Portland%20City%20Grill", "Pambiche", "Grassa", "Nicholas", "King%20Burrito", "Pip", "Sivalai%20Thai", "808%20Grindz"];
  var row = $("<div>").attr("class", "row")
  $(".card-container").append(row)

  $.each(favs, function (i, fav) {
    var url = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=" + fav + "&location=portland";

    $.ajax({
      url: url,
      headers: {
        'Authorization': 'Bearer 8_4jqn4cEYADeOIS6LuGUDMAM5hKeV0ZiT6H_Uue8jkGw9OXDnXV_lRrI6U31H0VXF4pASKBgWWDBfQeBdD59xGzKfOiEB9p65JnULOSyWyZ-yRYU72DGQfTkuLmXXYx',
      },
      method: 'GET',
      dataType: 'json',

      success: function (data) {
        console.log(data);


        var getname = data.businesses[0].name;
        var location = data.businesses[0].location.address1;
        var rating = data.businesses[0].rating;
        var getImg = data.businesses[0].image_url;

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

      }

      });
  });

  $(".recomend").on("click", function () {
    row.empty();
    $("ul").empty();
    $("h5").empty();
    $(".card-container").empty();
    var h4 = $("<h4>").text("Developer's Recommendations");
    $(".card-container").append(h4);
    recomendedData();
  })

});
