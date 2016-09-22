'use strict'

var microtime = require('microtime')
var moment = require('moment')

/* public functions */
module.exports = moment().utcOffset() !== 0
    // if there is a utc offset then must convert to utc on every call
    ? microTimestampAdjusted
    // if environment is already UTC then skip the extra processing
    : microTimestamp

/**
 * @function microTimestamp
 *
 * generate micro-second timestamp in MySQL format in UTC environment
 *
 * @returns {string}
 */
function microTimestamp () {
    // get time in seconds and microseconds
    var time = microtime.nowStruct()
    // zero pad micro seconds
    var micro = ('000000' + time[1]).slice(-6)
    // create mysql format timestamp from seconds and append micro seconds
    return moment.unix(time[0]).format('YYYY-MM-DD HH:mm:ss') + '.' + micro
}

/**
 * @function microTimestampAdjusted
 *
 * generate micro-second timestamp in MySQL format in non-UTC environment
 *
 * @returns {string}
 */
function microTimestampAdjusted () {
    // get time in seconds and microseconds
    var time = microtime.nowStruct()
    // zero pad micro seconds
    var micro = ('000000' + time[1]).slice(-6)
    // create mysql format timestamp from seconds and append micro seconds
    return moment.utc(moment.unix(time[0])).format('YYYY-MM-DD HH:mm:ss') + '.' + micro
}