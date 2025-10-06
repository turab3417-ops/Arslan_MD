const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEZYbzhZVlBUZmRuMi9mU0dIaE9ONTQveW1ZSHJ6d1RMblQxNGpHWlFXRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRFVwbmVVbUI2c3BRdnJHeEtPcm00VWs0TTJobVU5MU9UYkRCYUJ0SE14Zz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXTUlQalBUalJYSmtIT282TXBOejVRcVZQKzE1V2ZqUEFXMTkxZHRmRzF3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiZEVKZjFPRjdBM1NyMkIwS1krNFdwTytndmc2UmF0c3IwOHBTTVJadkM4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVCek5vZEo0Z1JPZ1lNSGtpU0d3WFBYdzNja0xpWlRlNElidFpEdlRKV1U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imd5RDRnU0w4MmFEbkJyY2JMa1RSRUxkMWcrcjFFSWw1Nm5mK0grUTF1UzQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUMzbUVtVGdTaThNTmU1Z0RnS1dpelhybWxQNE1nQ1BWSzJsYUQ4elAybz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRU5qM213WVB5VDYxbC9jUGhWT21KaXc2dHk4Sno0UXNPdm9mVlM2QU9VTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkwyRmh2RVNTa2htNEJNQVNudVRmb25LMUN1Sk5OTTdlcVh1WEd5bWpYYkFvc0dXMUJsUUxIZjBsUzNvNUh3ZUZpTy9IakhwZHJjbkFzaUJFVTFpN0R3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc1LCJhZHZTZWNyZXRLZXkiOiJUbG5UTzMzNHV1dXBCQXR3VVZNa2VZNVJzR2h4V1BiNXhlS1FsRXcraWlFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjM4MDY2MDI3MTMxMEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBNTg3Q0Q4N0Y5QkQ2MDhFN0NBOTFGOUE2NjE1NEVBMyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU5NzQ0NTc4fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIzODA2NjAyNzEzMTBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQTUxQUM4Mzc4MUM0NEQwRjJFOThFNDRERjgwMkMzQTYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1OTc0NDU3OH0seyJrZXkiOnsicmVtb3RlSmlkIjoiMzgwNjYwMjcxMzEwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkE1QzNBM0Y4MTM4QkY3NzAxRUE0RjhEQkQ0QkE1N0Y1In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTk3NDQ1Nzl9LHsia2V5Ijp7InJlbW90ZUppZCI6IjM4MDY2MDI3MTMxMEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBNTU2MTg5ODY0ODIyQzIwNjBGRjY0Q0EyMjY3RENDMSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU5NzQ0NTc5fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJIWVFSVFJaSCIsIm1lIjp7ImlkIjoiMzgwNjYwMjcxMzEwOjNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQ3J5c3RhbCBTZXJlbmEiLCJsaWQiOiIyNDcwNzY5MzYwMDM2OTc6M0BsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tlYnk0RUNFTDJranNjR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlRVdVFHcXJ3amJmVlVJVXprOWVEbFNQL2tWS2VWZTVaRDE5cmRBaGxGMEk9IiwiYWNjb3VudFNpZ25hdHVyZSI6Im5yN1hrQ2sxSktlZlU3OEE5ZVpqYjRaMWRJQUNaczNWbmFIbmQ2TmRCMXQ2Rjk1SjV0N09uMk5xZ1lSOERCalZ2aTFoVkxMS21kTU1uaG9uM1NCd0FBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJYRHJNZkZJbEtBMUFiOW5LUWFBM2cwejU3Y2szbXk5UFczYzZ3MXh2WWRYK0NZRTU2WmxkOWJmamQvMzhsOXJJcXZnZHBNV0VIbHc0VHhsQTZOeEtDZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjM4MDY2MDI3MTMxMDozQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlUxTGtCcXE4STIzMVZDRk01UFhnNVVqLzVGU25sWHVXUTlmYTNRSVpSZEMifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBSUlCUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1OTc0NDU3NywibGFzdFByb3BIYXNoIjoiMUs0aEg0IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFBU2EifQ==",
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
