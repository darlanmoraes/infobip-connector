export declare class PushCustomPayload {
    targetUrl?: string;
    someData?: string;
    constructor(targetUrl?: string, someData?: string);
}
export declare class PushCustomPayloadCreator {
    static create(source: PushCustomPayload): PushCustomPayload;
}
