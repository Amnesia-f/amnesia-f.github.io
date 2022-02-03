/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","221d46f03abf6abb7916ce5edb1c2279"],["/Demo/index.html","c8b51bf23053d0404bcc17fbd0a3600f"],["/Gallery/index.html","ca324c1d9c46828b6aba7cfbf798c146"],["/HTML/love.html","9789a42d65dc9fc0da194361a55dfb2e"],["/about/index.html","2fbe3b8852404c1d4451c9643f4638e7"],["/archives/2021/01/index.html","23e719236a9dc46f0219fed9afb3e1a1"],["/archives/2021/01/page/2/index.html","64edd5d5f792fe93501d116791decc41"],["/archives/2021/02/index.html","1c2eb747bd0738febb6fe9f18b5afa7a"],["/archives/2021/02/page/2/index.html","8ec6c9357a7bc11618904be2bc918f7e"],["/archives/2021/03/index.html","80518595d54628439118cc2bc99db5f9"],["/archives/2021/04/index.html","6709a3f482c8c384fbe23501df1226be"],["/archives/2021/05/index.html","73ff0633ec7b53b42dddddda8e79a22a"],["/archives/2021/07/index.html","5fc8583fdbf55be3ce1c5bf9c03a9576"],["/archives/2021/08/index.html","026cb537d270968b77f8ee6473aba04d"],["/archives/2021/index.html","6c0b39ac9d2ee602b3e579a638ae7da9"],["/archives/2021/page/2/index.html","d3b53ddb9e14c9c4b90d7065b67d8ef9"],["/archives/2021/page/3/index.html","6da110fc007917ce403522c0d4914a6c"],["/archives/2021/page/4/index.html","0963b3de6deaa2d4947ed88c40c02405"],["/archives/2021/page/5/index.html","b0efa54c0a957e775f0adfc9c3c0846b"],["/archives/2022/02/index.html","1345e792d92e99533a0d74fd28810a6b"],["/archives/2022/index.html","d21b321d92f133102ded1cb7b8e754ee"],["/archives/index.html","3752f8570bcbc321bed43faf6f9ff7c2"],["/archives/page/2/index.html","a846d6830acb5ee7e322213105b96663"],["/archives/page/3/index.html","6815bb3a907ecd9e2185964b579cb1bb"],["/archives/page/4/index.html","7e3deab68c5687302aefc12fb2e4d529"],["/archives/page/5/index.html","6a21e647ab574a7857311d8251bd045d"],["/archives/page/6/index.html","bfe234f28a2bbcb015ed2ea12e4e8e8b"],["/categories/Arduino/index.html","523faf656daa5320cf6b40dbf8cdb149"],["/categories/Hexo博客/index.html","7b03f337d16053fccb92cf26aa296bba"],["/categories/Hexo博客/page/2/index.html","8da1bfed5188a3b50ddef53a963ecfcb"],["/categories/Hexo博客/技巧/index.html","86c9cb5a6a3146829023457d3f3e0f59"],["/categories/Hexo博客/技巧/page/2/index.html","0d6b8e1ce813d4c7d24aa3a56569e0c1"],["/categories/Hexo博客/搭建/index.html","b5802de35b265a6d7347cb517b104c7b"],["/categories/IoT物联网/index.html","e805a9c70f29cd4c41ee543be82baea3"],["/categories/PC/index.html","2ae2a13698b949284750b01c25782b39"],["/categories/PC/媒体处理/index.html","d0691c4b9084d3aad4fa63373d07147d"],["/categories/PC/系统增强/index.html","554b9b8a8d3356be25d01f94786fd1a3"],["/categories/PC/系统镜像/index.html","3175d36dc83ea11020f1d07ef40be87b"],["/categories/PC/软件激活/index.html","3f8fa267356933f01922809b4e89c07c"],["/categories/Python/index.html","b824858605ccf38c0a939f0bf65d6b4b"],["/categories/Python/学习笔记/index.html","0d56985bd21060ec3ee3fc934cfba23e"],["/categories/Python/成品/index.html","5a347c36a533bde9cbb25c447ab5c540"],["/categories/index.html","fa414ac194d9af37eb986bef597e718e"],["/categories/其他汇总/index.html","bc4d814a37907e9fd978c18e2a7383b0"],["/categories/学习笔记/index.html","fb4679a056de8a02ea682cb096b463c3"],["/categories/技术教程/index.html","85381991c06ec473d1e4059f01247b0d"],["/categories/游戏资源/index.html","b05309a18cbbfa85cc876ca19745b80a"],["/comments/index.html","fecf2b4e86a917f364760c5cdd105e73"],["/css/custom/twikoo_beautify.css","b5c8a07528ef0a944b87a1a5701ce5c6"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","c860220a7d6810f1fc63f16dea08be89"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/history/index.html","49f32c723da09ea5b61a55092ba70f6d"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","1e01265902a80f20c6b8d342d2744d9b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","afcb93fc89fc586685193e697e9d6981"],["/js/main.js","67ef93b7026979d99da673cfd9fd85de"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","1685cd43da0de7abd4a649dd5b2d81db"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","9f465e7dd29ec62dbc6af321882c2b59"],["/js/wow_init.js","4244acb8641a2525f168b604f9ca4844"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","aee6b5d8511635d38b833f9a609b7e27"],["/message/index.html","c88cebee997a37fdc544aff1ecc87456"],["/music/index.html","4aa34e481827a40f4fc9d803d7f68016"],["/page/2/index.html","e345befaae1467deb2034adc006a9385"],["/page/3/index.html","a0301417dc19b4faa3a0a1272d2b4779"],["/page/4/index.html","12434aeabcf05e5380df21527c213f57"],["/page/5/index.html","f3aee1211b3a47b4599c77982559a949"],["/page/6/index.html","7390a85fc71e4e9eadef56e38498fa2f"],["/posts/11e4/index.html","4ff13261cb8334ef5645b04d2378a9b5"],["/posts/126239f4/index.html","85537d2b798e065193f6d8c2a718a834"],["/posts/20b3/index.html","b56c3772a960bd5df3baa105eafb2fb6"],["/posts/21396629/index.html","62ab9212c546d6bd159bda4e14e13bf5"],["/posts/241519a2/index.html","717d71aaabb9a7466ef9571f0b757a3c"],["/posts/40cad56a/index.html","9ccbe8647947e11291094a0f934a24e0"],["/posts/4161854e/index.html","ab7dfc57d47edb1962e5cc3b78be2ced"],["/posts/4254dc4c/index.html","1f92d4323be9e8cf3e8c98f80db17cbb"],["/posts/461b0433/index.html","0cf358e5e3be365f63c17829cb1d9378"],["/posts/4e5b/index.html","65da978b7a010d82fb2232108cab9707"],["/posts/56ce/index.html","362c7eec81066ba9fefcb90d49636c9d"],["/posts/60c319f6/index.html","23298915918dec2836c43621b7acc27c"],["/posts/6746a1c3/index.html","1ec3aad75f94631f4bedc29209932c2a"],["/posts/6c20/index.html","79ede40fd852c3045b98840f3056dafd"],["/posts/73b37fcd/index.html","39ebe40f424f82a15f4527c3c4ef9ff3"],["/posts/749a3a09/index.html","39525d1e95f4bc3fb35cae0fdd2bee70"],["/posts/7594/index.html","44f465956089acdd8af61aaad44e1561"],["/posts/77049f2e/index.html","4b1a8e1ca168a1f1cf6679ca0e570702"],["/posts/7c82/index.html","23d90ccd00b6946021b5b1466a99751c"],["/posts/7j9m08/index.html","819d1ce7fa4c351a4232ab8a26d00a1e"],["/posts/817b8e0e/index.html","af988d3d03895240d2ae73f35da21c42"],["/posts/844fc5df/index.html","feb2172cc3482700947095cefe48c926"],["/posts/8acab12/index.html","6f18b3033bbf52582e24945c4d153b6a"],["/posts/8b3/index.html","53fbb3519425f038f2bfe8a862852d58"],["/posts/947ec48e/index.html","8ddfecc7f1437770bf235c07fbe00c78"],["/posts/997c/index.html","55bd35b802d52b30d32c742c9144721d"],["/posts/ab43a875/index.html","fe075b01a936af0de31a2dffc8e5664b"],["/posts/ac2c/index.html","53e6f00f94af262d3d883c7d0ff89bdb"],["/posts/ad79/index.html","a4e8d0ec95d6231c2cb227336038f1f3"],["/posts/adf6e4b/index.html","b08a809f42207d8e112092c270573937"],["/posts/aea2/index.html","df68fd5dd5d6270ce78d9e053ac756e3"],["/posts/b385/index.html","95c7e8f8cf260204d6ea90d4494a4c8c"],["/posts/b7ed/index.html","5e50903464f51a0ea256c1ae38c7e9f8"],["/posts/bc3531cf/index.html","d1313c54273b211a524854a62a680d9c"],["/posts/bfed/index.html","f4bf14a20c389550a6a51fcb6ed89bdc"],["/posts/c232/index.html","0a9261104ce2768f681e213b15cf9d36"],["/posts/c291af82/index.html","ecc63c56868eee690ecf7b70632cfed7"],["/posts/c2c/index.html","d7230c02fc6235e3889277a1f5941cb9"],["/posts/c336038a/index.html","e985b889036857477bb8a5be2bff1507"],["/posts/caba8902/index.html","c87766074d5ee331a646a35c6566581e"],["/posts/d6c8/index.html","a9a6fa66561fe431e7db2b083da4caeb"],["/posts/d9a3/index.html","23f56048267860ef5b49255be451679f"],["/posts/db12e7f4/index.html","9d532d5e1302860e364a8f950f4e5084"],["/posts/dbba/index.html","cd16a6b313ba2ec226abf9b84e6c03bb"],["/posts/dcd4d5c3/index.html","a2611dc68d1050f0d95d21e6b30d1ae0"],["/posts/dfe935b2/index.html","bfcaa949b6a4123f575f2b91feb37190"],["/posts/e46d226a/index.html","28ba93302be67930727ab9e1c4ce5810"],["/posts/e98f2569/index.html","5347b98758ea7aae76f5822572f97e1f"],["/posts/ecc2/index.html","d5b51a375b625417c713b095179fae57"],["/posts/efaec666/index.html","7abcb303c79e835160f0b75914dc1a6a"],["/posts/f20cb9c8/index.html","f0c1d9eb1c9f84cd18487742d0e516a6"],["/posts/f663/index.html","001e9fbb698678ba65370f8f089e3ad3"],["/posts/f7a/index.html","76162a25458a366bbbd732e6747e5808"],["/sw-register.js","3f07480b9069f5bf4731dd9cb7aba4f5"],["/tags/Adobe/index.html","eb64afe03c8d4e6b880a3c8b17f08c86"],["/tags/Aplayer/index.html","959f66bb7804547c01867da773be3735"],["/tags/Arduino/index.html","a3c8ee1082e4661310c0d9132021f09c"],["/tags/GitHub/index.html","5398b7d101562dd2255f3d0927180ecb"],["/tags/Hexo/index.html","ccca70a901477b39ea2711da9e3fabf3"],["/tags/Hexo/page/2/index.html","4b9340de1272c66257dc4ad016361a15"],["/tags/JsDeliver/index.html","f2e4823d904bdee292f5034c2605c372"],["/tags/KMS/index.html","e4d07808ae30f7b590fc61f272baa1e7"],["/tags/LoRa/index.html","3509af9d7881c86bd102e0073c777630"],["/tags/PC/index.html","758dc69373ce9bb8e9ca37ec521aeda2"],["/tags/Pycharm/index.html","c4f6ebf57e10cb72056513809528aaf3"],["/tags/Python/index.html","2095b95294c1dd930c08a1cc841309f9"],["/tags/SIoT/index.html","70db4614866c10bab3f0125d0dedd1c2"],["/tags/Windows/index.html","6823ad7f4bb4f1b61e6506357ca29d72"],["/tags/html/index.html","9727640f77010890f2fc2cb68d17d110"],["/tags/index.html","72db7e579832d55a4e4252e83aef7476"],["/tags/turtle模块/index.html","87b0d15477131e04f0837a82e44b98de"],["/tags/优化/index.html","3b6c5eb1e014731f5705faaa9872b9e8"],["/tags/元组/index.html","8594ae5ac0a350befe51a347f3924271"],["/tags/函数/index.html","e5d4595ebc6b8b57530151b6c07a6f87"],["/tags/列表/index.html","4d3db5282edef89af8b555418277aab7"],["/tags/博客/index.html","6a16b004e045be8bfd071eaa2e04d4ee"],["/tags/博客/page/2/index.html","84aca891e3568af13c0d1773e45e8bdd"],["/tags/右键菜单/index.html","884d031355ca5efe62978495124d076d"],["/tags/图标/index.html","f696202efece4e3f585ff5984cba074f"],["/tags/字典/index.html","ac3c3091e5e506d6c66178c124aa4193"],["/tags/学习笔记/index.html","0faced4d8817e5ef8c513486d9efbdad"],["/tags/学习笔记/page/2/index.html","36133719ce9b3c3ee0703a5203bd5186"],["/tags/安装驱动/index.html","e417fce0a434f7368912c286fc034477"],["/tags/成品/index.html","08308f1843a6df0c46f8093f1dc14466"],["/tags/技巧/index.html","3ae8d91b367fc10fd3fa757534e92a6f"],["/tags/技巧/page/2/index.html","fb41536555931c646e51313f205519b0"],["/tags/技术教程/index.html","fbd95c4c69628c626436c9c6b847cf97"],["/tags/教程/index.html","45460d4fb998bdaf886f4f9abfa4f8cb"],["/tags/游戏/index.html","94817a2ebba8eabbecd50bd244431b60"],["/tags/物联网/index.html","b39a3ed65044b6c41e0ed050c623f3f2"],["/tags/百度网盘/index.html","656247d01ac2d753852851e6ce375a47"],["/tags/算法/index.html","fbc3adaa9d3b66a9213e29af6b5240eb"],["/tags/系统增强/index.html","193c805f653d8937f5ba8a23f9956299"],["/tags/蓝牙/index.html","45912a645591ceb285f705ba33ca32cb"],["/tags/说说/index.html","8ef95036b393950066a78b6657099155"],["/tags/软件激活/index.html","f2994933be263e7c25d2067a2a4b11e4"],["/tags/链接/index.html","f65866c946bb08294ac5ca72eecdf708"],["/tags/阿里云/index.html","c0fa6012fea78b6178af4c3bcbbf4058"],["/tags/音乐/index.html","f54d8d0258c021ca020c0271d42efa74"],["/tags/马赛克/index.html","d285352d3b2fe6fea11246fb21a12be7"],["/talking/index.html","b8f2c08cf9e1021d40e0e88e1a138001"]];
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
