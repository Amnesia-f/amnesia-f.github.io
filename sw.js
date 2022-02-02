/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","f0c81115adff35c242a90ad4f0669545"],["/Demo/index.html","1e13b9542769edf77c037e6415b74c4a"],["/Gallery/index.html","835ce13ed61e594f03423cfdf33d0f5a"],["/HTML/love.html","9789a42d65dc9fc0da194361a55dfb2e"],["/about/index.html","8ff4a66429fd75bdc4e21a1b3cac1adb"],["/archives/2021/01/index.html","61173752d345ac2fec5bfe12fd429663"],["/archives/2021/01/page/2/index.html","54ddd83b37d15ae213e6b7084b5313de"],["/archives/2021/02/index.html","05412698f0490be7ab2f198d51e83b18"],["/archives/2021/02/page/2/index.html","58d6b5c63af732c70b71b18454ec5c5b"],["/archives/2021/03/index.html","7616750410b09cf8c72791231229a1c7"],["/archives/2021/04/index.html","639b716514bc9e308850cc53006be841"],["/archives/2021/05/index.html","079ed6080d01debb7b9f77d8f660301c"],["/archives/2021/07/index.html","7f40c3c97c49d22cc84cc2580fdebc60"],["/archives/2021/08/index.html","a99ed586aa8e6086cd7f3f334e7f0efb"],["/archives/2021/index.html","24d0b40b7977cf7e37f6814d5fbdc592"],["/archives/2021/page/2/index.html","56f3500d08ae11a61792a0a480d06cc4"],["/archives/2021/page/3/index.html","7a6dc4faa3e3eadfacc79db44dc232e0"],["/archives/2021/page/4/index.html","bcd94baa1b738c003d1ab165d0a16166"],["/archives/2021/page/5/index.html","99c0b1653d286719b7209be304d19571"],["/archives/2022/02/index.html","b6a4d3d184bb8f5daa812942cc82e471"],["/archives/2022/index.html","c930ad67f74eb2f827317af11d21adfc"],["/archives/index.html","a200103bc5822d8a7a39aa7085b7725d"],["/archives/page/2/index.html","1b726605ae73aab20451e56e86878a31"],["/archives/page/3/index.html","894a249f6f604ea6c57840b21a87ad45"],["/archives/page/4/index.html","55ba95d708d19502a86c75a8f47b870b"],["/archives/page/5/index.html","d2ac66a90529112c97b4affa6144832e"],["/archives/page/6/index.html","e07933a3d5a8ae5439173c2e0303696f"],["/categories/Arduino/index.html","2ceea6953c4b4084a01cbf90f359ff5a"],["/categories/Hexo博客/index.html","7fbd622d6a1fa83bd47471b8458a6bd6"],["/categories/Hexo博客/page/2/index.html","61c8bbde572bd413740ae3b9a17d15fe"],["/categories/Hexo博客/技巧/index.html","8e792b493c670df5b8629029dec193c3"],["/categories/Hexo博客/技巧/page/2/index.html","b1be94d78654af1d37092f472d7e4f64"],["/categories/Hexo博客/搭建/index.html","045fb6322cb7861d4a6028760d07ef0d"],["/categories/IoT物联网/index.html","f0f7b01d338decc391be9cce69164768"],["/categories/PC/index.html","42b12cf85f5904c02e5c3e14f74c4ef5"],["/categories/PC/媒体处理/index.html","33c6a2afae8efcdd592efdcc613107e8"],["/categories/PC/系统增强/index.html","f9c28f6ec382ba36c842d9498e0e8298"],["/categories/PC/系统镜像/index.html","e1b24ce44a9709fd182bbea19eec0344"],["/categories/PC/软件激活/index.html","7f239cfc1c61f8b256b550187f44988e"],["/categories/Python/index.html","54fb1b91ed0cf32598a6f249e40db786"],["/categories/Python/学习笔记/index.html","4adb359b6ceb82fdfe094af0e028ace7"],["/categories/Python/成品/index.html","71a8bdfda178cae5ab62dd2863f63df2"],["/categories/index.html","cb44dbc851295d35e2a308f19ffa32de"],["/categories/其他汇总/index.html","f82cf69e2b6055500cae45661399620c"],["/categories/学习笔记/index.html","154d9943034dbaa6a9b0bd4cc3408c9b"],["/categories/技术教程/index.html","508955acf189d996e1c361edc5c7fec9"],["/categories/游戏资源/index.html","9e9440a8e2d96a3ceea4bda91707d4ff"],["/comments/index.html","9fd23911148ee4c8ca9df0be550363b3"],["/css/custom/twikoo_beautify.css","b5c8a07528ef0a944b87a1a5701ce5c6"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","c860220a7d6810f1fc63f16dea08be89"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/history/index.html","93e289c6cbf6b4ff0604ece256546964"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","81c6143b5c57172d09dd18f57dcc3e26"],["/js/main.js","67ef93b7026979d99da673cfd9fd85de"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","1685cd43da0de7abd4a649dd5b2d81db"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","9f465e7dd29ec62dbc6af321882c2b59"],["/js/wow_init.js","4244acb8641a2525f168b604f9ca4844"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","0312481c7863e533d971cf0e4c43c1f9"],["/message/index.html","da30ec6261329857aba48c695bf78f78"],["/music/index.html","a4c06c6d4760627671e6436661a1ba76"],["/page/2/index.html","dfc58a630b9023dd8a6e89c16522abfc"],["/page/3/index.html","f69f4dbe1ffbc19ac84ab888b5be3721"],["/page/4/index.html","2944d5fc1a9c9f65a4e921e3d2ac7f20"],["/page/5/index.html","ac25ecfd06c1f8dbafb2d57ab22cc3de"],["/page/6/index.html","58c23a8d0e9a2ae21db3401d8e12bdcf"],["/posts/11e4/index.html","2f1b760c2d92b8dab3f3723dfb2078a8"],["/posts/126239f4/index.html","08cfaeea151527a3831068c3e688f8e9"],["/posts/20b3/index.html","05a4a7fc8a15be5a90a0a67eb2a173bb"],["/posts/21396629/index.html","7f5922b3721fc16c7e46baa56f8f2ba0"],["/posts/241519a2/index.html","15304185a437620919caf825ef646ca8"],["/posts/40cad56a/index.html","8caedf85a935ccaf71ba1b6a6fe7c510"],["/posts/4161854e/index.html","b88e648167b30ae08642377f807c9f44"],["/posts/4254dc4c/index.html","2a40006409fe6caeb19ef54a95ade127"],["/posts/461b0433/index.html","d96509467fe18c92b787e4f2e5e28462"],["/posts/56ce/index.html","5ff0670311359c0e276354b2ea2414e5"],["/posts/60c319f6/index.html","d76a99ec8f8c9b5c54fde56e16558fdc"],["/posts/6746a1c3/index.html","44117d2523acb6c20fcda6362f3d7fa7"],["/posts/6c20/index.html","2f08f8d432c4c8390628119ade2c978d"],["/posts/73b37fcd/index.html","2dd81bc0a942627b995e9221be361395"],["/posts/749a3a09/index.html","544823342f4d65e0c2e1a761626dc5b8"],["/posts/7594/index.html","7d8b969c31e35f28cb4a43fc73d7b434"],["/posts/77049f2e/index.html","bf5a5b90de29f550730c44ff58b66151"],["/posts/7c82/index.html","ac2fb9c8ecb216dbee307cb73eea0bd9"],["/posts/817b8e0e/index.html","455865831a2192aff4d2afb15bcc665b"],["/posts/844fc5df/index.html","47ad6438fe773941d9edbd718a54e9da"],["/posts/8acab12/index.html","6b178fe996ca89457224c01256bfaf04"],["/posts/8b3/index.html","e3bb3a4d6f48962198707eb93cc008a6"],["/posts/947ec48e/index.html","5f70e766c9168cfbfbe161c3da7e1801"],["/posts/997c/index.html","c69cb5a71beba927900e55fe9f5a11a5"],["/posts/ab43a875/index.html","8cd04896e2db00c9a1963254007b64f0"],["/posts/ac2c/index.html","9ff48c61ad06790a7bf5793e22c0e091"],["/posts/ad79/index.html","da8cb724fc378bbeb6c75e1381c18ad2"],["/posts/adf6e4b/index.html","ad7b094db67910dab9d63d3aceae07e0"],["/posts/aea2/index.html","38d31cb2d4fa5749f6e544d353bb5d64"],["/posts/b385/index.html","dd92b6403b01c4d3012251f36fc5b66f"],["/posts/b7ed/index.html","bc1d804fa43132ba01f4e0a5b2956d37"],["/posts/bc3531cf/index.html","abced36508314577cd44d7e9532a9da2"],["/posts/bfed/index.html","34ce83cc6f2fcb369bfec293ac4f83a4"],["/posts/c232/index.html","cee369dd3b790918cc8fddfb0aed1f9f"],["/posts/c291af82/index.html","643df53a95099daa4a67324ee5d47f37"],["/posts/c2c/index.html","fd5f1785d8896fe1584c30e024af6bf5"],["/posts/c336038a/index.html","28bbf1b19f213d851cc62ca12e6490ca"],["/posts/caba8902/index.html","d6453d7554d583cc605df0f7311f9b4f"],["/posts/d6c8/index.html","ddbe1fcab5b30124870a5adaf22c9876"],["/posts/d9a3/index.html","1010a5ea222f934bc4a2dc3b36dffee2"],["/posts/db12e7f4/index.html","6430401e307038ded6d199ad68e01712"],["/posts/dbba/index.html","d2b432b775fba0335664b4041ce94ebb"],["/posts/dcd4d5c3/index.html","e560d5dd7eff273022df25f9f05deee1"],["/posts/dfe935b2/index.html","dbabba4dcd14ec4988519375e87a76d6"],["/posts/e46d226a/index.html","dd947b3906c934605177ce42a3bb9296"],["/posts/e98f2569/index.html","dc3bb898968b0718467e9bdaa680920c"],["/posts/ecc2/index.html","55c85b678456eee971cc0cc34390e855"],["/posts/efaec666/index.html","a080a73d1da47b0f0f8f9315a56cf7b5"],["/posts/f20cb9c8/index.html","17c5d419120812e31b5951ac34602962"],["/posts/f663/index.html","47b1dfbaa362cfa4ea34d875e5530e91"],["/posts/f7a/index.html","4564601507f61f6c557658f423ff47f4"],["/posts/fead/index.html","dd7f15a02ed93971a39fea0d843cb668"],["/sw-register.js","2e11672221898c08556e1353c75cb82e"],["/tags/Adobe/index.html","94ddeeec8e5a2035325e9bc6de2ef3a2"],["/tags/Aplayer/index.html","2383d7e1ed5c68223bf880514c8d01e1"],["/tags/Arduino/index.html","a9677bf16fe48d952ac56c920543cea5"],["/tags/GitHub/index.html","c95b4ffc16cd6f70e2073bd81d0a69b6"],["/tags/Hexo/index.html","663f30539c0e3cd6d9d7d99aafad767c"],["/tags/Hexo/page/2/index.html","be6584b5c3281467bffdcc51b515320a"],["/tags/JsDeliver/index.html","648191036d2ed6892061b1a1e8f70444"],["/tags/KMS/index.html","13e3c58bc6d7d1b72f6667b9e5880cba"],["/tags/LoRa/index.html","5bfa4027b446eabcd46ead71d0028f52"],["/tags/PC/index.html","e6da777db571528d7c1bd7dbd8008e2d"],["/tags/Pycharm/index.html","00c7190e8f28077b6c09ff14ce99db50"],["/tags/Python/index.html","cd7747ce39dda810dbff8391e8afabaa"],["/tags/SIoT/index.html","063f0ece39bd9f0bd6ac012777f80c7c"],["/tags/Windows/index.html","6c33eb8e42d10ef6cbdb084fb0923e25"],["/tags/html/index.html","99f82e93f16d700faa6da061c04e9899"],["/tags/index.html","8ae3a715a95c872157e4bd0cd119b680"],["/tags/turtle模块/index.html","6aeedc59a951058eec4b110af22195c7"],["/tags/优化/index.html","ae7d8ae2f2462d1550d23610fdee2c64"],["/tags/元组/index.html","86803a94babb3cd0db98114ec3a6a487"],["/tags/函数/index.html","8b12ded6c94100700c3aec57d6727868"],["/tags/列表/index.html","7562842fed567723e12f18fc50bb50d9"],["/tags/博客/index.html","b591dea5b32e8bb46f17d20aa6295a5e"],["/tags/博客/page/2/index.html","c3104e5ee2c56711b8e79b86221695dd"],["/tags/右键菜单/index.html","b553c021b166481665fd362936ad0a9a"],["/tags/图标/index.html","317b5a639b7dda350c3d24347b1c861a"],["/tags/字典/index.html","8d7792dbaf066ba4d78d39b790f00a28"],["/tags/学习笔记/index.html","aad0371841a8644af270395ed01e1748"],["/tags/学习笔记/page/2/index.html","a80bd3fdb156cf1400540568ad50e9f1"],["/tags/安装驱动/index.html","8d1318d41da507038d25d1c689bfa435"],["/tags/成品/index.html","ce0e6dfb11c181ca846ad1b698e707a8"],["/tags/技巧/index.html","cb16cf7a0449de1cd85f8ba6450d922b"],["/tags/技巧/page/2/index.html","ee8954b48b9e91f19497a979dc95fd89"],["/tags/技术教程/index.html","c0bb9462d0200000ff34ae1cc10ee52d"],["/tags/教程/index.html","89da299fdd7900fbd40a2e007f1273a4"],["/tags/游戏/index.html","5a1aa214eac8e8236baa2194069d519b"],["/tags/物联网/index.html","6f60fac816d7a486067bf9d9febec8d3"],["/tags/百度网盘/index.html","5a828c0456221292ac30c7cc7025ace8"],["/tags/算法/index.html","ac5bbe0392c49c8fcf5e3708b8777a89"],["/tags/系统增强/index.html","7c41e0531694e1beef02940266c8e067"],["/tags/蓝牙/index.html","5f67a519cd00d2fb32992ca558e477fa"],["/tags/说说/index.html","8be787c6667e6f6c92bfca78f7180e62"],["/tags/软件激活/index.html","cc6918b8e22c739a0d05d98cd1957cd4"],["/tags/链接/index.html","4044ee768192e3b48fa3f7b15ccc211e"],["/tags/阿里云/index.html","bdca9d7a45e7430e45a2e14a2fa1ba72"],["/tags/音乐/index.html","1f6f7ba0fe9894825d2db510fe376d22"],["/tags/马赛克/index.html","6b6a09d06743ec4b7d36ef28aeee5c42"],["/talking/index.html","3c46ed15cee9fec1437d0ada7f245075"]];
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
