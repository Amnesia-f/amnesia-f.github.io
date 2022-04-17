/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","6244f42bb5a52319de88e9ac7682ae90"],["/Demo/index.html","2b317dac750cf20f883b2eff86634dbf"],["/Gallery/index.html","c98b840b6313e85d7b7f892ab591743b"],["/HTML/Demo/3D烟花.html","580176176bd6a899e1fb6330049e1144"],["/HTML/Demo/Early/Stats.js","a7d1796b044a042c21d7c07fc0dac3a7"],["/HTML/Demo/Early/TweenMax.min.js","ec8c7295d992b5209038d794a636a0ed"],["/HTML/Demo/Early/css_globe_PerspectiveTransform.js","c03bc1c6dc9254e934b9af6f07fb172c"],["/HTML/Demo/Early/dat.gui.min.js","e7d740aa4e056e7e7d012e54c5e66593"],["/HTML/Demo/Early/images/css_globe_bg.jpg","823d077e3b719afc159ea4602b0e40d0"],["/HTML/Demo/Early/images/css_globe_diffuse.jpg","0176e13d04ccae9a7dbd1adfefc82881"],["/HTML/Demo/Early/images/css_globe_halo.png","efd942e2b03a6e3f7b6d6cce6de40d9d"],["/HTML/Demo/Early/index.html","da028f2af1e5a84d21a5de4d33768258"],["/HTML/Demo/Early/script.js","b4a5025545d7f0d9c7a91649b21ad7f5"],["/HTML/Demo/Early/style.css","75972711583a72c622e59a6e7689bde7"],["/HTML/Demo/圈小猫.html","3a8bc1eba77af735afa1126b11b9112e"],["/HTML/Demo/坦克大战/css/default.css","63110ed0887e0c1ca62ca5cd84ec4353"],["/HTML/Demo/坦克大战/images/menu.gif","811c3bee393b6edc6bf0e7711de857c6"],["/HTML/Demo/坦克大战/images/tankAll.gif","5a3797cbba31f9d6058b3203b7370a19"],["/HTML/Demo/坦克大战/index.html","40d44876476fcd0c324f284fee36b361"],["/HTML/Demo/坦克大战/js/Collision.js","f1439696af96f90e0250176251d8f55a"],["/HTML/Demo/坦克大战/js/Helper.js","5c0796bb6f515845c7b85bc52aa9ae3b"],["/HTML/Demo/坦克大战/js/bullet.js","0ba64423cbd09227b7db48de15d24c77"],["/HTML/Demo/坦克大战/js/const.js","9b5dd926bfefdee739e321fa4c1d9176"],["/HTML/Demo/坦克大战/js/crackAnimation.js","7eb60292b013920f795553cca491c97c"],["/HTML/Demo/坦克大战/js/jquery.min.js","a1a8cb16a060f6280a767187fd22e037"],["/HTML/Demo/坦克大战/js/keyboard.js","f9eab8b0c5e9d111dfb944061f5d5a21"],["/HTML/Demo/坦克大战/js/level.js","0ba18382e2adc7c284dff659efc78437"],["/HTML/Demo/坦克大战/js/main.js","aeb0da663e5421f945be87d16c3d064c"],["/HTML/Demo/坦克大战/js/map.js","c1f1f9cba96a749d2bda07b753ed5b45"],["/HTML/Demo/坦克大战/js/menu.js","4726feb6c8b98553aa2cbaf66de975d7"],["/HTML/Demo/坦克大战/js/num.js","f400903361306736dd6455c9a8461ac3"],["/HTML/Demo/坦克大战/js/prop.js","56f9ded57f865cafd0e400b35c8d66d5"],["/HTML/Demo/坦克大战/js/stage.js","9b27a3de1f9a4d71c44b5c24b9058154"],["/HTML/Demo/坦克大战/js/tank.js","b4c26f2d81cf6e4a00ce42ecf6b4f5a5"],["/HTML/Demo/彩虹雨.html","d8e94a1bbf890a7c6bb6f4935d5b9ff6"],["/HTML/Demo/抽象线条.html","4f3a2352e43007844ed111a855bdd542"],["/HTML/Demo/撕渔网.html","dd904acaf3267918f14aca67140e25c7"],["/HTML/Demo/方块穿梭.html","d2a3bcdcfaee64265aa4859066a9cfac"],["/HTML/Demo/旋转粒子.html","b4820831e1ecc27700af4f8b50f9f0e2"],["/HTML/Demo/树镜.html","bfb5ecb57b5141d7d0ccbf8cd179f7ae"],["/HTML/Demo/游走鲨鱼.html","1be89ec01e0d508fd68012eec36af1c5"],["/HTML/Demo/烟花效果.html","9d442829bb8bff79c63b4b1ba133f87f"],["/HTML/Demo/碰撞小球.html","4b5fa05f0ab8bceec1edba934b0fb165"],["/HTML/Demo/纸飞机.html","7e15a0a568478e20538da0a9802baada"],["/HTML/Demo/走迷宫/css/bootstrap-select.min.css","68738245281e5fbee772982b59798279"],["/HTML/Demo/走迷宫/css/bootstrap.min.css","a0aedb0c89150dc3cdeb1ac46b1153dd"],["/HTML/Demo/走迷宫/css/navbar-fixed-top.css","60968bc4d8f4b675031b846b097b4d73"],["/HTML/Demo/走迷宫/css/style.css","8ebc738e9affdeb408baf92b0e8aba79"],["/HTML/Demo/走迷宫/css/style_1.css","ff37404c2052dfd08d0497db293438b8"],["/HTML/Demo/走迷宫/fonts/glyphicons-halflings-regular.eot","aa16cd35628e6dddf56e766c9aa4ae63"],["/HTML/Demo/走迷宫/fonts/glyphicons-halflings-regular.svg","0a5c48c69a25a93e37ed62db813387fa"],["/HTML/Demo/走迷宫/fonts/glyphicons-halflings-regular.ttf","47da44498fc073d9fff9ab0cdb0bef8e"],["/HTML/Demo/走迷宫/fonts/glyphicons-halflings-regular.woff","5eae1f7217b606d3580dd70ac840fea1"],["/HTML/Demo/走迷宫/images/flag_red.gif","71c4ce010d146694ed786aca003c7710"],["/HTML/Demo/走迷宫/images/sinform_arrow.gif","40c03c72175dfffd973dbf4cade4242d"],["/HTML/Demo/走迷宫/index.html","40a39a5ef543b0884784c5b5fd13e058"],["/HTML/Demo/走迷宫/js/bootstrap-select.js","45eddddd24f1ea4cf73b6db53889d115"],["/HTML/Demo/走迷宫/js/bootstrap-select.min.js","6ad7c68ee115b6441b92da6e2dd38d78"],["/HTML/Demo/走迷宫/js/bootstrap.min.js","447a910072bdf528317059c98a506cd5"],["/HTML/Demo/走迷宫/js/function.js","1225102ceecfb95f34f02ed51cbce7d9"],["/HTML/Demo/走迷宫/js/jquery.hotkey.js","d00385d073b9182a63f78b7eea21f3f4"],["/HTML/Demo/走迷宫/js/jquery.js","03af20945941842dff048a4570d7f175"],["/HTML/Demo/走迷宫/js/script.js","16f0210efecac15b35764f1fb524b07f"],["/HTML/Demo/飞机大战/css/main.css","5460c59795a80a56c39ecd0357bccc89"],["/HTML/Demo/飞机大战/image/background_1.png","c6f893c217716100c740ee1a54e8919c"],["/HTML/Demo/飞机大战/image/bullet1.png","a21bc3cd4a77f9943e0ed98f94e51ca4"],["/HTML/Demo/飞机大战/image/enemy1_fly_1.png","697f4cb8d5f04969c12e158692c3d052"],["/HTML/Demo/飞机大战/image/enemy2_fly_2.png","c730097b02594c4079f2388aa32074f4"],["/HTML/Demo/飞机大战/image/enemy3_fly_1.png","2b140e404b975333e86cc0427430aa1f"],["/HTML/Demo/飞机大战/image/中飞机爆炸.gif","d7b0d24b65b816f3b43e782da7ef5337"],["/HTML/Demo/飞机大战/image/大飞机爆炸.gif","d7b0d24b65b816f3b43e782da7ef5337"],["/HTML/Demo/飞机大战/image/小飞机爆炸.gif","d7b0d24b65b816f3b43e782da7ef5337"],["/HTML/Demo/飞机大战/image/开始背景.png","7cb8fd0abf5351cda5a7b2a2e98f1db0"],["/HTML/Demo/飞机大战/image/我的飞机.gif","1f40889bc3c01c574fea56e47e7196d5"],["/HTML/Demo/飞机大战/image/本方飞机爆炸.gif","341485ebb93628b03a7f910d511922bc"],["/HTML/Demo/飞机大战/image/飞机爆炸.gif","d8eb4d174d6f02652d00938380ed7f73"],["/HTML/Demo/飞机大战/index.html","271479839c6272199292e4a3e4174687"],["/HTML/Demo/飞机大战/js/main.js","7f3e4d3cc405be0db51ef960ce27e250"],["/HTML/Demo/骇客帝国.html","563d06be192bdde93bf640d806d53b56"],["/HTML/Music/css/app.30b45c25.css","1e95d5df8f174779e482bd5e51f632f7"],["/HTML/Music/css/chunk-vendors.094863c6.css","3a14f121bef7c31dbd4c944dfb953202"],["/HTML/Music/fonts/element-icons.535877f5.woff","535877f50039c0cb49a6196a5b7517cd"],["/HTML/Music/fonts/element-icons.732389de.ttf","732389ded34cb9c52dd88271f1345af9"],["/HTML/Music/img/icons/android-chrome-192x192.png","77129ee7ef4478f1a9c729a15a2179e3"],["/HTML/Music/img/icons/android-chrome-512x512.png","9e527be9a89e36f506622f769c1f7dc5"],["/HTML/Music/img/icons/apple-touch-icon-152x152.png","ce66f8626bac88be2d212ccab78a8eed"],["/HTML/Music/img/icons/favicon-16x16.png","0898a9a57a856ca3df406f29e5a8077c"],["/HTML/Music/img/icons/favicon-32x32.png","bd9f0f20f5533e3e16da30bc5180d4d7"],["/HTML/Music/img/icons/msapplication-icon-144x144.png","51b5233d43629c3ea8285812fbe08308"],["/HTML/Music/img/icons/safari-pinned-tab.svg","b9107e3f993da212c629880a221f3056"],["/HTML/Music/index.html","0950d6381f069cad9aaebb722d613a48"],["/HTML/Music/ixarea-stats.js","2d12777f2703612307ff4a12f1b21899"],["/HTML/Music/js/0-legacy.75478485.worker.js","648c12bb1251505519f5d09e2cdae861"],["/HTML/Music/js/0.c9123a50.worker.js","da19fcc36bad3622ecef4518cbc32f08"],["/HTML/Music/js/app-legacy.8b3b0c58.js","ca9a759009d421c0df5184204b78c749"],["/HTML/Music/js/app.ff02a91c.js","8ede1dd47c5863c614d6a44b2a0ee431"],["/HTML/Music/js/chunk-vendors-legacy.e75bd7b3.js","e376d17f479642aa417735d724edb612"],["/HTML/Music/js/chunk-vendors.a655fa4c.js","1bd6ae089029e319c1e656c62be0c884"],["/HTML/Music/loader.js","02995355b96ddf2519cd49f8aa73bb46"],["/HTML/Music/precache-manifest.9afa2167110700e32224e67f17027e58.js","9afa2167110700e32224e67f17027e58"],["/HTML/Music/precache-manifest.f05eec9f35f5865060af12e0fda58906.js","f05eec9f35f5865060af12e0fda58906"],["/HTML/Music/service-worker.js","34823ab0980eb2fa30d73261b992229e"],["/HTML/love.html","9789a42d65dc9fc0da194361a55dfb2e"],["/about/index.html","b8347f42d6c1a7d095378bbc298ea1f9"],["/archives/2021/01/index.html","05d382b9256362b5248fbe79bc8f4a21"],["/archives/2021/01/page/2/index.html","ec60a267245eab7091dee39fd647ac4a"],["/archives/2021/02/index.html","3490d823e86d17dc290d85667ce96305"],["/archives/2021/02/page/2/index.html","8f751f65a59eea455dff62098dd6335d"],["/archives/2021/03/index.html","0e2dfd7c4a9fa5c948b93257d079878b"],["/archives/2021/04/index.html","433559361b531000ff85d398d4717c9f"],["/archives/2021/05/index.html","1f588c0f37adad47a55401428b515166"],["/archives/2021/07/index.html","542e3ac148a551689d0e1575e22ecdd7"],["/archives/2021/08/index.html","e75ca24592c129fa8b17341d7e404121"],["/archives/2021/index.html","3ac8501c52bf1c3f23af8b4f47a86177"],["/archives/2021/page/2/index.html","a5c3b758710ca48b1cad5cca72cf067e"],["/archives/2021/page/3/index.html","2e4075d5098f621332daa29f9b746f85"],["/archives/2021/page/4/index.html","5d56eddc6f14bbf64b1cbb4a5e70422a"],["/archives/2021/page/5/index.html","ca2897563fc174190383fa24c3437db3"],["/archives/2022/02/index.html","6c2826acbb47b04c86bd87e9f490e193"],["/archives/2022/04/index.html","c9c2e746272486bb162fd969fa19c4cf"],["/archives/2022/index.html","84d373673e4db4f520c4115d4bccf727"],["/archives/index.html","b4e689e8c3920cbeba52662a65dc219e"],["/archives/page/2/index.html","d424cba0b89dbd5fb4d98bbd053546d0"],["/archives/page/3/index.html","44538ba2fe2e9ce80a9d4a0fd2123aa5"],["/archives/page/4/index.html","5045a2aaa773a3b453eaf37674d3c46c"],["/archives/page/5/index.html","0774a4545b378b1a5327129aea936eb6"],["/archives/page/6/index.html","293acb32a63992413f300f41daf2938d"],["/categories/AppInventor/index.html","f52899f5143885bfca2f4592dcce8e98"],["/categories/Arduino/index.html","88dde7055edd8e966f116cde954d4a56"],["/categories/Hexo博客/index.html","2dca96d010c0b9ce7dc2e9d6a309e8e8"],["/categories/Hexo博客/page/2/index.html","ad8cbdf85b985bf6c8b6d3427efb3775"],["/categories/Hexo博客/技巧/index.html","4b88b0cf9459c886f7de164f43a03a1d"],["/categories/Hexo博客/技巧/page/2/index.html","331a9638deed97262d3f3388227fa32b"],["/categories/Hexo博客/搭建/index.html","1ba239c4a8c4535e4e0d9d89d9100cac"],["/categories/IoT物联网/index.html","78e2469e6b782984c3217db48e795875"],["/categories/PC/index.html","c73450562c7108d8045bdc5f2f903b61"],["/categories/PC/媒体处理/index.html","953c76f35bddd61d1d25b5df9be46312"],["/categories/PC/系统增强/index.html","a36c37280002adf16b2c6e90b149de1d"],["/categories/PC/系统镜像/index.html","5296c6c3f9cb73eea784abc2ca7d85a9"],["/categories/PC/软件激活/index.html","b2af561794154a97167d58d315356ace"],["/categories/Python/index.html","ec5ef8620d7bb5828dc862faf3b8ea3c"],["/categories/Python/学习笔记/index.html","204be387bd4d6325ff76d5d78eea8b91"],["/categories/Python/成品/index.html","95ac532f84304a2910f9130a0d30396b"],["/categories/index.html","15cc57a177a8d7142d0d92c7071b153c"],["/categories/其他汇总/index.html","7ad4ee2b4da7e6892e8dc027f9d2a0b9"],["/categories/学习笔记/index.html","5f4390a009375b83326f76eaa8ae0633"],["/categories/技术教程/index.html","bf175a458eff80d0eb4b9a89be3a48dc"],["/categories/游戏资源/index.html","74010a4654b1a0b95f5c656b81d77a4a"],["/comments/index.html","283bcfadb6830c17c5cd1632758fce85"],["/css/custom/twikoo_beautify.css","b5c8a07528ef0a944b87a1a5701ce5c6"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","3bb94ed14efd3c1ea070a147a2d72831"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/history/index.html","a13254568565c5d9236a4cf8f4fb3eef"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","1e01265902a80f20c6b8d342d2744d9b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","01c286f06e9e8f7e2c0cc468ec1dc235"],["/js/main.js","67ef93b7026979d99da673cfd9fd85de"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","1685cd43da0de7abd4a649dd5b2d81db"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","9f465e7dd29ec62dbc6af321882c2b59"],["/js/wow_init.js","4244acb8641a2525f168b604f9ca4844"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","2af0e1d370e367108b7d7701c0816088"],["/message/index.html","27d19cdcf5b28e0d33b96c874d049f80"],["/music/index.html","3257b81baae7ba169928ec55bda51aaf"],["/page/2/index.html","b65a0dd5504b86b1209c008bd62a18d7"],["/page/3/index.html","bf19401fb9c2c35617e15641fefef257"],["/page/4/index.html","038aaa667c45849f96a708ec2159600a"],["/page/5/index.html","ccab997472ed433b0cc671ac95c1207b"],["/page/6/index.html","7b7037b93a6e9c09cf4c378ee3436e84"],["/posts/11e4/index.html","533add25be79c85968f98d176b9c7bf3"],["/posts/126239f4/index.html","72898021ef51ee84b75faa53f57d5bb0"],["/posts/20b3/index.html","c2d01fb52cd027d872c0f158bc6c0c6e"],["/posts/21396629/index.html","48ccd471e03bf9856dbf7c8dbc2f3eb8"],["/posts/241519a2/index.html","d674335ba8dc9c8f9507ad6aa8254e53"],["/posts/40cad56a/index.html","78e863d4abdc8ae5abe735cdf90dceb5"],["/posts/4161854e/index.html","fc560c8da1d6ca81567fed1c40a37bc8"],["/posts/4254dc4c/index.html","9a687e3b710db3b1f85f782727549b7b"],["/posts/461b0433/index.html","17b81297dc7a96c4896bfc999addfac9"],["/posts/4e5b/index.html","d6cb31d70d2f1a3036f982d6fbdc294c"],["/posts/56ce/index.html","b8f3fe1bd51d769f444042067ef695a2"],["/posts/60c319f6/index.html","6536c8a0c2f073ce64d66e65900ae125"],["/posts/6746a1c3/index.html","f073aca7b2b82a4a82803c161cb3c512"],["/posts/6c20/index.html","8d702675fa7addf612eb51cec685b387"],["/posts/6ec6/index.html","e35b69e40920d79b8c11156d0c518d71"],["/posts/73b37fcd/index.html","0748ed2e88ed7b1ee6e79bb8eb66c4f1"],["/posts/749a3a09/index.html","b4f0a8ca50975176d6bdbb50f106c058"],["/posts/7594/index.html","7f77872d7e9b568891b18bedbadab1a7"],["/posts/77049f2e/index.html","cb257ef67edf77808bb3f932856d31d0"],["/posts/7c82/index.html","6261785c9e379c74f845ced650736bcc"],["/posts/7j9m08/index.html","1ee94db3048d1e3721ac427e21f8253e"],["/posts/817b8e0e/index.html","f8386b8f78a4f9ba80e4a706a795758d"],["/posts/844fc5df/index.html","00c452859932c050bc5ce5e72e6a2377"],["/posts/8acab12/index.html","91fffda71c1924e8253012eeceaa2391"],["/posts/8b3/index.html","45c1632a3202b596d825d5e69c28c4d9"],["/posts/947ec48e/index.html","074e78577ebd54d597b3ae4f90576baf"],["/posts/997c/index.html","4e632ddd9ed5dc5a028e853a7239ac38"],["/posts/ab43a875/index.html","dd5361c9f6690595a005b2c7248f3cef"],["/posts/ac2c/index.html","1a4416a4c2d5ff5ca03ebc328f847224"],["/posts/ad79/index.html","74cc24bece52e44e274fd38aa100d33d"],["/posts/adf6e4b/index.html","71f59f2e0ab6221c12d6f0b0399cec9b"],["/posts/aea2/index.html","7f9927b61824b302ca4e3cbd264abdeb"],["/posts/b385/index.html","c9ce5e1afb08575a14907d6a9efad4ab"],["/posts/b7ed/index.html","fd6fd8951094263c850a692c0a5d7bcd"],["/posts/bc3531cf/index.html","0c02f42c007bde4c1351ea371a8455fd"],["/posts/bfed/index.html","3209fb3fee2609a35865f44e492baa32"],["/posts/c232/index.html","14f4102b6b77c7bdc02c025b536b1429"],["/posts/c291af82/index.html","e7bd09b4751dcce1ccb3680f2c4d7a7e"],["/posts/c2c/index.html","622b3bdc34d29b11d06fbb7a4ab0756b"],["/posts/c336038a/index.html","bc15b7a9ca88b88eb9ec3deed1f5dd59"],["/posts/caba8902/index.html","50f5873356166526fbcbda4e5a4a19f3"],["/posts/ce04/index.html","aee60c40ed385853656058f6054f5ed0"],["/posts/d6c8/index.html","b99d8860aa2e7c414c68c4fc5c008db6"],["/posts/d9a3/index.html","f3c8a9cd7906ed728bb847921d978258"],["/posts/db12e7f4/index.html","a863647a5b550ed39dee1996d82d3f1b"],["/posts/dbba/index.html","68f2743848d962aee96d2c549deb1b18"],["/posts/dcd4d5c3/index.html","0d550d97299a480df233a882c0e4bb07"],["/posts/dfe935b2/index.html","bfe78c3de18e5b3922e7a2606d354275"],["/posts/e46d226a/index.html","fc1c15c75c149fdedcdf849766e21a89"],["/posts/e98f2569/index.html","f9d0d29e9d58c1980208b1e93e774cc0"],["/posts/ecc2/index.html","61ea13b830562994eb3196ebe4763ef9"],["/posts/efaec666/index.html","9d616dbc4d9ac968653869139d7bd3d9"],["/posts/f20cb9c8/index.html","db580911648679a7f640775cef31329d"],["/posts/f663/index.html","ff18a3bade080545a0483d16fb61afe9"],["/posts/f7a/index.html","0c3d63ebb5a139374433ce7ac817250b"],["/posts/m762/index.html","17bb0be2eeb7df5bf8ff447a899fa6c1"],["/sw-register.js","a5e9c371fd6bd02cc984b9297bff0660"],["/tags/Adobe/index.html","894e3aa739c4acebdef2194cdf868fc9"],["/tags/Aplayer/index.html","b926a241fa2376627e89b5283dc51a3a"],["/tags/App-Inventor/index.html","06a15a87bbb81cb90b8f2481bd6f1cc7"],["/tags/Arduino/index.html","79a230cbbc3d4ac57ae1f4c608ed92dd"],["/tags/GitHub/index.html","911ca0d94b42ef28b6ff8640e5f002f4"],["/tags/Hexo/index.html","2b3d8be9b55109eeb23c1a4367cadf9f"],["/tags/Hexo/page/2/index.html","5c024921fdb1c4a632417ede1bb0c308"],["/tags/JsDeliver/index.html","c853c82e087784aa5a6a198af6649618"],["/tags/KMS/index.html","f18a1126ba941ec4307778652b33b42f"],["/tags/LoRa/index.html","568f8fca809e731b984453bffdf94a31"],["/tags/PC/index.html","1f1c527c2e32b91bd3ffb0db6a430852"],["/tags/Pycharm/index.html","8638a829c4dec691c93850dca542ca35"],["/tags/Python/index.html","5b07965e48468daf455ab63d393dc378"],["/tags/SIoT/index.html","d71bd4f1f2df5ad7a3d83b4e22992ae6"],["/tags/Windows/index.html","5809852195781ca6b6079f2db28dd761"],["/tags/html/index.html","ce38d7a2a122b00162478f65f8584877"],["/tags/index.html","69084d8d1b5b52f74cb5e0a4dcb38a86"],["/tags/turtle模块/index.html","91aa72258c1c67cf2ff69fd1fbe729f0"],["/tags/优化/index.html","039c97d6780d542fa90abbdd6333fdbe"],["/tags/元组/index.html","f50471ce8b1b45823ab3ae265b510f0c"],["/tags/函数/index.html","a910ee7be6b9f5c43411d98402a0ceb3"],["/tags/列表/index.html","873559200313aab281608b49c059af5b"],["/tags/博客/index.html","de9487599bd8f5d2afdf89e107793dea"],["/tags/博客/page/2/index.html","63492e0c22a9b762c68077b835045d24"],["/tags/右键菜单/index.html","c95b80d4543b7ca6c8343701ca5791c8"],["/tags/图标/index.html","184c95d5967febdb2547cad96fe579cb"],["/tags/字典/index.html","6391195903453416940b045bf81ef1b1"],["/tags/学习笔记/index.html","a9bfbb6bc7ca40033bab8b5210cfb44d"],["/tags/学习笔记/page/2/index.html","fd309f660f53b05ca6c8bbbbf0b285e5"],["/tags/安装驱动/index.html","fac8f40a6f87584537e21be53eb4b4b8"],["/tags/成品/index.html","2ec3f6d18d39215ad0f8e6248d6c71fa"],["/tags/技巧/index.html","835fe285273a5afd0b0c17a960551881"],["/tags/技巧/page/2/index.html","98c5d86ad662de970a9d061694153555"],["/tags/技术教程/index.html","54d2f8a1d79450a9dafcb8eaf96814fa"],["/tags/教程/index.html","7c27391b67e1072d77baae965c69e369"],["/tags/游戏/index.html","eac50189d7d0060480aeb4710d698308"],["/tags/物联网/index.html","833b103b40dff3c7b88b112f45f5f85d"],["/tags/百度网盘/index.html","9dbe36e7adc099be94b48f2ddb2f6018"],["/tags/算法/index.html","5a1a56d8545f5017e585f8137df2455d"],["/tags/系统增强/index.html","c1eb32606382c83b43beb6b1fc161433"],["/tags/蓝牙/index.html","e8ddbda36a909b82ae9a9bb2cf4a9dd9"],["/tags/说说/index.html","6252a09e6ac0cf37ae072f8e0b3981f6"],["/tags/软件激活/index.html","0b48fe88e5057ffac4b0afd227f83d19"],["/tags/链接/index.html","73f0644bee5affabf9ae5f511d8f7d99"],["/tags/阿里云/index.html","9736021a42125998d9d7235148c96234"],["/tags/音乐/index.html","717f0ba5fc6af157a8bc55b39aec921b"],["/tags/马赛克/index.html","82db20178efdb824b9c726e885bd26b9"],["/talking/index.html","e5c90ba15369446bf2fc0ea459f1d6ab"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });



// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache 配置转换后的 toolbox 代码.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"https://cdn.jsdelivr.net/gh/sviptzk/StaticFile_HEXO@latest/butterfly/css/pool.min.css"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"https://butterfly.lete114.top/css/Lete.css"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"https://cdn.jsdelivr.net/gh/sviptzk/StaticFile_HEXO@latest/butterfly/js/pool.min.js"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"https://butterfly.lete114.top/js/Lete.js"});





/* eslint-enable */
