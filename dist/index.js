"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const btoa = require("btoa");
const sms_service_1 = require("./src/api/sms/sms-service");
const push_service_1 = require("./src/api/push/push-service");
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
    configure: function (configuration) {
        Object.assign(CONFIGURATION, configuration);
    },
    configuration: function () {
        return CONFIGURATION;
    },
    SMS: sms_service_1.SMS, Push: push_service_1.Push
};
//# sourceMappingURL=index.js.map