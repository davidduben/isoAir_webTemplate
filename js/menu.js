$(document).ready(function(){
    $("#menu-element").click(function() {
        $(this).toggleClass("change");
        if($(this).hasClass("change")){
            $("body").addClass("nav-on");
        }else{
            $("body").removeClass("nav-on");
        }
    });
    
    $(document).bind( "mouseup touchend", function(e){
        let navigace = $("nav");
        let menuElement = $("#menu-element");
        if (!navigace.is(e.target) && navigace.has(e.target).length === 0) 
        {
            if(!menuElement.is(e.target) && menuElement.has(e.target).length === 0){
                menuElement.removeClass("change");
                $("body").removeClass("nav-on");
            }
        }
    });
});