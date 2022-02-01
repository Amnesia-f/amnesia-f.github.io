/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","195739295f1e0b35f5b9ac4f5396e4c2"],["/Demo/index.html","b24920b0a46ffa91177dba307fbc1a76"],["/Gallery/index.html","e234d0b0eed7e9ab7fa01080b9b8e10f"],["/HTML/love.html","9789a42d65dc9fc0da194361a55dfb2e"],["/about/index.html","ffda0f82415bc9967b17bc7fb4d002b7"],["/archives/2021/01/index.html","927734e5fc1f00ba1d3ce0ef78d676cf"],["/archives/2021/01/page/2/index.html","521d35b7869e7280b0699bff98d3efbc"],["/archives/2021/02/index.html","1c65473cc60c4d91c4d8810c918df61f"],["/archives/2021/02/page/2/index.html","07d54c8456e857b980dd172cfe35cda8"],["/archives/2021/03/index.html","f36cda542aad066b2feb017d5662e64c"],["/archives/2021/04/index.html","bb129ec35762013284e20e7733fb4f0c"],["/archives/2021/05/index.html","628ec26710072c41d0850ad8abf711c5"],["/archives/2021/07/index.html","e845127b4714b009294223126931b1dc"],["/archives/2021/08/index.html","f8e65c819eded6c0f7119427e9ecbf98"],["/archives/2021/index.html","65efe82db461ec27f60424a906334915"],["/archives/2021/page/2/index.html","a771cc42c57b3af759b44cbf15987b0a"],["/archives/2021/page/3/index.html","98dda41d5cc745de89ec5d9ec8f1b7d0"],["/archives/2021/page/4/index.html","96a283b97a63fd547a58ccd022ddabd4"],["/archives/2021/page/5/index.html","1b0cb67c9a578b3da2189722dd885d2e"],["/archives/2022/02/index.html","7074617f68ff1079633c6a59ba696949"],["/archives/2022/index.html","c4a02eefb79fd63175b7198048377639"],["/archives/index.html","4e7e909b5b6b66901acaf572a9327f88"],["/archives/page/2/index.html","1c55efb980d351febede910402399888"],["/archives/page/3/index.html","0063f50ce3245a051abe94f34ac825a7"],["/archives/page/4/index.html","35b3a9a2fb23e4ab9f19a2f56f6734cd"],["/archives/page/5/index.html","448ebf101bfcc5ce31e8fab2eec16218"],["/archives/page/6/index.html","1a35bf7950c9ccde24255da1838b0a3c"],["/categories/Arduino/index.html","d07f99c30425970ad4ef03053f69c540"],["/categories/Hexo博客/index.html","45c3a231ba5edec4ff0cc2082d41f494"],["/categories/Hexo博客/page/2/index.html","48df0c7e6de7f792dbfca9f19100cec7"],["/categories/Hexo博客/技巧/index.html","8e9d7abb19df06ae9c816a2e503afe66"],["/categories/Hexo博客/技巧/page/2/index.html","925d54fc13688dbc053bf2dc26f9e116"],["/categories/Hexo博客/搭建/index.html","0bc486ea32898192dff6ee2f2e48863f"],["/categories/IoT物联网/index.html","117881d7e2506857e05a3c0b65c5ee29"],["/categories/PC/index.html","ba03e89514ce84e50a4afe03d3a4e03b"],["/categories/PC/媒体处理/index.html","13971f8838f2fc9e455b4a9ea313d17b"],["/categories/PC/系统增强/index.html","8456254957af210e044280ea39d291d0"],["/categories/PC/系统镜像/index.html","eacdf8ddbd9f1d2da44dce61612ca1bf"],["/categories/PC/软件激活/index.html","d5ab122b48f5f144f99035a0626f7a81"],["/categories/Python/index.html","1c4a2a751a0f0784fa7b96f30adaf1ff"],["/categories/Python/学习笔记/index.html","7aea69af1a095f73459976ec803e153a"],["/categories/Python/成品/index.html","1a6d53193e1e17b6a6d5250ac6a63194"],["/categories/index.html","7ed781a4f1d99f244dcff65519342a23"],["/categories/其他汇总/index.html","1a1107f0e40af4ca954fa6b3f387906e"],["/categories/学习笔记/index.html","6745f64a5115eeab71758090df8eda19"],["/categories/技术教程/index.html","073112ebefd32f287b76b9307ecfbb0e"],["/categories/游戏资源/index.html","d5bf46ebd723235c1d3442a010acc342"],["/comments/index.html","9a09a4a592aa9b95cea565e46bdb452f"],["/css/custom/twikoo_beautify.css","b5c8a07528ef0a944b87a1a5701ce5c6"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","1be40ef63ffabb35de306f1dc2f5c5a3"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/history/index.html","aac67ad478a473720c280845b6033d85"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","62e99b2b339123fe685405fba2b007f8"],["/js/main.js","67ef93b7026979d99da673cfd9fd85de"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","1685cd43da0de7abd4a649dd5b2d81db"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","9f465e7dd29ec62dbc6af321882c2b59"],["/js/wow_init.js","4244acb8641a2525f168b604f9ca4844"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","5404e29ba9c51a3e2bc254871d04881b"],["/message/index.html","9d2ef90bd2014efda2c30f9035cdce92"],["/music/index.html","6fcf04588d93e054baa5b9091f08ae52"],["/page/2/index.html","3e875f3075dbc46df174f7708e837530"],["/page/3/index.html","b72aa3734ba613c637c61f46eefc4d2e"],["/page/4/index.html","2ca37829f47b61a027ebdc2ab5661635"],["/page/5/index.html","7b6bfdcefc44b8fe84c3382ea7595b64"],["/page/6/index.html","ce70f79c7fb33db762e462d9a4204be9"],["/posts/11e4/index.html","4555f7fa547092d91e32002111097bf4"],["/posts/126239f4/index.html","840b7df324780fe030dea6c810f165d3"],["/posts/20b3/index.html","700173af02b80368129c1f8e27cdd043"],["/posts/21396629/index.html","8685bea73467b13d80fca640da93ec0a"],["/posts/241519a2/index.html","b7828eb546c172f05efaea3bdf79eabb"],["/posts/40cad56a/index.html","e38591f391aa5e823fe6d75b5d69ead4"],["/posts/4161854e/index.html","43ea79ad10759e7f279c46327980c4a4"],["/posts/4254dc4c/index.html","1d0b0d6d64661c9827212b2ede6a04ef"],["/posts/461b0433/index.html","557397124a27e96a9b4f163a6afbdab2"],["/posts/56ce/index.html","9f073e91af7ada852ca13c1bad99fe30"],["/posts/60c319f6/index.html","da63a375dccc0fcafd8362077675d7a6"],["/posts/6746a1c3/index.html","d42414637d990f76d3d82cd5fd86d535"],["/posts/6c20/index.html","d297758bc0670e80cfc9bc9722e11660"],["/posts/73b37fcd/index.html","5560564b57cd58afa9d14753cbad2358"],["/posts/749a3a09/index.html","54c76afe19fc1aa4d7cab7a4be27d35e"],["/posts/7594/index.html","bed3d55f40503fe48247b805af101824"],["/posts/77049f2e/index.html","b99965517235660ed9bcf7a2d737e51c"],["/posts/7c82/index.html","865458021ddf4d3c475614d477af3953"],["/posts/817b8e0e/index.html","af16dec4186f2e3ec467ce7645181d2d"],["/posts/844fc5df/index.html","e075e328adbd014d3fd32acbc3a27649"],["/posts/8acab12/index.html","b47d82b9cfd1970f54fb1508675d1528"],["/posts/8b3/index.html","ef570ac72ccb16b5231d4f81c10d0395"],["/posts/947ec48e/index.html","b1d1f021b398e9c254e2faac49148477"],["/posts/997c/index.html","803acc1d7a530f6b291c95fe473f6105"],["/posts/ab43a875/index.html","cf2f207641f21b6a5ceede846a956c3a"],["/posts/ac2c/index.html","8d24bb327e4b7296929b418a4c46f22a"],["/posts/ad79/index.html","2e200a8f3db6be31d37a9173c17fabb9"],["/posts/adf6e4b/index.html","64ef2dd9eb602169edd9833e20915428"],["/posts/aea2/index.html","d84f0cd0756d55574706aa264941147e"],["/posts/b385/index.html","ed280e46d9c4fd0dfa59a40baa92933d"],["/posts/b7ed/index.html","9aa19be97e9aa26240ca94874ae24afb"],["/posts/bc3531cf/index.html","fd213d2bb38d385a2a980b9ac99b1cea"],["/posts/bfed/index.html","9cac912b358704e4a2987ec720e8153f"],["/posts/c232/index.html","1ebe8fc9b250f244650376a19ab8fa0b"],["/posts/c291af82/index.html","7ae3f3b49d811210b5dc3c30a6830bf5"],["/posts/c2c/index.html","6bb708c5535c33f41f9ba401c60b8c2a"],["/posts/c336038a/index.html","7e9669397d167a82fe67aa7d8934b3b2"],["/posts/caba8902/index.html","900d60602592980098c20fce1e92b898"],["/posts/d6c8/index.html","f113a09612e0de665343d8203146734e"],["/posts/d9a3/index.html","82ceb264fcd5ece959ce39f7139bc1de"],["/posts/db12e7f4/index.html","a840be72090a3b1188192ed677ffda0c"],["/posts/dbba/index.html","8ba1276ab071656765aeec7193003967"],["/posts/dcd4d5c3/index.html","9d781e4bc81183f647ea2f890b4afb89"],["/posts/dfe935b2/index.html","dc733320c255cd2617b64b17889924d9"],["/posts/e46d226a/index.html","a2ce7a85c014876ac1122b1ff2df734c"],["/posts/e98f2569/index.html","4baa9b3714a035a049b91b82aaeb4e5e"],["/posts/ecc2/index.html","73680e80fb1a085d0a8dbbd33fdc2cb5"],["/posts/efaec666/index.html","d0b733901bf490b4313553dacf00b362"],["/posts/f20cb9c8/index.html","ed3f47ed1f4b580716616e89cf856758"],["/posts/f663/index.html","3b3b9b5293480ca335a9e33c0cee6e61"],["/posts/f7a/index.html","734a4239794b6efa0c48bdecdc3f99a5"],["/sw-register.js","2747041ee555a7c2b2af94944ef9f9a5"],["/tags/Adobe/index.html","14bb0d508eaa0915b1bc9646fe25966d"],["/tags/Aplayer/index.html","c6de62f9e516739b5909abf335c15141"],["/tags/Arduino/index.html","cd675aedc2c61054b2de8200ad322c84"],["/tags/GitHub/index.html","2913edcf7ed74aa89a27b18487448085"],["/tags/Hexo/index.html","17097d0f6705d9a722b0d32c87e9e702"],["/tags/Hexo/page/2/index.html","c3115aceaa398bc86d9adcf2c058fec6"],["/tags/JsDeliver/index.html","4b3ff23438f259da0c2213d122dac4fd"],["/tags/KMS/index.html","93363b7d66b02ac677b160c3fc1cdeac"],["/tags/LoRa/index.html","c9ef737801ac00045f7526916259d64f"],["/tags/PC/index.html","e38e30c7be7bfad2e10af96bfd39c590"],["/tags/Pycharm/index.html","d9a4783646cae509c092a87bc3dd3122"],["/tags/Python/index.html","12d0d086e7a47d36137f2c6a04a198b7"],["/tags/SIoT/index.html","9a8034d556e571bf705044c452445c4b"],["/tags/Windows/index.html","9e97bdbe0d080d3be92765c57c440e6c"],["/tags/html/index.html","8bc308e86f56e8a5f470e6db1a658f2d"],["/tags/index.html","13fe96cf39e3d1d52debfffdd2c77a59"],["/tags/turtle模块/index.html","1a1219703676c7032f1d96ef4f1613b7"],["/tags/优化/index.html","594d30b3be1a84275584ed9670987d7d"],["/tags/元组/index.html","fbdd21ac26345fd40c841e6aeb0d037b"],["/tags/函数/index.html","218bcbe36b204d25a08212ff7a0f472b"],["/tags/列表/index.html","1477cf65c1e18e821eaab9c34e40c384"],["/tags/博客/index.html","1c095cdb6d837a332f31ca3f9ee4fb80"],["/tags/博客/page/2/index.html","5aa4ff99b61ce507383879ff8aa2b79f"],["/tags/右键菜单/index.html","b6c421f5faf7a785968ce25a108abe71"],["/tags/图标/index.html","e5962a3ecd760c9f0c930c51360a6b61"],["/tags/字典/index.html","a43b22025dc73a27b81cb71c522c3d0f"],["/tags/学习笔记/index.html","022eccd546ce8350f9b63343d5cbe6cc"],["/tags/学习笔记/page/2/index.html","6dfaefa4eb8af719d4e8d89e3e08f5bd"],["/tags/安装驱动/index.html","32ac1fa524637a3b7a2fb0d6b90b03fc"],["/tags/成品/index.html","8ee8e5a625e96959ba2ccb96a8e38eeb"],["/tags/技巧/index.html","6d6b05180863659b2bc4674be0e1e222"],["/tags/技巧/page/2/index.html","b8b28f813c0bb300de6aa8769f64aa22"],["/tags/技术教程/index.html","9415fb4f8360a7707e0dde54d1679f64"],["/tags/教程/index.html","2f8c6ebc9a976143af20f3a23ef7e6ba"],["/tags/游戏/index.html","2e0e25de76d0599e33441a1a27dd42c2"],["/tags/物联网/index.html","eef50a5d95cd9d423bfcb2b20036222b"],["/tags/百度网盘/index.html","63d34a2831fae6b186da44c621bf459f"],["/tags/算法/index.html","1b691b3a46e01d0f4615acce0b55280a"],["/tags/系统增强/index.html","a1c06541b2b7b7196f5ecf406b640abd"],["/tags/蓝牙/index.html","d95cbd2166016a45efedf507bdffa1c0"],["/tags/说说/index.html","6fd2d4ce68ec20d1b4f35d5d1832bf35"],["/tags/软件激活/index.html","1727ea6532261e183e8889f0f78002a3"],["/tags/链接/index.html","91f54fcc05ce66856b5890ef8769303a"],["/tags/阿里云/index.html","822c2a6f76054167589783d28b27cfe2"],["/tags/音乐/index.html","3a5bdee4fee3d4f6528999f18f704c78"],["/tags/马赛克/index.html","8bcc81efd8967992d62a1e2230c1beea"],["/talking/index.html","a23cbcb78e1c8a44eb1b6b0a67106685"]];
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
