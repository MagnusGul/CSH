setTimeout(()=> {$('header').css('height', '7em')}, '1000');

let articles = $('.menu-article');

$('header h1').on('click', function() {
    $('header').css('height', '100vh');
    setTimeout(()=> {window.location.href = '/'}, 1000);
})

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
        window.location.href = 'view/?item=' + this.classList[1];
    })
};