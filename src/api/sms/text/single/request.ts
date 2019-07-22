export class SmsTextSingleRequest {
  constructor(
    public from: string,
    public to: string | string[],
    public text: string,
  ) { }
}
