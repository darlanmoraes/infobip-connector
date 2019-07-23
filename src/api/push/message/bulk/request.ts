import { OneOrMore } from "../../../one-more";
import { PushCustomPayload } from "../request-custom-payload";
import { PushNotificationOptions } from "../request-notification-options";
import { PushRecipientDestinationAddress } from "../request-recipient-destination-address";
import { ValidityPeriodTimeUnit } from "../request-validity-period-time-unit";

export class PushMessageBulkRequest {
  constructor(
    public messages?: OneOrMore,
    public from?: string,
    public to?: PushRecipientDestinationAddress,
    public text?: string,
    public sendAt?: string,
    public customPayload?: PushCustomPayload,
    public notificationOptions?: PushNotificationOptions,
    public validityPeriodTimeUnit?: ValidityPeriodTimeUnit,
    public notifyUrl?: string,
    public notifyContentType?: string,
    public callbackData?: string,
    public targetOnlyPrimaryDevices?: boolean,
  ) { }
}

export class PushMessageBulkRequestCreator {
  public static create(source: PushMessageBulkRequest): PushMessageBulkRequest {
    return new PushMessageBulkRequest(source.messages, source.from, source.to, source.text,
      source.sendAt, source.customPayload, source.notificationOptions,
      source.validityPeriodTimeUnit, source.notifyUrl, source.notifyContentType,
      source.callbackData, source.targetOnlyPrimaryDevices);
  }
}
