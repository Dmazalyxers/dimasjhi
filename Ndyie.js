// Spesial Ultah Bree
const { fetchJosn, fetchText } = require('./lib/fetcher')
const { color, bgcolor } = require('./lib/color')
const { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')

const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
const fs = require("fs")
const axios = require('axios')
const speed = require("performance-now")
const util = require('util')
const crypto = require('crypto')
const request = require('request')
const { exec, spawn } = require('child_process')
const fetch = require('node-fetch')
const moment = require('moment-timezone')
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')

//━━━━━━━━━━━━━━━[ DATABASE ]━━━━━━━━━━━━━━━━━//

let _antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
let _antivirtex = JSON.parse(fs.readFileSync('./database/antivirtex.json'))
let setting = JSON.parse(fs.readFileSync('./setting.json'))
let pendaftar = JSON.parse(fs.readFileSync('./database/user.json'))

//━━━━━━━━━━━━━━━[ SETTING ]━━━━━━━━━━━━━━━━━//

owner = setting.OwnerNumber
botname = setting.BotName
zerokey = setting.ZeroKey
ownername = setting.OwnerName

//━━━━━━━━━━━━━━━[ MODUL EXPORTS ]━━━━━━━━━━━━━━━━━//

module.exports = Ndyie = async (Ndyie, mek, _welkom) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
        	mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { text, extendedText, contact, contactsArray, groupInviteMessage, listMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
        const type = Object.keys(mek.message)[0]        
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '-'          	
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const Verived = "0@s.whatsapp.net"
		const txt = mek.message.conversation
		const botNumber = Ndyie.user.jid
		const ownerNumber = [`${owner}@s.whatsapp.net`, `6283818744065@s.whatsapp.net`]
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		const totalchat = await Ndyie.chats.all()
		const groupMetadata = isGroup ? await Ndyie.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const conts = mek.key.fromMe ? Ndyie.user.jid : Ndyie.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? Ndyie.user.name : conts.notify || conts.vname || conts.name || '-'
        
		const isAntiLink = isGroup ? _antilink.includes(from) : false
		const isWelkom = isGroup ? _welkom.includes(from) : false
		const isAntiVirtex = isGroup ? _antivirtex.includes(from) : false
		const isOwner = ownerNumber.includes(sender)
		const isUser = pendaftar.includes(sender)
		const isMybot = isOwner || mek.key.fromMe
		
//━━━━━━━━━━━━━━━[ CONNECTION 1 ]━━━━━━━━━━━━━━━━━//

		mess = {
			wait: 'Sabar Lagi Proses Tod...!',
			success: 'Done Jangan Lupa Subscribe Ndyie Botz',
			error: {
				stick: 'Gagal Convert Gambar To Sticker...Coba Lagi !',
				Iv: 'Linknya Error Tod !'
			},
			only: {
				admin: 'Kusus Admin Tod !',
				group: 'Khusus Group Tod !'
			}
		}
		faketeks = 'Ndyie Botz'
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }
        const reply = (teks) => {
            Ndyie.sendMessage(from, teks, text, {quoted:mek})
        }
        const sendMess = (hehe, teks) => {
            Ndyie.sendMessage(hehe, teks, text)
        }
        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? Ndyie.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : Ndyie.sendMessage(from, teks.trim(), extendedText, { quoted: ftrol, contextInfo: { "mentionedJid": memberr } })
        }
        const zero = fs.readFileSync ('./Ndyie/Ndyi.jpg')
        const costum = (pesan, tipe, target, target2) => {
			Ndyie.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
		}
		const runtime = function (seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Jam, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Menit, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
};
var ase = new Date();
                        var jamss = ase.getHours();
                         switch(jamss){
                case 0: jamss = "Jangan gadang kak"; break;
                case 1: jamss = "Jangan gadang kak"; break;
                case 2: jamss = "Jangan gadang kak"; break;
                case 3: jamss = "Jangan gadang kak"; break;
                case 4: jamss = "Jangan lupa sholat Subuh kak"; break;
                case 5: jamss = "Selamat pagi"; break;
                case 6: jamss = "Selamat pagi"; break;
                case 7: jamss = "Selamat pagi"; break;
                case 8: jamss = "Selamat pagi"; break;
                case 9: jamss = "Selamat pagi"; break;
                case 10: jamss = "Selamat pagi"; break;
                case 11: jamss = "Selamat siang"; break;
                case 12: jamss = "Jangan lupa sholat Zuhur kak"; break;
                case 13: jamss = "Selamat siang"; break;
                case 14: jamss = "Selamat sore"; break;
                case 15: jamss = "Jangan lupa sholat Ashar kak"; break;
                case 16: jamss = "Selamat sore"; break;
                case 17: jamss = "Selamat sore"; break;
                case 18: jamss = "Selamat malam"; break;
                case 19: jamss = "Jangan lupa sholat Isya kak"; break;
                case 20: jamss = "Selamat malam"; break;
                case 21: jamss = "Selamat malam"; break;
                case 22: jamss = "Selamat malam"; break;
                case 23: jamss = "Selamat malam"; break;
            }
            var tampilUcapan = "" + jamss;
        
//━━━━━━━━━━━━━━━[ BUTTON ]━━━━━━━━━━━━━━━━━//

        const sendButton = async (from, context, fortext, but, mek) => {
            buttonMessages = {
                contentText: context,
                footerText: fortext,
                buttons: but,
                headerType: 1
            }
            Ndyie.sendMessage(from, buttonMessages, buttonsMessage, {
                quoted: ftrol
            })
        }
        const sendButImage = async (from, context, fortext, img, but, mek) => {
            jadinya = await Ndyie.prepareMessage(from, img, image)
            buttonMessagesI = {
                imageMessage: jadinya.message.imageMessage,
                contentText: context,
                footerText: fortext,
                buttons: but,
                headerType: 4
            }
            Ndyie.sendMessage(from, buttonMessagesI, buttonsMessage, {
                quoted: ftrol,
            })
        }
        async function sendButLocation(id, text1, desc1, gam1, but = [], options = {}) {
            const buttonMessages = { locationMessage: { jpegThumbnail: gam1 }, contentText: text1, footerText: desc1, buttons: but, headerType: 6 }
            return Ndyie.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
        }

