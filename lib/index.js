'use strict';

var muxjs = {
  codecs: require('./codecs/index.js'),
  mp4: require('./mp4/index.js'),
  flv: require('./flv/index.js'),
  mp2t: require('./m2ts/index.js')
};

// include all the tools when the full library is required
muxjs.mp4.tools = require('./tools/mp4-inspector');
muxjs.flv.tools = require('./tools/flv-inspector');
muxjs.mp2t.tools = require('./tools/ts-inspector');


module.exports = muxjs;
