# ReactChat
A Web chat built with React and firebase.

## Run Locally
To run the application locally you'll need to login to firebase and provide your credentials inside the firebase.js file. There, replace the firebaseConfig variable with your own credentials:

```javascript
const firebaseConfig = {
    apiKey: "API_KEY",
    authDomain: "AUTH_DOMAIN",
    projectId: "PROJECT_ID",
    storageBucket: "STORAGE_BUCKET",
    messagingSenderId: "MESSAGING_SENDER_ID",
    appId: "APP_ID"
};
```

The, you install the dependecies and run the application using yarn:
> yarn install

> yarn start
