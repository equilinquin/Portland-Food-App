

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
        "user-key": "3247f4fa7ee79cabb69997b6827c2e80"
      }
    }).then(function (response) {

      $("ul").show();

      $("ul").empty();

      console.log(response);

      for (var i = 0; i < 12; i++) {
        $(".collapsible").append(listLi);
        var listLi = $("<li>").attr("class", "responsive");
        var listHeader = $("<div>").text(response.restaurants[i].restaurant.name + " -- Rating: " + response.restaurants[i].restaurant.user_rating.aggregate_rating + " -- Price range: " + response.restaurants[i].restaurant.price_range + "/5").attr("class", "collapsible-header");
        listLi.append(listHeader);
        var listBody = $("<div>").attr("class", "collapsible-body row");
        listLi.append(listBody);
        var firstR = $("<section>").attr("class", "col s5 m3 l3");
        listBody.append(firstR);
        var listImg = $("<img>").attr("src", response.restaurants[i].restaurant.featured_image);
        listImg.attr("class", "materialboxed responsive-img");
        listImg.css("width", "200px");
        firstR.append(listImg);
        var listTime = $("<p>").html("<h6> Hours of Operation: ");
        firstR.append(listTime);
        var TimeData = $("<p>").text(response.restaurants[i].restaurant.timings).attr("class", "left-align");
        firstR.append(TimeData);
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
        var listImg2 = $("<img>").attr("src", "pmap.gif");
        listImg2.attr("class", "responsive-img");
        listImg2.css("width", "400px");
        mapColumn.append(listImg2);

      };


      $('.materialboxed').materialbox();


      

    })

  }

};



});
