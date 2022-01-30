/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","5a3d842eb682b596128bb0fca5c432c1"],["/Demo/index.html","59e6ba92201759026e46c5c9f09d42d0"],["/Gallery/index.html","701087ff171774aecc81c024a6031cf7"],["/HTML/love.html","9789a42d65dc9fc0da194361a55dfb2e"],["/about/index.html","6a69bb41f15b8578f4c6050a86325df1"],["/archives/2021/01/index.html","e1d0f3506169ad9fc5d214db10a66eea"],["/archives/2021/01/page/2/index.html","aa58479c33747f1d9c0e7a9e74fc6272"],["/archives/2021/02/index.html","c82da80cc7e0e1120ed4b4b3a5f056da"],["/archives/2021/02/page/2/index.html","8787c86abb2848cef0ac1e7cf5c00941"],["/archives/2021/03/index.html","b18a13913754c6515235aacf3362b9ca"],["/archives/2021/04/index.html","44eaae769c8bb75f0c235548a385e372"],["/archives/2021/05/index.html","dcf0971d9918b1e5015b5b4b496f2a72"],["/archives/2021/07/index.html","ad43ea023d6bcc309a6757f4a9ab74ad"],["/archives/2021/08/index.html","6b5251942de6c34c3198bee374685c74"],["/archives/2021/index.html","69e264557dc5a19cab4eb9ed5dd7291f"],["/archives/2021/page/2/index.html","30a6d65dad2c7fc67caa13688c783125"],["/archives/2021/page/3/index.html","99461ee8e0a6a008a1614d069ae40b59"],["/archives/2021/page/4/index.html","72b322f76c64eb1781c11a566c45838c"],["/archives/2021/page/5/index.html","fcb86bf55185c696c4eb6a374429477f"],["/archives/index.html","2f7ea83ece7e7a4357cc49bd285fdee3"],["/archives/page/2/index.html","02e632e1f2d0bdffdd0017579a49de53"],["/archives/page/3/index.html","a9415703b748921d88a9d37e922d830b"],["/archives/page/4/index.html","a6bc4c16dee285b0675b1e2684b7a654"],["/archives/page/5/index.html","0f0349fea0abf8abde8848356c5eb86a"],["/categories/Arduino/index.html","dcc5a9d93f0091a89cee02a5475bf202"],["/categories/Hexo博客/index.html","5462a880646aa35770c37fce3c07fb65"],["/categories/Hexo博客/page/2/index.html","b21e7e281694f89ad8b6c21ee1835e07"],["/categories/Hexo博客/技巧/index.html","6140636c7098708036f9f47e739be9e4"],["/categories/Hexo博客/技巧/page/2/index.html","aaaad95ec4ae74a54f971e0a37732311"],["/categories/Hexo博客/搭建/index.html","9eab4510ee5af2562aee4bd451caabf3"],["/categories/IoT物联网/index.html","9a1f9fff74495e5de8bef0243ffa445d"],["/categories/PC/index.html","a4134fc69dc01714c65cd4dba226552d"],["/categories/PC/媒体处理/index.html","77eebc48b68ae9b51f4b1eaefb266f00"],["/categories/PC/系统增强/index.html","ef7e23685c24642c680d0ea2c068776e"],["/categories/PC/系统镜像/index.html","a1d43dd995bc36535a6eefe50b505a2f"],["/categories/PC/软件激活/index.html","f1d375b8dbc51d9330009dcf7c005b5f"],["/categories/Python/index.html","3b279208457e5291dd9a04a763f70795"],["/categories/Python/学习笔记/index.html","fbd08d053dda86951d564d8ae3c037b2"],["/categories/Python/成品/index.html","29d9c4b352f9e20019d1cf0d508b1530"],["/categories/index.html","d78350506aa5ec248454423ba7b20917"],["/categories/其他汇总/index.html","76b3e5f406ea06452150372ec6ed9cf3"],["/categories/学习笔记/index.html","58eda92e34734970e10a167bbd8052a2"],["/categories/技术教程/index.html","f345ff68473bb3b63db40d02b512c9dc"],["/categories/游戏资源/index.html","659a63c8b3cc07bf7ea0772e561537c3"],["/comments/index.html","fd8f5f1c761e036514e4c6bd67459ca8"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","1be40ef63ffabb35de306f1dc2f5c5a3"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/history/index.html","fef1e2a15acf0c22acc06e2973864f2c"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","e8cb358997a4270f23e3a2e861d45e6c"],["/js/main.js","67ef93b7026979d99da673cfd9fd85de"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","1685cd43da0de7abd4a649dd5b2d81db"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","9f465e7dd29ec62dbc6af321882c2b59"],["/js/wow_init.js","4244acb8641a2525f168b604f9ca4844"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","05217884d418b1269ad69e292c735ee2"],["/message/index.html","ebfb7255b0d69ad7135e48e86a9bd17c"],["/music/index.html","a92cd99795eba48ef22ee06e15fd871d"],["/page/2/index.html","b9d1fab5a3f441c32c1097a09d6bb80e"],["/page/3/index.html","e5056f9702c0ab4e9d91a19dd289aadd"],["/page/4/index.html","b4b96dd461fde4418c73adf065dd12cf"],["/page/5/index.html","29a74c531c02a4be5a55b4c0b05c751a"],["/posts/11e4/index.html","4576dc923b77a7181c0b4f8ee5954e28"],["/posts/126239f4/index.html","082084845d037a321bc6b50545b0ae91"],["/posts/20b3/index.html","f0b0af2bb6e814fc1ca8ed1192d5ec34"],["/posts/21396629/index.html","8dd4f72024354cba7752416ddc9cbc42"],["/posts/241519a2/index.html","53e209994ff4ddff65d9d846d29e2d32"],["/posts/40cad56a/index.html","4aeafa2260f992e719212fc372d19df7"],["/posts/4161854e/index.html","473174fb2d5cc16081974fb7400aff88"],["/posts/4254dc4c/index.html","510a75bde4439b19d7ed58ff5b3a7598"],["/posts/461b0433/index.html","e992b21a41764bc5e916e385b4957eeb"],["/posts/56ce/index.html","88b9395ebbf8d0d7d4ebcbc496f399f0"],["/posts/60c319f6/index.html","ef15063d294979ba11a477f48603c77e"],["/posts/6746a1c3/index.html","9cf27e65c0867c7fb27320210d9e8c8f"],["/posts/6c20/index.html","93cb392f29adbe01638dd90e09c4bf8f"],["/posts/73b37fcd/index.html","3276c3951e6becfdb1d8ddd617d78950"],["/posts/749a3a09/index.html","73cff4ab7c84165473df6f275765c4fe"],["/posts/7594/index.html","6f2cb244f836b5bc8b24b158fca85d5b"],["/posts/77049f2e/index.html","a33ebff193948a8c9aef149561568f62"],["/posts/7c82/index.html","120164528bea12eef62ba136bbca4f54"],["/posts/817b8e0e/index.html","a556c1536797b4d54367ce15f5cc53d9"],["/posts/844fc5df/index.html","40524470ca559a94b1c50c25c12e03f7"],["/posts/8acab12/index.html","88328eb8c63c63dfc36f783f8e5bd178"],["/posts/947ec48e/index.html","a8b90f7c357c69ff8271fe425cf860a2"],["/posts/997c/index.html","b615c0a9b71277a710865b165a74cd43"],["/posts/ab43a875/index.html","da240f0f2bb4eac4df1899ff5a50ba59"],["/posts/ac2c/index.html","e062a3be2092a29635f13abe0db0ca61"],["/posts/ad79/index.html","ab5dbf881847625c0797851744131f91"],["/posts/adf6e4b/index.html","dfd6da0c40b07cb3f0977476af945b50"],["/posts/aea2/index.html","2dac298087ab464179888875ebeb9ef4"],["/posts/b385/index.html","56d9b73f5e75cae27565f4aff20c8df1"],["/posts/b7ed/index.html","cf8c3a53cd17920b11d31f9e37893b0a"],["/posts/bc3531cf/index.html","529bbe82005ed65535702c04e0a2b89f"],["/posts/bfed/index.html","4e2c8f8f8c4f406893e280cb491590dc"],["/posts/c232/index.html","4b0282664ebae00132cd1a9a1bd00a8f"],["/posts/c291af82/index.html","83ea2e67eb14cff6e26ef6c76217f286"],["/posts/c2c/index.html","0e1ac298143f18615a8c039cab74ce16"],["/posts/c336038a/index.html","b148a78386900e063ac6cf5880886469"],["/posts/caba8902/index.html","3b8d9664937366195f72ea3403afd86c"],["/posts/d6c8/index.html","7c0d69f790b1eaa6b9c97bb3b9d99829"],["/posts/d9a3/index.html","e623941507ecc635bb7692132474c375"],["/posts/db12e7f4/index.html","d5bf4a4d3f51a7185ed1fcb2b0bd39d6"],["/posts/dbba/index.html","69aa6a7f1936564cbad77a580c531a3e"],["/posts/dcd4d5c3/index.html","63875b1200db6a2811aec779e76d641b"],["/posts/dfe935b2/index.html","6edd39e3f070b2efb7ce63ba4728560c"],["/posts/e46d226a/index.html","2a2a44afeaa06aa9cb32c62ac21edfd3"],["/posts/e98f2569/index.html","bf0f0d864cc0d5dfae729d1823a33fd7"],["/posts/ecc2/index.html","af1dbb6c11cdfded63ce7b92b39405d0"],["/posts/efaec666/index.html","02b0577a157547fd8f5baf8df8b1f058"],["/posts/f20cb9c8/index.html","6ce2724aed97c70e9b53ef3c88efbeeb"],["/posts/f663/index.html","3f182a56645864a5af79350bf93d5087"],["/posts/f7a/index.html","58257c3876e6e574a2c33bfa9703c119"],["/sw-register.js","794ac7a7bff407bcaed0fdde48877aac"],["/tags/Adobe/index.html","33bdec160c71064e8cb8b6b317060f18"],["/tags/Aplayer/index.html","f758136ce4746e03fe3004cf16a2f937"],["/tags/Arduino/index.html","07ca61479782825be7c87f223f536ce1"],["/tags/GitHub/index.html","fae660f8950bcfacec509e0a5c11fefd"],["/tags/Hexo/index.html","fd1ca6c88257037423b265d2383860bc"],["/tags/Hexo/page/2/index.html","e42d20f4ef384a5ca8f5d0340bcbf2e7"],["/tags/JsDeliver/index.html","f73cbced909fda605b4c30b0b269403e"],["/tags/KMS/index.html","db6cbba87e3dc91e0319e0a95c65347f"],["/tags/LoRa/index.html","07c55a72a2550597b809b3795a5a6eac"],["/tags/PC/index.html","ecf21b2503fc034181538bd57e1b12af"],["/tags/Pycharm/index.html","d5054c9fc1ff1bf1f9915f3fd46f0927"],["/tags/Python/index.html","77923f02e9d203bd302cdd01c8172f6a"],["/tags/SIoT/index.html","38e39c519b05800467512772a192d05e"],["/tags/Windows/index.html","3ed604e0a1e31c21664467597794d2f4"],["/tags/html/index.html","f38465fe548878fa7179896c9e9540cb"],["/tags/index.html","44a3f651fbd56cbf484fd791cbbc3f9a"],["/tags/turtle模块/index.html","1299e40f58f1e4fa2422e881a8bc6aa4"],["/tags/优化/index.html","9ac82e6d5de2338c2c55800170b1220c"],["/tags/元组/index.html","0d614545130e6bd1fc17b1bd028b3732"],["/tags/函数/index.html","12d3821b88217d4da5e96cfccfc16bdc"],["/tags/列表/index.html","0c4b78adfac671e6821f4b4ce04b2035"],["/tags/博客/index.html","49e05ea12c741116cab49314df3969dd"],["/tags/博客/page/2/index.html","390bdc613c6beaa7ce70c4480c394cfc"],["/tags/右键菜单/index.html","a7c587de3e0ef5e7112983a20ad2b207"],["/tags/图标/index.html","ba0a1fb6bfb6630f1da35f009d427480"],["/tags/字典/index.html","7a805ca08df092ba561efb73f361593f"],["/tags/学习笔记/index.html","322d02bb16e4d894a5dea60200e501f7"],["/tags/学习笔记/page/2/index.html","1dfdb018c48934954c7ea134df3bbcfe"],["/tags/安装驱动/index.html","a5e29cb2a9d64c5c2aafc4a77e9085b1"],["/tags/成品/index.html","e1f039a2665a5e3d0ba97a72978aa65b"],["/tags/技巧/index.html","7939ccb103c38a882b6ee4159f521e87"],["/tags/技巧/page/2/index.html","929c9fdf8ad9917190049ce39bf536fb"],["/tags/技术教程/index.html","d6742c7bb310f089b44e563a6658620b"],["/tags/教程/index.html","87e0a08c47f3f07993bf92b9f05e983e"],["/tags/游戏/index.html","06d1ddf6517d0e4165574fc61858a855"],["/tags/物联网/index.html","249c131aebaf52e37fcb9b6ab8632dfb"],["/tags/百度网盘/index.html","e4ed16eefe5c9d2f0410776c8203bcdc"],["/tags/算法/index.html","03547cc9beccfa18134f227a1cc48eee"],["/tags/系统增强/index.html","8d7327aed8c3d11873459bb9641d8c5c"],["/tags/蓝牙/index.html","54b892d388390be8c52aa12ad673d167"],["/tags/说说/index.html","5e8c0504f030b0e601eef08b62b193f9"],["/tags/软件激活/index.html","455066db85c1ff03bfe2179baee0fe68"],["/tags/链接/index.html","2238b8b529f8d630149f30da3e95bd03"],["/tags/阿里云/index.html","eb8d436e8330062de16539eee5a6d79c"],["/tags/音乐/index.html","b96fac2a135f892da0cc8882a417196d"],["/tags/马赛克/index.html","387100ae7ede757f6aa5581e8958aa3f"],["/talking/index.html","4327eee5ac298bcf929b6cdf5b2c5b96"]];
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
