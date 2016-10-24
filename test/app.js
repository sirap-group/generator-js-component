'use strict'
var path = require('path')
var assert = require('yeoman-assert')
var helpers = require('yeoman-test')

var describe = global.describe
var before = global.before
var it = global.it

describe('generator-js-component:app', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({someAnswer: true})
      .toPromise()
  })

  it('creates files', function () {
    assert.file([
      'dummyfile.txt'
    ])
  })
})
