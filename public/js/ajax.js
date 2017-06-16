	//declare global variables
var location = $('#location');
var percipMm = $('#percipMm');
var percipIn = $('#percipIn');
var temp = $('#temp');
var tempF = $('#tempF');
var tempC = $('#tempC');

var API_KEY = 'e5df8f57d5c207f6b49349e4ec590ae4';


var placeTemplate = "" +
	
	"<p>Results for {{city}}, {{state}}</p>" +
	"<p>Today there will be {{percipIn}} inches in rain.</p>" +
	"<p>This means that there will be {{percipMm}} mm in rain today.</p>" +
	"<p>It is {{tempF}} degrees ferenheit.</p>" +
	"<p>This means it is {{tempC}} degrees celcius.</p>";

//grab the entered friend, render it into a form HTML understands, attach this variable to the HTML document
function addData(place){
	$('#location').append(Mustache.render(placeTemplate, place));
};
		// var place = {
		// 	city: $city.val(),
		// 	state: $state.val(),
		// 	percipIn: $percipIn.val(),
		// 	percipCm: $percipCm.val(),
		// };
$(document).ready(function(){
	$('#enter').on('click', function(){
	var zipCode = $('#zipCode').val();
		$.ajax({
			type: 'GET',
			url: 'http://api.openweathermap.org/data/2.5/weather?zip=', zipCode+',us&apikey='+ API_KEY,
			success: (function(fillIn){
			console.log(fillIn);
			$.each(fillIn.location, function(i, fillIn){
			addData(place);
			// addData(fillIn);
			tempF = temp * 9/5-459.67;
			tempC = temp - 273.15;
			percipMm = rain;
			percipIn = percipMm * .0393701;
			});
		}),
			error: function(){
				alert('error when filling in');
			}
		});
	});
});
// 			}
// 		})
// 		})
// 	});
// });

	// var API_KEY = '0befac3640104924a91cd10b4aece33b';
	// $.ajax({
	// 	url : "http://api.wunderground.com/api/"+API_KEY,
	// 	dataType : "jsonp",
	// 	success : function(parsed_json) {
	// 	var location = parsed_json['location']['city'];
	// 	var temp_f = parsed_json['current_observation']['temp_f'];
	// 	alert("Current temperature in " + location + " is: " + temp_f);
	// 	  }
	// 	  });
	// 	});
		
// 	$.ajax({
// 		url : "http://api.wunderground.com/api/"+API_KEY+"conditions/q/"+$state+"/"+$city+".json"
// 		dataType : "jsonp",
// 		success : function(parsed_json) {
// 		var location = parsed_json['location']['city'];
// 		var temp_f = parsed_json['current_observation']['temp_f'];
// 		alert("Current temperature in " + location + " is: " + temp_f);
// 	};
// });
		
//template the entered data will fill
//grab the html page, when it loads, jQuery pulls from the API if successful, otherwise alerts with an error message
// $(document).ready(function(){
	// $.ajax({
	// 	type: 'GET',
	// 	url: 'http://api.wunderground.com/api/'+API_KEY+'conditions/q/'+$state+"/"+$city+'.json',
	// 	success: function() {
			// $.each(locations, function(i, place){
			// 	addData(place);
	// 		});
	// 	},

	// 	error: function(){
	// 		alert('error getting data');
	// 	}
	//  });
	// });

	//when someone clicks the Add! button, adds the object the user provides to the table array in the API, otherwise error message
	//.delegate allows you to remove items that were loaded by other students
	// $friends.delegate('.remove', 'click', function(){

	// 	var $li = $(this).closest('li');
	// 	//AJAX DELETE Function - click the .remove class button and the id identifies what to delete
	// 	$.ajax({
	// 		type: 'DELETE',
	// 		url: 'http://rest.learncode.academy/api/learncode/friends/' + $(this).attr('id'),
	// 		success: function(){
	// 			$li.fadeOut(300, function(){
	// 				$(this).remove()
	// 			});
	// 		}
	// 	});
	// });
// });