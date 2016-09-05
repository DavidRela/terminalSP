//Function to load a random image each page load.

//Creating variables
var imgs = ["url(../img/img0.jpg)", 
	"url(../img/img1.jpg)",
	"url(../img/img2.jpg)",
	"url(../img/img3.jpg)"
	];
	
//Get a random value from the "imgs" array
var rnd = imgs[Math.floor(Math.random() * imgs.length)];

//Function
$( document ).ready(function() {
    $( "#rndimg" ).css( "background" , rnd );
});
