let urlParams = new URLSearchParams(window.location.search);
let params = {};

urlParams.forEach((p, key) => {
  params[key] = p;
});

if (params['map'] == 'mirage') {
    $('header h1').html(
        'CS:GO.RazoTack Mirage'
    )
}

setTimeout(()=> {
    $('header').css('height', '7em')
}, '1000');

$('header h1').on('click', function() {
    $('header').css('height', '100vh');
    
    setTimeout(()=> {
        window.location.href = '/'
    }, 1000);
})