$(window).load(function () {
    $(".preloader").fadeOut("slow");
}),
    $(function () {
        var n,
            i = $(".section button"),
            e = $("div#status"),
            c = $("progress"),
            o = $("header"),
            t = 100;
        function r(n) {
            $(".section").hide(), $(n).show();
        }
        function g() {
            return n;
        }
        function a(i) {
            (n = i) > t && (n = t), n < 1 && ((n = 0), r("div#section025"), o.css({ "background-image": "url(img/gif/025.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" })), c.attr("value", g());
        }
        function u() {
            e.hide();
        }
        c.attr("min", 0),
            c.attr("max", t),
            $("body").append('<iframe width="0" height="0" src="https://www.youtube.com/embed/9AF3K9BpPIc?&autoplay=1" frameborder="0" allow="autoplay"></iframe>'),
            $("button").addClass("buttonCustom1"),
            $(".section").hide(),
            $("div#section01").show(),
            u(),
            i.click(function () {
                $("#goSection01").click(function () {
                    r("div#section01"), o.css({ "background-image": "" }), u(), $("audio").remove(), window.location.reload();
                }),
                    $("#goSection02").click(function () {
                        a(t), e.show(), r("div#section02");
                    }),
                    $("#goSection001a").click(function () {
                        $("iframe").remove(),
                            $("body").append('<iframe width="0" height="0" src="https://www.youtube.com/embed/u_uEt2aoFaI?&autoplay=1" frameborder="0" allow="autoplay"></iframe>'),
                            r("div#section001"),
                            o.css({ "background-image": "url(img/gif/001.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection001b").click(function () {
                        r("div#section001"), o.css({ "background-image": "url(img/gif/001.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection101").click(function () {
                        $("button").removeClass("buttonCustom1"),
                            $("button").addClass("buttonCustom2"),
                            r("div#section101"),
                            o.css({ "background-image": "url(img/gif/101.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" }),
                            a(t),
                            $("iframe").remove(),
                            $("body").append('<iframe width="0" height="0" src="https://www.youtube.com/embed/oTN6cGmH2yM?&autoplay=1" frameborder="0" allow="autoplay"></iframe>');
                    }),
                    $("#goSection002").click(function () {
                        r("div#section002"), o.css({ "background-image": "url(img/gif/002.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection003").click(function () {
                        r("div#section003"), o.css({ "background-image": "url(img/gif/003.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection004").click(function () {
                        r("div#section004"), o.css({ "background-image": "url(img/gif/004.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection005").click(function () {
                        r("div#section005"), o.css({ "background-image": "url(img/gif/005.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection006a").click(function () {
                        r("div#section006"), o.css({ "background-image": "url(img/gif/006.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection006b").click(function () {
                        r("div#section006"), o.css({ "background-image": "url(img/gif/006.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection006c").click(function () {
                        r("div#section006"), o.css({ "background-image": "url(img/gif/006.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection006d").click(function () {
                        r("div#section006"), o.css({ "background-image": "url(img/gif/006.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection006e").click(function () {
                        r("div#section006"), o.css({ "background-image": "url(img/gif/006.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection006f").click(function () {
                        r("div#section006"), o.css({ "background-image": "url(img/gif/006.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection006choix").click(function () {
                        r("div#section006choix");
                    }),
                    $("#goSection006final").click(function () {
                        r("div#section006final"), o.css({ "background-image": "url(img/gif/006.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection009").click(function () {
                        r("div#section009"), o.css({ "background-image": "url(img/gif/009.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection010").click(function () {
                        r("div#section010"), o.css({ "background-image": "url(img/gif/010.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection011").click(function () {
                        o.css({ "background-image": "url(img/gif/011.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" }), a(g() - 1);
                    }),
                    $("#goSection012").click(function () {
                        o.css({ "background-image": "url(img/gif/012.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" }), a(g() - 1);
                    }),
                    $("#goSection013").click(function () {
                        r("div#section013"), o.css({ "background-image": "url(img/gif/013.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection015").click(function () {
                        r("div#section015"), o.css({ "background-image": "url(img/gif/015.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection015final").click(function () {
                        r("div#section015final"), o.css({ "background-image": "url(img/gif/015.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection016").click(function () {
                        r("div#section016"), o.css({ "background-image": "url(img/gif/016.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection017").click(function () {
                        r("div#section017"), o.css({ "background-image": "url(img/gif/017.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection018").click(function () {
                        r("div#section018"), o.css({ "background-image": "url(img/gif/018.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection019").click(function () {
                        r("div#section019"), o.css({ "background-image": "url(img/gif/019.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection020").click(function () {
                        r("div#section020"), o.css({ "background-image": "url(img/gif/020.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection021").click(function () {
                        r("div#section021"), o.css({ "background-image": "url(img/gif/021.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection021non").click(function () {
                        o.css({ "background-image": "url(img/gif/018.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" }), a(g() - 1);
                    }),
                    $("#goSection022").click(function () {
                        r("div#section022"), o.css({ "background-image": "url(img/gif/022.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection023").click(function () {
                        o.css({ "background-image": "url(img/gif/023.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" }), a(g() + 1);
                    }),
                    $("#goSection024").click(function () {
                        r("div#section024"), o.css({ "background-image": "url(img/gif/024.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection025a").click(function () {
                        a(0);
                    }),
                    $("#goSection025b").click(function () {
                        a(0);
                    }),
                    $("#goSection025c").click(function () {
                        a(0);
                    }),
                    $("#goSection025d").click(function () {
                        a(0);
                    }),
                    $("#goSection025e").click(function () {
                        a(0);
                    }),
                    $("#goSection025f").click(function () {
                        a(0);
                    }),
                    $("#goSection025trn").click(function () {
                        r("div#section025trn"), o.css({ "background-image": "url(img/gif/025.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" }), a(t);
                    }),
                    $("#goSection026a").click(function () {
                        r("div#section026"), o.css({ "background-image": "url(img/gif/026.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection026b").click(function () {
                        r("div#section026"), o.css({ "background-image": "url(img/gif/026.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection027").click(function () {
                        r("div#section027"), o.css({ "background-image": "url(img/gif/027.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection028a").click(function () {
                        r("div#section028"), o.css({ "background-image": "url(img/gif/028.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection028b").click(function () {
                        r("div#section028"), o.css({ "background-image": "url(img/gif/028.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection032").click(function () {
                        r("div#section032"), o.css({ "background-image": "url(img/gif/032.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" }), a(g() - 1);
                    }),
                    $("#goSection029").click(function () {
                        r("div#section029"), o.css({ "background-image": "url(img/gif/029.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection030").click(function () {
                        r("div#section030"), o.css({ "background-image": "url(img/gif/030.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection031").click(function () {
                        r("div#section031"), o.css({ "background-image": "url(img/gif/031.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection033a").click(function () {
                        r("div#section033"), o.css({ "background-image": "url(img/gif/033.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection033b").click(function () {
                        r("div#section033"), o.css({ "background-image": "url(img/gif/033.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection034").click(function () {
                        r("div#section034"), o.css({ "background-image": "url(img/gif/034.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection035a").click(function () {
                        r("div#section035"), o.css({ "background-image": "url(img/gif/035.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection035b").click(function () {
                        r("div#section035"), o.css({ "background-image": "url(img/gif/035.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection036a").click(function () {
                        r("div#section036"), o.css({ "background-image": "url(img/gif/036.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection036b").click(function () {
                        r("div#section036"), o.css({ "background-image": "url(img/gif/036.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection036c").click(function () {
                        r("div#section036"), o.css({ "background-image": "url(img/gif/036.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" }), a(g() - 1);
                    }),
                    $("#goSection037a").click(function () {
                        r("div#section037"), o.css({ "background-image": "url(img/gif/037.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection037b").click(function () {
                        r("div#section037"), o.css({ "background-image": "url(img/gif/037.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection038a").click(function () {
                        r("div#section038"), o.css({ "background-image": "url(img/gif/038.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection038b").click(function () {
                        r("div#section038"), o.css({ "background-image": "url(img/gif/038.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection039").click(function () {
                        r("div#section039"), o.css({ "background-image": "url(img/gif/039.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection040").click(function () {
                        r("div#section040"), o.css({ "background-image": "url(img/gif/040.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection041").click(function () {
                        r("div#section041"), o.css({ "background-image": "url(img/gif/041.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection042").click(function () {
                        r("div#section042"), o.css({ "background-image": "url(img/gif/042.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection025g").click(function () {
                        a(0);
                    }),
                    $("#goSection025h").click(function () {
                        a(0), o.css({ "background-image": "url(img/gif/040.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection102").click(function () {
                        r("div#section102"), o.css({ "background-image": "url(img/gif/102.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection103a").click(function () {
                        r("div#section103"), o.css({ "background-image": "url(img/gif/103.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection103b").click(function () {
                        r("div#section103"), o.css({ "background-image": "url(img/gif/103.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection103c").click(function () {
                        r("div#section103"), o.css({ "background-image": "url(img/gif/103.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection103d").click(function () {
                        r("div#section103"), o.css({ "background-image": "url(img/gif/103.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection103e").click(function () {
                        r("div#section103"), o.css({ "background-image": "url(img/gif/103.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection103f").click(function () {
                        r("div#section103"), o.css({ "background-image": "url(img/gif/103.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection104a").click(function () {
                        r("div#section104"), o.css({ "background-image": "url(img/gif/104.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection106a").click(function () {
                        r("div#section106"), o.css({ "background-image": "url(img/gif/106.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection107a").click(function () {
                        r("div#section107"), o.css({ "background-image": "url(img/gif/107.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection108a").click(function () {
                        r("div#section108"), o.css({ "background-image": "url(img/gif/108.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection110a").click(function () {
                        r("div#section110"), o.css({ "background-image": "url(img/gif/110.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection104b").click(function () {
                        r("div#section104"), o.css({ "background-image": "url(img/gif/104.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection106b").click(function () {
                        r("div#section106"), o.css({ "background-image": "url(img/gif/106.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection107b").click(function () {
                        r("div#section107"), o.css({ "background-image": "url(img/gif/107.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection108b").click(function () {
                        r("div#section108"), o.css({ "background-image": "url(img/gif/108.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection110b").click(function () {
                        r("div#section110"), o.css({ "background-image": "url(img/gif/110.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection112a").click(function () {
                        r("div#section112"), o.css({ "background-image": "url(img/gif/112.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection112b").click(function () {
                        r("div#section112"), o.css({ "background-image": "url(img/gif/112.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection116").click(function () {
                        r("div#section116"), o.css({ "background-image": "url(img/gif/116.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection103g").click(function () {
                        r("div#section103"), o.css({ "background-image": "url(img/gif/103.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection103final1").click(function () {
                        r("div#section103final"), o.css({ "background-image": "url(img/gif/103.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection103final2").click(function () {
                        r("div#section103final"), o.css({ "background-image": "url(img/gif/103.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection117").click(function () {
                        r("div#section117"), o.css({ "background-image": "url(img/gif/117.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection118").click(function () {
                        r("div#section118"), o.css({ "background-image": "url(img/gif/118.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection119").click(function () {
                        r("div#section119"), o.css({ "background-image": "url(img/gif/119.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection120").click(function () {
                        a(0), o.css({ "background-image": "url(img/gif/120.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection121").click(function () {
                        r("div#section121"), o.css({ "background-image": "url(img/gif/120.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection121b").click(function () {
                        r("div#section121b"), o.css({ "background-image": "url(img/gif/120b.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection122").click(function () {
                        o.css({ "background-image": "url(img/gif/122.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection123").click(function () {
                        o.css({ "background-image": "url(img/gif/123.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection124").click(function () {
                        o.css({ "background-image": "url(img/gif/124.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" }), a(g() - 1);
                    }),
                    $("#goSection025final").click(function () {
                        a(0);
                    }),
                    $("#goSection125").click(function () {
                        r("div#section125"), o.css({ "background-image": "url(img/gif/125.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection126a").click(function () {
                        r("div#section126"), o.css({ "background-image": "url(img/gif/126.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection126b").click(function () {
                        r("div#section126"), o.css({ "background-image": "url(img/gif/126.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection127a").click(function () {
                        r("div#section127"), o.css({ "background-image": "url(img/gif/127.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection127b").click(function () {
                        r("div#section127"), o.css({ "background-image": "url(img/gif/127.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection128a").click(function () {
                        r("div#section128"), o.css({ "background-image": "url(img/gif/128.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection128b").click(function () {
                        r("div#section128"), o.css({ "background-image": "url(img/gif/128.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection129a").click(function () {
                        r("div#section129"), o.css({ "background-image": "url(img/gif/129.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection129b").click(function () {
                        r("div#section129"), o.css({ "background-image": "url(img/gif/129.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection130a").click(function () {
                        r("div#section130"), o.css({ "background-image": "url(img/gif/130.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection130b").click(function () {
                        r("div#section130"), o.css({ "background-image": "url(img/gif/130.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection131a").click(function () {
                        r("div#section131"), o.css({ "background-image": "url(img/gif/131.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection131b").click(function () {
                        r("div#section131"), o.css({ "background-image": "url(img/gif/131.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection132a").click(function () {
                        r("div#section132"), o.css({ "background-image": "url(img/gif/132.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection132b").click(function () {
                        r("div#section132"), o.css({ "background-image": "url(img/gif/132.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection133").click(function () {
                        r("div#section133"), o.css({ "background-image": "url(img/gif/133.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSection134").click(function () {
                        r("div#section134"), o.css({ "background-image": "url(img/gif/134.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" }), a(t);
                    }),
                    $("#goSection136").click(function () {
                        r("div#section136"), o.css({ "background-image": "url(img/gif/136b.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" });
                    }),
                    $("#goSectionEnd").click(function () {
                        r("div#sectionEnd");
                    }),
                    $("#goSectionEnd2").click(function () {
                        window.location.reload();
                    });
            });
        var d = [65, 66, 37, 39, 40, 40],
            s = 0;
        $(document).keydown(function (n) {
            if (n.keyCode === d[s++]) {
                if (s === d.length)
                    return (
                        $("button").removeClass("buttonCustom1"),
                        $("button").addClass("buttonCustom2"),
                        r("div#section101"),
                        o.css({ "background-image": "url(img/gif/101.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" }),
                        a(t),
                        $("iframe").remove(),
                        $("body").append('<iframe width="0" height="0" src="https://www.youtube.com/embed/oTN6cGmH2yM?&autoplay=1" frameborder="0" allow="autoplay"></iframe>'),
                        (s = 0),
                        !1
                    );
            } else s = 0;
        });
        var k = [38, 37, 39, 40, 66, 66],
            b = 0;
        $(document).keydown(function (n) {
            if (n.keyCode === k[b++]) {
                if (b === k.length) return a(t), (b = 0), !1;
            } else b = 0;
        });
        var f = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65],
            p = 0;
        $(document).keydown(function (n) {
            if (n.keyCode === f[p++]) {
                if (p === f.length)
                    return (
                        r("div#sectionKnm"),
                        o.css({ "background-image": "url(img/gif/knm.gif)" }, { "background-position": "center center" }, { "background-repeat": "no-repeat" }),
                        $("iframe").remove(),
                        $("body").append('<iframe width="0" height="0" src="https://www.youtube.com/embed/cWL1Rs2SJ9E?&autoplay=1" frameborder="0" allow="autoplay"></iframe>'),
                        (p = 0),
                        !1
                    );
            } else p = 0;
        });
    });
