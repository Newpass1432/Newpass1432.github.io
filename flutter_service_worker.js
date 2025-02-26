'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "5b7698984e82c29db66d2c998e79bbb3",
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
".git/index": "e11dd02537e94cfaa62067d9bb527653",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9af13f526ead02264d0399e689885189",
".git/logs/refs/heads/main": "df9e04f43e7900d84abf6d3c2c80cd29",
".git/logs/refs/remotes/origin/main": "0f19a814b241d8eff7a0f74e6112fd52",
".git/objects/05/6903c4fbb17a7d75e184ff54a23ff6a8d69c55": "78c4a2e406b985d1f0add989dd052ddc",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "6e52dd0d00b1b7a37d90e50848791b2f",
".git/objects/06/91bf2e48b32d94ac2c6eac2ae8a8efe4816aad": "fc1553c7a7f004a225f58e74a4e4634c",
".git/objects/06/a9aa0e7d2c4225cc4af163d87bff68e32719fe": "32527be1cd477c59e04ee5b985908923",
".git/objects/08/bd4e92edde54364e8347dcde6f90784f255829": "4e28d4457ec2991f7dcda528ed1a9f55",
".git/objects/0b/21a6b8aa38bd4a94756791fa7a5d800ce22e25": "19416f4a8942dd6ac26d04cbb07ec185",
".git/objects/0b/2fa47f7d97127794ebede118f3ebf304ad5b20": "04350ef768089b30a55eedcf3a0a0d09",
".git/objects/0e/db70dd7cf26cf67cc1537937d5f7d8a21ecdd1": "4595788485785fe9fdd48d41f2be1b0e",
".git/objects/0e/fcb3562fb263a1c96df14463105998ef928bfc": "7bdbc1eee85f2327b1ca5ca42bc8bd73",
".git/objects/0f/a1285c02488a8b5fe2d084ac8a593d72600e65": "b7663591708ec2ac96284f94500bf7b0",
".git/objects/10/92e7b58beb1a1297742ba1a7834a21d6ef7f5a": "fdcfb9f3394d3447c5320071992e946f",
".git/objects/10/e4738f195643f71c837301a74f9e0550db912d": "2fd817516e5c9e20b54b093f2f29da9a",
".git/objects/12/178901a6f6a4e8d0ebac2a4b6d05ac41dc4edc": "bf09c257ea601fd8956fe49a0116e298",
".git/objects/12/549609f1244591fc5ebdff7ae47fe96d61acb3": "024161fc15e664e5604ad5e3e9b842f4",
".git/objects/12/64be2a2b7d0b4d13df518cac88e9062477b31a": "b5ef1b6732a5bc13bdfabcb282a15af1",
".git/objects/15/0f278677d256569203bf6ff747de202041a702": "eccae3374594e865975a2bf345fafd75",
".git/objects/17/589cd118981fcfc2eaf739dfcf5bb50cfdb979": "78d239fccdeb8e38866458d1223d94af",
".git/objects/18/550ff83671aec8be9286fd87253f6cfba02c20": "3eef496616a63d31be2bb2827f80ae73",
".git/objects/18/960d96ce3a81d2ef4216bab7814b96c742470b": "508819cdd07ef4f10251024bf44d1715",
".git/objects/1c/411501c5ed0e25a486b4330c762a9521a7e88f": "c77908f7eec2633fbcfb29877d55280e",
".git/objects/1e/52bd18fa6e0ef5c9b22acddd3ecd6e9f90f714": "88f9249773d275dd1c36c2eba28b8e81",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "baf057c4b90805f732d24ac22cb10345",
".git/objects/1f/b2aa01dc16b90ac4a9a35b876418a7a2926f7b": "59db8c33fd78b375cd249f848967fdb6",
".git/objects/23/9fcd8a47246b43af546f30cc87114b7cd1368d": "a9632e4c6a2e50fba73d970fd052615d",
".git/objects/24/002b4565732434b5dbc70d3f4995049b914b34": "15dc7f2c2f8967b87ede4d505fbc9ae2",
".git/objects/24/300bc92f13a45f7557b4efa82d38baf51cc1a4": "8dd7b182fc67af0e5cb1bb19b99e00a0",
".git/objects/24/b9d559397ade8417a39eb9e188ab5e47532b8d": "73f4d842ff742933e22c9ec39d637ceb",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "96e3285980ba51fe6eaf0295fd60ff80",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "847cef55692aa6311c4c2f26d42b36b5",
".git/objects/29/a4a1a114d3aef98c319f97b45928c848736c9a": "bdf55c2aeba1cec3af9e5c04f188a749",
".git/objects/2a/6fc7746fd065c7e95cf15268e12900ce9872a7": "b7e662926ce28b07d8159abfd792aeec",
".git/objects/2b/35bb5cbaf04248ea73cb5e7f4fe7ff7d2f34f6": "3b90389e7584c510ba874a8326e24943",
".git/objects/2d/0dabba33e4ede575a904bb4689330c1d919d35": "2af88da2e4725b0da2216f94d16598a0",
".git/objects/2d/fad4404bd232b51b1c6866fd7698bf56477e8f": "4f752e9e52f1cb51e05a551e4b6bda63",
".git/objects/2e/a4f5a0414d4935c93a69d675d1f482d0d161d7": "19e4153eed2dfdf274ca7441d0af0726",
".git/objects/34/71e30c03060a13507b99b87a9e881da133d81b": "a20af2bbca6d59907662ab9bf36e96b6",
".git/objects/36/29829a0d1132fa9422ab48af56d3bd74ee9608": "d6b0b6dd92de097dbf97024cbd03f04d",
".git/objects/36/e0caaf053b1c8d992388e9018ad19f738e8178": "18fcde64c49ddb126763a5ce9aa7888d",
".git/objects/3b/ae7bf45610e46d27d54273248e8e4ae4b9f5ff": "a41d2092eea336f5741fd7a4c53aede2",
".git/objects/3c/0c7aa9f68e378bf2072a38d44945beafacefd3": "444ff1d5cdce2af8a0272c6c65f97d28",
".git/objects/3d/4f379f419455056fced0f45e22fac77365da94": "cc687d8257429cd51753765602ff31dc",
".git/objects/3f/71e416d77d1d0444f90919b6f3dbf211493260": "6bdd07d7a9e8e931bfdebae3017085cc",
".git/objects/3f/8cc3f266b128350c1cc6e7076fb65e4a1e005f": "9b33ba0aa9f4d81efd2ef977fa6bf275",
".git/objects/41/611a16ebb6132fcf3b1daffb0b0ee2a7685c24": "24845575e44bb057ba3ec61099619608",
".git/objects/41/a062a94e9bf912ec037a3cfa0803dcbe7555fb": "65d5af32baa96809c0aafbfe12721f99",
".git/objects/41/d7fd7220d847c9c46cbe9f7f5a10ce70f59fc5": "dd886ba982e5e46d39d30e0dd8839b01",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "0bb82caa96c962530864f28e847f4ab9",
".git/objects/49/87af230d361d7aa5ff3b2c2b9659a6b807c6a5": "0edb54cd198936c199c7974961c20a0e",
".git/objects/49/bf5c257aa071386d707bfc03bfed2e58d3bde8": "5cfbf4793ecc8a3ed80b0476ec6cdaf5",
".git/objects/4a/f4a9507db2ffdd23e615e0642b01594b710e54": "d415548112b251d48aa753d27927177d",
".git/objects/4b/0812cf2bcd197774a8d58576f9cead3cd7661a": "e40be182bd5bfaf14fa9795a64a8a7cb",
".git/objects/4d/2098b2530da7e617c37efc0f6cd1040de83bbb": "0cc4cc147601ca9742daf8ba082cf293",
".git/objects/50/4af37bc4e8de78655d7e7badbf12725c808139": "6be6f6d77edc1b535379eed9849b0f2d",
".git/objects/50/90d86524d16f18b403ff90291dd46448eac43f": "86a4deb67222559dd0696827c64cbf58",
".git/objects/52/4d456e256b1e17778bffcbe50eaca57899026c": "09dc0e4590ac1851c89345574213a24d",
".git/objects/53/00e9c14d3ff754ff7a0c74ec91102300b729cc": "c2234048ab089ad0f8d9e9be955184de",
".git/objects/53/963caec1bc08726c3e973135f4931af5e63b07": "fe256d7fd1df186be7e9134b5c34d113",
".git/objects/54/b69411cc2ee0dce7fd428646d48c281a5a1546": "aa657e23fde68f9524a2645a64a1cc92",
".git/objects/55/50c823f80afdf394a376fd72fe543335da465f": "d52aa9e9ac2ecc3c40128cf130c52b76",
".git/objects/55/86dc8ad6ff842dccab5bbdd0374c3fe23b2d5b": "c13a39ef9e1b836198034bad9eb7c79f",
".git/objects/56/19d4da4d1512a9a61b30dacc63ad92805bbfd7": "f51001b7e9ff35fbb454fd57d3dc7c81",
".git/objects/57/3822cc1bbebbf6a1d21220147cfba89e815bbd": "98c8ba19700d92f90122d0aa9e0d79d0",
".git/objects/5b/f934063d75bb265b5d1665f738bd7520b06618": "1190bea87899f4fa700a8b6460b1a9c8",
".git/objects/60/33fdc9df39330cce5ac2f48262797af071c8e4": "8c18913674ce76523e3d6d61671847c4",
".git/objects/60/90793668c16b389b19cf7d6425473f74e5c08e": "7151378459b34a4a77de085804e6a4ba",
".git/objects/61/b710e386df0b1860cf6bc11c564f662b8f5458": "527df7d5ce1f23af427107aa5f727676",
".git/objects/61/f3869867b5ca7af54f89e256e43ebe4a1baebd": "8f3a2e242f1343780aa50f46417177a2",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "bbebac4a2c902f61cd432f1208897318",
".git/objects/65/1f61f079671a767a39c395141ba74b983c068f": "90205fb35fd647acbb34077a79a0b28a",
".git/objects/65/41761cdfe5a1488fe6d71ccab084dc8294c337": "0f0c20af17dad24e877bf8b41875ea09",
".git/objects/65/fd0220c88d69d4fcd0ead59fe58ddcf94f14df": "1f14411dee1fc9fa06bd5bc73b6cd042",
".git/objects/68/ac16fdfea809b0f9ebbf310481a8c3c859b531": "ce987d58964df024ccd6d7c72dc0bc84",
".git/objects/68/bddf4aa647da82627ca53dcb2fa4fd804ad3c5": "0ad30ec3d4e2b4445e847a6a9c092c28",
".git/objects/69/dcfaf471b48e4cf1e1710f35b23ad0e5b05819": "65694283eba71664a046fc06f0e11966",
".git/objects/6a/f1d1d176bf35d474317a9080946f4fb31f0621": "459c4e388a7a83fd39735de158ab3607",
".git/objects/6b/6438bda0df83ef397e430e90bc66b2a13f84c4": "bc3e6259799bb3a4c48671abc32eeddd",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "bcafa311bebf5634eaebc9a830559b6e",
".git/objects/72/b534b7526de46349562f3608fd97332690640c": "650ff4d6605e57dae321b0483a6ce86a",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "ebf7d1a0954090a5cf6bdc36cbf3289e",
".git/objects/73/d2d2a7344a13f70cfb18b8641ec470ed911641": "1abe6b71165643e7c8c81482f2fc84b7",
".git/objects/76/0275f242aa9bf28f978dde9da3dd10199528f2": "c4af498384cfc31e3624ca154ef2fa28",
".git/objects/77/c59de197930fc3cfeed07b0429f525c6ac1ba5": "02b668a15a2de08cd1b0052809e8f6a4",
".git/objects/77/ebf718aa11490d4a6be025d56469088cc5df5f": "e5bf3e03b9ee85701faa56c0a0d25d53",
".git/objects/78/c2f0e65f87f8f59bb2206f4335513f249797d1": "f76b7be146e07a36649238068cd51149",
".git/objects/78/ed9a75b3fbc1831dfebe93d485d3b6508bdca3": "ffab12489d56916bf5513b60f85b7ec1",
".git/objects/7c/fa4d6e402bed76efa645dee3b2d2a93dd40f83": "d5d30714406f19d47a472ecf596d68de",
".git/objects/7d/a16f2fc8f726d5e221133aa2d229a1aa343a0f": "108ca5953934a961601a0a6a06e7d1de",
".git/objects/7f/8471b4adf2331d402865af341969f69e7b765e": "66cc152fe99bc6ab1d90fd5b981a3408",
".git/objects/80/5717f587196c3d8c81df040c9e143e92ed2193": "5f629061b195a963560bc298ac584314",
".git/objects/81/cee2424cc7429cc8637f8732213b98467edd9a": "781aaea26a5c700ce1429140492867b2",
".git/objects/83/e780c1c6fbf011a7c0fc89e07a2b48f4f43dd9": "cb729c151552fbde7b44b91be0e9dbeb",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "0a804c6a015be41c2f1307e32bf6b5bc",
".git/objects/85/85904fa3a6fe2782e9cab3828c555ab3edddff": "454a79fef3478c055255a65854747f5a",
".git/objects/88/9bbd0b6d70a8128a5f1d3b2f9fdf48a6f7d6f6": "66624d73792fc5b6c0122436c0ef74b9",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e35fdc55764d9ed14315f6ff50093ab3",
".git/objects/89/1ff81e6aad55ee53d0c9ffda9a3d5cac625db6": "a2c0f865f4545f41a6620258afafaaf8",
".git/objects/89/de2f5a5318d18beb6c7dad8c97e2d6261bbaab": "ffb4356a90e7db00991112c0c313427c",
".git/objects/89/dfd1905cd9c003114a6c65fc6749870f90f047": "83dac5132b32a8717614bd7e2706abb6",
".git/objects/89/ff7ee24f814f6d2f1965347bc8e3ec292abf2e": "2048b6a8001450999fe0b210bd122d30",
".git/objects/8a/294307c7ee85a5706ab4229404a76c02d6df34": "6d8a39457d29b78213d0c514a56c809b",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "b25b26893b8f92a4f583677ba27f0a7f",
".git/objects/8c/4adbce2ae72f5d9ed80aaa57e9add98ab9ebe7": "f91d7d11beba7d986a7baa24cbf57960",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "8003b3408ffe6fc347eaa3ce30414536",
".git/objects/8c/9a032dc2f0403484f4162cbc35dc0da96a8a3a": "1d38beb1db767b4a913b57fac920dc7d",
".git/objects/8c/cf01841346ba7efdc0bef5b78d0c4cfba5b7ad": "9536322b464e647871ed80b03505a701",
".git/objects/8d/0f88f9e0994c5067e97c567c41c6caaa66a8db": "a6c27085cee963845ebcb58751f1f949",
".git/objects/8e/4e2d0089562977d7e3154c1a789d6986c3299d": "29f8bcb12faa2e2c52ee555bc4756295",
".git/objects/8e/9a1fa64c6fd116506452a2a6a50f18ffcb636d": "06590ba5a566689d00a6d79b4be9f33b",
".git/objects/8e/babd0c90db03c05719f2af6d25fac2fe064dbe": "4924d7a4e48102dc090d605015aca786",
".git/objects/8f/f49e250dd054bb897c443fad5fea7789efe420": "701a23349c07cf55001dcb7b1ed7a96b",
".git/objects/90/5d039d605feeb993eb19c3a372034975e31a75": "cc28b3b94d50001136c381825c47fc14",
".git/objects/91/40f79d4250d49485730f3ba5fc73a4e8140705": "a86a29695b29493d870c631a91aea4c9",
".git/objects/92/14cfd715077629908026c5f34d627d39438c5b": "9772f84d77f0e15022c9833eed1b2c4b",
".git/objects/92/40bcc53828ae03b0b44c580e5c49199e0d688c": "766135df77ad1c6f01aafba302b5cfba",
".git/objects/94/2ca444c532d828c37c2fea00bdecafdac357a0": "38fbd8b624033c2913578283db410806",
".git/objects/94/fd4301bdc0551ae52b853703be0590b9992faf": "c9c58f395b6cb60190889a4c2b533fcb",
".git/objects/95/e8ad630c79d1012fe4cf57856c98816324a107": "41883674d00ded6b2e8d46b83c360ab4",
".git/objects/96/6d0e13d96391d727c4ec21fee23275a2fe693c": "af434311dbfae7cb555f8736890ca20a",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "bf78de9a46b3f184061cc620c3ed1316",
".git/objects/97/8ecab4703aed82df8a592db9c153073322dce3": "e51f23a40fa8ff5207605cc692382b7f",
".git/objects/9b/17c9e4cf8066dd3cdbeaca9833d2f2015b9df3": "1085a76899fca793ffb36a8e5c6088fb",
".git/objects/9b/76a5eedbe15da21de9e275352f3dd2fad4b843": "63e10811b8166def7de9d45d6b03c0f1",
".git/objects/9d/92b3a7be53dbff4b85dfd410ccf5bd658d226a": "8515884cd93efbeab766e9dbbabfc9de",
".git/objects/9d/dcf7833b2c8a57733b576e8855bf36b8ed7c69": "b9104c34e0b3bf8a89dc1d815ed6510c",
".git/objects/9f/83d5079705ecd8d3252850167d450bbebf73e0": "62bf885a58bff3fc5fdbe530ac983d87",
".git/objects/9f/e6526d39d2bbc25a1d104fc433d6df9a4dc514": "dec0984886c7e2714bdef463cfd4bb28",
".git/objects/a0/5e453f7cd5a17ae1a0784cb779d4fe1839a605": "d0a2ce3e9f8d6e95ba33ee4964934981",
".git/objects/a2/2a72ba8f4757d9c67df2a40b7c764f801c94f3": "5090ff2610480dfed0e5a9f01b326c84",
".git/objects/a4/b1b01c28a1c61a8310cc55db7c841b35b56fe0": "f9e97b547dfebbcd187e56daf5c5004a",
".git/objects/a5/35a6358c25a1c0d1e7ddde81827abf2b24d2a8": "2f109e8efe9a1d0d8cb2aec39ef8e49e",
".git/objects/a6/57f5909b6f1aeeecb602e8a7e10a1ea40ebf09": "f57b715c707a31c0aa8e3d35f749cf83",
".git/objects/ad/ee1a7f79b8ffb9c8133b9f0b87706e62cd5087": "7caf70c3a3904977d1a32cb6b5706980",
".git/objects/ae/125426e518546edee911de1cfe44d2f157a6ef": "8b28b656bb78bdc3bdd97745e55226c0",
".git/objects/ae/863a416f220e0fdb64606a89566a0f725a5f7b": "baa269a4b1468bb56762b64a4b01c999",
".git/objects/ae/f10304c6442647dc038895172eac6d72678325": "1345679ad685ca5b6da41a5a951b855e",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "7f7a35d97b21f578a6e3dfc95f936101",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "05f6258e74434f94977ac333a3891eeb",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "2c236ea17ad6b309081e0a5251137b84",
".git/objects/b5/c4d6504d10bb1d0e41d082bdf5582d4436441f": "c8ed24f443869c9de6bbe936b455edef",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "b0c549c0aed479932cf26d094f76630e",
".git/objects/b8/c201d1965b17d5a3af0b084706f3e934ca51f0": "36febf6179feb8c2fa7a008284c2c20e",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "9de9f2c6fa0aea6ee34b79162e9fc361",
".git/objects/b9/9d840e46895a36bea409a6c2a5fb7b0be6a01c": "414b294ceca7c4fef5ca31da887df08a",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "5523d4e8db4b01938143b79a2a707ffd",
".git/objects/ba/9a04bc287a0b11eaa8df9fe8ae1488b5cf212a": "eff2a1fdb78949bee6c6f95b8dd2ffa4",
".git/objects/bb/3bffa73cf5adf594ef19f2bfb7b385a843f9c3": "21af75e70d5d9f77f78f8660cd3acbf3",
".git/objects/bc/5ed294fe9bd8ec7587bd6bf2c88caaa818868a": "35f6e448f65a7452ece1b6eee3eda583",
".git/objects/bc/67513d094d93f4b6378524582a79c9db645c07": "8845d2cc1e7fe3f952ce708dfb677d90",
".git/objects/bc/b6e20d259cfd385313fddda3ce598be67821e0": "c5121f2abec73d1d7823a5fe137ca850",
".git/objects/bc/d27c23f7c9aeb41d4c10adc6ed9db56c4adb25": "b20e53e03b75791556a87d2ca5b0ee07",
".git/objects/bd/3e93fa7c1dd55ce6d023d03c35d8f7e1b54c3f": "b36998da9dc30861de68a4801a1c2e86",
".git/objects/bd/715bb8a8c7c19c78302d0ac1a6859532428b83": "26072c80fb9894a5e0f15949a98b1c7d",
".git/objects/be/6556fb6f8f18945b009ff201c70188374dd3eb": "43952d50b7a69d4472a7f74c6016f5dc",
".git/objects/be/6f9ee9bec9bddb56178cdcce8efa1ae0f34424": "f18a9f313207b6d12666082727129bc5",
".git/objects/bf/2187416b0a298c5d2a61d94415066c429392fd": "c671f1e4153e3bc849165628399f843b",
".git/objects/bf/62cac07a794596b6fc9e5f25589d527bc91aa7": "744433091babe000cdc347aefa8c018a",
".git/objects/bf/8cfea4dab31c5bb0c499d5fce5e3d809822e57": "67c832886fd94bf56c05a72a3fff1b54",
".git/objects/c0/eaa7950b6aec768e9d5e222199eae0c1c03471": "c8d07e23980af6dcd484e35850dc28b7",
".git/objects/c1/18028ed982ecc7c50da87b91682f1ac90b99a7": "ac901b796232d05fa025c8415aacb611",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "31782b0e3547365a9cae9df3a3668159",
".git/objects/c3/fd0af8fd878208c15f2f21f8dcd312bc384f55": "bc1bcc289f97565e1f9ffbc3e8c0b23a",
".git/objects/c4/a0065902302d22073d5b9b80380df0e503fee7": "3003e20dac1332f65387367ca0451204",
".git/objects/c5/4465fd21f214b058cd969a3f7beb35c6b78582": "c339130ef1a55173b777b654b345bbc8",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "708ec387c1c405170e46ecb742b4d308",
".git/objects/ca/31e4adb73efa4d2157853d13b3e39c8bce6130": "ae3930893abe079908a56287cc4c1071",
".git/objects/cb/06cbea362ee106ce72468210cb0955e8f5b61d": "767ac005c49d4c2683e6c64665ce2781",
".git/objects/cb/b26eb3fd68ba0f5714a6a040f0ac7a1b5ddcf1": "e3d12f1daf789086408e827669fa48a0",
".git/objects/cc/3021bc1c0497376a47e7ed0409e96591b4dd50": "a9eb11a62f6ddb327ec12d298cab790a",
".git/objects/ce/0fee4a60fd08b7ce5f4166a01061bf2eb931ec": "812c9658da043c5cd6ded4008b3edf3b",
".git/objects/cf/0a79f17500066a9f1c816ff1e80b47252ada5e": "86607356d992349bc32074dbdfef7cfe",
".git/objects/d1/053a039cdecf8d4d2e455f62f07e4968967c87": "666d86bfe011551d8c626bbda8ba4eea",
".git/objects/d1/dd6e03d8547521344c986bb2536f9a28e0f9f1": "0861e40e77470cea8062e7eddbece565",
".git/objects/d3/51cfebd566061d702426e8c003845bd93083af": "b3ddf6db626a3ecd1582e10f29e707ca",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "9dbf5b01e391c548c8343be8d1d4b04e",
".git/objects/d5/571cc5aa6b24c7e70956dc9d5040c7bac65225": "f3e5bb462ca180e9ee873702b949385f",
".git/objects/d5/b8d094533d08281443c48c1ddb8190426a94ff": "b8c770f17a7a7133462a2f13b35e5625",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "5a9f3522bf38ba5dd54f15a0f75cb0d7",
".git/objects/d7/9f8667fc620227a877b3fe20b7bad12ae5a573": "2266314a5b248b1bc6d8203cf08ffcdb",
".git/objects/d7/b5ea5fd02089bca8f94c82990edf5bd36794a3": "e156372d7301e2f71285c925de901872",
".git/objects/d9/5520b24c5820c52907a75a524a4d260c55c2fd": "6a01e36c3c39abee6343ae1564797691",
".git/objects/da/a67c50d6a2b25a147624e4333b8a36c7ff94e0": "f038cec789f85a4fe3013b3c88f591e5",
".git/objects/db/7a27ea0fb91b6b97f27419059e2dc20a8eae30": "bc518139dc27d945db728c073aa89eae",
".git/objects/e0/374caa2ce7401fb3f5186f05f3e0e7d873edec": "43782e6ad5b5f49857802ffdc573a100",
".git/objects/e1/408bbffc586b8557719af674a3a6c24e9b0cf4": "5c010a1c34ee5ea07a28ac6c80b3cb6b",
".git/objects/e4/326fcc26bea0a36d95ec6a823964547800cf9e": "04e52d8ed56bf0bae8e18265781dd4a3",
".git/objects/e6/b3d382d33d7c471a45166cc52909db301838e9": "12432891fd7d59256d9e0896785be024",
".git/objects/e9/ab427914b2f8840cfbcd67e20ab0f391b2c72d": "7db0a4d1ec584f7504e7e68e1418f363",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "01d8a507be49f15714be4d17b6947e52",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "2950f778d5dda0c267b890b72f9e64de",
".git/objects/ee/9d5651352d97dab90e5c2caa482825b621e759": "cfdc62ad9b10e419e667b66a13b5e1f3",
".git/objects/f0/3b78e0f50c5b4f9b7ffb96cf4b4deb7112a131": "7ded4fdb9ded4155080e4b33ac990bbd",
".git/objects/f0/bba5fec2c295289f3ef725874e35167c82e8d9": "a1ae7e7b190f8a6758676b1411673eb3",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "aa30b45014e5ab878c26ecce9ea89743",
".git/objects/f3/8bf4ab8d6121eeec1736d2e7b646af16af6f47": "1ef7ad5400f5615579b18f66f127497a",
".git/objects/f3/f47279259d471a47392de22adc5781422008f5": "d3fc780bc2f8b105847e9b443d0600eb",
".git/objects/f6/97587dc695ea4d00641171e1097bb9a11d4b21": "14db98565e0067a25cd0df28dab56927",
".git/objects/fc/a3f4e8b32f5df750e6c087759293e814b43fca": "a27ce8c9297b5a6f6b9c75e74b263415",
".git/objects/fd/eb635fa8777a9c0d3ebd70c84a3591105755c6": "a7e46720ea6ac41f033597c31d507926",
".git/refs/heads/main": "f2017a03e01adfcdbed27e11cfd9b9d4",
".git/refs/remotes/origin/main": "f2017a03e01adfcdbed27e11cfd9b9d4",
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
"assets/NOTICES": "e0f1e1f56ab007729ece5a4ad3927ef7",
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
"flutter_bootstrap.js": "7a198f012812a4bc575a460b7038c03a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "25ecc56354d8188e3befc7ac9a6de3d0",
"/": "25ecc56354d8188e3befc7ac9a6de3d0",
"main.dart.js": "c1b8496f0b07bf88a01d1e3ed3fa21dc",
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
