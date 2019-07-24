import { ResponseStatus } from "../../../response-status";
export declare class SmsTextSingleResponseDetails {
    to?: string;
    status?: ResponseStatus;
    messageId?: string;
    constructor(to?: string, status?: ResponseStatus, messageId?: string);
}
export declare class SmsTextSingleResponseDetailsCreator {
    static create(source: SmsTextSingleResponseDetails): SmsTextSingleResponseDetails;
}
