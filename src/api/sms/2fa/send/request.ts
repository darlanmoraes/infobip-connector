export class SmsSendPinRequest {
  constructor(
    public to?: string,
    public applicationId?: string,
    public messageId?: string,
  ) { }
}

export class SmsSendPinRequestCreator {
  public static create(source: SmsSendPinRequest): SmsSendPinRequest {
    return new SmsSendPinRequest(source.to, source.applicationId, source.messageId);
  }
}
