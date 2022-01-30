/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","8f6bddce32854bf59c9a08c8bb587dae"],["/Demo/index.html","84b6ef8e2f9b041838971834babb3216"],["/Gallery/index.html","2738299759ad002a658b64407b512485"],["/HTML/love.html","9789a42d65dc9fc0da194361a55dfb2e"],["/about/index.html","e5b8509c7db8a9c7e128fb8d12fd78aa"],["/archives/2021/01/index.html","2f505eea60715376aa1d717bbd1374e5"],["/archives/2021/01/page/2/index.html","a9b8050d44b51019febc6bc61f85c887"],["/archives/2021/02/index.html","f93e476beee70901c68b44ec04318996"],["/archives/2021/02/page/2/index.html","9dd5f7db27efa27d567e7ea277764b79"],["/archives/2021/03/index.html","938e715b6dd29ab33a516cca3f48660f"],["/archives/2021/04/index.html","d899b8405a8cdf563fdaf94fc214f960"],["/archives/2021/05/index.html","5aef83a302209ba9625bf77754bd5cc2"],["/archives/2021/07/index.html","87f0c6bc99404473f82c2ab271f35621"],["/archives/2021/08/index.html","17a8054852f7fcda07b4f508eb0d4c3c"],["/archives/2021/index.html","fdccc35b8453848254100e1cd9abc0cc"],["/archives/2021/page/2/index.html","59b3c654695a8eb9195e0cbb83428072"],["/archives/2021/page/3/index.html","f601d85601f0e89c89b8549ab0c7d890"],["/archives/2021/page/4/index.html","62d7cf5b4d56919738dc832f335c9d42"],["/archives/2021/page/5/index.html","dd53b980c7609f269238cf6c5f1b9dc4"],["/archives/index.html","78991d426d119c157cf529bd06a33469"],["/archives/page/2/index.html","04e383818418d2dbaf678aa32b1fa926"],["/archives/page/3/index.html","e2c3f915bff35524e67b34fa9d40398a"],["/archives/page/4/index.html","ba5ebbeb1c420a58a64f387560f9afc6"],["/archives/page/5/index.html","0997647390f69cbc5e48c64b0cae83da"],["/categories/Arduino/index.html","4a416ef4054feac6db7dad33fe591091"],["/categories/Hexo博客/index.html","49cdb12d849de3493a99e1a39f6230ad"],["/categories/Hexo博客/page/2/index.html","7791908e518cfd0b081ca615399092c5"],["/categories/Hexo博客/技巧/index.html","2f7c125fb723a6407f6c4b065213e59a"],["/categories/Hexo博客/技巧/page/2/index.html","db22066beb0d05344cbf09cb0749837c"],["/categories/Hexo博客/搭建/index.html","f7a82685d4c67445299433c4c0e3738a"],["/categories/IoT物联网/index.html","6809afeaf5c64eb166982457c31bf282"],["/categories/PC/index.html","07485b949e9c04d289d60b252501c46d"],["/categories/PC/媒体处理/index.html","0953a93b3591ea5e62263d122fce1e7c"],["/categories/PC/系统增强/index.html","98981bd80797fad76352fb44d1a9bc32"],["/categories/PC/系统镜像/index.html","8996f96c1f1d038c19edaf575990dd2f"],["/categories/PC/软件激活/index.html","d005ca1b4c0876a8d760b2dc3920153c"],["/categories/Python/index.html","bd39d9bfda4f6d615162b4dd34129d65"],["/categories/Python/学习笔记/index.html","43af7e48a76187d87ac86e8dacba8a64"],["/categories/Python/成品/index.html","73bac9d7dd100ef5236e9b812f49e641"],["/categories/index.html","f9eebc445049053d088060e576abf460"],["/categories/其他汇总/index.html","e3aff91a977f8638db4bc9adc4a607a3"],["/categories/学习笔记/index.html","07b62dc52a1d51b59470bc247da0eed7"],["/categories/技术教程/index.html","bb964c0bd7258dcac29e84749fba648a"],["/categories/游戏资源/index.html","bd96b02344e9c57adcdd79879aa7999a"],["/comments/index.html","927aacf45088e2b10c01772a0375e602"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","1be40ef63ffabb35de306f1dc2f5c5a3"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/history/index.html","e774b221a97371fb1c27242a34cb4364"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","4de212e76d4458ba15b75cc594d4545e"],["/js/main.js","67ef93b7026979d99da673cfd9fd85de"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","1685cd43da0de7abd4a649dd5b2d81db"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","9f465e7dd29ec62dbc6af321882c2b59"],["/js/wow_init.js","4b342a93e0b8dec1e39f9ba9d1b2e541"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","85bb6b0a7abf7a8326af273eafa0188c"],["/message/index.html","5f68232a837471b27f85e2dd169893ed"],["/music/index.html","43858f0d381e1215cfe06256e30c0d57"],["/page/2/index.html","eb0fbb675cf71ce92ca0d9b6b2915d9c"],["/page/3/index.html","03d8b9d60c6324c2cbecf51deeeec219"],["/page/4/index.html","98e0931e3098d0f90a1678e69676638a"],["/page/5/index.html","199f4f6519ba3e5480712073bbd3b1a0"],["/posts/11e4/index.html","550501816c63aa4926f9f4b5390e2753"],["/posts/126239f4/index.html","64a9446a0b0b0a96df6c2a70f7ca644a"],["/posts/20b3/index.html","26912c3634649f749ed9be563ac46e0b"],["/posts/21396629/index.html","7be14f30b1391dde3f1c104812e14880"],["/posts/241519a2/index.html","a69afb3245a819015bb3e6fa7ac245d1"],["/posts/40cad56a/index.html","41773ff58cb22e6358e25fd50a564b8d"],["/posts/4161854e/index.html","83b3f88fd5e28270486efc26a6915412"],["/posts/4254dc4c/index.html","219d64bf055904f37c513ef89ad44171"],["/posts/461b0433/index.html","a5c6e90ba6255ac00d14f4f73496eb0b"],["/posts/56ce/index.html","1f754f5220dfb818b6a05c65c7acf447"],["/posts/60c319f6/index.html","3232428bd8e082531e525f3aecc99450"],["/posts/6746a1c3/index.html","9da28c85b8b06f54b2521f243550b2d3"],["/posts/6c20/index.html","963a75879d656c6df41a6d686ec6d968"],["/posts/73b37fcd/index.html","61671690d2b2684e5ba712da26c9d75f"],["/posts/749a3a09/index.html","da1a9d4662d97913e9a9a4e578e34875"],["/posts/7594/index.html","c08d818c8aacc2a5481d17c1c7da6b69"],["/posts/77049f2e/index.html","4d1565f40d5c363d979545df21cc12b0"],["/posts/7c82/index.html","96aaa472bca628417818b593d987889c"],["/posts/817b8e0e/index.html","82289d3cb014984354fc1ce5a47dfaf6"],["/posts/844fc5df/index.html","493b7bea1cee07caba5e5a9803b780ba"],["/posts/8acab12/index.html","2cb0527c60c46abdb0928ba1a12ab4bf"],["/posts/947ec48e/index.html","7011830671f4f6901a54e963e3bce5e2"],["/posts/997c/index.html","ddece35c876de007fb8f4c41b6909f4b"],["/posts/ab43a875/index.html","02ecca66a68ec4a78d93ade0106ccf0e"],["/posts/ac2c/index.html","ab3d14708c46f2a3f26a16cbe827bbea"],["/posts/ad79/index.html","232933cb5b3f563c4f3a43a31d543d8d"],["/posts/adf6e4b/index.html","b92375ab29c083c545c7c2f5f30c8343"],["/posts/aea2/index.html","f3ea404a529dcad03271680424553414"],["/posts/b385/index.html","9d5b2b45f7e8ef8cb0eb92fbe86f220b"],["/posts/b7ed/index.html","a5df86c9a9ad44799d118b3960b2fda2"],["/posts/bc3531cf/index.html","79540705f93795bfc21ca4f90409564e"],["/posts/bfed/index.html","742653fc30fb41b73b366d35ba26381f"],["/posts/c232/index.html","8cfc071c5dabaa9345d4a697cf9d572c"],["/posts/c291af82/index.html","e6676bf44acb26d64018b9bddbee27c5"],["/posts/c2c/index.html","d8221a47fbcb50f16503d5979f67c15e"],["/posts/c336038a/index.html","74f71168e77d51eae16708f35ea8c10a"],["/posts/caba8902/index.html","3cd546d905472eb52f99e40e5ddf1a9e"],["/posts/d6c8/index.html","af7bcce7af4cbb4cdb3dde6ee18b52c5"],["/posts/d9a3/index.html","027ca542ca213bb4896bee208ad0b3e6"],["/posts/db12e7f4/index.html","983167e050c47b5bbc8cf15332760f5a"],["/posts/dbba/index.html","7f060fbe515b854d96ab4dffe9ca6864"],["/posts/dcd4d5c3/index.html","de5af0462d7d8b476d6cffdb131bf967"],["/posts/dfe935b2/index.html","6e4d72e1f798a9752d21c7cafd631255"],["/posts/e46d226a/index.html","60ca1419b43f88c8c58407d760b0b257"],["/posts/e98f2569/index.html","aede6098feaca871952b7de701f280a7"],["/posts/ecc2/index.html","c0f475b2543cafa888a93aa8b6c6f636"],["/posts/efaec666/index.html","149e32e7d4d42895c634922c0bf3388c"],["/posts/f20cb9c8/index.html","aec6f6cc2f0052056b526fa74f629198"],["/posts/f663/index.html","dfba3bd33f79897969038bf899fff47f"],["/posts/f7a/index.html","d66e451b8b670802fd89ae51bb900b0b"],["/sw-register.js","65f766eb9f9868471bfb033d5a0ae9f8"],["/tags/Adobe/index.html","17a083c65d990584a2a2c03ac72917d8"],["/tags/Aplayer/index.html","10a8229d2d6bcf1adf1e3c29d3c71042"],["/tags/Arduino/index.html","e84918bd3fdf392a6a5a9bf978c23ff9"],["/tags/GitHub/index.html","28c004927c9d86788b54ba7cb18f49ca"],["/tags/Hexo/index.html","c2f3e0aa82cee04f0c43e947d13f986f"],["/tags/Hexo/page/2/index.html","43876919021945824a4dc027421c6e3b"],["/tags/JsDeliver/index.html","c42fbc1bf68574225b498762ca85c70f"],["/tags/KMS/index.html","25609fd68ca12b99623d92258f48329e"],["/tags/LoRa/index.html","eeba5bc91256abd799419239595eb663"],["/tags/PC/index.html","04ce4bb143357523e67691f8eee9103a"],["/tags/Pycharm/index.html","0d8078fd117c4b960ecf135bd3d860a5"],["/tags/Python/index.html","98a87c0b764761ad8f9cccc022efb6d5"],["/tags/SIoT/index.html","a5862432c1d27a5e185abf58340ebd41"],["/tags/Windows/index.html","61895a1abd7cd640afa973e37d713a03"],["/tags/html/index.html","35ef88159ed70eb6a854a64cd5ee0709"],["/tags/index.html","7312476671f9f60099ba5681ec8b478c"],["/tags/turtle模块/index.html","bf61aa11b0acfd68e45594775a487cb0"],["/tags/优化/index.html","78173d8bbc8751b356e5ed4e0061c4b4"],["/tags/元组/index.html","fee5946cc02bb30c5d374efdad1f343b"],["/tags/函数/index.html","2c812f957f9d374896374905f9dd2e16"],["/tags/列表/index.html","3bcd407fd2ada4c1d7ac1c990f0c5a4d"],["/tags/博客/index.html","4bba8ef893d5426080cff68036ab069e"],["/tags/博客/page/2/index.html","0e23d43fc63956720ac7ccb0410e6fbb"],["/tags/右键菜单/index.html","978d8257b89067578e65e23f8cbe57c5"],["/tags/图标/index.html","1e82d12098700fc1e5faa47347cf8f76"],["/tags/字典/index.html","dd69c9fd5b02dad9de4a408da463c428"],["/tags/学习笔记/index.html","843d0d1087925809378dbbfa1b6d8aa8"],["/tags/学习笔记/page/2/index.html","ff17d16c3dda582f66c1784dbb9458a3"],["/tags/安装驱动/index.html","1031da73b8d45dedb4090e34c72b144a"],["/tags/成品/index.html","efcd39229a2916bfb616dddea1d9663a"],["/tags/技巧/index.html","56839e69885762bd872d5e666c0be695"],["/tags/技巧/page/2/index.html","9f662ac783dc2fc66a06af6a09a2df14"],["/tags/技术教程/index.html","19b32f1e26f85a4ff73c14636853025c"],["/tags/教程/index.html","272d4e585ffabd62f59be3b26815d624"],["/tags/游戏/index.html","73b2bdcccb0ffd6c26562dd57ab02463"],["/tags/物联网/index.html","56750bcf39d13bbe6d80dd0cd0d3d2c9"],["/tags/百度网盘/index.html","73804db6aa7591e45fd1af1bc85d79cd"],["/tags/算法/index.html","5e67cf29561ed8cc1bacaa123b7f2aed"],["/tags/系统增强/index.html","80cfb7842a752b11f703786293c11f02"],["/tags/蓝牙/index.html","44bce30044e4d9116540d14cb38ad79b"],["/tags/说说/index.html","d38bed2826410f4dfb08bcb3607b87f7"],["/tags/软件激活/index.html","fcc2a1945ea4961597b847b69bb02bdb"],["/tags/链接/index.html","cad3dc361d19c11012addc6f91ccb1ce"],["/tags/阿里云/index.html","a56a9547462e81647ea47f3a8d794020"],["/tags/音乐/index.html","56a85485be659bb5b63cc90a79ba9009"],["/tags/马赛克/index.html","2891b34f10b70ebb5bc333776d462b84"],["/talking/index.html","364bceb675a00cf2665da003c6021ffa"]];
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
