setTimeout(()=> {$('header').css('height', '7em')}, '1000');

$('header h1').on('click', function() {
    $('header').css('height', '100vh');
    setTimeout(()=> {window.location.href = '/'}, 1000);
})

// adding the objects on a site
for (let i = 0; i < weapons.length; i++) {
    $('.' + weapons[i]['group']).append(
        '<div class="menu-article '+ weapons[i]['class'] + '"><div class="menu-article-banner"><h1>'+ weapons[i]['name'] +'</h1></div></div>'
    )
}

// object animation
let articles = $('.menu-article');

for (let i = 0; i <= articles.length; i++) {
    $(articles[i]).on('mouseover', function () {
        anime({
            targets: this,
            scale: 1.1,
        });
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
        setTimeout(()=> {window.location.href = 'view/?item=' + this.classList[1]}, 1000);
    })
};
