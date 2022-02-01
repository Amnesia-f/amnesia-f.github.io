/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","5bd8ffa0926d6128a443a4203274098e"],["/Demo/index.html","d06b97496940e37051cc0c21938d85f8"],["/Gallery/index.html","2e0fb23c8668c621f2f0ffa0016fbdb6"],["/HTML/love.html","9789a42d65dc9fc0da194361a55dfb2e"],["/about/index.html","5ef32103e50de89ff3bbb37139ec0f67"],["/archives/2021/01/index.html","19091cfa534aa6bad3fca481ab322411"],["/archives/2021/01/page/2/index.html","836244d4fcd0113d177e067d27662abd"],["/archives/2021/02/index.html","1c90633211533d8223f2595d0af597d4"],["/archives/2021/02/page/2/index.html","4f5afd41fd70c48751372409c85d91f5"],["/archives/2021/03/index.html","675ca2c8384a1f6621cd8f1fc979ca8e"],["/archives/2021/04/index.html","a23c12f9bdf0ad96ab0aba312333db41"],["/archives/2021/05/index.html","cdeec6c589200951a054ee79b7c81ad3"],["/archives/2021/07/index.html","4532f01234bb8949008abf7ebd98fa02"],["/archives/2021/08/index.html","94c6b102b6facca54a59b014036aea2a"],["/archives/2021/index.html","63e718555983b95c51fe07088db90545"],["/archives/2021/page/2/index.html","c061e26fce9af590eefa6f82cc8ec060"],["/archives/2021/page/3/index.html","e4a4b04c82e026b9ae87402e6993ebf2"],["/archives/2021/page/4/index.html","6f46d3b155194c2c6f179b6b2c916dea"],["/archives/2021/page/5/index.html","70cc6b8828f6818c4e20fbde3f6402b6"],["/archives/2022/02/index.html","a21416f6551eea22e6f14575a31c846a"],["/archives/2022/index.html","888e5a108ac0de3e5b8a5e0451ff0ec0"],["/archives/index.html","74cdbe89bdcce35742cb023704fe006f"],["/archives/page/2/index.html","68ed19e2be47dc4f45da5f52de144a30"],["/archives/page/3/index.html","e89695517133b62e94ebda34082c70e6"],["/archives/page/4/index.html","3e064b753768ce1292f3971ce90d2015"],["/archives/page/5/index.html","ee7ea6287d437492fe0fab64dca63c94"],["/archives/page/6/index.html","6a403603bd5e49b58330437cea0478e2"],["/categories/Arduino/index.html","c19b86e1723ce062381c0befc0287c4f"],["/categories/Hexo博客/index.html","3d2576fe86516ee38cf40085dfe79801"],["/categories/Hexo博客/page/2/index.html","11b6233ad230237651a34eb078d83f78"],["/categories/Hexo博客/技巧/index.html","79734c39235319615978a9cd133031da"],["/categories/Hexo博客/技巧/page/2/index.html","c565f9790b37e1f80cb974b04b1e8e61"],["/categories/Hexo博客/搭建/index.html","5817d2c57413944afe966536c350f442"],["/categories/IoT物联网/index.html","6456c954725e4722c8b1c5265e7b960a"],["/categories/PC/index.html","aa84da5bfd708fc671debc464c3cf2be"],["/categories/PC/媒体处理/index.html","eb740dfe356decb57168cf7562eda8d1"],["/categories/PC/系统增强/index.html","3c92c10b87b3c411e3a44d896447a97c"],["/categories/PC/系统镜像/index.html","e2d4f5a33984628794673ec034430113"],["/categories/PC/软件激活/index.html","59bf03872634b15d3745053aebcd0b77"],["/categories/Python/index.html","40ae25b5a0f91881c4b349f45fbf0327"],["/categories/Python/学习笔记/index.html","a9305830dd7c0424bca7f7509bf12db2"],["/categories/Python/成品/index.html","00bee75076f8bd6f7fb2a68b74c6a2e9"],["/categories/index.html","333125a738d68f867f87e88c4c217e45"],["/categories/其他汇总/index.html","3072c8fe6a2623fc33ac29f5e04e0887"],["/categories/学习笔记/index.html","96f9c0b90d3f49e92887ab2dad7f172d"],["/categories/技术教程/index.html","249a9b4de42e3db30a9f118739247898"],["/categories/游戏资源/index.html","112997ed3d3f6b7be67ad07bf2b57f0f"],["/comments/index.html","0afbb52f6eed73222098edb742a2b07e"],["/css/custom/twikoo_beautify.css","b5c8a07528ef0a944b87a1a5701ce5c6"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7134e739049e191ecaabecc52bf3756d"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/history/index.html","da73e2d84b59a51c5e6cf60234a9110a"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","e3df879709563b58ad77532e06f08674"],["/js/main.js","67ef93b7026979d99da673cfd9fd85de"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","1685cd43da0de7abd4a649dd5b2d81db"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","9f465e7dd29ec62dbc6af321882c2b59"],["/js/wow_init.js","4244acb8641a2525f168b604f9ca4844"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","16d8b9b24c0dfcb7631eceefd9250e54"],["/message/index.html","9dd41923bc1c5ebfcf0a553e8ea66c0f"],["/music/index.html","638f2dbd839496a49e0e8b78a81f210d"],["/page/2/index.html","dcdaa23d19ed9b35d0bf8fa4eff861b0"],["/page/3/index.html","fac655f68e3d2164b105c35829cb5dfb"],["/page/4/index.html","7b3e52eb869c62c6d1e9b60a83c8308c"],["/page/5/index.html","ed07cede63ea94a2edc08241807c0095"],["/page/6/index.html","5021214caf11aa24072aaf48797036dd"],["/posts/11e4/index.html","19ed0088b8eb09c14e1651ec9e229835"],["/posts/126239f4/index.html","208605732aea4bc759dcbb1f65f2353d"],["/posts/20b3/index.html","5e8de1bc2faaff7f25edbec26d92e31d"],["/posts/21396629/index.html","02a47732a980ac740553a30d1d06626d"],["/posts/241519a2/index.html","84e160bba3ab30d999f45d94758f456d"],["/posts/40cad56a/index.html","6befb76ee9c35e7c3b5bb050fff7796f"],["/posts/4161854e/index.html","fc4b204463308a8cba9ab9b511c9e0fd"],["/posts/4254dc4c/index.html","e371baed95d3355eb3e54c739a797b4f"],["/posts/461b0433/index.html","0c474812f7df4182009a27785e46469c"],["/posts/56ce/index.html","91756cabad558b68fd11244f47633e5f"],["/posts/60c319f6/index.html","fe43efd2d673defdbff39e24ad6ccd80"],["/posts/6746a1c3/index.html","1256d7ef117a02f45e0b0c2d1ef94055"],["/posts/6c20/index.html","6746b153a675c20dd7cc353354d0cee8"],["/posts/73b37fcd/index.html","de29fa7b04e995c52f8f6bb2386f6016"],["/posts/749a3a09/index.html","0739be5f76b0bea53b034b5cae793c92"],["/posts/7594/index.html","4efd2a43cf8b22fb6f3c82c7b2c4bc84"],["/posts/77049f2e/index.html","0a557c2263b084ed0826c6f0a7ebab6c"],["/posts/7c82/index.html","f071c58054d9679919067da3ff899c57"],["/posts/817b8e0e/index.html","05613e7b913fee315ff7efd9f32883a0"],["/posts/844fc5df/index.html","f375df6f32c222f35741b2ad03d2a9de"],["/posts/8acab12/index.html","55d31d613e51354a7a549fcb0dd49033"],["/posts/8b3/index.html","1d57f70a9352bb1cd929708af3aca5e1"],["/posts/947ec48e/index.html","b2aec3688ebe46133472e12f242d55f1"],["/posts/997c/index.html","020a959292048b8d07e8ecf66c4a316b"],["/posts/ab43a875/index.html","04778926015d916bcbfede4ae73395ae"],["/posts/ac2c/index.html","5e9b0025c9f70668b6b9d2d53fb42fe7"],["/posts/ad79/index.html","0094a0ebc49aaa85413906273d2be67b"],["/posts/adf6e4b/index.html","f21dd409c526dd78dc4f4ae6f18009f0"],["/posts/aea2/index.html","63e0ff756191ed5d42bcd16d1ad85e7c"],["/posts/b385/index.html","8fc6158934ae2441287d3a75e4d24401"],["/posts/b7ed/index.html","4d1b1f0e478e5a20a0fec52af130a106"],["/posts/bc3531cf/index.html","8ae4bef09c2ab5d52f87c89fd0a65ceb"],["/posts/bfed/index.html","8aadbeb9005c93879a675a2984ab21ae"],["/posts/c232/index.html","a3cf00c49bb6e3eeea6ceb075aa821f6"],["/posts/c291af82/index.html","97c2d6992d445437b90504140a07e34c"],["/posts/c2c/index.html","9dc595b353a05d0162fc33434bb80bd4"],["/posts/c336038a/index.html","72572b7144c0c079caa90a4f2a3fcf28"],["/posts/caba8902/index.html","0ca59bdc668e7b42fe60a30c0c4e302c"],["/posts/d6c8/index.html","a80fd8794f10004b0487e81f424c14c8"],["/posts/d9a3/index.html","40898a11ca8541aef533a79f817d29c2"],["/posts/db12e7f4/index.html","fd3c82f1882e5fd66a4469b49e8153e7"],["/posts/dbba/index.html","fa0c40d5c51bd7d42499c72ecfce2d60"],["/posts/dcd4d5c3/index.html","422f817d5ba67ba33ea9761aaff55a0c"],["/posts/dfe935b2/index.html","cb590cdff0c0110144ef4fb47fa05389"],["/posts/e46d226a/index.html","50fb1c7ad53c768cf9c3e79b6a0ad17d"],["/posts/e98f2569/index.html","c9a08d22dba34dd8c19d283a96ccbd2f"],["/posts/ecc2/index.html","8b26338919463c7d5ec50a0b1658d377"],["/posts/efaec666/index.html","f097756ec247d01b35718b9e997ac42e"],["/posts/f20cb9c8/index.html","cb0fb112671af84be08ffaf97ecd9d71"],["/posts/f663/index.html","469d7820087156f461aea334fc55d010"],["/posts/f7a/index.html","a8333131a8bd5f724b33f53707acfa78"],["/sw-register.js","b44822e749b82e3bd94c9a8f03d0dc6a"],["/tags/Adobe/index.html","a63bad64f7a9a71f718deea0280449e8"],["/tags/Aplayer/index.html","071a2f16354ceaed315e0600c9cdb557"],["/tags/Arduino/index.html","187cabc96893474d3b6415684b564504"],["/tags/GitHub/index.html","848f3e04d331d210a797477afe91f5c7"],["/tags/Hexo/index.html","a3ada448161714c51e0813fd07799d9b"],["/tags/Hexo/page/2/index.html","c2c3f8f251a9be55db8dfec92dfc983e"],["/tags/JsDeliver/index.html","9d18a7141882747dfe95b84cbd58b73b"],["/tags/KMS/index.html","d01114e9b2f0cbc99aec3d2b8a7133ca"],["/tags/LoRa/index.html","296b228116194949f4c84fa4424e9d9f"],["/tags/PC/index.html","f6ec10f26027d88e673747996c5c3aa2"],["/tags/Pycharm/index.html","7e2b286ede964b3aff88a4606c26d879"],["/tags/Python/index.html","d72f6bc1faa2a4714642dc828d1a47f0"],["/tags/SIoT/index.html","5bf14fcf23805c698cbd45320ab46e64"],["/tags/Windows/index.html","64a3b537c38d4dcd8b44bc426c644fc0"],["/tags/html/index.html","d38e0b79c558dbaa3ab2f2593528c11b"],["/tags/index.html","a2d0c0968a94892117843dce8fc7e27f"],["/tags/turtle模块/index.html","22e2d45cd4a46cb349a1b4bef238e58a"],["/tags/优化/index.html","1219a9a9369f10b6532dc7534f7022b3"],["/tags/元组/index.html","df33db713ed80ed9bf84c4fb8e9eab12"],["/tags/函数/index.html","1751e76258029b3c0792677bc8725031"],["/tags/列表/index.html","ed767a150a4880763e76186b6aaa3302"],["/tags/博客/index.html","44dc2761f3e2a2dbdcfd215bac749c80"],["/tags/博客/page/2/index.html","0d9cff01e71a566daef4d2ce7ed66518"],["/tags/右键菜单/index.html","1e759430220d10ff907b9606f2348405"],["/tags/图标/index.html","31a1f351346e80a01d76dc00c5595781"],["/tags/字典/index.html","daffcb227763f58bde8470fe93868e08"],["/tags/学习笔记/index.html","bc085827dc6901fc7239bfc7a55a36ae"],["/tags/学习笔记/page/2/index.html","dd674dda6a90b8cbfebbb39fefec5823"],["/tags/安装驱动/index.html","e8a4139cc7c83121d74473e9352417bc"],["/tags/成品/index.html","242d5ab2ef21e8e7d0ddc6c1372e126b"],["/tags/技巧/index.html","7b65e54f6858e299b3db2dcdf27427b1"],["/tags/技巧/page/2/index.html","694d926ad490eb8368d46be07ad694fc"],["/tags/技术教程/index.html","fb51b2f1c58bfda204be8e21384633ce"],["/tags/教程/index.html","4bdde49251b93357ca7a512cd7eefd16"],["/tags/游戏/index.html","f944ce21600c4ead8c3c185312fd8e9a"],["/tags/物联网/index.html","a68e4fcb2f61ef5c8ee6b8365ee87dbf"],["/tags/百度网盘/index.html","8b9b58aa1ba9670b9a01f75a2e635160"],["/tags/算法/index.html","7a108d06ec0b6018d469dfceab434d8d"],["/tags/系统增强/index.html","a08ddbd2126bbd3e9b64d3bc66c5cd89"],["/tags/蓝牙/index.html","b6265411dedbc98eae401d6b89e345d3"],["/tags/说说/index.html","dca75c6bcd039cfbb582b1cf26ab7072"],["/tags/软件激活/index.html","919b132bd15806b8a021a862e35f6ff9"],["/tags/链接/index.html","995b181b806df5edcc8a46e8acb9fa6a"],["/tags/阿里云/index.html","d0962fe2ce775984dcd42814d8a8c496"],["/tags/音乐/index.html","6ef59c0390823ec111bda603a67d2963"],["/tags/马赛克/index.html","1d4a695bdcdf33df21b937fe79fa23da"],["/talking/index.html","6579410c81d4d0d7de73f76d371e05de"]];
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
