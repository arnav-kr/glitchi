import fetch from 'node-fetch';
import {MessageEmbed} from 'discord.js';
const url = 'https://supertool.vercel.app/apis/sololearn/codes/hottoday';

type hotToday = {
  codeName:string,
  codeLink:string
}[]


export default async function (){
  const obj:hotToday = await fetch(url)
    .then(r=>r.json());
  return [new MessageEmbed({
    author:{
      name : 'Sololearn',
      icon_url:'https://media.discordapp.net/attachments/906985861525155880/906985890356793434/1a4d095737caeccfc65bcb30243f4b8f.png',
    },
    title:'Hot Today',
    url:'https://www.sololearn.com/Codes',
    color:'#1f1e28',
    description:'‣ '+obj.map((o)=>`[${o.codeName}](${o.codeLink})`).join('\n‣ '),
    timestamp:new Date()
  })]
}