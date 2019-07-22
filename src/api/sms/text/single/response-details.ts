import { SmsTextSingleResponseStatus } from "./response-status";

export class SmsTextSingleResponseDetails {
  constructor(
    public to: string,
    public status: SmsTextSingleResponseStatus,
    public messageId: string,
  ) { }
}
