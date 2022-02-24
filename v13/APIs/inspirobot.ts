import fetch from 'node-fetch';
import {MessageEmbed} from 'discord.js';
const url = 'https://inspirobot.me/api?generate=true';

export default async function (){
  let txt = await fetch(url).then(r=>r.text());
  const embeds = [new MessageEmbed({
    color : '#2f3136',
    author: {
      name : 'InspiroBot.me',
      iconURL : 'https://inspirobot.me/website/images/favicon.png'
    },
    description : 'AI generated Inspiring Quotes.',
    url: 'https://inspirobot.me',
    image : {url : txt},
    timestamp: new Date()
  })];
  return {embeds};
}