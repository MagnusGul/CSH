// maps cards settings
let maps = [
    { class: 'mirage', 
        name: 'Mirage', 
        siteBg: 'https://cdn.discordapp.com/attachments/1045783386192629822/1045783713377685514/Mirage-jungle.jpg', 
        cardBg: 'https://cdn.discordapp.com/attachments/1045783386192629822/1049687726355644527/mirage_mini-map.jpg', 
        icon: 'https://cdn.discordapp.com/attachments/1045783386192629822/1050024874833367090/mirage_1.png',
        positions: [
            ['30', '40', '100', '200'],
        ]
    }, 
    { class: 'inferno',
        name: 'Inferno', 
        siteBg: 'https://cdn.discordapp.com/attachments/1045783386192629822/1049272501492011048/20221204165912_1.jpg', 
        cardBg: 'https://cdn.discordapp.com/attachments/1045783386192629822/1050021147258929192/Inferno_map.jpg', 
        icon: 'https://cdn.discordapp.com/attachments/1045783386192629822/1050022559632068748/Inferno_logojpg.png',
        positions: [
            ['30', '40', '100', '200'],
        ],
    },
    { class: 'dustII',
        name: 'Dust II', 
        siteBg: 'https://cdn.discordapp.com/attachments/1045783386192629822/1049272501215174676/20221204164853_1.jpg', 
        cardBg: 'https://cdn.discordapp.com/attachments/1045783386192629822/1050027401347870770/image1-3.png', 
        icon: 'https://cdn.discordapp.com/attachments/1045783386192629822/1050027118978940928/dust_2.png',
        positions: [
            ['264', '120', '230', '150', ['95', '320', '30', '90']],
        ]
    },
    { class: 'overpass',
        name: 'Overpass', 
        siteBg: 'https://cdn.discordapp.com/attachments/1045783386192629822/1049272500145631294/20221204170206_1.jpg', 
        cardBg: 'https://cdn.discordapp.com/attachments/1045783386192629822/1052226439749054484/2d52ae386b175aeb.png', 
        icon: 'https://cdn.discordapp.com/attachments/1045783386192629822/1052225711462678528/62fae6131fae1b66.png',
        positions: [
            ['30', '40', '200', '200'],
        ]
    },
    { class: 'nuke',
        name: 'Nuke', 
        siteBg: 'https://cdn.discordapp.com/attachments/1045783386192629822/1046122972672442388/nuke-air-outsite.jpg', 
        cardBg: 'https://cdn.discordapp.com/attachments/1045783386192629822/1052238362137874453/1547327054_de_nuke.png', 
        icon: 'https://cdn.discordapp.com/attachments/1045783386192629822/1052228472782733392/nuke.png',
        positions: [
            ['30', '40', '100', '200'],
        ]
    },
    { class: 'vertigo',
        name: 'Vertigo', 
        siteBg: 'https://cdn.discordapp.com/attachments/1045783386192629822/1049272500854476821/20221204170431_1.jpg', 
        cardBg: 'https://cdn.discordapp.com/attachments/1045783386192629822/1052230262722924565/pozii-na-karte-Vertigo.png', 
        icon: 'https://cdn.discordapp.com/attachments/1045783386192629822/1052230288194936832/vertigo.png',
        positions: [
            ['30', '40', '100', '200'],
        ]
    },
    { class: 'ancient',
        name: 'Ancient', 
        siteBg: 'https://cdn.discordapp.com/attachments/1045783386192629822/1049285928964853821/20221205141519_1.jpg', 
        cardBg: 'https://cdn.discordapp.com/attachments/1045783386192629822/1052240184701374525/ANCIENT_RU.png', 
        icon: 'https://cdn.discordapp.com/attachments/1045783386192629822/1052239886146605136/512.png',
        positions: [
            ['30', '40', '100', '200'],
        ]
    },
    { class: 'train',
        name: 'Train', 
        siteBg: 'https://cdn.discordapp.com/attachments/1045783386192629822/1049285929904381992/20221205142017_1.jpg', 
        cardBg: 'https://cdn.discordapp.com/attachments/1045783386192629822/1052242700717543574/1482546161_train-eng.png', 
        icon: 'https://cdn.discordapp.com/attachments/1045783386192629822/1052242241789374514/4d937a301b0ecd99.png',
        positions: [
            ['30', '40', '100', '200'],
        ]
    },
    { class: 'cache',
        name: 'Cache', 
        siteBg: 'https://cdn.discordapp.com/attachments/1045783386192629822/1049285930260893796/20221205142247_1.jpg', 
        cardBg: 'https://cdn.discordapp.com/attachments/1045783386192629822/1052244929700704318/6E721D6C15AB376CF13AB3C19309D390166AE268.png', 
        icon: 'https://cdn.discordapp.com/attachments/1045783386192629822/1052244250634489917/cache.png',
        positions: [
            ['30', '40', '100', '200'],
        ]
    },
    { class: 'office',
        name: 'Office', 
        siteBg: 'https://cdn.discordapp.com/attachments/1045783386192629822/1049287516521508974/Office.webp', 
        cardBg: 'https://cdn.discordapp.com/attachments/1045783386192629822/1052247614579552407/1482546105_cs_office-eng.png', 
        icon: 'https://cdn.discordapp.com/attachments/1045783386192629822/1052247311536893962/office.png',
        positions: [
            ['30', '40', '100', '200'],
        ]
    },
    { class: 'anubis',
        name: 'Anubis', 
        siteBg: 'https://cdn.discordapp.com/attachments/1045783386192629822/1049285929346551828/20221205141800_1.jpg', 
        cardBg: 'https://cdn.discordapp.com/attachments/1045783386192629822/1052249329408147506/c7e5935bf7c922501535c19862272de4.png', 
        icon: 'https://cdn.discordapp.com/attachments/1045783386192629822/1052251106618658867/anbis.png',
        positions: [
            ['30', '40', '100', '200'],
        ]
    },
    { class: 'tuscan',
        name: 'Tuscan', 
        siteBg: 'https://cdn.discordapp.com/attachments/1045783386192629822/1049285928599953509/20221205142503_1.jpg', 
        cardBg: '', 
        icon: 'https://cdn.discordapp.com/attachments/1045783386192629822/1053290030338162689/Tuscan.png',
        positions: [
            ['30', '40', '100', '200'],
        ]
    },
    { class: 'brach',
        name: 'Breach', 
        siteBg: 'https://cdn.discordapp.com/attachments/1045783386192629822/1049332866548510820/breach_csgo.jpg', 
        cardBg: '', 
        icon: 'https://cdn.discordapp.com/attachments/1045783386192629822/1053290030682099752/Breach.png',
        positions: [
            ['30', '40', '100', '200'],
        ]
    },
    { class: 'agency',
        name: 'Agensy', 
        siteBg: 'https://cdn.discordapp.com/attachments/1045783386192629822/1049333317708828702/Cs_agency_thumbnail.webp', 
        cardBg: 'https://cdn.discordapp.com/attachments/1045783386192629822/1052252153336574003/8_counter-strike-global-offensive-csgo-csgo-maps-info-steamlists-com.png', 
        icon: 'https://cdn.discordapp.com/attachments/1045783386192629822/1052251971056316448/latest.png',
        positions: [
            ['30', '40', '100', '200'],
        ]
    },
    { class: 'add-card',
        name: 'Добавить карту', 
        siteBg: 'https://cdn.discordapp.com/attachments/1045783386192629822/1053275542281007174/1616979018_58-p-temno-korichnevii-fon-59.jpg', 
        cardBg: 'https://cdn.discordapp.com/attachments/1045783386192629822/1053275542281007174/1616979018_58-p-temno-korichnevii-fon-59.jpg', 
        icon: 'https://cdn.discordapp.com/attachments/1045783386192629822/1053276521080561724/addcard.png',
        positions: [
            ['30', '40', '100', '200'],
        ]
    },
];