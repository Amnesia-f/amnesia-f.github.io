/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","bc92f1d9b2b98e392e2c3432809ca2d5"],["/Demo/index.html","ea87188c60354a1ed2cf18ad7da527ed"],["/Gallery/index.html","cc1d53fee7d86efde31d1724430890fb"],["/HTML/love.html","9789a42d65dc9fc0da194361a55dfb2e"],["/about/index.html","23bb956aecee5fe94dd92749565ac4ba"],["/archives/2021/01/index.html","61d1a7315efa085914c82d733ef3d9ea"],["/archives/2021/01/page/2/index.html","c4bc0163a398cada23d65dbf55401b45"],["/archives/2021/02/index.html","0bf7e8efadf68828e2c00635a482365b"],["/archives/2021/02/page/2/index.html","dfe7d384cbf418e94be68e55a70cb939"],["/archives/2021/03/index.html","cfad2588f1ec2935f4e1c0c8c9874dbd"],["/archives/2021/04/index.html","a258cfdd20b14abfdf70fe26061b5169"],["/archives/2021/05/index.html","63423a52223c6a946dd96ace37eaad05"],["/archives/2021/07/index.html","76cde2848a17b7a67b8ee2fd05e29bfa"],["/archives/2021/08/index.html","521a5cf71ad7128ec4b637ba2c8439b5"],["/archives/2021/index.html","fc4b710a82a844932772fb5292ac1d19"],["/archives/2021/page/2/index.html","fcadbc004289fb600667dafe9082f4df"],["/archives/2021/page/3/index.html","2c2315d42e9b5869353fcd0b59f76010"],["/archives/2021/page/4/index.html","3e234b15801bee02217f33f749bacdce"],["/archives/2021/page/5/index.html","94b3ea1172b74ab6bfd3e4548c638c2f"],["/archives/2022/02/index.html","90d015d5842c59ce309f362ecaa0884a"],["/archives/2022/index.html","f219e941b6fd353400b88274f80d3d08"],["/archives/index.html","258d2af7073824b6236b350fbb48743c"],["/archives/page/2/index.html","00f135b3e50813023a3ee96274320f08"],["/archives/page/3/index.html","296cd5d6a849480369fa3d3b22ec8a87"],["/archives/page/4/index.html","20d05e5191824c7fd985d68f1d8f8068"],["/archives/page/5/index.html","b7596a756c6c4170652e587d1eff43a3"],["/archives/page/6/index.html","5baf95808d44b4fd2c63d0671e7e8a65"],["/categories/Arduino/index.html","321d2d6281cbf7a745b78f9d45940a65"],["/categories/Hexo博客/index.html","168d4d8842c377647e1b0afe159f1711"],["/categories/Hexo博客/page/2/index.html","7d6a0bcbf7613a27f084442d5b679f68"],["/categories/Hexo博客/技巧/index.html","09ad0bdd02c9708b1ee69776a07ff8f7"],["/categories/Hexo博客/技巧/page/2/index.html","eb10f72895cd7de7032319dfa7f96d1b"],["/categories/Hexo博客/搭建/index.html","2cd81ab02571e2d6c8961c60cdf07912"],["/categories/IoT物联网/index.html","ce51193dd336985f880e89a0a3ccb618"],["/categories/PC/index.html","03fed95ac2b4aa5095dfa6ff89880934"],["/categories/PC/媒体处理/index.html","152690d807c1f77245da9ed88dac41ad"],["/categories/PC/系统增强/index.html","401ec670912e2a7e6d799361b704a743"],["/categories/PC/系统镜像/index.html","8552ab1e39168cb5f79e47d9cd028172"],["/categories/PC/软件激活/index.html","4276b48deb43af0f87ae468a51626aea"],["/categories/Python/index.html","2c915e7470c160362bdec788bee4f3ec"],["/categories/Python/学习笔记/index.html","fb8dcf9b2c9374b001c75a90d7ed26c2"],["/categories/Python/成品/index.html","a9789f4cadef02080b4dd77863e6a0c2"],["/categories/index.html","d6320c8782e546cc9daeb6cea608d81b"],["/categories/其他汇总/index.html","98fdf2fb91807798384814d557c93397"],["/categories/学习笔记/index.html","43173941ddc6425087eecae003600f2f"],["/categories/技术教程/index.html","ac635ebd39122110d9aa52ba42987d1f"],["/categories/游戏资源/index.html","36dee46342aa3f1d42457bd03cc23ac1"],["/comments/index.html","84b4a500105891ecd101cce4578824a7"],["/css/custom/twikoo_beautify.css","b5c8a07528ef0a944b87a1a5701ce5c6"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","c860220a7d6810f1fc63f16dea08be89"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/history/index.html","93e289c6cbf6b4ff0604ece256546964"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","32c4e53c36ec8c1ebfe6f07eb64eeed5"],["/js/main.js","67ef93b7026979d99da673cfd9fd85de"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","1685cd43da0de7abd4a649dd5b2d81db"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","9f465e7dd29ec62dbc6af321882c2b59"],["/js/wow_init.js","4244acb8641a2525f168b604f9ca4844"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","8a50aacefed2da457cc0b16c1e8dca2b"],["/message/index.html","91c07a234a74e43f42635bc8b3b46167"],["/music/index.html","d5d2b5a33047fadadac45c0db74083de"],["/page/2/index.html","5f6495510e59ea20dcb0aaa97be946e9"],["/page/3/index.html","3cd8f38f0cfb574f596d635c25518740"],["/page/4/index.html","874964ebe63cfdd9185b4898151f94ff"],["/page/5/index.html","5516eae0ccb7753348465602406ea12d"],["/page/6/index.html","5d17a6936198c24764c23cb9e3714d2c"],["/posts/11e4/index.html","2f1b760c2d92b8dab3f3723dfb2078a8"],["/posts/126239f4/index.html","08cfaeea151527a3831068c3e688f8e9"],["/posts/20b3/index.html","05a4a7fc8a15be5a90a0a67eb2a173bb"],["/posts/21396629/index.html","7f5922b3721fc16c7e46baa56f8f2ba0"],["/posts/241519a2/index.html","15304185a437620919caf825ef646ca8"],["/posts/40cad56a/index.html","8caedf85a935ccaf71ba1b6a6fe7c510"],["/posts/4161854e/index.html","b88e648167b30ae08642377f807c9f44"],["/posts/4254dc4c/index.html","2a40006409fe6caeb19ef54a95ade127"],["/posts/461b0433/index.html","d96509467fe18c92b787e4f2e5e28462"],["/posts/56ce/index.html","5ff0670311359c0e276354b2ea2414e5"],["/posts/60c319f6/index.html","d76a99ec8f8c9b5c54fde56e16558fdc"],["/posts/6746a1c3/index.html","44117d2523acb6c20fcda6362f3d7fa7"],["/posts/6c20/index.html","2f08f8d432c4c8390628119ade2c978d"],["/posts/73b37fcd/index.html","2dd81bc0a942627b995e9221be361395"],["/posts/749a3a09/index.html","544823342f4d65e0c2e1a761626dc5b8"],["/posts/7594/index.html","7d8b969c31e35f28cb4a43fc73d7b434"],["/posts/77049f2e/index.html","bf5a5b90de29f550730c44ff58b66151"],["/posts/7c82/index.html","ac2fb9c8ecb216dbee307cb73eea0bd9"],["/posts/817b8e0e/index.html","455865831a2192aff4d2afb15bcc665b"],["/posts/844fc5df/index.html","47ad6438fe773941d9edbd718a54e9da"],["/posts/8acab12/index.html","6b178fe996ca89457224c01256bfaf04"],["/posts/8b3/index.html","e3bb3a4d6f48962198707eb93cc008a6"],["/posts/947ec48e/index.html","5f70e766c9168cfbfbe161c3da7e1801"],["/posts/997c/index.html","c69cb5a71beba927900e55fe9f5a11a5"],["/posts/ab43a875/index.html","8cd04896e2db00c9a1963254007b64f0"],["/posts/ac2c/index.html","9ff48c61ad06790a7bf5793e22c0e091"],["/posts/ad79/index.html","da8cb724fc378bbeb6c75e1381c18ad2"],["/posts/adf6e4b/index.html","ad7b094db67910dab9d63d3aceae07e0"],["/posts/aea2/index.html","38d31cb2d4fa5749f6e544d353bb5d64"],["/posts/b385/index.html","dd92b6403b01c4d3012251f36fc5b66f"],["/posts/b7ed/index.html","bc1d804fa43132ba01f4e0a5b2956d37"],["/posts/bc3531cf/index.html","abced36508314577cd44d7e9532a9da2"],["/posts/bfed/index.html","34ce83cc6f2fcb369bfec293ac4f83a4"],["/posts/c232/index.html","cee369dd3b790918cc8fddfb0aed1f9f"],["/posts/c291af82/index.html","643df53a95099daa4a67324ee5d47f37"],["/posts/c2c/index.html","fd5f1785d8896fe1584c30e024af6bf5"],["/posts/c336038a/index.html","28bbf1b19f213d851cc62ca12e6490ca"],["/posts/caba8902/index.html","d6453d7554d583cc605df0f7311f9b4f"],["/posts/d6c8/index.html","ddbe1fcab5b30124870a5adaf22c9876"],["/posts/d9a3/index.html","1010a5ea222f934bc4a2dc3b36dffee2"],["/posts/db12e7f4/index.html","6430401e307038ded6d199ad68e01712"],["/posts/dbba/index.html","d2b432b775fba0335664b4041ce94ebb"],["/posts/dcd4d5c3/index.html","e560d5dd7eff273022df25f9f05deee1"],["/posts/dfe935b2/index.html","dbabba4dcd14ec4988519375e87a76d6"],["/posts/e46d226a/index.html","dd947b3906c934605177ce42a3bb9296"],["/posts/e98f2569/index.html","dc3bb898968b0718467e9bdaa680920c"],["/posts/ecc2/index.html","55c85b678456eee971cc0cc34390e855"],["/posts/efaec666/index.html","a080a73d1da47b0f0f8f9315a56cf7b5"],["/posts/f20cb9c8/index.html","17c5d419120812e31b5951ac34602962"],["/posts/f663/index.html","47b1dfbaa362cfa4ea34d875e5530e91"],["/posts/f7a/index.html","4564601507f61f6c557658f423ff47f4"],["/posts/fead/index.html","dd7f15a02ed93971a39fea0d843cb668"],["/sw-register.js","a40ca0670e2d1fea86da3a8d079b831c"],["/tags/Adobe/index.html","93601832c091f86cdcc54a6c00282fdb"],["/tags/Aplayer/index.html","5b4fa4e7b2a1cb4f08ee4d8b579b866b"],["/tags/Arduino/index.html","f038e86297a3c0dd721ed4cd5f745616"],["/tags/GitHub/index.html","11b7f2916c9d85f5ff35f9b0090958ca"],["/tags/Hexo/index.html","f4d794a966f1a985add8fa62e2ff17ae"],["/tags/Hexo/page/2/index.html","eacb2d638e6d0fcbe34b2037fc0238cc"],["/tags/JsDeliver/index.html","b11ccbeb07c7e87a4bb259248226c260"],["/tags/KMS/index.html","c65318d8cba4202cdd55625aaaa82193"],["/tags/LoRa/index.html","580bd7ba134100d9166d81ff77c6d176"],["/tags/PC/index.html","d7971a80bc7da0e15fbccd2ff8b78e30"],["/tags/Pycharm/index.html","a370db1d53df0143fe49e510a7d96dbb"],["/tags/Python/index.html","d97fd004003b6502d168f933be9cd05a"],["/tags/SIoT/index.html","63bd03d85b6870c7abe372f544a06ef6"],["/tags/Windows/index.html","c79b9f87b73f22ea6f0e1a14231be267"],["/tags/html/index.html","57206de5511ef7e7e5eff2426052d3ac"],["/tags/index.html","5dc1b768171290f8c02018d000af5336"],["/tags/turtle模块/index.html","fac686de2b7bffd538433dc5d976fd0c"],["/tags/优化/index.html","a195c409d92a3c70e38611ebf0de0ea2"],["/tags/元组/index.html","a56031ebfe737eb1d74fd34d58e76e2d"],["/tags/函数/index.html","462c00cb5f108d97ef9664340e61f803"],["/tags/列表/index.html","42ca297dde16f86431f761faa4ebbd0f"],["/tags/博客/index.html","57eeee090626b9a88031056a8f16cca0"],["/tags/博客/page/2/index.html","a2655c02e7a75754beb132c7eb883b39"],["/tags/右键菜单/index.html","5c15cd06a2b6a003a33c47bb75030df5"],["/tags/图标/index.html","8f9e1a53e56f45078939ce2af3419b9c"],["/tags/字典/index.html","211808646db458481addaa7e6f02d882"],["/tags/学习笔记/index.html","10a8f024a4b616fd55eeb96d57a08b80"],["/tags/学习笔记/page/2/index.html","89831d2bdc7894ac930680e401263392"],["/tags/安装驱动/index.html","4f8e145f3e044a8dfb80d14a5a2aef2d"],["/tags/成品/index.html","6b123ba2972c5e124d2ef6eebc4882de"],["/tags/技巧/index.html","cdbbb917ed2292b8db484dde67e9c5ed"],["/tags/技巧/page/2/index.html","915eeab442cdb6418df1582bcf90aa76"],["/tags/技术教程/index.html","c376eee8e06f6391b64fef7f8c712231"],["/tags/教程/index.html","e0a33a739de2b412e3241a23c3303047"],["/tags/游戏/index.html","8a3bd319256c8c7422431d0f682350ab"],["/tags/物联网/index.html","0fd6a4b31af94af502b8c9060810e1f5"],["/tags/百度网盘/index.html","e6777d002e0b4cbdd4d4b0c63643e272"],["/tags/算法/index.html","1cb41cc4d40f662d703f542faa50abd9"],["/tags/系统增强/index.html","cb85a617da87b5ece87349865fc3885e"],["/tags/蓝牙/index.html","5b6116ea39f316485d876570c77f234f"],["/tags/说说/index.html","3fe2d7c56be8cbc30337af8fcbd3029f"],["/tags/软件激活/index.html","82e9b453343539ac55d064f88d206740"],["/tags/链接/index.html","663a34621966cf233984663ddfef3238"],["/tags/阿里云/index.html","1a25ed35573075ccdac82ac68843634f"],["/tags/音乐/index.html","0bbb9df29da50bc7a10ea1548850a4a1"],["/tags/马赛克/index.html","e53f5d822c10cb80e72b6a82e89efd04"],["/talking/index.html","67b8112156571344b3c29215e3084485"]];
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
