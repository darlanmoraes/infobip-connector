export class PushCustomPayload {
  constructor(
    public targetUrl?: string,
    public someData?: string,
  ) { }
}

export class PushCustomPayloadCreator {
  public static create(source: PushCustomPayload): PushCustomPayload {
    return new PushCustomPayload(source.targetUrl, source.someData);
  }
}
