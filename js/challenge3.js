$('form').submit(function(onsubmit){
  var fruit = $('input[name="fruit"]');
  var standing = $('input[name="standing"]');
  if ((fruit.is(":checked")) && (standing.is(":checked"))) {
    return true;
  }
  $("form").submit(function(e){
    console.log("check")
    e.preventDefault();
    alert("You must pick a fruit and a year!");
  });
});
