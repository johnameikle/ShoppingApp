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
- Browser-local persistence
- Offline-capable PWA manifest and service worker

## Planned cloud phase

The first version deliberately stores data locally. The next phase will add a protected API, shared household data, authentication and Azure Static Web Apps deployment.
