let block :{[index:string] :string|undefined } ={};
let prefix = ["g>","?:"][+(process.env.BETA??0)];

export default {
  prefix,
  ownerId: "800445583046213663",
  guildId: "856090036998635520",

  channels: {
    errorLog: "857648123676459058",
    bugReport: "861422096852844544",
    feedback: "856907506612830241",
    suggestion: "874308146728943636",
    serverLog : "857636955553398814",
  },
  
  emojis: {
    thumbsup: "<:thumbsup:862862241136115732>",
    thumbsdown: "<:thumbsdown:862862298556399656>",
    think: "<:chadThink:862312026608369695>",
    sad: "<:sed:860576595039354931>",
    ok: "<:ok:861456928184860672>",
    cry: "<a:sadGuitar:869172267869949962>",
    aha: "<a:aha:858172419792961657>",
    nono: "<:noNOno:831705934648573982>",
    yus: "<a:yusSor:862567696898195476>",
    sneak: "<:sneakPeek:852714216057733180>",
    dance: "<a:dancingBear:855432117180432384>",
    ping: "<a:pingPong:855558851726409759>",
    evilLaugh: "<:voldyLaugh:854700368126541834>",
    evilAttack: "<:voldyAttack:853598830632763432>",
    quick: "<:quick:856818054602948608>"
  },
    
  block,
}
