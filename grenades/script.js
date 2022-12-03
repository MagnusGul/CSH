setTimeout(()=> {$('header').css('height', '7em')}, '1000');


$('.up-button').css('visibility', 'visible');



$('.up-button').on('click', function() {

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, {
        duration: 500,   // по умолчанию «400» 
        easing: "swing" // по умолчанию «swing» 
    });

    return false;
});

$('.mirage').on('mouseover', function () {
    anime({
        targets: '.mirage',
        scale: 1.1,
    });
})

$('.mirage').on('mouseout', function () {
    anime({
        targets: '.mirage',
        scale: 1,
    });
})

$('.dustII').on('mouseover', function () {
    anime({
        targets: '.dustII',
        scale: 1.1,
    });
})

$('.dustII').on('mouseout', function () {
    anime({
        targets: '.dustII',
        scale: 1,
    });
})

$('.inferno').on('mouseover', function () {
    anime({
        targets: '.inferno',
        scale: 1.1,
    });
})

$('.inferno').on('mouseout', function () {
    anime({
        targets: '.inferno',
        scale: 1,
    });
})

$('.vertigo').on('mouseover', function () {
    anime({
        targets: '.vertigo',
        scale: 1.1,
    });
})

$('.vertigo').on('mouseout', function () {
    anime({
        targets: '.vertigo',
        scale: 1,
    });
})

$('.overpass').on('mouseover', function () {
    anime({
        targets: '.overpass',
        scale: 1.1,
    });
})

$('.overpass').on('mouseout', function () {
    anime({
        targets: '.overpass',
        scale: 1,
    });
})