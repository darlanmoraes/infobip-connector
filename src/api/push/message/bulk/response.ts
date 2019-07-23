import { PushMessageBulk } from "./response-bulk";

export class PushMessageBulkResponse {
  constructor(
    public bulks?: PushMessageBulk[],
  ) { }
}

export class PushMessageBulkResponseCreator {
  public static create(source: PushMessageBulkResponse): PushMessageBulkResponse {
    return new PushMessageBulkResponse(source.bulks);
  }
}
