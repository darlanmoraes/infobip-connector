"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = require("./src/api/sms/text/single/request");
const index_1 = require("./index");
index_1.Infobip.configure({
    hostname: 'https://api.infobip.com',
    username: 'QuantaPrev',
    password: 'Quanta@1234'
});
const sms = new index_1.Infobip.SMS();
sms.sendSmsTextSingle(1, new request_1.SmsTextSingleRequest('Quanta Previdência', '5551983574785', 'teste'))
    .then(data => console.log(data))
    .catch(e => { });
//# sourceMappingURL=run.js.map