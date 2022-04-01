// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const firebaseConfig = {
  apiKey: 'AIzaSyAkE9ZO1d_VVDEx03WpbLZwVuPW2LbQA4c',
  authDomain: 'math-dice-pwa.firebaseapp.com',
  projectId: 'math-dice-pwa',
  storageBucket: 'math-dice-pwa.appspot.com',
  messagingSenderId: '437620794663',
  appId: '1:437620794663:web:b529acdc59365461e77502'
};

export const environment = {
  production: false,
  firebaseConfig
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
