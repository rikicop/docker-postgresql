const fs = require('fs');
const iconv = require('iconv-lite');

// read the non-UTF8-encoded file
const buffer = fs.readFileSync('estupie.csv');

// convert the buffer to a UTF8-encoded string
const utf8String = iconv.decode(buffer, 'iso-8859-1');

// write the UTF8-encoded string to a new file
fs.writeFileSync('estupie.csv', utf8String);
