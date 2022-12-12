setTimeout(()=> {$('header').css('height', '7em')}, '1000');

let articles = $('.menu-article');

for (let i = 0; i <= articles.length; i++) {
    $(articles[i]).on('mouseover', function () {
        anime({
            targets: articles[i],
            scale: 1.1,
        });
        this.querySelector('h1').style.marginBottom = '60%';
    })

    $(articles[i]).on('mouseout', function () {
        anime({
            targets: articles[i],
            scale: 1,
        });
        this.querySelector('h1').style.marginBottom = '1em';
    })

    $(articles[i]).on('click', function() {
        $('header').css('height', '100vh');
        setTimeout(()=> {window.location.href = 'view/?map='+articles[i].classList[1]+'&mode='+viewLink}, 1000);
    })
};