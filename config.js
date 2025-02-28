const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUc2alIvNTA5WFd4czF6NmY3YWZWY0crN3VYdFVVTHI3Tk9vQktCY3prTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWnpwcWJDaEFkM0ZwL0pSNzRVSm1mUWwwbTNvd1lEU2hkYTRxU2Q3WnZnVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVQjNjenZDY1pUTHpQU2xoRTErM1ArWEV3TXBqeEZIQndsV3ZkSkhjaVdjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzM09uUHdyRExkaFlWOHpTRU5ybTllYmFnVlNGWDdvanFaR0duUVBrc1FnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1IcjdUZ1JGYU8rZWpFa0cyVkwvQnFXSzRsWklWeDQ1cDkwQ1RSL0hRbkk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJ6V1VYQ3VCN09iblNwdUR0anQ3ZHE0L3BmWmliOVZla3NBemNlRXBGaVU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNktEUHhKQS9YMzhnTlFsTXJkSFRKT25LbWlGYzdHd09kUUFDNXJEZ3JHcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWmZWUnhzTWpwN0VpaE1qRDUzOVVhZ0tSMklFQktmeHVOK2ZtY3d1UVpqbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ing3a2haUGZmaThrc1RsQmw3Q1pNUThmaWxWVm5zS1c0Vlp5WHo2cTB3WGxQZnlEMnpwT1ErTm9nNHViUDlxK1UxT2dwdWlxUmJaQWZSNlkrVFhXL0JnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc0LCJhZHZTZWNyZXRLZXkiOiJLL0NtRUJFa0F0TnZManFuVHREVVhTNWRianpMRW0zWDhPNDRUaG94a29JPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIyMTcwOTgyMDMxOEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIxRDU2ODhFMTAzOThFQTU3NjYyRTE3MDgwMzJDRDA0QyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzQwNzcxNTEzfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMjE3MDk4MjAzMThAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQkU2RUZDM0ZCMEQyMzZDMDJEQkRCMjk5MzdFMkYyOTYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0MDc3MTUxM31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoidEVGckYxSU1TYVdCSlZRNEEyU3pFUSIsInBob25lSWQiOiIwMzc1MjhhNC04ZGI5LTQyNDYtYjkzMy1mNDlmOGQ3M2U0NmYiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZXZYZ1ZRSHRrcDVwM2ZtT2RoWHpFRWdhUnNBPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InpLNUxoNi9aNStWR3Y5TkNrRlVNZ2NaOXFzRT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiIzTkdaUUJWRiIsIm1lIjp7ImlkIjoiMjIxNzA5ODIwMzE4OjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2UvvCdlLjwnZWE8J2UvPCdlYzihJ1f8J2UufCdlYbwnZWMX+KElfCdlLvwnZS48J2VjiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUGkzNjlJRUVLbWhpTDRHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoidDFLWC9OWTh5cEJNaXFGcFhFMTgrWnpFM2FsRkxyZFp6WHFnMlgxVnZnaz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiUnR0SnVXS2IvOWp2TG1FQXk1Yk1GbDJmbnhCSFhQdHNCVGlCdCs5SmRpOERXcW83dnVRTjhrSVRGQSt3RE56QmpOTXZaN1hjeFIra1NyMVUxcko0RFE9PSIsImRldmljZVNpZ25hdHVyZSI6Imc2MzNqYXZOV3d6Z1dSRDhqL0FEQnJVTFFBclJjRVBFRklzeXNZaW13L1lmL2IzZTVoMndRVXNJMDZHYi8zRXowaFloRGZvM1NmN1d6cjhYMlpjNkRnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjIxNzA5ODIwMzE4OjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYmRTbC96V1BNcVFUSXFoYVZ4TmZQbWN4TjJwUlM2M1djMTZvTmw5VmI0SiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0MDc3MTUxMSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFHd0YifQ==",
MONGODB: process.env.MONGODB || "mongodb+srv://Maher:Zubair@sigma-male.ggwx4gc.mongodb.net/?retryWrites=true&w=majority",
  MODE :  process.env.MODE || "public", // PUT PUBLIC OR PRIVATE
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/x5v8x1.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "Hi 👋, I am RUOK V1.0 and i am alive 🥺. Thanks for supporting my developer 💦.",
};
