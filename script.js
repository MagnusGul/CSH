let mediaa = window.matchMedia('(max-width: 960px)');

mediaa = window.matchMedia('(max-width: 723px)');

if (mediaa.matches) {
    $(".title").html('CS:GO.RazoTack');
    $('.myVideo').css('left', '-800px')
}

setTimeout(()=> {$('header').css('height', '7em')}, '1000');


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

    $('.menu-article-tactical .article-inner-banner h1').css('margin-bottom', "60%");

})

$('.menu-article-tactical').on('mouseout', function () {

    $('.menu-article-tactical .article-inner-banner h1').css('margin-bottom', "1em");

})


$('.menu-article-granades').on('mouseover', function () {

    $('.menu-article-granades .article-inner-banner h1').css('margin-bottom', "60%");

})

$('.menu-article-granades').on('mouseout', function () {

    $('.menu-article-granades .article-inner-banner h1').css('margin-bottom', "1em");

})


$('.menu-article-weapons').on('mouseover', function () {

    $('.menu-article-weapons .article-inner-banner h1').css('margin-bottom', "60%");

})

$('.menu-article-weapons').on('mouseout', function () {

    $('.menu-article-weapons .article-inner-banner h1').css('margin-bottom', "1em");

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
    setTimeout(()=> {window.location.href = 'grenades/'}, 1000);
    
})