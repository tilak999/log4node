
var log = require('./index')('myapp', {
  filename: 'sample.txt',
  level: 1,
  output: 'both',
  timestampFileName: false
});

log.error('There is fatal error!');
log.warning('This method is not thread safe');
log.info('Sample output');
log.debug('This is a cut point off');
log.log('This is a cut point off');