/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "7f429e75fab04884e550da076f1b597f"
  },
  {
    "url": "assets/css/0.styles.06984f3d.css",
    "revision": "f37e2e998890a3480ffe28f4ccaffabd"
  },
  {
    "url": "assets/icons/android-chrome-192x192.png",
    "revision": "b3974194a0ac0c55500c09ad69828f2a"
  },
  {
    "url": "assets/icons/android-chrome-384x384.png",
    "revision": "b58f6f9f0ca28d03c0b1a4393149b7a8"
  },
  {
    "url": "assets/icons/apple-touch-icon.png",
    "revision": "ed3fc2e87c910abe6d99c765f5bcc4d9"
  },
  {
    "url": "assets/icons/favicon-16x16.png",
    "revision": "a44c1b689300f2d6cba0fba4a150aff8"
  },
  {
    "url": "assets/icons/favicon-32x32.png",
    "revision": "3c4bc29d419192c4bb135eb381bb402d"
  },
  {
    "url": "assets/icons/mstile-150x150.png",
    "revision": "2ad334b200c6e42415bf285fa1472d5c"
  },
  {
    "url": "assets/icons/safari-pinned-tab.svg",
    "revision": "3812304b4ff558fb224d8dd7200159b9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.f35535a7.js",
    "revision": "27f46e614111bb95b007fb98f2e6e6c0"
  },
  {
    "url": "assets/js/2.3a92ba10.js",
    "revision": "22e68b8b3c50c218b5c7a1face08874d"
  },
  {
    "url": "assets/js/3.36f77397.js",
    "revision": "c5da0e2ffa0cc826403bb3811d3767d1"
  },
  {
    "url": "assets/js/4.4c24e1cc.js",
    "revision": "6ea28fe790f5ea8ad9169c65a334f7f8"
  },
  {
    "url": "assets/js/5.7c40eeda.js",
    "revision": "2cd0776caacc66c4a9f3d17cf3d53dfc"
  },
  {
    "url": "assets/js/6.790efdf0.js",
    "revision": "22dbac2fe570a9ff0033e889da81d709"
  },
  {
    "url": "assets/js/7.fbfa7d8d.js",
    "revision": "7dee85b7fdffe38ce7d00447bcc176a0"
  },
  {
    "url": "assets/js/8.a2fac26f.js",
    "revision": "f0d44ba3fbcbe4405c25734e853b800d"
  },
  {
    "url": "assets/js/9.6aca1718.js",
    "revision": "a7611d0f5ebc73b232bf45ccde55d36e"
  },
  {
    "url": "assets/js/app.4c861c4d.js",
    "revision": "f70a2e36e95bb7cdc76dc11ced8dcb97"
  },
  {
    "url": "guide/index.html",
    "revision": "3c425c5debcaef072cea78f63b00fcc8"
  },
  {
    "url": "guide/messages.html",
    "revision": "6f87851bc0cc1c1c3c84cae5b801ef10"
  },
  {
    "url": "guide/plugins/cron.html",
    "revision": "1fd610df03188b3778700fb3046ff7d3"
  },
  {
    "url": "index.html",
    "revision": "edf40b6545a7d4cee9d92b1a25689d53"
  },
  {
    "url": "logo.png",
    "revision": "c4904856262b00d2c45506486d5f1ce6"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
