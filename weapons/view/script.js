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
        $('.damage .head .nude').html(weapons[i]['damageNudeHead']);
        $('.damage .arms-chest .armor').html(weapons[i]['damageArmorArmsChest']);
        $('.damage .arms-chest .nude').html(weapons[i]['damageNudeArmsChest']);
        $('.damage .stomach .armor').html(weapons[i]['damageArmorStomach']);
        $('.damage .stomach .nude').html(weapons[i]['damageNudeStomach']);
        $('.damage .legs .armor').html(weapons[i]['damageArmorLegs']);
        $('.damage .legs .nude').html(weapons[i]['damageNudeLegs']);
        
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
