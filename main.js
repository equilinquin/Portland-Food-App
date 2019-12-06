

    $(document).ready(function(){
      $('select').formSelect();


  $.ajax({
      method: "GET",
      crossDomain: true,
      url: "https://developers.zomato.com/api/v2.1/search?entity_id=286&entity_type=city&establishment_type=81",
      dataType: "json",
      async: true,
      headers: {
        "user-key": "3247f4fa7ee79cabb69997b6827c2e80"
      }
  }).then(function (response){
      console.log(response);
      
  })
});
