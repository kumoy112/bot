const fs = require('fs')

global.namabot = "𝙓𝘿"
global.namaowner = "𝙁𝙄𝙆𝙊𝙓𝘿"
global.footer_text = "© BOT" + namabot
global.pp_bot = fs.readFileSync("./image/foto.jpg")
global.qris = fs.readFileSync("./image/qris.jpg")
global.owner = ['6283110933360']
global.sessionName = 'session'
global.prefa = ['-_-']
global.caption_pay = `Qris All Pay
Ovo
Dana
Gopay

Mau ganti payment? ketik .setpay
`
//menu bot rapihin sendiri ya, belajar lah jadi anak mandiri.
module.exports.helpMenu = (pushname) =>{
  return `Halo ${pushname}

*「 FITUR BOT 」*

\`\`\`❒ !owner
❒ !addsewa
❒ !delsewa
❒ !ceksewa
❒ !listsewa
❒ !pay
❒ !setpay
❒ !list
❒ !addlist
❒ !updatelist
❒ !dellist
❒ !jeda
❒ !tambah
❒ !kurang
❒ !kali
❒ !bagi
❒ !setproses
❒ !changeproses
❒ !delsetproses
❒ !setdone
❒ !changedone
❒ !delsetdone
❒ !proses
❒ !done
❒ !welcome
❒ !goodbye
❒ !setwelcome
❒ !changewelcome
❒ !delsetwelcome
❒ !setleft
❒ !changeleft
❒ !delsetleft
❒ !antiwame
❒ !antiwame2
❒ !antilink
❒ !antilink2
❒ !open
❒ !close
❒ !hidetag
❒ !kick
❒ !stiker
❒ !ffid
❒ !mlid
\`\`\`

🗿 YANG MAU SEWA JUGA SILAHKAN 
CHAT NOMOR INI 6283110933360
`
}