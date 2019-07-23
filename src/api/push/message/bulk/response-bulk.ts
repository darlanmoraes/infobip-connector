import { ResponseStatus } from "../../../response-status";
import { PushRecipientDestinationAddress } from "../request-recipient-destination-address";

export class PushMessageBulk {
  constructor(
    public to?: PushRecipientDestinationAddress,
    public status?: ResponseStatus,
    public messageCount?: number,
    public bulkId?: string,
  ) { }
}

export class PushMessageBulkCreator {
  public static create(source: PushMessageBulk): PushMessageBulk {
    return new PushMessageBulk(source.to, source.status, source.messageCount, source.bulkId);
  }
}
