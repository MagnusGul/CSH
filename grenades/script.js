let mediaa = window.matchMedia('(max-width: 960px)');

if (mediaa.matches) {
    $('.title').html('CS:GO.RazoTack');
}

setTimeout(()=> {$('header').css('height', '7em')}, '1000');


$('.up-button').css('visibility', 'visible');


// Up-Button
$('.up-button').on('click', function() {

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, {
        duration: 500,
        easing: "swing" 
    });

    return false;
});

// Cards animation
$('.mirage').on('mouseover', function () {
    anime({
        targets: '.mirage',
        scale: 1.1,
    });
    $('.bg-map').css('background-image', 'url(https://cdn.discordapp.com/attachments/1045783386192629822/1045783713377685514/Mirage-jungle.jpg');
    $('.bg-map').css('opacity', 1)
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
    $('.bg-map').css('background-image', 'url(https://cdn.discordapp.com/attachments/1045783386192629822/1049272501215174676/20221204164853_1.jpg');
    $('.bg-map').css('opacity', 1)
})

$('.inferno').on('mouseover', function () {
    anime({
        targets: '.inferno',
        scale: 1.1,
    });
    $('.bg-map').css('background-image', 'url(https://cdn.discordapp.com/attachments/1045783386192629822/1049272501492011048/20221204165912_1.jpg');
    $('.bg-map').css('opacity', 1)
})

$('.inferno').on('mouseout', function () {
    anime({
        targets: '.inferno',
        scale: 1,
    });
})

$('.dustII').on('mouseout', function () {
    anime({
        targets: '.dustII',
        scale: 1,
    });
})

$('.overpass').on('mouseover', function () {
    anime({
        targets: '.overpass',
        scale: 1.1,
    });
    $('.bg-map').css('background-image', 'url(https://cdn.discordapp.com/attachments/1045783386192629822/1049272500145631294/20221204170206_1.jpg');
    $('.bg-map').css('opacity', 1)
})

$('.overpass').on('mouseout', function () {
    anime({
        targets: '.overpass',
        scale: 1,
    });
    
})

$('.nuke').on('mouseover', function () {
    anime({
        targets: '.nuke',
        scale: 1.1,
    });
    $('.bg-map').css('background-image', 'url(https://cdn.discordapp.com/attachments/1045783386192629822/1046122972672442388/nuke-air-outsite.jpg');
    $('.bg-map').css('opacity', 1)
})

$('.nuke').on('mouseout', function () {
    anime({
        targets: '.nuke',
        scale: 1,
    });
})

$('.vertigo').on('mouseover', function () {
    anime({
        targets: '.vertigo',
        scale: 1.1,
    });
    $('.bg-map').css('background-image', 'url(https://cdn.discordapp.com/attachments/1045783386192629822/1049272500854476821/20221204170431_1.jpg');
    $('.bg-map').css('opacity', 1)
})

$('.vertigo').on('mouseout', function () {
    anime({
        targets: '.vertigo',
        scale: 1,
    });
})

$('.ancient').on('mouseover', function () {
    anime({
        targets: '.ancient',
        scale: 1.1,
    });
    $('.bg-map').css('background-image', 'url(https://cdn.discordapp.com/attachments/1045783386192629822/1049285928964853821/20221205141519_1.jpg');
    $('.bg-map').css('opacity', 1)
})

$('.ancient').on('mouseout', function () {
    anime({
        targets: '.ancient',
        scale: 1,
    });
})

$('.train').on('mouseover', function () {
    anime({
        targets: '.train',
        scale: 1.1,
    });
    $('.bg-map').css('background-image', 'url(https://cdn.discordapp.com/attachments/1045783386192629822/1049285929904381992/20221205142017_1.jpg');
    $('.bg-map').css('opacity', 1)
})

$('.train').on('mouseout', function () {
    anime({
        targets: '.train',
        scale: 1,
    });
})

$('.cache').on('mouseover', function () {
    anime({
        targets: '.cache',
        scale: 1.1,
    });
    $('.bg-map').css('background-image', 'url(https://cdn.discordapp.com/attachments/1045783386192629822/1049285930260893796/20221205142247_1.jpg');
    $('.bg-map').css('opacity', 1)
})

$('.cache').on('mouseout', function () {
    anime({
        targets: '.cache',
        scale: 1,
    });
})

$('.office').on('mouseover', function () {
    anime({
        targets: '.office',
        scale: 1.1,
    });
    $('.bg-map').css('background-image', 'url(https://cdn.discordapp.com/attachments/1045783386192629822/1049287516521508974/Office.webp');
    $('.bg-map').css('opacity', 1)
})

$('.office').on('mouseout', function () {
    anime({
        targets: '.office',
        scale: 1,
    });
})

$('.anubis').on('mouseover', function () {
    anime({
        targets: '.anubis',
        scale: 1.1,
    });
    $('.bg-map').css('background-image', 'url(https://cdn.discordapp.com/attachments/1045783386192629822/1049285929346551828/20221205141800_1.jpg');
    $('.bg-map').css('opacity', 1)
})

$('.anubis').on('mouseout', function () {
    anime({
        targets: '.anubis',
        scale: 1,
    });
})

$('.tuscan').on('mouseover', function () {
    anime({
        targets: '.tuscan',
        scale: 1.1,
    });
    $('.bg-map').css('background-image', 'url(https://cdn.discordapp.com/attachments/1045783386192629822/1049285928599953509/20221205142503_1.jpg');
    $('.bg-map').css('opacity', 1)
})

$('.tuscan').on('mouseout', function () {
    anime({
        targets: '.tuscan',
        scale: 1,
    });
})

$('.breach').on('mouseover', function () {
    anime({
        targets: '.breach',
        scale: 1.1,
    });
    $('.bg-map').css('background-image', 'url(https://cdn.discordapp.com/attachments/1045783386192629822/1049332866548510820/breach_csgo.jpg');
    $('.bg-map').css('opacity', 1)
})

$('.breach').on('mouseout', function () {
    anime({
        targets: '.breach',
        scale: 1,
    });
})

$('.agency').on('mouseover', function () {
    anime({
        targets: '.agency',
        scale: 1.1,
    });
    $('.bg-map').css('background-image', 'url(https://cdn.discordapp.com/attachments/1045783386192629822/1049333317708828702/Cs_agency_thumbnail.webp');
    $('.bg-map').css('opacity', 1)
})

$('.agency').on('mouseout', function () {
    anime({
        targets: '.agency',
        scale: 1,
    });
})

let articles = $('.menu-article');


for (let i = 0; i <= articles.length; i++) {
    $(articles[i]).on('mouseover', function () {
        articles[i].querySelector('h1').style.marginBottom = '60%';
    })

    $(articles[i]).on('mouseout', function () {
        articles[i].querySelector('h1').style.marginBottom = '1em';
    })

}