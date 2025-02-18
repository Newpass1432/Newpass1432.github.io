'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "59624ccd5facf48c6ed79284cdbc13dd",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
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
".git/index": "c63fb87a5f49eabc66ef6979ea963ea5",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d860a7aa54ee3cd6896a01edf2e2d0c9",
".git/logs/refs/heads/main": "6b7aa8ca8100fb4e2f99a0bb332deb29",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "6e52dd0d00b1b7a37d90e50848791b2f",
".git/objects/0e/db70dd7cf26cf67cc1537937d5f7d8a21ecdd1": "4595788485785fe9fdd48d41f2be1b0e",
".git/objects/0e/fcb3562fb263a1c96df14463105998ef928bfc": "7bdbc1eee85f2327b1ca5ca42bc8bd73",
".git/objects/0f/a1285c02488a8b5fe2d084ac8a593d72600e65": "b7663591708ec2ac96284f94500bf7b0",
".git/objects/10/92e7b58beb1a1297742ba1a7834a21d6ef7f5a": "fdcfb9f3394d3447c5320071992e946f",
".git/objects/10/e4738f195643f71c837301a74f9e0550db912d": "2fd817516e5c9e20b54b093f2f29da9a",
".git/objects/12/178901a6f6a4e8d0ebac2a4b6d05ac41dc4edc": "bf09c257ea601fd8956fe49a0116e298",
".git/objects/1c/411501c5ed0e25a486b4330c762a9521a7e88f": "c77908f7eec2633fbcfb29877d55280e",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "baf057c4b90805f732d24ac22cb10345",
".git/objects/23/9fcd8a47246b43af546f30cc87114b7cd1368d": "a9632e4c6a2e50fba73d970fd052615d",
".git/objects/24/002b4565732434b5dbc70d3f4995049b914b34": "15dc7f2c2f8967b87ede4d505fbc9ae2",
".git/objects/24/300bc92f13a45f7557b4efa82d38baf51cc1a4": "8dd7b182fc67af0e5cb1bb19b99e00a0",
".git/objects/24/b9d559397ade8417a39eb9e188ab5e47532b8d": "73f4d842ff742933e22c9ec39d637ceb",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "96e3285980ba51fe6eaf0295fd60ff80",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "847cef55692aa6311c4c2f26d42b36b5",
".git/objects/29/a4a1a114d3aef98c319f97b45928c848736c9a": "bdf55c2aeba1cec3af9e5c04f188a749",
".git/objects/34/71e30c03060a13507b99b87a9e881da133d81b": "a20af2bbca6d59907662ab9bf36e96b6",
".git/objects/3f/71e416d77d1d0444f90919b6f3dbf211493260": "6bdd07d7a9e8e931bfdebae3017085cc",
".git/objects/3f/8cc3f266b128350c1cc6e7076fb65e4a1e005f": "9b33ba0aa9f4d81efd2ef977fa6bf275",
".git/objects/41/a062a94e9bf912ec037a3cfa0803dcbe7555fb": "65d5af32baa96809c0aafbfe12721f99",
".git/objects/41/d7fd7220d847c9c46cbe9f7f5a10ce70f59fc5": "dd886ba982e5e46d39d30e0dd8839b01",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "0bb82caa96c962530864f28e847f4ab9",
".git/objects/49/87af230d361d7aa5ff3b2c2b9659a6b807c6a5": "0edb54cd198936c199c7974961c20a0e",
".git/objects/49/bf5c257aa071386d707bfc03bfed2e58d3bde8": "5cfbf4793ecc8a3ed80b0476ec6cdaf5",
".git/objects/4a/f4a9507db2ffdd23e615e0642b01594b710e54": "d415548112b251d48aa753d27927177d",
".git/objects/4d/2098b2530da7e617c37efc0f6cd1040de83bbb": "0cc4cc147601ca9742daf8ba082cf293",
".git/objects/52/4d456e256b1e17778bffcbe50eaca57899026c": "09dc0e4590ac1851c89345574213a24d",
".git/objects/53/963caec1bc08726c3e973135f4931af5e63b07": "fe256d7fd1df186be7e9134b5c34d113",
".git/objects/55/86dc8ad6ff842dccab5bbdd0374c3fe23b2d5b": "c13a39ef9e1b836198034bad9eb7c79f",
".git/objects/57/3822cc1bbebbf6a1d21220147cfba89e815bbd": "98c8ba19700d92f90122d0aa9e0d79d0",
".git/objects/5b/f934063d75bb265b5d1665f738bd7520b06618": "1190bea87899f4fa700a8b6460b1a9c8",
".git/objects/60/33fdc9df39330cce5ac2f48262797af071c8e4": "8c18913674ce76523e3d6d61671847c4",
".git/objects/61/f3869867b5ca7af54f89e256e43ebe4a1baebd": "8f3a2e242f1343780aa50f46417177a2",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "bbebac4a2c902f61cd432f1208897318",
".git/objects/65/fd0220c88d69d4fcd0ead59fe58ddcf94f14df": "1f14411dee1fc9fa06bd5bc73b6cd042",
".git/objects/69/dcfaf471b48e4cf1e1710f35b23ad0e5b05819": "65694283eba71664a046fc06f0e11966",
".git/objects/6a/f1d1d176bf35d474317a9080946f4fb31f0621": "459c4e388a7a83fd39735de158ab3607",
".git/objects/6b/6438bda0df83ef397e430e90bc66b2a13f84c4": "bc3e6259799bb3a4c48671abc32eeddd",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "bcafa311bebf5634eaebc9a830559b6e",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "ebf7d1a0954090a5cf6bdc36cbf3289e",
".git/objects/73/d2d2a7344a13f70cfb18b8641ec470ed911641": "1abe6b71165643e7c8c81482f2fc84b7",
".git/objects/76/0275f242aa9bf28f978dde9da3dd10199528f2": "c4af498384cfc31e3624ca154ef2fa28",
".git/objects/77/ebf718aa11490d4a6be025d56469088cc5df5f": "e5bf3e03b9ee85701faa56c0a0d25d53",
".git/objects/78/c2f0e65f87f8f59bb2206f4335513f249797d1": "f76b7be146e07a36649238068cd51149",
".git/objects/78/ed9a75b3fbc1831dfebe93d485d3b6508bdca3": "ffab12489d56916bf5513b60f85b7ec1",
".git/objects/7c/fa4d6e402bed76efa645dee3b2d2a93dd40f83": "d5d30714406f19d47a472ecf596d68de",
".git/objects/7f/8471b4adf2331d402865af341969f69e7b765e": "66cc152fe99bc6ab1d90fd5b981a3408",
".git/objects/81/cee2424cc7429cc8637f8732213b98467edd9a": "781aaea26a5c700ce1429140492867b2",
".git/objects/83/e780c1c6fbf011a7c0fc89e07a2b48f4f43dd9": "cb729c151552fbde7b44b91be0e9dbeb",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "0a804c6a015be41c2f1307e32bf6b5bc",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e35fdc55764d9ed14315f6ff50093ab3",
".git/objects/89/1ff81e6aad55ee53d0c9ffda9a3d5cac625db6": "a2c0f865f4545f41a6620258afafaaf8",
".git/objects/89/de2f5a5318d18beb6c7dad8c97e2d6261bbaab": "ffb4356a90e7db00991112c0c313427c",
".git/objects/89/dfd1905cd9c003114a6c65fc6749870f90f047": "83dac5132b32a8717614bd7e2706abb6",
".git/objects/8a/294307c7ee85a5706ab4229404a76c02d6df34": "6d8a39457d29b78213d0c514a56c809b",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "b25b26893b8f92a4f583677ba27f0a7f",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "8003b3408ffe6fc347eaa3ce30414536",
".git/objects/8c/9a032dc2f0403484f4162cbc35dc0da96a8a3a": "1d38beb1db767b4a913b57fac920dc7d",
".git/objects/8c/cf01841346ba7efdc0bef5b78d0c4cfba5b7ad": "9536322b464e647871ed80b03505a701",
".git/objects/8e/4e2d0089562977d7e3154c1a789d6986c3299d": "29f8bcb12faa2e2c52ee555bc4756295",
".git/objects/8e/babd0c90db03c05719f2af6d25fac2fe064dbe": "4924d7a4e48102dc090d605015aca786",
".git/objects/8f/f49e250dd054bb897c443fad5fea7789efe420": "701a23349c07cf55001dcb7b1ed7a96b",
".git/objects/95/e8ad630c79d1012fe4cf57856c98816324a107": "41883674d00ded6b2e8d46b83c360ab4",
".git/objects/96/6d0e13d96391d727c4ec21fee23275a2fe693c": "af434311dbfae7cb555f8736890ca20a",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "bf78de9a46b3f184061cc620c3ed1316",
".git/objects/9f/83d5079705ecd8d3252850167d450bbebf73e0": "62bf885a58bff3fc5fdbe530ac983d87",
".git/objects/9f/e6526d39d2bbc25a1d104fc433d6df9a4dc514": "dec0984886c7e2714bdef463cfd4bb28",
".git/objects/a2/2a72ba8f4757d9c67df2a40b7c764f801c94f3": "5090ff2610480dfed0e5a9f01b326c84",
".git/objects/a4/b1b01c28a1c61a8310cc55db7c841b35b56fe0": "f9e97b547dfebbcd187e56daf5c5004a",
".git/objects/a6/57f5909b6f1aeeecb602e8a7e10a1ea40ebf09": "f57b715c707a31c0aa8e3d35f749cf83",
".git/objects/ad/ee1a7f79b8ffb9c8133b9f0b87706e62cd5087": "7caf70c3a3904977d1a32cb6b5706980",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "7f7a35d97b21f578a6e3dfc95f936101",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "05f6258e74434f94977ac333a3891eeb",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "2c236ea17ad6b309081e0a5251137b84",
".git/objects/b5/c4d6504d10bb1d0e41d082bdf5582d4436441f": "c8ed24f443869c9de6bbe936b455edef",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "b0c549c0aed479932cf26d094f76630e",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "9de9f2c6fa0aea6ee34b79162e9fc361",
".git/objects/b9/9d840e46895a36bea409a6c2a5fb7b0be6a01c": "414b294ceca7c4fef5ca31da887df08a",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "5523d4e8db4b01938143b79a2a707ffd",
".git/objects/bb/3bffa73cf5adf594ef19f2bfb7b385a843f9c3": "21af75e70d5d9f77f78f8660cd3acbf3",
".git/objects/bc/5ed294fe9bd8ec7587bd6bf2c88caaa818868a": "35f6e448f65a7452ece1b6eee3eda583",
".git/objects/bc/b6e20d259cfd385313fddda3ce598be67821e0": "c5121f2abec73d1d7823a5fe137ca850",
".git/objects/bd/3e93fa7c1dd55ce6d023d03c35d8f7e1b54c3f": "b36998da9dc30861de68a4801a1c2e86",
".git/objects/be/6556fb6f8f18945b009ff201c70188374dd3eb": "43952d50b7a69d4472a7f74c6016f5dc",
".git/objects/bf/8cfea4dab31c5bb0c499d5fce5e3d809822e57": "67c832886fd94bf56c05a72a3fff1b54",
".git/objects/c0/eaa7950b6aec768e9d5e222199eae0c1c03471": "c8d07e23980af6dcd484e35850dc28b7",
".git/objects/c1/18028ed982ecc7c50da87b91682f1ac90b99a7": "ac901b796232d05fa025c8415aacb611",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "31782b0e3547365a9cae9df3a3668159",
".git/objects/c4/a0065902302d22073d5b9b80380df0e503fee7": "3003e20dac1332f65387367ca0451204",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "708ec387c1c405170e46ecb742b4d308",
".git/objects/ca/31e4adb73efa4d2157853d13b3e39c8bce6130": "ae3930893abe079908a56287cc4c1071",
".git/objects/cb/06cbea362ee106ce72468210cb0955e8f5b61d": "767ac005c49d4c2683e6c64665ce2781",
".git/objects/cb/b26eb3fd68ba0f5714a6a040f0ac7a1b5ddcf1": "e3d12f1daf789086408e827669fa48a0",
".git/objects/cf/0a79f17500066a9f1c816ff1e80b47252ada5e": "86607356d992349bc32074dbdfef7cfe",
".git/objects/d1/dd6e03d8547521344c986bb2536f9a28e0f9f1": "0861e40e77470cea8062e7eddbece565",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "9dbf5b01e391c548c8343be8d1d4b04e",
".git/objects/d5/571cc5aa6b24c7e70956dc9d5040c7bac65225": "f3e5bb462ca180e9ee873702b949385f",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "5a9f3522bf38ba5dd54f15a0f75cb0d7",
".git/objects/d9/5520b24c5820c52907a75a524a4d260c55c2fd": "6a01e36c3c39abee6343ae1564797691",
".git/objects/db/7a27ea0fb91b6b97f27419059e2dc20a8eae30": "bc518139dc27d945db728c073aa89eae",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "01d8a507be49f15714be4d17b6947e52",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "2950f778d5dda0c267b890b72f9e64de",
".git/objects/ee/9d5651352d97dab90e5c2caa482825b621e759": "cfdc62ad9b10e419e667b66a13b5e1f3",
".git/objects/f0/3b78e0f50c5b4f9b7ffb96cf4b4deb7112a131": "7ded4fdb9ded4155080e4b33ac990bbd",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "aa30b45014e5ab878c26ecce9ea89743",
".git/objects/f3/f47279259d471a47392de22adc5781422008f5": "d3fc780bc2f8b105847e9b443d0600eb",
".git/objects/f6/97587dc695ea4d00641171e1097bb9a11d4b21": "14db98565e0067a25cd0df28dab56927",
".git/objects/fc/a3f4e8b32f5df750e6c087759293e814b43fca": "a27ce8c9297b5a6f6b9c75e74b263415",
".git/objects/fd/eb635fa8777a9c0d3ebd70c84a3591105755c6": "a7e46720ea6ac41f033597c31d507926",
".git/refs/heads/main": "e78f7251b7abda22d5c25eb4fda6088f",
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
"assets/fonts/MaterialIcons-Regular.otf": "5dc7b26ad14f4f5e9c699f68b15e426c",
"assets/NOTICES": "2b35435fbaf1e3a096b0fc752a961e55",
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
"flutter_bootstrap.js": "e5df8af419819a0ca0556c2c6f29b11c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "25ecc56354d8188e3befc7ac9a6de3d0",
"/": "25ecc56354d8188e3befc7ac9a6de3d0",
"main.dart.js": "ef3f665aaac0f650e63ce0bc3c0d8604",
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
