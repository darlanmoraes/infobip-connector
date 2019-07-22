import { SmsTextSingleRequest } from "./text/single/request";
import { SmsTextSingleResponse } from "./text/single/response";
import got = require('got');
import { DEFAULT_CONFIGURATION } from "../../configuration";

export async function sendSmsTextSingle(id: number, request: SmsTextSingleRequest): Promise<SmsTextSingleResponse> {
  const { body } =  await got.post(`${DEFAULT_CONFIGURATION.hostname}/sms/1/text/single`, <got.GotJSONOptions> {
    json: request as any,
    headers: {
      'Authorization': DEFAULT_CONFIGURATION.toAuthorization(),
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  });
  console.log(JSON.stringify(body));
  return Promise.reject(<SmsTextSingleResponse> {});
}