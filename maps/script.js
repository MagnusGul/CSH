// Get virables getting
let urlParams = new URLSearchParams(window.location.search);
let params = {};
urlParams.forEach((p, key) => {
  params[key] = p;
});

// view mod seting
let viewLink;
if (params.to == 'grenades') {
    $('header h1').html('CS:GO.RazoTack Раскидки');
    viewLink = 'grenades';
} else if (params.to == 'tactics') {
    $('header h1').html('CS:GO.RazoTack Тактика');
    viewLink = 'tactics';
}

// media 
let mediaa = window.matchMedia('(max-width: 960px)');
if (mediaa.matches) {
    $('.title').html('CS:GO.RazoTack');
}

// header animations
setTimeout(()=> {$('header').css('height', '7em')}, '1000');
$('header h1').on('click', function() {
    $('header').css('height', '100vh');
    setTimeout(()=> {window.location.href = '/'}, 1000);
})

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

$('.up-button').css('visibility', 'visible');

// maps cards settings
let maps = [
    { class: 'mirage', 
        name: 'Mirage', 
        siteBg: 'https://cdn.discordapp.com/attachments/1045783386192629822/1045783713377685514/Mirage-jungle.jpg', 
        cardBg: 'https://cdn.discordapp.com/attachments/1045783386192629822/1049687726355644527/mirage_mini-map.jpg', 
        icon: 'https://cdn.discordapp.com/attachments/1045783386192629822/1050024874833367090/mirage_1.png',
    }, 
    { class: 'inferno',
        name: 'Inferno', 
        siteBg: 'https://cdn.discordapp.com/attachments/1045783386192629822/1049272501492011048/20221204165912_1.jpg', 
        cardBg: 'https://cdn.discordapp.com/attachments/1045783386192629822/1050021147258929192/Inferno_map.jpg', 
        icon: 'https://cdn.discordapp.com/attachments/1045783386192629822/1050022559632068748/Inferno_logojpg.png',
    },
    { class: 'dustII',
        name: 'Dust II', 
        siteBg: 'https://cdn.discordapp.com/attachments/1045783386192629822/1049272501215174676/20221204164853_1.jpg', 
        cardBg: 'https://cdn.discordapp.com/attachments/1045783386192629822/1050027401347870770/image1-3.png', 
        icon: 'https://cdn.discordapp.com/attachments/1045783386192629822/1050027118978940928/dust_2.png',
    },
    { class: 'overpass',
        name: 'Overpass', 
        siteBg: 'https://cdn.discordapp.com/attachments/1045783386192629822/1049272500145631294/20221204170206_1.jpg', 
        cardBg: 'https://cdn.discordapp.com/attachments/1045783386192629822/1052226439749054484/2d52ae386b175aeb.png', 
        icon: 'https://cdn.discordapp.com/attachments/1045783386192629822/1052225711462678528/62fae6131fae1b66.png',
    },
    { class: 'nuke',
        name: 'Nuke', 
        siteBg: 'https://cdn.discordapp.com/attachments/1045783386192629822/1046122972672442388/nuke-air-outsite.jpg', 
        cardBg: 'https://cdn.discordapp.com/attachments/1045783386192629822/1052238362137874453/1547327054_de_nuke.png', 
        icon: 'https://cdn.discordapp.com/attachments/1045783386192629822/1052228472782733392/nuke.png',
    },
    { class: 'vertigo',
        name: 'Vertigo', 
        siteBg: 'https://cdn.discordapp.com/attachments/1045783386192629822/1049272500854476821/20221204170431_1.jpg', 
        cardBg: 'https://cdn.discordapp.com/attachments/1045783386192629822/1052230262722924565/pozii-na-karte-Vertigo.png', 
        icon: 'https://cdn.discordapp.com/attachments/1045783386192629822/1052230288194936832/vertigo.png',
    },
    { class: 'ancient',
        name: 'Ancient', 
        siteBg: 'https://cdn.discordapp.com/attachments/1045783386192629822/1049285928964853821/20221205141519_1.jpg', 
        cardBg: 'https://cdn.discordapp.com/attachments/1045783386192629822/1052240184701374525/ANCIENT_RU.png', 
        icon: 'https://cdn.discordapp.com/attachments/1045783386192629822/1052239886146605136/512.png',
    },
    { class: 'train',
        name: 'Train', 
        siteBg: 'https://cdn.discordapp.com/attachments/1045783386192629822/1049285929904381992/20221205142017_1.jpg', 
        cardBg: 'https://cdn.discordapp.com/attachments/1045783386192629822/1052242700717543574/1482546161_train-eng.png', 
        icon: 'https://cdn.discordapp.com/attachments/1045783386192629822/1052242241789374514/4d937a301b0ecd99.png',
    },
    { class: 'cache',
        name: 'Cache', 
        siteBg: 'https://cdn.discordapp.com/attachments/1045783386192629822/1049285930260893796/20221205142247_1.jpg', 
        cardBg: 'https://cdn.discordapp.com/attachments/1045783386192629822/1052244929700704318/6E721D6C15AB376CF13AB3C19309D390166AE268.png', 
        icon: 'https://cdn.discordapp.com/attachments/1045783386192629822/1052244250634489917/cache.png',
    },
    { class: 'office',
        name: 'Office', 
        siteBg: 'https://cdn.discordapp.com/attachments/1045783386192629822/1049287516521508974/Office.webp', 
        cardBg: 'https://cdn.discordapp.com/attachments/1045783386192629822/1052247614579552407/1482546105_cs_office-eng.png', 
        icon: 'https://cdn.discordapp.com/attachments/1045783386192629822/1052247311536893962/office.png',
    },
    { class: 'anubis',
        name: 'Anubis', 
        siteBg: 'https://cdn.discordapp.com/attachments/1045783386192629822/1049285929346551828/20221205141800_1.jpg', 
        cardBg: 'https://cdn.discordapp.com/attachments/1045783386192629822/1052249329408147506/c7e5935bf7c922501535c19862272de4.png', 
        icon: 'https://cdn.discordapp.com/attachments/1045783386192629822/1052251106618658867/anbis.png',
    },
    { class: 'tuscan',
        name: 'Tuscan', 
        siteBg: 'https://cdn.discordapp.com/attachments/1045783386192629822/1049285928599953509/20221205142503_1.jpg', 
        cardBg: '', 
        icon: '',
    },
    { class: 'brach',
        name: 'Breach', 
        siteBg: 'https://cdn.discordapp.com/attachments/1045783386192629822/1049332866548510820/breach_csgo.jpg', 
        cardBg: '', 
        icon: '',
    },
    { class: 'agency',
        name: 'Agensy', 
        siteBg: 'https://cdn.discordapp.com/attachments/1045783386192629822/1049333317708828702/Cs_agency_thumbnail.webp', 
        cardBg: 'https://cdn.discordapp.com/attachments/1045783386192629822/1052252153336574003/8_counter-strike-global-offensive-csgo-csgo-maps-info-steamlists-com.png', 
        icon: 'https://cdn.discordapp.com/attachments/1045783386192629822/1052251971056316448/latest.png',
    },
];

