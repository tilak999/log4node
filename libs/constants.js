const chalk = require('chalk')

let color = {
  bold: {
    error : chalk.bold.keyword('crimson'),
    warning : chalk.bold.keyword('orange'),
    info : chalk.bold.keyword('dodgerblue'),
    debug : chalk.bold.keyword('silver'),
    log : chalk.bold.keyword('silver')
  },
  regular: {
    error : chalk.keyword('crimson'),
    warning : chalk.keyword('orange'),
    info : chalk.keyword('dodgerblue'),
    debug : chalk.keyword('silver'),
    log : chalk.keyword('silver')
  }
}

let colorTag = function(name) {
  return {
    error :   color.bold.error('[ERROR]','['+name+']'),
    warning:  color.bold.warning('[WARN] ','['+name+']'),
    info:     color.bold.info('[INFO] ','['+name+']'),
    debug:    color.bold.debug('[DEBUG]','['+name+']'),
    log:      color.bold.debug('[LOG]  ','['+name+']')
  }
}

let tag = function(name) {
  return {
    error :  '[ERROR] ['+name+']',
    warning: '[WARN]  ['+name+']',
    info:    '[INFO]  ['+name+']',
    debug:   '[DEBUG] ['+name+']',
    log:     '[LOG]   ['+name+']'
  }
}

const level = {
  'error' : 0,
  'warning': 1,
  'info': 2,
  'debug': 3,
  'log': 4
}

let config = {
  filename: '',
  level: level.error,
  output: 'console',
  timestampFileName: false
}


module.exports = { color, colorTag, tag , level, config}