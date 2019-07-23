import { ResponseStatus } from "../../../response-status";

export class SmsTextSingleResponseDetails {
  constructor(
    public to?: string,
    public status?: ResponseStatus,
    public messageId?: string,
  ) { }
}

export class SmsTextSingleResponseDetailsCreator {
  public static create(source: SmsTextSingleResponseDetails): SmsTextSingleResponseDetails {
    return new SmsTextSingleResponseDetails(source.to, source.status, source.messageId);
  }
}
