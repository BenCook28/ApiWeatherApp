	//declare global variables
var percipMm = $('#percipMm');
var percipIn = $('#percipIn');
var temp = $('#temp');
var tempF = $('#tempF');
var tempC = $('#tempC');

var API_KEY = 'e5df8f57d5c207f6b49349e4ec590ae4';

// var slideIndex =1;
// showDivs(slideIndex);

// function plusDivs(n) {
//     showDivs(slideIndex += n);
// }
// function showDivs(n) {
// 	var i;
// 	var x = document.getElementsByClassName("slides");
// 	if (n > x.length) {slideIndex = 1}
// 	if (n < 1) {slideIndex = x.length} ;
// 	for(i = 0; i < x.length; i++) {
// 		x[i].style.display = "none";
// 	}
// 	x[slideIndex-1].style.display = "block";
// }

var placeTemplate = "" +
	'<div id="centerResults">' +
	"<p>Results for {{name}}:</p>" +
	"<p>Condition: {{description}}.</p>" +
	"<p>It is {{tempF}} degrees ferenheit.</p>" +
	//"<p>It is "+ tempF + " degrees farenheit."</p>;
	"<p>This means it is {{tempC}} degrees celcius.</p>" +
	"</div>";

//grab the entered friend, render it into a form HTML understands, attach this variable to the HTML document
function addData(place){
	$('#location').append(Mustache.render(placeTemplate, place));
};

$(document).ready(function(){
	$('#enter').on('click', function(){
	var zipCode = $('#zipCode').val();
	var weatherData = {};
		$.ajax({
			type: 'GET',
			url: 'http://api.openweathermap.org/data/2.5/weather?zip='+ zipCode+',us&apikey='+ API_KEY,
		    success: (function(fillIn){

			console.log(fillIn.name);
			console.log("")
			weatherData.name =fillIn.name;
			weatherData.description = fillIn.weather[0].description;
			weatherData.temp = fillIn.main.temp;
			weatherData.tempF = (weatherData.temp * 9/5-459.67).toFixed(2);
			weatherData.tempC = (weatherData.temp - 273.15).toFixed(2);

			addData(weatherData);

		}),
			error: function(){
				alert('please enter a valid zip code');
			}

		});
		$("#centerResults").css({'text-align': 'center', 'font-size': '8em'});
	});
	// $("#clear").on('click', function(){
	// 	$("#centerResults").empty();
	// });
});
