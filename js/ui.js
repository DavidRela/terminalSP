//Function to load a random image each page load.

//Creating variables
var imgs = ["../img/img0.jpg", 
	"../img/img1.jpg",
	"../img/img2.jpg",
	"../img/img3.jpg"
	];
	
//Get a random value from the "imgs" array
var rnd = imgs[Math.floor(Math.random() * imgs.length)];

//Function
$( document ).ready(function() {
    $( "#rndimg" ).css( "background-image" , "../img/img0.jpg" );
});
