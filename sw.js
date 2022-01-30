/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","2ba5a3c6b84d90f1c42f87089b19dab2"],["/Demo/index.html","23759a733bddca3bf1b6a333deae7177"],["/Gallery/index.html","34dffb5c77d1901ec0adfe6e7335f962"],["/about/index.html","e1028a0415c652313aeea451621520e9"],["/archives/2021/01/index.html","327cc22d622d6fc6ffb09e18eafc8d4d"],["/archives/2021/01/page/2/index.html","14c998e50b33d8d4eb3a1186d542ffec"],["/archives/2021/02/index.html","ac77d9f828d4c3cfec3a0b3a3a6f2ab0"],["/archives/2021/02/page/2/index.html","51bdf892c8127504813d28167f05e2c8"],["/archives/2021/03/index.html","0bbb06c1dd9328fbe6a7e96fdc44c0ff"],["/archives/2021/04/index.html","138c2d19b6d08ac5f597d3c6cbace189"],["/archives/2021/05/index.html","e69626ed985ce058ca92c745d9b6c4c8"],["/archives/2021/07/index.html","c95591d091fc665f8a1c8e484d43e7cc"],["/archives/2021/08/index.html","ce50401b1c61ac25483820560d4fd515"],["/archives/2021/index.html","b77c2405a7ca66de6ee517fb6739cc2e"],["/archives/2021/page/2/index.html","1b3de1ea32159c6f366e73fad79e795e"],["/archives/2021/page/3/index.html","2fc5222d328a99ab4f42c9796575139f"],["/archives/2021/page/4/index.html","7d544b8655493ea08af749a2151e196b"],["/archives/2021/page/5/index.html","ef4d6c0bf6ce69c586f7921506abce2a"],["/archives/index.html","ddb3a081511b401950d10be8b8cf5b4e"],["/archives/page/2/index.html","bab0f99c8d6c1364598c8d642f91c99a"],["/archives/page/3/index.html","81c7f0359eafcf33b062063e36e9fd47"],["/archives/page/4/index.html","972d007050b65d3e1c31a432d2097589"],["/archives/page/5/index.html","09102c2ecc553bde3668edc949ad91cb"],["/categories/Arduino/index.html","69df6b697985c6e8b91bd3779a978f59"],["/categories/Hexo博客/index.html","caab1a73d7a9f1e7b4b91ab7bcff290e"],["/categories/Hexo博客/page/2/index.html","436a9b796d6a2628d3ba0de835ce7865"],["/categories/Hexo博客/技巧/index.html","caa036bcfedfd18327a2d4ec118322b9"],["/categories/Hexo博客/技巧/page/2/index.html","4bfd9190beb092e26ceeebc711236506"],["/categories/Hexo博客/搭建/index.html","76d1034782b995186007720e80a188ea"],["/categories/IoT物联网/index.html","e568812a9f7d5e1d4a093730a59b1e36"],["/categories/PC/index.html","1ce5914228aa22ffaa4ce0b3c6e4646a"],["/categories/PC/媒体处理/index.html","97dd356153a0ea8814e406d40ddcc2b3"],["/categories/PC/系统增强/index.html","de35a9db3e172c00e00696205be53263"],["/categories/PC/系统镜像/index.html","699e92a9a90da72043dd36c3a8b1ac4e"],["/categories/PC/软件激活/index.html","9a376fa4dd2f76a2e86edcc021654f69"],["/categories/Python/index.html","d3bbc2d13f504fcf8e5981a8324a9577"],["/categories/Python/学习笔记/index.html","9911a45703918bd64d77cc2862562159"],["/categories/Python/成品/index.html","69d187093dc92653eca40a87a4b3dd35"],["/categories/index.html","5001218b582439e8ccb6a989c801890a"],["/categories/其他汇总/index.html","b068a6e9b1ab97bc318cc2882f1e0fd3"],["/categories/学习笔记/index.html","197a9fca24c910014310bb6ddc22c036"],["/categories/技术教程/index.html","107371f792aea018ac34e8054a907835"],["/categories/游戏资源/index.html","792e652ebd029ebdff779b2c96a1304a"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","1be40ef63ffabb35de306f1dc2f5c5a3"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/history/index.html","1e7e0ac28dc5cff2a8aaf9cc5ac9b7f4"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","931d05f65eed36e74037ebb5d2148641"],["/js/main.js","67ef93b7026979d99da673cfd9fd85de"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","1685cd43da0de7abd4a649dd5b2d81db"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","9f465e7dd29ec62dbc6af321882c2b59"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","2176a84abb2fe159975cd56d4176d914"],["/message/index.html","48ed829aeafa1ae6caf30ba9b39ce766"],["/music/index.html","dbd2b744c2d897ec592911d9d120c6d5"],["/page/2/index.html","251b47c8ca86d89497fd1b8ea777dd58"],["/page/3/index.html","9cdd97c27b3bb5b055ba11700e05568c"],["/page/4/index.html","c46c9146484944f950c4220ace18c1de"],["/page/5/index.html","35f9fb498fb9d02f086393191f142e6d"],["/posts/11e4/index.html","c1d20c1e1ef703706c41bebc524e3493"],["/posts/126239f4/index.html","f06578362ab43a8cf22291054c379497"],["/posts/20b3/index.html","cd8b39a52ba00cc75d2f015c96f03780"],["/posts/21396629/index.html","288f91031d498be9fec61d3556ce3037"],["/posts/241519a2/index.html","4a1a36ba0f783ca6f14440e51fa11007"],["/posts/40cad56a/index.html","628558b59ee4ed1571670d20611baefd"],["/posts/4161854e/index.html","f962e809076e0afa29e4870ce136c8e9"],["/posts/4254dc4c/index.html","2930ff79aabae09776b689ca21544aea"],["/posts/461b0433/index.html","d87f1e19ab42dd69f1840dd46384303f"],["/posts/56ce/index.html","c6aed1f12110b7cb32636aa56717f0d6"],["/posts/60c319f6/index.html","fe05b3f656dbd77c8c896c03ff33ec0b"],["/posts/6746a1c3/index.html","14d9a08d818a5def38814a8e858c17f8"],["/posts/6c20/index.html","e771bbce797df2d50d9d003467ff097d"],["/posts/73b37fcd/index.html","3797cc68addfc167c5f4cf85aaeddd1c"],["/posts/749a3a09/index.html","ab95465fd99e125c6e5e0eb4d93d61c3"],["/posts/7594/index.html","8443418e9c58b98520cdfca3982666cb"],["/posts/77049f2e/index.html","b32e2ffcd57352b46cdb6c7dba6cd4c0"],["/posts/7c82/index.html","bb2eeff767a4fea054d2ceefd47dbf23"],["/posts/817b8e0e/index.html","ef638dc0ca1857d00643975f8a39c061"],["/posts/844fc5df/index.html","d38d4ddb5d2beeed8bc0cd3da8c5d2ab"],["/posts/8acab12/index.html","a54a9c87f533ae7cae741c2b71199f47"],["/posts/947ec48e/index.html","82bf87999c6d739ed0f9c2b1975b8bc7"],["/posts/997c/index.html","8a316ebf48800a3e025666c2adbcf560"],["/posts/ab43a875/index.html","fa802643448a71eb2c6dcd493edea9f0"],["/posts/ac2c/index.html","ba1056484a5b6b4ed256666cc0bb05d2"],["/posts/ad79/index.html","43d1fa54efd37f6c5f8978b1458b1ba5"],["/posts/adf6e4b/index.html","f54eed8f9e0c2a90dfe321830158fd01"],["/posts/aea2/index.html","fbaa77c29d067b4c2a43fcd070e786fb"],["/posts/b385/index.html","8b9baf7b4eeecb405f5699f719db0453"],["/posts/b7ed/index.html","b1e22637b5b82e211eff1af3ac23b5a7"],["/posts/bc3531cf/index.html","08e6dbe4c084e1f58202a90231a73b7b"],["/posts/bfed/index.html","7537be0a39bba920cab23a1b20dd6509"],["/posts/c232/index.html","18be1d31611eb18ccb02cc6d88e69dd1"],["/posts/c291af82/index.html","62399ee98e26a0af0b4b3129f69f3b65"],["/posts/c2c/index.html","ea626600c60a929bef43dad5ddecaf76"],["/posts/c336038a/index.html","0949f8718a52eee31c45207332335aab"],["/posts/caba8902/index.html","b474f85c8cd3bb71aa2c7412a3f902b7"],["/posts/d6c8/index.html","a1f14d942d1169fd5c66bf0db70d8a38"],["/posts/d9a3/index.html","5cf466a0df281c2cc9f15372a298d064"],["/posts/db12e7f4/index.html","2e95efb39e14bf32f9acb49070be3721"],["/posts/dbba/index.html","f2448a66555acda35df3ea08e3b99605"],["/posts/dcd4d5c3/index.html","6230d511909d32fa66ae2348f7362625"],["/posts/dfe935b2/index.html","bdf6d57e0a2921d4172c479e155c3284"],["/posts/e46d226a/index.html","a35095589cfa474ddb72bd51890e75be"],["/posts/e98f2569/index.html","2971bba73e2b77b131b0fdc6616a3070"],["/posts/ecc2/index.html","e7a131bd3168676fc48bd09e2b27da1d"],["/posts/efaec666/index.html","e092f12a1598e9d52b300c57fda7d2f2"],["/posts/f20cb9c8/index.html","fced9d428063e1e6d3dd546cf61627d5"],["/posts/f663/index.html","01be85dd7b4d29498610bc06f3d96ac0"],["/posts/f7a/index.html","485b2d1a2f071cdb808f15930376d90b"],["/sw-register.js","ae52a039815778acbe2f7c77392906ce"],["/tags/Adobe/index.html","fb23c62c11d15f9570dd0911b4bc6d01"],["/tags/Aplayer/index.html","6c60dc200f2b0d5464f0aef05e8ec647"],["/tags/Arduino/index.html","8c28e8c5abfc4487f8e4447e2c51fd5f"],["/tags/GitHub/index.html","36ab285a4595ff897da5b45e245b62a0"],["/tags/Hexo/index.html","9e3f54a9586023982036e87616bc045c"],["/tags/Hexo/page/2/index.html","f5fe288e3dfd48d44604cda7b72eb673"],["/tags/JsDeliver/index.html","c5c24c5b3da2105ebc2c307771828a92"],["/tags/KMS/index.html","52bcf1b64a73d47b37fb3671ddad7590"],["/tags/LoRa/index.html","1c7e68f51d38ef86e30a6e74b1fadae7"],["/tags/PC/index.html","4773ae8b4e22500530390996cf30ff97"],["/tags/Pycharm/index.html","5fb6e136bf9ef24f7ba2678b63928c9b"],["/tags/Python/index.html","d8373aadd357d76e25e0f40830016c6c"],["/tags/SIoT/index.html","b845262fc90557962bc6ebac41dcb5a7"],["/tags/Windows/index.html","28afdbe58de53101c85b973d9938600a"],["/tags/html/index.html","dbbb1ac49611fc2d2cf69b83d603fa93"],["/tags/index.html","b6c654a771877753bc8ae79caa73e283"],["/tags/turtle模块/index.html","4b536aa3a2f8d7c217f9b05a6ab0503e"],["/tags/优化/index.html","e2c3d305869a1f2e9c4c690b35710231"],["/tags/元组/index.html","9cf6db4f5d3412385d3f2ee40778d4ad"],["/tags/函数/index.html","f591600576e5f760d89837b388c3ac18"],["/tags/列表/index.html","34336dfa84775d6d05e6d09995181521"],["/tags/博客/index.html","46a31be0f9880009f244ac5b428995f0"],["/tags/博客/page/2/index.html","387e41de22f4a22221a12e484b25aaef"],["/tags/右键菜单/index.html","f0652799dff7362707ba43cf787b054e"],["/tags/图标/index.html","9edfa8f93e1ca408dc3995574dfd5f04"],["/tags/字典/index.html","478f43ffc766235301c0425da0a6d961"],["/tags/学习笔记/index.html","21554079deafc2d29896734ce07c8947"],["/tags/学习笔记/page/2/index.html","3f8ed6f111513b6151422a30096db298"],["/tags/安装驱动/index.html","9c253240da077c52b8f7706a9bb76189"],["/tags/成品/index.html","62dedbeafa5f0d25539c856d65239036"],["/tags/技巧/index.html","ba153c12784d0cfbfb1227e9b6eed85c"],["/tags/技巧/page/2/index.html","287e5a17b219a69433323f217158bc96"],["/tags/技术教程/index.html","c7865eca157bae3caaa21b92ea79795f"],["/tags/教程/index.html","42025fca72715aaa4b9e4687ec4ae5b3"],["/tags/游戏/index.html","e8376b3d757a68c509e0d46f893a993a"],["/tags/物联网/index.html","6bcbb3eb95d278767fb89a98f4a36d02"],["/tags/百度网盘/index.html","4cbbe5d396f9ab3a60d390566e18f533"],["/tags/算法/index.html","969dc8e0327e7c7c91dd1e6a67ef3057"],["/tags/系统增强/index.html","598aeb3ac9b8e209d638c5557d65a963"],["/tags/蓝牙/index.html","81f9e3b3579606ed49aeecdaafae2e47"],["/tags/说说/index.html","0a424e7d2bda5138f2afe308a07d07b8"],["/tags/软件激活/index.html","ea965bffc70b59a4b47b5fc786ae826a"],["/tags/链接/index.html","fa6d93250a8e0800d8f9ae3d1885fb70"],["/tags/阿里云/index.html","f41990d2251e46a5a41f51cd73eb425d"],["/tags/音乐/index.html","93e0b53c93ff7883af2d9285551519c4"],["/tags/马赛克/index.html","44dec9a3b5e7129c4ff3b867a49fdcf8"],["/talking/index.html","0313fb2853146ace421901663be0bba0"]];
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
