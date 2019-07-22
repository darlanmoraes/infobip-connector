import { Configuration, DEFAULT_CONFIGURATION } from "./src/configuration";
import btoa = require('btoa');
import { sendSmsTextSingle } from "./src/api/sms/sms-service";
import { SmsTextSingleRequest } from "./src/api/sms/text/single/request";

export function configure(configuration: Configuration) {
  Object.assign(DEFAULT_CONFIGURATION, configuration);
}

configure(<Configuration> {
  hostname: '', 
  username: '', 
  password: ''
});

sendSmsTextSingle(1, new SmsTextSingleRequest('', [ '' ], 'teste'))
  .then(data => console.log(data))
  .catch(e => console.log(e));