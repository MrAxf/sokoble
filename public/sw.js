if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const f=e=>i(e,n),o={module:{uri:n},exports:t,require:f};s[n]=Promise.all(a.map((e=>o[e]||f(e)))).then((e=>(c(...e),t)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/G0ZHn3AjAus6xOGXoJ0dJ/_buildManifest.js",revision:"bc8d83ccabf2e88958ad92962f2547ed"},{url:"/_next/static/G0ZHn3AjAus6xOGXoJ0dJ/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/401-46361470c77e8854.js",revision:"46361470c77e8854"},{url:"/_next/static/chunks/framework-3b5a00d5d7e8d93b.js",revision:"3b5a00d5d7e8d93b"},{url:"/_next/static/chunks/main-edb6f8d2aa573751.js",revision:"edb6f8d2aa573751"},{url:"/_next/static/chunks/pages/_app-a3638b945c9fc479.js",revision:"a3638b945c9fc479"},{url:"/_next/static/chunks/pages/_error-8353112a01355ec2.js",revision:"8353112a01355ec2"},{url:"/_next/static/chunks/pages/config-1fe8734de4a46e6d.js",revision:"1fe8734de4a46e6d"},{url:"/_next/static/chunks/pages/help-139c1362dd317a44.js",revision:"139c1362dd317a44"},{url:"/_next/static/chunks/pages/index-cc46e741e288bb10.js",revision:"cc46e741e288bb10"},{url:"/_next/static/chunks/pages/stats-23f7be3ab6e59a10.js",revision:"23f7be3ab6e59a10"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-ee7e63bc15b31913.js",revision:"ee7e63bc15b31913"},{url:"/_next/static/css/11d599ef64351126.css",revision:"11d599ef64351126"},{url:"/_next/static/css/b277cf616cfa9d0e.css",revision:"b277cf616cfa9d0e"},{url:"/_next/static/media/135d1807355729e3.woff2",revision:"780b25608881bc43c7d5af1358115c35"},{url:"/_next/static/media/1b496f798a642250.woff2",revision:"7b77d8d594cc6aee5a915bb083311d4c"},{url:"/_next/static/media/230e62120f6d785b.woff2",revision:"669c2c517e561272cbb89b4cc59761c8"},{url:"/_next/static/media/647e3efd824faf1c.p.woff2",revision:"40b6965b5cd26213faf61e5ab6765bb9"},{url:"/_next/static/media/6d5b6129db892a4a.woff2",revision:"789b5b72a4c574d8eb26140c7748cdc6"},{url:"/_next/static/media/75c6578c0e7ebfd8.woff2",revision:"d6affb2b0ebb90639a938928787c0364"},{url:"/_next/static/media/a969730e1176380a.woff2",revision:"6372c52c64b66357a70fdff2e6044499"},{url:"/_next/static/media/ac361f64331e3beb.woff2",revision:"f2b8dc1c11b50b628d5e0b12060c3736"},{url:"/_next/static/media/b0c73849d0367fe4.woff2",revision:"e443398ea9d98f1669bd37b9b6e2e3f9"},{url:"/_next/static/media/c57f4ac33cdf82f5.p.woff2",revision:"89282f4ed0e23fe1f66bbf1c54a0a38c"},{url:"/_next/static/media/da8d1850f8474efd.woff2",revision:"7608e003d3f4fae5426613dc944f2731"},{url:"/_next/static/media/e3e909ff52605f18.woff2",revision:"a4fb151402f669c65488dbf5cc735658"},{url:"/_next/static/media/e859973cdb7f6b3d.woff2",revision:"a55dba7f3e37a023425d533a5cd83fd9"},{url:"/_next/static/media/fafa7da85166a72e.woff2",revision:"2bf1abcc2ac85d431eca2cb4451eb3be"},{url:"/_next/static/media/fd72bbd943f0444a.woff2",revision:"04c0e19395ffb1768f43c638ef367f3e"},{url:"/_next/static/media/fdcf5a0c735f5094.woff2",revision:"8e60a75d925bc42181c720332b17d70b"},{url:"/images/icons/icon-128x128.png",revision:"cbd50b48cd79d33ce4141afefa61a72d"},{url:"/images/icons/icon-144x144.png",revision:"a1208d36c4dfafaf2f99422c31408e20"},{url:"/images/icons/icon-152x152.png",revision:"4b90bee5453311159b4ca7d7cdb6bdf1"},{url:"/images/icons/icon-192x192.png",revision:"2aae5cfd375c135c93b0b12b8cc621c4"},{url:"/images/icons/icon-384x384.png",revision:"d3acf00d3d777b18503b07091920ab6a"},{url:"/images/icons/icon-512x512.png",revision:"d59fcd027050be67b35a3b68b358d2f8"},{url:"/images/icons/icon-72x72.png",revision:"a45396767fae2a2fe92b743d811b2c0f"},{url:"/images/icons/icon-96x96.png",revision:"8eef1d79804387d3f04e0608d7efc17e"},{url:"/manifest.json",revision:"25cb7b838ec79852ccf560f6df3836e4"},{url:"/sokoble.svg",revision:"be6b5673331e0fe2029939582d8bf98f"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
