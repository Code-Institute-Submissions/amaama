$("#submitMessage").hide();

$('form').on('submit', function showMessage(){
    $('form').fadeOut(400);
    $('#submitMessage').delay(400).fadeIn(400);
    event.preventDefault();
});

sr.reveal('.sr-image', {
    duration: 1000,
    delay: 200
});