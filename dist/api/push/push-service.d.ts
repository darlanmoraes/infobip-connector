import { Http } from "../../request";
import { PushMessageBulkRequest } from "./message/bulk/request";
import { PushMessageBulkResponse } from "./message/bulk/response";
import { PushMessageSingleRequest } from "./message/single/request";
import { PushMessageSingleResponse } from "./message/single/response";
export declare class Push extends Http {
    sendPushMessageSingle(body: PushMessageSingleRequest): Promise<PushMessageSingleResponse>;
    sendPushMessageBulk(body: PushMessageBulkRequest): Promise<PushMessageBulkResponse>;
}
