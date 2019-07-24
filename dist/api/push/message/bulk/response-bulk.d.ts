import { ResponseStatus } from "../../../response-status";
import { PushRecipientDestinationAddress } from "../request-recipient-destination-address";
export declare class PushMessageBulk {
    to?: PushRecipientDestinationAddress;
    status?: ResponseStatus;
    messageCount?: number;
    bulkId?: string;
    constructor(to?: PushRecipientDestinationAddress, status?: ResponseStatus, messageCount?: number, bulkId?: string);
}
export declare class PushMessageBulkCreator {
    static create(source: PushMessageBulk): PushMessageBulk;
}