//━━━━━━━━━━━━━━━[ FAKE FAKEAN ]━━━━━━━━━━━━━━━━━//
        const fakestatus = (teks) => {
            Ndyie.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": faketeks,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./Ndyie/Ndy.jpg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        Ndyie.chatRead(from, "read")
        const fakegroup = (teks) => {
            Ndyie.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": faketeks,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./Ndyie/Ndy.jpg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const ftrol = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 123,
                            status: 1,
                            surface : 1,
                            message: `SUBSCRIBE Ndyie Botz`, 
                            orderTitle: `SUBSCRIBE Ndyie Botz`,
                            thumbnail: zero, //Gambarnye
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }
        
//━━━━━━━━━━━━━━━[ CONNECTION 2 ]━━━━━━━━━━━━━━━━━//

        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        Ndyie.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    Ndyie.sendMessage(to, media, type, { quoted: ftrol, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }   
            if (budy.includes("https://chat.whatsapp.com/")) {
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
reply(` *「 GROUP LINK DETECTOR *\nKamu mengirimkan link grup chat, maaf kamu di kick dari grup :(`)
setTimeout(() => {
Ndyie.groupRemove(from, [kic]).catch((e) => { reply(`BOT HARUS JADI ADMIN`) })
}, 0)
}

		if (budy.length > 3500) {
if (!isGroup) return
if (!isAntiVirtex) return
if (isGroupAdmins) return
reply('Tandai telah dibaca\n'.repeat(300))
reply(`「 *VIRTEX DETECTOR* \n\nKamu mengirimkan virtex, maaf kamu di kick dari group :(`)
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
Ndyie.groupRemove(from, [sender])
}     
if (isCmd && !isUser){
          pendaftar.push(sender)
          fs.writeFileSync('./database/user.json', JSON.stringify(pendaftar, null, 2))
        }

//━━━━━━━━━━━━━━━[ CONNECTION 3 ]━━━━━━━━━━━━━━━━━//

		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
      	if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      	//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      	//if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
//━━━━━━━━━━━━━━━[ Y ]━━━━━━━━━━━━━━━━━//
switch (command) {
	case 'allmenu':
	case 'ndi':
	gambar = fs.readFileSync('./Ndyie/Ndy.jpg')
                   timestamp = speed();
				latensi = speed() - timestamp
              menunya = `━━━━━ 𝗔𝗟𝗟 𝗠𝗘𝗡𝗨 ━━━━━

 ┏━━⬣ 🄹🄰🄼
 ┃❏ ${moment().utcOffset('+0700').format('HH:mm')} *🅆🄸🄱*
 ┃❏ ${moment().utcOffset('+0800').format('HH:mm')} *🅆🄸🅃🄰*
 ┃❏ ${moment().utcOffset('+0900').format('HH:mm')} *🅆🄸🅃*
 ┗━━⬣
 
─────────────────────
Hi ${pushname}, ${tampilUcapan}
─────────────────────

┏━━⬣ 𝙄𝙉𝙁𝙊
┃❏ Nama User : ${pushname}
┃❏ Nama Bot : ${botname}
┃❏ Nama Owner : ${ownername}
┃❏ Prefix : 「 ${prefix} 
┃❏ Total Pengguna : ${pendaftar.length}
┃❏ Runtime : ${runtime(process.uptime())}
┃❏ Speed : ${latensi.toFixed(4)} second
┃❏ Total Menu : 350
┗━━⬣

┏━⬣ Group Menu ⬣
┃ ♫│ ${prefix}antilink
┃ ♫│ ${prefix}welcome
┃ ♫│ ${prefix}antivirtex
┃ ♫│ ${prefix}adavirtex
┃ ♫│ ${prefix}group
┃ ♫│ ${prefix}linkgrup
┃ ♫│ ${prefix}promote
┃ ♫│ ${prefix}demote
┃ ♫│ ${prefix}add
┃ ♫│ ${prefix}kick
┃ ♫│ ${prefix}setpp
┃ ♫│ ${prefix}setdesc
┃ ♫│ ${prefix}setname
┃ ♫│ ${prefix}hidetag
┃ ♫│ ${prefix}grupbokep
┗━━━━━━━━⬣

┏━⬣ Sticker Menu ⬣
┃ ♫│ ${prefix}attp
┃ ♫│ ${prefix}toimg
┃ ♫│ ${prefix}sticker
┃ ♫│ ${prefix}tomp3
┃ ♫│ ${prefix}tovideo
┃ ♫│ ${prefix}love
┗━━━━━━━━⬣
	
┏━⬣ Owner Menu ⬣
┃ ♫│ ${prefix}owner
┃ ♫│ ${prefix}sewabot
┃ ♫│ ${prefix}bc
┃ ♫│ ${prefix}report
┃ ♫│ ${prefix}yt
┗━━━━━━━━⬣

┏━━⬣ Gc Anime ⬣
┃ ♫│ ${prefix}gcloli
┃ ♫│ ${prefix}gcwibunime
┃ ♫│ ${prefix}animenover
┃ ♫│ ${prefix}animelov
┃ ♫│ ${prefix}animejapan
┗━━━━━━━━⬣

┏━━⬣ War Menu ⬣
┃ ♫│ ${prefix}virtex1
┃ ♫│ ${prefix}virtex2
┃ ♫│ ${prefix}virtex3
┃ ♫│ ${prefix}virtex4
┃ ♫│ ${prefix}virtex5
┃ ♫│ ${prefix}virtex6
┃ ♫│ ${prefix}virtex7
┃ ♫│ ${prefix}virtex8
┃ ♫│ ${prefix}virtex9
┃ ♫│ ${prefix}virtex10
┗━━━━━━━━⬣

┏━━⬣ Jb Menu ⬣
┃ ♫│ ${prefix}rdp
┃ ♫│ ${prefix}polig
┃ ♫│ ${prefix}suntiktiktok
┃ ♫│ ${prefix}logo
┃ ♫│ ${prefix}harting
┃ ♫│ ${prefix}jasher
┃ ♫│ ${prefix}ownertag
┃ ♫│ ${prefix}buysc
┃ ♫│ ${prefix}sewa
┃ ♫│ ${prefix}bot
┃ ♫│ ${prefix}dana
┃ ♫│ ${prefix}gopay
┃ ♫│ ${prefix}ovo
┃ ♫│ ${prefix}tq
┃ ♫│ ${prefix}listdiamond
┃ ♫│ ${prefix}dmml
┃ ♫│ ${prefix}dmff
┃ ♫│ ${prefix}ucpubg
┃ ♫│ ${prefix}codm
┃ ♫│ ${prefix}sewabot
┃ ♫│ ${prefix}permanen
┃ ♫│ ${prefix}sebulan
┗━━━━━━━━⬣

┏━━⬣ Nulis Menu ⬣
┃ ♫│ ${prefix}nuliskanan
┃ ♫│ ${prefix}nuliskiri
┃ ♫│ ${prefix}foliokanan
┃ ♫│ ${prefix}foliokiri
┗━━━━━━━━⬣

┏━━⬣ Bokep Menu ⬣
┃ ♫│ ${prefix}bokep1
┃ ♫│ ${prefix}bokep2
┃ ♫│ ${prefix}bokep3
┃ ♫│ ${prefix}bokep4
┃ ♫│ ${prefix}bokep5
┃ ♫│ ${prefix}bokep6
┃ ♫│ ${prefix}bokep7
┃ ♫│ ${prefix}bokep8
┃ ♫│ ${prefix}bokep9
┃ ♫│ ${prefix}bokep10
┃ ♫│ ${prefix}bokep11
┃ ♫│ ${prefix}bokep12
┃ ♫│ ${prefix}bokep13
┃ ♫│ ${prefix}bokep14
┃ ♫│ ${prefix}bokep15
┃ ♫│ ${prefix}bokep16
┃ ♫│ ${prefix}bokep17
┃ ♫│ ${prefix}bokep18
┃ ♫│ ${prefix}bokep19
┃ ♫│ ${prefix}bokep20
┗━━━━━━━━⬣

┏━━⬣ Dosa Bree ⬣
┃ ♫│ ${prefix}dosa1
┃ ♫│ ${prefix}dosa2
┃ ♫│ ${prefix}dosa3
┃ ♫│ ${prefix}dosa4
┃ ♫│ ${prefix}dosa5
┃ ♫│ ${prefix}dosa6
┃ ♫│ ${prefix}dosa7
┃ ♫│ ${prefix}fulldosa
┗━━━━━━━━⬣

┏━━⬣ Gabut Menu ⬣
┃ ♫│ ${prefix}apakah
┃ ♫│ ${prefix}cekganteng
┃ ♫│ ${prefix}cekcantik
┃ ♫│ ${prefix}hobby
┃ ♫│ ${prefix}bisakah
┃ ♫│ ${prefix}kapankah
┃ ♫│ ${prefix}citacita
┗━━━━━━━━⬣

┏━━⬣ Asupan ⬣ 
┃ ♫│ ${prefix}asupan
┃ ♫│ ${prefix}asupancecan
┃ ♫│ ${prefix}asupanhijaber
┃ ♫│ ${prefix}asupansantuy
┃ ♫│ ${prefix}asupanukhti
┃ ♫│ ${prefix}asupanbocil
┃ ♫│ ${prefix}asupanghea
┃ ♫│ ${prefix}asupanrika
┗━━━━━━━━⬣

┏━━⬣ Meme Menu ⬣
┃ ♫│ ${prefix}randommeme
┃ ♫│ ${prefix}randommemeindo
┃ ♫│ ${prefix}randomdarkjoke
┃ ♫│ ${prefix}aoa
┗━━━━━━━━⬣

┏━━⬣ Gc Bot Wea ⬣
┃ ♫│ ${prefix}gc1
┃ ♫│ ${prefix}gc2
┃ ♫│ ${prefix}gc3
┃ ♫│ ${prefix}gc4
┃ ♫│ ${prefix}gc5
┃ ♫│ ${prefix}gc6
┃ ♫│ ${prefix}gc7
┃ ♫│ ${prefix}gc8
┃ ♫│ ${prefix}gc9
┃ ♫│ ${prefix}gc10
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
┏━⬣「 Menu ⬣
┃ ♫│ ${prefix}grupmenu
┃ ♫│ ${prefix}gcbot
┃ ♫│ ${prefix}stikermenu
┃ ♫│ ${prefix}ownermenu
┃ ♫│ ${prefix}warmenu
┃ ♫│ ${prefix}gcanime
┃ ♫│ ${prefix}warmenu
┃ ♫│ ${prefix}jbmenu
┃ ♫│ ${prefix}nulismenu
┃ ♫│ ${prefix}bokepmenu
┃ ♫│ ${prefix}dosamenu
┃ ♫│ ${prefix}gabutmenu
┃ ♫│ ${prefix}menuasupan
┃ ♫│ ${prefix}mememenu
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
┏━⬣「 Group Menu ⬣
┃ ♫│ ${prefix}antilink
┃ ♫│ ${prefix}welcome
┃ ♫│ ${prefix}antivirtex
┃ ♫│ ${prefix}adavirtex
┃ ♫│ ${prefix}group
┃ ♫│ ${prefix}linkgrup
┃ ♫│ ${prefix}promote
┃ ♫│ ${prefix}demote
┃ ♫│ ${prefix}add
┃ ♫│ ${prefix}kick
┃ ♫│ ${prefix}setpp
┃ ♫│ ${prefix}setdesc
┃ ♫│ ${prefix}setname
┃ ♫│ ${prefix}hidetag
┃ ♫│ ${prefix}grupbokep
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
┏━⬣「 Sticker Menu ⬣
┃ ♫│ ${prefix}attp
┃ ♫│ ${prefix}toimg
┃ ♫│ ${prefix}sticker
┃ ♫│ ${prefix}tomp3
┃ ♫│ ${prefix}tovideo
┃ ♫│ ${prefix}love
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
┏━⬣「 Owner Menu ⬣
┃ ♫│ ${prefix}owner
┃ ♫│ ${prefix}sewabot
┃ ♫│ ${prefix}bc
┃ ♫│ ${prefix}report
┃ ♫│ ${prefix}aoa
┃ ♫│ ${prefix}yt
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
┃ ♫│ ${prefix}gcloli
┃ ♫│ ${prefix}gcwibunime
┃ ♫│ ${prefix}animenover
┃ ♫│ ${prefix}animelov
┃ ♫│ ${prefix}animejapan
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
┃ ♫│ ${prefix}virtex1
┃ ♫│ ${prefix}virtex2
┃ ♫│ ${prefix}virtex3
┃ ♫│ ${prefix}virtex4
┃ ♫│ ${prefix}virtex5
┃ ♫│ ${prefix}virtex6
┃ ♫│ ${prefix}virtex7
┃ ♫│ ${prefix}virtex8
┃ ♫│ ${prefix}virtex9
┃ ♫│ ${prefix}virtex10
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
┃ ♫│ ${prefix}rdp
┃ ♫│ ${prefix}polig
┃ ♫│ ${prefix}suntiktiktok
┃ ♫│ ${prefix}logo
┃ ♫│ ${prefix}harting
┃ ♫│ ${prefix}jasher
┃ ♫│ ${prefix}ownertag
┃ ♫│ ${prefix}buysc
┃ ♫│ ${prefix}sewa
┃ ♫│ ${prefix}bot
┃ ♫│ ${prefix}dana
┃ ♫│ ${prefix}gopay
┃ ♫│ ${prefix}ovo
┃ ♫│ ${prefix}tq
┃ ♫│ ${prefix}listdiamond
┃ ♫│ ${prefix}dmml
┃ ♫│ ${prefix}dmff
┃ ♫│ ${prefix}ucpubg
┃ ♫│ ${prefix}codm
┃ ♫│ ${prefix}sewabot
┃ ♫│ ${prefix}permanen
┃ ♫│ ${prefix}sebulan
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
┃ ♫│ ${prefix}nuliskanan
┃ ♫│ ${prefix}nuliskiri
┃ ♫│ ${prefix}foliokanan
┃ ♫│ ${prefix}foliokiri
┗━━━━━━━━⬣`
but = [
          { buttonId: `${prefix}allmenu`, buttonText: { displayText: 'AllMenu' }, type: 1 },
          { buttonId: `${prefix}buysc`, buttonText: { displayText: 'Sc' }, type: 1 }
        ]
        sendButton(from, teks, '©Created : Ndyie Botz', but, mek)
break

case 'bokepmenu':
timestamp = speed();
latensi = speed() - timestamp
teks = `Hai Kak ${pushname}
┏━━⬣ menu 18+ ⬣
┃ ♫│ ${prefix}bokep1
┃ ♫│ ${prefix}bokep2
┃ ♫│ ${prefix}bokep3
┃ ♫│ ${prefix}bokep4
┃ ♫│ ${prefix}bokep5
┃ ♫│ ${prefix}bokep6
┃ ♫│ ${prefix}bokep7
┃ ♫│ ${prefix}bokep8
┃ ♫│ ${prefix}bokep9
┃ ♫│ ${prefix}bokep10
┃ ♫│ ${prefix}bokep11
┃ ♫│ ${prefix}bokep12
┃ ♫│ ${prefix}bokep13
┃ ♫│ ${prefix}bokep14
┃ ♫│ ${prefix}bokep15
┃ ♫│ ${prefix}bokep16
┃ ♫│ ${prefix}bokep17
┃ ♫│ ${prefix}bokep18
┃ ♫│ ${prefix}bokep19
┃ ♫│ ${prefix}bokep20
┗━━━━━━━━⬣`
but = [
          { buttonId: `${prefix}allmenu`, buttonText: { displayText: 'AllMenu' }, type: 1 },
          { buttonId: `${prefix}buysc`, buttonText: { displayText: 'Sc' }, type: 1 }
        ]
        sendButton(from, teks, '©Created : Ndyie Botz', but, mek)
break
   
case 'dosamenu':
timestamp = speed();
latensi = speed() - timestamp
teks = `Hai Kak ${pushname}
┏━━⬣ Dosa Bree ⬣
┃ ♫│ ${prefix}dosa1
┃ ♫│ ${prefix}dosa2
┃ ♫│ ${prefix}dosa3
┃ ♫│ ${prefix}dosa4
┃ ♫│ ${prefix}dosa5
┃ ♫│ ${prefix}dosa6
┃ ♫│ ${prefix}dosa7
┃ ♫│ ${prefix}fulldosa
┗━━━━━━━━⬣`
but = [
          { buttonId: `${prefix}allmenu`, buttonText: { displayText: 'AllMenu' }, type: 1 },
          { buttonId: `${prefix}buysc`, buttonText: { displayText: 'Sc' }, type: 1 }
        ]
        sendButton(from, teks, '©Created : Ndyie Botz', but, mek)
break

case 'gabutmenu':
timestamp = speed();
latensi = speed() - timestamp
teks = `Hai Kak ${pushname}
┏━━⬣ Gabut Menu ⬣
┃ ♫│ ${prefix}apakah
┃ ♫│ ${prefix}cekganteng
┃ ♫│ ${prefix}cekcantik
┃ ♫│ ${prefix}hobby
┃ ♫│ ${prefix}bisakah
┃ ♫│ ${prefix}kapankah
┃ ♫│ ${prefix}citacita
┗━━━━━━━━⬣`
but = [
          { buttonId: `${prefix}allmenu`, buttonText: { displayText: 'AllMenu' }, type: 1 },
          { buttonId: `${prefix}buysc`, buttonText: { displayText: 'Sc' }, type: 1 }
        ]
        sendButton(from, teks, '©Created : Ndyie Botz', but, mek)
break

case 'menuasupan':
timestamp = speed();
latensi = speed() - timestamp
teks = `Hai Kak ${pushname}
┏━━⬣ Asupan  ⬣ 
┃ ♫│ ${prefix}asupan
┃ ♫│ ${prefix}asupancecan
┃ ♫│ ${prefix}asupanhijaber
┃ ♫│ ${prefix}asupansantuy
┃ ♫│ ${prefix}asupanukhti
┃ ♫│ ${prefix}asupanbocil
┃ ♫│ ${prefix}asupanghea
┃ ♫│ ${prefix}asupanrika
┗━━━━━━━━⬣`
but = [
          { buttonId: `${prefix}allmenu`, buttonText: { displayText: 'AllMenu' }, type: 1 },
          { buttonId: `${prefix}buysc`, buttonText: { displayText: 'Sc' }, type: 1 }
        ]
        sendButton(from, teks, '©Created : Ndyie Botz', but, mek)
break

case 'mememenu':
timestamp = speed();
latensi = speed() - timestamp
teks = `Hai Kak ${pushname}
┏━━⬣ Meme Menu  
┃ ♫│ ${prefix}randommeme
┃ ♫│ ${prefix}randommemeindo
┃ ♫│ ${prefix}randomdarkjoke
┃ ♫│ ${prefix}aoa
┗━━━━━━━━⬣`
but = [
          { buttonId: `${prefix}allmenu`, buttonText: { displayText: 'AllMenu' }, type: 1 },
          { buttonId: `${prefix}buysc`, buttonText: { displayText: 'Sc' }, type: 1 }
        ]
        sendButton(from, teks, '©Created : Ndyie Botz', but, mek)
break

case 'gcbot':
timestamp = speed();
latensi = speed() - timestamp
teks = `Hai Kak ${pushname}
┏━━⬣ Gc Bot Wea ⬣
┃ ♫│ ${prefix}gc1
┃ ♫│ ${prefix}gc2
┃ ♫│ ${prefix}gc3
┃ ♫│ ${prefix}gc4
┃ ♫│ ${prefix}gc5
┃ ♫│ ${prefix}gc6
┃ ♫│ ${prefix}gc7
┃ ♫│ ${prefix}gc8
┃ ♫│ ${prefix}gc9
┃ ♫│ ${prefix}gc10
┗━━━━━━━━⬣`
but = [
          { buttonId: `${prefix}allmenu`, buttonText: { displayText: 'AllMenu' }, type: 1 },
          { buttonId: `${prefix}buysc`, buttonText: { displayText: 'Sc' }, type: 1 }
        ]
        sendButton(from, teks, '©Created : Ndyie Botz', but, mek)
break
//━━━━━━━━━━━━━━━[ Y ]━━━━━━━━━━━━━━━━━//
case 'infobot':
timestamp = speed();
				latensi = speed() - timestamp
                  	teks =
`┏━➤ *INFO BOT* 
*┃┃* Creator Bot : Ndyie Botz
*┃┃* Nama Owner : ${ownername}
*┃┃* Nama Bot : ${botname}
*┃┃* Prefix : Multi Prefix
*┃┃* Total Pengguna : ${pendaftar.length}
*┃┃* Runtime : ${runtime(process.uptime())}
*┃┃* Speed : ${latensi.toFixed(4)} second
*┃┃* Language : Javascript & Nodejs
*┗━━━━━━━━*`
                  but = [
          { buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER' }, type: 1 },
          { buttonId: `${prefix}sc`, buttonText: { displayText: 'SCRIPT' }, type: 1 }
        ]
        sendButton(from, teks, '©Created : Ndyie Botz', but, mek)
break
	
//━━━━━━━━━━━━━━━[ FITUR GROUP ]━━━━━━━━━━━━━━━━━//

case 'welcome':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
but = [
{ buttonId: '!welcomeon', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: '!welcomeoff', buttonText: { displayText: 'Off' }, type: 1 }
]
sendButton(from, "Silahkan pilih untuk welcome group", faketeks, but, mek)
break
case 'welcomeon':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (isWelkom) return reply('welcome sudah aktif')
_welkom.push(from)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
reply(`\`\`\`✓Sukses mengaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
break
case 'welcomeoff':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (!isWelkom) return reply('welcome sudah off sebelumnya')
_welkom.splice(from, 1)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
reply(`\`\`\`✓Sukses menonaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
break
case 'antilink' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
but = [
{ buttonId: '!antilinkon', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: '!antilinkoff', buttonText: { displayText: 'Off' }, type: 1 }
]
sendButton(from, "Silahkan pilih untuk antilink group", faketeks, but, mek)
break
case 'antilinkon' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (isAntiLink) return reply('anti link sudah on')
_antilink.push(from)
fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
reply(`\`\`\`✓Sukses mengaktifkan fitur anti link di group\`\`\` *${groupMetadata.subject}*`)
break
case 'antilinkoff' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (!isAntiLink) return reply('anti link sudah off sebelumnya')
_antilink.splice(from, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
reply(`\`\`\`✓Sukses menonaktifkan fitur anti link di group\`\`\` *${groupMetadata.subject}*`)
break
case 'antivirtex' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
but = [
{ buttonId: '!antivirtexon', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: '!antivirtexoff', buttonText: { displayText: 'Off' }, type: 1 }
]
sendButton(from, "Silahkan pilih untuk antivirtex group", faketeks, but, mek)
break
case 'antivirtexon' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (isAntiVirtex) return reply('anti virtex group sudah aktif sebelumnya')
_antivirtex.push(from)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
reply(`\`\`\`Sukses mengaktifkan mode anti virtex di group\`\`\` *${groupMetadata.subject}*`)
break
case 'antivirtexoff' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (!isAntiVirtex) return reply('Mode anti virtex sudah nonaktif sebelumnya')
_antivirtex.splice(from, 1)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
reply(`\`\`\`✓Sukes menonaktifkan mode anti virtex di group\`\`\` *${groupMetadata.subject}*`)
break
case 'group' :
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
but = [
{ buttonId: '!groupbuka', buttonText: { displayText: 'Buka' }, type: 1 },
{ buttonId: '!geouptutup', buttonText: { displayText: 'Tutup' }, type: 1 }
]
sendButton(from, "Silahkan pilih untuk buka/tutup group", faketeks, but, mek)
break
case 'groupbuka' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
reply(`\`\`\`✓Sukses Membuka Group\`\`\` *${groupMetadata.subject}*`)
Ndyie.groupSettingChange(from, GroupSettingChange.messageSend, false)
break
case 'grouptutup' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
reply(`\`\`\`✓Sukses Menutup Group\`\`\` *${groupMetadata.subject}*`)
Ndyie.groupSettingChange(from, GroupSettingChange.messageSend, true)
break
case 'linkgrup' :
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
linkgc = await Ndyie.groupInviteCode(from)
yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
Ndyie.sendMessage(from, yeh, text, { quoted: ftrol })
break
case 'promote' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda menjdi admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
Ndyie.groupMakeAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, @${mentioned[0].split('@')[0]} Kamu Menjadi Admin Di Group *${groupMetadata.subject}*`, mentioned, true)
Ndyie.groupMakeAdmin(from, mentioned)
}
break
case 'demote' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tidak jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda tidak menjadi admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
Ndyie.groupDemoteAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, Menurunkan : @${mentioned[0].split('@')[0]} Menjadi Member`, mentioned, true)
Ndyie.groupDemoteAdmin(from, mentioned)
}
break
case 'add' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (args.length < 1) return reply('Yang mau di add siapa??')
if (args[0].startsWith('08')) return reply('Gunakan kode negara Gan')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
Ndyie.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
reply('Gagal menambahkan target, mungkin karena di private')
}
break
case 'kick' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, mengeluarkan :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
Ndyie.groupRemove(from, mentioned)
} else {
mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
Ndyie.groupRemove(from, mentioned)
}
break
case 'tagall':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
members_id = []
teks = (args.length > 1) ? args.join(' ').trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `• @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(teks, members_id, true)
break
case 'setname':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
Ndyie.groupUpdateSubject(from, `${body.slice(9)}`)
Ndyie.sendMessage(from, `\`\`\`✓Sukses Mengganti Nama Group Menjadi\`\`\` *${body.slice(9)}*`, text, { quoted: ftrol })
break
case 'setdesc':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
Ndyie.groupUpdateDescription(from, `${body.slice(9)}`)
Ndyie.sendMessage(from, `\`\`\`✓Sukses Mengganti Deskripsi Group\`\`\` *${groupMetadata.subject}* Menjadi: *${body.slice(9)}*`, text, { quoted: ftrol })
break
case 'setpp':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
media = await Ndyie.downloadAndSaveMediaMessage(mek, './database/media_user')
await Ndyie.updateProfilePicture(from, media)
reply(mess.wait)
reply(`\`\`\`✓Sukses Mengganti Profil Group\`\`\` *${groupMetadata.subject}*`)
break
case 'hidetag':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
var value = body.slice(9)
var group = await Ndyie.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
text: value,
contextInfo: { mentionedJid: mem },
quoted: ftrol
}
Ndyie.sendMessage(from, options, text)
break

