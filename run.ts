import { SmsTextSingleRequest } from "./src/api/sms/text/single/request";
import { Infobip, Configuration } from "./index";

Infobip.configure({
  hostname: '', 
  username: '', 
  password: ''
} as Configuration);

const sms = new Infobip.SMS();

sms.sendSmsTextSingle(1, new SmsTextSingleRequest('', '', 'teste'))
  .then(data => console.log(data))
  .catch(e => {});