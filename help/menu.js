switch (command) {
	case 'allmenu':
	gambar = fs.readFileSync('./Ndyie/Ndy.jpg')
                   timestamp = speed();
				latensi = speed() - timestamp
              menunya = 
`Hi ${pushname}, ${tampilUcapan}✨

━━━━━ 𝗔𝗟𝗟 𝗠𝗘𝗡𝗨 ━━━━━

╭─❒ 「 Bot Info 」 ❒
├ Nama Bot : ${botname}
├ Nama Owner : ${ownername}
├ Prefix : Multi Prefix
├ Nomor Owner : ${owner.split('@')[0]}
├ Runtime : ${runtime(process.uptime())}
├ Language : Javascript & Nodejs
├ Totan Pengguna : ${pendaftar.length}
├ Speed : ${latensi.toFixed(4)} second
└❏
╭─❒ 「 User Info 」 ❒
├ Status : ${isOwner ? 'Owner' : 'User'}
├ Nama User : ${pushname}
├ Nomor User : ${sender.split('@')[0]}
└❏

┏━⬣「 Group Menu 」⬣
┃ ⬡ ${prefix}antilink
┃ ⬡ ${prefix}welcome
┃ ⬡ ${prefix}antivirtex
┃ ⬡ ${prefix}adavirtex
┃ ⬡ ${prefix}group
┃ ⬡ ${prefix}linkgrup
┃ ⬡ ${prefix}promote
┃ ⬡ ${prefix}demote
┃ ⬡ ${prefix}add
┃ ⬡ ${prefix}kick
┃ ⬡ ${prefix}setpp
┃ ⬡ ${prefix}setdesc
┃ ⬡ ${prefix}setname
┃ ⬡ ${prefix}hidetag
┃⬡ ${prefix}grupbokep
┗━━━━━━━━⬣

┏━⬣「 Sticker Menu 」⬣
┃ ⬡ ${prefix}attp
┃ ⬡ ${prefix}toimg
┃ ⬡ ${prefix}sticker
┃ ⬡ ${prefix}tomp3
┃ ⬡ ${prefix}tovideo
┃⬡ ${prefix}love
┗━━━━━━━━⬣
	
┏━⬣「 Owner Menu 」⬣
┃ ⬡ ${prefix}owner
┃ ⬡ ${prefix}sewabot
┃ ⬡ ${prefix}bc
┃ ⬡ ${prefix}report
┃⬡ ${prefix}aoa
┃⬡ ${prefix}yt
┗━━━━━━━━⬣

┏━━⬣ Gc Anime ⬣
┃⬡ ${prefix}gcloli
┃⬡ ${prefix}gcwibunime
┃⬡ ${prefix}animenover
┃⬡ ${prefix}animelov
┃⬡ ${prefix}animejapan
┗━━━━━━━━⬣

┏━━⬣ War Menu ⬣
┃⬡ ${prefix}virtex1
┃⬡ ${prefix}virtex2
┃⬡ ${prefix}virtex3
┃⬡ ${prefix}virtex4
┃⬡ ${prefix}virtex5
┃⬡ ${prefix}virtex6
┃⬡ ${prefix}virtex7
┃⬡ ${prefix}virtex8
┃⬡ ${prefix}virtex9
┃⬡ ${prefix}virtex10
┗━━━━━━━━⬣

┏━━⬣ Jb Menu ⬣
┃⬡ ${prefix}rdp
┃⬡ ${prefix}polig
┃⬡ ${prefix}suntiktiktok
┃⬡ ${prefix}logo
┃⬡ ${prefix}harting
┃⬡ ${prefix}jasher
┃⬡ ${prefix}ownertag
┃⬡ ${prefix}buysc
┃⬡ ${prefix}sewa
┃⬡ ${prefix}bot
┗━━━━━━━━⬣

┏━━⬣ Nulis Menu ⬣
┃⬡ ${prefix}nuliskanan
┃⬡ ${prefix}nuliskiri
┃⬡ ${prefix}foliokanan
┃⬡ ${prefix}foliokiri
┗━━━━━━━━⬣`
teks =
`Jan Jual Sc Ini Ngetod`
but = [
          { buttonId: `${prefix}infobot`, buttonText: { displayText: 'INFO' }, type: 1 },
          { buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER' }, type: 1 }
        ]
        sendButLocation(from, menunya, teks, gambar, but)
break
//━━━━━━━━━━━━━━━[ Simple Menu ]━━━━━━━━━━━━━━━━━//
case 'menu':
timestamp = speed();
latensi = speed() - timestamp
teks = `Hai Kak ${pushname}
┏━  「 Menu 」
┃    ┃
┃ 1 ┃ ${prefix}grupmenu
┃    ┃
┃ 2 ┃ ${prefix}stikermenu
┃    ┃
┃ 3 ┃ ${prefix}ownermenu
┃    ┃
┃ 4 ┃ ${prefix}gcanime
┃    ┃
┃ 5 ┃ ${prefix}warmenu
┃    ┃
┃ 6 ┃ ${prefix}jbmenu
┃    ┃
┃ 7 ┃ ${prefix}nulismenu
┗━━━━━━━━⬣`
but = [
          { buttonId: `${prefix}allmenu`, buttonText: { displayText: 'AllMenu' }, type: 1 },
          { buttonId: `${prefix}buysc`, buttonText: { displayText: 'Sc' }, type: 1 }
        ]
        sendButton(from, teks, '©Created : Ndyie Botz', but, mek)
break

case 'grupmenu':
timestamp = speed();
latensi = speed() - timestamp
teks = `Hai Kak ${pushname}
┏━⬣「 Group Menu 」⬣
┃ ⬡ ${prefix}antilink
┃ ⬡ ${prefix}welcome
┃ ⬡ ${prefix}antivirtex
┃ ⬡ ${prefix}adavirtex
┃ ⬡ ${prefix}group
┃ ⬡ ${prefix}linkgrup
┃ ⬡ ${prefix}promote
┃ ⬡ ${prefix}demote
┃ ⬡ ${prefix}add
┃ ⬡ ${prefix}kick
┃ ⬡ ${prefix}setpp
┃ ⬡ ${prefix}setdesc
┃ ⬡ ${prefix}setname
┃ ⬡ ${prefix}hidetag
┃⬡ ${prefix}grupbokep
┗━━━━━━━━⬣`
but = [
          { buttonId: `${prefix}allmenu`, buttonText: { displayText: 'AllMenu' }, type: 1 },
          { buttonId: `${prefix}buysc`, buttonText: { displayText: 'Sc' }, type: 1 }
        ]
        sendButton(from, teks, '©Created : Ndyie Botz', but, mek)
break

case 'stikermenu':
timestamp = speed();
latensi = speed() - timestamp
teks = `Hai Kak ${pushname}
┏━⬣「 Sticker Menu 」⬣
┃ ⬡ ${prefix}attp
┃ ⬡ ${prefix}toimg
┃ ⬡ ${prefix}sticker
┃ ⬡ ${prefix}tomp3
┃ ⬡ ${prefix}tovideo
┃⬡ ${prefix}love
┗━━━━━━━━⬣`
but = [
          { buttonId: `${prefix}allmenu`, buttonText: { displayText: 'AllMenu' }, type: 1 },
          { buttonId: `${prefix}buysc`, buttonText: { displayText: 'Sc' }, type: 1 }
        ]
        sendButton(from, teks, '©Created : Ndyie Botz', but, mek)
break

case 'ownermenu':
timestamp = speed();
latensi = speed() - timestamp
teks = `Hai Kak ${pushname}
┏━⬣「 Owner Menu 」⬣
┃ ⬡ ${prefix}owner
┃ ⬡ ${prefix}sewabot
┃ ⬡ ${prefix}bc
┃ ⬡ ${prefix}report
┃⬡ ${prefix}aoa
┃⬡ ${prefix}yt
┗━━━━━━━━⬣`
but = [
          { buttonId: `${prefix}allmenu`, buttonText: { displayText: 'AllMenu' }, type: 1 },
          { buttonId: `${prefix}buysc`, buttonText: { displayText: 'Sc' }, type: 1 }
        ]
        sendButton(from, teks, '©Created : Ndyie Botz', but, mek)
break

case 'gcanime':
timestamp = speed();
latensi = speed() - timestamp
teks = `Hai Kak ${pushname}
┏━━⬣ Gc Anime ⬣
┃⬡ ${prefix}gcloli
┃⬡ ${prefix}gcwibunime
┃⬡ ${prefix}animenover
┃⬡ ${prefix}animelov
┃⬡ ${prefix}animejapan
┗━━━━━━━━⬣`
but = [
          { buttonId: `${prefix}allmenu`, buttonText: { displayText: 'AllMenu' }, type: 1 },
          { buttonId: `${prefix}buysc`, buttonText: { displayText: 'Sc' }, type: 1 }
        ]
        sendButton(from, teks, '©Created : Ndyie Botz', but, mek)
break

case 'warmenu':
timestamp = speed();
latensi = speed() - timestamp
teks = `Hai Kak ${pushname}
┏━━⬣ War Menu ⬣
┃⬡ ${prefix}virtex1
┃⬡ ${prefix}virtex2
┃⬡ ${prefix}virtex3
┃⬡ ${prefix}virtex4
┃⬡ ${prefix}virtex5
┃⬡ ${prefix}virtex6
┃⬡ ${prefix}virtex7
┃⬡ ${prefix}virtex8
┃⬡ ${prefix}virtex9
┃⬡ ${prefix}virtex10
┗━━━━━━━━⬣`
but = [
          { buttonId: `${prefix}allmenu`, buttonText: { displayText: 'AllMenu' }, type: 1 },
          { buttonId: `${prefix}buysc`, buttonText: { displayText: 'Sc' }, type: 1 }
        ]
        sendButton(from, teks, '©Created : Ndyie Botz', but, mek)
break

case 'jbmenu':
timestamp = speed();
latensi = speed() - timestamp
teks = `Hai Kak ${pushname}
┏━━⬣ Jb Menu ⬣
┃⬡ ${prefix}rdp
┃⬡ ${prefix}polig
┃⬡ ${prefix}suntiktiktok
┃⬡ ${prefix}logo
┃⬡ ${prefix}harting
┃⬡ ${prefix}jasher
┃⬡ ${prefix}ownertag
┃⬡ ${prefix}buysc
┃⬡ ${prefix}sewa
┃⬡ ${prefix}bot
┗━━━━━━━━⬣`
but = [
          { buttonId: `${prefix}allmenu`, buttonText: { displayText: 'AllMenu' }, type: 1 },
          { buttonId: `${prefix}buysc`, buttonText: { displayText: 'Sc' }, type: 1 }
        ]
        sendButton(from, teks, '©Created : Ndyie Botz', but, mek)
break

case 'nulismenu':
timestamp = speed();
latensi = speed() - timestamp
teks = `Hai Kak ${pushname}
┏━━⬣ Nulis Menu ⬣
┃⬡ ${prefix}nuliskanan
┃⬡ ${prefix}nuliskiri
┃⬡ ${prefix}foliokanan
┃⬡ ${prefix}foliokiri
┗━━━━━━━━⬣`
but = [
          { buttonId: `${prefix}allmenu`, buttonText: { displayText: 'AllMenu' }, type: 1 },
          { buttonId: `${prefix}buysc`, buttonText: { displayText: 'Sc' }, type: 1 }
        ]
        sendButton(from, teks, '©Created : Ndyie Botz', but, mek)
break