//━━━━━━━━━━━━━━━[ FITUR STICKER ]━━━━━━━━━━━━━━━━━//

case 'attp':
if (args.length == 0) return reply(`Example: ${prefix + command} Hai`)
buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
Ndyie.sendMessage(from, buffer, sticker, { quoted: ftrol })
break
case 'sticker':
case 'stiker':
case 's':
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await Ndyie.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(mess.error.stick)
})
.on('end', function () {
console.log('Finish')
buffer = fs.readFileSync(ran)
costum(buffer, sticker, Verived, `Jangan Lupa Subscribe Ndyie Botz`)
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await Ndyie.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ran = getRandom('.webp')
reply(mess.wait)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`❌ Gagal, pada saat mengkonversi ${tipe} ke stiker. pastikan untuk video yang dikirim tidak lebih dari 9 detik`)
})
.on('end', function () {
console.log('Finish')
costum(fs.readFileSync(ran), sticker, Verived, `~ Nih Dah Jadi Gif Stikernya`)
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await Ndyie.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ranw = getRandom('.webp')
ranp = getRandom('.png')
reply(mess.wait)
keyrmbg = 'bcAvZyjYAjKkp1cmK8ZgQvWH'
await removeBackgroundFromImageFile({ path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp }).then(res => {
fs.unlinkSync(media)
let buffer = Buffer.from(res.base64img, 'base64')
fs.writeFileSync(ranp, buffer, (err) => {
if (err) return reply('Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi.')
})
exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(mess.error.stick)
Ndyie.sendMessage(from, fs.readFileSync(ranw), sticker, { quoted: ftrol })
fs.unlinkSync(ranw)
})
})
} else {
reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
}
break
case 'toimg':
if (!isQuotedSticker) return reply(' reply stickernya gan')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await Ndyie.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(' Gagal, pada saat mengkonversi sticker ke gambar ')
buffer = fs.readFileSync(ran)
costum(buffer, image, Verived, `Jangan Lupa Subscribe Ndyie Botz`)
fs.unlinkSync(ran)
})
break
case 'tomp3':
Ndyie.updatePresence(from, Presence.recording)
if (!isQuotedVideo) return reply('Reply Video nya Tod')
reply(mess.wait)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await Ndyie.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('Gagal, pada saat mengkonversi video ke mp3')
bufferlkj = fs.readFileSync(ran)
Ndyie.sendMessage(from, bufferlkj, audio, { mimetype: 'audio/mp4', quoted: ftrol })
fs.unlinkSync(ran)
})
break
case 'tovideo':
if (!isQuotedSticker) return reply('Reply stikernya')
reply(mess.wait)
anumedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
anum = await Ndyie.downloadAndSaveMediaMessage(anumedia, './database/media_user')
ran = getRandom('.webp')
exec(`ffmpeg -i ${anum} ${ran}`, (err) => {
fs.unlinkSync(anum)
buffer = fs.readFileSync(ran)
Ndyie.sendMessage(from, buffer, video, { quoted: ftrol, caption: 'Done... Jangan Lupa Subscribe Ndyie Botz' })
fs.unlinkSync(ran)
})
break

