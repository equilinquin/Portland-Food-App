

$(document).ready(function () {
  $('select').formSelect();
  $('.collapsible').collapsible();

  var establishmentType;
  var sortingType;
  



  $(".cuisine-type, .sort-type, .ordering-type").on("change", function () {
    sortingType = $(".sort-type").find(":selected").val();
    establishmentType = $(".cuisine-type").find(":selected").val();
    orderingType = $(".ordering-type").find(":selected").val();
    getZomatoData(establishmentType, sortingType, orderingType);
    console.log("change event fired for sort type");
  })

  var getZomatoData = function (cuisineType, sortType, orderType) {

    getLocation();
    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else { 
       alert("Geolocation is not supported by this browser.");
      }
    }
    
    function showPosition(position) {
      var lat = position.coords.latitude;
      var lon = position.coords.longitude;
      var url = "https://developers.zomato.com/api/v2.1/search?entity_id=286&entity_type=city&start=0&count=20&lat=" + lat + "&lon=" + lon + "&establishment_type=" + cuisineType + "&sort=" + sortType + "&order=" + orderType;

    console.log(url);

    $.ajax({
      method: "GET",
      crossDomain: true,
      url: url,
      dataType: "json",
      async: true,
      headers: {
        "user-key": "3247f4fa7ee79cabb69997b6827c2e80"   // backup key: 9751e1b18a485696e9aa871649477ecd //
      }
    }).then(function (response) {
      $(".small").css("display", "none")

      $("h5").show();

      $("ul").show();

      $("ul").empty();

      console.log(response);

      for (var i = 0; i < 20; i++) {
        $(".collapsible").append(listLi);
        var listLi = $("<li>").attr("class", "responsive");
        var listHeader = $("<div>").attr("class", "collapsible-header");
        listLi.append(listHeader);
        var placeName = $("<h7>").text(response.restaurants[i].restaurant.name).attr("class", "blue-text text-darken-2");
        listHeader.append(placeName);
        var listBody = $("<div>").attr("class", "collapsible-body row");
        listLi.append(listBody);
        var firstRow = $("<section>").attr("class", "col s5 m3 l3");
        listBody.append(firstRow);
        var listImg = $("<img>").attr("src", response.restaurants[i].restaurant.featured_image);
        listImg.attr("class", "materialboxed responsive-img");
        listImg.css("width", "200px");
        firstRow.append(listImg);
        var listMenu = $("<a>").html("Menu").attr({"href": response.restaurants[i].restaurant.menu_url, "target": "_blank"});
        firstRow.append(listMenu);
        var listTime = $("<p>").html("<h6> Hours of Operation: ");
        firstRow.append(listTime);
        var TimeData = $("<p>").text(response.restaurants[i].restaurant.timings).attr("class", "left-align");
        firstRow.append(TimeData);
        var ratingBorder = $("<div>");
        firstRow.append(ratingBorder);
        var ratingText = $("<p>").text("Rating").attr("class", "col 2").css("border-left", "3px solid turquoise");
        ratingBorder.append(ratingText);
        var ratingIcon = $("<div>").html("<p>" + response.restaurants[i].restaurant.user_rating.rating_obj.title.text).css({"background": response.restaurants[i].restaurant.user_rating.rating_obj.bg_color.type,}).attr("class", "col 1");
        ratingBorder.append(ratingIcon); 
        var listText = $("<section>").attr("class", "container col s7 m3 l3");
        listBody.append(listText);  
        var listAddress = $("<p>").html("<h6> Address: ");
        listText.append(listAddress);
        var addressData = $("<p>").text(response.restaurants[i].restaurant.location.address).attr("class", "left-align");
        listText.append(addressData);
        var listPhone = $("<p>").html("<h6> Phone: ");
        listText.append(listPhone);
        var phoneData = $("<p>").text(response.restaurants[i].restaurant.phone_numbers).attr("class", "left-align");
        listText.append(phoneData);
        var listHL = $("<p>").html("<h6> Highlights: ");
        listText.append(listHL);
        var hlData = $("<p>").text(response.restaurants[i].restaurant.highlights).attr("class", "left-align");
        listText.append(hlData);
        var mapColumn = $("<section>").attr("Class", "col s12 m6 l6");
        listBody.append(mapColumn);
        var lat = response.restaurants[i].restaurant.location.latitude;
        var lng = response.restaurants[i].restaurant.location.longitude;
        var mapURL = "https://maps.googleapis.com/maps/api/staticmap?center="+lat+","+lng+"&zoom=16&size=600x300&maptype=roadmap&markers=color:red%7Clabel:%7C"+lat+","+lng+"&key=AIzaSyCMk_G_rQBW5_9MHyIw_n7NUq5CT1RP3Nw"
        var googleMap = $("<img>").attr("src", mapURL).attr("class", "responsive-img");
        mapColumn.append(googleMap);
<<<<<<< HEAD
=======

>>>>>>> 1cf0ce94bde6a6d223d797e8d3e5e09728730693

      };

<<<<<<< HEAD
      };

=======
>>>>>>> 1cf0ce94bde6a6d223d797e8d3e5e09728730693
      $('.materialboxed').materialbox();
    

      

    })

  }

};



});
