setTimeout(()=> {$('header').css('height', '7em')}, '1000');

$('header h1').on('click', function() {
    $('header').css('height', '100vh');
    setTimeout(()=> {window.location.href = '/'}, 1000);
})


/* add object like: {class: '*class-name*', name: '*visible-name*', group: '*object type*', photo: '*bg-img*'}
    group: can be only only those indicated in index.html in section classes

*/
let weapons = [
    // pistols 
    {class: 'usp-s', name: 'USP-S', group: 'pistols', photo: ''},
    {class: 'p2000', name: 'P2000', group: 'pistols', photo: ''},
    {class: 'glock-18', name: 'Glock-18', group: 'pistols', photo: ''},
    {class: 'p250', name: 'P250', group: 'pistols', photo: ''},
    {class: 'dual-berettas', name: 'Dual Berretas', group: 'pistols', photo: ''},
    {class: 'five-seven', name: 'Five-Seven', group: 'pistols', photo: ''},
    {class: 'tec-9', name: 'TEC-9', group: 'pistols', photo: ''},
    {class: 'cz-75auto', name: 'CZ-75 Auto', group: 'pistols', photo: ''},
    {class: 'deagle', name: 'Desert-Eagle', group: 'pistols', photo: ''},
    {class: 'r8', name: 'Revolver R8', group: 'pistols', photo: ''},
    // shotguns
    {class: 'nova', name: 'Nova', group: 'shotguns', photo: ''},
    {class: 'xm1014', name: 'XM1014', group: 'shotguns', photo: ''},
    {class: 'mag-7', name: 'MAG-7', group: 'shotguns', photo: ''},
    {class: 'saved-off', name: 'Saved-Off', group: 'shotguns', photo: ''},
    // smg
    {class: 'mp-9', name: 'MP-9', group: 'smg', photo: ''},
    {class: 'mac-10', name: 'MAC-10', group: 'smg', photo: ''},
    {class: 'mp-7', name: 'MP-7', group: 'smg', photo: ''},
    {class: 'mp-5', name: 'MP-5', group: 'smg', photo: ''},
    {class: 'ump', name: 'UMP', group: 'smg', photo: ''},
    {class: 'p90', name: 'P-90', group: 'smg', photo: ''},
    {class: 'pp-19-bizon', name: 'ПП-19 "Бизон"', group: 'smg', photo: ''},
    //rifles
    {class: 'famas', name: 'Famas', group: 'rifles', photo: ''},
    {class: 'galil-ar', name: 'GalilAR', group: 'rifles', photo: ''},
    {class: 'm4a4', name: 'M4A4', group: 'rifles', photo: ''},
    {class: 'm4a1-s', name: 'M4A1-S', group: 'rifles', photo: ''},
    {class: 'ak-47', name: 'AK-47', group: 'rifles', photo: ''},
    {class: 'aug', name: 'AUG', group: 'rifles', photo: ''},
    {class: 'sg-553', name: 'SG-553', group: 'rifles', photo: ''},
];


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
        window.location.href = 'view/?item=' + this.classList[1];
    })
};
