import { NcStatus } from "../../nc-status";
import { SmsStatus } from "../../sms-status";

export class SmsSendPinResponse {
  constructor(
    public pinId?: string,
    public to?: string,
    public ncStatus?: NcStatus,
    public smsStatus?: SmsStatus,
  ) { }
}

export class SmsSendPinResponseCreator {
  public static create(source: SmsSendPinResponse): SmsSendPinResponse {
    return new SmsSendPinResponse(source.pinId, source.to, source.ncStatus, source.smsStatus);
  }
}
