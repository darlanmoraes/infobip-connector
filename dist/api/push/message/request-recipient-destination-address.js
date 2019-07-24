"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PushRecipientDestinationAddress {
    constructor(cloudType, pushRegistrationId, platform, sdkVersion, osVersion, deviceManufacturer, deviceModel, applicationVersion, deviceSecure, externalUserId, phoneNumber, email, pushRegistrationEnabled, notificationsEnabled, geofencingEnabled) {
        this.cloudType = cloudType;
        this.pushRegistrationId = pushRegistrationId;
        this.platform = platform;
        this.sdkVersion = sdkVersion;
        this.osVersion = osVersion;
        this.deviceManufacturer = deviceManufacturer;
        this.deviceModel = deviceModel;
        this.applicationVersion = applicationVersion;
        this.deviceSecure = deviceSecure;
        this.externalUserId = externalUserId;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.pushRegistrationEnabled = pushRegistrationEnabled;
        this.notificationsEnabled = notificationsEnabled;
        this.geofencingEnabled = geofencingEnabled;
    }
}
exports.PushRecipientDestinationAddress = PushRecipientDestinationAddress;
class PushRecipientDestinationAddressCreator {
    static create(source) {
        return new PushRecipientDestinationAddress(source.cloudType, source.pushRegistrationId, source.platform, source.sdkVersion, source.osVersion, source.deviceManufacturer, source.deviceModel, source.applicationVersion, source.deviceSecure, source.externalUserId, source.phoneNumber, source.email, source.pushRegistrationEnabled, source.notificationsEnabled, source.geofencingEnabled);
    }
}
exports.PushRecipientDestinationAddressCreator = PushRecipientDestinationAddressCreator;
//# sourceMappingURL=request-recipient-destination-address.js.map