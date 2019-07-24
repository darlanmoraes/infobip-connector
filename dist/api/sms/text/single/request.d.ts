import { OneOrMore } from "../../../one-more";
export declare class SmsTextSingleRequest {
    from?: string;
    to?: OneOrMore;
    text?: string;
    constructor(from?: string, to?: OneOrMore, text?: string);
}
export declare class SmsTextSingleRequestCreator {
    static create(source: SmsTextSingleRequest): SmsTextSingleRequest;
}
