import { PushCustomPayload } from "../request-custom-payload";
import { PushNotificationOptions } from "../request-notification-options";
import { PushRecipientDestinationAddress } from "../request-recipient-destination-address";

export class PushMessageSingleRequest {
  constructor(
    public from?: string,
    public to?: PushRecipientDestinationAddress,
    public text?: string,
    public sendAt?: string,
    public customPayload?: PushCustomPayload,
    public notificationOptions?: PushNotificationOptions,
    public validityPeriod?: number,
    public notifyUrl?: string,
    public notifyContentType?: string,
    public callbackData?: string,
    public targetOnlyPrimaryDevices?: boolean,
  ) { }
}

export class PushMessageSingleRequestCreator {
  public static create(source: PushMessageSingleRequest): PushMessageSingleRequest {
    return new PushMessageSingleRequest(source.from, source.to, source.text,
      source.sendAt, source.customPayload, source.notificationOptions,
      source.validityPeriod, source.notifyUrl, source.notifyContentType,
      source.callbackData, source.targetOnlyPrimaryDevices);
  }
}
