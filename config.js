
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


  
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib05weVhSZmVNYlNtQnpibjhZeVFLb2hYVXZQNVYzUU5GV0cxKytZRVNGaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidHhUaStPLzg4bzRUSEQwQzkvT0ZaTFhTcTYxVWI4cG53UExsQzM4eWd5az0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrRnFUWWFhdGZFSDVudjBHZTRvSmEzZkY2L0gxVVpYVk1HSVgxSGgwcDJFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKSVNESm50SFRzQ1FmbWk5RHBRS0E3UmdBVnMrQzUwdXh3ZEhBTHJKZlR3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9BVGw0QVVZT0RFU01sTVBrRi9TY0E4Y2dWei9IZUxpQVU5ZTM5Z2E1azQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhMckdFQlJ2SXJhcHZKRVVvbTMwckNYUUl5cFpRUnRmMFdYYVRNQXJ3RzA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZU5LdUdYNXh6dmgzZE56dFBST3hRMis2MTJjeWJKZlordld4SzdzbzVHdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVDU3eVE3WGZWZlNWVGlUdHgreGJNSFg4ZUhiU2M5cmJrZmQyblVnNUtrUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndYQ0JWb3Fhc3MyUmg4V0FGYWRBTHA5RkNQVWZTcnVHcWQzVG8xOGk1RkZqQ2p1dU1PRmh1RXByelRXMGh3bUZkcHVIcSt1Z2l2cy9OWExjTUFzZ0JRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTMyLCJhZHZTZWNyZXRLZXkiOiJnTW5NZHEwOGRGRmYxZUVmdjAzSnc5dytpVGF1aXhMdVo3UTBzbWxvTWVVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzIsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMiwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJxWXpwcDZuSFMydXNUVnlRX2xrVHZ3IiwicGhvbmVJZCI6IjA4NWJjNDVlLTExMjItNGJjNC05ZWE5LTNkYmFhNmVlZDU0ZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpTEYza3ZiSlQvN3NZcTk0UnVPeXR1VjdZSE09In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZDNaL2ZOc3d1SEJUdm81eGhYUGdvREtFVm5NPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkI1S1E4WkFGIiwibWUiOnsiaWQiOiIyMzQ5MTY0MjgyNTg4OjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiSU1PTEUifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0wreGdKb0RFT3ZIejdVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImgrVDgwMDNZdVQvcTRkWE5yWlNyc3h4Y3RjcE9kNzk2TEdlVzZJUDBnMnc9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ik5yeVZlaXNJeTZ2Uk5tWUJnUDF4VGJlOHRkTjlJNVZxM2ZOWmFLYUlXTWFKRndieGdvcGQ4a3BNYXQ5a3BUNTcycGNXY3FxbERnQ0NHZkFLVWMrOUJBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJyL0xhYTBtQUxYNGdsWFhKNis5NlAyM1Y4S1NXcXNBZXltdEpkNk9LcWdLaUJRYXFUaENoMjJacmhmNXMzOFFwS2Z5WkM0V0Y5WXJVVU5scWVMMDJDUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkxNjQyODI1ODg6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZZmsvTk5OMkxrLzZ1SFZ6YTJVcTdNY1hMWEtUbmUvZWl4bmx1aUQ5SU5zIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIzMDY1MzM3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU5OdyJ9" //Make sure session id starts with Byte;;;



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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
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
