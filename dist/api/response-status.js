"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ResponseStatus {
    constructor(groupId, groupName, id, name, description, action) {
        this.groupId = groupId;
        this.groupName = groupName;
        this.id = id;
        this.name = name;
        this.description = description;
        this.action = action;
    }
}
exports.ResponseStatus = ResponseStatus;
class ResponseStatusCreator {
    static create(source) {
        return new ResponseStatus(source.groupId, source.groupName, source.id, source.name, source.description, source.action);
    }
}
exports.ResponseStatusCreator = ResponseStatusCreator;
//# sourceMappingURL=response-status.js.map