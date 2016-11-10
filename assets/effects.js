
$(document).ready(function() {
    $(".button-collapse").sideNav();
    $('.button-collapse').sideNav({
            menuWidth: 300,
            edge: 'left',
            closeOnClick: true
        }
    );
    $(".dropdown-button").dropdown();

});


// Show sideNav
$('.button-collapse').sideNav('show');
// Hide sideNav
$('.button-collapse').sideNav('hide');



$(document).ready(function(){
    $('.carousel').carousel();
});


$(document).ready(function(){
    $('.carousel').carousel({dist:0});
    window.setInterval(function(){$('.carousel').carousel('next')},900)
});


