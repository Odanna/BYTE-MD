
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "TalkDrove@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Hamza:3800380ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "2349013009229@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/HyHamza/BYTE-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/logo.jpg";
global.devs = "923072380380";
global.sudo = process.env.SUDO || "2349013009229";
global.owner = process.env.OWNER_NUMBER || "2349013009229";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "all";
global.read_status_from = process.env.READ_STATUS_FROM || "all";

global.api_smd = "https://HyHamza.vercel.app";
global.scan = "https://byte-session.vercel.app/";




global.SESSION_ID =
  process.env.SESSION_ID ||





  


//___________________________________________________________________________________________________


  
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUwxejZ3RGlpUzJXTUxiWWppUEdBZ3dPMXhUY1MzWjNCa00zclZCWXhrST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQXJvR1dkNE8zNzM5TzJZYVJ6cVRGUDd2RFJOTDBpN0lMbkJ1NUxuVEN6ST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtQXNTOWVHNkVwNjNtd1FzTXUxaWd0anJOUkt6S2d3eWtSVEFmT1lWaTJvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsb1JMOXY1ek9wYUsraUxXallycG1HbnNqcU9sVG5PU1VjbGVzWFVwSnhNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlOcTRyYnBCeWY2MEdSS3lQeGdRSmhOTTBieFVuMUgyVG0rRGMyMElYSDA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkR5cWttd0lLMmZzS09NUGZreUR5Tm8zQ1dIcEhXL3dpblcrZ0VBZklXbFE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUVjRjdodytBbFpwQTZac2s4MHJwVHkxTHFnbTl1Z2lzSklPdkwwZG8xYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMDNhcWN1REtOUjQwRCtodU1nbXU5UktweG9UWkpqYWFpaWZzdVNPaXFtWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhmVms3K1ptT3VaNHZpaTlpUDVneVptdjlSdTJkVzFpY1NxMFBldHhZejhuVlFjaU1lS3RNR05acmtaaVc5SitZWE1DME5QdDZZTlYxOHNTQkJvRUN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ2LCJhZHZTZWNyZXRLZXkiOiJTT3lvT0pidUpLd0lVZDVpcFBYa29MVm9FZXpWYlkwQkdwcUlsTXNDTzBZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIwREtiWUxDb1NtU2Ntc01iNEdoRG1RIiwicGhvbmVJZCI6ImJhNTUwMGE4LWY1MmYtNDFmZi05MDdmLWI5YWQ2Y2RjZGU2NCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQMUxhb2Vub2RaRDF6S3hoNzJtRU8xQU5BZFk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicW9XNTFQRVg2bUNUN1dFOVo4RGFuTHdveUVZPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjNHRVAzNkpGIiwibWUiOnsiaWQiOiIyMzQ5MTY0MzIyOTg3OjJAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01PcjQ4TVBFTlBZOWJRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjM3RlJMaUdIRlFzK1plWDZmc0NlaUw1VFAxWE9JaWJHZUdkVWRHdE5WM2M9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlV3Y2NTTjVaZUJkL3dmTEZENW0zdnRTdTczMFhqOXZvemwrcDB2THlwN2p3YWF1Nm5FbjRPMUE1TWNNcStxRnM0QzdxTzl2N2ZCV1I4VXViaFJXR2dBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ2Y3M4U1ZnRmpXb0ZKZUhIOERDRG5NWVNnaWx2RFRvQ1VEMEVQRXZGRW5Ka3p4WDdCcU83dVg4ZWZyVUJlOEJXMC9GT0s5dWt6WXAwNDNEcTUzZ0xEZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkxNjQzMjI5ODc6MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkK3hVUzRoaHhVTFBtWGwrbjdBbm9pK1V6OVZ6aUlteG5oblZIUnJUVmQzIn19XSwicGxhdGZvcm0iOiJpcGhvbmUiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjE1OTI5Mjd9" //Make sure session id starts with Byte;;;



//________________________________________________________________________









module.exports = {
  menu: process.env.MENU || "",

  //Prefix variable
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "11.5.0",
  caption: process.env.CAPTION || "*Powered By Dark raider*",
  author: process.env.PACK_AUTHER || "Dark raider",
  packname: process.env.PACK_NAME || "Dark raider",
  botname: process.env.BOT_NAME || "BYTE-MD",
  ownername: process.env.OWNER_NAME || "Dark raider",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "BYTE").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
