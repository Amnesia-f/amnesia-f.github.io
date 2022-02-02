/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","f5402b2c11fcd7ce1e3ef99ca9ad0689"],["/Demo/index.html","78819ee1e6a59a9ffabf31a71498d697"],["/Gallery/index.html","5f17612c210e6ac14e16a5311080f3bc"],["/HTML/love.html","f4dcdcb8f92985151d37107b8afd4bc7"],["/about/index.html","4dde8f8646d0e3a368a97a41e07cbc71"],["/archives/2021/01/index.html","597306962c143b1fd40bac81b21598b1"],["/archives/2021/01/page/2/index.html","48b83e66ee1380e19e8969d43d335dbc"],["/archives/2021/02/index.html","abb90e2fb704c76a25eed95c62aee018"],["/archives/2021/02/page/2/index.html","4e912db562ec2e3fb2fd9ef3b7223563"],["/archives/2021/03/index.html","8647cd9ac5728827966f73ffb3859c79"],["/archives/2021/04/index.html","aa492c24dcc0c964b2bf804251afdd2f"],["/archives/2021/05/index.html","bacf9ef774188ddbf537c536628b8751"],["/archives/2021/07/index.html","45e6574102dc37825876ca87cb2ce774"],["/archives/2021/08/index.html","4c3901e1749a9fb5b18b4f095cfee99c"],["/archives/2021/index.html","90a142b0a1bd4e9b99c9a0123941658d"],["/archives/2021/page/2/index.html","c5534e90a16a04b826e6f6de32009f9d"],["/archives/2021/page/3/index.html","d5c540e5346f645d812836a81dee86a2"],["/archives/2021/page/4/index.html","cb960430f421c8a9d5a665e6a6255716"],["/archives/2021/page/5/index.html","0d481f6ac0c59861aa5a75b49cd92243"],["/archives/2022/02/index.html","d1df4ee496c7f563ebf9898f61fa366c"],["/archives/2022/index.html","fa021e4ec80e75b7feb0cd769c937804"],["/archives/index.html","01761411c6d20aa373e7d1a6932c396d"],["/archives/page/2/index.html","f34d3ea83ccb7d66165a24e59a64f88f"],["/archives/page/3/index.html","d3e64e98779aa20d120e7b3289c6cfc8"],["/archives/page/4/index.html","f80a82015b6b8328c8d348aa3cc863e8"],["/archives/page/5/index.html","be5870e3946277746c1779ccd80b4442"],["/archives/page/6/index.html","3bee844f3f342ed7a8c7dd9575d98aae"],["/categories/Arduino/index.html","2ba8116c15642038c439c434dbb2e6bd"],["/categories/Hexo博客/index.html","cd90160780fdff1d80be9a53ba88eb08"],["/categories/Hexo博客/page/2/index.html","5290f93f00b045431e44aefb5b3f327f"],["/categories/Hexo博客/技巧/index.html","6647bff00c26f6d60c4952825093ec98"],["/categories/Hexo博客/技巧/page/2/index.html","f365c7b05d0455c59d3de297e3932923"],["/categories/Hexo博客/搭建/index.html","a930603c96b5c514e04be057b40df6cb"],["/categories/IoT物联网/index.html","e7fccf904bd44d746e18804241d20a8c"],["/categories/PC/index.html","de2be5745d7b425c60fa8df5f4f08650"],["/categories/PC/媒体处理/index.html","1541ead5e1ff7991bae1e23c250c9bb0"],["/categories/PC/系统增强/index.html","429e9d98d28b52d20bedb82a39e70b09"],["/categories/PC/系统镜像/index.html","b4849f6c39a8b75722d8b37d17a207a7"],["/categories/PC/软件激活/index.html","4f3d4b82ae1ca736a164f21891c3c984"],["/categories/Python/index.html","65555f166c7fbff7b1ea31963af74e7f"],["/categories/Python/学习笔记/index.html","90279dcbf926d5d871d054c1a2452aae"],["/categories/Python/成品/index.html","43a74f4c8e78109f00850a41a6e38562"],["/categories/index.html","7af2d55d4a55b839f26d11f366829ead"],["/categories/其他汇总/index.html","d075372e47b345f0ad078609adf033d9"],["/categories/学习笔记/index.html","c3d685ec0cba1fbca531c7ec7af8d919"],["/categories/技术教程/index.html","a89644f2e332255e98264e0c6d7c68fe"],["/categories/游戏资源/index.html","db9d1e8b958873a89e538c50775d62cd"],["/comments/index.html","2abf7fe4e5c418315a8086b05bfbc81a"],["/css/custom/twikoo_beautify.css","b5c8a07528ef0a944b87a1a5701ce5c6"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7134e739049e191ecaabecc52bf3756d"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/history/index.html","cd46382e8d75ff41ce4a3f982a121a94"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","b3c9ebf2196251baaf58776a3c42ae04"],["/js/main.js","67ef93b7026979d99da673cfd9fd85de"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","1685cd43da0de7abd4a649dd5b2d81db"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","9f465e7dd29ec62dbc6af321882c2b59"],["/js/wow_init.js","4244acb8641a2525f168b604f9ca4844"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","dcc68f8fecf4b750420b212cb1b1a434"],["/message/index.html","4bcad0ef40376b59edd6802845e9e499"],["/music/index.html","a97db4403f55776a775f9c5876e66215"],["/page/2/index.html","213ed6bbc658f3439b7fc9f65af8b1f5"],["/page/3/index.html","27e07171c1e464dcbbba5d9cf0987fd0"],["/page/4/index.html","3bdfd7ad12b28281cd275b77c0787e0c"],["/page/5/index.html","e9b603758c4e991c9dc06ab2627d8154"],["/page/6/index.html","2c8e7cb8b20ce15b6486ffda33473b1e"],["/posts/11e4/index.html","42765b4785f046f054d88fc965386d07"],["/posts/126239f4/index.html","69c57bf0865c8f4eb1947c46b00c921b"],["/posts/20b3/index.html","b5236a5233eb53e491effcc2872ab298"],["/posts/21396629/index.html","8bf8bc10a539432595c67f9865f81d3f"],["/posts/241519a2/index.html","5c193b0a05c5387a530eb9fe97812d80"],["/posts/40cad56a/index.html","181e0514eb99ee652595af45948ba7b7"],["/posts/4161854e/index.html","a4618d6df29bb9ee09c99e8f8c6f6ed7"],["/posts/4254dc4c/index.html","3060f677abe56432c59701faec43a649"],["/posts/461b0433/index.html","367172796c9c577c76fca0f115bcf4f3"],["/posts/56ce/index.html","aee0a762482ac31c304ae45b4cada88c"],["/posts/60c319f6/index.html","b069c3c1081340e2c9e4961ceb5cfef4"],["/posts/6746a1c3/index.html","86dee639dea881f953bb741d7533c89d"],["/posts/6c20/index.html","3ae56ef705da4fcdb67647740744bab4"],["/posts/73b37fcd/index.html","0d87f31c9aa228e325caec881fef9534"],["/posts/749a3a09/index.html","790bdde772bb7fe3954d072b4a0b7e88"],["/posts/7594/index.html","b1704c8a987e67ef820dcc6013e5da0d"],["/posts/77049f2e/index.html","c0d9868de0f785bb9096083b9545d1cd"],["/posts/7c82/index.html","296910167df87723e7679b7615daf28e"],["/posts/817b8e0e/index.html","07642f1b97e9cfac80f8765309bbb500"],["/posts/844fc5df/index.html","c9009f74e4ff0ab8aa87f125c0e56b6e"],["/posts/8acab12/index.html","f632b50384a558d4343bb80a5287b0ab"],["/posts/8b3/index.html","d8dc86bfa60ebec03d1ba441c5bec001"],["/posts/947ec48e/index.html","7dcff6f5620eae9d6e2f8208fdcb2466"],["/posts/997c/index.html","3d16777c3437881349a0ca05b93a92ea"],["/posts/ab43a875/index.html","19724f3947c0b0e3252cdb85a5f09e35"],["/posts/ac2c/index.html","f79179e22074474774a584dc45a7124c"],["/posts/ad79/index.html","8b538a0d4dc4bf12cc454f0b390e9534"],["/posts/adf6e4b/index.html","2c592157a616a1dcd57fe98a54e03637"],["/posts/aea2/index.html","621bdf7a094b112662a2beeac1baa67b"],["/posts/b385/index.html","f556bcc3290dd9014fcebe98477a0fef"],["/posts/b7ed/index.html","9078bd7113eff0a51b5addcfa3e7a48a"],["/posts/bc3531cf/index.html","9f5137c5e253227f03aa1a0e35a56484"],["/posts/bfed/index.html","63ab56d2acacaa4e3af19199b95b708e"],["/posts/c232/index.html","469593285d08999c61fb05bb8f49d198"],["/posts/c291af82/index.html","f919bfe23a088cb4d518497c49c9edef"],["/posts/c2c/index.html","a3bd2a9e1dbac07b15d301775ea118de"],["/posts/c336038a/index.html","32d274f263334bb2b44e68796fd5db6d"],["/posts/caba8902/index.html","ced188dafc6e3dca55bc7d7d6a77c42e"],["/posts/d6c8/index.html","010e84e18dd4aaaf2f585998f91afcbe"],["/posts/d9a3/index.html","736f04d7c0203921622d29cc5f9f69ae"],["/posts/db12e7f4/index.html","3e46c4c6a5b1b92491f394024d020d8e"],["/posts/dbba/index.html","976d10b9736008c8f5d78729c3ceac3c"],["/posts/dcd4d5c3/index.html","60960100c8348ec5b0a01fabe271aa41"],["/posts/dfe935b2/index.html","92e7c081232ddb1d80b7c079d46799b6"],["/posts/e46d226a/index.html","55c7fdce9f751da0e4910b7eeb29132f"],["/posts/e98f2569/index.html","01c9a614085d725f22d26e13bd9b80a7"],["/posts/ecc2/index.html","8e5cfc2e97c20a69f02690ba6e4e6066"],["/posts/efaec666/index.html","2c4e89fd48407dfa48b563057df7b61e"],["/posts/f20cb9c8/index.html","a3cd7292d6e0258c0a84f78d5c8cfae0"],["/posts/f663/index.html","7c4032c5c68f937b67538e082914731f"],["/posts/f7a/index.html","c65f30218394db89ff89f25506fc1b23"],["/posts/fead/index.html","a57a66b3dc406175d6c5ee973f31d5ca"],["/sw-register.js","a28bb33b76e30cd88da95934f1857be2"],["/tags/Adobe/index.html","b3388bc4e6ffecc703dfcdb15c04c479"],["/tags/Aplayer/index.html","ea31270d5874756553b45decd2191957"],["/tags/Arduino/index.html","ba650f4ff2e53206556849b30f4f5b40"],["/tags/GitHub/index.html","0a09d3784aabf090f15ef7ebe0be16c6"],["/tags/Hexo/index.html","70e2d43bcf2cd146b708f477061b7324"],["/tags/Hexo/page/2/index.html","92a29a6b5f372ef5a5e6fbb885e15289"],["/tags/JsDeliver/index.html","5c62d93e12ede75a1da53ba53dbc3c6b"],["/tags/KMS/index.html","05d3a0f606604a463c503d44d03ab406"],["/tags/LoRa/index.html","132f4f17a4fa58a00cd225b8b50172e5"],["/tags/PC/index.html","861d9cd771c6d5f90cc013cd0c1b37e8"],["/tags/Pycharm/index.html","2e9600893140857c70eca29f6c3a4973"],["/tags/Python/index.html","40338105ed7115ba3c1623ddca19a0c6"],["/tags/SIoT/index.html","3395ec0f014c477f1f7ec992fa381d17"],["/tags/Windows/index.html","9dbf5456f6e1c06b89b5e8a784c04455"],["/tags/html/index.html","b70e627ab1f446519a9afebc14a5690e"],["/tags/index.html","ef3e8e01ded3e7ee6b2037df06e9e439"],["/tags/turtle模块/index.html","7f775c12bfb85e72be74b83954a01106"],["/tags/优化/index.html","a710b23ead654f51af20285abc9a8421"],["/tags/元组/index.html","1f8a5726bc90f666fdd5eaac86a80c90"],["/tags/函数/index.html","3dd208c1de251405c42b8514b20fbb44"],["/tags/列表/index.html","9e10cf8fd6a71902ee584ad85b347869"],["/tags/博客/index.html","852629c1ecd66b15d63ab372a34d1e21"],["/tags/博客/page/2/index.html","9ff08a195edce3404ad083426c1cbb1c"],["/tags/右键菜单/index.html","f40342e64800dcb1a3ba8d446caf832c"],["/tags/图标/index.html","3aea7fc4d088497452f62cbb0830b034"],["/tags/字典/index.html","2d7d056915ff0ba43a0255bab77430b8"],["/tags/学习笔记/index.html","0e35a7b6fbb57903b4c4ecdc0f252a9e"],["/tags/学习笔记/page/2/index.html","8e63260048863d6a5cbde7587f21f76b"],["/tags/安装驱动/index.html","f455d93b0543265a281962ee4b7445f5"],["/tags/成品/index.html","ae4a82deff1f49cc86001c477880ab9f"],["/tags/技巧/index.html","f49c110820808179ff55f9003b45104e"],["/tags/技巧/page/2/index.html","6152426871ed101223ac7be76c42a14c"],["/tags/技术教程/index.html","59ff4ba063fb6039ca4c251eed58b423"],["/tags/教程/index.html","f71bfb7d4c71fd5273181fa6f188d4a3"],["/tags/游戏/index.html","23e203f2a6325e57b46bd55208d79a72"],["/tags/物联网/index.html","3d8f7cac857fd14fecaa9d3cc6d5fd16"],["/tags/百度网盘/index.html","196c10cead8ce0d29318af9ace6e0249"],["/tags/算法/index.html","badff7ba39d0067491cf91d5b0e90218"],["/tags/系统增强/index.html","876e1a2e6cb0498a65d57a6a0d53e890"],["/tags/蓝牙/index.html","995dd3c2d265d28bf3cd068b2b095213"],["/tags/说说/index.html","bf44c9f1294cb5c69709bcac22b1826f"],["/tags/软件激活/index.html","0a335662b7787046a598cf4d4e73beed"],["/tags/链接/index.html","a838e7187fcafa1ab9cda715af4bccc5"],["/tags/阿里云/index.html","7bdc6048a084a6376d7dba51b781c210"],["/tags/音乐/index.html","24b02e2d49151a134fa93766544ba2fe"],["/tags/马赛克/index.html","34b443f92ac021b9c4b0895aac71731a"],["/talking/index.html","3ebc9f5c705f07e8d616bed2573aa941"]];
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
