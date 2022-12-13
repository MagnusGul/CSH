let urlParams = new URLSearchParams(window.location.search);
let params = {};

urlParams.forEach((p, key) => {
  params[key] = p;
});

let viewLink;

if (params.to == 'grenades') {
    $('header h1').html('CS:GO.RazoTack Раскидки');
    viewLink = 'grenades';
} else if (params.to == 'tactics') {
    $('header h1').html('CS:GO.RazoTack Тактика');
    viewLink = 'tactics';
}

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

$('header h1').on('click', function() {
    $('header').css('height', '100vh');
    setTimeout(()=> {window.location.href = '/'}, 1000);
})

let articles = $('.menu-article');

// in backgrounds [~][0] = main background, [~][1] = logo
let backgrounds = [
    [
        'https://cdn.discordapp.com/attachments/1045783386192629822/1049687726355644527/mirage_mini-map.jpg',
        'https://cdn.discordapp.com/attachments/1045783386192629822/1050024874833367090/mirage_1.png'
    ], [
        'https://cdn.discordapp.com/attachments/1045783386192629822/1050021147258929192/Inferno_map.jpg',
        'https://cdn.discordapp.com/attachments/1045783386192629822/1050022559632068748/Inferno_logojpg.png'
    ], [
        'https://cdn.discordapp.com/attachments/1045783386192629822/1050027401347870770/image1-3.png',
        'https://cdn.discordapp.com/attachments/1045783386192629822/1050027118978940928/dust_2.png'
    ], [
        'https://cdn.discordapp.com/attachments/1045783386192629822/1052226439749054484/2d52ae386b175aeb.png',
        'https://cdn.discordapp.com/attachments/1045783386192629822/1052225711462678528/62fae6131fae1b66.png'
    ], [
        'https://cdn.discordapp.com/attachments/1045783386192629822/1052238362137874453/1547327054_de_nuke.png',
        'https://cdn.discordapp.com/attachments/1045783386192629822/1052228472782733392/nuke.png'
    ], [
        'https://cdn.discordapp.com/attachments/1045783386192629822/1052230262722924565/pozii-na-karte-Vertigo.png',
        'https://cdn.discordapp.com/attachments/1045783386192629822/1052230288194936832/vertigo.png'
    ], [
        'https://cdn.discordapp.com/attachments/1045783386192629822/1052240184701374525/ANCIENT_RU.png',
        'https://cdn.discordapp.com/attachments/1045783386192629822/1052239886146605136/512.png',
    ], [
        'https://cdn.discordapp.com/attachments/1045783386192629822/1052242700717543574/1482546161_train-eng.png',
        'https://cdn.discordapp.com/attachments/1045783386192629822/1052242241789374514/4d937a301b0ecd99.png'
    ], [
        'https://cdn.discordapp.com/attachments/1045783386192629822/1052244929700704318/6E721D6C15AB376CF13AB3C19309D390166AE268.png',
        'https://cdn.discordapp.com/attachments/1045783386192629822/1052244250634489917/cache.png'
    ], [
        'https://cdn.discordapp.com/attachments/1045783386192629822/1052247614579552407/1482546105_cs_office-eng.png',
        'https://cdn.discordapp.com/attachments/1045783386192629822/1052247311536893962/office.png'
    ], [
        'https://cdn.discordapp.com/attachments/1045783386192629822/1052249329408147506/c7e5935bf7c922501535c19862272de4.png',
        'https://cdn.discordapp.com/attachments/1045783386192629822/1052251106618658867/anbis.png'
    ], [

    ], [

    ], [
        'https://cdn.discordapp.com/attachments/1045783386192629822/1052252153336574003/8_counter-strike-global-offensive-csgo-csgo-maps-info-steamlists-com.png',
        'https://cdn.discordapp.com/attachments/1045783386192629822/1052251971056316448/latest.png'
    ]
]

for (let i = 0; i < articles.length; i++) {
    $(articles[i]).on('mouseover', function () {
        this.querySelector('h1').style.marginBottom = '60%';
    })

    $(articles[i]).on('mouseout', function () {
        this.querySelector('h1').style.marginBottom = '1em';
    })
    $(articles[i]).css({
        'background': 'url('+ backgrounds[i][1] +'), url('+ backgrounds[i][0] +')',
        'background-size': '80%, auto',
        'background-repeat': 'no-repeat',
        'background-position': 'center center'
    })
    $(articles[i]).on('click', function() {
        $('header').css('height', '100vh');
        setTimeout(()=> {window.location.href = 'view/?map='+articles[i].classList[1]+'&mode='+viewLink}, 1000);
    })
}


