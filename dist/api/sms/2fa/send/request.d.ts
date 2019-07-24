export declare class SmsSendPinRequest {
    to?: string;
    applicationId?: string;
    messageId?: string;
    constructor(to?: string, applicationId?: string, messageId?: string);
}
export declare class SmsSendPinRequestCreator {
    static create(source: SmsSendPinRequest): SmsSendPinRequest;
}
