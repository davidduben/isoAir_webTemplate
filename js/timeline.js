$(document).ready(function(){

    /*let timeline = $(".timeline");
    let children = timeline.children(".container-step");
    $.each(children, function(i) {
        if ($(this).visible(true)) {
            console.log("jo");
        } else {
            console.log("ne");
        }
    });*/
    
    //x = spodek kroku - $('.timeline').position().top + $('.timeline').outerHeight(true);
    //y = spodek obrazovky
    // if (y > x) zobraz hned
    //scrool event (nove si vem pozici obrazovky)
    //if (y > x) zobraz s animaci
    
    //Detect the scrolling to bottom of the page using jQuery.
    /*$(window).on("scroll", function() {
    	var scrollHeight = $(document).height();
    	var scrollPosition = $(window).height() + $(window).scrollTop();
    	if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
    	    // when scroll to bottom of the page
    	}
    });*/
    
    // TODO: pridat <nosript>
    
    
    //lazy load
    /*$(window).scroll(function(){
        // get the bottom position
        var bottom_position = $(document).height() - ($(window).scrollTop() + $(window).height());    
    });*/
    
    
    $(".content").click(function(e) {  
        //init
        let timeline = $(".timeline");
        let activeStep = $(this).closest(".container-step");
        let paragraph = activeStep.find('p');
        let open = activeStep.hasClass("active-step");
        
        //kliknuti na text = nic nedelej
        let text = $(".description p");
        if (text.is(e.target)) return;
        
        //reset delky osy
        if(timeline.hasClass("last-step")) timeline.removeClass("last-step");
        
        //projed vsechny kroky a odstran tridu podle podminky
        let children = timeline.children(".container-step");
        $.each(children, function(i) {
            if($(this).hasClass("active-step")) $(this).removeClass("active-step");
            if($(this).hasClass("move-up")) $(this).removeClass("move-up");
            if($(this).find('p') != 0) $(this).find('p').hide();
        });
        
        //zakladni chovani pri kliknuti na konkretni krok
        if(open){
            if(activeStep.hasClass("left")){
                timeline.removeClass("left-active"); 
            }else{
                timeline.removeClass("right-active");
            }
        }else{
            if(activeStep.hasClass("left")){
                if(timeline.hasClass("right-active")) timeline.removeClass("right-active");
                if(timeline.hasClass("left-active") == false) timeline.addClass("left-active"); 
            }else{
                if(timeline.hasClass("left-active")) timeline.removeClass("left-active");
                if(timeline.hasClass("right-active") == false) timeline.addClass("right-active");
            }
            activeStep.addClass("active-step");
            paragraph.delay(300).fadeIn(300, "swing");
        }
        
        //delka osy
        if(!open && activeStep.next(".container-step").length == 0){
            timeline.addClass("last-step");
        }
    });
    
    // TODO: najed na aktualni step (scroll)
    
});