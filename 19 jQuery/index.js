$("h1").addClass("big-title margin-50");
// $("h1").text("Bye!");
// console.log($("img").attr("src", "drum.png"));
console.log($("h1").attr("class"));
$("a").attr("href", "https://www.apple.in");

$("h1").click(function() {
    $("h1").css("color", "purple");
});

$("button").click(function() {
    $("h1").css("color", "purple");
});

$("input").keypress(function(event) {
    console.log(event.key);
});


$(document).keypress(function(event) {
    var keyPressed = event.key;
    $("h1").html(keyPressed);
});

$("h1").on("mouseover", function() {
    $("h1").css("color", "pink");
});


$("h1").before("<button>New</button>");
$("h1").after("<button>NewBtn</button>");
$("h1").prepend("<button>New</button>");
$("h1").append("<button>New</button>");

// $("button").remove();

// $("button").on("click", function() {
//     $("h1").slideUp();
// });

// $("button").on("click", function() {
//     $("h1").animate({opacity: 0.5});
// });

$("button").on("click", function() {
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
});
