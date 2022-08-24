$(document).ready(function() {
    $("#lightgallery").lightGallery({
        thumbnail:true,
        download: false,
        share: false,
        rotate: false,
        fullScreen: false
    }); 
});

$(document).ready(function() {
    $("#lightgallery-instal").lightGallery({
        thumbnail:true,
        download: false,
        share: false,
        rotate: false,
        fullScreen: false,
        selector: '.photo-container .circle-photo .photo'
    }); 
});

$(document).ready(function() {
    $("#lightgallery-rel").lightGallery({
        thumbnail:true,
        download: false,
        share: false,
        rotate: false,
        fullScreen: false
    }); 
});

$("#lightgallery-rel-bot").on("click", "#dynamic1", function(e) {
    e.preventDefault();
    
    $("#dynamic1").lightGallery({
        thumbnail:true,
        download: false,
        share: false,
        rotate: false,
        fullScreen: false,
        dynamic: true,
        dynamicEl: [{
            'src': '../img/realizace3/nemocnice1.jpg',
            'thumb': '../img/realizace3/nemocnice1.jpg',
            'subHtml': '<h4>Nemocnice Nymburk</h4>'
        }, {
            'src': '../img/realizace3/nemocnice2.jpg',
            'thumb': '../img/realizace3/nemocnice2.jpg',
            'subHtml': '<h4>Nemocnice Nymburk</h4>'
        }, {
            'src': '../img/realizace3/nemocnice3.jpg',
            'thumb': '../img/realizace3/nemocnice3.jpg',
            'subHtml': '<h4>Nemocnice Nymburk</h4>'
        }, {
            'src': '../img/realizace3/nemocnice4.jpg',
            'thumb': '../img/realizace3/nemocnice4.jpg',
            'subHtml': '<h4>Nemocnice Nymburk</h4>'
        }, {
            'src': '../img/realizace3/nemocnice5.jpg',
            'thumb': '../img/realizace3/nemocnice5.jpg',
            'subHtml': '<h4>Nemocnice Nymburk</h4>'
        }, {
            'src': '../img/realizace3/nemocnice6.jpg',
            'thumb': '../img/realizace3/nemocnice6.jpg',
            'subHtml': '<h4>Nemocnice Nymburk</h4>'
        }, {
            'src': '../img/realizace3/nemocnice7.jpg',
            'thumb': '../img/realizace3/nemocnice7.jpg',
            'subHtml': '<h4>Nemocnice Nymburk</h4>'
        }, {
            'src': '../img/realizace3/nemocnice8.jpg',
            'thumb': '../img/realizace3/nemocnice8.jpg',
            'subHtml': '<h4>Nemocnice Nymburk</h4>'
        }, {
            'src': '../img/realizace3/nemocnice9.jpg',
            'thumb': '../img/realizace3/nemocnice9.jpg',
            'subHtml': '<h4>Nemocnice Nymburk</h4>'
        }, {
            'src': '../img/realizace3/nemocnice10.jpg',
            'thumb': '../img/realizace3/nemocnice10.jpg',
            'subHtml': '<h4>Nemocnice Nymburk</h4>'
        }]
    });  
});

