$(document).ready(function(){
  $("#formid").submit(function(event){
    event.preventDefault();
    var name = $("input#name").val();
    var food = $("input:radio[name=food]:checked").val();
    var color = $("input:radio[name=color]:checked").val();
    var value = $("input:radio[name=value]:checked").val();

    $(".joey").hide();
    $(".chandler").hide();
    $(".ross").hide();
    $(".phoebe").hide();
    $(".rachel").hide();
    $(".monica").hide();

    if (food === "pizza"){
      $(".joey").show();
    } else if (color === "pink") {
      $(".rachel").show();
    } else if (value === "funny") {
      $(".chandler").show();
    } else {
      $(".phoebe").show();
    }

  });
});
