if (window.location.href.indexOf("amnesia") > -1) {
  window.open('http://aciano.top'+window.location.pathname,'_self');
}

var foreignTips = (function () {
  var onSuccess = function (geoipResponse) {
    if (!geoipResponse.country.iso_code) {
      return;
    }
    var code = geoipResponse.country.iso_code.toLowerCase();
    if (code != 'cn'){
      btf.snackbarShow('使用国外网络访问将无法访问文章图片，敬请谅解。If you use foreign network access, you will not be able to access articles and pictures.')
    }
  };
  var onError = function (error) {
  };
  return function () {
    geoip2.country(onSuccess, onError);
  };
}());
foreignTips();