$("#lightgallery-rel-bot").on("click", "#dynamic2", function(e) {
    e.preventDefault();
    
    $("#dynamic2").lightGallery({
        thumbnail:true,
        download: false,
        share: false,
        rotate: false,
        fullScreen: false,
        dynamic: true,
        dynamicEl: [{
            'src': '../img/realizace3/sklep1.jpg',
            'thumb': '../img/realizace3/sklep1.jpg',
            'subHtml': '<h4>Sklepní byt Praha</h4>'
        }, {
            'src': '../img/realizace3/sklep2.jpg',
            'thumb': '../img/realizace3/sklep2.jpg',
            'subHtml': '<h4>Sklepní byt Praha</h4>'
        }, {
            'src': '../img/realizace3/sklep3.jpg',
            'thumb': '../img/realizace3/sklep3.jpg',
            'subHtml': '<h4>Sklepní byt Praha</h4>'
        }, {
            'src': '../img/realizace3/sklep4.jpg',
            'thumb': '../img/realizace3/sklep4.jpg',
            'subHtml': '<h4>Sklepní byt Praha</h4>'
        }, {
            'src': '../img/realizace3/sklep5.jpg',
            'thumb': '../img/realizace3/sklep5.jpg',
            'subHtml': '<h4>Sklepní byt Praha</h4>'
        }, {
            'src': '../img/realizace3/sklep6.jpg',
            'thumb': '../img/realizace3/sklep6.jpg',
            'subHtml': '<h4>Sklepní byt Praha</h4>'
        }, {
            'src': '../img/realizace3/sklep7.jpg',
            'thumb': '../img/realizace3/sklep7.jpg',
            'subHtml': '<h4>Sklepní byt Praha</h4>'
        }, {
            'src': '../img/realizace3/sklep8.jpg',
            'thumb': '../img/realizace3/sklep8.jpg',
            'subHtml': '<h4>Sklepní byt Praha</h4>'
        }, {
            'src': '../img/realizace3/sklep9.jpg',
            'thumb': '../img/realizace3/sklep9.jpg',
            'subHtml': '<h4>Sklepní byt Praha</h4>'
        }, {
            'src': '../img/realizace3/sklep10.jpg',
            'thumb': '../img/realizace3/sklep10.jpg',
            'subHtml': '<h4>Sklepní byt Praha</h4>'
        }, {
            'src': '../img/realizace3/sklep11.jpg',
            'thumb': '../img/realizace3/sklep11.jpg',
            'subHtml': '<h4>Sklepní byt Praha</h4>'
        }]
    });  
});

$("#lightgallery-rel-bot").on("click", "#dynamic3", function(e) {
    e.preventDefault();
    
    $("#dynamic3").lightGallery({
        thumbnail:true,
        download: false,
        share: false,
        rotate: false,
        fullScreen: false,
        dynamic: true,
        dynamicEl: [{
            'src': '../img/realizace3/restaurace1.jpg',
            'thumb': '../img/realizace3/restaurace1.jpg',
            'subHtml': '<h4>Restaurace Praha</h4>'
        }, {
            'src': '../img/realizace3/restaurace2.jpg',
            'thumb': '../img/realizace3/restaurace2.jpg',
            'subHtml': '<h4>Restaurace Praha</h4>'
        }, {
            'src': '../img/realizace3/restaurace3.jpg',
            'thumb': '../img/realizace3/restaurace3.jpg',
            'subHtml': '<h4>Restaurace Praha</h4>'
        }, {
            'src': '../img/realizace3/restaurace4.jpg',
            'thumb': '../img/realizace3/restaurace4.jpg',
            'subHtml': '<h4>Restaurace Praha</h4>'
        }, {
            'src': '../img/realizace3/restaurace5.jpg',
            'thumb': '../img/realizace3/restaurace5.jpg',
            'subHtml': '<h4>Restaurace Praha</h4>'
        }, {
            'src': '../img/realizace3/restaurace6.jpg',
            'thumb': '../img/realizace3/restaurace6.jpg',
            'subHtml': '<h4>Restaurace Praha</h4>'
        }, {
            'src': '../img/realizace3/restaurace7.jpg',
            'thumb': '../img/realizace3/restaurace7.jpg',
            'subHtml': '<h4>Restaurace Praha</h4>'
        }, {
            'src': '../img/realizace3/restaurace8.jpg',
            'thumb': '../img/realizace3/restaurace8.jpg',
            'subHtml': '<h4>Restaurace Praha</h4>'
        }, {
            'src': '../img/realizace3/restaurace9.jpg',
            'thumb': '../img/realizace3/restaurace9.jpg',
            'subHtml': '<h4>Restaurace Praha</h4>'
        }]
    });  
});