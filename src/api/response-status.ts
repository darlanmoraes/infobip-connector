import { Status } from "./status";

export class ResponseStatus {
  constructor(
    public groupId: string,
    public groupName: string,
    public id: string,
    public name: Status,
    public description: string,
    public action: string,
  ) { }
}

export class ResponseStatusCreator {
  public static create(source: ResponseStatus): ResponseStatus {
    return new ResponseStatus(source.groupId, source.groupName, source.id,
      source.name, source.description, source.action);
  }
}
