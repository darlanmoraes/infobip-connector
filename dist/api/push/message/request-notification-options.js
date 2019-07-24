"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PushNotificationOptions {
    constructor(vibrationEnabled, soundEnabled, soundName, badge, contentUrl, category, inAppStyle, isSilent, title) {
        this.vibrationEnabled = vibrationEnabled;
        this.soundEnabled = soundEnabled;
        this.soundName = soundName;
        this.badge = badge;
        this.contentUrl = contentUrl;
        this.category = category;
        this.inAppStyle = inAppStyle;
        this.isSilent = isSilent;
        this.title = title;
    }
}
exports.PushNotificationOptions = PushNotificationOptions;
class PushNotificationOptionsCreator {
    static create(source) {
        return new PushNotificationOptions(source.vibrationEnabled, source.soundEnabled, source.soundName, source.badge, source.contentUrl, source.category, source.inAppStyle, source.isSilent, source.title);
    }
}
exports.PushNotificationOptionsCreator = PushNotificationOptionsCreator;
//# sourceMappingURL=request-notification-options.js.map