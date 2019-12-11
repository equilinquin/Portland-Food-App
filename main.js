

$(document).ready(function () {
  $('select').formSelect();
  var establishmentType;
  var sortingType;
  


  // $(".cuisine-type").on("change", function () {
  //   establishmentType = $(".cuisine-type").find(":selected").val();
  //   getZomatoData(establishmentType)
  //   console.log("change event fired for cuisine type");
  // })



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
        "user-key": "3247f4fa7ee79cabb69997b6827c2e80"
      }
    }).then(function (response) {
      $("h5").show();
      
      $("ul").show();

      $("ul").empty();

      console.log(response);

      for (var i = 0; i < 10; i++) {
        $(".collapsible").append(listLi);
        var listLi = $("<li>")
        var listHeader = $("<div>").text(response.restaurants[i].restaurant.name + " -- Rating: " + response.restaurants[i].restaurant.user_rating.aggregate_rating + " -- Price range: " + response.restaurants[i].restaurant.price_range + "/5").attr("class", "collapsible-header");
        listLi.append(listHeader);
        var listBody = $("<div>").attr("class", "collapsible-body");
        listLi.append(listBody);
        var listImg = $("<img>").attr("src", response.restaurants[i].restaurant.featured_image);
        listImg.attr("class", "responsive-img materialboxed col s2");
        listImg.css("width", "90px");
        listBody.append(listImg);
        var listAddress = $("<span>").text(response.restaurants[i].restaurant.location.address).attr("class", "low-text");
        listBody.append(listAddress);
        listAddress.after("<br/>")
        var listPhone = $("<span>").text(response.restaurants[i].restaurant.phone_numbers).attr("class", "low-text");
        listBody.append(listPhone);

        var lat = response.restaurants[i].restaurant.location.latitude;
        var lng = response.restaurants[i].restaurant.location.longitude;
        var mapURL = "https://maps.googleapis.com/maps/api/staticmap?center="+lat+","+lng+"&zoom=16&size=600x300&maptype=roadmap&markers=color:red%7Clabel:%7C"+lat+","+lng+"&key=AIzaSyCMk_G_rQBW5_9MHyIw_n7NUq5CT1RP3Nw"
        var googleMap = $("<br><img>").attr("src", mapURL)
        listBody.append(googleMap)
      };


      var elem = document.querySelector('.collapsible.expandable');
      var instance = M.Collapsible.init(elem, {
        accordion: false
      });
      $('.materialboxed').materialbox();
    

      


      


      // console.log(response);
      // $(".results").html("");
      // for (var i = 0; i < 20; i++) {
      //   var list = $("<p>").text(response.restaurants[i].restaurant.name + "<br>" + response.restaurants[i].restaurant.location.address);
      //   $(".results").append(list);
      //   console.log(response);
      // }



    })

  }

};



});
