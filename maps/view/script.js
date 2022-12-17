let urlParams = new URLSearchParams(window.location.search);
let params = {};

urlParams.forEach((p, key) => {
  params[key] = p;
});

let mode = params['mode'];
let mode_lang;

if (mode == 'grenades') {
    mode_lang = 'Раскидки';
} else {
    mode_lang = 'Тактики';
}


for (let i = 0; i < maps.length; i++) {
    if (maps[i]['class'] == params['map']) {
        $('title').append(maps[i]['name']);
        $('.container').css('background-image', 'url(' + maps[i]['siteBg'] + '');
        $('header h1').html(mode_lang + ' на ' + maps[i]['name']);
        $('.map').attr('src', maps[i]['cardBg']);
        
        map_number = i;

        let positions = maps[i]['positions'];
        for (let j = 0; j < positions.length; j++) {
            postion = document.createElement("div");
            postion.className = 'position';
            postion.id = 'p' + j;
            document.querySelector('.content').insertBefore(postion, document.querySelector('.content').firstChild);
            $('#p' + j).css({
                'left': maps[map_number]['positions'][0][0] + 'px',
                'top': maps[map_number]['positions'][0][1] + 'px',
                'width': maps[map_number]['positions'][0][2] + 'px',
                'height': maps[map_number]['positions'][0][3] + 'px'
            });
            $('#p' + j).on('click', function() {
                $('#p' + j).css('background', 'rgba(250, 0, 0, 0.4)')
            })
            $('#p' + j).on('click', function() {
                postion = document.createElement("div");
                postion.className = 'position';
                postion.id = 'pp' + j;
                document.querySelector('.content').insertBefore(postion, document.querySelector('.content').firstChild);
                $('#pp' + j).css({
                    'left': maps[map_number]['positions'][0][4][0] + 'px',
                    'top': maps[map_number]['positions'][0][4][1] + 'px',
                    'width': maps[map_number]['positions'][0][4][2] + 'px',
                    'height': maps[map_number]['positions'][0][4][3] + 'px'
                });
                $('#pp' + j).on('click', function() {
                    $('header').css('height', '100vh');
                    setTimeout(()=> {window.location.href = 'https://www.youtube.com/watch?v=RgGQKW-PdxI&t=1s'}, 1000);
                })
            })
        }

        break
    } else if (params['map'] == 'add-card') {
        window.location.href = '/form'
    }
}

setTimeout(()=> {
    $('header').css('height', '7em')
}, '0');

$('header h1').on('click', function() {
    $('header').css('height', '100vh');
    
    setTimeout(()=> {
        window.location.href = '../?to=grenades'
    }, 1000);
})