//━━━━━━━━━━━━━━━[ FITUR OWNER ]━━━━━━━━━━━━━━━━━//

case 'owner':
let inilist = []
for (let i of ownerNumber) {
const vname = Ndyie.contacts[i] != undefined ? Ndyie.contacts[i].vname || Ndyie.contacts[i].notify : undefined
inilist.push({
"displayName": 'Ndyie',
"vcard": 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ `FN:${ownername}\n`
+ `ORG: Creator ${ownername} ;\n`
+ `TEL;type=CELL;type=VOICE;waid=${owner}:${owner}\n`
+ 'END:VCARD'.trim()
})
}
hehe = await Ndyie.sendMessage(from, {
"displayName": `${inilist.length} kontak`,
"contacts": inilist 
}, 'contactsArrayMessage', { quoted: ftrol })
button = [
  {buttonId: '.youtube', buttonText: {displayText: 'YOUTUBE'}, type: 1},
  {buttonId: '.instagram', buttonText: {displayText: 'INSTAGRAM'}, type: 1},
  {buttonId: '.tiktok', buttonText: {displayText: 'TIKTOK'}, type: 1}
]
 buttons = {
    contentText: 'Nih Nomer Owner Ku Mau Tau Tentang Apa Ya ?',
    footerText: faketeks,
    buttons: button,
    headerType: 1
}
await Ndyie.sendMessage(from, buttons, MessageType.buttonsMessage, {quoted: ftrol})
break
case 'bc':
if (!isOwner) return reply('LU BUKAN OWNER GBLOK')
if (args.length < 1) return reply('.......')
anu = await Ndyie.chats.all()
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
bc = await Ndyie.downloadMediaMessage(encmedia)
for (let _ of anu) {
Ndyie.sendMessage(_.jid, bc, image, { caption: `[ Izin Broadcast ]\n\n${body.slice(4)}` })
}
reply('Suksess broadcast')
} else {
for (let _ of anu) {
sendMess(_.jid, `[ *BOT BROADCAST* ]\n\n${body.slice(4)}`)
}
reply('Suksess broadcast')
}
break
case 'report':
const pesan = body.slice(8)
if (pesan.length > 300) return pras.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, { quoted: ftrol })
var nomor = mek.participant
const teks1 = `*[REPORT]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${pesan}`
var options = {
text: teks1,
contextInfo: { mentionedJid: [nomor] },
}
Ndyie.sendMessage(`6283818744065@s.whatsapp.net`, options, text, { quoted: ftrol })
reply('Masalah Telah Di Laporkan Ke Owner BOT, Mohon Tunggu Untuk Proses Perbaikan')
break
case 'youtube':
teks =
`Nih Youtube Owner Ku Jangan Lupa Di Subscribe Ya https://youtube.com/channel/UC9WgqpVGWW87R3RWjmAxZgg`
Ndyie.sendMessage(from, teks, text, {quoted: ftrol})
break
case 'instagram':
teks =
`Nih Instagram Owner Ku Jangan Lupa Di Follow Ya https://instagram.com/ndyie_botz`
Ndyie.sendMessage(from, teks, text, {quoted: ftrol})
break
case 'tiktok':
teks =
`Nih Tiktok Owner Ku Jangan Lupa Di Follow Ya https://tiktok.com/polowajanantidipolback`
Ndyie.sendMessage(from, teks, text, {quoted: ftrol})
break

