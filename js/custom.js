$(function(){
//Loads the same header and footer in to every page.
	$("header").load("header.html");
	$("footer").load("footer.html");
//Auto Generate Tsum Library & generate URL for unique Tsum Page.
	function addTsums(arrayOfTsums) {
		arrayOfTsums.forEach( function(obj, index){	
			$('#tsums').append('<div class="preview" id="' + obj.id + '"><a href="tsum.html?' + obj.id + '"><img src="assets/images/' + obj.image + '" alt="' + obj.name + '"></a></div>');
			onHover('#' + obj.id, obj.name, obj.name);
		});
	}
//Auto Generate Tsums for Tsum Profile page.
	function moreTsums(arrayOfMoreTsums) {
		arrayOfMoreTsums.forEach(function(obj, index){
			console.log	
			$('#moreTsums').append('<div class="moreTsumsPreview" id="' + obj.id + 'Profile"><a href="tsum.html?' + obj.id + '"><img src="assets/images/' + obj.image + '" alt="' + obj.name + '"></a></div>');
		});
	}
//Randomly select circle color on page load.
	function randomColor(){
  		var colors = ["#6816A4","#2A509F","#E21F22","#FC9A24"];  
  		var rand = Math.floor(Math.random()*colors.length);    
  		$('section.tsumLibrary div').css("background", colors[rand]);
	}
//Show Tsum Name on Mouse Hover.
	function onHover(id, name, description){
		$(id).hover(function(){
			$(id).append('<div class="tsumName">' + description + '</div>');
		}, function() {
			$('.tsumName').remove();
		});
	}
//Adjust header size on page scroll.
	$(document).on("scroll", function(){
		if(
      		$(document).scrollTop() > 25){
		  	$("header, #hamburger").addClass("headerShrink")
		}
		else{
			$("header, #hamburger").removeClass("headerShrink");
		}
	});
//Flip Card.
	$("#flipButton").click(function(){
		$(".tsumCard").toggleClass("flipped");
	});
//Show More Tsums Panel.
	$("#moreTsumsButton").click(function(){
		$("#moreTsums").toggleClass("open");
	});
//Show/Hide Nav menu on Mobile devices.
	$("#hamburger, #overlay").click(function(){
		$("#hamburger, header, .container, nav, .logo, #overlay, body").toggleClass("active");
	});
//Open/Close the More Tsum Navigator on the behind the footer of the profile pages.
	$("#moreTsums_button").click(function(){
		$("#moreTsums").toggleClass("open");
	});


//Call functions
	moreTsums(tsums);
	addTsums(tsums);
	randomColor();

});



