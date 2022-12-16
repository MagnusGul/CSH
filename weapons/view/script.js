let urlParams = new URLSearchParams(window.location.search);
let params = {};
urlParams.forEach((p, key) => {
  params[key] = p;
});

let muffler = ['Отсутствует', 'Присутствует'];
let shotMode = ['Не автоматический', 'Полуавтоматический', 'Автоматический']

for (let i = 0; i < weapons.length; i++) {
    if (weapons[i]['class'] == params['item']) {
        $('header h1').append(weapons[i]['name']) ;
        $('title').append(weapons[i]['name']);

        $('.img img').attr('src', weapons[i]['photo']);

        $('.damage .head .armor').html(weapons[i]['damageArmorHead']);
        if ($('.damage .head .armor').html() >= 100) {
            $('.damage .head .armor').css('color', 'red')
        }
        $('.damage .head .nude').html(weapons[i]['damageNudeHead']);
        if ($('.damage .head .nude').html() >= 100) {
            $('.damage .head .nude').css('color', 'red')
        }
        $('.damage .arms-chest .armor').html(weapons[i]['damageArmorArmsChest']);
        if ($('.damage .arms-chest .armor').html() >= 100) {
            $('.damage .arms-chest .armor').css('color', 'red')
        }
        $('.damage .arms-chest .nude').html(weapons[i]['damageNudeArmsChest']);
        if ($('.damage .arms-chest .nude').html() >= 100) {
            $('.damage .arms-chest .nude').css('color', 'red')
        }
        $('.damage .stomach .armor').html(weapons[i]['damageArmorStomach']);
        if ($('.damage .stomach .armor').html() >= 100) {
            $('.damage .stomach .armor').css('color', 'red')
        }
        $('.damage .stomach .nude').html(weapons[i]['damageNudeStomach']);
        if ($('.damage .stomach .nude').html() >= 100) {
            $('.damage .stomach .nude').css('color', 'red')
        }
        $('.damage .legs .armor').html(weapons[i]['damageArmorLegs']);
        if ($('.damage .legs .armor').html() >= 100) {
            $('.damage .legs .armor').css('color', 'red')
        }
        $('.damage .legs .nude').html(weapons[i]['damageNudeLegs']);
        if ($('.damage .legs .nude').html() >= 100) {
            $('.damage .legs .nude').css('color', 'red')
        }
        
        $('.magazine').html(weapons[i]['EquipmentActive']);
        $('.stock').html(weapons[i]['EquipmentPassive']);
        
        $('.loss').html(weapons[i]['armorDamage'] + '%');

        $('.mufler').html(muffler[weapons[i]['muffler']]);

        $('.shot-mode').html(shotMode[weapons[i]['shotMode']]);
        $('.shot-speed').html(weapons[i]['shotSpeed'] + 'shots/min');
        $('.reload').html(weapons[i]['reload'] + 's');
        $('.speed').html(weapons[i]['speed'] + 'U/s, '+ Math.round(weapons[i]['speed'] / 2.54) + 'sm/s');

        $('.range').html(weapons[i]['range'] + 'm');

        $('.cost').html('$' + weapons[i]['cost']);
        $('.kill-cost').html('$' + weapons[i]['killCost']);

        if (weapons[i]['avaliable'] == 'ct') {
            $('.avaliable').html('Спецназ');
        } else if (weapons[i]['avaliable'] == 't') {
            $('.avaliable').html('Террористы');
        } else {
            $('.avaliable').html('Все');
        }

        break
    }

}

setTimeout(()=> {$('header').css('height', '7em')}, '1000');

$('header h1').on('click', function() {
    $('header').css('height', '100vh');
    setTimeout(()=> {window.location.href = '../'}, 1000);
})
