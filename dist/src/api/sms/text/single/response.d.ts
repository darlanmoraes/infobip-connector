import { SmsTextSingleResponseDetails } from "./response-details";
export declare class SmsTextSingleResponse {
    bulkId: string;
    messages: SmsTextSingleResponseDetails[];
    constructor(bulkId: string, messages: SmsTextSingleResponseDetails[]);
}
