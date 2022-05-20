// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { CACHE_SIZE_UNLIMITED, initializeFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNyt4BOQ8y6zG8F8C7Et-oCVEZ0XU656A",
  authDomain: "theme-system-journal-next.firebaseapp.com",
  projectId: "theme-system-journal-next",
  storageBucket: "theme-system-journal-next.appspot.com",
  messagingSenderId: "750219428461",
  appId: "1:750219428461:web:088ae0376fdab8f314b564",
  measurementId: "G-DCVKK2WTJN",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// initializeFirestore must be called before getFirestore()
export const firestore = initializeFirestore(app, {
  ignoreUndefinedProperties: true,
  // Pass long polling setting to Firestore when running in Cypress
  // Needed for Firestore support in Cypress (see https://github.com/cypress-io/cypress/issues/6350)
  experimentalForceLongPolling: !(typeof window == "undefined"),
  cacheSizeBytes: CACHE_SIZE_UNLIMITED,
});

export const auth = getAuth(app);
