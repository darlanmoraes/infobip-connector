import { SmsTextSingleResponseDetails } from "./response-details";

export class SmsTextSingleResponse {
  constructor(
    public bulkId?: string,
    public messages?: SmsTextSingleResponseDetails[],
  ) { }
}

export class SmsTextSingleResponseCreator {
  public static create(source: SmsTextSingleResponse): SmsTextSingleResponse {
    return new SmsTextSingleResponse(source.bulkId, source.messages);
  }
}
