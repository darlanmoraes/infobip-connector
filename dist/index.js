"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const configuration_1 = require("./src/configuration");
const sms_service_1 = require("./src/api/sms/sms-service");
const request_1 = require("./src/api/sms/text/single/request");
function configure(configuration) {
    Object.assign(configuration_1.DEFAULT_CONFIGURATION, configuration);
}
exports.configure = configure;
configure({
    hostname: 'http://api.infobip.com',
    username: 'QuantaPrev',
    password: 'Quanta@1234'
});
sms_service_1.sendSmsTextSingle(1, new request_1.SmsTextSingleRequest('5551993110077', ['551983574785'], 'teste'))
    .then(data => console.log(data))
    .catch(e => console.log(e));
//# sourceMappingURL=index.js.map