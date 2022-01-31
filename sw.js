/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","e6f56fb25fb9a9feaf260fff9838c845"],["/Demo/index.html","661960a717020c14f0f9990ec5e015c2"],["/Gallery/index.html","247cef909aa163c2be88c48f19a5fd2d"],["/HTML/love.html","f4dcdcb8f92985151d37107b8afd4bc7"],["/about/index.html","2a7cdf439df5ec97cbe2e76ea065a2e1"],["/archives/2021/01/index.html","989fd46dee573e3f7dba8d43d2ed75e1"],["/archives/2021/01/page/2/index.html","f706da84ecfe7dc6f882cf2d3b4c9996"],["/archives/2021/02/index.html","c5672a8c67bf75f1bebd4f1ae23b800d"],["/archives/2021/02/page/2/index.html","3d3632c7f93aa265206f6de6da3d2590"],["/archives/2021/03/index.html","4255e0897c31445e4968574489bcaa9b"],["/archives/2021/04/index.html","2c20a999a0de96a9bded1168c2c0a185"],["/archives/2021/05/index.html","afe715fe411a0d92cafd065406136e22"],["/archives/2021/07/index.html","dd8b3f1fa24a4eb46d522200b7097401"],["/archives/2021/08/index.html","4e06af93ce67da121ba4ac52bb437589"],["/archives/2021/index.html","0e3f898f83c6e9119700e221b0614d4c"],["/archives/2021/page/2/index.html","5aa58a60d8d96fc155c1bdcaae442659"],["/archives/2021/page/3/index.html","a64268fc240046635b2a8c85f51f09b9"],["/archives/2021/page/4/index.html","daeb253105669a555ec21657f40d2be6"],["/archives/2021/page/5/index.html","3e22d8a24ff5c008329e7602fd0113dc"],["/archives/index.html","188fb262fbf39f56685731169056cba2"],["/archives/page/2/index.html","1a2c893f2af451429f74974f6c605ba6"],["/archives/page/3/index.html","c498fc8cdfb3138b729ba3579ccbfe7d"],["/archives/page/4/index.html","3f6e6808e1b1d28340ef5cfa7bdf8840"],["/archives/page/5/index.html","cdcd59fa738140061ef73da15b0f3bf5"],["/categories/Arduino/index.html","319def4be60409af4985d85004b4276c"],["/categories/Hexo博客/index.html","ae8de1e19f041ec79822c7e31cbe1863"],["/categories/Hexo博客/page/2/index.html","1adbac78852fdd0bb87599b6d65fd451"],["/categories/Hexo博客/技巧/index.html","185cd31dcf03e2548b6c32e2dc2ffe83"],["/categories/Hexo博客/技巧/page/2/index.html","0d86d2b675d1cbf63157f0ef5c4ed13c"],["/categories/Hexo博客/搭建/index.html","fdcba980ad4c71229d887df9e84b5b37"],["/categories/IoT物联网/index.html","53e4443113638ba624de21d430d1447c"],["/categories/PC/index.html","809b8d886b6ac22180baf05ac7977f72"],["/categories/PC/媒体处理/index.html","3601f514af1da79cbfba6153f4a1ad7c"],["/categories/PC/系统增强/index.html","1aa222deb6b8328b06f4d385d25d207e"],["/categories/PC/系统镜像/index.html","dffc04b8fcf416cf9c4714bed2880785"],["/categories/PC/软件激活/index.html","31d38c3058fabb67d20ed33f77b52f12"],["/categories/Python/index.html","67e3eef20233e1a3f03cd92a930b2967"],["/categories/Python/学习笔记/index.html","ec0ce791a62e73efffd7234892d552f0"],["/categories/Python/成品/index.html","0658c196239f238daca4de94a74d19b4"],["/categories/index.html","df64a38a10fd63d0cf4cea3658420ca6"],["/categories/其他汇总/index.html","b4cc89defd7542acf306099a21d16ceb"],["/categories/学习笔记/index.html","2f4038021b326a4e80be8b491d3cf088"],["/categories/技术教程/index.html","f0b6c0fc5e7e645b78857b67bdc1f640"],["/categories/游戏资源/index.html","6d4a26165088e38c20404de1c31fe4b4"],["/comments/index.html","65ecbf834e18901933e91fc25908a817"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","1be40ef63ffabb35de306f1dc2f5c5a3"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/history/index.html","809be23d07b72db7b939adfd34cb05a8"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","558fc3ebeca3c88c5ffefaee7c6a0bbb"],["/js/main.js","67ef93b7026979d99da673cfd9fd85de"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","1685cd43da0de7abd4a649dd5b2d81db"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","9f465e7dd29ec62dbc6af321882c2b59"],["/js/wow_init.js","4244acb8641a2525f168b604f9ca4844"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","8046779a2804a2aad6fa890fe7a8b9c6"],["/message/index.html","c079b8fe8b64c2af8cb1141be7177dd3"],["/music/index.html","ea6401990a2b910270a09bac2efa93f9"],["/page/2/index.html","ee4d5b9236ca4c1d4fa0614ad9d0708e"],["/page/3/index.html","65ff716e2b05aea978c80b1401d8cb49"],["/page/4/index.html","d8304ef14e90061c8c69817f0b17be3e"],["/page/5/index.html","23c9ddeba206aa1d1839817cd85e935a"],["/posts/11e4/index.html","4ce5c5a34d8fd7af9616b91e4d640c67"],["/posts/126239f4/index.html","4eb2fa74895688dcd82268808069aa03"],["/posts/20b3/index.html","dd2e13de2cbb9b5e770b486a0063ca3d"],["/posts/21396629/index.html","d7a1b7829ac2ea0b254c6787e29344d0"],["/posts/241519a2/index.html","c6222a5ec4f54cd436b18cf68d2ce79b"],["/posts/40cad56a/index.html","a50d1ba9a920e82d32adfb40d869e7df"],["/posts/4161854e/index.html","fd9fb25036142606d01d4ff764b0e6d0"],["/posts/4254dc4c/index.html","883aca30fc22892f02481d0e9b1507f1"],["/posts/461b0433/index.html","24ae4dc1c4fef3a885a72515c5124bb9"],["/posts/56ce/index.html","fd0ce9e904718e58604f9dbfe6089b23"],["/posts/60c319f6/index.html","aed4f382be48811f91e4018b1b19c777"],["/posts/6746a1c3/index.html","59c5932c0ddbfade1b8b3cd178821716"],["/posts/6c20/index.html","05055b66d4fcf29fb2c94dfd77143be9"],["/posts/73b37fcd/index.html","2b6db7e7534d269122fa1c56b9a8e1f4"],["/posts/749a3a09/index.html","d6efc8ddfd4df0c1e36be485149b51eb"],["/posts/7594/index.html","a96baad7f6972015c30d9d702e0744a0"],["/posts/77049f2e/index.html","09205b591e3f5e874b8c990c847e78cd"],["/posts/7c82/index.html","1fb68004558984bb0e639276d37e9b85"],["/posts/817b8e0e/index.html","f12e8360ebbb09ac9fcda7001649ef2a"],["/posts/844fc5df/index.html","536f0c4bf6e2aa40035d530787852ccb"],["/posts/8acab12/index.html","5233ba9cd52e1560628eca8aeabd7c4c"],["/posts/947ec48e/index.html","43c55c5a028da27d4deb5ce0b5986a15"],["/posts/997c/index.html","421ddc8b6a253d301f3f34f7c2c4dfa7"],["/posts/ab43a875/index.html","e0c576119f228e73e45849073cffe8bb"],["/posts/ac2c/index.html","7fecc3a0a7939fa67b38131d78a8bed9"],["/posts/ad79/index.html","98dfa9778c175748ef1e535f8f2d46ab"],["/posts/adf6e4b/index.html","9f98257ceea028b659c93c0f8c7856de"],["/posts/aea2/index.html","0925d15e77320622c58193443b481a39"],["/posts/b385/index.html","89cb659e32d444d059c9e0c387d56232"],["/posts/b7ed/index.html","2045be51d16c611a32473a770e084079"],["/posts/bc3531cf/index.html","9b5c7e77e1a735a2722601ba219f3745"],["/posts/bfed/index.html","03a29f8f013bc5eada1217dc91ad86e7"],["/posts/c232/index.html","c1b93c1ef8afe7f195d05e7943cca7aa"],["/posts/c291af82/index.html","80915f2dc6ae63ae00c2bdf92f9f473e"],["/posts/c2c/index.html","11e2ced167634b4cbf22643297e7ee42"],["/posts/c336038a/index.html","7dbdb2c5c26669e79a832c8913a64ec3"],["/posts/caba8902/index.html","29bb9cfe3876ecc7654d3a8a5d9a86b3"],["/posts/d6c8/index.html","f6fb4903bcb842f33875f8b33734d3a6"],["/posts/d9a3/index.html","92c534daf2b10942e22ff908b09dc0e8"],["/posts/db12e7f4/index.html","6ef04b6e6a20289e0d3f12603a66d1e3"],["/posts/dbba/index.html","4236e2fb183026b9eb34be2dc037340a"],["/posts/dcd4d5c3/index.html","75193d7b371620021278e28b51c05495"],["/posts/dfe935b2/index.html","2a80df0daeae15c45602c81530d90033"],["/posts/e46d226a/index.html","b79b1a1b794338e9e72e439d33d1c025"],["/posts/e98f2569/index.html","6ab0b42e1e88710403e0462ebf94bc67"],["/posts/ecc2/index.html","9bded115dbd2580d06e377d0d42f0346"],["/posts/efaec666/index.html","9b950044da2d9bc55a6b710d3ef83b66"],["/posts/f20cb9c8/index.html","dda078962e91e0ed4e323d5f723848de"],["/posts/f663/index.html","6c9871dda68eaecd16e093dab729565a"],["/posts/f7a/index.html","8ae43566f27cb1625f254c8377ad3f3e"],["/sw-register.js","d116a088ad4009c425148a647273b033"],["/tags/Adobe/index.html","13c7c345ae6387be419e9c5addafa412"],["/tags/Aplayer/index.html","b48512c0002f00ccf73da3d038e90e05"],["/tags/Arduino/index.html","5ed1ec0b80e205134f6b7a440fc946c2"],["/tags/GitHub/index.html","ceae4f0882c29dd8fd7780f0727e8fde"],["/tags/Hexo/index.html","3b38d4f6a13d7cb68823c0313f2cb0c4"],["/tags/Hexo/page/2/index.html","15d8a65245013935fb2383a08a5d290b"],["/tags/JsDeliver/index.html","8bc87941352ba5e11f0a6d831f1f135f"],["/tags/KMS/index.html","edb9b9c7dea3a2ffe4d046ff0bfbd29f"],["/tags/LoRa/index.html","7805dd96a02e2eb4822ab7ac80326a3a"],["/tags/PC/index.html","18969bd57c9578afd7302dca10e4e1e8"],["/tags/Pycharm/index.html","65a8db7f6cf38e68f274976007f8d499"],["/tags/Python/index.html","5517fa3bb4b9615b323f371f5145e50e"],["/tags/SIoT/index.html","c89ab089326f04e4e8a9df6d292337d5"],["/tags/Windows/index.html","b0f44ed00d3ea69b6b3390d416a55221"],["/tags/html/index.html","023faefd8483b4683f0235bbadd5c88e"],["/tags/index.html","208cb5bbccce0846ea10b55a49e54ac2"],["/tags/turtle模块/index.html","f6f465b97d82e28d2be8ca8ea722bd32"],["/tags/优化/index.html","71e42f6d9b099898e2ec924934deeebe"],["/tags/元组/index.html","29bbb9e5477c4f1d92d78f174fafa071"],["/tags/函数/index.html","c754efc5feb14a3cd36b382d7d24bec7"],["/tags/列表/index.html","0f03cb14df99955e8be0c22e4df9567c"],["/tags/博客/index.html","14863d80ec58110cc0a65810188320f9"],["/tags/博客/page/2/index.html","06529840b4e62f6cbf0fb20b1758bfbd"],["/tags/右键菜单/index.html","bb26a78e703fa868412ff51f0adcc850"],["/tags/图标/index.html","1f97bc0196cb6d40f99bc373cfe400b2"],["/tags/字典/index.html","ffe39ece18ac68bd6b69121a3160418a"],["/tags/学习笔记/index.html","14cd589ba1625f453faf6a96c39e9884"],["/tags/学习笔记/page/2/index.html","23ec4ff5e855e8da0d2455880821ca14"],["/tags/安装驱动/index.html","383eb3b1503b8c79f7d24f217110ce66"],["/tags/成品/index.html","20ae04da714190c3a973690ff33a05e1"],["/tags/技巧/index.html","ab1ac17144e229b013d8bd65275c7081"],["/tags/技巧/page/2/index.html","4f5f05a62876fb71a69c8c4ce20709b4"],["/tags/技术教程/index.html","fecd7dd12fe20b5a570022ac75f6c696"],["/tags/教程/index.html","cd872d4b64ee78ad2ca4354c545991c8"],["/tags/游戏/index.html","e61c4cf220c43cff91a7045477b7e705"],["/tags/物联网/index.html","a42e70da345c51577f8f4e34d051a389"],["/tags/百度网盘/index.html","a2d5a3c322d010fe6e10c085bfda0710"],["/tags/算法/index.html","4d762846af8830da9cb25ba5dae51659"],["/tags/系统增强/index.html","d63f3627e939b0988c246ad38527b59a"],["/tags/蓝牙/index.html","3d79ecf3203e1881a97dfad1fd360787"],["/tags/说说/index.html","9ea43601529eaa4e40e1c9bbda1eda3f"],["/tags/软件激活/index.html","457ac994993ae2aca5b6c3debde5ebfb"],["/tags/链接/index.html","2e9e41736fab66ed5799667daab0f015"],["/tags/阿里云/index.html","fa659db22b44febf511efaa39eb89303"],["/tags/音乐/index.html","312a11b90e9c2b08ca1364076ca40ecb"],["/tags/马赛克/index.html","18d75e04d83165b3af99ae19c9ed8d2a"],["/talking/index.html","8cda8886703b96f9f1902a87b4e63c84"]];
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
