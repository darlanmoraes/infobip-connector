"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const btoa = require("btoa");
const error_1 = require("./api/error");
exports.Error = error_1.Error;
const request_1 = require("./api/push/message/bulk/request");
exports.PushMessageBulkRequest = request_1.PushMessageBulkRequest;
const request_2 = require("./api/push/message/bulk/request");
exports.PushMessageBulkRequestCreator = request_2.PushMessageBulkRequestCreator;
const response_1 = require("./api/push/message/bulk/response");
exports.PushMessageBulkResponse = response_1.PushMessageBulkResponse;
const response_2 = require("./api/push/message/bulk/response");
exports.PushMessageBulkResponseCreator = response_2.PushMessageBulkResponseCreator;
const response_bulk_1 = require("./api/push/message/bulk/response-bulk");
exports.PushMessageBulk = response_bulk_1.PushMessageBulk;
const response_bulk_2 = require("./api/push/message/bulk/response-bulk");
exports.PushMessageBulkCreator = response_bulk_2.PushMessageBulkCreator;
const request_custom_payload_1 = require("./api/push/message/request-custom-payload");
exports.PushCustomPayload = request_custom_payload_1.PushCustomPayload;
const request_custom_payload_2 = require("./api/push/message/request-custom-payload");
exports.PushCustomPayloadCreator = request_custom_payload_2.PushCustomPayloadCreator;
const request_notification_options_1 = require("./api/push/message/request-notification-options");
exports.PushNotificationOptions = request_notification_options_1.PushNotificationOptions;
const request_notification_options_2 = require("./api/push/message/request-notification-options");
exports.PushNotificationOptionsCreator = request_notification_options_2.PushNotificationOptionsCreator;
const request_recipient_destination_address_1 = require("./api/push/message/request-recipient-destination-address");
exports.PushRecipientDestinationAddress = request_recipient_destination_address_1.PushRecipientDestinationAddress;
const request_recipient_destination_address_2 = require("./api/push/message/request-recipient-destination-address");
exports.PushRecipientDestinationAddressCreator = request_recipient_destination_address_2.PushRecipientDestinationAddressCreator;
const request_validity_period_time_unit_1 = require("./api/push/message/request-validity-period-time-unit");
exports.ValidityPeriodTimeUnit = request_validity_period_time_unit_1.ValidityPeriodTimeUnit;
const request_3 = require("./api/push/message/single/request");
exports.PushMessageSingleRequest = request_3.PushMessageSingleRequest;
const request_4 = require("./api/push/message/single/request");
exports.PushMessageSingleRequestCreator = request_4.PushMessageSingleRequestCreator;
const response_3 = require("./api/push/message/single/response");
exports.PushMessageSingleResponse = response_3.PushMessageSingleResponse;
const response_4 = require("./api/push/message/single/response");
exports.PushMessageSingleResponseCreator = response_4.PushMessageSingleResponseCreator;
const push_service_1 = require("./api/push/push-service");
const response_status_1 = require("./api/response-status");
exports.ResponseStatus = response_status_1.ResponseStatus;
const response_status_2 = require("./api/response-status");
exports.ResponseStatusCreator = response_status_2.ResponseStatusCreator;
const pin_error_1 = require("./api/sms/2fa/pin-error");
exports.PinError = pin_error_1.PinError;
const request_5 = require("./api/sms/2fa/send/request");
exports.SmsSendPinRequest = request_5.SmsSendPinRequest;
const request_6 = require("./api/sms/2fa/send/request");
exports.SmsSendPinRequestCreator = request_6.SmsSendPinRequestCreator;
const response_5 = require("./api/sms/2fa/send/response");
exports.SmsSendPinResponse = response_5.SmsSendPinResponse;
const response_6 = require("./api/sms/2fa/send/response");
exports.SmsSendPinResponseCreator = response_6.SmsSendPinResponseCreator;
const request_7 = require("./api/sms/2fa/verify/request");
exports.SmsVerifyPinRequest = request_7.SmsVerifyPinRequest;
const request_8 = require("./api/sms/2fa/verify/request");
exports.SmsVerifyPinRequestCreator = request_8.SmsVerifyPinRequestCreator;
const response_7 = require("./api/sms/2fa/verify/response");
exports.SmsVerifyPinResponse = response_7.SmsVerifyPinResponse;
const response_8 = require("./api/sms/2fa/verify/response");
exports.SmsVerifyPinResponseCreator = response_8.SmsVerifyPinResponseCreator;
const nc_status_1 = require("./api/sms/nc-status");
exports.NcStatus = nc_status_1.NcStatus;
const sms_service_1 = require("./api/sms/sms-service");
const sms_status_1 = require("./api/sms/sms-status");
exports.SmsStatus = sms_status_1.SmsStatus;
const request_9 = require("./api/sms/text/single/request");
exports.SmsTextSingleRequest = request_9.SmsTextSingleRequest;
const request_10 = require("./api/sms/text/single/request");
exports.SmsTextSingleRequestCreator = request_10.SmsTextSingleRequestCreator;
const response_9 = require("./api/sms/text/single/response");
exports.SmsTextSingleResponse = response_9.SmsTextSingleResponse;
const response_10 = require("./api/sms/text/single/response");
exports.SmsTextSingleResponseCreator = response_10.SmsTextSingleResponseCreator;
const response_details_1 = require("./api/sms/text/single/response-details");
exports.SmsTextSingleResponseDetails = response_details_1.SmsTextSingleResponseDetails;
const response_details_2 = require("./api/sms/text/single/response-details");
exports.SmsTextSingleResponseDetailsCreator = response_details_2.SmsTextSingleResponseDetailsCreator;
const status_1 = require("./api/status");
exports.Status = status_1.Status;
const request_11 = require("./request");
exports.Http = request_11.Http;
class Configuration {
    constructor(hostname, username, password, pshAppId) {
        this.hostname = hostname;
        this.username = username;
        this.password = password;
        this.pshAppId = pshAppId;
    }
    toAuthorization() {
        return `Basic ${btoa(`${this.username}:${this.password}`)}`;
    }
}
exports.Configuration = Configuration;
const CONFIGURATION = new Configuration("", "", "", "");
exports.Infobip = {
    Push: push_service_1.Push,
    SMS: sms_service_1.SMS,
    configuration: () => {
        return CONFIGURATION;
    },
    configure: (configuration) => {
        Object.assign(CONFIGURATION, configuration);
    },
};
//# sourceMappingURL=index.js.map