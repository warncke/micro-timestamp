'use strict'

const assert = require('chai').assert
const microTimestamp = require('../lib/micro-timestamp')

describe('micro-time', function () {

    it('should return MySQL format micro-second timestamp', function () {
        assert.match(microTimestamp(), /^\d\d\d\d-\d\d-\d\d \d\d:\d\d:\d\d\.\d\d\d\d\d\d$/)
    })
    
})