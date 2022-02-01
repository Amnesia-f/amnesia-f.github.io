/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","f424749cd9e80366ec3b10fb036fcc58"],["/Demo/index.html","01608c113283fd86ae59d0684471c0b1"],["/Gallery/index.html","ebbf5982d1c2740de659d51d006d3839"],["/HTML/love.html","f4dcdcb8f92985151d37107b8afd4bc7"],["/about/index.html","2a1691eddc7ba59dd5069fe40c5f78f7"],["/archives/2021/01/index.html","5b5a96b6437714be7c04021729a7930f"],["/archives/2021/01/page/2/index.html","0cfa5bcf08c4a56a50d46cd65e7d65f1"],["/archives/2021/02/index.html","e342ca22fa03e6e1001bcb57616cb35d"],["/archives/2021/02/page/2/index.html","3a3003abceb9e9952386ff273e34af83"],["/archives/2021/03/index.html","41dad8ec2ca6fe0ca4a694500735d476"],["/archives/2021/04/index.html","ca23debf14f1ef3f257cee1a0cae6d27"],["/archives/2021/05/index.html","723a4b24e07e3eceea0126a07490bb10"],["/archives/2021/07/index.html","bb659434195eefc3f393d18e5c416d21"],["/archives/2021/08/index.html","969a04763310df76961a34ea4452ba7f"],["/archives/2021/index.html","1f450932c98fec46cb4b3e23c85cae22"],["/archives/2021/page/2/index.html","fa3fb93e1b6ab47f7e955a3ffeeb5b5d"],["/archives/2021/page/3/index.html","bca9842842b0c86d308582beaca51c5a"],["/archives/2021/page/4/index.html","c6e6dbe841d5a93c9f38c46577cf2d26"],["/archives/2021/page/5/index.html","4f78ade5314502692a3f81228b344e92"],["/archives/2022/02/index.html","226e42f85db281db84c6ecfa354d9568"],["/archives/2022/index.html","61f198a9ec6ace3a230657a98bed1efa"],["/archives/index.html","4536563daaa68d5369044ad9434944f1"],["/archives/page/2/index.html","53f20b26f45ebe2f63fbb0a83c61c43a"],["/archives/page/3/index.html","ab4f96be1983563d8656ae7fc7dc3c77"],["/archives/page/4/index.html","056119b99e1961689394df84d41f2bd9"],["/archives/page/5/index.html","15bcc2de4d0f18719defc8f492b45871"],["/archives/page/6/index.html","f884ea81e31f77afdd3648966b045fa6"],["/categories/Arduino/index.html","6128d70c7068158db1d907e03e15a51a"],["/categories/Hexo博客/index.html","f40cccbd105db5d5c8fdcdca2c3fde70"],["/categories/Hexo博客/page/2/index.html","82c116215d8171b785bcd2500f7107b8"],["/categories/Hexo博客/技巧/index.html","71b6132679898dbcac9b7c37f030db05"],["/categories/Hexo博客/技巧/page/2/index.html","6f9667b2a32d788dad8f83fc7c1036e2"],["/categories/Hexo博客/搭建/index.html","50a11c6c282c86b068d1ca55949dcb5a"],["/categories/IoT物联网/index.html","bd3b03b8605fc411a6d9785f36fa6af4"],["/categories/PC/index.html","2909529e3d55ec79034979d91eb0a114"],["/categories/PC/媒体处理/index.html","df4e01a842ac45dfc625878d78a3696b"],["/categories/PC/系统增强/index.html","419945bb3a7aff1a798f299bddf48db4"],["/categories/PC/系统镜像/index.html","655ee8cae56cec98a77a59b22aae67a2"],["/categories/PC/软件激活/index.html","1d48e9a0378ca8725d8183f22a32fba2"],["/categories/Python/index.html","f44c9975297688df0e75c4b835852f35"],["/categories/Python/学习笔记/index.html","255b4931d3dcb27717601f48ba9d46d1"],["/categories/Python/成品/index.html","ea23e3bf0198c53e0134c54608391fc2"],["/categories/index.html","f7908af69d4f01f6056100fd7856c87c"],["/categories/其他汇总/index.html","8801df40b1e035fc03886e5c5c91f97a"],["/categories/学习笔记/index.html","dc69595aaaf0c4fd1f6ac5a2d04cc7b3"],["/categories/技术教程/index.html","9ba5b60dcc0f153151aa9baf71c154a6"],["/categories/游戏资源/index.html","c27528ba2bbddf24f1243b9346d36c8c"],["/comments/index.html","e2718e457a030b06d87e80f70fca9448"],["/css/custom/twikoo_beautify.css","b5c8a07528ef0a944b87a1a5701ce5c6"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","1be40ef63ffabb35de306f1dc2f5c5a3"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/history/index.html","af95a90c821965ab58b493de5aa615d1"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","6e6a3d477a736f8fbfac04578684c7fc"],["/js/main.js","67ef93b7026979d99da673cfd9fd85de"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","1685cd43da0de7abd4a649dd5b2d81db"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","9f465e7dd29ec62dbc6af321882c2b59"],["/js/wow_init.js","4244acb8641a2525f168b604f9ca4844"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","49f7d1e36d85cd093c5bcc426a2151f1"],["/message/index.html","35a1b01bc31fb6a6f6338574fcf4f2c8"],["/music/index.html","9f9ec2c06cca78801023ae3203bf1e7f"],["/page/2/index.html","357256acd2d81267bd324811f743ef4b"],["/page/3/index.html","7649e9c706cacfddf2e8afad486a9f1a"],["/page/4/index.html","10c38d4cae98300854800e4f29b1ee2a"],["/page/5/index.html","214f02187e6c5351be51af61aeb0a7ac"],["/page/6/index.html","697a44ad8ec7e127a00c8a9e83ba0f3e"],["/posts/11e4/index.html","21cb5129b075a88e3664a0eda1d0119b"],["/posts/126239f4/index.html","c41d212f0c6465745b1cbbc494a8f1b6"],["/posts/20b3/index.html","c7a3c741f39b182f54874a1ad7c238b3"],["/posts/21396629/index.html","6e31e16068188a82c47c45f31f6a4644"],["/posts/241519a2/index.html","d8b174e3670bc1ddf213d64a4f1ad039"],["/posts/40cad56a/index.html","eee9299c685cfee70307137470ece022"],["/posts/4161854e/index.html","31119db95ff4bb81063a8c0552d2f59c"],["/posts/4254dc4c/index.html","c34d841d0cd148ef9b5b1d0da6888fb7"],["/posts/461b0433/index.html","c038986f3f9cc62ab80f58619e6788d3"],["/posts/56ce/index.html","2976e7f341dceec36f7684985bfb6d6d"],["/posts/60c319f6/index.html","833dc0878414d787e686f813e153fd4c"],["/posts/6746a1c3/index.html","a1b5138b99fd54195c25caf5d598367f"],["/posts/6c20/index.html","c9d7786d934744c1276cd3f5afdf5e94"],["/posts/73b37fcd/index.html","0461211e90c4f70f416c4a4c0d541591"],["/posts/749a3a09/index.html","544cb91967a42ee80d5d306a0829a221"],["/posts/7594/index.html","edce30b0c45e97d3685e113ea4e10205"],["/posts/77049f2e/index.html","68508719af142a59a629e598416c8578"],["/posts/7c82/index.html","420b4a1ed6ae9e090f86e760a88eaaa4"],["/posts/817b8e0e/index.html","51f5294ce2bd53000b5d440c3ea16c57"],["/posts/844fc5df/index.html","17e64ba48bb81fb97432d20fbb9d3c56"],["/posts/8acab12/index.html","af0d92c22c4baab7dcfd67fef6fed01c"],["/posts/8b3/index.html","a08ece282ee7658d8eae812ead8c3a0f"],["/posts/947ec48e/index.html","0c0ac819bd075f996e683b0e0a506573"],["/posts/997c/index.html","48139352ec24c29f8f9b1409d877087c"],["/posts/ab43a875/index.html","a1a5876c7edee10d36000c5c27edd1a7"],["/posts/ac2c/index.html","bd00db7be2d9f261a07ce3d8f2662019"],["/posts/ad79/index.html","a319986fff4427b25d2d9b7fbb01fa24"],["/posts/adf6e4b/index.html","a97aed6df826d0f2d5f66123473109e4"],["/posts/aea2/index.html","ef4e6bb3addcc8e39bac20bfd5bd4420"],["/posts/b385/index.html","f76c6bcb70561ec3d6a5feaa6005d0e2"],["/posts/b7ed/index.html","6db95a9f615cca53ddb51fec562bf948"],["/posts/bc3531cf/index.html","cca0469ab28dc970a7c4489b5bed469c"],["/posts/bfed/index.html","9493ac5435d6265b484a2d0a0e2e6907"],["/posts/c232/index.html","ea8dc7455991eae7dc250735ab7888af"],["/posts/c291af82/index.html","ed1ee4833d3e98753bf3f59114593991"],["/posts/c2c/index.html","e79c6ebb18cd1a3c77c587c1ed23b571"],["/posts/c336038a/index.html","0167679386e9fc0093c46dddc54fa5ca"],["/posts/caba8902/index.html","5bde52647d70e0b8ce65d3313bdf51b0"],["/posts/d6c8/index.html","ef488c652e305b743db64763132add30"],["/posts/d9a3/index.html","cc5c58758f811ce6eb976e31e38a0f07"],["/posts/db12e7f4/index.html","2480fe9d906b68672b66313db5095562"],["/posts/dbba/index.html","46de2201aaff7408d1989726ca3fbee2"],["/posts/dcd4d5c3/index.html","4df2fb9d88c873473b93c477679fdc47"],["/posts/dfe935b2/index.html","893f48a7cf3061f30db98f10b76906bc"],["/posts/e46d226a/index.html","bdda8974d75973e7e949d136d43d2632"],["/posts/e98f2569/index.html","41bd347b4bc73bc42957b1090b0b04bb"],["/posts/ecc2/index.html","f01735f75f28ef8e1540798cb94d3518"],["/posts/efaec666/index.html","a703c77383e92db7ce6f961c9dfb73fa"],["/posts/f20cb9c8/index.html","043f1733a001a1b723c16a8f0f7e89b4"],["/posts/f663/index.html","85441a9d2ff8acfc87f1a8bd3a90d948"],["/posts/f7a/index.html","c6d96cfb500296b8275665475091817f"],["/sw-register.js","5542b55f89a619e14fb6238e159ba5bc"],["/tags/Adobe/index.html","83335df7033890a31b324c5041e80d60"],["/tags/Aplayer/index.html","b69f520b27c872ff893c30c9e51e6e6c"],["/tags/Arduino/index.html","dc420d6749625cc19cb0c8330eeea877"],["/tags/GitHub/index.html","0805e4f6ddd09bf9cbe2a60c922d3108"],["/tags/Hexo/index.html","d407efc921ab25fb90a0712489949d6b"],["/tags/Hexo/page/2/index.html","14cc499f4833562c0f2e7c3d566d4e8c"],["/tags/JsDeliver/index.html","dc8db7d24e34b89ab9ec98cfacb77bed"],["/tags/KMS/index.html","e7c5e254214c41320220fc4b0cb79ea9"],["/tags/LoRa/index.html","c51e7c39d97782d611702c5e0c62e033"],["/tags/PC/index.html","6f6ff5403381f83951bcc5e585af79bc"],["/tags/Pycharm/index.html","195b4427c01a1891c541b20fd48f38aa"],["/tags/Python/index.html","f5960774ff7240321516f80254524c9b"],["/tags/SIoT/index.html","86547d45ad96d41367b90fe23ee1bc95"],["/tags/Windows/index.html","58b992ebfb24a94096f5da17c7e58e4e"],["/tags/html/index.html","84d9194ccb2ffdda935319415ce4ef31"],["/tags/index.html","cfff65f2fe32b9a34ab04c779a626b50"],["/tags/turtle模块/index.html","b4bbaf6898f0715d8315f242dae74dbd"],["/tags/优化/index.html","f9ce46e66c3ca83e5df20ac5eaf8e0a5"],["/tags/元组/index.html","779271d1e65ee27b9fcf3489880928ce"],["/tags/函数/index.html","c685933d1bebc9998dcacafb6f7c7ae0"],["/tags/列表/index.html","29daacc4a7b2af9ed3ea32f5a43c04ce"],["/tags/博客/index.html","5276ee34ef4689a4ad4929cc1b3f4f49"],["/tags/博客/page/2/index.html","2898f4566b24cf8c9320ce6dd8d8990c"],["/tags/右键菜单/index.html","4e380f0aee26364fcf8180ee34c513f3"],["/tags/图标/index.html","038c0ad2ac90c0c5c592afe68dd557b5"],["/tags/字典/index.html","5fdfb81e95322e5e0d55be39079abf3b"],["/tags/学习笔记/index.html","cc637267b6b641364b5c7151c613e1dd"],["/tags/学习笔记/page/2/index.html","72bd755cb09f6823f199fed46792ef14"],["/tags/安装驱动/index.html","0edc6893802c36df57b7d98ecc519735"],["/tags/成品/index.html","46e5438bf6d499770c5dae92d44b9750"],["/tags/技巧/index.html","23bc619824adf8e5d5b20059bb769149"],["/tags/技巧/page/2/index.html","c1d8b727a0734f80a2602b1415dbab0e"],["/tags/技术教程/index.html","726f92923a4947b2fb45f6ad993ecde5"],["/tags/教程/index.html","db580836aef61f364c603682f3363713"],["/tags/游戏/index.html","9cca3260a6ac3570fa523bc3d39f782a"],["/tags/物联网/index.html","a588d2926448fa0c843bac54146dcee4"],["/tags/百度网盘/index.html","18888ccde22391425a8dd373193a1f1a"],["/tags/算法/index.html","a9b945cb949a7b0c847191c49137951d"],["/tags/系统增强/index.html","fbcd73542149c6cb6182469a28ba4573"],["/tags/蓝牙/index.html","0a8965a94fd43d5ade15f507f21cc406"],["/tags/说说/index.html","5ff076d4176fc21c5a11b01dd01dcf7b"],["/tags/软件激活/index.html","a26f86a7bac225ec1732cf5bc6dde63d"],["/tags/链接/index.html","9d905f776f29c37b1d3ea8c1d503f26a"],["/tags/阿里云/index.html","1edee27f8432716ab7ba059d28a6171e"],["/tags/音乐/index.html","c4816c0b3b2f237f30512997667eb970"],["/tags/马赛克/index.html","71ac504c70745058e7c981969e0b61d9"],["/talking/index.html","c285a95aba3c22feccba92bafee197e6"]];
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
