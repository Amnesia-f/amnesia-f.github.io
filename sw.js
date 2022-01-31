/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","ae3a9809125d3ff3bee314061f92cce2"],["/Demo/index.html","556e2bca046fa1261bc763db3ff59ce3"],["/Gallery/index.html","a7ea0fc222f89431a90095fffec06073"],["/HTML/love.html","9789a42d65dc9fc0da194361a55dfb2e"],["/about/index.html","ed20a3f1fced468fa9032e47ad9bb6f4"],["/archives/2021/01/index.html","c2ba1d79382df0a78c857b9e5bf7d5d0"],["/archives/2021/01/page/2/index.html","0ce1464a784b4c379c9e0cc2d07e8031"],["/archives/2021/02/index.html","0982d1ac70dab1d829ccc197f906efc4"],["/archives/2021/02/page/2/index.html","136258c263af034bda719064204c3200"],["/archives/2021/03/index.html","0dfddb19e823fdbc8c8eb004e497f321"],["/archives/2021/04/index.html","32ffc11a9c9f57b7ba1c863e4b348c03"],["/archives/2021/05/index.html","aa0a84621c90e7719a494591f536e945"],["/archives/2021/07/index.html","2162a78f4eb7bc63695d562dc25d5e38"],["/archives/2021/08/index.html","5a1ad3cc3295a76ed64cd995379b23c5"],["/archives/2021/index.html","1b4f05eb19074d3ec64bbd2b052b6446"],["/archives/2021/page/2/index.html","e2c38e90d70cfd60eeecc8b0df79cb61"],["/archives/2021/page/3/index.html","fe314c617cb372f49418193ac8be46a6"],["/archives/2021/page/4/index.html","405bad8bde3ee2731e85ea26836edb49"],["/archives/2021/page/5/index.html","e67a89fca8cc2d410b89f55f28e8a7fd"],["/archives/index.html","c301e95cb6263deb506dce8eaf9561ed"],["/archives/page/2/index.html","a858a2349b13766a4c03f43c7e2987bf"],["/archives/page/3/index.html","b1fc39553c6b8bea93427eec899d3f79"],["/archives/page/4/index.html","cc2560b8a2d8ae272b745913381a76fd"],["/archives/page/5/index.html","edf98494826402fb2711e84c392ea0d1"],["/categories/Arduino/index.html","86080aab6cd27a3a09026ce008414bd0"],["/categories/Hexo博客/index.html","55e88cd01c9aa102eaa7756ac7042068"],["/categories/Hexo博客/page/2/index.html","d03f3d81fb9ed6fd2d47d2d4e94151c2"],["/categories/Hexo博客/技巧/index.html","2c918c618be62b7a857cbd3b4698f6a8"],["/categories/Hexo博客/技巧/page/2/index.html","2749573dc944b37621704cbd3be121c1"],["/categories/Hexo博客/搭建/index.html","99b183e428828fd4cef49daeee2a3066"],["/categories/IoT物联网/index.html","dd4a91c0329bf527aae89b781119d33b"],["/categories/PC/index.html","bc7f2ccd51a434b92613acce9d21e0a4"],["/categories/PC/媒体处理/index.html","0c3ec6c10fddcca88bc55db7fa784ce6"],["/categories/PC/系统增强/index.html","2ca3f36affcf15503e6b32eccbd9f544"],["/categories/PC/系统镜像/index.html","497fae47726c6ab44e224ff429c55e64"],["/categories/PC/软件激活/index.html","d47e48705ba61f0861c6b466ee7c5e88"],["/categories/Python/index.html","0315d2bf1dff1c813e3b27c15977e445"],["/categories/Python/学习笔记/index.html","a7a14fefa2a50a2e91ebd41efe7a61dc"],["/categories/Python/成品/index.html","5163cf36ba2c1c53aa8adbbeb4d0a06e"],["/categories/index.html","72769e4d32a787c94de87dc07ead4786"],["/categories/其他汇总/index.html","48ad6a1a19878c95d90308354c51bf6a"],["/categories/学习笔记/index.html","aacf9e2852754c6adb4d03932aee43f1"],["/categories/技术教程/index.html","4751775e7b1df3e84e7f4ab8401d3430"],["/categories/游戏资源/index.html","7ca1ce0a2bf89a4f31c3f9d055a40be0"],["/comments/index.html","dae9efe41e055216eb628155c97694b1"],["/css/custom/twikoo_beautify.css","b5c8a07528ef0a944b87a1a5701ce5c6"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","1be40ef63ffabb35de306f1dc2f5c5a3"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/history/index.html","505f4dece6c61864354082b0d89970f3"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","b64cd76eaba4a107efa40c8da28da6d9"],["/js/main.js","67ef93b7026979d99da673cfd9fd85de"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","1685cd43da0de7abd4a649dd5b2d81db"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","9f465e7dd29ec62dbc6af321882c2b59"],["/js/wow_init.js","4244acb8641a2525f168b604f9ca4844"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","15f9a220392af0b73a0a09a38ab78369"],["/message/index.html","5198fe6e75cf85622fc66fba34058eec"],["/music/index.html","458c08bb4d2ed752ad0063f1d9cd7265"],["/page/2/index.html","975a030e77c903092496ee5872822572"],["/page/3/index.html","75433623ccea0d595205b32f660b589c"],["/page/4/index.html","19e5d2d9a014bd1341960cc9e030ddc6"],["/page/5/index.html","a9d469724e83cde91a76bfba2582b7f6"],["/posts/11e4/index.html","9ac0995706d51270fe6afdd0c73f2baa"],["/posts/126239f4/index.html","f823d20aac13a0b0c23486f756f445e2"],["/posts/20b3/index.html","a26e62ba37a1e4124a13c3e14df703e4"],["/posts/21396629/index.html","1231e0372b63dc577d5850e8a4b47fde"],["/posts/241519a2/index.html","afd55d1273b910c24806d4845d7c426e"],["/posts/40cad56a/index.html","cdd75430c84a9ce73e1b79c97560b280"],["/posts/4161854e/index.html","1cb78ff3a2878bd35e1fa3d665a5ac2c"],["/posts/4254dc4c/index.html","341bd12e9b12a8d40f92dff148d0462f"],["/posts/461b0433/index.html","016c33e4dd1ec3cecb31687cda0294a3"],["/posts/56ce/index.html","d1a5da46f419ed9cb4dfe759d708016a"],["/posts/60c319f6/index.html","03acbf590f41fc77a72612df1d9fa3de"],["/posts/6746a1c3/index.html","6f37f0e72efbed42b618ae5cc084ab95"],["/posts/6c20/index.html","c36341b1f4820dba272c99a2a6cf0205"],["/posts/73b37fcd/index.html","df5d5bc8695decc27bce082ac8b09b2c"],["/posts/749a3a09/index.html","b66103ea3c723f9e1de1ba7578ed61b1"],["/posts/7594/index.html","1ddc4e5925d76bc9c9c121282d4a840a"],["/posts/77049f2e/index.html","c19f53aa9a84ad71603af1b181be2b81"],["/posts/7c82/index.html","68bf6b786819ce5b33e7a23a7dc16ae3"],["/posts/817b8e0e/index.html","3365b18c80e53ce78cb40952f0ec7098"],["/posts/844fc5df/index.html","4314236fc73238978ae248291406fe5a"],["/posts/8acab12/index.html","a0bd8fd83bc1c091e4640de9b79c7d8b"],["/posts/947ec48e/index.html","aa25291ee50f843520aaa251f0d31b32"],["/posts/997c/index.html","81ffad8542bdc8478ff07e28b5885f1c"],["/posts/ab43a875/index.html","b1a0b787c48291006d49c0b04d038969"],["/posts/ac2c/index.html","12ff848ec2e91179fda9f18b5e1b48c8"],["/posts/ad79/index.html","7017a6100cd4b905621b2c4864c2997c"],["/posts/adf6e4b/index.html","f285a2e28534cddf36b604b91f236456"],["/posts/aea2/index.html","09840ca30bc327e443e7e2baea34fd8d"],["/posts/b385/index.html","8b428dd5cff2516888881c3d6173e65c"],["/posts/b7ed/index.html","a5df3bec4a9bdf1680b8b149fce14c87"],["/posts/bc3531cf/index.html","9ecbaaa2d9a04b8e1ea6fcf2f540de54"],["/posts/bfed/index.html","6406efe02b8a99a1ba0a7718be77abcf"],["/posts/c232/index.html","1a6ed50967aa9dc7621688945b9a7693"],["/posts/c291af82/index.html","98ceecd5080881bfb1e0dc60165141db"],["/posts/c2c/index.html","1e5e18e1dd381c804060ec5fe6e14a2c"],["/posts/c336038a/index.html","27249081aed025b1cda7e74a8740eaad"],["/posts/caba8902/index.html","309b5c6ddd8fc3da895d3e1ea72107b0"],["/posts/d6c8/index.html","b1efe63041c09bd72a678a9b414f7ca8"],["/posts/d9a3/index.html","c5ab5e41205bd3003be2654d1509f50a"],["/posts/db12e7f4/index.html","f223ba9c170817d21563d2e95b7b8fd1"],["/posts/dbba/index.html","b451c390c0f16335b7288d283e86f395"],["/posts/dcd4d5c3/index.html","bfd9476db6ff5044cd7dec65058a67f3"],["/posts/dfe935b2/index.html","b38d2c8a5d5a56049bdaf145b3fc7f92"],["/posts/e46d226a/index.html","527a4b912330b59bec7038ec07648503"],["/posts/e98f2569/index.html","c9817e93f9693c5ac43eac0311dd64bf"],["/posts/ecc2/index.html","624a12e848ec2d063ddf8a7efaac8c88"],["/posts/efaec666/index.html","b24555bec0d998b5f3c6b2f1b6f6a0ab"],["/posts/f20cb9c8/index.html","48e63172f8517dd53e70aedeb3f6343e"],["/posts/f663/index.html","6d24686f89c6321595cd2fc3c693d68b"],["/posts/f7a/index.html","4ffabd8e32032d13f42f2b3b439d3c59"],["/sw-register.js","c767ace6fb5215298c8edc83a895d7a2"],["/tags/Adobe/index.html","aeaf0f3b5b209c298a5506a2f18da631"],["/tags/Aplayer/index.html","301a892bd3cf6b2e0b0ec80f391fe7d0"],["/tags/Arduino/index.html","2d37cb1753601b8e2d9440a816be81d9"],["/tags/GitHub/index.html","52c14bcfec97267f1e1cf76435d4ddf0"],["/tags/Hexo/index.html","97d56349aa80a9859fd0203bc674ad58"],["/tags/Hexo/page/2/index.html","1e583892a5cb41417ff697554c2f424e"],["/tags/JsDeliver/index.html","9c8133071696fcbb988d0526fda893ab"],["/tags/KMS/index.html","b626c3a589d362019285afa6a3d75039"],["/tags/LoRa/index.html","fab7a0b679a816962119fce3411eac23"],["/tags/PC/index.html","c145fae32ba850e21fb86d28e14f59b7"],["/tags/Pycharm/index.html","55e611b7f56bf7053ec933e5b52149e8"],["/tags/Python/index.html","4e2dedff28b244098b37e36881127501"],["/tags/SIoT/index.html","7d8bc5822a7705998179f72961356a6b"],["/tags/Windows/index.html","207067cbe9e4a030c963398e98b2cfb1"],["/tags/html/index.html","d60fb9195d920c3efe821f0dc3e89425"],["/tags/index.html","b67db872c01174ab99931ddc39ce7d39"],["/tags/turtle模块/index.html","b6176c0b903dfbdaf20d3eaf3d126076"],["/tags/优化/index.html","76d4e03dbc0deb9ed8b176ab4ec9d358"],["/tags/元组/index.html","1f4103f07a18c451e6737d36cb9de198"],["/tags/函数/index.html","eedbd9746f1a4e4017c9d312c51306b7"],["/tags/列表/index.html","b56144955ac323acc1825b43fe698d94"],["/tags/博客/index.html","8da178ac7ee889d023b6d37844479313"],["/tags/博客/page/2/index.html","3a1667e12450b473d435127f85703416"],["/tags/右键菜单/index.html","f3a27f77a5c8c9f2bcc4788b3b63566a"],["/tags/图标/index.html","22bd324b0b1486b8d53d8957509f1a61"],["/tags/字典/index.html","83a18b9e7a00e7dbe7747bc298a5b181"],["/tags/学习笔记/index.html","a8e9c0cc1e337e577655d6ce9733873d"],["/tags/学习笔记/page/2/index.html","4406e89372dd8952c1185092a73f7589"],["/tags/安装驱动/index.html","75568ab6eb973de7928958c980900739"],["/tags/成品/index.html","106b6c625b1bd4c20ae0031c5ffce068"],["/tags/技巧/index.html","6e79209f04135565a93bfda2902dcbe8"],["/tags/技巧/page/2/index.html","967d2e2f45adc4df13cd097fa0096792"],["/tags/技术教程/index.html","cdec76d9f5c39df4d07c5785fdf474b4"],["/tags/教程/index.html","69e2ffaf8909e60bdcef58d8c8f93074"],["/tags/游戏/index.html","9649fed3165125f20fc745d2ac8a4208"],["/tags/物联网/index.html","f44e9aa3e186e9831e813946b7a60e00"],["/tags/百度网盘/index.html","bb9756f05f26c688813651fccaaa4bd8"],["/tags/算法/index.html","b117a09477a041189b1ef87c5771ace5"],["/tags/系统增强/index.html","8c3c76718fd823889342490fafe153fd"],["/tags/蓝牙/index.html","82dc5d42b7d93c29beeb437354334d90"],["/tags/说说/index.html","09d19adef86ae5f9aa453db2fc158e2a"],["/tags/软件激活/index.html","85ff9aa71354b4280f48e1a642e242e9"],["/tags/链接/index.html","fe37c172f815a4e6a1e9160fd3dbdb68"],["/tags/阿里云/index.html","a5913b3b7221a4900d4cb8921b384a2f"],["/tags/音乐/index.html","877d1d9eb7d26104e09f75478285d36b"],["/tags/马赛克/index.html","c619503b52b960f0ed161ce1923938d2"],["/talking/index.html","3ed8b2943d1ed1951188e1881b8e7ff9"]];
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
