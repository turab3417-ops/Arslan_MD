const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUxFT2NSSWFlNEgyLzRxNmJiaTd1ZlpOK3QxM3U1VGZWK0l0RFM1QXYxaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUEt4ZGZLSFV6ZU1OREpFUk5TNkUxaGwwRGQ5cFo2MkVZT1MrOTNZWm9BVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJTUZ3QXU1YVFpMEppVDJSaWJabnl1aWlOTC81N3Z6cm1ZOU9HZ1lPREhzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOS3BVUmpYTDNjMnExSDRPcFIxcjFWMWdxV0dCd053ZkZ2L3R5dStlSlNFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllPZDFZeHM4RUR1am43WE52THcwWEZqNEM2MUFROW5NZGpVU1hTdC9NR2s9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InU2RjhkQVlJWXNqakgrVkNnVlRCRFJGN3ZIUVRCYWJvTmhZN3RkR3VyMW89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0hzSzBXVVZzSFgwQ28rb0didEN4eGZmWDhyMW4wemNseXhpSUxKelNFTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidlBjNytjaVBDYVJtZFBSTk90VGlxdVcxWmorY3IzYjZteG4vb0U3T2oxTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InpSSGs1RzVvczdmT0dPbWs2YXBERkVmditCY3ppNmswQThGRnp1Z1dKSlZFSGEwT3R1UFhudGwzTFExSEoySWNzdU12UVEyKy9aZGtudlhBb0tVa2hnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQ2LCJhZHZTZWNyZXRLZXkiOiI3ek5sMDVDem1ubkx0Q3lYYUU3KzNNcFcxME53TWFTdFhkbThRZTZZb3hVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjM4NjY1NzAxNjI5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkE1RjVFODQ2MkRGMzMxNDRDNzE1NkNDRjZFREU5RTYwIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTk3MjE4MzB9LHsia2V5Ijp7InJlbW90ZUppZCI6IjM4NjY1NzAxNjI5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkE1OERFM0ZDRDAwM0ZGODc1Q0FEMDQ0RjU5QjhDOUMzIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTk3MjE4MzF9LHsia2V5Ijp7InJlbW90ZUppZCI6IjM4NjY1NzAxNjI5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkE1OTNCRUQ3MzVDODg1QzUzRURGODQ1NEJEMjA1OEJCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTk3MjE4MzJ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IjVMTjc2RjFNIiwibWUiOnsiaWQiOiIzODY2NTcwMTYyOTo2QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkNyeXN0YWwgU2VyZW5hIiwibGlkIjoiNTMxNzgwNzEwMDA2NDo2QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS0tieTRFQ0VPSHlqTWNHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoielFub1pCVHJjRFN2MDdJQWphUTAzUFBQam5IN0RKM2hMb2V0MUZPWG1YYz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiN1dnYWtNcWh4bEx3aXpISFozdTZMcVNSWFkzT0RoN0pJSGIwRjdBTVFMdmtEL281cEkwRVU0VTVxTElSR0JmUEdDUkhwUTZPU2dMTEdaS1pycEhHQ3c9PSIsImRldmljZVNpZ25hdHVyZSI6ImNacUl5TGRlWStQaDJ2UjIvcVIxSUZWTnIyaTNCK2NVRVp2L0l3a0pyYVUyQ3B6amRzeWRWQW5MR2ZFaFVNZmRWcW9Qc3o1UGhNSTJtd2pjcS9rYWpBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMzg2NjU3MDE2Mjk6NkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJjMEo2R1FVNjNBMHI5T3lBSTJrTk56eno0NXgrd3lkNFM2SHJkUlRsNWwzIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQUlJRWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTk3MjE4MjksIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSXlSIiwibGFzdFByb3BIYXNoIjoiUFdrNUIifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY Arslan_MD 🇵🇰*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "false",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "false",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "true",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/lcpy9f.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "Arslan_MD",
// add bot namw here for menu
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// true to get auto status react
STICKER_NAME: process.env.STICKER_NAME || "Arslan_MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923237045919",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "ArslanMD Official",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*©𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 Arslan_MD*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/lcpy9f.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> I'm alive*Arslan_MD*🇵🇰",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "true",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923237045919",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "false",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
