

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

      $("ul").empty();
      $("ul").show();

      console.log(response);

      for (var i = 0; i < 20; i++) {
        $(".collapsible").append(listRow);
        var listRow = $("<li>").attr("class", "row");
        var ListTitle = $("<div>").text(response.restaurants[i].restaurant.name).attr("class", "collapsible-header");
        listRow.append(ListTitle);
        var listBody = $("<div>").attr("class", "collapsible-body");
        listRow.append(listBody);
        var listImg = $("<img>").attr("src", response.restaurants[i].restaurant.featured_image);
        listImg.attr("class", "responsive-img materialboxed col s2");
        listBody.append(listImg);
        var listAddress = $("<p>").text(response.restaurants[i].restaurant.location.address);
        listBody.append(listAddress);
        var listPhone = $("<p>").text(response.restaurants[i].restaurant.phone_numbers);
        listBody.append(listPhone);
        var listPrice = $("<p>").text("Price: " + response.restaurants[i].restaurant.currency);
        listBody.append(listPrice);
        console.log(ListTitle);

      }





      
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
