import { Http } from "../../request";
import { PushMessageBulkRequest } from "./message/bulk/request";
import { PushMessageBulkResponse } from "./message/bulk/response";
import { PushMessageSingleRequest } from "./message/single/request";
import { PushMessageSingleResponse } from "./message/single/response";

export class Push extends Http {

  public async sendPushMessageSingle(body: PushMessageSingleRequest): Promise<PushMessageSingleResponse> {
    return this.post<PushMessageSingleResponse>(`/push/2/message/single`, body, PushMessageSingleResponse as any);
  }

  public async sendPushMessageBulk(body: PushMessageBulkRequest): Promise<PushMessageBulkResponse> {
    return this.post<PushMessageBulkResponse>(`/push/2/message/multi`, body, PushMessageBulkResponse as any);
  }

}
