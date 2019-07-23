export class SmsVerifyPinRequest {
  constructor(
    public pin?: string,
  ) { }
}

export class SmsVerifyPinRequestCreator {
  public static create(source: SmsVerifyPinRequest): SmsVerifyPinRequest {
    return new SmsVerifyPinRequest(source.pin);
  }
}
