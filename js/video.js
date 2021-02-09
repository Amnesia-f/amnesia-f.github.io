/**
* Created by Lete on 2020/6/16.
*/
//判断移动端设备
browserRedirect();

function browserRedirect() {
   var sUserAgent = navigator.userAgent.toLowerCase();
   var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
   var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
   var bIsMidp = sUserAgent.match(/midp/i) == "midp";
   var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
   var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
   var bIsAndroid = sUserAgent.match(/android/i) == "android";
   var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
   var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
   if (!(bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM)) {
       var html = "<video loop autoplay style='height: 100%;width: 100%;object-fit: cover;'><source src='https://cdn.jsdelivr.net/gh/Amnesia-f/CDN/amnesia.mp4'></source></video>";
       /*添加video*/
       document.getElementById("nav").innerHTML += html;

       /*打字效果*/
       var subtitle = document.getElementById('subtitle')
       var i = 0;

       function typing() {
           var timer = 0;
           var str = '不要等到明天，今天就行动起来！！';
           if (i <= str.length) {
               subtitle.innerHTML = str.slice(0, i++)
               timer = setTimeout(typing, 300)

           } else {
               subtitle.innerHTML = str
               clearTimeout(timer)
           }
       }

       typing()
   }
}