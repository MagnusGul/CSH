let urlParams = new URLSearchParams(window.location.search);
let params = {};
urlParams.forEach((p, key) => {
  params[key] = p;
});

for (let i = 0; i < weapons.length; i++) {
    if (weapons[i]['class'] == params['item']) {
        // titles
        $('header h1').append(weapons[i]['name']) 
        $('title').append(weapons[i]['name'])

        //img
        $('.img img').attr('src', weapons[i]['photo'])

        // table
        $('.damage .head .armor').html(weapons[i]['damageArmorHead'])
        $('.damage .head .nude').html(weapons[i]['damageNudeHead'])
        $('.damage .arms-chest .armor').html(weapons[i]['damageArmorArmsChest'])
        $('.damage .arms-chest .nude').html(weapons[i]['damageNudeArmsChest'])
        $('.damage .stomach .armor').html(weapons[i]['damageArmorStomach'])
        $('.damage .stomach .nude').html(weapons[i]['damageNudeStomach'])
        $('.damage .legs .armor').html(weapons[i]['damageArmorLegs'])
        $('.damage .legs .nude').html(weapons[i]['damageNudeLegs'])
        
        // equepment
        break
    }

}

setTimeout(()=> {$('header').css('height', '7em')}, '1000');

$('header h1').on('click', function() {
    $('header').css('height', '100vh');
    setTimeout(()=> {window.location.href = '/'}, 1000);
})
