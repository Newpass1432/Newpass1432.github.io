'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d778d8b1f42d0dd1bb284e5ca9549187",
".git/config": "55dc3c39974ee898f41818460e7adc10",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "05fbef6f91de9d3adee55a9c15db0f5b",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "97af9d20a71015273f1f3a11ddfb64ba",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f1dc1467083803627f1f02ae50ca66cf",
".git/logs/refs/heads/main": "1b75a1207db067c022cc228fe6dfb964",
".git/logs/refs/heads/master": "ed1a54e908b33dd3ae904a70f94e5a01",
".git/logs/refs/remotes/origin/main": "e9314fdd22e0149c1ffa38f29c575062",
".git/objects/04/6b190d898ce3d448fe9938bc5c303d7b095ff8": "4cccc7d3247c1dab448a62e46384da87",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "6e52dd0d00b1b7a37d90e50848791b2f",
".git/objects/0a/89cdd10f51d60c2d1394f6f32fb242db045671": "49e2791244312e71857a2e357c7c55ba",
".git/objects/0d/fdb81d9738b3b84495fe1ea2448fa9bcd98952": "22dd29306ecc9e1058d3ba4ed891b24d",
".git/objects/12/e472c41df99cc6cdc150cb86166274c62d9c4c": "a3f8af7f32f8aad24ffd85d8d1b5cf99",
".git/objects/1b/d892569415d7d8e65652d9f525ba3a867fc50e": "f56d7283ae85db2e87e92fd959830af2",
".git/objects/1e/7796fef0f5dcba079d7c2ee9796a4d90ac8b51": "9070323683a3897c734dc02e5b026470",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "baf057c4b90805f732d24ac22cb10345",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "96e3285980ba51fe6eaf0295fd60ff80",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "847cef55692aa6311c4c2f26d42b36b5",
".git/objects/28/9cecbccb4019ed39216f9bf16cd73f2641b380": "80ee0dd3215dfcd2fdaf8737dcd867fb",
".git/objects/30/e7c5afa2c8a4eb67fc97601aef96b1d954aede": "2ffc80b904e465cca9cb712a44c019df",
".git/objects/35/6d0ebc811887971500fb04b47b81d555d30326": "ee004584a153cf4a29b918aaeaf7a5a2",
".git/objects/38/ed76da9ca11058557f8fad2982c4d05552e513": "caccb6063054df9dcd51f854da0b213e",
".git/objects/43/51eae69f18ae053c9c6587f8f9bec90a662c33": "ad5125997f1d507ad939a10bd861fb5a",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "0bb82caa96c962530864f28e847f4ab9",
".git/objects/4d/d3d3cca80f33add76f846c1cad375615b4280b": "8749eca3b89d4ac2239e41a127083701",
".git/objects/4f/edf3861f769e6f515f2183aa6b62ad1c41685c": "3e6e0d7bed847791c5396ebd7a52ea29",
".git/objects/50/8c1190b0e3f949a8c5cab9d020340acc9f6d2e": "d443e60497bc81b034d7beab1916f4da",
".git/objects/52/4d456e256b1e17778bffcbe50eaca57899026c": "09dc0e4590ac1851c89345574213a24d",
".git/objects/53/963caec1bc08726c3e973135f4931af5e63b07": "fe256d7fd1df186be7e9134b5c34d113",
".git/objects/57/3822cc1bbebbf6a1d21220147cfba89e815bbd": "98c8ba19700d92f90122d0aa9e0d79d0",
".git/objects/59/e1a1555915e525ae1d5b89bc19eb4b4fdd130f": "9779af4e5f1e6848d1624970918d4f6c",
".git/objects/5b/f934063d75bb265b5d1665f738bd7520b06618": "1190bea87899f4fa700a8b6460b1a9c8",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "bbebac4a2c902f61cd432f1208897318",
".git/objects/65/5ebde8d3bf0843ebe9583f6387019e711c1dce": "bbe740fed963b91a33c187f86dcfadf2",
".git/objects/69/dcfaf471b48e4cf1e1710f35b23ad0e5b05819": "65694283eba71664a046fc06f0e11966",
".git/objects/6a/f1d1d176bf35d474317a9080946f4fb31f0621": "459c4e388a7a83fd39735de158ab3607",
".git/objects/6b/38c5d8384045db5b5ba75b72e3cce196e487da": "3f7159fb9279b81a0e443e7c7976da17",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "bcafa311bebf5634eaebc9a830559b6e",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "ebf7d1a0954090a5cf6bdc36cbf3289e",
".git/objects/7c/49969687f9a5637dbd157f3a0c7b1f479038cf": "ce0cc4a3f9084c7eebc64058fe8c79cd",
".git/objects/83/e780c1c6fbf011a7c0fc89e07a2b48f4f43dd9": "cb729c151552fbde7b44b91be0e9dbeb",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "0a804c6a015be41c2f1307e32bf6b5bc",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e35fdc55764d9ed14315f6ff50093ab3",
".git/objects/89/de2f5a5318d18beb6c7dad8c97e2d6261bbaab": "ffb4356a90e7db00991112c0c313427c",
".git/objects/89/dfd1905cd9c003114a6c65fc6749870f90f047": "83dac5132b32a8717614bd7e2706abb6",
".git/objects/8a/294307c7ee85a5706ab4229404a76c02d6df34": "6d8a39457d29b78213d0c514a56c809b",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "b25b26893b8f92a4f583677ba27f0a7f",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "8003b3408ffe6fc347eaa3ce30414536",
".git/objects/8e/babd0c90db03c05719f2af6d25fac2fe064dbe": "4924d7a4e48102dc090d605015aca786",
".git/objects/8f/f49e250dd054bb897c443fad5fea7789efe420": "701a23349c07cf55001dcb7b1ed7a96b",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "bf78de9a46b3f184061cc620c3ed1316",
".git/objects/a4/b345cd16be75d69440b20973ef119be0a5e0b9": "faede4a5ecc6dfacfafaa9e67ef394ea",
".git/objects/a9/08e430e84369891a6bba12a09c7d41651d3f81": "c56df33e8853540638698f2606a46a51",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "7f7a35d97b21f578a6e3dfc95f936101",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "05f6258e74434f94977ac333a3891eeb",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "2c236ea17ad6b309081e0a5251137b84",
".git/objects/b4/3ca248682d8c099ae325ab23a901e634e0dfad": "676621e3e3044479a5d949d6a7220bbb",
".git/objects/b5/c4d6504d10bb1d0e41d082bdf5582d4436441f": "c8ed24f443869c9de6bbe936b455edef",
".git/objects/b6/982e0c19e42e43105170a17847c2d8c9f3c415": "934768063645a9678ec7ce2eab9070ee",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "b0c549c0aed479932cf26d094f76630e",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "9de9f2c6fa0aea6ee34b79162e9fc361",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "5523d4e8db4b01938143b79a2a707ffd",
".git/objects/bc/b6e20d259cfd385313fddda3ce598be67821e0": "c5121f2abec73d1d7823a5fe137ca850",
".git/objects/be/ecf1a2f7caca6098b7efdff80a332ab2052683": "497c7725514fee2466f1980afc74c662",
".git/objects/c0/bcf69cd691d58de9abad87b5dbad74c061d1f4": "affc5f021928f3925289a32e452d27a8",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "31782b0e3547365a9cae9df3a3668159",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "708ec387c1c405170e46ecb742b4d308",
".git/objects/cf/bcf2459acbd83d3008a27d0215da67edf24a9e": "e366044d4c2694d19773f93303dd490e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "9dbf5b01e391c548c8343be8d1d4b04e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "5a9f3522bf38ba5dd54f15a0f75cb0d7",
".git/objects/d9/1a5b52e028d6def171f25e8c5a81021e60c6f8": "cefb3c2d2265ba48fad0cae1b7c209b6",
".git/objects/d9/5520b24c5820c52907a75a524a4d260c55c2fd": "6a01e36c3c39abee6343ae1564797691",
".git/objects/df/ab96cb4bb88a2eeb44c2dff1ac40a064aa3bb2": "94622a90b46b92980830f76c609209cd",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "01d8a507be49f15714be4d17b6947e52",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "2950f778d5dda0c267b890b72f9e64de",
".git/objects/ee/2542388d8bad7e89cc5b5c656b3dfc80650db6": "b733172fb6bff27fad1e2920776a9883",
".git/objects/f0/db5dfc3d0c73f7625b204cd89aca39cdc2e35b": "7c448b14e10ccf914c4a2d1591b0edc5",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "aa30b45014e5ab878c26ecce9ea89743",
".git/objects/pack/pack-2dae40e057c2ec337ee1a7b7b9590b4a6ed69494.idx": "5b821aee057ed5dd2c7acd59ca43d015",
".git/objects/pack/pack-2dae40e057c2ec337ee1a7b7b9590b4a6ed69494.pack": "96212a5f6ea5c8b1b0e1eb2239550bea",
".git/objects/pack/pack-2dae40e057c2ec337ee1a7b7b9590b4a6ed69494.rev": "ae6855c12d5542437a1b251f4e40ecf2",
".git/ORIG_HEAD": "3d149cc51f3a1394df80f200204fcfbc",
".git/rebase-merge/author-script": "6c75f46acceb26e7677f0143074a0389",
".git/rebase-merge/done": "7190aa91ee78301354139cfee245c367",
".git/rebase-merge/drop_redundant_commits": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/end": "b026324c6904b2a9cb4b88d6d61c81d1",
".git/rebase-merge/git-rebase-todo": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/git-rebase-todo.backup": "7cbd5485cc02c234677185a656b7a1cb",
".git/rebase-merge/head-name": "7af7f62c1ff93562f49dd5a2f00c248f",
".git/rebase-merge/interactive": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/message": "d706c71028b249140ddb4d8f30f64916",
".git/rebase-merge/msgnum": "b026324c6904b2a9cb4b88d6d61c81d1",
".git/rebase-merge/no-reschedule-failed-exec": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/onto": "24a1961c1550e5b3a4b0f7904c8f00e5",
".git/rebase-merge/orig-head": "3d149cc51f3a1394df80f200204fcfbc",
".git/rebase-merge/patch": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/stopped-sha": "3d149cc51f3a1394df80f200204fcfbc",
".git/REBASE_HEAD": "3d149cc51f3a1394df80f200204fcfbc",
".git/refs/heads/main": "6ce03734e7462c9d78ad2e4b7917c06c",
".git/refs/heads/master": "3d149cc51f3a1394df80f200204fcfbc",
".git/refs/remotes/origin/main": "6ce03734e7462c9d78ad2e4b7917c06c",
"assets/AssetManifest.bin": "10fab82e39d0c2f58b5ad9ef9a156b61",
"assets/AssetManifest.bin.json": "997cd50474065c58b1233b91667b6bd5",
"assets/AssetManifest.json": "f4a5743af4d2fd61c5b6c71afb7c5318",
"assets/assets/banner1.png": "3410521ad82a0de62ca637c68527a789",
"assets/assets/banner2.png": "9d6e27dd70bf3a7cf190439981849327",
"assets/assets/barcode.png": "25327d4067a3fafbd252a2e71957f141",
"assets/assets/HomeDisplay.png": "e7f3f2bdf9da64871e1f1942841ad0f2",
"assets/assets/logo.png": "268f82ac9f4d7f8c861174d7d7b0dfbb",
"assets/assets/Rider.png": "0d7cdb1123bde15e7bd402dcc9805c25",
"assets/assets/Ticket.png": "5cc5919bc5fc6739007e787816dca1f6",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "aae98ed1cb755b1ceb34bcb88adb6c44",
"assets/NOTICES": "da398c267aa1288051147c03100b78ba",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "154450c405a49d5454f4580bc9da9244",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "25ecc56354d8188e3befc7ac9a6de3d0",
"/": "25ecc56354d8188e3befc7ac9a6de3d0",
"main.dart.js": "c4d50f7e0491333d0d099448294b485c",
"manifest.json": "21f35c2d6c3733df9da1311e3f33aef9",
"version.json": "a8d3ba51bc9b572d2906450c191638ce"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
