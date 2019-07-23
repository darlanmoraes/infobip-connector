import { OneOrMore } from "../../one-more";

export class PushRecipientDestinationAddress {
  constructor(
    public cloudType?: OneOrMore,
    public pushRegistrationId?: OneOrMore,
    public platform?: OneOrMore,
    public sdkVersion?: OneOrMore,
    public osVersion?: OneOrMore,
    public deviceManufacturer?: OneOrMore,
    public deviceModel?: OneOrMore,
    public applicationVersion?: OneOrMore,
    public deviceSecure?: OneOrMore,
    public externalUserId?: OneOrMore,
    public phoneNumber?: OneOrMore,
    public email?: OneOrMore,
    public pushRegistrationEnabled?: boolean,
    public notificationsEnabled?: boolean,
    public geofencingEnabled?: boolean,
  ) { }
}

export class PushRecipientDestinationAddressCreator {
  public static create(source: PushRecipientDestinationAddress): PushRecipientDestinationAddress {
    return new PushRecipientDestinationAddress(source.cloudType, source.pushRegistrationId, source.platform,
      source.sdkVersion, source.osVersion, source.deviceManufacturer, source.deviceModel, source.applicationVersion,
      source.deviceSecure, source.externalUserId, source.phoneNumber, source.email, source.pushRegistrationEnabled,
      source.notificationsEnabled, source.geofencingEnabled);
  }
}
