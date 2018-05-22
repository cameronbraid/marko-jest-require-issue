'use strict';
require('marko/node-require')
let marko = require("marko")
let Parent = marko.load(require.resolve("./components/Parent.marko"))
let Parent2 = require("./components/Parent.marko")
describe("test", function(){
  it('test', function() {
    expect(Parent2.renderToString({})).toEqual(Parent.renderToString({}))
  })
})
