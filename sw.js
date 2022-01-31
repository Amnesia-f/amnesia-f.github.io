/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","8e3d48b880ad81553a68b701361c33d4"],["/Demo/index.html","d37a7f869d55a0d454084076d40aa391"],["/Gallery/index.html","67a2eb0623f9a8051da19d463d89144f"],["/HTML/love.html","f4dcdcb8f92985151d37107b8afd4bc7"],["/about/index.html","eee4ce8003de9a32141a29ae2ab00487"],["/archives/2021/01/index.html","0eb85e0b78ea5c107598d4283105c289"],["/archives/2021/01/page/2/index.html","d2af2586b0b122461e45a9f4493fbc24"],["/archives/2021/02/index.html","4a61bbf2c667a1ff9b1c32047d444053"],["/archives/2021/02/page/2/index.html","47f46006f9fa85e0d286b251e4409f6b"],["/archives/2021/03/index.html","f1ffefc0dca570dbd752574e74c08acb"],["/archives/2021/04/index.html","472be5f946546fde693981ee56757d8e"],["/archives/2021/05/index.html","0bd2cb358e7be0d4cf43a988d12762d2"],["/archives/2021/07/index.html","28a9581505dcddeb2cfde3834d34e471"],["/archives/2021/08/index.html","1f9277c6a437c171619b1f126b5a70bc"],["/archives/2021/index.html","5308e5557a6a172d034041a0555762a7"],["/archives/2021/page/2/index.html","df584e814e0bb5a8ac01bd830574752b"],["/archives/2021/page/3/index.html","d621c196e925e0910a5daf8bc44fadb9"],["/archives/2021/page/4/index.html","c3dc7d38a6fe2992f7bf16a135ce60a9"],["/archives/2021/page/5/index.html","586a92aee3669cc363c9f9ac0dc24cc7"],["/archives/index.html","7a64bc99371b952200e7ba448f743a22"],["/archives/page/2/index.html","1bc3d674a34104916b5f765e30594f07"],["/archives/page/3/index.html","943ca6bfbb5d3cbfbb63b3efde026eea"],["/archives/page/4/index.html","6ca26821798c81ab4a2885c9786f5a9c"],["/archives/page/5/index.html","d22b250fb74b59e08a2813ec0e1b4998"],["/categories/Arduino/index.html","bbadcd0145fb2b83a9babd855554bcca"],["/categories/Hexo博客/index.html","5d3369c22b738713e1264ffb964f3e21"],["/categories/Hexo博客/page/2/index.html","ac033e0fdbb7a715f50d45331e75f3dd"],["/categories/Hexo博客/技巧/index.html","9e5257feca33a67abec4b89265e5639b"],["/categories/Hexo博客/技巧/page/2/index.html","051209f3a8785b80c713883a450db0ae"],["/categories/Hexo博客/搭建/index.html","cb2eb3fdbfa3bd9c8a6c542d9728e06b"],["/categories/IoT物联网/index.html","bf768e50874616200ad9785ed386f523"],["/categories/PC/index.html","6098712a61b1e12a3296ecd2b92ccdbb"],["/categories/PC/媒体处理/index.html","a64add1b468a21cc4c8a293c23c9799b"],["/categories/PC/系统增强/index.html","064d2ad88dabd64fa6c48b485250282f"],["/categories/PC/系统镜像/index.html","fd1dc5f74be4d2f26b52bdc84449b384"],["/categories/PC/软件激活/index.html","ad101b38000a897b02cc06592e55c0fe"],["/categories/Python/index.html","d7c31e276713f23afed0cd90a92922d3"],["/categories/Python/学习笔记/index.html","c7de9c708a885378a895b64a2c7da22a"],["/categories/Python/成品/index.html","27d5f384684c64a92b03fd0c9feb0d28"],["/categories/index.html","ded766cf854557d54bbed1a5735e8d35"],["/categories/其他汇总/index.html","81df7d375aeb127702cc24cb924e85a1"],["/categories/学习笔记/index.html","8d4d38f72e03bda765f4d55619fcc53b"],["/categories/技术教程/index.html","4ae39fc4fb1f56f7864424dbf94e0ddf"],["/categories/游戏资源/index.html","04367cc209b5fcbe33ab111c25f29b3a"],["/comments/index.html","c9fbd4276622edbcfda7efd45a66e714"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","1be40ef63ffabb35de306f1dc2f5c5a3"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/history/index.html","be24e693d4a66641f8dc10df95c3403c"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","1178d66d2cee506de8c5c514d0246ca7"],["/js/main.js","67ef93b7026979d99da673cfd9fd85de"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","1685cd43da0de7abd4a649dd5b2d81db"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","9f465e7dd29ec62dbc6af321882c2b59"],["/js/wow_init.js","4244acb8641a2525f168b604f9ca4844"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","370a13a5dd99ec67b083ba0840ad25e9"],["/message/index.html","ed5c8a16ed8c38984d4444a47591d3ae"],["/music/index.html","6ee90b3a1a5c6cc10e585b8df12c9e9e"],["/page/2/index.html","6c1452f63e0996dd3da52c24c72e240e"],["/page/3/index.html","810f24cf068fdaafaa6da958d9da64c2"],["/page/4/index.html","8e793a2fb08f632f10d6be3d20a7bfa2"],["/page/5/index.html","477240acb38e97a317b09cbf6addc65d"],["/posts/11e4/index.html","251b32f5d0b21e169633f71106b2fd68"],["/posts/126239f4/index.html","f98bfa86791f14483b67f9292a462723"],["/posts/20b3/index.html","0a7ff356dc06e55d54f3a3f06e808e60"],["/posts/21396629/index.html","d0ce7a3744b0eda74a4417720d920a47"],["/posts/241519a2/index.html","1e456ec12790070b121c5ce6891474f7"],["/posts/40cad56a/index.html","571733561514c9d16ba1d24c1d73da1f"],["/posts/4161854e/index.html","aae6885a21ecd2e4fc06e5284d9f9791"],["/posts/4254dc4c/index.html","877425b67af8436120fbe337753f7cc9"],["/posts/461b0433/index.html","e19538d4e0702084a63470c3e0b493f1"],["/posts/56ce/index.html","e407eba0d5e4396f919404c1f3108dda"],["/posts/60c319f6/index.html","b5905e32225310bafadea9e3af457be9"],["/posts/6746a1c3/index.html","7c4ca94790dd22eeade13dbeb26df4f1"],["/posts/6c20/index.html","be3a92517d8cd765f3e44aa67e95a01b"],["/posts/73b37fcd/index.html","0abb35b1c5605e24c289a04d4cd78d36"],["/posts/749a3a09/index.html","9bd2008a88cf510b3da6c00be99cb853"],["/posts/7594/index.html","16942c5ad8967d8c49bc1ff33ef75f81"],["/posts/77049f2e/index.html","eb6485f6dba69439d3c8352cd6a3f4ae"],["/posts/7c82/index.html","c55d1c4b9e0ed44c5c619e544d74bc39"],["/posts/817b8e0e/index.html","6827b33bc31a8b104747577fa9258d2c"],["/posts/844fc5df/index.html","e1c58e7f5193346e0faf1af7340e7586"],["/posts/8acab12/index.html","4fe9fc880e9b39083b12242a315a75ad"],["/posts/947ec48e/index.html","65b48852b3353af0ad986a88a6797481"],["/posts/997c/index.html","8b7a22d82ae817ab1be51d81d732ab8e"],["/posts/ab43a875/index.html","ed8a4198d36e3eaf81a83bbf7e404a80"],["/posts/ac2c/index.html","8a17ffed6b407fc9c59462d94dc7d6d4"],["/posts/ad79/index.html","e8915d52ca122b907990e6d0280d0189"],["/posts/adf6e4b/index.html","d5c80b7ac47d9a1c9a65f2877d96785e"],["/posts/aea2/index.html","6c2406e3b9a690aba58bf2df366a9784"],["/posts/b385/index.html","18ebdc71ee3c1073f7f88597d914f73c"],["/posts/b7ed/index.html","88444646810ba3e76e21c478d31dadc1"],["/posts/bc3531cf/index.html","676f60e3a698d5152e06058dcdbfc157"],["/posts/bfed/index.html","62eeceabc21802a2270428ed9d4ba9cb"],["/posts/c232/index.html","6a62ef8a001f90bf581129d31fceaa30"],["/posts/c291af82/index.html","8dac79da1b1b5364e8c1037d36f4fcd4"],["/posts/c2c/index.html","8079eedc73964f7cbbafc950aaf680cc"],["/posts/c336038a/index.html","d3703da0a983f5de7928d3a40cc2335b"],["/posts/caba8902/index.html","2cbae4d8611dd39143861e57f2e96c1e"],["/posts/d6c8/index.html","099310b6eb110a66763d89a8e5214cbf"],["/posts/d9a3/index.html","adad46e8bcbaec027517cec121915d8c"],["/posts/db12e7f4/index.html","fbbf9cfe66e2f78b969da9b49e91bc6c"],["/posts/dbba/index.html","e9a38fd03e97bc74d4cbf23d2f006ee9"],["/posts/dcd4d5c3/index.html","4ecfb14dce9a416891a4f7bea8d55cbc"],["/posts/dfe935b2/index.html","96b9b55f4189926bb97db1900ad37bb0"],["/posts/e46d226a/index.html","e05ad2a30bbabaf1f7f87afe7977d153"],["/posts/e98f2569/index.html","74a076f67a0a5bd28f17392f59785ae8"],["/posts/ecc2/index.html","a2f832ecbe7f9a44e6208276a92928e9"],["/posts/efaec666/index.html","4d53635bcf697ad4f44ec7f3721629d5"],["/posts/f20cb9c8/index.html","c24e01e14882629e592f1e7344820283"],["/posts/f663/index.html","ca742025cb8df086e1177437bb1c04b5"],["/posts/f7a/index.html","b64216bbf18a9ae3d7996ddc7b0c61d9"],["/sw-register.js","e283ecc56f3f23c574bcf6ea1af24e99"],["/tags/Adobe/index.html","398bbe55cf7b22cbc6e789067aa2d542"],["/tags/Aplayer/index.html","f43c714c2b43da57d6d85502aac1189c"],["/tags/Arduino/index.html","7b69f0c54e6ec6aad4179f76ce58d7be"],["/tags/GitHub/index.html","5f5e410d4f0a7438fe9759742136d3d1"],["/tags/Hexo/index.html","3512e282411843e32135d1636af7fcce"],["/tags/Hexo/page/2/index.html","179996b9117ae0ef4d43ebf35e12dfab"],["/tags/JsDeliver/index.html","59974cfb788e59b09b45e15279e680f7"],["/tags/KMS/index.html","6144653c385063ad6042711a50e3223b"],["/tags/LoRa/index.html","61e263ed9ea1e02c89109505c01b3a10"],["/tags/PC/index.html","2f1d185d426910137ebcbbd1a0ed25cf"],["/tags/Pycharm/index.html","dbfda9c6b8f38fb5be1f94b7227eeede"],["/tags/Python/index.html","ec510cee5b8258741db4e9b5c3e107b1"],["/tags/SIoT/index.html","b7ae0aa134c7a749ace24a640a57a81d"],["/tags/Windows/index.html","993bc120d5c4283ecf602630d5c25a39"],["/tags/html/index.html","f69435fcb389045e5ef3094ed324f858"],["/tags/index.html","83ac08e8b522b0a972846921864140a9"],["/tags/turtle模块/index.html","4676513f084624ed7aa9372bae5d7e41"],["/tags/优化/index.html","5110d8492d5e28c94f4e334650c91713"],["/tags/元组/index.html","d7dd79f54c8814b26be47afc7aaab669"],["/tags/函数/index.html","f506cadd433040ad49f24130374e44ab"],["/tags/列表/index.html","69f0281f14aba6fa6b79f8522e5312ed"],["/tags/博客/index.html","5ab97f3de8016ca71cc223a74b23b0c9"],["/tags/博客/page/2/index.html","a7e4b4b23677d2ac0bd00063a84d2dc4"],["/tags/右键菜单/index.html","431a850a8126c9f8cd9fc1e6893533f3"],["/tags/图标/index.html","8d52e51389ec2bd128baed007dcdec3d"],["/tags/字典/index.html","be2cefcf4a8c86bf3439e4ab15688de1"],["/tags/学习笔记/index.html","8eb20343ea6b0598ad80de9684c4bbd2"],["/tags/学习笔记/page/2/index.html","1f56f6bd54d03be0fbd6e04536ade80c"],["/tags/安装驱动/index.html","28b70a12f9a0d33c24c45c4e77182bf9"],["/tags/成品/index.html","59e303ce8509cc95ee900dea8638420f"],["/tags/技巧/index.html","69e79d954ac7c3808f7d413d5a166ec8"],["/tags/技巧/page/2/index.html","04d2a3489ebd49d12e0e09924f4db03b"],["/tags/技术教程/index.html","711fdff0dc202fe636e4e8d9684b1134"],["/tags/教程/index.html","3c25d694deb8fd4b539e12ba668cd128"],["/tags/游戏/index.html","8668f0779d3f9aee82c94abe29341613"],["/tags/物联网/index.html","45a2231980d3940b526616390b3375af"],["/tags/百度网盘/index.html","93f826caaaa024cdb276ee80e0d15550"],["/tags/算法/index.html","306a88ea1842062ab3b31b3b823d3c9d"],["/tags/系统增强/index.html","2b55ebadc04ab5128b0f4564c9e19051"],["/tags/蓝牙/index.html","fbbe841c92b52ac76d3559091ae105e4"],["/tags/说说/index.html","17f095312a0ef5fff1017351c3431f7c"],["/tags/软件激活/index.html","a109daacb1a125984878f2876d6c9f91"],["/tags/链接/index.html","aa2baa8a3c8028248e35185a817d6c1a"],["/tags/阿里云/index.html","967bfc157105ad35e7a7114de6039a8c"],["/tags/音乐/index.html","514de0d4dcd23382494f18c1ecccd7f5"],["/tags/马赛克/index.html","afbfbcd8f69586765e00c078bc551442"],["/talking/index.html","d8284373c5462fba438c3635ea2df09d"]];
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
