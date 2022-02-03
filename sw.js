/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","f20be8975351e819bd4e7b30d2b829b6"],["/Demo/index.html","9ffe08a7b7e2449d722db6b6ec8ba4bf"],["/Gallery/index.html","a74b2facb74f075f47f87dcf12457fc0"],["/HTML/love.html","9789a42d65dc9fc0da194361a55dfb2e"],["/about/index.html","23c25e4f4af5698e11a8ee02e866e435"],["/archives/2021/01/index.html","93ef0a5bd44847dd14cfaf9f08982e0a"],["/archives/2021/01/page/2/index.html","3749faa8b2731f39a7d5a0ca80c10481"],["/archives/2021/02/index.html","407fb8a094a18fac2c20be4f17a2d2d0"],["/archives/2021/02/page/2/index.html","a052ffa0e5869595ad0f663975838f1b"],["/archives/2021/03/index.html","8a115d730e0aebc78a7872ced905a549"],["/archives/2021/04/index.html","059b2f96bc19aa09caae9496b5cbee93"],["/archives/2021/05/index.html","d5509987db7cd1e5179519d45c6ab39f"],["/archives/2021/07/index.html","ce989117fdf8627ac89c082454d0eae3"],["/archives/2021/08/index.html","bd0c6c637e1a6a006d9bf259080009e4"],["/archives/2021/index.html","3e3d2348983d83ba0f4bf3940803822a"],["/archives/2021/page/2/index.html","14647e50f66bc21ab4ce6ac4c4b3093b"],["/archives/2021/page/3/index.html","3c4875beacdcb039333b7c6390230b18"],["/archives/2021/page/4/index.html","d2f1ff60c732353503aec2e7927f634f"],["/archives/2021/page/5/index.html","8d7236bf03313052d24502f4a3153e25"],["/archives/2022/02/index.html","de7464c8d06ca4a5889e1242a1c3ba19"],["/archives/2022/index.html","e1ed7c31426bb648273323e9a0aae1ff"],["/archives/index.html","829127a530e287e83539a4c524a373b1"],["/archives/page/2/index.html","0d0d97a179f450e6b1159db92cf6edde"],["/archives/page/3/index.html","557119acb79b8bf4cc0dd9b6dae99b24"],["/archives/page/4/index.html","048a9a3873e0683d3599846058cfbd2e"],["/archives/page/5/index.html","c46cc7cf5ffa264883e5136f7c312e0c"],["/archives/page/6/index.html","14f7ffdf025dbbcdc70a9530bca99366"],["/categories/Arduino/index.html","7d0d8c9fdbbe9ae9509d30c55d9749c5"],["/categories/Hexo博客/index.html","39362ffe994217427883d25403b25737"],["/categories/Hexo博客/page/2/index.html","5e816602f27d9557bfa456acb94cc981"],["/categories/Hexo博客/技巧/index.html","232edecfca181b95624bb798c3d241b5"],["/categories/Hexo博客/技巧/page/2/index.html","1ab8759ec4c0deff674f072307f7f143"],["/categories/Hexo博客/搭建/index.html","24c11ad4d552506b4052c3a00fd103fb"],["/categories/IoT物联网/index.html","9e06f69f7fbbea38ad522a456d1ceef6"],["/categories/PC/index.html","859cd56cfef603dc3741867d2c979459"],["/categories/PC/媒体处理/index.html","9ee5141ea2bbef16a68c9f5580feef13"],["/categories/PC/系统增强/index.html","580786c9825ddeda8a5d307591c32e14"],["/categories/PC/系统镜像/index.html","1d7ba44c76f3a923a4cfab90b6f06d69"],["/categories/PC/软件激活/index.html","33446ab48dac820e55c6b3e8807793e2"],["/categories/Python/index.html","bccb1cf5d1a55ca0e82abf2691c1e477"],["/categories/Python/学习笔记/index.html","eb6c1382f87fc264ececedde5afa0c7c"],["/categories/Python/成品/index.html","1aa736e3fa3ce3cd94b968a2d6092223"],["/categories/index.html","75c5e415bc311d8897fdba421f4b4bac"],["/categories/其他汇总/index.html","bb7269d844c141e7d0a0da12936d6245"],["/categories/学习笔记/index.html","5b787e78b028fcf0551f8c9a33018024"],["/categories/技术教程/index.html","86cc7a00dfa98ba98c7213776119f8f6"],["/categories/游戏资源/index.html","55ca8641a642889f79876bcbdfa3aaf7"],["/comments/index.html","6d10ad1239b60ed2a17a0a3331e004fd"],["/css/custom/twikoo_beautify.css","b5c8a07528ef0a944b87a1a5701ce5c6"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","c860220a7d6810f1fc63f16dea08be89"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/history/index.html","09ad66b17f521a81aa0c2ace71fd40d2"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","1e01265902a80f20c6b8d342d2744d9b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","1a8abadbcf67f1c27160c1f8010529e7"],["/js/main.js","67ef93b7026979d99da673cfd9fd85de"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","1685cd43da0de7abd4a649dd5b2d81db"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","9f465e7dd29ec62dbc6af321882c2b59"],["/js/wow_init.js","4244acb8641a2525f168b604f9ca4844"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","7888d5e5377136c8b4169725fa4ec75f"],["/message/index.html","b46ed2fb324eb059c131f1074e13c051"],["/music/index.html","426d6af7f1344c0669cfcf40021193fb"],["/page/2/index.html","16aa7028691677570db7044099c18406"],["/page/3/index.html","80d278c7c502fe6515a7126265dfc065"],["/page/4/index.html","129b11446e1ed677915abecccd05b507"],["/page/5/index.html","50a237880187794da233a67a9e086be9"],["/page/6/index.html","a8846d3592a8772077aed8afaae709d3"],["/posts/11e4/index.html","7cbe0503fbefbb7780b3b4e4e61ccb19"],["/posts/126239f4/index.html","50a3e6789126d28cbda43ea865799afd"],["/posts/20b3/index.html","c8c4acfc325d980d95767cf631ddc8a6"],["/posts/21396629/index.html","dea6944e5170238e5f706508d0dde7bd"],["/posts/241519a2/index.html","e569e9c93e31ebb165952e991cbef9dc"],["/posts/40cad56a/index.html","abb52fec7df37e81968bf19b2921ccc6"],["/posts/4161854e/index.html","9b17ff3255506e911e0408f17e689bb6"],["/posts/4254dc4c/index.html","a010d785d3042eaa72607f3e2f500f5a"],["/posts/461b0433/index.html","6f0ecbb179f999582cecb175a9a88355"],["/posts/4e5b/index.html","85e0054db978225b4702642a15d8b238"],["/posts/56ce/index.html","88f8aa14d8f0e295598446ee040e75b5"],["/posts/60c319f6/index.html","140cf0c282bd35438458f13e829c86ac"],["/posts/6746a1c3/index.html","35d5d2e32ede0f4b7c6cf38dedbb4170"],["/posts/6c20/index.html","31dcc3b2a359d1d890ec46c111439ee1"],["/posts/73b37fcd/index.html","cd17368c8b3d2db9b7c2ae77da1098af"],["/posts/749a3a09/index.html","b03f83de199087194ab8947ec6dd4d10"],["/posts/7594/index.html","5cb99d284af7846590d7c17e496124b1"],["/posts/77049f2e/index.html","d458b7dbffbe36a301c99243a1c5cd6b"],["/posts/7c82/index.html","fb791576e65927de7fe2a059d5959988"],["/posts/7j9m08/index.html","0c77cc91e2ae4a115af77a1c1fe483af"],["/posts/817b8e0e/index.html","62fb1faa3e9b892ace9603b12d694e5c"],["/posts/844fc5df/index.html","606e2dac135e8f6f3b5d3d69194a7808"],["/posts/8acab12/index.html","95b0fa479c1eb61a5473e3a072e77e90"],["/posts/8b3/index.html","266f84940c0f5adc80fadfbb48577ea5"],["/posts/947ec48e/index.html","616f65be27ff2682355cd52a0affd017"],["/posts/997c/index.html","ee9ff321c9dc05c8b11dbcc38cf27edf"],["/posts/ab43a875/index.html","76f37f8d1d9b8ab5ab6152da46c4b245"],["/posts/ac2c/index.html","54738f7729de07dc5c6e7fad2c4a9ca4"],["/posts/ad79/index.html","b0f5b33c70d09bac2d10eaef74bc0d2e"],["/posts/adf6e4b/index.html","ead255833afe145d1f682bf2b5a5b2a3"],["/posts/aea2/index.html","a0d13b0f35181354a5dd464fea9ee062"],["/posts/b385/index.html","6fb60e543346be7cb194eae625da8b60"],["/posts/b7ed/index.html","0c6e39302c68b7c15fe35a37904e23d6"],["/posts/bc3531cf/index.html","d73911f7669a10e887dd5704fee61245"],["/posts/bfed/index.html","5ab12edf34e88f4bdb058a5ba167f896"],["/posts/c232/index.html","d8549df980fd62e006825ef9057ccb3d"],["/posts/c291af82/index.html","f01d9a4996da33fb0b29a781cd3010b6"],["/posts/c2c/index.html","33c253058b6bd2848050251b5a69b22c"],["/posts/c336038a/index.html","b0c995c4d54e191ff2eb7e8489879df0"],["/posts/caba8902/index.html","9b5c7242de81c2d2ff3caae0402ec2e0"],["/posts/d6c8/index.html","35a02e57e8c3c1b8b3ea10f91b9a3c1f"],["/posts/d9a3/index.html","f79666066b611ced39abd5bbf4017c4d"],["/posts/db12e7f4/index.html","c5cbf999fcd4ae129cafbac329de66e7"],["/posts/dbba/index.html","9aa11257006a400ce2a19cadd903da8f"],["/posts/dcd4d5c3/index.html","92295d08ea907f6e5523a6305aa39aa2"],["/posts/dfe935b2/index.html","ba01831add717f3805027bfe6cf5c917"],["/posts/e46d226a/index.html","c6f2ab9fadd918b0d569771de16d081b"],["/posts/e98f2569/index.html","1801a4682597f1982bd2ee2c18ded86e"],["/posts/ecc2/index.html","e8faefe7fb33e82af23c35fa4e17345a"],["/posts/efaec666/index.html","9ebebfcb969b7c607b00fa00fbc47c34"],["/posts/f20cb9c8/index.html","98ab11fb23ed7d84ccc88bc66a711790"],["/posts/f663/index.html","8174cef25ede7c938313b7c953d279cd"],["/posts/f7a/index.html","e4e284fcdbde219e7d6f849de855e8f9"],["/sw-register.js","84601749fae300d798ece503afc17131"],["/tags/Adobe/index.html","469c0123a632e15a7613717db477e0d0"],["/tags/Aplayer/index.html","7173d944c38c27e895f01f9940ca98f7"],["/tags/Arduino/index.html","0c2582dfcbdd3f920364ea6e1ace8351"],["/tags/GitHub/index.html","82e1763ce66ccccef68f40d8ff7d15a0"],["/tags/Hexo/index.html","a5bef5b11c41a92fc0df15234eaedc4c"],["/tags/Hexo/page/2/index.html","f59135478852ff9dc7885d2feac50409"],["/tags/JsDeliver/index.html","37765fbbbb17907ee032f2ee656dd592"],["/tags/KMS/index.html","fcff11f9d7d71016afabed24b3939754"],["/tags/LoRa/index.html","9571be6ab34318ceb2c744c8a5f96079"],["/tags/PC/index.html","b9b9b43abc7a76c70c31a5e1e9743940"],["/tags/Pycharm/index.html","7ed1751fd8ede3fc5f4127ef0e4b9267"],["/tags/Python/index.html","ece6c94b44c6ba4acbce026c9895b0e2"],["/tags/SIoT/index.html","0ac43e97a138a816e4d043cfd7d4effc"],["/tags/Windows/index.html","9e808e88eb2073953a1a31cff3f8663d"],["/tags/html/index.html","b4ef5492d8e77b708a2907966f791cf7"],["/tags/index.html","b90eebcb7923dc583404f49a8a4c1768"],["/tags/turtle模块/index.html","eed644d6a81b274cab952a97c02fc6b7"],["/tags/优化/index.html","600f7eb0827299558b4fe1b1ef1736ce"],["/tags/元组/index.html","a6bf0debe293880d0e8df6b0a55a494c"],["/tags/函数/index.html","fc7f20efbfdf14cbf2e3458b817aad5c"],["/tags/列表/index.html","37e08ec46e4880ccffb1af66da93795e"],["/tags/博客/index.html","452e34b0a1e5e8c1900e19f75b8cc5df"],["/tags/博客/page/2/index.html","15a2a151bca07e54ee0a2929b3499863"],["/tags/右键菜单/index.html","a64d2cebfb9f693bd8f395deb63a3ce8"],["/tags/图标/index.html","f61e67f9f7955e43f6316800f93df263"],["/tags/字典/index.html","aa60893a29196c3a7afd961460f77d7a"],["/tags/学习笔记/index.html","0d41dae99387aa6f13f9186f74a5225f"],["/tags/学习笔记/page/2/index.html","521509a37e8566183bae329e4e1ded4e"],["/tags/安装驱动/index.html","fdd7ecf40d83611246eced9eedea02e4"],["/tags/成品/index.html","e749e62a9bd6670d9d698fd4e24fb196"],["/tags/技巧/index.html","30931894ef1ec11669dbbc230d981f5f"],["/tags/技巧/page/2/index.html","0c0f36d06dbc697c094a17aefe246ed3"],["/tags/技术教程/index.html","929aa3197b9f1a127096d3fc289e5fb3"],["/tags/教程/index.html","48ac8705fd7d1950fb0b0fa8fc2879e0"],["/tags/游戏/index.html","f90b8e0073d292e4a9620c4ba4b19ae9"],["/tags/物联网/index.html","4546b252f7f61aedfe8ad43dcc9258fa"],["/tags/百度网盘/index.html","bf90ed545be7148cac0829d1ddf126f2"],["/tags/算法/index.html","bbaed1735520244ece56ca0387fff376"],["/tags/系统增强/index.html","1bd04a2175530b2525828ada1878b8c3"],["/tags/蓝牙/index.html","1c10ee68202e9b6943061e1173d2250a"],["/tags/说说/index.html","ebc3ce91bcf6b1969b69341e7f2e5762"],["/tags/软件激活/index.html","c8cf5beeae2d5dec536db4dbd46e750d"],["/tags/链接/index.html","965203511a795533d6d4b0815e02ef21"],["/tags/阿里云/index.html","0c2b7395a68089c68546af435b5e90eb"],["/tags/音乐/index.html","d56fb34eb51e00e43c3e565b94c7e7a7"],["/tags/马赛克/index.html","07afd9e50a795d15c97a0bba9b662c9c"],["/talking/index.html","a9b13e041245e9958df9d0f385d54169"]];
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
