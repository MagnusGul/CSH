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