// SC ORI + CREATOR BASE JANGAN DI HPUS TOD
//HARGAI CREATOR
case 'sourcecode':
case 'script':
case 'sc':
teks = 
`*Bot Ini Mengguna Sourcecode
╭─────────────────────
├ Sc Ori = https://youtu.be/j6uphoSkd20
├ Sc Ini Di Buat Oleh Ndyie Botz
├─────────────────────
https://youtube.com/channel/UC9WgqpVGWW87R3RWjmAxZgg
├─────────────────────
├ Creator Base = Zero Gay
├ Creator Sc = Ndyie Botz
├ Pengguna Sc = ${owner}
└─────────────────────`
Ndyie.sendMessage(from, teks, text, {quoted: ftrol})
break
//━━━━━━━━━━━━━━━[ Meme ]━━━━━━━━━━━━━━━━━//
case 'randommeme':
await getBuffer(`https://api.lolhuman.xyz/api/random/meme?apikey=${zerokey}`).then((gambar) => {
reply(mess.wait)
Ndyie.sendMessage(from, gambar, image, {quoted: ftrol, caption: 'Nih Kak'})
})
break
case 'randomdarkjoke':
await getBuffer(`https://api.lolhuman.xyz/api/meme/darkjoke?apikey=${zerokey}`).then((gambar) => {
reply(mess.wait)
Ndyie.sendMessage(from, gambar, image, {quoted: ftrol, caption: 'Nih Kak'})
})
break
case 'randommemeindo':
await getBuffer(`https://api.lolhuman.xyz/api/meme/memeindo?apikey=${zerokey}`).then((gambar) => {
reply(mess.wait)
Ndyie.sendMessage(from, gambar, image, {quoted: ftrol, caption: 'Nih Kak'})
})
break
//━━━━━━━━━━━━━━━[ Gabut Menu ]━━━━━━━━━━━━━━━━━//
case 'apakah':
apakah = body.slice(1)
const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
const kah = apa[Math.floor(Math.random() * apa.length)]
Ndyie.sendMessage(from, '*Pertanyaan :* '+apakah+'\n*Jawaban :* '+ kah, text, { quoted: ftrol })
break
case 'cekganteng':
ganteng = body.slice(1)
const gan =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
const teng = gan[Math.floor(Math.random() * gan.length)]
Ndyie.sendMessage(from, '*Pertanyaan :* '+ganteng+'\n*Jawaban :* '+ teng+'%', text, { quoted: ftrol })
break
case 'cekcantik':
cantik = body.slice(1)
const can =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
const tik = can[Math.floor(Math.random() * can.length)]
Ndyie.sendMessage(from, '*Pertanyaan :* '+cantik+'\n*Jawaban :* '+ tik+'%', text, { quoted: ftrol })
break
case 'hobby':
const kan =['Coli','baca buku','Tadi','ngeliat org mandi','Nonton bokep','sepedaan','Baca wattpad','belajar','Main discord','menabung']
const hooo = kan[Math.floor(Math.random() * kan.length)]
Ndyie.sendMessage(from, 'Pertanyaan : *hoby*\n\nJawaban : '+ hooo, text, { quoted: ftrol })
break
case 'bisakah':
bisakah = body.slice(1)
const bisa =['Bisa','Tidak Bisa','Coba Ulangi','MANA GW TAU']
const keh = bisa[Math.floor(Math.random() * bisa.length)]
Ndyie.sendMessage(from, '*Pertanyaan :* '+bisakah+'\n*Jawaban :* '+ keh, text, { quoted: ftrol })
break
case 'citacita':       
var cita =['http://piyobot.000webhostapp.com/citacita1.mp3','http://piyobot.000webhostapp.com/citacita2.mp3','http://piyobot.000webhostapp.com/citacita3.mp3','http://piyobot.000webhostapp.com/citacita4.mp3','http://piyobot.000webhostapp.com/citacita5.mp3','http://piyobot.000webhostapp.com/citacita6.mp3','http://piyobot.000webhostapp.com/citacita7.mp3','http://piyobot.000webhostapp.com/citacita8.mp3','http://piyobot.000webhostapp.com/citacita9.mp3','http://piyobot.000webhostapp.com/citacita10.mp3','http://piyobot.000webhostapp.com/citacita11.mp3','http://piyobot.000webhostapp.com/citacita12.mp3','http://piyobot.000webhostapp.com/citacita13.mp3','http://piyobot.000webhostapp.com/citacita14.mp3','http://piyobot.000webhostapp.com/citacita15.mp3','http://piyobot.000webhostapp.com/citacita16.mp3','http://piyobot.000webhostapp.com/citacita17.mp3','http://piyobot.000webhostapp.com/citacita18.mp3','http://piyobot.000webhostapp.com/citacita19.mp3','http://piyobot.000webhostapp.com/citacita20.mp3','http://piyobot.000webhostapp.com/citacita21.mp3','http://piyobot.000webhostapp.com/citacita22.mp3','http://piyobot.000webhostapp.com/citacita23.mp3','http://piyobot.000webhostapp.com/citacita24.mp3','http://piyobot.000webhostapp.com/citacita25.mp3','http://piyobot.000webhostapp.com/citacita26.mp3','http://piyobot.000webhostapp.com/citacita27.mp3','http://piyobot.000webhostapp.com/citacita28.mp3','http://piyobot.000webhostapp.com/citacita29.mp3','http://piyobot.000webhostapp.com/citacita30.mp3','http://piyobot.000webhostapp.com/citacita31.mp3','http://piyobot.000webhostapp.com/citacita32.mp3','http://piyobot.000webhostapp.com/citacita33.mp3','http://piyobot.000webhostapp.com/citacita34.mp3','http://piyobot.000webhostapp.com/citacita35.mp3']
var cita3 = cita[Math.floor(Math.random() * cita.length)]
cita2 = await getBuffer(cita3)
Ndyie.sendMessage(from, cita2, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true, duration: -838719282910})
break
case 'kapankah':
kapankah = body.slice(1)
const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
const koh = kapan[Math.floor(Math.random() * kapan.length)]
Ndyie.sendMessage(from, '*Pertanyaan :* '+kapankah+'\n*Jawaban :* '+ koh, text, { quoted: ftrol })
break
//━━━━━━━━━━━━━━━[ Asupan ]━━━━━━━━━━━━━━━━━//
case 'asupan':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.result)
Ndyie.sendMessage(from, buffer, video, {quoted: ftrol, caption: 'Nih Kak'})
break
case 'asupancecan':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/cecan?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
Ndyie.sendMessage(from, buffer, image, {quoted: ftrol, caption: 'Nih Kak'})
break
case 'asupanhijaber':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/hijaber?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
Ndyie.sendMessage(from, buffer, image, {quoted: ftrol, caption: 'Nih Kak'})
break
case 'asupansantuy':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/santuy?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
Ndyie.sendMessage(from, buffer, video, {quoted: ftrol, caption: 'Nih Kak'})
break
case 'asupanukhti':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/ukty?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
Ndyie.sendMessage(from, buffer, video, {quoted: ftrol, caption: 'Nih Kak'})
break
case 'asupanbocil':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/bocil?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
Ndyie.sendMessage(from, buffer, video, {quoted: ftrol, caption: 'Nih Kak'})
break
case 'asupanghea':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/ghea?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
Ndyie.sendMessage(from, buffer, video, {quoted: ftrol, caption: 'Nih Kak'})
break
case 'asupanrika':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/rikagusriani?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
Ndyie.sendMessage(from, buffer, video, {quoted: ftrol, caption: 'Nih Kak'})
break
//━━━━━━━━━━━━━━━[ jb menu ]━━━━━━━━━━━━━━━━━//
case 'sewa':
Ndyie.sendMessage(from, `*[❗] OPEN SEWA BOT By ndyie*
Hai Kak ${pushname} Mau Sewa Bot?
╭───────────────
│ *Harga Sewa MINGGUAN*
│ 1 minggu : Rp 3.000 
│ 2 minggu : Rp 5.000
│ 3 minggu : Rp 10.000
╰────────────────
          │ *Harga Sewa BULANAN*
          │1 Bulan : Rp. 15.000
          │2 Bulan : Rp. 20.000
          ╰───────────────
╭───────────────
│ *NOTE :*
│BOT AKTIF 24 JAM
╰────────────────
*📌 MINAT?*
_CHAT : wa.me/6281523914347_
*════〘 ndyie 〙════*`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "By ndyie Botz",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./ndyie.jpg'),sourceUrl:"OV1876"}}})
break
case 'buysc':
Ndyie.sendMessage(from, `*[❗] Jual Sc Bot*
╭───────────────
│ Fitur 350+
╰────────────────
          │ Free Apikey 
          ╰───────────────
╭───────────────
│ *NOTE :*
│100% Sc Buatan Sendiri 😎
╰────────────────
*📌 MINAT?*
_https://wa.me/p/6281523914347_
*════〘 ndyie 〙════*`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "By ndyie Botz",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./ndyie.jpg'),sourceUrl:"OV1876"}}})
break
case 'jasher':
Ndyie.sendMessage(from, `*[❗] Jasher Om*
1× Sher = 500
2× Sher = 1000
3× Sher = 1500
4× Sher = 2000
5× Sher = 2500
6× Sher = 3000
7× Sher = 3500
8× Sher = 4000
9× Sher = 4500
10× Sher = 5000
Jan Lupa Order ${pushname}
*════〘 Ndyie 〙════*`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "By ndyie Botz",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./ndyie.jpg'),sourceUrl:"OV1876"}}})
break
case 'harting':
reply (`Jual Gc Jb Ni Bang ${pushname}\nhttps://chat.whatsapp.com/E9WGui8QiA67mVulUQISn7\nKalo Mau Beli Chat Owner`)
break
case 'logo':
Ndyie.sendMessage(from, `*[❗] Jasa Buat Logo*
Logo Vektor 2k
Logo Ft 2k
Logo Ml 3k
Logo Bucin 5k
Bawa Set Sendiri 3k
Logo Sad Boy 1k
Logo Dm 2k
Mau Beli Chat wa.me/${owner}
*════〘 Ndyie 〙════*`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "By ndyie Botz",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./ndyie.jpg'),sourceUrl:"OV1876"}}})
break
case 'suntiktiktok':
Ndyie.sendMessage(from, `*[❗] Jasa Suntik Tiktok Om*
100 View 2k
200 View 4k
300 View 6k
400 View 8k
500 View 10k
600 View 12k
700 View 14k
800 View 16k
900 View 18k
1000 View 20k
Mau Beli Jasa Suntik TikTok
Chat wa.me/${owner}
*════〘 Ndyie 〙════*`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "By ndyie Botz",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./ndyie.jpg'),sourceUrl:"OV1876"}}})
break
case 'polig':
Ndyie.sendMessage(from, `*[❗] Jasa Suntik Ig Om*
200 Polower 5k
400 Polower 10k
600 Polower 15k
800 Polower 20k
1000 Polower 25k
Mau Beli Pol Ig?
Chat wa.me/${owner}
*════〘 Ndyie 〙════*`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "By ndyie Botz",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./ndyie.jpg'),sourceUrl:"OV1876"}}})
break
case 'rdp':
Ndyie.sendMessage(from, `*[❗] Rdp By Faxdil*

*_READY RDP WINDOWS_*

*♂️ RAM 1 CPU 1  : PRICE 10K*

*♂️ RAM 2 CPU 1 : PRICE 15K*

*♂️ RAM 3 CPU 1 : PRICE 25K*

*♂️ RAM 4 CPU 2 : PRICE 35K*

⚡ SERVER ONLY US, AS, EU

💻 WINDOWS 2019, 10, 2016, 2012

🔋EXP 30 HARI

🍁GARANSI 2 MINGGU SETELAH PEMBELIAN

*INFORMATION:*

- SUPPORT BOT ( MIN RAM 2 )

- AWET DAN TAHAN LAMA ( SELAMA TIDAK MELANGGAR TOS/RULES )

- FREE REST API ( https://abdillah-api.herokuapp.com )

*RULES*
- DILARANG DIGUNAKAN UNTUK MINING ( RAWAN BANNED )
- DILARANG MENGGUNAKAN VPN UNTUK LOGIN RDP
- GUNAKAN SEWAJAR NYA AJA ( BIAR AWET )
- JANGAN SAMPAI OVERLOAD ( 99% CPU )

*💵 PAYMENT*
- GOPAY
- OVO
- DANA
- QRIS ALL PAYMENT

📥 BERMINAT ? HUBUNGI :

https://wa.me/6281523914347 ( Dmaz)

https://wa.me/6281523914347(Dmaz)

*MATURSUWUN MONGGO DI LARISI*

*════〘 Ndyie 〙════*`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "By ndyie Botz",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./Ndyie/Ndyi.jpg'),sourceUrl:"OV1876"}}})
break
//━━━━━━━━━━━━━━━[ Lupa ]━━━━━━━━━━━━━━━━━//
case 'yt':
reply (`Jan Lupa Subscribe ${pushname}\nhttps://youtube.com/channel/UC9WgqpVGWW87R3RWjmAxZgg`)
break
case 'bot':
reply (`Iya Ada Yang Bisa Aku Bantu ${pushname}\nJika Tidak Ada Ketik #menu`)
break
case 'love':
reply ('Iya Kak Ada Apa Suka Sama Owner Ku?')
Ndyie.sendMessage(from, `@${sender.split("@")[0]}`, text, {contextInfo:{mentionedJid:[sender]}})
break
case 'ownertag':
Ndyie.sendMessage(from, `@${sender.split("@")[0]}`, text, {contextInfo:{mentionedJid:[sender]}})
break
case 'grupbokep':
reply (`Hai Kak ${pushname}\nhttps://chat.whatsapp.com/FHmhV1M88FNJlWfjlH9tqs\nJangan Lupa Join`)
break
case 'aoa':
reply ('Ada Aoa Bang?')
break
//━━━━━━━━━━━━━━━[ War Menu ]━━━━━━━━━━━━━━━━━//
case 'virtex1':
case 'virtex2':
case 'virtex3':
case 'virtex4':
case 'virtex5':
case 'virtex6':
case 'virtex7':
case 'virtex8':
case 'virtex9':
case 'virtex10':
Ndyie.sendMessage(from, `*Mau Pake Fitur Ini?*
Mau Buy Fitur War
Harga Murah Cuma 15k
Sung Aja Wa Yang Buat Sc
wa.me/6283818744065
*════〘 Ndyie 〙════*`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "By ndyie Botz",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./ndyie.jpg'),sourceUrl:"OV1876"}}})
break
//━━━━━━━━━━━━━━━[ Gc Anime By Ndyie Botz ]━━━━━━━━━━━━━━━━━//
case 'gcloli':
reply (`Hai Kak ${pushname}\nhttps://chat.whatsapp.com/Irr1NkyxhsR0FFYJnQxHu9\nJan Lupa Join`)
break
case 'gcwibunime':
reply (`Hai Kak ${pushname}\nhttps://chat.whatsapp.com/BurANyEpAbaHLXvhGbmvGI\nJan Lupa Join`)
break
case 'animenover':
reply (`Hai Kak ${pushname}\nhttps://chat.whatsapp.com/CpmEl6fGTSvCDu45h3OAtJ\nJan Lupa Join`)
break
case 'animelov':
reply (`Hai Kak ${pushname}\nhttps://chat.whatsapp.com/K7jYtK5KrSdANYJo5uUtur\nJan Lupa Join`)
break
case 'animejapan':
reply (`Hai Kak ${pushname}\nhttps://chat.whatsapp.com/KmEaL95J9wgGN5Ac12Eieu\nJan Lupa Join`)
break
case 'adavirtex':
Ndyie.sendMessage(from, `*Lari Ada HeNgKeR*
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
*════〘 Ndyie 〙════*`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "By ndyie Botz",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./ndyie.jpg'),sourceUrl:"OV1876"}}})
break
//Case Nulis
case 'nuliskiri':
reply (`Hai Kak ${pushname}\nBuy Sc Lah Om`)
break
case 'nuliskanan':
reply (`Hai Kak ${pushname}\nBuy Sc Lah Om`)
break
case 'foliokanan':
reply (`Hai Kak ${pushname}\nBuy Sc Lah Om`)
break
case 'foliokiri':
reply (`Hai Kak ${pushname}\nBuy Sc Lah Om`)
break
//━━━━━━━━━━━━━━━[ bokep menu ]━━━━━━━━━━━━━━━━━//
case 'bokep1':
reply (`Hai Kak ${pushname}\nBuy Sc Lah Om`)
break
case 'bokep2':
reply (`Hai Kak ${pushname}\nBuy Sc Lah Om`)
break
case 'bokep3':
reply (`Hai Kak ${pushname}\nBuy Sc Lah Om`)
break
case 'bokep4':
reply (`Hai Kak ${pushname}\nBuy Sc Lah Om`)
break
case 'bokep5':
reply (`Hai Kak ${pushname}\nBuy Sc Lah Om`)
break
case 'bokep6':
reply (`Hai Kak ${pushname}\nBuy Sc Lah Om`)
break
case 'bokep7':
reply (`Hai Kak ${pushname}\nBuy Sc Lah Om`)
break
case 'bokep8':
reply (`Hai Kak ${pushname}\nBuy Sc Lah Om`)
break
case 'bokep9':
reply (`Hai Kak ${pushname}\nBuy Sc Lah Om`)
break
case 'bokep10':
reply (`Hai Kak ${pushname}\nBuy Sc Lah Om`)
break
case 'bokep11':
reply (`Hai Kak ${pushname}\nBuy Sc Lah Om`)
break
case 'bokep12':
reply (`Hai Kak ${pushname}\nBuy Sc Lah Om`)
break
case 'bokep13':
reply (`Hai Kak ${pushname}\nBuy Sc Lah Om`)
break
case 'bokep14':
reply (`Hai Kak ${pushname}\nBuy Sc Lah Om`)
break
case 'bokep15':
reply (`Hai Kak ${pushname}\nBuy Sc Lah Om`)
break
case 'bokep16':
reply (`Hai Kak ${pushname}\nBuy Sc Lah Om`)
break
case 'bokep17':
reply (`Hai Kak ${pushname}\nBuy Sc Lah Om`)
break
case 'bokep18':
reply (`Hai Kak ${pushname}\nBuy Sc Lah Om`)
break
case 'bokep19':
reply (`Hai Kak ${pushname}\nBuy Sc Lah Om`)
break
case 'bokep20':
reply (`Hai Kak ${pushname}\nBuy Sc Lah Om`)
break
case 'dosa1':
     reply ('https://nhentai.net/g/316755/')
     break
     case 'dosa2':
     reply ('https://nhentai.net/g/316596/')
     break
     case 'dosa3':
     reply ('https://nhentai.net/g/311850/')
     break
     case 'dosa4':
     reply ('https://nhentai.net/g/315578/')
     break
     case 'dosa5':
     reply ('https://nhentai.net/g/315488/')
     break
     case 'dosa6':
     reply ('https://nhentai.net/g/315344/')
     break
     case 'fulldosa':
Ndyie.sendMessage(from, `*Full Dosa*
• https://nhentai.net/g/316755/
• https://nhentai.net/g/316596/
• https://nhentai.net/g/311850/
• https://nhentai.net/g/315578/
• https://nhentai.net/g/315488/
• https://nhentai.net/g/315406/
• https://nhentai.net/g/315344/
• https://nhentai.net/g/315323/
• https://nhentai.net/g/315136/
• https://nhentai.net/g/315099/
*Dosa Lu Tanggung Sendiri*`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "By Ndyie Botz",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./ndyie.jpg'),sourceUrl:"OV1876"}}})
break
     case 'dosa7':
reply (`Hai Kak ${pushname}\nhttps://cararegistrasi.com/qOxa4mMffJ\nNonton Itu Coba :v`)
break
//━━━━━━━━━━━━━━━[ Y ]━━━━━━━━━━━━━━━━━//
case 'sewabot':
but = [
{ buttonId: `${prefix}sebulan`, buttonText: { displayText: 'SEBULAN' }, type: 1 },
{ buttonId: `${prefix}permanen`, buttonText: { displayText: 'PERMANEN' }, type: 1 }
]
sendButton(from, "Silahkan Pilih List Sewa Di Bawah Ini", faketeks, but, mek)
break
case 'sebulan':
but = [
{ buttonId: `${prefix}gopay`, buttonText: { displayText: 'GOPAY' }, type: 1 },
{ buttonId: `${prefix}dana`, buttonText: { displayText: 'DANA' }, type: 1 },
{ buttonId: `${prefix}ovo`, buttonText: { displayText: 'OVO' }, type: 1 }
]
sendButton(from, "Silahkan Pilih Metode Pembayaran Dibawah", faketeks, but, mek)
break
case 'permanen':
but = [
{ buttonId: `${prefix}gopay`, buttonText: { displayText: 'GOPAY' }, type: 1 },
{ buttonId: `${prefix}dana`, buttonText: { displayText: 'DANA' }, type: 1 },
{ buttonId: `${prefix}ovo`, buttonText: { displayText: 'OVO' }, type: 1 }
]
sendButton(from, "Silahkan Pilih Metode Pembayaran Dibawah", faketeks, but, mek)
break
case 'gopay':
but = [
{ buttonId: `${prefix}done`, buttonText: { displayText: 'DONE' }, type: 1 }
]
sendButton(from, "GOPAY :  082265592459(DIMAS)", faketeks, but, mek)
break
case 'dana':
but = [
{ buttonId: `${prefix}done`, buttonText: { displayText: 'DONE' }, type: 1 }
]
sendButton(from, "DANA : 081523914347 (DIMAS)", faketeks, but, mek)
break
case 'ovo':
but = [
{ buttonId: `${prefix}done`, buttonText: { displayText: 'DONE' }, type: 1 }
]
sendButton(from, "OVO : 081523914347 (DIMAS)", faketeks, but, mek)
break
case 'tq':
tytyd = `
╭─✮ Thanks To ✮
│ツ Ndyie Botz
│ツ Melcanz
│ツ Rendy
│ツ Diva
│ツ Pasi Botz
│ツ Gavin 
│ツ Wira Ganz
│ツ Pasi Botz
│ツ Dhani Botz
│ツ Wira Botz
│ツ Taufix Botz
│ツ Novem Botz
└────────────`
but = [
{ buttonId: `${prefix}menu`, buttonText: { displayText: 'Kemren' }, type: 1 }
]
sendButton(from, tytyd, faketeks, but, mek)
break

//List Dm By Ndyie Botz
case 'listdiamond':
but = [
{ buttonId: `${prefix}dmml`, buttonText: { displayText: 'DM ML' }, type: 1 },
{ buttonId: `${prefix}dmff`, buttonText: { displayText: 'DM FF' }, type: 1 },
{ buttonId: `${prefix}ucpubg`, buttonText: { displayText: 'UC PUBG' }, type: 1 }
]
sendButton(from, "Silahkan Pilih List Diamond Di Bawah Ini", faketeks, but, mek)
break
case 'dmml':
qris = fs.readFileSync('./ndyie.jpg')
trans = `© Ndyie Botz`
list = `✮Price List Diamond ML✮
86dm = Idr 20.000
172dm = Idr 40.000
257dm = Idr 60.000
344dm = Idr 80.000
429dm = Idr 100.000
514dm =  Idr 117.000
600dm = Idr 136.000
706dm = Idr 155.000
878dm = Idr 195.000
963dm = Idr 215.000
1050dm = Idr 233.000

Silahkan Pilih Metode Pembayaran
Dibawah Ini`
but = [
          { buttonId: `${prefix}gopay`, buttonText: { displayText: 'GOPAY' }, type: 1 },
          { buttonId: `${prefix}ovo`, buttonText: { displayText: 'OVO' }, type: 1 },
          { buttonId: `${prefix}dana`, buttonText: { displayText: 'DANA' }, type: 1 }
        ]
sendButImage(from, list, trans, qris, but)
break
case 'dmff':
qris = fs.readFileSync('./ndyie.jpg')
trans = `© Ndyie Botz`
list = `✮Price List Diamond FF✮
70dm = Idr 10.000
100dm = Idr 15.000
140dm = Idr 20.000
210dm = Idr 30.000
355dm = Idr 50.000
500dm =  Idr 67.000
720dm = Idr 95.000
1000dm = Idr 130.000
1075dm = Idr 140.000
2000dm = Idr 250.000
7290dm = Idr 910.000

Silahkan Pilih Metode Pembayaran
Dibawah Ini`
but = [
          { buttonId: `${prefix}gopay`, buttonText: { displayText: 'GOPAY' }, type: 1 },
          { buttonId: `${prefix}ovo`, buttonText: { displayText: 'OVO' }, type: 1 },
          { buttonId: `${prefix}dana`, buttonText: { displayText: 'DANA' }, type: 1 }
        ]
sendButImage(from, list, trans, qris, but)
break
case 'ucpubg':
qris = fs.readFileSync('./ndyie.jpg')
trans = `© Ndyie Botz`
list = `✮Price List Uc Pubg✮
36uc = Idr 10.000
73uc = Idr 15.000
221uc = Idr 45.000
770uc = Idr 140.000
2013uc = Idr 340.000
4200uc =  Idr 670.000
8750uc = Idr 1.340.000

Silahkan Pilih Metode Pembayaran
Dibawah Ini`
but = [
          { buttonId: `${prefix}gopay`, buttonText: { displayText: 'GOPAY' }, type: 1 },
          { buttonId: `${prefix}ovo`, buttonText: { displayText: 'OVO' }, type: 1 },
          { buttonId: `${prefix}dana`, buttonText: { displayText: 'DANA' }, type: 1 }
        ]
sendButImage(from, list, trans, qris, but)
break
case 'codm':
qris = fs.readFileSync('./ndyie.jpg')
trans = `© Ndyie Botz`
list = `✮Price List Cp Codm✮
5k 26 + 5 cp
11k 53 + 9 cp
20k 106 + 21 cp
49k 264 + 53 cp
96k 528 + 106 cp
192k 1056 + 317 cp 
289k 1584 + 475 cp
500k 2640 + 924 cp

Silahkan Pilih Metode Pembayaran
Dibawah Ini`
but = [
          { buttonId: `${prefix}gopay`, buttonText: { displayText: 'GOPAY' }, type: 1 },
          { buttonId: `${prefix}ovo`, buttonText: { displayText: 'OVO' }, type: 1 },
          { buttonId: `${prefix}dana`, buttonText: { displayText: 'DANA' }, type: 1 }
        ]
sendButImage(from, list, trans, qris, but)
break
//━━━━━━━━━━━━━━━[ Y ]━━━━━━━━━━━━━━━━━//
case 'gc1':
reply (`Hai Kak ${pushname}\nhttps://chat.whatsapp.com/E9WGui8QiA67mVulUQISn7\nJangan Lupa Join`)
break
case 'gc2':
reply (`Hai Kak ${pushname}\nhttps://chat.whatsapp.com/ChDmgKcqXQV7EL9Pzgou8E\nJangan Lupa Join`)
break
case 'gc3':
reply (`Hai Kak ${pushname}\nhttps://chat.whatsapp.com/JYxcOosnZ2OFf83tAvtMm4\nJangan Lupa Join`)
break
case 'gc4':
reply (`Hai Kak ${pushname}\nhttps://chat.whatsapp.com/DDndp5gchek5KXrN7VFFtA\nJangan Lupa Join`)
break
case 'gc5':
reply (`Hai Kak ${pushname}\nhttps://chat.whatsapp.com/Dgt6JhzTvlmEor8Zz23fHx\nJangan Lupa Join`)
break
case 'gc6':
reply (`Hai Kak ${pushname}\nhttps://chat.whatsapp.com/FMAW2cyZkXJAK16BUyBgRA\nJangan Lupa Join`)
break
case 'gc7':
reply (`Hai Kak ${pushname}\nhttps://chat.whatsapp.com/KFwsxQz12qu0B5axb6gsq4\nJangan Lupa Join`)
break
case 'gc8':
reply (`Hai Kak ${pushname}\nhttps://chat.whatsapp.com/E6xcfx9UzKS7bkod4DLxl5\nJangan Lupa Join`)
break
case 'gc9':
reply (`Hai Kak ${pushname}\nhttps://chat.whatsapp.com/GVr6SD8U0XNDuXSDvlFD9R\nJangan Lupa Join`)
break
case 'gc10':
reply (`Hai Kak ${pushname}\nhttps://chat.whatsapp.com/EkquvodH6uuHxdSnE4GpaY\nJangan Lupa Join`)
break

case 'runtime':
Ndyie.sendMessage(from, `*Hai Kak ${pushname}*

┏━━⬣ 𝙄𝙉𝙁𝙊
┃❏ Nama User : ${pushname}
┃❏ Nama Bot : ${botname}
┃❏ Nama Owner : ${ownername}
┃❏ Runtime : ${runtime(process.uptime())}
┃❏ Speed : ${latensi.toFixed(4)} second
┗━━⬣
*Jangan Lupa Subrek Ndyie Botz*`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "By ndyie Botz",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./ndyie.jpg'),sourceUrl:"OV1876"}}})
//━━━━━━━━━━━━━━━[ Y ]━━━━━━━━━━━━━━━━━//
default:
if (isOwner) {
			if (budy.startsWith('>')) {
				console.log(color('[EVAL1]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
				try {
					let evaled = await eval(budy.slice(2))
					if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
					reply(`${evaled}`)
				} catch (err) {
					reply(`${err}`)
				}
			} else if (budy.startsWith('x')) {
				console.log(color('[EVAL2]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval identy`))
				try {
					return Ndyie.sendMessage(from, JSON.stringify(eval(budy.slice(2)), null, '\t'), text, { quoted: ftrol })
				} catch (err) {
					e = String(err)
					reply(e)
				}
			}
		}
		}
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Error : %s', color(e, 'red'))
        }
	// console.log(e)
	}
}


	
    
