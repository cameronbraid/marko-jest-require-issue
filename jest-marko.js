const markoCompiler = require('marko/compiler');
module.exports = {
  process(src, filename, config, options) {
    let markoSrc = markoCompiler.compileFile(filename)
    return markoSrc
  }
};
