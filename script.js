let mediaa = window.matchMedia('(max-width: 960px)');

if (mediaa.matches) {
    $('.up-button').css('visibility', 'visible');
}

mediaa = window.matchMedia('(max-width: 723px)');

if (mediaa.matches) {
    $(".title").html('CS:GO.RazoTack');
    $('.myVideo').css('left', '-800px');
}

setTimeout(()=> {$('header').css('height', '7em')}, '1000');

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


$('.menu-article-tactical').on('mouseover', function () {
    anime({
        targets: '.menu-article-tactical',
        scale: 1.1,
    });
})

$('.menu-article-granades').on('mouseover', function () {
    anime({
        targets: '.menu-article-granades',
        scale: 1.1,
    });
})

$('.menu-article-weapons').on('mouseover', function () {
    anime({
        targets: '.menu-article-weapons',
        scale: 1.1,
    });
})

$('.menu-article-tactical').on('mouseout', function () {
    anime({
        targets: '.menu-article-tactical',
        scale: 1,
    });
})

$('.menu-article-granades').on('mouseout', function () {
    anime({
        targets: '.menu-article-granades',
        scale: 1,
    });
})

$('.menu-article-weapons').on('mouseout', function () {
    anime({
        targets: '.menu-article-weapons',
        scale: 1,
    });
})




$('.menu-article-tactical').on('mouseover', function () {

    $('.menu-article-tactical .menu-article-banner h1').css('margin-bottom', "60%");

})

$('.menu-article-tactical').on('mouseout', function () {

    $('.menu-article-tactical .menu-article-banner h1').css('margin-bottom', "1em");

})


$('.menu-article-granades').on('mouseover', function () {

    $('.menu-article-granades .menu-article-banner h1').css('margin-bottom', "60%");

})

$('.menu-article-granades').on('mouseout', function () {

    $('.menu-article-granades .menu-article-banner h1').css('margin-bottom', "1em");

})


$('.menu-article-weapons').on('mouseover', function () {

    $('.menu-article-weapons .menu-article-banner h1').css('margin-bottom', "60%");

})

$('.menu-article-weapons').on('mouseout', function () {

    $('.menu-article-weapons .menu-article-banner h1').css('margin-bottom', "1em");

})


$('.menu-article-weapons').on('click', function () {

    $('header').css('height', '100vh');
    setTimeout(()=> {window.location.href = 'weapons/'}, 1000);

})

$('.menu-article-tactical').on('click', function () {

    $('header').css('height', '100vh');
    setTimeout(()=> {window.location.href = 'tactics/'}, 1000);

})

$('.menu-article-granades').on('click', function () {

    $('header').css('height', '100vh');
    setTimeout(()=> {window.location.href = 'maps/?intermediaryTo=grenades'}, 1000);
    
})