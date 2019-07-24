import { OneOrMore } from "../../one-more";
export declare class PushRecipientDestinationAddress {
    cloudType?: OneOrMore;
    pushRegistrationId?: OneOrMore;
    platform?: OneOrMore;
    sdkVersion?: OneOrMore;
    osVersion?: OneOrMore;
    deviceManufacturer?: OneOrMore;
    deviceModel?: OneOrMore;
    applicationVersion?: OneOrMore;
    deviceSecure?: OneOrMore;
    externalUserId?: OneOrMore;
    phoneNumber?: OneOrMore;
    email?: OneOrMore;
    pushRegistrationEnabled?: boolean;
    notificationsEnabled?: boolean;
    geofencingEnabled?: boolean;
    constructor(cloudType?: OneOrMore, pushRegistrationId?: OneOrMore, platform?: OneOrMore, sdkVersion?: OneOrMore, osVersion?: OneOrMore, deviceManufacturer?: OneOrMore, deviceModel?: OneOrMore, applicationVersion?: OneOrMore, deviceSecure?: OneOrMore, externalUserId?: OneOrMore, phoneNumber?: OneOrMore, email?: OneOrMore, pushRegistrationEnabled?: boolean, notificationsEnabled?: boolean, geofencingEnabled?: boolean);
}
export declare class PushRecipientDestinationAddressCreator {
    static create(source: PushRecipientDestinationAddress): PushRecipientDestinationAddress;
}
