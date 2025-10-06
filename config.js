const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0tkUVFKVlVycWVyVUM2bDd5YWZvRjNaUE4reXpKNU9UYStKZk5Rb2xuYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT1NNTWptSVVPN1kxa0xGZ1hGOTZ0UjcrbnU4U1YrVHRSdXdFT0RDUXlRcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxRkk4dkxGb2h0Q25mYVJTODJsaW41VitkQ0dXRVJCUTFrQ1dWQzY2VDJNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5bXhxVzlPVzNzWDhtZmhHbkZ6ZlJiSUFpT2plODk1N1NUaWZhV0RKaTJvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdIZ1FYd1BodnJqZTJWZ3FqemlYaWRYZFRQc0QxK1JUTmNnZkxmQUdBRWM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxsR2o3OC9RNzA1ZG16Z0FJOXNJZFVOZW9STUh4Sk5VUEMzbHJvMkFQQmM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0JFYzdDQVA2alhiWkhjVk9mTTZ1eFBybTZXbkRpcGtvMGNrN01jdmRrQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiazAyTTVGZVdNRjIwV3FPZEpyNktnTTg2dE1jZUV3K3V6MjlqOUhscGxWcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRBaVFtd3JhbkFpUmpBTG8xNmdvRklXdVBRQ2xFVkVqTWp6aEN3YWo5Y0tYbkpJK090L0dmaUZMZEJMdTJFa3pYYk9yU0NNNXR2ZHFUNkJZQUdhZ0NBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTIzLCJhZHZTZWNyZXRLZXkiOiI1VGNrMXFKQ3RVYmdrRnJaTFZIYUd3bE9sdHlpcjMySTcwMGlrd0NWS1pRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkzNzc4NDIxODA0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDQ0VFMDAwRDUyMUU0RDFFOUNEOTdDNTZDRjNEMzg0In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTk3MjA3MTV9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkzNzc4NDIxODA0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDRDE5NERENTlBNkUxODk1RjNCNTE0Rjg5RkQ5MDgzIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTk3MjA3MTV9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IlFIWFRGR0RQIiwibWUiOnsiaWQiOiI5Mzc3ODQyMTgwNDoxNUBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjIwNzYxMDczMzE3MDgxNzoxNUBsaWQiLCJuYW1lIjoi8J+ZgiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTHFabDVNSEVJWHFqTWNHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiRmtLTUt4YnY5NGxGbVg4bmRWZkdaeE15U1pWbW41cHc3T045NEVCSU94QT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiYkY2SzdxNlBQTnhDbCs0OGx3TytTaWVuMTltRjkvNFJvSi8wR3h1ZjJlRFF0NW9FRmlSNGo3MDFzS2VxckdBbmhuMVNTdU9FM0ZXVVdNaFZQVXYxQWc9PSIsImRldmljZVNpZ25hdHVyZSI6Imptd2pmaFZDeWNHRjV0alp4TUd3U0VOM2hmMmdoeXBod0dTSkdxazc5ajZkd29iTDd3N1kzaW44a05XSHd2VGRpZ2ZrdWRxWWFXY2ZiOWpNcDZ4YUN3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTM3Nzg0MjE4MDQ6MTVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUlpDakNzVzcvZUpSWmwvSjNWWHhtY1RNa21WWnArYWNPempmZUJBU0RzUSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnSUJRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU5NzIwNzEzLCJsYXN0UHJvcEhhc2giOiIzZ1BVSmsiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQURmQyJ9",
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
