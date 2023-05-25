import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['918010431346','𝚸𝚪𝚫𝚻𝚫𝚸', true],
  ['918055005094','BaBy','true'], 
  [''] 
] //Numeros de owner 

global.mods = ['918010431346'] 
global.prems = ['918010431346','918055005094']
global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a', 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.packname = '𝐃𝚵𝛁𝚰𝐋' 
global.author = 'pratap' 
global.fgig = '▢ Sígueme en Instagram\nhttps://www.instagram.com/pratapp_2714 \n' 
global.dygp = 'https://chat.whatsapp.com'
global.fgsc = 'https://github.com/Pratap0707/dylux-fg' 
global.fgyt = 'https://youtube.com'
global.fgpyp = 'salanghaeyo ♥️'
global.fglog = 'https://i.imgur.com/Owmb93c.png' 

global.wait = '*⌛ _Charging..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '*⌛```「▰▰▰▱▱▱▱▱▱▱」Loading...```*'
global.dmoji = '🤭'
global.done = '✅'
global.error = '*❌```404 Error```*' 
global.xmoji = '🔥' 

// Greeting messages
global.greet1 = "Good morning ☀️" // after 3 AM
global.greet2 = "Good afternoon 🏜️" // after 12 PM
global.greet3 = "Good evening 🌆" // after 4 PM
global.greet4 = "Good night 😴" // after 8:30 PM

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
