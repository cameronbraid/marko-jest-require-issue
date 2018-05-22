const markoCompiler = require('marko/compiler');
module.exports = {
  process(src, filename, config, options) {
    return markoCompiler.compileFile(filename)
  }
};
