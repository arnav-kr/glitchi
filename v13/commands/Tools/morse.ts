import pageView from '#libs/pagination';
import morseNode from 'morse-node';
import {Command} from 'Interfaces';

const morse = morseNode.create('ITU');

export const command :Command= {
  name : 'morse',
  description : 'a morse convertor',
  usage : '?<encode||decode> ...<text>',
  args : true,
  examples : ['encode','decode'],
  run({msg,args,content}){
    let text : string;
    
    if(args[0].toLowerCase()=='en'||
      args[0].toLowerCase()=='de'||
      args[0].toLowerCase()=='decode'||
      args[0].toLowerCase()== 'encode')
      text = content().replace(args[0].toLowerCase(),'');
    else text = content();
    
    if(args[0].toLowerCase()=='decode'||
      args[0].toLowerCase()=='de')
      new pageView(msg,morse.decode(text));
    else new pageView(msg,morse.encode(text),
      {
        code:'morse',
        title:'MORSE [ITU Standard]',
      })
    }
}
