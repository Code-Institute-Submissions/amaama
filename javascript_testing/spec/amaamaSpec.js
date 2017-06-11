describe("Hide Message", function(){

	var message = '<div id="#submitMessage"></div';

	it("should hide div 'submitMessage'", function(){
		expect(message).toBeHidden();
	});

});

describe("Show Message", function(){

	var form = '<form></form>';
	var message = '<div id="#submitMessage"></div';	

	it("should fade out form", function(){
		expect(form).not.toBeVisible();
	});

	it("should fade in div 'submitMessage' after 400 milliseconds", function(){
		var messageFadeIn = setTimeout(400, function() {
			expect(message).toBeVisible();
		});
		expect('messageFadeIn').toBeTruthy();
	});

});

describe("Scroll reveal images", function(){

	var image = '<img class="sr-image">';

	it("should reveal images on scroll after 200 milliseconds", function(){
		var revealImage = setTimeout(200, function() {
			expect(image).toBeVisible();
		});
		expect('revealImage').toBeTruthy();
	});

});