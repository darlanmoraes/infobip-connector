import { PinError } from "../pin-error";

export class SmsVerifyPinResponse {
  constructor(
    public pinId?: string,
    public msisdn?: string,
    public verified?: boolean,
    public attemptsRemaining?: number,
    public pinError?: PinError,
  ) { }
}

export class SmsVerifyPinResponseCreator {
  public static create(source: SmsVerifyPinResponse): SmsVerifyPinResponse {
    return new SmsVerifyPinResponse(source.pinId, source.msisdn, source.verified,
      source.attemptsRemaining, source.pinError);
  }
}
