import { Status } from "./status";
export declare class ResponseStatus {
    groupId: string;
    groupName: string;
    id: string;
    name: Status;
    description: string;
    action: string;
    constructor(groupId: string, groupName: string, id: string, name: Status, description: string, action: string);
}
export declare class ResponseStatusCreator {
    static create(source: ResponseStatus): ResponseStatus;
}
