import { Http } from "../../request";
import { SmsTextSingleRequest } from "./text/single/request";
import { SmsTextSingleResponse } from "./text/single/response";

export class SMS extends Http {

  public async sendSmsTextSingle(id: number, body: SmsTextSingleRequest): Promise<SmsTextSingleResponse> {
    return this.post<SmsTextSingleResponse>(`/sms/${id}/text/single`, body, SmsTextSingleResponse as any);
  }

}
