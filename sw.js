/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","99275e30d9de43bbb9721548a1118c22"],["/Demo/index.html","6d7ac166bcc2d71276f44f48e0fdc697"],["/Gallery/index.html","1a369140422b60aceaeda35dcdf8f97f"],["/HTML/Demo/3D烟花.html","580176176bd6a899e1fb6330049e1144"],["/HTML/Demo/Early/Stats.js","a7d1796b044a042c21d7c07fc0dac3a7"],["/HTML/Demo/Early/TweenMax.min.js","ec8c7295d992b5209038d794a636a0ed"],["/HTML/Demo/Early/css_globe_PerspectiveTransform.js","c03bc1c6dc9254e934b9af6f07fb172c"],["/HTML/Demo/Early/dat.gui.min.js","e7d740aa4e056e7e7d012e54c5e66593"],["/HTML/Demo/Early/images/css_globe_bg.jpg","823d077e3b719afc159ea4602b0e40d0"],["/HTML/Demo/Early/images/css_globe_diffuse.jpg","0176e13d04ccae9a7dbd1adfefc82881"],["/HTML/Demo/Early/images/css_globe_halo.png","efd942e2b03a6e3f7b6d6cce6de40d9d"],["/HTML/Demo/Early/index.html","da028f2af1e5a84d21a5de4d33768258"],["/HTML/Demo/Early/script.js","b4a5025545d7f0d9c7a91649b21ad7f5"],["/HTML/Demo/Early/style.css","75972711583a72c622e59a6e7689bde7"],["/HTML/Demo/圈小猫.html","3a8bc1eba77af735afa1126b11b9112e"],["/HTML/Demo/坦克大战/css/default.css","63110ed0887e0c1ca62ca5cd84ec4353"],["/HTML/Demo/坦克大战/images/menu.gif","811c3bee393b6edc6bf0e7711de857c6"],["/HTML/Demo/坦克大战/images/tankAll.gif","5a3797cbba31f9d6058b3203b7370a19"],["/HTML/Demo/坦克大战/index.html","40d44876476fcd0c324f284fee36b361"],["/HTML/Demo/坦克大战/js/Collision.js","f1439696af96f90e0250176251d8f55a"],["/HTML/Demo/坦克大战/js/Helper.js","5c0796bb6f515845c7b85bc52aa9ae3b"],["/HTML/Demo/坦克大战/js/bullet.js","0ba64423cbd09227b7db48de15d24c77"],["/HTML/Demo/坦克大战/js/const.js","9b5dd926bfefdee739e321fa4c1d9176"],["/HTML/Demo/坦克大战/js/crackAnimation.js","7eb60292b013920f795553cca491c97c"],["/HTML/Demo/坦克大战/js/jquery.min.js","a1a8cb16a060f6280a767187fd22e037"],["/HTML/Demo/坦克大战/js/keyboard.js","f9eab8b0c5e9d111dfb944061f5d5a21"],["/HTML/Demo/坦克大战/js/level.js","0ba18382e2adc7c284dff659efc78437"],["/HTML/Demo/坦克大战/js/main.js","aeb0da663e5421f945be87d16c3d064c"],["/HTML/Demo/坦克大战/js/map.js","c1f1f9cba96a749d2bda07b753ed5b45"],["/HTML/Demo/坦克大战/js/menu.js","4726feb6c8b98553aa2cbaf66de975d7"],["/HTML/Demo/坦克大战/js/num.js","f400903361306736dd6455c9a8461ac3"],["/HTML/Demo/坦克大战/js/prop.js","56f9ded57f865cafd0e400b35c8d66d5"],["/HTML/Demo/坦克大战/js/stage.js","9b27a3de1f9a4d71c44b5c24b9058154"],["/HTML/Demo/坦克大战/js/tank.js","b4c26f2d81cf6e4a00ce42ecf6b4f5a5"],["/HTML/Demo/彩虹雨.html","d8e94a1bbf890a7c6bb6f4935d5b9ff6"],["/HTML/Demo/抽象线条.html","4f3a2352e43007844ed111a855bdd542"],["/HTML/Demo/撕渔网.html","dd904acaf3267918f14aca67140e25c7"],["/HTML/Demo/方块穿梭.html","d2a3bcdcfaee64265aa4859066a9cfac"],["/HTML/Demo/旋转粒子.html","b4820831e1ecc27700af4f8b50f9f0e2"],["/HTML/Demo/树镜.html","bfb5ecb57b5141d7d0ccbf8cd179f7ae"],["/HTML/Demo/游走鲨鱼.html","1be89ec01e0d508fd68012eec36af1c5"],["/HTML/Demo/烟花效果.html","9d442829bb8bff79c63b4b1ba133f87f"],["/HTML/Demo/碰撞小球.html","4b5fa05f0ab8bceec1edba934b0fb165"],["/HTML/Demo/纸飞机.html","7e15a0a568478e20538da0a9802baada"],["/HTML/Demo/走迷宫/css/bootstrap-select.min.css","68738245281e5fbee772982b59798279"],["/HTML/Demo/走迷宫/css/bootstrap.min.css","a0aedb0c89150dc3cdeb1ac46b1153dd"],["/HTML/Demo/走迷宫/css/navbar-fixed-top.css","60968bc4d8f4b675031b846b097b4d73"],["/HTML/Demo/走迷宫/css/style.css","8ebc738e9affdeb408baf92b0e8aba79"],["/HTML/Demo/走迷宫/css/style_1.css","ff37404c2052dfd08d0497db293438b8"],["/HTML/Demo/走迷宫/fonts/glyphicons-halflings-regular.eot","aa16cd35628e6dddf56e766c9aa4ae63"],["/HTML/Demo/走迷宫/fonts/glyphicons-halflings-regular.svg","0a5c48c69a25a93e37ed62db813387fa"],["/HTML/Demo/走迷宫/fonts/glyphicons-halflings-regular.ttf","47da44498fc073d9fff9ab0cdb0bef8e"],["/HTML/Demo/走迷宫/fonts/glyphicons-halflings-regular.woff","5eae1f7217b606d3580dd70ac840fea1"],["/HTML/Demo/走迷宫/images/flag_red.gif","71c4ce010d146694ed786aca003c7710"],["/HTML/Demo/走迷宫/images/sinform_arrow.gif","40c03c72175dfffd973dbf4cade4242d"],["/HTML/Demo/走迷宫/index.html","40a39a5ef543b0884784c5b5fd13e058"],["/HTML/Demo/走迷宫/js/bootstrap-select.js","45eddddd24f1ea4cf73b6db53889d115"],["/HTML/Demo/走迷宫/js/bootstrap-select.min.js","6ad7c68ee115b6441b92da6e2dd38d78"],["/HTML/Demo/走迷宫/js/bootstrap.min.js","447a910072bdf528317059c98a506cd5"],["/HTML/Demo/走迷宫/js/function.js","1225102ceecfb95f34f02ed51cbce7d9"],["/HTML/Demo/走迷宫/js/jquery.hotkey.js","d00385d073b9182a63f78b7eea21f3f4"],["/HTML/Demo/走迷宫/js/jquery.js","03af20945941842dff048a4570d7f175"],["/HTML/Demo/走迷宫/js/script.js","16f0210efecac15b35764f1fb524b07f"],["/HTML/Demo/飞机大战/css/main.css","5460c59795a80a56c39ecd0357bccc89"],["/HTML/Demo/飞机大战/image/background_1.png","c6f893c217716100c740ee1a54e8919c"],["/HTML/Demo/飞机大战/image/bullet1.png","a21bc3cd4a77f9943e0ed98f94e51ca4"],["/HTML/Demo/飞机大战/image/enemy1_fly_1.png","697f4cb8d5f04969c12e158692c3d052"],["/HTML/Demo/飞机大战/image/enemy2_fly_2.png","c730097b02594c4079f2388aa32074f4"],["/HTML/Demo/飞机大战/image/enemy3_fly_1.png","2b140e404b975333e86cc0427430aa1f"],["/HTML/Demo/飞机大战/image/中飞机爆炸.gif","d7b0d24b65b816f3b43e782da7ef5337"],["/HTML/Demo/飞机大战/image/大飞机爆炸.gif","d7b0d24b65b816f3b43e782da7ef5337"],["/HTML/Demo/飞机大战/image/小飞机爆炸.gif","d7b0d24b65b816f3b43e782da7ef5337"],["/HTML/Demo/飞机大战/image/开始背景.png","7cb8fd0abf5351cda5a7b2a2e98f1db0"],["/HTML/Demo/飞机大战/image/我的飞机.gif","1f40889bc3c01c574fea56e47e7196d5"],["/HTML/Demo/飞机大战/image/本方飞机爆炸.gif","341485ebb93628b03a7f910d511922bc"],["/HTML/Demo/飞机大战/image/飞机爆炸.gif","d8eb4d174d6f02652d00938380ed7f73"],["/HTML/Demo/飞机大战/index.html","271479839c6272199292e4a3e4174687"],["/HTML/Demo/飞机大战/js/main.js","7f3e4d3cc405be0db51ef960ce27e250"],["/HTML/Demo/骇客帝国.html","563d06be192bdde93bf640d806d53b56"],["/HTML/Music/css/app.30b45c25.css","1e95d5df8f174779e482bd5e51f632f7"],["/HTML/Music/css/chunk-vendors.094863c6.css","3a14f121bef7c31dbd4c944dfb953202"],["/HTML/Music/fonts/element-icons.535877f5.woff","535877f50039c0cb49a6196a5b7517cd"],["/HTML/Music/fonts/element-icons.732389de.ttf","732389ded34cb9c52dd88271f1345af9"],["/HTML/Music/img/icons/android-chrome-192x192.png","77129ee7ef4478f1a9c729a15a2179e3"],["/HTML/Music/img/icons/android-chrome-512x512.png","9e527be9a89e36f506622f769c1f7dc5"],["/HTML/Music/img/icons/apple-touch-icon-152x152.png","ce66f8626bac88be2d212ccab78a8eed"],["/HTML/Music/img/icons/favicon-16x16.png","0898a9a57a856ca3df406f29e5a8077c"],["/HTML/Music/img/icons/favicon-32x32.png","bd9f0f20f5533e3e16da30bc5180d4d7"],["/HTML/Music/img/icons/msapplication-icon-144x144.png","51b5233d43629c3ea8285812fbe08308"],["/HTML/Music/img/icons/safari-pinned-tab.svg","b9107e3f993da212c629880a221f3056"],["/HTML/Music/index.html","0950d6381f069cad9aaebb722d613a48"],["/HTML/Music/ixarea-stats.js","2d12777f2703612307ff4a12f1b21899"],["/HTML/Music/js/0-legacy.75478485.worker.js","648c12bb1251505519f5d09e2cdae861"],["/HTML/Music/js/0.c9123a50.worker.js","da19fcc36bad3622ecef4518cbc32f08"],["/HTML/Music/js/app-legacy.8b3b0c58.js","ca9a759009d421c0df5184204b78c749"],["/HTML/Music/js/app.ff02a91c.js","8ede1dd47c5863c614d6a44b2a0ee431"],["/HTML/Music/js/chunk-vendors-legacy.e75bd7b3.js","e376d17f479642aa417735d724edb612"],["/HTML/Music/js/chunk-vendors.a655fa4c.js","1bd6ae089029e319c1e656c62be0c884"],["/HTML/Music/loader.js","02995355b96ddf2519cd49f8aa73bb46"],["/HTML/Music/precache-manifest.9afa2167110700e32224e67f17027e58.js","9afa2167110700e32224e67f17027e58"],["/HTML/Music/precache-manifest.f05eec9f35f5865060af12e0fda58906.js","f05eec9f35f5865060af12e0fda58906"],["/HTML/Music/service-worker.js","34823ab0980eb2fa30d73261b992229e"],["/HTML/love.html","9789a42d65dc9fc0da194361a55dfb2e"],["/about/index.html","76bace2e1ee2af329febc6f03e9a859b"],["/archives/2021/01/index.html","531effff37ee96a68659ed7970d4d737"],["/archives/2021/01/page/2/index.html","d0aad049517350eaf71a48126712d030"],["/archives/2021/02/index.html","4281cd8ff5dd56b1686cb3683739b16a"],["/archives/2021/02/page/2/index.html","c068fd818c9c224b1812c0c04d4e3322"],["/archives/2021/03/index.html","58746427ec26bb2cba26d4c16cbb8b4b"],["/archives/2021/04/index.html","be48baefb59add1ae2aa3783b0eedecf"],["/archives/2021/05/index.html","12481a04287af0feee1204ffed8c88e4"],["/archives/2021/07/index.html","6104c330b87cdd4ffed227b1e431133f"],["/archives/2021/08/index.html","27a5ca0ad3811385c5df15d9bab9fff1"],["/archives/2021/index.html","fe6caa93e8e85d571177411a749ddb99"],["/archives/2021/page/2/index.html","1517b9e40df31a3c73b43ec8e5bf75b0"],["/archives/2021/page/3/index.html","0e0481a36d8b9778e5ba3a24762bea80"],["/archives/2021/page/4/index.html","9c043aae6dfdee281ed5752e6a633ba8"],["/archives/2021/page/5/index.html","7c88bc0da43efbd7ece49c9e62ce7f2e"],["/archives/2022/02/index.html","32c91a27619a346f140f46a5c27a9784"],["/archives/2022/index.html","c78f1656685c4c092f1bf6fa1103e581"],["/archives/index.html","8c3386cd377d7cc6003ca7305a234480"],["/archives/page/2/index.html","0d24723188ffafae4226563fed25eaa1"],["/archives/page/3/index.html","a83dd30e4536bfc85a74aa96324b5a94"],["/archives/page/4/index.html","1c14c9c6ea353f4564f356e4059b103b"],["/archives/page/5/index.html","ed2560dad4f3a759b49b9d199c43b1e9"],["/archives/page/6/index.html","5569ba7ece46fd9ec8bb0a98365e3b55"],["/categories/AppInventor/index.html","e84c84c23a947ba618eb7279188aa530"],["/categories/Arduino/index.html","df76432d4ae4916a0f925ade6ed6d51b"],["/categories/Hexo博客/index.html","cc85045c5074a64ea6888642c43697aa"],["/categories/Hexo博客/page/2/index.html","33e0d8900d7d98960fcbd42e773f3ed0"],["/categories/Hexo博客/技巧/index.html","5c033cae7322b7ca9b651cafdec38460"],["/categories/Hexo博客/技巧/page/2/index.html","7e6abb309f0f1d4f886d5cbbc1c0595c"],["/categories/Hexo博客/搭建/index.html","0c38aa714810c82a128afe6c1373ed17"],["/categories/IoT物联网/index.html","75b8b2af6990f06e921bf94e5dda4338"],["/categories/PC/index.html","760de6a66df6da260dab2827bf021687"],["/categories/PC/媒体处理/index.html","0922c368c1c8818721da70448fc60262"],["/categories/PC/系统增强/index.html","4678a268fdc7ff7bc16f9486e6b335e8"],["/categories/PC/系统镜像/index.html","74d264fe816bad02a296a284c3045a61"],["/categories/PC/软件激活/index.html","803632c3e4040e32114b03c9da926336"],["/categories/Python/index.html","ae47d24fb0d2818bf5ae5fa4bca14fa0"],["/categories/Python/学习笔记/index.html","bc68b1493bb431b2dd51b63f8019a6af"],["/categories/Python/成品/index.html","61cdfe36f04c3eaea90d7f0b72a670f6"],["/categories/index.html","d98602a9b2709758b57778ad403f63a0"],["/categories/其他汇总/index.html","55e5f0d3cdd693056b63a6c3da0ddb5e"],["/categories/学习笔记/index.html","f514f71f8d63d2d4c8e03be0e6425a35"],["/categories/技术教程/index.html","865c2d9c0040ad4a308daa277e9e962d"],["/categories/游戏资源/index.html","c29a2b44babed82702ae02bc77236fc7"],["/comments/index.html","eacc855e1c7d483d5cbd15a0e6188940"],["/css/custom/twikoo_beautify.css","b5c8a07528ef0a944b87a1a5701ce5c6"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","3bb94ed14efd3c1ea070a147a2d72831"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/history/index.html","41283a0a0fb586a79b7223a146127efa"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","1e01265902a80f20c6b8d342d2744d9b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","e50907aff00a13081bddadfca8e5720d"],["/js/main.js","67ef93b7026979d99da673cfd9fd85de"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","1685cd43da0de7abd4a649dd5b2d81db"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","9f465e7dd29ec62dbc6af321882c2b59"],["/js/wow_init.js","4244acb8641a2525f168b604f9ca4844"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","d9216923518b0756d67a837c757d1c53"],["/message/index.html","b4caab10b8a9686feeb36a6b41b55bfd"],["/music/index.html","3104537729c799468ff7f42d61e29fc8"],["/page/2/index.html","c84f27c5218affe9ce17a2aee9f14341"],["/page/3/index.html","c48d7e589b08136db7f8d3ea6b9e0e91"],["/page/4/index.html","78ff782549d044cf6a9aa732bddc9140"],["/page/5/index.html","7083e61c57f8b14f39d38d10d7df6d4e"],["/page/6/index.html","4bd286731772abc99fa15d286633d58b"],["/posts/11e4/index.html","f40a9f5b7cf1ac7d8dda9f671442a4a7"],["/posts/126239f4/index.html","3072e529c02484c351ea79305217eab7"],["/posts/20b3/index.html","a37d9a1414fe84b9824c6891006ae6a1"],["/posts/21396629/index.html","a87f04854316ef8db4f33c718394bbda"],["/posts/241519a2/index.html","e289f14899a69c3a0a572db5df88c3bf"],["/posts/40cad56a/index.html","28f1afccfea1d752260b126a422edd33"],["/posts/4161854e/index.html","90d9a133d40940099ab71700a2e4fa6e"],["/posts/4254dc4c/index.html","021dbb3a70d6cb3a31194cf6e6ba357b"],["/posts/461b0433/index.html","515803e9dc45cc5a62c08beeb0cfc5a6"],["/posts/4e5b/index.html","d2a9d15006ab770a491a1c3e86b611f3"],["/posts/56ce/index.html","a69507e9a6e00a3ca3778bfe1cc851de"],["/posts/60c319f6/index.html","d67b90d35cbc698882adaa10d75f29f1"],["/posts/6746a1c3/index.html","d5843001aba4aa3e09477d56caadecdd"],["/posts/6c20/index.html","9fa76ee264aaddeb2b3dd8ccb23c6ea5"],["/posts/6ec/index.html","c78b4ff774e43a80c16ea7ac4eb55b9b"],["/posts/73b37fcd/index.html","4c1a547d294c4396ae01c0729eb2ae83"],["/posts/749a3a09/index.html","5b7ad2a9af66f6f68c5f56c09a89aa46"],["/posts/7594/index.html","e8e23f60b016e0349c3e92aa23173d17"],["/posts/77049f2e/index.html","89a97229dd9eff78748661ee04c49c69"],["/posts/7c82/index.html","3de0dca4727535cd7924dc62f318a7bf"],["/posts/7j9m08/index.html","8f4937708782a0835da07c6ce1a06773"],["/posts/817b8e0e/index.html","622ef4402d29c8fc6900d06488ce2e98"],["/posts/844fc5df/index.html","12871692aa76034dd8d9f4541eb3ef3b"],["/posts/8acab12/index.html","b55afca2efc3f38ebd2b12b369ce54fd"],["/posts/8b3/index.html","fb57688f7f00ed330e2a5ac4704335d3"],["/posts/947ec48e/index.html","c41e933a62bc74f7785ba2150dd8ed2c"],["/posts/997c/index.html","f460900da9c0a1460d974422aed92cea"],["/posts/ab43a875/index.html","f2a618826c7545b3bf160e52c130f2f7"],["/posts/ac2c/index.html","0fa8f19b3cab775bcce96ecc5834d116"],["/posts/ad79/index.html","733fc7ff9a84c66c37199f952cdc43db"],["/posts/adf6e4b/index.html","4b98ca3e7a000aa694e15faa9d730aad"],["/posts/aea2/index.html","03f49e068808e3ec25f9d16b5e7896e3"],["/posts/b385/index.html","5168421e58d19557f9c37c16b9ec83fe"],["/posts/b7ed/index.html","bd67c09955c4bd841874d0c309a19988"],["/posts/bc3531cf/index.html","e46559019ffe5accf6c7646eeba7243c"],["/posts/bfed/index.html","75115355076fba8ea8ff7c2bd0a0387b"],["/posts/c232/index.html","b191aac67321167e9f4ada2cc99b453f"],["/posts/c291af82/index.html","8f2d5391f2337b511817abbcd625a334"],["/posts/c2c/index.html","360145f6251f338df9dd8911de555f4d"],["/posts/c336038a/index.html","df26f0c10f2dc55d3a60e0242ee2c1a3"],["/posts/caba8902/index.html","7da646cf14f77afca15f13801c552e8d"],["/posts/d6c8/index.html","e10ef9f9d65997b9d25f101b9ed386a3"],["/posts/d9a3/index.html","ffc415365d5915618197f0a10f2a932d"],["/posts/db12e7f4/index.html","a9dbd514c1653cc1d0bf038cf586525e"],["/posts/dbba/index.html","3ec26103ccdb63196a94cb52fd9a22ed"],["/posts/dcd4d5c3/index.html","6701c9401d29c7432542b2c1854a7829"],["/posts/dfe935b2/index.html","2bf75793a0d36bb5fef6d6f513559843"],["/posts/e46d226a/index.html","8dc1c90f9ca310250b861ff5f33dabc4"],["/posts/e98f2569/index.html","4f8c903cf8bb965cc92812f12521b794"],["/posts/ecc2/index.html","57eaa8dbd433d502599560b687174a1e"],["/posts/efaec666/index.html","21ab3e7bf12e48d073a330f8c8ee72f0"],["/posts/f20cb9c8/index.html","21f7e0c561f39d0b4a68034ab4f9b65b"],["/posts/f663/index.html","85ad906bc99f44074d02808df965402e"],["/posts/f7a/index.html","33ac9858aa4789c15787f8cb7cd2644a"],["/posts/m762/index.html","2f601f3e5f049845d479e53c486c983a"],["/sw-register.js","b9a85cf0d4647d9f6d24f7a5b84612ff"],["/tags/Adobe/index.html","a0b9a90d652cd37b403886bb75a65af4"],["/tags/Aplayer/index.html","54161c3b0f88b9cf66fa64e81d85651d"],["/tags/App-Inventor/index.html","f8276548f667d47dcb17872ef99f3651"],["/tags/Arduino/index.html","6ab215bc1d0b619d2b805cb78ea29fc3"],["/tags/GitHub/index.html","31e20988d01bee9f46b0208763348155"],["/tags/Hexo/index.html","fc1e01967191157e66dfbe7b8c6a144f"],["/tags/Hexo/page/2/index.html","24af20756044fd9ef19eaebbec0a69dc"],["/tags/JsDeliver/index.html","e9b2a55740a5986f2cfdcd7a7b5d950c"],["/tags/KMS/index.html","37d81ca24859b5e18dbda1e3a6eaaf9c"],["/tags/LoRa/index.html","05bc53a1b2baeb1ca1e106838cf22fad"],["/tags/PC/index.html","50f18c24b0810307533cd010308000bb"],["/tags/Pycharm/index.html","f66b10041df1ffd308523bd95f91304a"],["/tags/Python/index.html","690d0b7fe23a9ac763251995c382c36d"],["/tags/SIoT/index.html","a8cec9b1682e2a8eecaad2488045c5af"],["/tags/Windows/index.html","69bbe17e4180da64fbd2fffb15beac97"],["/tags/html/index.html","db2c04ababce099a33a8ad7f89dcdeaf"],["/tags/index.html","fd1a291cc9b286bd42392994f49037a4"],["/tags/turtle模块/index.html","bcb35b941a62eff6c4df31081454f709"],["/tags/优化/index.html","c3434018ead75192a5098c291a5a9e9d"],["/tags/元组/index.html","42e2ab00e73110cbb1136be6dc854a11"],["/tags/函数/index.html","5918398737858b261f3ae8ae79b57afc"],["/tags/列表/index.html","139e6c2da08e6ef6b173b2e4c97d3e3d"],["/tags/博客/index.html","9e0578da3bf29e76fb72bbd1609c0da7"],["/tags/博客/page/2/index.html","719e0f5a410caa5d8094a1c126081a98"],["/tags/右键菜单/index.html","99fc6ad193616be494c0691c1c2c633f"],["/tags/图标/index.html","ffa1c2f7310244a4ad62166e7b8febcf"],["/tags/字典/index.html","343f96f1689798917abfe461531594fe"],["/tags/学习笔记/index.html","5927c3b138813b2612312283cbfeaa6a"],["/tags/学习笔记/page/2/index.html","c0e8f5ce1692e9e65ac19188f49fe4da"],["/tags/安装驱动/index.html","c051562f13c085f65c74b12516e8b6f2"],["/tags/成品/index.html","698eb83d56ccf3ad2aec708983cd4e20"],["/tags/技巧/index.html","a3ad38454ea456c18650e10754e093fe"],["/tags/技巧/page/2/index.html","bcda4f6a858f08947b3763ac96f2b3d5"],["/tags/技术教程/index.html","7dd91c05095414de758d4f655cb1e725"],["/tags/教程/index.html","37931336377479a6bb70e56fb39d23bd"],["/tags/游戏/index.html","b4aa6c9b3c55948bbb0c03c44ab44217"],["/tags/物联网/index.html","542c8b48970907ab3ffc547aaca1a571"],["/tags/百度网盘/index.html","43a8ea4fd51d32f43bf38e4c4aa4f7a2"],["/tags/算法/index.html","e0e6ffc382c7597acb2fb3665427dd82"],["/tags/系统增强/index.html","8eefc36b485f07012091d5f3b028060a"],["/tags/蓝牙/index.html","bac0875f0755278c81095cb3c45a1373"],["/tags/说说/index.html","5cebc5e3cf5c81e06e7d1c7a098f9aa6"],["/tags/软件激活/index.html","91cd65c13e68c981c92d4f23e6bfdce7"],["/tags/链接/index.html","86d0991e2df10f8b745c478ed045a1f6"],["/tags/阿里云/index.html","57d495350f0fa1bb850e4c9f2d01fc70"],["/tags/音乐/index.html","8f82b049f7f73e1e3c47ccb138cb5471"],["/tags/马赛克/index.html","115e0a0b2f8c413c3d61f54108017965"],["/talking/index.html","92a687f8a68d4871c964f9bc5e088a9b"]];
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
