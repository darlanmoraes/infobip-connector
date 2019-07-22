import { SmsTextSingleResponseStatus } from "./response-status";
export declare class SmsTextSingleResponseDetails {
    to: string;
    status: SmsTextSingleResponseStatus;
    messageId: string;
    constructor(to: string, status: SmsTextSingleResponseStatus, messageId: string);
}
