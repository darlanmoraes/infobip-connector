import { ResponseStatus } from "../../../response-status";
export declare class PushMessageSingleResponse {
    to?: string;
    status?: ResponseStatus;
    messageCount?: number;
    bulkId?: string;
    constructor(to?: string, status?: ResponseStatus, messageCount?: number, bulkId?: string);
}
export declare class PushMessageSingleResponseCreator {
    static create(source: PushMessageSingleResponse): PushMessageSingleResponse;
}
