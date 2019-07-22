export class SmsTextSingleRequest {
  constructor(public from: string, public to?: string){}
}

export class SmsTextSingleRequestCreator {
  static create(event: SmsTextSingleRequest) {
    return new SmsTextSingleRequest(event.from, event.to);
  }
}

const x: SmsTextSingleRequest = SmsTextSingleRequestCreator.create({
  from: ''
});

console.log(x.from);