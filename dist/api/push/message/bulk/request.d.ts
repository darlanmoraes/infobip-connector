import { OneOrMore } from "../../../one-more";
import { PushCustomPayload } from "../request-custom-payload";
import { PushNotificationOptions } from "../request-notification-options";
import { PushRecipientDestinationAddress } from "../request-recipient-destination-address";
import { ValidityPeriodTimeUnit } from "../request-validity-period-time-unit";
export declare class PushMessageBulkRequest {
    messages?: OneOrMore;
    from?: string;
    to?: PushRecipientDestinationAddress;
    text?: string;
    sendAt?: string;
    customPayload?: PushCustomPayload;
    notificationOptions?: PushNotificationOptions;
    validityPeriodTimeUnit?: ValidityPeriodTimeUnit;
    notifyUrl?: string;
    notifyContentType?: string;
    callbackData?: string;
    targetOnlyPrimaryDevices?: boolean;
    constructor(messages?: OneOrMore, from?: string, to?: PushRecipientDestinationAddress, text?: string, sendAt?: string, customPayload?: PushCustomPayload, notificationOptions?: PushNotificationOptions, validityPeriodTimeUnit?: ValidityPeriodTimeUnit, notifyUrl?: string, notifyContentType?: string, callbackData?: string, targetOnlyPrimaryDevices?: boolean);
}
export declare class PushMessageBulkRequestCreator {
    static create(source: PushMessageBulkRequest): PushMessageBulkRequest;
}
