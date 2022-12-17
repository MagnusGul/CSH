/* add object like: {class: '*class-name*', name: '*visible-name*', group: '*object type*', photo: '*bg-img*...'}
    group: can be only those indicated in weapons/index.html in section classe
*/

let weapons = [
    // pistols 
    {class: 'usp-s', 
        name: 'USP-S', 
        group: 'pistols', 
        photo: 'https://cdn.discordapp.com/attachments/1045783386192629822/1053623005470801960/342fb9874010057d.png',
        damageArmorHead: '70',
        damageArmorArmsChest: '17',
        damageArmorStomach: '22',
        damageArmorLegs: '26',
        damageNudeHead: '120',
        damageNudeArmsChest: '34',
        damageNudeStomach: '43',
        damageNudeLegs: '26',
        EquipmentActive: '12',
        EquipmentPassive: '24',
        shotMode: '1',
        shotSpeed: '352',
        armorDamage: '50.5',
        reload: '2.2',
        muffler: '1',
        speed: '240',
        range: '29',
        sprayControl: '',
        cost: '200',
        killCost: '300',
        avaliable: 'ct',
        },
    {class: 'p2000', name: 'P2000', group: 'pistols', photo: 'https://steamuserimages-a.akamaihd.net/ugc/48738088253768367/9C07FC165347C95467DBEB38AAD26E7D80F29964/'},
    {class: 'glock-18', name: 'Glock-18', group: 'pistols', photo: 'https://steamuserimages-a.akamaihd.net/ugc/48738088253768367/9C07FC165347C95467DBEB38AAD26E7D80F29964/'},
    {class: 'p250', name: 'P250', group: 'pistols', photo: 'https://steamuserimages-a.akamaihd.net/ugc/48738088253768367/9C07FC165347C95467DBEB38AAD26E7D80F29964/'},
    {class: 'dual-berettas', name: 'Dual Berretas', group: 'pistols', photo: 'https://steamuserimages-a.akamaihd.net/ugc/48738088253768367/9C07FC165347C95467DBEB38AAD26E7D80F29964/'},
    {class: 'five-seven', name: 'Five-Seven', group: 'pistols', photo: 'https://steamuserimages-a.akamaihd.net/ugc/48738088253768367/9C07FC165347C95467DBEB38AAD26E7D80F29964/'},
    {class: 'tec-9', name: 'TEC-9', group: 'pistols', photo: 'https://steamuserimages-a.akamaihd.net/ugc/48738088253768367/9C07FC165347C95467DBEB38AAD26E7D80F29964/'},
    {class: 'cz-75auto', name: 'CZ-75 Auto', group: 'pistols', photo: 'https://steamuserimages-a.akamaihd.net/ugc/48738088253768367/9C07FC165347C95467DBEB38AAD26E7D80F29964/'},
    {class: 'deagle', name: 'Desert-Eagle', group: 'pistols', photo: 'https://steamuserimages-a.akamaihd.net/ugc/48738088253768367/9C07FC165347C95467DBEB38AAD26E7D80F29964/'},
    {class: 'r8', name: 'Revolver R8', group: 'pistols', photo: 'https://steamuserimages-a.akamaihd.net/ugc/48738088253768367/9C07FC165347C95467DBEB38AAD26E7D80F29964/'},
    // shotguns
    {class: 'nova', name: 'Nova', group: 'shotguns', photo: 'https://steamuserimages-a.akamaihd.net/ugc/48738088253768367/9C07FC165347C95467DBEB38AAD26E7D80F29964/'},
    {class: 'xm1014', name: 'XM1014', group: 'shotguns', photo: 'https://steamuserimages-a.akamaihd.net/ugc/48738088253768367/9C07FC165347C95467DBEB38AAD26E7D80F29964/'},
    {class: 'mag-7', name: 'MAG-7', group: 'shotguns', photo: 'https://steamuserimages-a.akamaihd.net/ugc/48738088253768367/9C07FC165347C95467DBEB38AAD26E7D80F29964/'},
    {class: 'saved-off', name: 'Saved-Off', group: 'shotguns', photo: 'https://steamuserimages-a.akamaihd.net/ugc/48738088253768367/9C07FC165347C95467DBEB38AAD26E7D80F29964/'},
    // smg
    {class: 'mp-9', name: 'MP-9', group: 'smg', photo: 'https://steamuserimages-a.akamaihd.net/ugc/48738088253768367/9C07FC165347C95467DBEB38AAD26E7D80F29964/'},
    {class: 'mac-10', name: 'MAC-10', group: 'smg', photo: 'https://steamuserimages-a.akamaihd.net/ugc/48738088253768367/9C07FC165347C95467DBEB38AAD26E7D80F29964/'},
    {class: 'mp-7', name: 'MP-7', group: 'smg', photo: 'https://steamuserimages-a.akamaihd.net/ugc/48738088253768367/9C07FC165347C95467DBEB38AAD26E7D80F29964/'},
    {class: 'mp-5', name: 'MP-5', group: 'smg', photo: 'https://steamuserimages-a.akamaihd.net/ugc/48738088253768367/9C07FC165347C95467DBEB38AAD26E7D80F29964/'},
    {class: 'ump', name: 'UMP', group: 'smg', photo: 'https://steamuserimages-a.akamaihd.net/ugc/48738088253768367/9C07FC165347C95467DBEB38AAD26E7D80F29964/'},
    {class: 'p90', name: 'P-90', group: 'smg', photo: 'https://steamuserimages-a.akamaihd.net/ugc/48738088253768367/9C07FC165347C95467DBEB38AAD26E7D80F29964/'},
    {class: 'pp-19-bizon', name: 'ПП-19 "Бизон"', group: 'smg', photo: 'https://steamuserimages-a.akamaihd.net/ugc/48738088253768367/9C07FC165347C95467DBEB38AAD26E7D80F29964/'},
    // rifles
    {class: 'famas', name: 'Famas', group: 'rifles', photo: 'https://steamuserimages-a.akamaihd.net/ugc/48738088253768367/9C07FC165347C95467DBEB38AAD26E7D80F29964/'},
    {class: 'galil-ar', name: 'GalilAR', group: 'rifles', photo: 'https://steamuserimages-a.akamaihd.net/ugc/48738088253768367/9C07FC165347C95467DBEB38AAD26E7D80F29964/'},
    {class: 'm4a4', name: 'M4A4', group: 'rifles', photo: 'https://steamuserimages-a.akamaihd.net/ugc/48738088253768367/9C07FC165347C95467DBEB38AAD26E7D80F29964/'},
    {class: 'm4a1-s', name: 'M4A1-S', group: 'rifles', photo: 'https://steamuserimages-a.akamaihd.net/ugc/48738088253768367/9C07FC165347C95467DBEB38AAD26E7D80F29964/'},
    {class: 'ak-47',
        name: 'AK-47', 
        group: 'rifles',
        photo: 'https://cdn.discordapp.com/attachments/1045783386192629822/1053623824450588712/ff2d3dc51d6a0bc1.png',
        damageArmorHead: '109',
        damageArmorArmsChest: '27',
        damageArmorStomach: '34',
        damageArmorLegs: '26',
        damageNudeHead: '143',
        damageNudeArmsChest: '35',
        damageNudeStomach: '44',
        damageNudeLegs: '26',
        EquipmentActive: '30',
        EquipmentPassive: '90',
        shotMode: '2',
        shotSpeed: '600 ',
        armorDamage: '77.5',
        reload: '2.5',
        muffler: '0',
        speed: '215',
        range: '24',
        sprayControl: '',
        cost: '2 700',
        killCost: '300',
        avaliable: 't',
        },
    {class: 'aug', name: 'AUG', group: 'rifles', photo: 'https://steamuserimages-a.akamaihd.net/ugc/48738088253768367/9C07FC165347C95467DBEB38AAD26E7D80F29964/'},
    {class: 'sg-553', name: 'SG-553', group: 'rifles', photo: 'https://steamuserimages-a.akamaihd.net/ugc/48738088253768367/9C07FC165347C95467DBEB38AAD26E7D80F29964/'},
    // sniper rifles
    {class: 'ssg-08', name: 'SSG-08', group: 'snipers', photo: 'https://steamuserimages-a.akamaihd.net/ugc/48738088253768367/9C07FC165347C95467DBEB38AAD26E7D80F29964/'},
    {class: 'awp', 
        name: 'AWP', 
        group: 'snipers', 
        photo: 'https://cdn.discordapp.com/attachments/1045783386192629822/1053624820438421534/9111c8008465ec6a.png',
        damageArmorHead: '448',
        damageArmorArmsChest: '112',
        damageArmorStomach: '140',
        damageArmorLegs: '86',
        damageNudeHead: '460',
        damageNudeArmsChest: '115',
        damageNudeStomach: '143',
        damageNudeLegs: '86',
        EquipmentActive: '5',
        EquipmentPassive: '30',
        shotMode: '0',
        shotSpeed: '41 ',
        armorDamage: '97.5',
        reload: '3.6',
        muffler: '0',
        speed: '200',
        range: '76',
        sprayControl: '',
        cost: '4 750',
        killCost: '100',
        avaliable: 'all',
    },
    {class: 'scar-20', name: 'SCAR-20', group: 'snipers', photo: 'https://steamuserimages-a.akamaihd.net/ugc/48738088253768367/9C07FC165347C95467DBEB38AAD26E7D80F29964/'},
    {class: 'g3sg1', name: 'G3SG1', group: 'snipers', photo: 'https://steamuserimages-a.akamaihd.net/ugc/48738088253768367/9C07FC165347C95467DBEB38AAD26E7D80F29964/'},
    // machine guns
    {class: 'negev', name: 'Negev', group: 'machine-guns', photo: 'https://steamuserimages-a.akamaihd.net/ugc/48738088253768367/9C07FC165347C95467DBEB38AAD26E7D80F29964/'},
    {class: 'M249', name: 'M249', group: 'machine-guns', photo: 'https://steamuserimages-a.akamaihd.net/ugc/48738088253768367/9C07FC165347C95467DBEB38AAD26E7D80F29964/'},
    // grenades
    {class: 'he', name: 'Ручная', group: 'grenades', photo: 'https://steamuserimages-a.akamaihd.net/ugc/48738088253768367/9C07FC165347C95467DBEB38AAD26E7D80F29964/'},
    {class: 'flash', name: 'Световая', group: 'grenades', photo: 'https://steamuserimages-a.akamaihd.net/ugc/48738088253768367/9C07FC165347C95467DBEB38AAD26E7D80F29964/'},
    {class: 'smoke', name: 'Дымовая', group: 'grenades', photo: 'https://steamuserimages-a.akamaihd.net/ugc/48738088253768367/9C07FC165347C95467DBEB38AAD26E7D80F29964/'},
    {class: 'fire', name: 'Огненная', group: 'grenades', photo: 'https://steamuserimages-a.akamaihd.net/ugc/48738088253768367/9C07FC165347C95467DBEB38AAD26E7D80F29964/'},
    {class: 'molotov', name: 'Коктейль Молотова', group: 'grenades', photo: 'https://steamuserimages-a.akamaihd.net/ugc/48738088253768367/9C07FC165347C95467DBEB38AAD26E7D80F29964/'},
    {class: 'decoy', name: 'Ложная', group: 'grenades', photo: 'https://steamuserimages-a.akamaihd.net/ugc/48738088253768367/9C07FC165347C95467DBEB38AAD26E7D80F29964/'},
];