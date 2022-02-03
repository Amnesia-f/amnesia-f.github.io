/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","4b936a2efc6c41f2a9fc03d1ea55f593"],["/Demo/index.html","4ffe12884e66822a67087bbadf270b1d"],["/Gallery/index.html","d8d578b9ca3fec918483ce6c3767d83a"],["/HTML/love.html","9789a42d65dc9fc0da194361a55dfb2e"],["/about/index.html","46e55e4f97790496454d47acd1d2e3ba"],["/archives/2021/01/index.html","f2be0e4bd37a6ecf3c95bedb949f7624"],["/archives/2021/01/page/2/index.html","4b8a9e916e08226b624840bb96bb6eeb"],["/archives/2021/02/index.html","c2d30ef0430e94a003f16fcd1a4f4f38"],["/archives/2021/02/page/2/index.html","c468dee3d0099bdcd2ba3376904ec96f"],["/archives/2021/03/index.html","83fc169880fd4db0de8bafe23fe22fe2"],["/archives/2021/04/index.html","b7ea860f20bfef13401f9f478bfc0f3f"],["/archives/2021/05/index.html","7a6189a3f8806e449b17548df32495f8"],["/archives/2021/07/index.html","67ed7d93d6bf63b608cb6b434a589a83"],["/archives/2021/08/index.html","83f62abc101f1077147af422069af9d8"],["/archives/2021/index.html","71e1663ad3df7ed7f96404cddef5bbb8"],["/archives/2021/page/2/index.html","8b7dd01db33d4ac4dcb2be778cd05e7c"],["/archives/2021/page/3/index.html","8d9b0cc2a888684d562747dd36435a77"],["/archives/2021/page/4/index.html","00645d0be9d29b7ab235d7de41acf0ab"],["/archives/2021/page/5/index.html","5c159981de59354215519c8a634a898c"],["/archives/2022/02/index.html","2aaa29983d36564d9f9aa41074ad5797"],["/archives/2022/index.html","8b0a4f7e4eae78d4e76f1b01322a3ea4"],["/archives/index.html","b39982e337ecdbc4c4aa3bf1036bb2ca"],["/archives/page/2/index.html","b3dae32f3d4b2864a4e516241092451b"],["/archives/page/3/index.html","932f00a518917a7724b005fff012c3c6"],["/archives/page/4/index.html","ab16217981f295bde9ebdfd02725354f"],["/archives/page/5/index.html","ffb0c5a6d5101bcb0859467d03f13b2c"],["/archives/page/6/index.html","bcf88115afe2d325124fd8328f737548"],["/categories/Arduino/index.html","210fa93a550d475eaedfa5a05a135ca2"],["/categories/Hexo博客/index.html","6d1d198b4f1b1a32dc6c17f5a73f8823"],["/categories/Hexo博客/page/2/index.html","6acd60af40694b9e05d9570bfda2b600"],["/categories/Hexo博客/技巧/index.html","d61a165aeb3c62daa495fa7d1a28e345"],["/categories/Hexo博客/技巧/page/2/index.html","d85f0a9aff459865e77b8fc29897d292"],["/categories/Hexo博客/搭建/index.html","5db273840b773641aa1430ea45b2a30a"],["/categories/IoT物联网/index.html","bc0ef0ded0df6a00ab26b10cbee877e7"],["/categories/PC/index.html","57e3f95b2cd2ef424ea119f482ae23d8"],["/categories/PC/媒体处理/index.html","9cd5ed46d92343a81f71ca61df58fb59"],["/categories/PC/系统增强/index.html","37e41be9334a72831296697c0695408c"],["/categories/PC/系统镜像/index.html","4013806c381847542a0bd05d060e87db"],["/categories/PC/软件激活/index.html","2fddfbecacf6e9dad0b665932a113fc3"],["/categories/Python/index.html","88e453c5fa7cfb687653ee6399a37c50"],["/categories/Python/学习笔记/index.html","ec9d82e1ad33cc0264a0795379b5049a"],["/categories/Python/成品/index.html","03aafc97c47303e38bdc3f9abc00577f"],["/categories/index.html","7ac6ae4413afaefdd44a2c8503536274"],["/categories/其他汇总/index.html","f95f9c863ac8de680153667031889600"],["/categories/学习笔记/index.html","75502386e11d729f1fce8b691d622647"],["/categories/技术教程/index.html","bbb1acea50f1fd3a57189af17f9ea812"],["/categories/游戏资源/index.html","df37c53af1f67548f844bd474816d24e"],["/comments/index.html","b276f853e3c3aef3d61f74e4feebf319"],["/css/custom/twikoo_beautify.css","b5c8a07528ef0a944b87a1a5701ce5c6"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","c860220a7d6810f1fc63f16dea08be89"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/history/index.html","812685d86f98bfa56838e16112fe5724"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","1e01265902a80f20c6b8d342d2744d9b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","0f016a2e9d65481bf7d394bf9cd47bb3"],["/js/main.js","67ef93b7026979d99da673cfd9fd85de"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","1685cd43da0de7abd4a649dd5b2d81db"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","9f465e7dd29ec62dbc6af321882c2b59"],["/js/wow_init.js","4244acb8641a2525f168b604f9ca4844"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","855e11deb2aa02af415cd7f2252dbac6"],["/message/index.html","49c210f1ad2b29a4c151e259878af80a"],["/music/index.html","06486d07329eaf635bfdcef5d1bacef0"],["/page/2/index.html","bb9d916f107e37d1be794d23d7706b90"],["/page/3/index.html","f927a8d6b9400168991c3ad77aa1dac9"],["/page/4/index.html","a4e84e51067a9939b45ef0152e8b0043"],["/page/5/index.html","f6aad0c37394e1c3d355edc10c1f6c0f"],["/page/6/index.html","993ab6310043e295889f67f59b6235eb"],["/posts/11e4/index.html","5990e5a9d127d5191f043929a586207f"],["/posts/126239f4/index.html","3639d2f3062db0e4aed8036e10fa8bca"],["/posts/20b3/index.html","9f7d3eff08e2526a74800297832215e3"],["/posts/21396629/index.html","1f3a954869b27237a392d563202ee48d"],["/posts/241519a2/index.html","0cc47aeeaa75a33efe7e5bbf73f7d30a"],["/posts/40cad56a/index.html","d4bbcb74f92b0441914cdf15adf23c15"],["/posts/4161854e/index.html","09821c49cd21c3089e8e6139e84b5f2b"],["/posts/4254dc4c/index.html","03c348377a6ea5398f1774e388cc092b"],["/posts/461b0433/index.html","219eb100eef5a09274263bf58e29bcab"],["/posts/4e5b/index.html","06a85b1cc05a2843cf4e1d3d3591fada"],["/posts/56ce/index.html","772dc6c649ea1acdabe4c91219b3db9d"],["/posts/60c319f6/index.html","63c3cf12a0416336f15882d6a9f71771"],["/posts/6746a1c3/index.html","787ffe8a60c26e0626c3cae9b4f3c731"],["/posts/6c20/index.html","c4bd113e5985316793e2b7cca15f2abb"],["/posts/73b37fcd/index.html","82b710cec4b0e41e06603cff7d6cfcf0"],["/posts/749a3a09/index.html","fbd586da599e19973f7fb44cfaa7f8f2"],["/posts/7594/index.html","9881f6c9ec7de5d3422fb56b40469b27"],["/posts/77049f2e/index.html","94fe9cf2de35832e8dcf9456c70642cf"],["/posts/7c82/index.html","51c5354ec92f5b9e9c24762dc1444962"],["/posts/7j9m08/index.html","6c21c0be94c76166ec8b8a6e26f58125"],["/posts/817b8e0e/index.html","06a9e1f03e3432edd9e5535817d5bbbb"],["/posts/844fc5df/index.html","d80ff034ae855d623d7996033947bc10"],["/posts/8acab12/index.html","eb9620b093be0322e5c74a418365c0b8"],["/posts/8b3/index.html","07e9956c11bfb99d3e76e2133d355a3a"],["/posts/947ec48e/index.html","b1c602c87d58ade2a2fe7e9e633d5c5b"],["/posts/997c/index.html","18eefe559e6d61a1cb9e830f2103e612"],["/posts/ab43a875/index.html","361b0bb6e54ab66b495e92d138c2def6"],["/posts/ac2c/index.html","b5889fe825dc8754dcd22fe9340e7dd3"],["/posts/ad79/index.html","b839d1ebe7348e8c95495310d88c3637"],["/posts/adf6e4b/index.html","95ba7de26d5a158747cb202ba357776b"],["/posts/aea2/index.html","e2c5ca69045a56a032d8df5d357ec8ac"],["/posts/b385/index.html","1cf83d4687bd4496c23487b223a60356"],["/posts/b7ed/index.html","ffd4ff78273a164f3908fbd488871065"],["/posts/bc3531cf/index.html","e73d8d2a6900acdeae8289eef4fe316a"],["/posts/bfed/index.html","26b5cbd43600c521d26ddff5b64b3aff"],["/posts/c232/index.html","4c52dc523a2889e24c3ac1036d5d4d6a"],["/posts/c291af82/index.html","a780068b7a1ea6c24ad6e28b9509f80e"],["/posts/c2c/index.html","b7152f7f8315605db7313be27cd15dc0"],["/posts/c336038a/index.html","7cabb10e926f8b706787e45d0a997fc9"],["/posts/caba8902/index.html","aa2b3f8180ed6150d062de7cf26dabb5"],["/posts/d6c8/index.html","1c93eecb2fd5785eefb3eacd87e19087"],["/posts/d9a3/index.html","f4708d7505ca9951f3c29ee46dc2a2b1"],["/posts/db12e7f4/index.html","0b25efbbdec59ee0760b3d5ff04c2db5"],["/posts/dbba/index.html","d7438d8af727df97a719a82390e97713"],["/posts/dcd4d5c3/index.html","7983fadfc29d223d224fb0b19e6692ea"],["/posts/dfe935b2/index.html","8dfd56848e12fbf373bc04271ebc86b1"],["/posts/e46d226a/index.html","b49443dd37c7b947724b12e48f61ae7a"],["/posts/e98f2569/index.html","49cfb0b8d791ade9986c21d0c4f4ba95"],["/posts/ecc2/index.html","f34c0ed0a5fc8735e39250387e69e533"],["/posts/efaec666/index.html","2edb6f4652d3af8154441b21893228bc"],["/posts/f20cb9c8/index.html","2568a3cf5b4c5e599de509c3ef0772a4"],["/posts/f663/index.html","a2bdbab3f3f59cd056a511171a3e8743"],["/posts/f7a/index.html","e1b643d2039ff5525995ce4c5507230a"],["/sw-register.js","6979cfaec36f99e79e2c7ab55224c0e1"],["/tags/Adobe/index.html","3b7ae4ab0d7a120cf5437ca94d240f1d"],["/tags/Aplayer/index.html","236fad40df88bb4cbad204d6689c11d5"],["/tags/Arduino/index.html","1ac6d5fc47640327beb5ccf42ff0480c"],["/tags/GitHub/index.html","4753efa5bc9efca52774ef185ae89980"],["/tags/Hexo/index.html","8ed9d09c55cbee7551ce93ec13d21662"],["/tags/Hexo/page/2/index.html","9ea1f8906a5f4d595e6a20034be750f5"],["/tags/JsDeliver/index.html","2342a218faa6b4618a3a8dbdbd01d555"],["/tags/KMS/index.html","017c9f89413db3bfae7d684c68fabc69"],["/tags/LoRa/index.html","42beffa307a449c97d54cbb613615aa3"],["/tags/PC/index.html","928863d0c8a449fc867c033669fd0b9e"],["/tags/Pycharm/index.html","870681ec8d6cea6825491a623a497eec"],["/tags/Python/index.html","6c1101b5b7b3d8a6412254f02d4376f5"],["/tags/SIoT/index.html","d85fc18b965eb420be45195332c23e65"],["/tags/Windows/index.html","5ffda6a80eeef0584c95fb84b37bfb4a"],["/tags/html/index.html","c39e7edca822f1bd482787337a75100d"],["/tags/index.html","e5508e6eb4f2a1c82ce787bfa1f9f418"],["/tags/turtle模块/index.html","ba31ad4751f37204a47ffff3c8878b1e"],["/tags/优化/index.html","125f9b3ac0184a0b58feddcd82d70005"],["/tags/元组/index.html","9e5909f00969e7deaf639363541d53b2"],["/tags/函数/index.html","2ea556ac752f9363bd6f42815b5ff280"],["/tags/列表/index.html","806d2008e651ea6f7c7165d66d61fc86"],["/tags/博客/index.html","a6176583d1b53937f9aca5771423db70"],["/tags/博客/page/2/index.html","9590af932f4fcc514829d3824b781e70"],["/tags/右键菜单/index.html","933bd38f99c235bce0ee7a3f45946c55"],["/tags/图标/index.html","549e8908515d693c58e73f0ba2bc8738"],["/tags/字典/index.html","c12199a91856379b767ac73f105d87d0"],["/tags/学习笔记/index.html","3b532e4051c9deb8364fe6c575377849"],["/tags/学习笔记/page/2/index.html","3fe367a8bb16a3211ac4538e171b7160"],["/tags/安装驱动/index.html","2df85e6fce2cb8158baddbf50941dbd1"],["/tags/成品/index.html","b4fe6d8a4e67a02552bff7c88f0155b8"],["/tags/技巧/index.html","628d773fe2cf326e503650be22812d5b"],["/tags/技巧/page/2/index.html","75273289410abd9bdd53eb3a79f57ac7"],["/tags/技术教程/index.html","1d4e53fcc11ddc8daf3c3dd9e787244e"],["/tags/教程/index.html","97cba761cdbabf81dfcd30fedce78867"],["/tags/游戏/index.html","2a77c997c4741d8a0b8f167576e9ccc5"],["/tags/物联网/index.html","fbe2fe565507c9beacc1c2ef98c27816"],["/tags/百度网盘/index.html","f4dc78bff02e03a5bf57f52fb7f42558"],["/tags/算法/index.html","8ff2979bbae9234309a1cdfa241c9427"],["/tags/系统增强/index.html","fbe12d5ed2434325d008704bf5fb08f8"],["/tags/蓝牙/index.html","3286d8f4c6345a1a0422fbdb9de14ac5"],["/tags/说说/index.html","e783141eaf65b8f1216b32205dad641c"],["/tags/软件激活/index.html","88d050922780c4f1dc4f54a7e6c91821"],["/tags/链接/index.html","7e8c18fcb1c704867d609b1c1c9efac1"],["/tags/阿里云/index.html","eb31f91af090e7c0cd12ebd12db9b9e7"],["/tags/音乐/index.html","3d9cea0d931a58a576e5c57c36fe8794"],["/tags/马赛克/index.html","c666fd5c25ba23f8cfe7c5d18652f746"],["/talking/index.html","a05a4540f41971b47e98d0d206988c55"]];
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
