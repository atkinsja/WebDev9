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

$(document).ready(function() {
    $("._submit").click(function() {

       //variable holding regular expression
        var notInName = /[\d!@#\$%\^&\*\(\)_\+={}\|\ :;”<>\?,\.\/~\[\]]/;
        
        /* test if  class reqd is blank or has incorrect chars in it; 
        return false if this is the case */
        
        
        var $isNameValid = $(".reqd").val();
        if (notInName.test($isNameValid)||/^$/.test($isNameValid))
        {
            alert("Invalid last name");
            return false;
        }
        /*else
            alert("Valid last name");*/



       var $emailValidator = $("form").validate({

        wrapper: 'div',
        /* state email rules here */ 
        rules:{
            emailEntry:{
                required: true,
                email: true
              }
          },
          messages:{
            emailEntry:{
                required: "Email address is required",
                email: "Email address is not valid"
            }
          }
          
        }); //end validate
       
       
        var $isEmailValid = $emailValidator.form();
        
        if($isEmailValid == false)
        {
            alert("Email address is not valid");
            return false;
       }
       else
        {
            //window.location.href = "./index.html"
            //alert("test");
            //$("form").resetForm();
         }
        
        
    }); //end click
}); //end ready

/***********************************************************************************/

$(document).ready(function() {
    $("._reset").click(function() {
        
        /* your code to reset the form */
        $("form").validate().resetForm();

    });
});