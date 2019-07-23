import { Http } from "../../request";
import { SmsSendPinRequest } from "./2fa/send/request";
import { SmsSendPinResponse } from "./2fa/send/response";
import { SmsVerifyPinRequest } from "./2fa/verify/request";
import { SmsVerifyPinResponse } from "./2fa/verify/response";
import { SmsTextSingleRequest } from "./text/single/request";
import { SmsTextSingleResponse } from "./text/single/response";

export class SMS extends Http {

  public async sendSmsTextSingle(body: SmsTextSingleRequest): Promise<SmsTextSingleResponse> {
    return this.post<SmsTextSingleResponse>(`/sms/1/text/single`, body, SmsTextSingleResponse as any);
  }

  public async send2faPin(body: SmsSendPinRequest): Promise<SmsSendPinResponse> {
    return this.post<SmsSendPinResponse>(`/2fa/1/pin`, body, SmsSendPinResponse as any);
  }

  public async verify2faPin(pinId: string, body: SmsVerifyPinRequest): Promise<SmsVerifyPinResponse> {
    return this.post<SmsVerifyPinResponse>(`/2fa/1/pin/${pinId}/verify`, body, SmsVerifyPinResponse as any);
  }

}
