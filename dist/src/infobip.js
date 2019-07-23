"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const btoa = require("btoa");
const sms_service_1 = require("./api/sms/sms-service");
class Configuration {
    constructor(hostname, username, password) {
        this.hostname = hostname;
        this.username = username;
        this.password = password;
    }
    toAuthorization() {
        return `Basic ${btoa(`${this.username}:${this.password}`)}`;
    }
}
exports.Configuration = Configuration;
const CONFIGURATION = new Configuration("", "", "");
exports.Infobip = {
    setConfig: function (configuration) {
        Object.assign(CONFIGURATION, configuration);
    },
    getConfig: function () {
        return CONFIGURATION;
    },
    SMS: sms_service_1.SMS
};
//# sourceMappingURL=infobip.js.map