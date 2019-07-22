import { SmsTextSingleResponseDetails } from "./response-details";

export class SmsTextSingleResponse {
  constructor(
    public bulkId: string,
    public messages: SmsTextSingleResponseDetails[],
  ) { }
}
