let urlParams = new URLSearchParams(window.location.search);
let params = {};

urlParams.forEach((p, key) => {
  params[key] = p;
});

for (let i = 0; i < maps.length; i++) {
    if (maps[i]['class'] == params['map']) {
        $('title').append(maps[i]['name']);
        $('header h1').append(maps[i]['name'])
    } else if (params['map'] == 'add-card') {
        window.location.href = '/form'
    }
}

setTimeout(()=> {
    $('header').css('height', '7em')
}, '1000');

$('header h1').on('click', function() {
    $('header').css('height', '100vh');
    
    setTimeout(()=> {
        window.location.href = '../'
    }, 1000);
})