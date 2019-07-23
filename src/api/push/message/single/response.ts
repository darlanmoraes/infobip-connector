import { ResponseStatus } from "../../../response-status";

export class PushMessageSingleResponse {
  constructor(
    public to?: string,
    public status?: ResponseStatus,
    public messageCount?: number,
    public bulkId?: string,
  ) { }
}

export class PushMessageSingleResponseCreator {
  public static create(source: PushMessageSingleResponse): PushMessageSingleResponse {
    return new PushMessageSingleResponse(source.to, source.status, source.messageCount, source.bulkId);
  }
}
