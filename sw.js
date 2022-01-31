/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","658ee99acbc365df69daa1080a69c816"],["/Demo/index.html","88005e20ffcdaac90328dc3b0201b003"],["/Gallery/index.html","b7a445b217b020f6a4d2e8b08d6e43de"],["/HTML/love.html","9789a42d65dc9fc0da194361a55dfb2e"],["/about/index.html","7fab318d4793133c6c0d0cea53d73781"],["/archives/2021/01/index.html","ffade1d659249ae7ccd15e65f4b792a3"],["/archives/2021/01/page/2/index.html","73f44d910d80151adc0643bab382c7f3"],["/archives/2021/02/index.html","141fb942d554d59f963c218df7d5daed"],["/archives/2021/02/page/2/index.html","cda3b60c00b7d52f82b4a8548ba71b67"],["/archives/2021/03/index.html","801eaf36d4f0e76533d8393447a9fcbe"],["/archives/2021/04/index.html","8a6560f9ec12d5ae819ba3e0855d810e"],["/archives/2021/05/index.html","6fc4507dced20fe16c91bcec64394897"],["/archives/2021/07/index.html","28f1cfe13cdb0a4b7516ed1ea38bdf20"],["/archives/2021/08/index.html","298b19086742f8df204c6419fd0cc5c8"],["/archives/2021/index.html","1fe583cdf48f187cb54ae4a928d9676c"],["/archives/2021/page/2/index.html","fe780211a0addc2aff194bc147ce72da"],["/archives/2021/page/3/index.html","4ac2afe574a0d6cecb64a6a75fbad3ba"],["/archives/2021/page/4/index.html","914af4574d9b58e3b3c91bdabc8cb016"],["/archives/2021/page/5/index.html","b947ba27c220125573dc978f62a19f3f"],["/archives/index.html","35b7535e51f51a7d3c37cc311955a1d0"],["/archives/page/2/index.html","96957d665f3c38612e1c005d402baa34"],["/archives/page/3/index.html","c7aa2c5e61949f463949bc709eb29982"],["/archives/page/4/index.html","e3c9812383ee89d5b92600cd356000b5"],["/archives/page/5/index.html","917b2110d25cb709b4271dd8f7f9ece1"],["/categories/Arduino/index.html","311ec152c3cffd794d80344f8a76048d"],["/categories/Hexo博客/index.html","d37b8f728e6e76263a344389b29d9c3f"],["/categories/Hexo博客/page/2/index.html","4a89c18a1d184b1ec8e799103ded64fb"],["/categories/Hexo博客/技巧/index.html","2cfc047725206388dfcd93c5e48d50d5"],["/categories/Hexo博客/技巧/page/2/index.html","75555f142ac77f147c6c36e8ca089466"],["/categories/Hexo博客/搭建/index.html","f24b2ce60a2761fd0fa866d97d801b78"],["/categories/IoT物联网/index.html","fa8242bcf9475a3badc2cb35a6d16af4"],["/categories/PC/index.html","fe605decb050cbec7d2db54cfadf4d35"],["/categories/PC/媒体处理/index.html","fda4a457f6e8781d76e4cb3aeb546535"],["/categories/PC/系统增强/index.html","0886750ef3d3b0bed0bc7adf37af6389"],["/categories/PC/系统镜像/index.html","18cd54f30e499950b09574dfd862e4e4"],["/categories/PC/软件激活/index.html","d126b11ad67133897db64cd95c93b4b2"],["/categories/Python/index.html","2f665f9ea8cb596811322d7ec43ef30d"],["/categories/Python/学习笔记/index.html","45a21ae2da4f3125940d0e77b01c1ed8"],["/categories/Python/成品/index.html","d783e0465c351e39ff36680bd421e21e"],["/categories/index.html","c2a6fa86c37759576027a81a3771bdaa"],["/categories/其他汇总/index.html","88f92f5ec563df43c13efa676b5c9aed"],["/categories/学习笔记/index.html","c0f63ab25b74bc1d9c7dddd805db1b09"],["/categories/技术教程/index.html","8b869a2ed573c1d3ab432be8d5c8c690"],["/categories/游戏资源/index.html","7f8633f494e3db3476f6cb5010715cf1"],["/comments/index.html","5658106f3c15e5610b3a59e311755763"],["/css/custom/twikoo_beautify.css","b5c8a07528ef0a944b87a1a5701ce5c6"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","1be40ef63ffabb35de306f1dc2f5c5a3"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/history/index.html","505f4dece6c61864354082b0d89970f3"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","07e666b8e067ab26714c2225149afe7f"],["/js/main.js","67ef93b7026979d99da673cfd9fd85de"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","1685cd43da0de7abd4a649dd5b2d81db"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","9f465e7dd29ec62dbc6af321882c2b59"],["/js/wow_init.js","4244acb8641a2525f168b604f9ca4844"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","223418aa0a4cbe9fa82d08d1d65cd3bb"],["/message/index.html","c57af51f0ee6dacbc0681b671c661451"],["/music/index.html","cf88a8892034ef9018235357347497e8"],["/page/2/index.html","eb5f4df38fa6de5715e2dc7adcbdf207"],["/page/3/index.html","df80e4eb170f8dd57decbead7e96191e"],["/page/4/index.html","c848b8aaa174cac7cbd3f95369081fe8"],["/page/5/index.html","2cb891fb25cb604626a1bc314aff2949"],["/posts/11e4/index.html","9ac0995706d51270fe6afdd0c73f2baa"],["/posts/126239f4/index.html","f823d20aac13a0b0c23486f756f445e2"],["/posts/20b3/index.html","a26e62ba37a1e4124a13c3e14df703e4"],["/posts/21396629/index.html","1231e0372b63dc577d5850e8a4b47fde"],["/posts/241519a2/index.html","afd55d1273b910c24806d4845d7c426e"],["/posts/40cad56a/index.html","cdd75430c84a9ce73e1b79c97560b280"],["/posts/4161854e/index.html","1cb78ff3a2878bd35e1fa3d665a5ac2c"],["/posts/4254dc4c/index.html","341bd12e9b12a8d40f92dff148d0462f"],["/posts/461b0433/index.html","016c33e4dd1ec3cecb31687cda0294a3"],["/posts/56ce/index.html","d1a5da46f419ed9cb4dfe759d708016a"],["/posts/60c319f6/index.html","03acbf590f41fc77a72612df1d9fa3de"],["/posts/6746a1c3/index.html","6f37f0e72efbed42b618ae5cc084ab95"],["/posts/6c20/index.html","c36341b1f4820dba272c99a2a6cf0205"],["/posts/73b37fcd/index.html","df5d5bc8695decc27bce082ac8b09b2c"],["/posts/749a3a09/index.html","b66103ea3c723f9e1de1ba7578ed61b1"],["/posts/7594/index.html","1ddc4e5925d76bc9c9c121282d4a840a"],["/posts/77049f2e/index.html","c19f53aa9a84ad71603af1b181be2b81"],["/posts/7c82/index.html","68bf6b786819ce5b33e7a23a7dc16ae3"],["/posts/817b8e0e/index.html","3365b18c80e53ce78cb40952f0ec7098"],["/posts/844fc5df/index.html","4314236fc73238978ae248291406fe5a"],["/posts/8acab12/index.html","a0bd8fd83bc1c091e4640de9b79c7d8b"],["/posts/947ec48e/index.html","aa25291ee50f843520aaa251f0d31b32"],["/posts/997c/index.html","81ffad8542bdc8478ff07e28b5885f1c"],["/posts/ab43a875/index.html","b1a0b787c48291006d49c0b04d038969"],["/posts/ac2c/index.html","12ff848ec2e91179fda9f18b5e1b48c8"],["/posts/ad79/index.html","7017a6100cd4b905621b2c4864c2997c"],["/posts/adf6e4b/index.html","f285a2e28534cddf36b604b91f236456"],["/posts/aea2/index.html","09840ca30bc327e443e7e2baea34fd8d"],["/posts/b385/index.html","8b428dd5cff2516888881c3d6173e65c"],["/posts/b7ed/index.html","a5df3bec4a9bdf1680b8b149fce14c87"],["/posts/bc3531cf/index.html","9ecbaaa2d9a04b8e1ea6fcf2f540de54"],["/posts/bfed/index.html","6406efe02b8a99a1ba0a7718be77abcf"],["/posts/c232/index.html","1a6ed50967aa9dc7621688945b9a7693"],["/posts/c291af82/index.html","98ceecd5080881bfb1e0dc60165141db"],["/posts/c2c/index.html","1e5e18e1dd381c804060ec5fe6e14a2c"],["/posts/c336038a/index.html","27249081aed025b1cda7e74a8740eaad"],["/posts/caba8902/index.html","309b5c6ddd8fc3da895d3e1ea72107b0"],["/posts/d6c8/index.html","b1efe63041c09bd72a678a9b414f7ca8"],["/posts/d9a3/index.html","c5ab5e41205bd3003be2654d1509f50a"],["/posts/db12e7f4/index.html","f223ba9c170817d21563d2e95b7b8fd1"],["/posts/dbba/index.html","b451c390c0f16335b7288d283e86f395"],["/posts/dcd4d5c3/index.html","bfd9476db6ff5044cd7dec65058a67f3"],["/posts/dfe935b2/index.html","b38d2c8a5d5a56049bdaf145b3fc7f92"],["/posts/e46d226a/index.html","527a4b912330b59bec7038ec07648503"],["/posts/e98f2569/index.html","c9817e93f9693c5ac43eac0311dd64bf"],["/posts/ecc2/index.html","624a12e848ec2d063ddf8a7efaac8c88"],["/posts/efaec666/index.html","b24555bec0d998b5f3c6b2f1b6f6a0ab"],["/posts/f20cb9c8/index.html","48e63172f8517dd53e70aedeb3f6343e"],["/posts/f663/index.html","6d24686f89c6321595cd2fc3c693d68b"],["/posts/f7a/index.html","4ffabd8e32032d13f42f2b3b439d3c59"],["/sw-register.js","cfa0bfba2e2151b55da5136789618b47"],["/tags/Adobe/index.html","ec7343f3001da586bfbdd80184bd7bcc"],["/tags/Aplayer/index.html","b5a29fa9074b4ca7e03b5a648f87593f"],["/tags/Arduino/index.html","3eb36261356bb9e0ed761626b31258bb"],["/tags/GitHub/index.html","43e7e1b432a370cb5c052661c781eb89"],["/tags/Hexo/index.html","69d744c1d717ef53b98caaf5e32c12c6"],["/tags/Hexo/page/2/index.html","63ddf8ecfec903c7ec87cec0827caebc"],["/tags/JsDeliver/index.html","eae645f4a588412e58a02eb3dce86cdb"],["/tags/KMS/index.html","1ccf8fb964db5192464e62906945e759"],["/tags/LoRa/index.html","2924bc0257e17740fd1f4185a489ea04"],["/tags/PC/index.html","94eb743a3caec6734196fa8273c5e912"],["/tags/Pycharm/index.html","65a0d0a55a55bbe02107e204bd103cfe"],["/tags/Python/index.html","3a13c86749002bb581c1cbb76622b80c"],["/tags/SIoT/index.html","68fceb02d0279c1cf9cc5c44c3a5ff26"],["/tags/Windows/index.html","7f9ca73d1b3ce72776eb25f299d32822"],["/tags/html/index.html","414a728927de63f5922571758253755c"],["/tags/index.html","628ae4328170c5b06a31bfda386880be"],["/tags/turtle模块/index.html","f6a135d622ec8e4391f78fb5dd453239"],["/tags/优化/index.html","ee768b0420bd9c16ea0afa0871ec3e6b"],["/tags/元组/index.html","9d92c3874929af7e16ea5e16be252fcd"],["/tags/函数/index.html","f6d58d75118d85fe614aabc5f6612e84"],["/tags/列表/index.html","03dd6d540af80980a0f42b2a048beffd"],["/tags/博客/index.html","e8a32c5a43a30ae29d11743b676335c5"],["/tags/博客/page/2/index.html","3977d4b2fd0ceda7567112f16ec72878"],["/tags/右键菜单/index.html","b1b9e3cc3f69edd7d3892f7ab78f93cd"],["/tags/图标/index.html","cd52e06f80f43ea4fd5e207075edc766"],["/tags/字典/index.html","ab347c283daaa8aab16dcdc1e168d63c"],["/tags/学习笔记/index.html","3b17f13ab626522ae9568f56f7052a95"],["/tags/学习笔记/page/2/index.html","afe35d434f0d4b6819efa7ceb7612156"],["/tags/安装驱动/index.html","43710de04abe0a71002699294eb72434"],["/tags/成品/index.html","c9237877c4258dfb15c79b7d06948796"],["/tags/技巧/index.html","ecf0af7f102bcfbef468732f1b0accd4"],["/tags/技巧/page/2/index.html","dbd218f133ecd2ded4491738e1555d28"],["/tags/技术教程/index.html","dce859f69077a732dec8b71c65c3267b"],["/tags/教程/index.html","6f9ceaca2d1b7d8a0f37ad020d03260f"],["/tags/游戏/index.html","60eb2e037c10f96ce8954c8998f20340"],["/tags/物联网/index.html","e6ca6fdd463dc079e9fdba7cf298b467"],["/tags/百度网盘/index.html","6ae1ae00a745a030e0a392bde5c84527"],["/tags/算法/index.html","c703550003508d3d0d12afab5f83fd43"],["/tags/系统增强/index.html","93f9c3a9190b038e201dbe00e679d398"],["/tags/蓝牙/index.html","07b0c6d3128119cbb599b7ecbe64358b"],["/tags/说说/index.html","dac103e3a1f0a517a849cf3f72a1a4b0"],["/tags/软件激活/index.html","e5fced78e7150bf4dfd9c85851ee5ffd"],["/tags/链接/index.html","f87f6776159891155b74c1fb614768e3"],["/tags/阿里云/index.html","3157ce233d37adcf6a5a182108b47c27"],["/tags/音乐/index.html","70d4dce576920353f07fc29fc3940290"],["/tags/马赛克/index.html","1385a7fa36b90acb492ec471780dc1d4"],["/talking/index.html","165f0b3392b380e3027eef9ac7ae18d2"]];
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
