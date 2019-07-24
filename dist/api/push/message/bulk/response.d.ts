import { PushMessageBulk } from "./response-bulk";
export declare class PushMessageBulkResponse {
    bulks?: PushMessageBulk[];
    constructor(bulks?: PushMessageBulk[]);
}
export declare class PushMessageBulkResponseCreator {
    static create(source: PushMessageBulkResponse): PushMessageBulkResponse;
}
