# micro-timestamp

    const microTimestamp = require('micro-timestamp')
    // "2018-11-11 11:11:11.111111"
    microTimestamp()

Returns a UTC micro-second timestamp in MySQL compatible format using the
[microtime](https://www.npmjs.com/package/microtime) module.

If the system timezone is not set to UTC offset will be applied to return
correct UTC time.
