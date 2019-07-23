import { GotInstance, GotJSONFn } from "got";
import got = require("got");
import { Infobip } from "../index";

const ID_LENGTH = 36;
const ID_START = 2;
const ID_END = 15;

function httpContextId(): string {
    return Math.random()
      .toString(ID_LENGTH)
      .substring(ID_START, ID_END) + Math.random()
      .toString(ID_LENGTH)
      .substring(ID_START, ID_END);
}

function getLoggable(raw: any, keys: string[]): any {
  return keys.reduce((data, key) => ({
    ...data, [key]: raw[key],
  }), {});
}

function beforeRequest(): Array<got.BeforeRequestHook<got.GotBodyOptions<string>>> {
  return [
    (options) => {
      const raw = options as any;
      raw.httpContextId = httpContextId();
      const data = getLoggable(raw, [
        "httpContextId",
        "method",
        "protocol",
        "hostname",
        "path",
        "query",
        "headers",
        "body",
      ]);
      process.stdout.write(`${JSON.stringify(data)}\n`);
    },
  ];
}

function afterRequest(): Array<got.AfterResponseHook<got.GotBodyOptions<string>, string>> {
  return [
    (raw, _) => {
      const data = getLoggable(raw, [
        "statusCode",
        "headers",
        "body",
      ]);
      data.httpContextId = (raw as any).request.gotOptions.httpContextId;
      process.stdout.write(`${JSON.stringify(data)}\n`);
      return raw;
    },
  ];
}

function request(): got.GotInstance<got.GotJSONFn> {
  const configuration = Infobip.configuration();
  return got.extend({
    baseUrl: configuration.hostname,
    headers: {
      "Accept": "application/json",
      "Authorization": configuration.toAuthorization(),
      "Content-Type": "application/json",
    },
    hooks: {
      afterResponse: afterRequest(),
      beforeRequest: beforeRequest(),
    },
  });
}

function cast<T>(json: any, type: new() => T): T {
  const target = new type();
  Object.keys(json)
    .forEach((attribute) => target[attribute] = json[attribute]);
  return target;
}

export class Http {
  private request: GotInstance<GotJSONFn>;
  constructor() {
    this.request = request();
  }

  public async post<T>(path: string, body: any, type: new() => T): Promise<T> {
    return cast((await this.request.post(path, {
      body, json: true,
    })).body, type);
  }

  public async get<T>(path: string, query: any, type: new() => T): Promise<T> {
    return cast((await this.request.get(path, {
      json: true, query,
    })).body, type);
  }

  public async put<T>(path: string, body: any, type: new() => T): Promise<T> {
    return cast((await this.request.put(path, {
      body, json: true,
    })).body, type);
  }

  public async delete<T>(path: string, query: any, type: new() => T): Promise<T> {
    return cast((await this.request.delete(path, {
      json: true, query,
    })).body, type);
  }

}
