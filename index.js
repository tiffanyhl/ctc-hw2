$(document).ready(function(){ 
 //INSERT CODE HERE

 //QUESTION 1
function Dog() {
}

Dog.prototype.bark = function() {
    alert("woof");
};

function ShibaInu() {
	Dog.call(this);
}

ShibaInu.prototype = new Dog();
ShibaInu.prototype.constructor = ShibaInu;

ShibaInu.prototype.bark = function() {
    alert("much wow very javascript");
};


 //QUESTION 3
$(document).ready(function(){ 
    $(".secondbutton").click(function() {
    	$(this).css("color", "turquoise").html( "<p>Shiba Inu</p>" );
    });
});

 //QUESTION 4
 $(document).ready(function() {
     $("#task4").click(function() {
         $("#hipimg").css("-webkit-filter", "blur(2px) saturate(3)");
     });
 });

 //QUESTION 5
 $(document).ready(function() {
     $("#btn3").click(function() {
         $(".spincar").css("-webkit-animation-play-state", "running");
     });
     $("#btn3").click(function() {
         $(".wheel").css("-webkit-animation-name", "spin");
     });
 });

 //QUESTION 6
$(document).ready(function() {
  $(".rainbows").animate({
    width: "75%"
  }, 1500);
  $(".nyancat").animate({
    left: "80%"
  }, 1500 );
});

});