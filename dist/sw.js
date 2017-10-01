importScripts('workbox-sw.prod.v2.0.3.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "../index.html",
    "revision": "43efc46dc713eb147388e3e18b5c49fb"
  },
  {
    "url": "/dist/app.css",
    "revision": "7f65bdf542bfdb3f28da30e418e94dd6"
  },
  {
    "url": "/dist/app.js",
    "revision": "435e5d6e89dddbe2518aaf4dd16c9c4b"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\//, workboxSW.strategies.cacheFirst({}), 'GET');
