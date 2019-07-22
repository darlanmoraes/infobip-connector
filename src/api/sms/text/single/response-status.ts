import { Status } from "../../../status";

export class SmsTextSingleResponseStatus {
  constructor(
    public groupId: string,
    public groupName: string,
    public id: string,
    public name: Status,
    public description: string,
    public action: string,
  ) { }
}
