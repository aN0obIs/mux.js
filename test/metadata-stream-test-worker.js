var mp2t, metadataStream;

mp2t = require('../lib/m2ts/index.js');
metadataStream = new mp2t.MetadataStream();

module.exports = function(self) {
  self.addEventListener('message', function(e) {
    metadataStream.on('data', function(data) {
      self.postMessage(data);
    });
    metadataStream.push(e.data);
  });
};
