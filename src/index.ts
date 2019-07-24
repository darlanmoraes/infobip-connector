import btoa = require("btoa");
import { Error } from "./api/error";
import { OneOrMore } from "./api/one-more";
import { PushMessageBulkRequest } from "./api/push/message/bulk/request";
import { PushMessageBulkRequestCreator } from "./api/push/message/bulk/request";
import { PushMessageBulkResponse } from "./api/push/message/bulk/response";
import { PushMessageBulkResponseCreator } from "./api/push/message/bulk/response";
import { PushMessageBulk } from "./api/push/message/bulk/response-bulk";
import { PushMessageBulkCreator } from "./api/push/message/bulk/response-bulk";
import { PushCustomPayload } from "./api/push/message/request-custom-payload";
import { PushCustomPayloadCreator } from "./api/push/message/request-custom-payload";
import { PushNotificationOptions } from "./api/push/message/request-notification-options";
import { PushNotificationOptionsCreator } from "./api/push/message/request-notification-options";
import { PushRecipientDestinationAddress } from "./api/push/message/request-recipient-destination-address";
import { PushRecipientDestinationAddressCreator } from "./api/push/message/request-recipient-destination-address";
import { ValidityPeriodTimeUnit } from "./api/push/message/request-validity-period-time-unit";
import { PushMessageSingleRequest } from "./api/push/message/single/request";
import { PushMessageSingleRequestCreator } from "./api/push/message/single/request";
import { PushMessageSingleResponse } from "./api/push/message/single/response";
import { PushMessageSingleResponseCreator } from "./api/push/message/single/response";
import { Push } from "./api/push/push-service";
import { ResponseStatus } from "./api/response-status";
import { ResponseStatusCreator } from "./api/response-status";
import { PinError } from "./api/sms/2fa/pin-error";
import { SmsSendPinRequest } from "./api/sms/2fa/send/request";
import { SmsSendPinRequestCreator } from "./api/sms/2fa/send/request";
import { SmsSendPinResponse } from "./api/sms/2fa/send/response";
import { SmsSendPinResponseCreator } from "./api/sms/2fa/send/response";
import { SmsVerifyPinRequest } from "./api/sms/2fa/verify/request";
import { SmsVerifyPinRequestCreator } from "./api/sms/2fa/verify/request";
import { SmsVerifyPinResponse } from "./api/sms/2fa/verify/response";
import { SmsVerifyPinResponseCreator } from "./api/sms/2fa/verify/response";
import { NcStatus } from "./api/sms/nc-status";
import { SMS } from "./api/sms/sms-service";
import { SmsStatus } from "./api/sms/sms-status";
import { SmsTextSingleRequest } from "./api/sms/text/single/request";
import { SmsTextSingleRequestCreator } from "./api/sms/text/single/request";
import { SmsTextSingleResponse } from "./api/sms/text/single/response";
import { SmsTextSingleResponseCreator } from "./api/sms/text/single/response";
import { SmsTextSingleResponseDetails } from "./api/sms/text/single/response-details";
import { SmsTextSingleResponseDetailsCreator } from "./api/sms/text/single/response-details";
import { Status } from "./api/status";
import { Http } from "./request";

export class Configuration {
  constructor(
    public hostname?: string,
    public username?: string,
    public password?: string,
    public pshAppId?: string,
  ) { }

  public toAuthorization(): string {
    return `Basic ${btoa(`${this.username}:${this.password}`)}`;
  }
}

const CONFIGURATION = new Configuration("", "", "", "");

export const Infobip = {
  Push,
  SMS,
  configuration: (): Configuration => {
    return CONFIGURATION;
  },
  configure: (configuration: Configuration): void => {
    Object.assign(CONFIGURATION, configuration);
  },
};

export {
  Error,
  OneOrMore,
  PushMessageBulkRequest,
  PushMessageBulkRequestCreator,
  PushMessageBulkResponse,
  PushMessageBulkResponseCreator,
  PushMessageBulk,
  PushMessageBulkCreator,
  PushCustomPayload,
  PushCustomPayloadCreator,
  PushNotificationOptions,
  PushNotificationOptionsCreator,
  PushRecipientDestinationAddress,
  PushRecipientDestinationAddressCreator,
  ValidityPeriodTimeUnit,
  PushMessageSingleRequest,
  PushMessageSingleRequestCreator,
  PushMessageSingleResponse,
  PushMessageSingleResponseCreator,
  ResponseStatus,
  ResponseStatusCreator,
  PinError,
  SmsSendPinRequest,
  SmsSendPinRequestCreator,
  SmsSendPinResponse,
  SmsSendPinResponseCreator,
  SmsVerifyPinRequest,
  SmsVerifyPinRequestCreator,
  SmsVerifyPinResponse,
  SmsVerifyPinResponseCreator,
  NcStatus,
  SmsStatus,
  SmsTextSingleRequest,
  SmsTextSingleRequestCreator,
  SmsTextSingleResponse,
  SmsTextSingleResponseCreator,
  SmsTextSingleResponseDetails,
  SmsTextSingleResponseDetailsCreator,
  Status,
  Http,
};
