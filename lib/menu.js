const fs = require('fs-extra')
const { 
    prefix
} = JSON.parse(fs.readFileSync('./settings/setting.json'))

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textTnC = () => {
    return `
【G】【A】【B】【U】【T】 BOT dibuat Oleh Gillan Pada Tanggal 28/12/2020

Dengan Menggunakan Bot Ini anda dapat Berbagai Fitur:
- Ketik #help untuk melihat list perintah bot
- ketik #menuadmin untuk melihat list menu admin
- ketik #tagall untuk tag semua member di group
Instagram: https://instagram.com/gillan_138

【G】【A】【B】【U】【T】`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textMenu = (pushname) => {
    return `
Hi, ${pushname}! 👋️
Berikut adalah beberapa fitur yang ada pada bot ini!✨

Creator:
-❥ *${prefix}sticker*
-❥ *${prefix}stickergif*
-❥ *${prefix}stickergiphy*
-❥ *${prefix}meme*
-❥ *${prefix}nulis*

Fun Menu (Group):
-❥ *${prefix}simisimi*
-❥ *${prefix}katakasar*

Download:
-❥ *${prefix}ytmp3*
-❥ *${prefix}ytmp4*
-❥ *${prefix}facebook*

Primbon:
-❥ *${prefix}artinama*

Search Any:
-❥ *${prefix}images*
-❥ *${prefix}sreddit*
-❥ *${prefix}stalkig*
-❥ *${prefix}wiki*
-❥ *${prefix}cuaca*
-❥ *${prefix}chord*
-❥ *${prefix}lirik*
-❥ *${prefix}ss*
-❥ *${prefix}play*
-❥ *${prefix}movie*
-❥ *${prefix}whatanime*

Random Images:
-❥ *${prefix}anime*
-❥ *${prefix}kpop*
-❥ *${prefix}memes*

Lain-lain:
-❥ *${prefix}translate*
-❥ *${prefix}resi*
-❥ *${prefix}covidindo*

Tentang Bot:
-❥ *${prefix}tnc*
-❥ *${prefix}tahunbaru*
-❥ *${prefix}botstat*
-❥ *${prefix}join*

_-_-_-_-_-_-_-_-_-_-_-_-_-_

Owner Bot:
-❥ *${prefix}ban* - banned
-❥ *${prefix}bc* - promosi
-❥ *${prefix}leaveall* - keluar semua grup
-❥ *${prefix}clearall* - hapus semua chat

Hope you have a great day!✨`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textAdmin = () => {
    return `
⚠ [ *Admin Group Only* ] ⚠ 
Berikut adalah fitur admin grup yang ada pada bot ini!

-❥ *${prefix}add*
-❥ *${prefix}kick* @tag
-❥ *${prefix}promote* @tag
-❥ *${prefix}demote* @tag
-❥ *${prefix}mutegrup*
-❥ *${prefix}tagall*
-❥ *${prefix}setprofile*
-❥ *${prefix}del*

_-_-_-_-_-_-_-_-_-_-_-_-_-_

⚠ [ *Admin Group Only* ] ⚠
Berikut adalah fitur owner grup yang ada pada bot ini!
-❥ *${prefix}kickall*
*Owner Group adalah pembuat grup.*
`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.texttahunbaru = () => {
    return `
【G】【A】【B】【U】【T】 
Hello, Kami 【G】【A】【B】【U】【T】 Mengucapkan Selamat Tahun baru 2021
==============================================================
(｡・・｡【―☆― Happy New Year ―☆―】｡・・｡)
==============================================================
Selamat Tahun Baru! Mari bersulang untuk pencapaian kemarin 
dan masa depan cerah di masa yang akan datang.
==============================================================
🎆Happy New Year🎆
🎁https://vejo.site/en/f-n2?f=🄶🄰🄱🅄🅃🎁`
}
