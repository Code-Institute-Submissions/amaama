(function ($) {
    "use strict"; // Start of use strict    

    sr.reveal(".sr-image", {
        duration: 1000,
        delay: 200
    });

    $(document).ready(function () {
        $("#submitMessage").hide();
    });

    $("form").on("submit", function showMessage() {
        $("form").fadeOut(400);
        $("#submitMessage").delay(400).fadeIn(400);
        event.preventDefault();
    });

})(jQuery); // End of use strict
