# Our Shopping List

A mobile-first progressive web app for maintaining aisle-ordered shopping lists for Morrisons, Aldi and M&S.

## Run locally

Serve this directory over HTTP (service workers do not run from `file://`). For example, use the preview task in VS Code or any static web server, then open the local address in a browser.

## Current features

- Store-specific shopping lists and section order
- Automatic section classification for common groceries
- Editable walking order for every store
- Tick-off shopping mode and checked-item cleanup
- Printable list
- Shared list and aisle order stored in OneDrive
- Browser-local copy retained for first-time migration and offline viewing
- Offline-capable PWA manifest and service worker

## Enable shared sync

The list is stored as a JSON file in John’s OneDrive and shared with Shelley through Microsoft Graph. The app uses Microsoft sign-in (authorization code flow with PKCE) and delegated `Files.ReadWrite` access. The app’s Entra registration needs personal Microsoft accounts enabled, the Azure Static Web Apps URL registered as a single-page-app redirect URI, and Microsoft Graph delegated `Files.ReadWrite` permission.

Set the Entra application client ID in `microsoft-config.js` before deploying. Sign in with John’s Microsoft account to create or open the shared file, enter Shelley’s Microsoft account email in **Share list**, and send her the generated app link. Shelley signs in with her own account and must accept the OneDrive invitation.

Until the Entra app is configured and deployed, the app continues to save separately in each browser.
