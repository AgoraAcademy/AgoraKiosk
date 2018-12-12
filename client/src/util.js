// Pass null for default authority (https://login.microsoftonline.com/common)
import * as Msal from 'msal'

const applicationConfig = {
    clientID: "77198413-9089-4025-8eac-9c8a94a6e7b8",
    graphScopes: ["calendars.read", "user.read"],
    graphEndpoint: "https://graph.microsoft.com/v1.0/me"
};

export const userAgentApplication = new Msal.UserAgentApplication(applicationConfig.clientID, null, authCallback);

function authCallback(errorDesc, token, error, tokenType) {
    if (token) {
        console.log(token)
    } else {
        console.log(error + ":" + errorDesc);
    }
}

export const graphScopes = ["user.read", "calendar.read"];


// userAgentApplication.loginPopup(graphScopes).then(function (idToken) {
//     // Login Success
//     userAgentApplication.acquireTokenSilent(graphScopes).then(function (accessToken) {
//         // AcquireTokenSilent Success
//     }, function (error) {
//         // AcquireTokenSilent Failure, send an interactive request.
//         userAgentApplication.acquireTokenPopup(graphScopes).then(function (accessToken) {
//             // updateUI();
//             console.log("updateUI")
//         }, function (error) {
//             console.log(error);
//         });
//     })
// }, function (error) {
//     console.log(error);
// });


