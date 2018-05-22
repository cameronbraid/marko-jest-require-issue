'use strict';
//require('marko/node-require') // not needed since we are using jest-marko.js transformer
let marko = require("marko")
let Parent = marko.load(require.resolve("./components/Parent.marko"))
let Parent2 = require("./components/Parent.marko")
describe("test", function(){
  it('load vs load', function() {
    expect(Parent.renderToString({})).toEqual(Parent.renderToString({}))
  })
  it('require vs require', function() {
    expect(Parent2.renderToString({})).toEqual(Parent2.renderToString({}))
  })
  it('require vs load', function() {
    expect(Parent2.renderToString({})).toEqual(Parent.renderToString({}))
  })
})
