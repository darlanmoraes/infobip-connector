import { PushCustomPayload } from "../request-custom-payload";
import { PushNotificationOptions } from "../request-notification-options";
import { PushRecipientDestinationAddress } from "../request-recipient-destination-address";
export declare class PushMessageSingleRequest {
    from?: string;
    to?: PushRecipientDestinationAddress;
    text?: string;
    sendAt?: string;
    customPayload?: PushCustomPayload;
    notificationOptions?: PushNotificationOptions;
    validityPeriod?: number;
    notifyUrl?: string;
    notifyContentType?: string;
    callbackData?: string;
    targetOnlyPrimaryDevices?: boolean;
    constructor(from?: string, to?: PushRecipientDestinationAddress, text?: string, sendAt?: string, customPayload?: PushCustomPayload, notificationOptions?: PushNotificationOptions, validityPeriod?: number, notifyUrl?: string, notifyContentType?: string, callbackData?: string, targetOnlyPrimaryDevices?: boolean);
}
export declare class PushMessageSingleRequestCreator {
    static create(source: PushMessageSingleRequest): PushMessageSingleRequest;
}
