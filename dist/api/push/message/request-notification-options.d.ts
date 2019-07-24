export declare class PushNotificationOptions {
    vibrationEnabled?: boolean;
    soundEnabled?: boolean;
    soundName?: string;
    badge?: number;
    contentUrl?: string;
    category?: string;
    inAppStyle?: string;
    isSilent?: boolean;
    title?: string;
    constructor(vibrationEnabled?: boolean, soundEnabled?: boolean, soundName?: string, badge?: number, contentUrl?: string, category?: string, inAppStyle?: string, isSilent?: boolean, title?: string);
}
export declare class PushNotificationOptionsCreator {
    static create(source: PushNotificationOptions): PushNotificationOptions;
}
