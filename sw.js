/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","74a96c16030d556a9b28a987410c2ba5"],["/Demo/index.html","8dae8dfaee85cb8ae036a73b57c29306"],["/Gallery/index.html","9967668dba29e5b6fb5d3d67e80aff6d"],["/HTML/love.html","9789a42d65dc9fc0da194361a55dfb2e"],["/about/index.html","4fc5f109dc053bdbde257abe6008c4ee"],["/archives/2021/01/index.html","3f5163e1a4774e9a5e5a6aba891a8798"],["/archives/2021/01/page/2/index.html","3b0e7f0c6d7a6d21dd3ad390597685f8"],["/archives/2021/02/index.html","4994deb07ccc0a76c913e4c478ef62b0"],["/archives/2021/02/page/2/index.html","320a7ffb1877a1fc27869256cf5a9105"],["/archives/2021/03/index.html","380458a60b52f465b7e2c81669406b74"],["/archives/2021/04/index.html","211939535b68d2926a7ed4b7c1b40370"],["/archives/2021/05/index.html","63e16580892b7198612e3b10dee48209"],["/archives/2021/07/index.html","57539478d0964e57066ccee16213d9b4"],["/archives/2021/08/index.html","b6e35442717bbe3f6a5cd6f4703e9f20"],["/archives/2021/index.html","9656414d68e64aba8c0dcc48adda1329"],["/archives/2021/page/2/index.html","d549949b1be2d19dae291c0c40e4d84c"],["/archives/2021/page/3/index.html","e1ada9aa22b0c895e6c43f6aca375640"],["/archives/2021/page/4/index.html","084a19276095d00f2764062ba5b46a0b"],["/archives/2021/page/5/index.html","bdabe9295ec01460a4df9d48bab83bc7"],["/archives/2022/02/index.html","05cb4a659a5d88ec4c8ce06c366bdd65"],["/archives/2022/index.html","f270f136b599bdfce50480344848218e"],["/archives/index.html","530ade12b03fd435c408a56be3810e4d"],["/archives/page/2/index.html","805d348a06a51613d251d6bc3447c8ff"],["/archives/page/3/index.html","325baf41c65574a56880c221113fa91e"],["/archives/page/4/index.html","68c2a4030cf7c0dfa66cadbe830a7282"],["/archives/page/5/index.html","692625633e47752d425c9486cbcd36fb"],["/archives/page/6/index.html","30400b62515904c6caa0c2768de4bb9d"],["/categories/Arduino/index.html","c3ab096f050cf513493e7340396c8430"],["/categories/Hexo博客/index.html","2fead6e7323f6b8abc19452b1e4cf91d"],["/categories/Hexo博客/page/2/index.html","6071b6c8065af55df1c2d44b30d6ef3b"],["/categories/Hexo博客/技巧/index.html","8fc9645cee9cc8e634b85384903f12ab"],["/categories/Hexo博客/技巧/page/2/index.html","967618914f007e8265e3c12133ba5641"],["/categories/Hexo博客/搭建/index.html","71dd19c4b59bc9ee8fc078e374657502"],["/categories/IoT物联网/index.html","49b645631b547bceecdd8a4f74984f89"],["/categories/PC/index.html","39fee066f1dcd0097eaa5cd7d71885d0"],["/categories/PC/媒体处理/index.html","2760e2325c88bade075f39f96daedb90"],["/categories/PC/系统增强/index.html","1a881ab94eee2f8f4e2fb7e5b2859ef5"],["/categories/PC/系统镜像/index.html","1d927920a5c8cf3af7227e790a6ffe68"],["/categories/PC/软件激活/index.html","5cf0d331f2b283308a0ef9153ceac79c"],["/categories/Python/index.html","dad05ca5ef0d2d2c6c77145ef1c120dc"],["/categories/Python/学习笔记/index.html","0111c392574b8523c8ecc0c610db2717"],["/categories/Python/成品/index.html","a0fdfd205cf59621771cb8fd854940af"],["/categories/index.html","ae6113cf64eece3a7b54841636d310b6"],["/categories/其他汇总/index.html","83747c349f5f087899ad96ef74dc56b6"],["/categories/学习笔记/index.html","95de5260ec99334b0a12f14c99acd2e7"],["/categories/技术教程/index.html","6c0b15bd57debcdf1408bbf7aa053214"],["/categories/游戏资源/index.html","e5bfaaccb40fb0aa19c8636e44c3975f"],["/comments/index.html","c825c5f3989927f740573460307a38bd"],["/css/custom/twikoo_beautify.css","b5c8a07528ef0a944b87a1a5701ce5c6"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","c860220a7d6810f1fc63f16dea08be89"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/history/index.html","93e289c6cbf6b4ff0604ece256546964"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","7a43b88da5808a2645727d802b943b29"],["/js/main.js","67ef93b7026979d99da673cfd9fd85de"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","1685cd43da0de7abd4a649dd5b2d81db"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","9f465e7dd29ec62dbc6af321882c2b59"],["/js/wow_init.js","4244acb8641a2525f168b604f9ca4844"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","3b96714ab395759ecac268f2f2214b5c"],["/message/index.html","5b1a65334c8c0851e251e5978832148f"],["/music/index.html","f63295b11c17c9ec52dd2cefa2f410f9"],["/page/2/index.html","d93405f87555e3b7c4611042d212e3b4"],["/page/3/index.html","abe3a7bf2dc14c8dc5931bccdf3d46c6"],["/page/4/index.html","2e840a16a74408bd79787f614de7e34d"],["/page/5/index.html","ea52156e900ce49a0c4623fdccf94364"],["/page/6/index.html","8d6c1b6420f6e00467f50914d89b30b3"],["/posts/11e4/index.html","2f1b760c2d92b8dab3f3723dfb2078a8"],["/posts/126239f4/index.html","08cfaeea151527a3831068c3e688f8e9"],["/posts/20b3/index.html","05a4a7fc8a15be5a90a0a67eb2a173bb"],["/posts/21396629/index.html","7f5922b3721fc16c7e46baa56f8f2ba0"],["/posts/241519a2/index.html","15304185a437620919caf825ef646ca8"],["/posts/40cad56a/index.html","8caedf85a935ccaf71ba1b6a6fe7c510"],["/posts/4161854e/index.html","b88e648167b30ae08642377f807c9f44"],["/posts/4254dc4c/index.html","2a40006409fe6caeb19ef54a95ade127"],["/posts/461b0433/index.html","d96509467fe18c92b787e4f2e5e28462"],["/posts/56ce/index.html","5ff0670311359c0e276354b2ea2414e5"],["/posts/60c319f6/index.html","d76a99ec8f8c9b5c54fde56e16558fdc"],["/posts/6746a1c3/index.html","44117d2523acb6c20fcda6362f3d7fa7"],["/posts/6c20/index.html","2f08f8d432c4c8390628119ade2c978d"],["/posts/73b37fcd/index.html","2dd81bc0a942627b995e9221be361395"],["/posts/749a3a09/index.html","544823342f4d65e0c2e1a761626dc5b8"],["/posts/7594/index.html","7d8b969c31e35f28cb4a43fc73d7b434"],["/posts/77049f2e/index.html","bf5a5b90de29f550730c44ff58b66151"],["/posts/7c82/index.html","ac2fb9c8ecb216dbee307cb73eea0bd9"],["/posts/817b8e0e/index.html","455865831a2192aff4d2afb15bcc665b"],["/posts/844fc5df/index.html","47ad6438fe773941d9edbd718a54e9da"],["/posts/8acab12/index.html","6b178fe996ca89457224c01256bfaf04"],["/posts/8b3/index.html","e3bb3a4d6f48962198707eb93cc008a6"],["/posts/947ec48e/index.html","5f70e766c9168cfbfbe161c3da7e1801"],["/posts/997c/index.html","c69cb5a71beba927900e55fe9f5a11a5"],["/posts/ab43a875/index.html","8cd04896e2db00c9a1963254007b64f0"],["/posts/ac2c/index.html","9ff48c61ad06790a7bf5793e22c0e091"],["/posts/ad79/index.html","da8cb724fc378bbeb6c75e1381c18ad2"],["/posts/adf6e4b/index.html","ad7b094db67910dab9d63d3aceae07e0"],["/posts/aea2/index.html","38d31cb2d4fa5749f6e544d353bb5d64"],["/posts/b385/index.html","dd92b6403b01c4d3012251f36fc5b66f"],["/posts/b7ed/index.html","bc1d804fa43132ba01f4e0a5b2956d37"],["/posts/bc3531cf/index.html","abced36508314577cd44d7e9532a9da2"],["/posts/bfed/index.html","34ce83cc6f2fcb369bfec293ac4f83a4"],["/posts/c232/index.html","cee369dd3b790918cc8fddfb0aed1f9f"],["/posts/c291af82/index.html","643df53a95099daa4a67324ee5d47f37"],["/posts/c2c/index.html","fd5f1785d8896fe1584c30e024af6bf5"],["/posts/c336038a/index.html","28bbf1b19f213d851cc62ca12e6490ca"],["/posts/caba8902/index.html","d6453d7554d583cc605df0f7311f9b4f"],["/posts/d6c8/index.html","ddbe1fcab5b30124870a5adaf22c9876"],["/posts/d9a3/index.html","1010a5ea222f934bc4a2dc3b36dffee2"],["/posts/db12e7f4/index.html","6430401e307038ded6d199ad68e01712"],["/posts/dbba/index.html","d2b432b775fba0335664b4041ce94ebb"],["/posts/dcd4d5c3/index.html","e560d5dd7eff273022df25f9f05deee1"],["/posts/dfe935b2/index.html","dbabba4dcd14ec4988519375e87a76d6"],["/posts/e46d226a/index.html","dd947b3906c934605177ce42a3bb9296"],["/posts/e98f2569/index.html","dc3bb898968b0718467e9bdaa680920c"],["/posts/ecc2/index.html","55c85b678456eee971cc0cc34390e855"],["/posts/efaec666/index.html","a080a73d1da47b0f0f8f9315a56cf7b5"],["/posts/f20cb9c8/index.html","17c5d419120812e31b5951ac34602962"],["/posts/f663/index.html","47b1dfbaa362cfa4ea34d875e5530e91"],["/posts/f7a/index.html","4564601507f61f6c557658f423ff47f4"],["/posts/fead/index.html","dd7f15a02ed93971a39fea0d843cb668"],["/sw-register.js","cd00d689fb303be306a34d9e0cc6b43e"],["/tags/Adobe/index.html","14e28741ece713116dad7d52ddefc8e3"],["/tags/Aplayer/index.html","a649bc0e0d97e1816e64635d3d315151"],["/tags/Arduino/index.html","3aae28587c6f0b4dfe0c307713c6dbea"],["/tags/GitHub/index.html","30b0474b14687e3fddf394ca8b5a112a"],["/tags/Hexo/index.html","8502d6ac90bef8ca78010dc7279bc4ba"],["/tags/Hexo/page/2/index.html","8f22446a971c5d71ce9c3ed52703fa7d"],["/tags/JsDeliver/index.html","b25873a333b79d8c2a520730e44a0730"],["/tags/KMS/index.html","674b78be690c0411be468e84e79ea071"],["/tags/LoRa/index.html","118550d326497a325ee3bb613c607765"],["/tags/PC/index.html","e53b7e5a7042ea8ffca088988b7017d6"],["/tags/Pycharm/index.html","c7622be7889a48d9c7e41d47fc8612da"],["/tags/Python/index.html","afc30f6fd01c1ef5c97708df8bdc697d"],["/tags/SIoT/index.html","a6010db7296926b8881581ff79201c21"],["/tags/Windows/index.html","f246e741fb9f86e9e44fac2a89d9afe5"],["/tags/html/index.html","7528566a246273891d6a6f414dd9874b"],["/tags/index.html","f5159c8c26960cd54948954292596353"],["/tags/turtle模块/index.html","01180d4234d74092980c3a062ff9e5da"],["/tags/优化/index.html","3b6ba5d7f6435ae0837dd0c627f0266a"],["/tags/元组/index.html","ffc46f8405383fa4972da2cf934aee6d"],["/tags/函数/index.html","276e2454922cf1809ff2e268f1a1c2b9"],["/tags/列表/index.html","b59a4a4467638d42d37ba01120b72066"],["/tags/博客/index.html","865bc9132c695ce31f56a9f5ac0bca17"],["/tags/博客/page/2/index.html","3a40aee242dd5fb3b01b72957c71929c"],["/tags/右键菜单/index.html","b3131a0a594d03c22e796ac46423ee18"],["/tags/图标/index.html","c791e95e87cc6e8a17df14885549e34e"],["/tags/字典/index.html","07fe467593f6d288394c13a9b3406d86"],["/tags/学习笔记/index.html","48bfa13921ddd11e5d9193ef1535c0fd"],["/tags/学习笔记/page/2/index.html","5ec88e0938cabf1d03df38025d93c9bd"],["/tags/安装驱动/index.html","5d1970e6d23a4b982906b43bf72d8c01"],["/tags/成品/index.html","563e0d06b3a897859410ba49b53ccd21"],["/tags/技巧/index.html","fc51e3611ae81ae79150515a64bfaa7f"],["/tags/技巧/page/2/index.html","c824a9d12e950e5dcadf59d1a07fe737"],["/tags/技术教程/index.html","67d02b9b482cbe6deb613916b2273f8a"],["/tags/教程/index.html","cc5a25dda6d2ecea496be0eb08fc76a0"],["/tags/游戏/index.html","4e9618bdce1eb4b85e8e04f9bedcb851"],["/tags/物联网/index.html","a7547d2668472e59d296aa3a2289dc4d"],["/tags/百度网盘/index.html","59d0bdce137729c72c73ee093aed0916"],["/tags/算法/index.html","0023bb4168d6aba1e84c7ab1b408e54a"],["/tags/系统增强/index.html","6b8fa9e3bff504087a3c96dcd20a95f8"],["/tags/蓝牙/index.html","92b79009157a49cb8b3553594e952736"],["/tags/说说/index.html","f5276885291536dd844ea10e25307d72"],["/tags/软件激活/index.html","cec91eccb6bb9a453026a12a2256e98a"],["/tags/链接/index.html","d52c561b61fe46634277d30269b2c437"],["/tags/阿里云/index.html","7aebfd07e98ebfb4a341c8fcca083f32"],["/tags/音乐/index.html","092f663ae9694136943eb1eb7e9e479f"],["/tags/马赛克/index.html","d37546913e1941eca159ae47b94fab36"],["/talking/index.html","7f7af93172ba60e155ce83512acb84d9"]];
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
