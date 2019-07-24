import { Http } from "../../request";
import { SmsSendPinRequest } from "./2fa/send/request";
import { SmsSendPinResponse } from "./2fa/send/response";
import { SmsVerifyPinRequest } from "./2fa/verify/request";
import { SmsVerifyPinResponse } from "./2fa/verify/response";
import { SmsTextSingleRequest } from "./text/single/request";
import { SmsTextSingleResponse } from "./text/single/response";
export declare class SMS extends Http {
    sendSmsTextSingle(body: SmsTextSingleRequest): Promise<SmsTextSingleResponse>;
    send2faPin(body: SmsSendPinRequest): Promise<SmsSendPinResponse>;
    verify2faPin(pinId: string, body: SmsVerifyPinRequest): Promise<SmsVerifyPinResponse>;
}
