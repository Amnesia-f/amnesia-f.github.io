/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","901b36fb9343bee7fadc535ae1c434c6"],["/Demo/index.html","1420737f40cd103de2cc36fa343a60cc"],["/Gallery/index.html","b670b40a7dc5d1a9dae063743331b459"],["/about/index.html","04a926d100c31e1eabd81ad8c268c5a3"],["/archives/2021/01/index.html","9b2138fec3f6ebe757b03bdc7ebe82fe"],["/archives/2021/01/page/2/index.html","1d8fb931561f6a7221995e52b8101143"],["/archives/2021/02/index.html","758b06d1e23de62ffd1968f4084ce20e"],["/archives/2021/02/page/2/index.html","f364366c1ee501767e55f346e8efb07e"],["/archives/2021/03/index.html","6902a9c85a532342433d13887a047b78"],["/archives/2021/04/index.html","554ddf0270b75713017459a5362554c7"],["/archives/2021/05/index.html","b9269ca2b931f011c3ace30c4dbc4390"],["/archives/2021/07/index.html","2020734ce2933733adb632963784937d"],["/archives/2021/08/index.html","c5be5cff0561be6f1ac9c2c9fb1e2ada"],["/archives/2021/index.html","073b83a95998c6ecdc62e418fec949dd"],["/archives/2021/page/2/index.html","2a3122285cf74ce557eea196965ad5ab"],["/archives/2021/page/3/index.html","e92d47c2f00c59c83814a52e80457087"],["/archives/2021/page/4/index.html","09c6a0bd54a27bf83bfa099b6cdde8db"],["/archives/2021/page/5/index.html","e964a3d97c124cb4b5fa9089c0d62740"],["/archives/index.html","8982edf27f00e11d8afccf429cc12a11"],["/archives/page/2/index.html","fb9f93d7cea432c298c6f8d1fd5d8c94"],["/archives/page/3/index.html","f16148ee0c05accc0e2d43ec702e4375"],["/archives/page/4/index.html","12f1f28873c88c01a77da2edef190ecc"],["/archives/page/5/index.html","b86c9584425df9a6e07897ff8a350b15"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/categories/Arduino/index.html","c511db27eb3e3eb2de9f9e98bddda5ae"],["/categories/Hexo博客/index.html","815f3be61c3adc196246b864cfd8d649"],["/categories/Hexo博客/page/2/index.html","a6aace2d6ef59d681bf64a048ec204d2"],["/categories/Hexo博客/技巧/index.html","3cdc695f7bed11da242e57bfe53f14b8"],["/categories/Hexo博客/技巧/page/2/index.html","25355edd66710371ea4671165df6e6eb"],["/categories/Hexo博客/搭建/index.html","d1d8d27de80a7c45fc90994c14bde31a"],["/categories/IoT物联网/index.html","52f600aa0d574449836894fbfc871d8e"],["/categories/PC/index.html","b7a1fa4e5b1339ce8d82bcaae9ab5f30"],["/categories/PC/媒体处理/index.html","7a2a5202101aa3513fd7091e5a4a2f00"],["/categories/PC/系统增强/index.html","363cf19341cc0705359f6121f7a110bd"],["/categories/PC/系统镜像/index.html","f468206ef603fe0caac88f52718666e3"],["/categories/PC/软件激活/index.html","20445209696f80e0c9dfa17d77f4af81"],["/categories/Python/index.html","5b5612789958dfb489ff7c2a1d25cfb2"],["/categories/Python/学习笔记/index.html","8e9e00afde0d17f4434ec37cb8e5a884"],["/categories/Python/成品/index.html","b8d3f7d738a57620ec4c60ab0bf86730"],["/categories/index.html","695ff1e431c3beaf306961ff6ee21a19"],["/categories/其他汇总/index.html","33befd6a19778f249e06b261fe84a194"],["/categories/学习笔记/index.html","e54cdcdeedbd08ac6c452db5adc68628"],["/categories/技术教程/index.html","e5e1083e9e664f807c44919670d6e3b2"],["/categories/游戏资源/index.html","381c57b03a2e722664cb4432dd2fd224"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","1be40ef63ffabb35de306f1dc2f5c5a3"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/history/index.html","1e7e0ac28dc5cff2a8aaf9cc5ac9b7f4"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","abcf75b0ba1bb5f1f3c6a09a50cfeb6d"],["/js/main.js","67ef93b7026979d99da673cfd9fd85de"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","1685cd43da0de7abd4a649dd5b2d81db"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","9f465e7dd29ec62dbc6af321882c2b59"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","5d1d4a3fa09e00e7e5be8324d944651d"],["/message/index.html","c13bb42d66380a75b4725a9b3b4378c9"],["/movies/index.html","b17c5dbb1af041956875d6e80f5eed4a"],["/music/index.html","da44d3a4ee9c9ebbe85050399f407562"],["/page/2/index.html","3d60ff1f665cf04e0e04f6b1aa37a506"],["/page/3/index.html","dc713102f75d9343451e1e82a107e166"],["/page/4/index.html","802194f7d00ba7d777c82982f23e0c11"],["/page/5/index.html","8c9168ec2cc647e93c5bb3a71851f2ac"],["/posts/11e4/index.html","c1d20c1e1ef703706c41bebc524e3493"],["/posts/126239f4/index.html","f06578362ab43a8cf22291054c379497"],["/posts/20b3/index.html","cd8b39a52ba00cc75d2f015c96f03780"],["/posts/21396629/index.html","288f91031d498be9fec61d3556ce3037"],["/posts/241519a2/index.html","4a1a36ba0f783ca6f14440e51fa11007"],["/posts/40cad56a/index.html","628558b59ee4ed1571670d20611baefd"],["/posts/4161854e/index.html","f962e809076e0afa29e4870ce136c8e9"],["/posts/4254dc4c/index.html","2930ff79aabae09776b689ca21544aea"],["/posts/461b0433/index.html","d87f1e19ab42dd69f1840dd46384303f"],["/posts/56ce/index.html","c6aed1f12110b7cb32636aa56717f0d6"],["/posts/60c319f6/index.html","fe05b3f656dbd77c8c896c03ff33ec0b"],["/posts/6746a1c3/index.html","14d9a08d818a5def38814a8e858c17f8"],["/posts/6c20/index.html","e771bbce797df2d50d9d003467ff097d"],["/posts/73b37fcd/index.html","3797cc68addfc167c5f4cf85aaeddd1c"],["/posts/749a3a09/index.html","ab95465fd99e125c6e5e0eb4d93d61c3"],["/posts/7594/index.html","8443418e9c58b98520cdfca3982666cb"],["/posts/77049f2e/index.html","b32e2ffcd57352b46cdb6c7dba6cd4c0"],["/posts/7c82/index.html","bb2eeff767a4fea054d2ceefd47dbf23"],["/posts/817b8e0e/index.html","ef638dc0ca1857d00643975f8a39c061"],["/posts/844fc5df/index.html","d38d4ddb5d2beeed8bc0cd3da8c5d2ab"],["/posts/8acab12/index.html","a54a9c87f533ae7cae741c2b71199f47"],["/posts/947ec48e/index.html","82bf87999c6d739ed0f9c2b1975b8bc7"],["/posts/997c/index.html","8a316ebf48800a3e025666c2adbcf560"],["/posts/ab43a875/index.html","fa802643448a71eb2c6dcd493edea9f0"],["/posts/ac2c/index.html","ba1056484a5b6b4ed256666cc0bb05d2"],["/posts/ad79/index.html","43d1fa54efd37f6c5f8978b1458b1ba5"],["/posts/adf6e4b/index.html","f54eed8f9e0c2a90dfe321830158fd01"],["/posts/aea2/index.html","fbaa77c29d067b4c2a43fcd070e786fb"],["/posts/b385/index.html","8b9baf7b4eeecb405f5699f719db0453"],["/posts/b7ed/index.html","b1e22637b5b82e211eff1af3ac23b5a7"],["/posts/bc3531cf/index.html","08e6dbe4c084e1f58202a90231a73b7b"],["/posts/bfed/index.html","7537be0a39bba920cab23a1b20dd6509"],["/posts/c232/index.html","18be1d31611eb18ccb02cc6d88e69dd1"],["/posts/c291af82/index.html","62399ee98e26a0af0b4b3129f69f3b65"],["/posts/c2c/index.html","ea626600c60a929bef43dad5ddecaf76"],["/posts/c336038a/index.html","0949f8718a52eee31c45207332335aab"],["/posts/caba8902/index.html","b474f85c8cd3bb71aa2c7412a3f902b7"],["/posts/d6c8/index.html","a1f14d942d1169fd5c66bf0db70d8a38"],["/posts/d9a3/index.html","5cf466a0df281c2cc9f15372a298d064"],["/posts/db12e7f4/index.html","2e95efb39e14bf32f9acb49070be3721"],["/posts/dbba/index.html","f2448a66555acda35df3ea08e3b99605"],["/posts/dcd4d5c3/index.html","6230d511909d32fa66ae2348f7362625"],["/posts/dfe935b2/index.html","bdf6d57e0a2921d4172c479e155c3284"],["/posts/e46d226a/index.html","a35095589cfa474ddb72bd51890e75be"],["/posts/e98f2569/index.html","2971bba73e2b77b131b0fdc6616a3070"],["/posts/ecc2/index.html","e7a131bd3168676fc48bd09e2b27da1d"],["/posts/efaec666/index.html","e092f12a1598e9d52b300c57fda7d2f2"],["/posts/f20cb9c8/index.html","fced9d428063e1e6d3dd546cf61627d5"],["/posts/f663/index.html","01be85dd7b4d29498610bc06f3d96ac0"],["/posts/f7a/index.html","485b2d1a2f071cdb808f15930376d90b"],["/sw-register.js","8ad16d7edb5bc2e9a76ce80ab9f0eff5"],["/tags/Adobe/index.html","1be9b73edca2c52582d4a8e47645fb24"],["/tags/Aplayer/index.html","02253118b9649ec214fcbd782677d3d2"],["/tags/Arduino/index.html","d6f8504a41d428158f0778a0c641b5ed"],["/tags/GitHub/index.html","4030668f3b8c63aa8cd4bf56ff78ec4f"],["/tags/Hexo/index.html","d766822ba8eabc6cde294b26e0a59607"],["/tags/Hexo/page/2/index.html","9b1b8eb7db87f73972f2d5e248b79f9b"],["/tags/JsDeliver/index.html","b65151c74be05d5f5c2048d842996537"],["/tags/KMS/index.html","dac71cd4b67d8166709bbf88d3149959"],["/tags/LoRa/index.html","c650477ec5218aebdfaf88acdf5b5950"],["/tags/PC/index.html","794787378f4b102b1f71068d04e5a18c"],["/tags/Pycharm/index.html","154ec520d028b72b8fffa4956b59c085"],["/tags/Python/index.html","50320f010e874a0120de143518c1b905"],["/tags/SIoT/index.html","a35a204c246b1f8c67ea4aafef3f8850"],["/tags/Windows/index.html","d7ab307383278c4694fc266792dce2e4"],["/tags/html/index.html","e9b8f432880a9e4109a1f3d8ff666e0f"],["/tags/index.html","d1c898a74bb0505002128fd87df4f987"],["/tags/turtle模块/index.html","4b51be732cdd175c695cd17d84df19e8"],["/tags/优化/index.html","5d12a9b6f0cb53d39fd6117b98d39e43"],["/tags/元组/index.html","77dc248103a58e9017f06301581e0d9f"],["/tags/函数/index.html","1b93ef4c6f69eccb26ee98cdd53581a8"],["/tags/列表/index.html","22dfe7578287eb98d724e277a28e62d8"],["/tags/博客/index.html","dc90e26a48e788abe7d76ac59a3d8498"],["/tags/博客/page/2/index.html","41e50e8ac00cb140da905746bd106d85"],["/tags/右键菜单/index.html","6709df61d3d1250ccc56b462fde51f03"],["/tags/图标/index.html","8dc8eed74123d27068c304a00dc1cf83"],["/tags/字典/index.html","d7f95574899cb9d14a5ca80f42369fbd"],["/tags/学习笔记/index.html","cdbed2ef2d8458e86d8a6236caa8d4df"],["/tags/学习笔记/page/2/index.html","66b0d196a53092d1052c78362707e187"],["/tags/安装驱动/index.html","16175fa9a18c809518daee6b0e220fd3"],["/tags/成品/index.html","48db9a933bb005193e10ae2ba420c040"],["/tags/技巧/index.html","d6b434213b0e95b54121e029c43b1a93"],["/tags/技巧/page/2/index.html","f57fb2a41c8cc9f0e45f83f73eb3e671"],["/tags/技术教程/index.html","dc74eee2889a06f5f263cd08aaa72236"],["/tags/教程/index.html","2d584dac33b81e7aad081ccbef6fefae"],["/tags/游戏/index.html","65c10dae1dace900f020587121b625e6"],["/tags/物联网/index.html","afc1bcd7619561ce60c3425711017bdb"],["/tags/百度网盘/index.html","d36f96cd089bdb312313990578a9a9f8"],["/tags/算法/index.html","26ee2772a90ce0d3f0632c957cd45e18"],["/tags/系统增强/index.html","7d494a0550c4f58bdcc9fe0d9f929006"],["/tags/蓝牙/index.html","9b667983dd9c3fbe342fed8850715a1b"],["/tags/说说/index.html","969b225d815a2f1debcdfee014a14a04"],["/tags/软件激活/index.html","76bb5da1458ee4774d2943fedd86cacd"],["/tags/链接/index.html","161cb6b1f3592d4839d58997722aef3c"],["/tags/阿里云/index.html","e78875bf2051bf9bc21ff553db8d127e"],["/tags/音乐/index.html","daef67fdba611cf6c2ae37f7aca59d97"],["/tags/马赛克/index.html","16a4a9a4b193067d389169d040a72993"],["/talking/index.html","aa005050c74b059d7e13b765725e256c"]];
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
