import { SmsTextSingleResponseDetails } from "./response-details";
export declare class SmsTextSingleResponse {
    bulkId?: string;
    messages?: SmsTextSingleResponseDetails[];
    constructor(bulkId?: string, messages?: SmsTextSingleResponseDetails[]);
}
export declare class SmsTextSingleResponseCreator {
    static create(source: SmsTextSingleResponse): SmsTextSingleResponse;
}
