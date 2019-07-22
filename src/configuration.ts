import btoa = require('btoa');

export const AUTHORIZATION_TYPE = "Basic";

export class Configuration {
  constructor(
    public hostname: string,
    public username: string,
    public password: string
  ) { }

  public toAuthorization(): string {
    return `${AUTHORIZATION_TYPE} ${btoa(`${this.username}:${this.password}`)}`;
  }

}

export const DEFAULT_CONFIGURATION = new Configuration('', '', '');