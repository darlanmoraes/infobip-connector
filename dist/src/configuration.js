"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const btoa = require("btoa");
exports.AUTHORIZATION_TYPE = "Basic";
class Configuration {
    constructor(hostname, username, password) {
        this.hostname = hostname;
        this.username = username;
        this.password = password;
    }
    toAuthorization() {
        return `${exports.AUTHORIZATION_TYPE} ${btoa(`${this.username}:${this.password}`)}`;
    }
}
exports.Configuration = Configuration;
exports.DEFAULT_CONFIGURATION = new Configuration('', '', '');
//# sourceMappingURL=configuration.js.map