$(document).ready(function() {

    var imageArray = new Array(); //create new array to preload images 
    var numImages = 2;
    var imageCounter = 0;


    for (var i = 0; i < numImages; i++) {
        imageArray[i] = new Image(); //set image src property to image path,preloading image in the process
        imageArray[i].src = "../images/brightIdea" + (i + 1) + ".png";
    }


    //if browser does not support the image object, exit.
    if (!document.images)
        return;

    setInterval(function() {

        $("#blinking_image").attr('src', imageArray[imageCounter++].src);

        if (imageCounter == numImages)
            imageCounter = 0;

    }, 700); //end setInterval



}); //end $(document).ready




/******************************************************************************/


$(document).ready(function() {
    $("#login").click(function() {
        var userName;
        var $temp;
     
        userName = prompt("Please enter your name.");
        $temp = userName  + ", " + $("h2").html();
        $("h2").html($temp);


    }); //end click(function()
}); //end $(document).ready




