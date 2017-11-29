var moment = require('moment');

console.log(moment().format());

//January 1st 1970 12:00am -> 0

var now = moment();

console.log('Current timestamp', now.unix());


var timestamp = 1511968266;
var currentMoment = moment.unix(1511968266);

console.log(currentMoment.format("MMMM D, YYYY"));