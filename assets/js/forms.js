 $(document).on('click', '#ToStep2', function(event) {
        event.preventDefault();
        $("#Step1").fadeOut(1);
        $("#Step2").fadeIn(500);
        $("#progressbar").css('width', '20%');
    }); 

    $(document).on('click', '#ToStep3', function(event) {
        event.preventDefault();
        $("#Step2").fadeOut(1);
        $("#Step3").fadeIn(500);
        $("#progressbar").css('width', '40%');
    });

     $(document).on('click', '#ToStep4', function(event) {
        event.preventDefault();
        $("#Step3").fadeOut(1);
        $("#Step4").fadeIn(500);
        $("#progressbar").css('width', '60%');
    }); 

     $(document).on('click', '#ToStep5', function(event) {
        event.preventDefault();
        $("#Step4").fadeOut(1);
        $("#Step5").fadeIn(500);
        $("#progressbar").css('width', '80%');
    }); 

     $(document).on('click', '#ToStep6', function(event) {
        event.preventDefault();
        $("#Step5").fadeOut(1);
        $("#Step6").fadeIn(500);
        $("#progressbar").css('width', '90%');
    });