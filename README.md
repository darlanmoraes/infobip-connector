### Infobip Connector

Module that can send requests to Infobip API. It can send 2FA pincodes, sms text and any kind of notification.

- Installing the project

```
npm install darlanmoraes/infobip-connector-node#master
```

- Configuring Infobip Object

```
Infobip.configure({
  hostname: 'https://api.infobip.com', 
  username: '<USERNAME>', 
  password: '<PASSWORD>',
  pshAppId: '<PUSH_APP_ID>'
} as Configuration);
```

- Create new SMS Client

```
const sms = new Infobip.SMS();
```

- Using SMS Client do send pincode

```
sms.send2faPin({
  to: '<MSISDN>',
  applicationId: '<SMS_APP_ID>',
  messageId: '<SMS_MESSAGE_ID>'
}).then(data => console.log(data))
  .catch(e => console.log(e));
```

- Using SMS Client to verify pincode

```
sms.verify2faPin('<PIN_ID>', {
  pin: '<PIN>'
}).then(data => console.log(data))
  .catch(e => console.log(e));
```

- Using SMS Client do send simple text

```
sms.sendSmsTextSingle({
  from: '<SMS_FROM>',
  to: '<MSISDN>',
  text: 'some text'
}).then(data => console.log(data))
  .catch(e => console.log(e));
```

- Create new Push Notification Client

```
const push = new Infobip.Push();
```

- Using Push Notification Client do send messages to a single user

```
push.sendPushMessageSingle({
  to: {
    pushRegistrationId: '<PUSH_REGISTRATION_ID>'
  },
  notificationOptions: {
    soundEnabled: true,
    badge: 1,
    title: 'some title'
  },
  from: '<PUSH_APP_ID>',
  text: 'some content',
  customPayload: {
    someData: '{ \'idNotificacao\': 000.000.000-00 }'
  }
}).then(data => console.log(data))
  .catch(e => console.log(e));
```

- Using Push Notification Client do send messages to all Android and iOS users

```
push.sendPushMessageSingle({
  to: {
    cloudType: [ 'GCM', 'APNS' ]
  },
  notificationOptions: {
    soundEnabled: true,
    badge: 1,
    title: 'some title'
  },
  from: '<PUSH_APP_ID>',
  text: 'some content',
  customPayload: {
    someData: '{ \'idNotificacao\': 000.000.000-00 }'
  }
}).then(data => console.log(data))
  .catch(e => console.log(e));
```