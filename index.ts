import btoa = require("btoa");
import { SMS } from "./src/api/sms/sms-service";

export class Configuration {
  constructor(
    public hostname: string,
    public username: string,
    public password: string
  ) { }

  public toAuthorization(): string {
    return `Basic ${btoa(`${this.username}:${this.password}`)}`;
  }
}

const CONFIGURATION = new Configuration("", "", "");

export const Infobip = {
  configure: function(configuration: Configuration) {
    Object.assign(CONFIGURATION, configuration);
  },
  configuration: function(): Configuration {
    return CONFIGURATION;
  },
  SMS
}