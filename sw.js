/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","d796c0ff052a4dc1c09341b6ef342d3f"],["/Demo/index.html","26183ff85817dc185baec592c6e54a6a"],["/Gallery/index.html","38400088ad97d032103b1d2ba470d9df"],["/HTML/love.html","f4dcdcb8f92985151d37107b8afd4bc7"],["/about/index.html","3c383aa6c69530e3bcf56c9cdf5519c0"],["/archives/2021/01/index.html","23b9823a686a7a560a2fb6a4878a09a4"],["/archives/2021/01/page/2/index.html","c1c3c438128621c6e8dede0598160961"],["/archives/2021/02/index.html","01b46d7ad492e10f2270117c874e7b75"],["/archives/2021/02/page/2/index.html","d3a937b9c1301e0a546735bc7562e68d"],["/archives/2021/03/index.html","353eda257d0fd5ba564a9a7cb92c034b"],["/archives/2021/04/index.html","677685fda2fe0d0ea5986cd5c7ccdb38"],["/archives/2021/05/index.html","3f8eaf888acced355cfc0d9e28948ead"],["/archives/2021/07/index.html","f55637f0b34b08a6b6767b4bfb49677a"],["/archives/2021/08/index.html","858bf8008c97c11287b67d7c743a6698"],["/archives/2021/index.html","d6dee5a12b6618b6c7cdfe5f648ab457"],["/archives/2021/page/2/index.html","175f14a06e6361f16783c56c3936a304"],["/archives/2021/page/3/index.html","e42f11b806618ed726e8e532d4989048"],["/archives/2021/page/4/index.html","23654b088da6385c0a42e106b277dcf2"],["/archives/2021/page/5/index.html","49c52f0926c01a7206fd51ee0e2f76fc"],["/archives/index.html","8371243aa45a38a1bc04ecbb1bfc95e4"],["/archives/page/2/index.html","c41f8164ba7b7a05f0cbd1a25e003cc9"],["/archives/page/3/index.html","092b3ae8008c26904fff817eef00929f"],["/archives/page/4/index.html","29d03a0ab5ed8c2c8be9ba896795211f"],["/archives/page/5/index.html","e7cb3429d3af05187e17eedb14fdf6c6"],["/categories/Arduino/index.html","9fb6fe136085a3192cda3f010b41b8fb"],["/categories/Hexo博客/index.html","4f17a1801d443df66fdfc12f5eb733da"],["/categories/Hexo博客/page/2/index.html","f830b7d1aba2f69c796ed573d4f76d34"],["/categories/Hexo博客/技巧/index.html","6587980b12da8e6e33daea83bf26d927"],["/categories/Hexo博客/技巧/page/2/index.html","5832db6620ffd65770dabe437fc527c7"],["/categories/Hexo博客/搭建/index.html","42deba6cfd26fc532ce12590edbd9078"],["/categories/IoT物联网/index.html","3b765255f98e6ec3b4541fe9779fae19"],["/categories/PC/index.html","1c50d239d90d373ce2102eb912007157"],["/categories/PC/媒体处理/index.html","f2c8b818b0462bc6573f27b2204f2b38"],["/categories/PC/系统增强/index.html","3a608173875550158fe66ffe8ce7a902"],["/categories/PC/系统镜像/index.html","9ea7994112fc4db652ccf4f7c02f99f5"],["/categories/PC/软件激活/index.html","815d70cb289751545035718773ba5a6c"],["/categories/Python/index.html","07df4872d5c3967ab8fa9e9c9993e18f"],["/categories/Python/学习笔记/index.html","62a7048f4c85d8aebdd86ff72e9b42bc"],["/categories/Python/成品/index.html","913b3a8a932e5837b04ee4f5019b1c97"],["/categories/index.html","a33633c9fb7d91601f02950041402f0d"],["/categories/其他汇总/index.html","80af36762fc83337b23fb24f46168686"],["/categories/学习笔记/index.html","06714c77200ab69e8cd0b5c7b8a89975"],["/categories/技术教程/index.html","9138353ed19868cb8ada3990027812a9"],["/categories/游戏资源/index.html","b0afd59ac3e3b84110b8e0c643f7878f"],["/comments/index.html","b751de8e848c5dac5e372f6ae1cfe7fc"],["/css/custom/twikoo_beautify.css","b5c8a07528ef0a944b87a1a5701ce5c6"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","1be40ef63ffabb35de306f1dc2f5c5a3"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/history/index.html","a523070a419b99e7fdc231f3e9393b7a"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","7620c496e3e2ad3f92de68fc5f96764c"],["/js/main.js","67ef93b7026979d99da673cfd9fd85de"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","1685cd43da0de7abd4a649dd5b2d81db"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","9f465e7dd29ec62dbc6af321882c2b59"],["/js/wow_init.js","4244acb8641a2525f168b604f9ca4844"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","364f2c99e5867e75a49ca6c593ab7cbe"],["/message/index.html","bc07d90757e77b423becc57d7270d33f"],["/music/index.html","c73782ab2e9ebf4b1ce16452d2da0166"],["/page/2/index.html","37ec4972595758d6b90d1e3806705400"],["/page/3/index.html","11c92305cec11a341c946c6dfc283e5f"],["/page/4/index.html","5a6e1e13453cf0674d99dca08eb4de5a"],["/page/5/index.html","44a67ceaeed93c201b678ddd12df8ea7"],["/posts/11e4/index.html","c357a26329ebd3f0080a9e80cf0be907"],["/posts/126239f4/index.html","b738e78f4b1a64e883ef6279cc68f9b5"],["/posts/20b3/index.html","3fe32da96211e8c36e617fb50d1ade01"],["/posts/21396629/index.html","f42a1b30b20f0b3d1edda9dc776a33f3"],["/posts/241519a2/index.html","941ec8c355b99431acdbdccfda4d72e2"],["/posts/40cad56a/index.html","4f6b6bff5de6dbc8e925c2c218844d6e"],["/posts/4161854e/index.html","fd85d3c8f2e0ab66f68527b19f84e2d4"],["/posts/4254dc4c/index.html","f5159c6558617834224b5b02afe48cff"],["/posts/461b0433/index.html","64f041ae70eeff9dd3a9ead58e12f7e0"],["/posts/56ce/index.html","8cba64bdd39c07aa0f8e530887c46f54"],["/posts/60c319f6/index.html","38963adb24c8e31ce92555872378cd51"],["/posts/6746a1c3/index.html","28bcf65817bac83526c5146fd3666c29"],["/posts/6c20/index.html","26022fc595bab2dc30571c7aa2b98a2a"],["/posts/73b37fcd/index.html","b3ffd40e82fad69e00860f40ce6ffd66"],["/posts/749a3a09/index.html","2b8fe87f8e213895f9e5710f2daa4810"],["/posts/7594/index.html","47b80556ae16f241ac0228f941416c3b"],["/posts/77049f2e/index.html","75fac4be7565dc40ea5ed05fc17c4bb5"],["/posts/7c82/index.html","65172e336e28ec114dbcc95ed7fe55d2"],["/posts/817b8e0e/index.html","4b420362421dab79757c120a616fc794"],["/posts/844fc5df/index.html","c0e76e8190b7fbfc54d59082d2af5e28"],["/posts/8acab12/index.html","bc9d2e6970522944cf5f751eb4cb0bba"],["/posts/947ec48e/index.html","7b858d0b42cb1ef44164471c96817c62"],["/posts/997c/index.html","8fd91d5f4b0a9b8a5a58c90928488732"],["/posts/ab43a875/index.html","4fd2e8502e7519b2087f4b5c10c68fca"],["/posts/ac2c/index.html","7d0a51d840547b9b1852c76688dfd3d3"],["/posts/ad79/index.html","470c03bbc3e3780c16c0b4f26aa8409c"],["/posts/adf6e4b/index.html","192407316756097a1308a00166686c29"],["/posts/aea2/index.html","6dc57af48be335e3c9f76a24132fdc4a"],["/posts/b385/index.html","141687784b2d538ac0977fcc9d23e024"],["/posts/b7ed/index.html","d1d3423883e8f349d770954550d27fba"],["/posts/bc3531cf/index.html","798c337e2d4f60735c9d5fe448575c41"],["/posts/bfed/index.html","ad6de1680d22e1a5499b5ff689c99228"],["/posts/c232/index.html","e0dc85daf87224d633d3febf76a36e79"],["/posts/c291af82/index.html","bae7c1f332da80330f08c1dca11540f1"],["/posts/c2c/index.html","82edb0c623afda560c006ff925a4fc12"],["/posts/c336038a/index.html","4db003591bf730b21133b10f0303a6b4"],["/posts/caba8902/index.html","8ea1bc24c7c3f0ea2a68febb78fc71b8"],["/posts/d6c8/index.html","0a4bb47e9bd2a6ee1f419eb88e8c834f"],["/posts/d9a3/index.html","2158114b4505f5b0f27c8a9fd05a2f3c"],["/posts/db12e7f4/index.html","546a5642342e7778abfac597bb5fa3a2"],["/posts/dbba/index.html","e4897f8ede140c8b57dcda934c58be75"],["/posts/dcd4d5c3/index.html","cc5f6b153e4a31df2c391bac22dd9b3e"],["/posts/dfe935b2/index.html","02a7a22a79312f41522689952210f550"],["/posts/e46d226a/index.html","932d13b539dfef5aa31ca592eb7fa090"],["/posts/e98f2569/index.html","82a963d6f1a6957976364a7056127ce8"],["/posts/ecc2/index.html","30518757c9fd8b89e22b0ddd2313ded2"],["/posts/efaec666/index.html","4f2b4c73af24a8517173d56fa21f3cc4"],["/posts/f20cb9c8/index.html","e357d75e34c903c0559e73727bb1e4ea"],["/posts/f663/index.html","8dc384b90b17112642fc0102996a8a0d"],["/posts/f7a/index.html","35c0e7df0f5d5f4ac73c7103bcb6be9f"],["/sw-register.js","4a5951ba895c89f186537c5592f408cb"],["/tags/Adobe/index.html","6ccc57854759f9a29123b2522b6e6fd7"],["/tags/Aplayer/index.html","a013d53406cc041734e0b37d09615522"],["/tags/Arduino/index.html","9f5f8d71bf0469536edf620d77f3c93c"],["/tags/GitHub/index.html","241605eefed8934ff5d55516bbbecc13"],["/tags/Hexo/index.html","ade80915a6fc0a845224c427bbed9378"],["/tags/Hexo/page/2/index.html","333baf27703855455e6ef7f217cd62ab"],["/tags/JsDeliver/index.html","92b8e2245545e5a34558535b5ff9f063"],["/tags/KMS/index.html","13b7dc788cd8104e7a442a31ad32b527"],["/tags/LoRa/index.html","3fca849b230697ff863dfa9ae6fa6151"],["/tags/PC/index.html","a70eb8304f111bd9d27ce6b30d18aa55"],["/tags/Pycharm/index.html","b454171f4be021fa24093bdd59309b94"],["/tags/Python/index.html","e99bc82ad45a7afdb9c4821aa192bf6a"],["/tags/SIoT/index.html","1256787f3f35f926bedfaf6129262c5c"],["/tags/Windows/index.html","69042031e18e5d947fab42354e8ec6a2"],["/tags/html/index.html","955fa68b174921528a77369408939139"],["/tags/index.html","9fd8a74c90fdda56d7abfca7554242eb"],["/tags/turtle模块/index.html","c3300e298ff8d698e7dce22a02cbaf5b"],["/tags/优化/index.html","833d4bc825bbc74c28270b70121ea867"],["/tags/元组/index.html","b22ba4f5cb858e7ecfb6943ac7b0bec9"],["/tags/函数/index.html","e8bd4cb9f6bc75f6176d72a733be82eb"],["/tags/列表/index.html","df4c829ad10089cbe45855ea1b17684b"],["/tags/博客/index.html","38bc923aa425d67f1332cf943edb4f80"],["/tags/博客/page/2/index.html","bbc8e3929e736b8f7c76ef3294fbb770"],["/tags/右键菜单/index.html","9c11f6d28dcc4bc974b9d35a6e34158f"],["/tags/图标/index.html","a3bd5211c82ac7455dfeab75e00ae448"],["/tags/字典/index.html","a7c61dce8b99961a85b4a9f950ec5fa1"],["/tags/学习笔记/index.html","d649a637815b1738a1160168442d81cb"],["/tags/学习笔记/page/2/index.html","0003efcae76c6ded0c11d46dd20c4162"],["/tags/安装驱动/index.html","0c86ae34d7c752633d16f01816750513"],["/tags/成品/index.html","7ed388872b290f69ba100eec93cf94ae"],["/tags/技巧/index.html","ca93dc56f6ea8911e6efcfc38ccafbba"],["/tags/技巧/page/2/index.html","bb036720e12e988fb39bba1dd44b2c4f"],["/tags/技术教程/index.html","32faa0f8b971db560d5c8f89fc9f942b"],["/tags/教程/index.html","3f3ef52b2c3250ad88b6bfa33f8f117a"],["/tags/游戏/index.html","0834be8bf007b55ed4d2c3ca5b39fb41"],["/tags/物联网/index.html","d48c6174f144627b5702862d5f479407"],["/tags/百度网盘/index.html","3ccf58c2d65ce78d26774c143c2e2d4f"],["/tags/算法/index.html","a35955ef4dc4fc15a24e366dff7c04e2"],["/tags/系统增强/index.html","fff5fff8f60a9582d752bf7a62c366e8"],["/tags/蓝牙/index.html","3eda90bcba76f7ad611706054de663db"],["/tags/说说/index.html","635106b236b9a7476536d2f2551a5887"],["/tags/软件激活/index.html","29a53aab5f989c0fcaf7c9edd71f6c20"],["/tags/链接/index.html","3ad4de2b58015ee666a9dec005d564c7"],["/tags/阿里云/index.html","0545f0f8fd155a6819463505e1722bf1"],["/tags/音乐/index.html","1ac748410e4dcfed98ace188480e6e1c"],["/tags/马赛克/index.html","9f5fa7311daedb03d8fce690f38a2ecc"],["/talking/index.html","0d98667ec73321bda37707a0059b9f11"]];
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
