export class PushNotificationOptions {
  constructor(
    public vibrationEnabled?: boolean,
    public soundEnabled?: boolean,
    public soundName?: string,
    public badge?: number,
    public contentUrl?: string,
    public category?: string,
    public inAppStyle?: string,
    public isSilent?: boolean,
    public title?: string,
  ) { }
}

export class PushNotificationOptionsCreator {
  public static create(source: PushNotificationOptions): PushNotificationOptions {
    return new PushNotificationOptions(source.vibrationEnabled, source.soundEnabled, source.soundName,
      source.badge, source.contentUrl, source.category, source.inAppStyle, source.isSilent, source.title);
  }
}
