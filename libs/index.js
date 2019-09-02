const fs = require("fs")
const constants = require("./constants")
const dateFormat = require('dateformat')
const path = require('path')

let config = constants.config

module.exports = function(tag, arg){
  if(arg) {
    config = arg;
  }
  return log(tag);
}

let timestamp = function(){
  return new Date().toLocaleDateString() + 
          " " + new Date().toLocaleTimeString();
}

function log(tag){

  return {
    error: function(message){
      print('error', tag, message)
    },
    warning: function(message){
      print('warning', tag, message)
    },
    info: function(message){
      print('info', tag, message)
    },
    debug: function(message){
      print('debug', tag, message)
    },
    log: function(message){
      print('log', tag, message)
    }
  }
}

function print(lvl, tag, message){
  if(config.level <= constants.level[lvl]){
    if(config.output == 'both' || config.output == 'console') {
        console.log(constants.color.regular.debug(timestamp()), 
            constants.colorTag(tag)[lvl], 
            constants.color.regular[lvl](message));
    }
    if(config.output == 'both' || config.output == 'file'){
        write(timestamp(), constants.tag(tag)[lvl], message)
    }
  }
}

function write() {
  let data = "";

  for(i in arguments){
    data += arguments[i] + '\t';
  }

  if(config.filename){
    if(config.timestampFileName) 
      config.filename = getFileTimestamp(config.filename)
    fs.appendFile(config.filename, data + "\r\n", (err) => {
      if(err) console.error(err);
    });
  }
}

function getFileTimestamp(filename){
  let name = path.basename(filename, path.extname(filename))
  let basepath = path.dirname(filename)
  filename = name + '-' + dateFormat(new Date(), "yyyyMMdd") 
              + path.extname(filename);
  
  return path.join(basepath, filename);
}



