function log(i,t){console.log('\033['+i+'m'+t+'\x1b[0m')}log(34,'searching for TOKEN...');if(!process.env.TOKEN)try{require('dotenv').config()}catch{};if (!process.env.TOKEN){log(31,'TOKEN not Found!');log(33,'Please declare TOKEN=<your token> in .env file at the root of your directory or in SECRET');return;}global.config = require('./config.json');log(32,'success!');config.prefix = config.prefix[+config.local];log(34,'logging in...');require('./build/index.js');if(config.HTTPserver)require('./server.js');process.on('unhandledRejection', console.log);