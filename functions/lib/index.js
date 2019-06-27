"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
// import * as functions from 'firebase-functions';
const universal = require(`${process.cwd()}/dist/server`).app;
exports.ssr = functions.https.onRequest(universal);
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
//# sourceMappingURL=index.js.map