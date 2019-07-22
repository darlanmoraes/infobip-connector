export declare class SmsTextSingleRequest {
    from: string;
    to?: string | undefined;
    constructor(from: string, to?: string | undefined);
}
export declare class SmsTextSingleRequestCreator {
    static create(event: SmsTextSingleRequest): SmsTextSingleRequest;
}
