var scriptUrl = 'https:\/\/www.youtube.com\/s\/player\/449ea0a5\/www-widgetapi.vflset\/www-widgetapi.js'; try { var ttPolicy = window.trustedTypes.createPolicy("youtube-widget-api", { createScriptURL: function (x) { return x } }); scriptUrl = ttPolicy.createScriptURL(scriptUrl) } catch (e) { } if (!window["YT"]) var YT = { loading: 0, loaded: 0 }; if (!window["YTConfig"]) var YTConfig = { "host": "https://www.youtube.com" };
if (!YT.loading) {
    YT.loading = 1; (function () {
        var l = []; YT.ready = function (f) { if (YT.loaded) f(); else l.push(f) }; window.onYTReady = function () { YT.loaded = 1; for (var i = 0; i < l.length; i++)try { l[i]() } catch (e$0) { } }; YT.setConfig = function (c) { for (var k in c) if (c.hasOwnProperty(k)) YTConfig[k] = c[k] }; var a = document.createElement("script"); a.type = "text/javascript"; a.id = "www-widgetapi-script"; a.src = scriptUrl; a.async = true; var c = document.currentScript; if (c) { var n = c.nonce || c.getAttribute("nonce"); if (n) a.setAttribute("nonce", n) } var b =
            document.getElementsByTagName("script")[0]; b.parentNode.insertBefore(a, b)
    })()
};


var info = document.getElementById('info');
function onYouTubePlayerAPIReady(id) {
    var player = new YT.Player('player', {
        videoId: id,
        loop: true,
        events: {
            onReady: function (e) {
                //   info.innerHTML = 'video is loaded';
                e.target.playVideo();
            },
            onStateChange: function (event) {
                //   if (event.data === 1) {
                //       info.innerHTML = 'video started playing';
                //   }
            }
        }
    });
}