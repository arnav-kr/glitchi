const fetch = require('node-fetch');
const info = require('../../config.json').info;

module.exports = {
  name : 'fetch',
  description : 'To fetch any URL.',
  args : true ,
  execute(msg,args){
    fetchit(
      args[0],
      (data)=>{msg.channel.send({embed : {
        'color' : '#00bfff',
        'title':'Fetched document : ',
        'description' : '```\n'+data.substr(0,500)+'```',
        'fields' : [
          {
            'name' : 'Full document :',
            'value': `https://cors-fetch-it.herokuapp.com/${args[0]}`
          },
        ],
        'timestamp':new Date(),
        'footer': info,
        }})},
        (err)=>{msg.channel.send({embed:{
          'color': '#00bfff',
          'title':'Failed to fetch :',
          'description':`\`${err.message}\``,
          'timestamp':new Date(),
          'footer':info,
        }})}
    );
  }
};

//To  fetch and callback
function fetchit(link, func, error = () => {}) {
  fetch(link)
    .then(resp => resp.text())
    .then(d => func(d))
    .catch(err => error(err));
}