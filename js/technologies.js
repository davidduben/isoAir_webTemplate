$(document).ready(function(){    
        $(".tech-element").click(function() {
            let topElement = $(this).closest(".tech-element");
            if(topElement.hasClass("active-tech")){
                topElement.find(".tech-body").css("visibility", "hidden");
                topElement.removeClass("active-tech", 250, "linear");
                topElement.find(".ml-text").text("více informací");
            }else{
                topElement.find(".tech-body").css("visibility", "visible");
                topElement.addClass("active-tech", 250, "linear");
                topElement.find(".ml-text").text("méně informací");
                setTimeout(
                    function() 
                    {
                        $([document.documentElement, document.body]).animate({
                            scrollTop: topElement.offset().top
                        }, 500);
                    }, 250);
            }
        });
        
        $(document).bind( "mouseup touchend", function(e){
            let activeDiv = $(".active-tech");
            if (!activeDiv.is(e.target) && activeDiv.has(e.target).length === 0) 
            {
                activeDiv.find(".tech-body").css("visibility", "hidden");
                activeDiv.find(".ml-text").text("více informací");
                activeDiv.removeClass("active-tech", 250, "linear");
            }
        });
});