// cards creating
for (let i = 0; i < maps.length; i++) {
    $('section').append(
        '<div class="menu-article '+ maps[i]['class'] +'" id="up"><div class="menu-article-banner"><h1>'+ maps[i]['name'] +'</h1></div></div>'
    )
    $('.'+maps[i]['class']).css({
        'background': 'url('+ maps[i]['icon'] +'), url('+ maps[i]['cardBg'] +')',
        'background-size': '80%, auto',
        'background-repeat': 'no-repeat',
        'background-position': 'center center'
    })
}

// cards event listener
let articles = $('.menu-article');

for (let i = 0; i < articles.length; i++) {
    $(articles[i]).on('mouseover', function () {
        anime({
            targets: this,
            scale: 1.1,
        });

        $('.bg-map').css('background-image', 'url('+ maps[i]['siteBg'] +')');
        $('.bg-map').css('opacity', 1)

        this.querySelector('h1').style.marginBottom = '60%';
    })

    $(articles[i]).on('mouseout', function () {
        anime({
            targets: this,
            scale: 1,
        });
        this.querySelector('h1').style.marginBottom = '1em';
    })

    $(articles[i]).on('click', function() {
        $('header').css('height', '100vh');
        setTimeout(()=> {window.location.href = 'view/?map='+articles[i].classList[1]+'&mode='+viewLink}, 1000);
    })
}


