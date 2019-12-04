// document.addEventListener('DOMContentLoaded', function() {
//   var elems = document.querySelectorAll('select');
//   var instances = M.FormSelect.init(elems, options);
// });

// Or with jQuery


$(document).ready(function(){
  var elems = $('select').formSelect();
  var instances = M.FormSelect.init(elems, options);

  
});

