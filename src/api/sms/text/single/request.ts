import { OneOrMore } from "../../../one-more";

export class SmsTextSingleRequest {
  constructor(
    public from?: string,
    public to?: OneOrMore,
    public text?: string,
  ) { }
}

export class SmsTextSingleRequestCreator {
  public static create(source: SmsTextSingleRequest): SmsTextSingleRequest {
    return new SmsTextSingleRequest(source.from, source.to, source.text);
  }
}
