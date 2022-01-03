// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    firebase: {
        projectId: 'futbol-d3c0f',
        appId: '1:676544570294:web:df59ed52d8112276f51717',
        storageBucket: 'futbol-d3c0f.appspot.com',
        apiKey: 'AIzaSyDO2T1FJIhKWmdYOX5NwDnRrnCjBCmmi_Q',
        authDomain: 'futbol-d3c0f.firebaseapp.com',
        messagingSenderId: '676544570294',
        measurementId: 'G-37L07E5C2C',
    },
    production: false,
    //hmr: true,
    apiURL: 'https://api.football-data.org/v2/competitions/PL/',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
