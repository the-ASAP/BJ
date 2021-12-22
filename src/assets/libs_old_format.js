function SequenceAnimate(e, t, i) {
	this._intFps = 24, this._intLenght = e, this._intCurrent = 1, this._target = 1, this._callback = t, this._callbackForFinish = i, this._delay = null, this._interval = null, this._direction = 1, this._autoDirection = !0, this.initAnimate()
}! function () {
	"use strict";

	function e(e) {
		e.fn.swiper = function (t) {
			var i;
			return e(this).each(function () {
				var e = new n(this, t);
				i || (i = e)
			}), i
		}
	}
	var t, i, n = function (e, i) {
		function r() {
			return "horizontal" === w.params.direction
		}

		function a(e) {
			return Math.floor(e)
		}

		function o() {
			w.autoplayTimeoutId = setTimeout(function () {
				w.params.loop ? (w.fixLoop(), w._slideNext()) : w.isEnd ? i.autoplayStopOnLast ? w.stopAutoplay() : w._slideTo(0) : w._slideNext()
			}, w.params.autoplay)
		}

		function l(e, i) {
			var n = t(e.target);
			if (!n.is(i))
				if ("string" == typeof i) n = n.parents(i);
				else if (i.nodeType) {
				var s;
				return n.parents().each(function (e, t) {
					t === i && (s = i)
				}), s ? i : void 0
			}
			if (0 !== n.length) return n[0]
		}

		function c(e, t) {
			t = t || {};
			var i = new(window.MutationObserver || window.WebkitMutationObserver)(function (e) {
				e.forEach(function (e) {
					w.onResize(!0), w.emit("onObserverUpdate", w, e)
				})
			});
			i.observe(e, {
				attributes: void 0 === t.attributes || t.attributes,
				childList: void 0 === t.childList || t.childList,
				characterData: void 0 === t.characterData || t.characterData
			}), w.observers.push(i)
		}

		function d(e) {
			e.originalEvent && (e = e.originalEvent);
			var t = e.keyCode || e.charCode;
			if (!w.params.allowSwipeToNext && (r() && 39 === t || !r() && 40 === t)) return !1;
			if (!w.params.allowSwipeToPrev && (r() && 37 === t || !r() && 38 === t)) return !1;
			if (!(e.shiftKey || e.altKey || e.ctrlKey || e.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) {
				if (37 === t || 39 === t || 38 === t || 40 === t) {
					var i = !1;
					if (w.container.parents(".swiper-slide").length > 0 && 0 === w.container.parents(".swiper-slide-active").length) return;
					var n = {
							left: window.pageXOffset,
							top: window.pageYOffset
						},
						s = window.innerWidth,
						a = window.innerHeight,
						o = w.container.offset();
					w.rtl && (o.left = o.left - w.container[0].scrollLeft);
					for (var l = [
							[o.left, o.top],
							[o.left + w.width, o.top],
							[o.left, o.top + w.height],
							[o.left + w.width, o.top + w.height]
						], c = 0; c < l.length; c++) {
						var d = l[c];
						d[0] >= n.left && d[0] <= n.left + s && d[1] >= n.top && d[1] <= n.top + a && (i = !0)
					}
					if (!i) return
				}
				r() ? ((37 === t || 39 === t) && (e.preventDefault ? e.preventDefault() : e.returnValue = !1), (39 === t && !w.rtl || 37 === t && w.rtl) && w.slideNext(), (37 === t && !w.rtl || 39 === t && w.rtl) && w.slidePrev()) : ((38 === t || 40 === t) && (e.preventDefault ? e.preventDefault() : e.returnValue = !1), 40 === t && w.slideNext(), 38 === t && w.slidePrev())
			}
		}

		function h(e) {
			e.originalEvent && (e = e.originalEvent);
			var t = w.mousewheel.event,
				i = 0,
				n = w.rtl ? -1 : 1;
			if (e.detail) i = -e.detail;
			else if ("mousewheel" === t)
				if (w.params.mousewheelForceToAxis)
					if (r()) {
						if (!(Math.abs(e.wheelDeltaX) > Math.abs(e.wheelDeltaY))) return;
						i = e.wheelDeltaX * n
					} else {
						if (!(Math.abs(e.wheelDeltaY) > Math.abs(e.wheelDeltaX))) return;
						i = e.wheelDeltaY
					}
			else i = Math.abs(e.wheelDeltaX) > Math.abs(e.wheelDeltaY) ? -e.wheelDeltaX * n : -e.wheelDeltaY;
			else if ("DOMMouseScroll" === t) i = -e.detail;
			else if ("wheel" === t)
				if (w.params.mousewheelForceToAxis)
					if (r()) {
						if (!(Math.abs(e.deltaX) > Math.abs(e.deltaY))) return;
						i = -e.deltaX * n
					} else {
						if (!(Math.abs(e.deltaY) > Math.abs(e.deltaX))) return;
						i = -e.deltaY
					}
			else i = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? -e.deltaX * n : -e.deltaY;
			if (0 !== i) {
				if (w.params.mousewheelInvert && (i = -i), w.params.freeMode) {
					var s = w.getWrapperTranslate() + i * w.params.mousewheelSensitivity,
						a = w.isBeginning,
						o = w.isEnd;
					if (s >= w.minTranslate() && (s = w.minTranslate()), s <= w.maxTranslate() && (s = w.maxTranslate()), w.setWrapperTransition(0), w.setWrapperTranslate(s), w.updateProgress(), w.updateActiveIndex(), (!a && w.isBeginning || !o && w.isEnd) && w.updateClasses(), w.params.freeModeSticky && (clearTimeout(w.mousewheel.timeout), w.mousewheel.timeout = setTimeout(function () {
							w.slideReset()
						}, 300)), 0 === s || s === w.maxTranslate()) return
				} else {
					if ((new window.Date).getTime() - w.mousewheel.lastScrollTime > 60)
						if (0 > i)
							if (w.isEnd && !w.params.loop || w.animating) {
								if (w.params.mousewheelReleaseOnEdges) return !0
							} else w.slideNext();
					else if (w.isBeginning && !w.params.loop || w.animating) {
						if (w.params.mousewheelReleaseOnEdges) return !0
					} else w.slidePrev();
					w.mousewheel.lastScrollTime = (new window.Date).getTime()
				}
				return w.params.autoplay && w.stopAutoplay(), e.preventDefault ? e.preventDefault() : e.returnValue = !1, !1
			}
		}

		function p(e, i) {
			e = t(e);
			var n, s, a, o = w.rtl ? -1 : 1;
			n = e.attr("data-swiper-parallax") || "0", s = e.attr("data-swiper-parallax-x"), a = e.attr("data-swiper-parallax-y"), s || a ? (s = s || "0", a = a || "0") : r() ? (s = n, a = "0") : (a = n, s = "0"), s = s.indexOf("%") >= 0 ? parseInt(s, 10) * i * o + "%" : s * i * o + "px", a = a.indexOf("%") >= 0 ? parseInt(a, 10) * i + "%" : a * i + "px", e.transform("translate3d(" + s + ", " + a + ",0px)")
		}

		function u(e) {
			return 0 !== e.indexOf("on") && (e = e[0] !== e[0].toUpperCase() ? "on" + e[0].toUpperCase() + e.substring(1) : "on" + e), e
		}
		if (!(this instanceof n)) return new n(e, i);
		var f = {
				direction: "horizontal",
				touchEventsTarget: "container",
				initialSlide: 0,
				speed: 300,
				autoplay: !1,
				autoplayDisableOnInteraction: !0,
				iOSEdgeSwipeDetection: !1,
				iOSEdgeSwipeThreshold: 20,
				freeMode: !1,
				freeModeMomentum: !0,
				freeModeMomentumRatio: 1,
				freeModeMomentumBounce: !0,
				freeModeMomentumBounceRatio: 1,
				freeModeSticky: !1,
				freeModeMinimumVelocity: .02,
				autoHeight: !1,
				setWrapperSize: !1,
				virtualTranslate: !1,
				effect: "slide",
				coverflow: {
					rotate: 50,
					stretch: 0,
					depth: 100,
					modifier: 1,
					slideShadows: !0
				},
				cube: {
					slideShadows: !0,
					shadow: !0,
					shadowOffset: 20,
					shadowScale: .94
				},
				fade: {
					crossFade: !1
				},
				parallax: !1,
				scrollbar: null,
				scrollbarHide: !0,
				scrollbarDraggable: !1,
				scrollbarSnapOnRelease: !1,
				keyboardControl: !1,
				mousewheelControl: !1,
				mousewheelReleaseOnEdges: !1,
				mousewheelInvert: !1,
				mousewheelForceToAxis: !1,
				mousewheelSensitivity: 1,
				hashnav: !1,
				breakpoints: void 0,
				spaceBetween: 0,
				slidesPerView: 1,
				slidesPerColumn: 1,
				slidesPerColumnFill: "column",
				slidesPerGroup: 1,
				centeredSlides: !1,
				slidesOffsetBefore: 0,
				slidesOffsetAfter: 0,
				roundLengths: !1,
				touchRatio: 1,
				touchAngle: 45,
				simulateTouch: !0,
				shortSwipes: !0,
				longSwipes: !0,
				longSwipesRatio: .5,
				longSwipesMs: 300,
				followFinger: !0,
				onlyExternal: !1,
				threshold: 0,
				touchMoveStopPropagation: !0,
				pagination: null,
				paginationElement: "span",
				paginationClickable: !1,
				paginationHide: !1,
				paginationBulletRender: null,
				resistance: !0,
				resistanceRatio: .85,
				nextButton: null,
				prevButton: null,
				watchSlidesProgress: !1,
				watchSlidesVisibility: !1,
				grabCursor: !1,
				preventClicks: !0,
				preventClicksPropagation: !0,
				slideToClickedSlide: !1,
				lazyLoading: !1,
				lazyLoadingInPrevNext: !1,
				lazyLoadingOnTransitionStart: !1,
				preloadImages: !0,
				updateOnImagesReady: !0,
				loop: !1,
				loopAdditionalSlides: 0,
				loopedSlides: null,
				control: void 0,
				controlInverse: !1,
				controlBy: "slide",
				allowSwipeToPrev: !0,
				allowSwipeToNext: !0,
				swipeHandler: null,
				noSwiping: !0,
				noSwipingClass: "swiper-no-swiping",
				slideClass: "swiper-slide",
				slideActiveClass: "swiper-slide-active",
				slideVisibleClass: "swiper-slide-visible",
				slideDuplicateClass: "swiper-slide-duplicate",
				slideNextClass: "swiper-slide-next",
				slidePrevClass: "swiper-slide-prev",
				wrapperClass: "swiper-wrapper",
				bulletClass: "swiper-pagination-bullet",
				bulletActiveClass: "swiper-pagination-bullet-active",
				buttonDisabledClass: "swiper-button-disabled",
				paginationHiddenClass: "swiper-pagination-hidden",
				observer: !1,
				observeParents: !1,
				a11y: !1,
				prevSlideMessage: "Previous slide",
				nextSlideMessage: "Next slide",
				firstSlideMessage: "This is the first slide",
				lastSlideMessage: "This is the last slide",
				paginationBulletMessage: "Go to slide {{index}}",
				runCallbacksOnInit: !0
			},
			m = i && i.virtualTranslate;
		i = i || {};
		var g = {};
		for (var v in i)
			if ("object" != typeof i[v] || i[v].nodeType || i[v] === window || i[v] === document || void 0 !== s && i[v] instanceof s || "undefined" != typeof jQuery && i[v] instanceof jQuery) g[v] = i[v];
			else
				for (var y in g[v] = {}, i[v]) g[v][y] = i[v][y];
		for (var b in f)
			if (void 0 === i[b]) i[b] = f[b];
			else if ("object" == typeof i[b])
			for (var _ in f[b]) void 0 === i[b][_] && (i[b][_] = f[b][_]);
		var w = this;
		if (w.params = i, w.originalParams = g, w.classNames = [], void 0 !== t && void 0 !== s && (t = s), (void 0 !== t || (t = void 0 === s ? window.Dom7 || window.Zepto || window.jQuery : s)) && (w.$ = t, w.currentBreakpoint = void 0, w.getActiveBreakpoint = function () {
				if (!w.params.breakpoints) return !1;
				var e, t = !1,
					i = [];
				for (e in w.params.breakpoints) w.params.breakpoints.hasOwnProperty(e) && i.push(e);
				i.sort(function (e, t) {
					return parseInt(e, 10) > parseInt(t, 10)
				});
				for (var n = 0; n < i.length; n++)(e = i[n]) >= window.innerWidth && !t && (t = e);
				return t || "max"
			}, w.setBreakpoint = function () {
				var e = w.getActiveBreakpoint();
				if (e && w.currentBreakpoint !== e) {
					var t = e in w.params.breakpoints ? w.params.breakpoints[e] : w.originalParams;
					for (var i in t) w.params[i] = t[i];
					w.currentBreakpoint = e
				}
			}, w.params.breakpoints && w.setBreakpoint(), w.container = t(e), 0 !== w.container.length)) {
			if (w.container.length > 1) return void w.container.each(function () {
				new n(this, i)
			});
			w.container[0].swiper = w, w.container.data("swiper", w), w.classNames.push("swiper-container-" + w.params.direction), w.params.freeMode && w.classNames.push("swiper-container-free-mode"), w.support.flexbox || (w.classNames.push("swiper-container-no-flexbox"), w.params.slidesPerColumn = 1), w.params.autoHeight && w.classNames.push("swiper-container-autoheight"), (w.params.parallax || w.params.watchSlidesVisibility) && (w.params.watchSlidesProgress = !0), ["cube", "coverflow"].indexOf(w.params.effect) >= 0 && (w.support.transforms3d ? (w.params.watchSlidesProgress = !0, w.classNames.push("swiper-container-3d")) : w.params.effect = "slide"), "slide" !== w.params.effect && w.classNames.push("swiper-container-" + w.params.effect), "cube" === w.params.effect && (w.params.resistanceRatio = 0, w.params.slidesPerView = 1, w.params.slidesPerColumn = 1, w.params.slidesPerGroup = 1, w.params.centeredSlides = !1, w.params.spaceBetween = 0, w.params.virtualTranslate = !0, w.params.setWrapperSize = !1), "fade" === w.params.effect && (w.params.slidesPerView = 1, w.params.slidesPerColumn = 1, w.params.slidesPerGroup = 1, w.params.watchSlidesProgress = !0, w.params.spaceBetween = 0, void 0 === m && (w.params.virtualTranslate = !0)), w.params.grabCursor && w.support.touch && (w.params.grabCursor = !1), w.wrapper = w.container.children("." + w.params.wrapperClass), w.params.pagination && (w.paginationContainer = t(w.params.pagination), w.params.paginationClickable && w.paginationContainer.addClass("swiper-pagination-clickable")), w.rtl = r() && ("rtl" === w.container[0].dir.toLowerCase() || "rtl" === w.container.css("direction")), w.rtl && w.classNames.push("swiper-container-rtl"), w.rtl && (w.wrongRTL = "-webkit-box" === w.wrapper.css("display")), w.params.slidesPerColumn > 1 && w.classNames.push("swiper-container-multirow"), w.device.android && w.classNames.push("swiper-container-android"), w.container.addClass(w.classNames.join(" ")), w.translate = 0, w.progress = 0, w.velocity = 0, w.lockSwipeToNext = function () {
				w.params.allowSwipeToNext = !1
			}, w.lockSwipeToPrev = function () {
				w.params.allowSwipeToPrev = !1
			}, w.lockSwipes = function () {
				w.params.allowSwipeToNext = w.params.allowSwipeToPrev = !1
			}, w.unlockSwipeToNext = function () {
				w.params.allowSwipeToNext = !0
			}, w.unlockSwipeToPrev = function () {
				w.params.allowSwipeToPrev = !0
			}, w.unlockSwipes = function () {
				w.params.allowSwipeToNext = w.params.allowSwipeToPrev = !0
			}, w.params.grabCursor && (w.container[0].style.cursor = "move", w.container[0].style.cursor = "-webkit-grab", w.container[0].style.cursor = "-moz-grab", w.container[0].style.cursor = "grab"), w.imagesToLoad = [], w.imagesLoaded = 0, w.loadImage = function (e, t, i, n, s) {
				function r() {
					s && s()
				}
				var a;
				e.complete && n ? r() : t ? ((a = new window.Image).onload = r, a.onerror = r, i && (a.srcset = i), t && (a.src = t)) : r()
			}, w.preloadImages = function () {
				function e() {
					null != w && (void 0 !== w.imagesLoaded && w.imagesLoaded++, w.imagesLoaded === w.imagesToLoad.length && (w.params.updateOnImagesReady && w.update(), w.emit("onImagesReady", w)))
				}
				w.imagesToLoad = w.container.find("img");
				for (var t = 0; t < w.imagesToLoad.length; t++) w.loadImage(w.imagesToLoad[t], w.imagesToLoad[t].currentSrc || w.imagesToLoad[t].getAttribute("src"), w.imagesToLoad[t].srcset || w.imagesToLoad[t].getAttribute("srcset"), !0, e)
			}, w.autoplayTimeoutId = void 0, w.autoplaying = !1, w.autoplayPaused = !1, w.startAutoplay = function () {
				return void 0 === w.autoplayTimeoutId && (!!w.params.autoplay && (!w.autoplaying && (w.autoplaying = !0, w.emit("onAutoplayStart", w), void o())))
			}, w.stopAutoplay = function (e) {
				w.autoplayTimeoutId && (w.autoplayTimeoutId && clearTimeout(w.autoplayTimeoutId), w.autoplaying = !1, w.autoplayTimeoutId = void 0, w.emit("onAutoplayStop", w))
			}, w.pauseAutoplay = function (e) {
				w.autoplayPaused || (w.autoplayTimeoutId && clearTimeout(w.autoplayTimeoutId), w.autoplayPaused = !0, 0 === e ? (w.autoplayPaused = !1, o()) : w.wrapper.transitionEnd(function () {
					w && (w.autoplayPaused = !1, w.autoplaying ? o() : w.stopAutoplay())
				}))
			}, w.minTranslate = function () {
				return -w.snapGrid[0]
			}, w.maxTranslate = function () {
				return -w.snapGrid[w.snapGrid.length - 1]
			}, w.updateAutoHeight = function () {
				w.slides.eq(w.activeIndex)[0].offsetHeight && w.wrapper.css("height", w.slides.eq(w.activeIndex)[0].offsetHeight + "px")
			}, w.updateContainerSize = function () {
				var e, t;
				e = void 0 !== w.params.width ? w.params.width : w.container[0].clientWidth, t = void 0 !== w.params.height ? w.params.height : w.container[0].clientHeight, 0 === e && r() || 0 === t && !r() || (e = e - parseInt(w.container.css("padding-left"), 10) - parseInt(w.container.css("padding-right"), 10), t = t - parseInt(w.container.css("padding-top"), 10) - parseInt(w.container.css("padding-bottom"), 10), w.width = e, w.height = t, w.size = r() ? w.width : w.height)
			}, w.updateSlidesSize = function () {
				w.slides = w.wrapper.children("." + w.params.slideClass), w.snapGrid = [], w.slidesGrid = [], w.slidesSizesGrid = [];
				var e, t, i = w.params.spaceBetween,
					n = -w.params.slidesOffsetBefore,
					s = 0,
					o = 0;
				"string" == typeof i && i.indexOf("%") >= 0 && (i = parseFloat(i.replace("%", "")) / 100 * w.size), w.virtualSize = -i, w.rtl ? w.slides.css({
					marginLeft: "",
					marginTop: ""
				}) : w.slides.css({
					marginRight: "",
					marginBottom: ""
				}), w.params.slidesPerColumn > 1 && (t = Math.floor(w.slides.length / w.params.slidesPerColumn) === w.slides.length / w.params.slidesPerColumn ? w.slides.length : Math.ceil(w.slides.length / w.params.slidesPerColumn) * w.params.slidesPerColumn, "auto" !== w.params.slidesPerView && "row" === w.params.slidesPerColumnFill && (t = Math.max(t, w.params.slidesPerView * w.params.slidesPerColumn)));
				var l, c, d = w.params.slidesPerColumn,
					h = t / d,
					p = h - (w.params.slidesPerColumn * h - w.slides.length);
				for (e = 0; e < w.slides.length; e++) {
					l = 0;
					var u, f, m, g = w.slides.eq(e);
					if (w.params.slidesPerColumn > 1) "column" === w.params.slidesPerColumnFill ? (m = e - (f = Math.floor(e / d)) * d, (f > p || f === p && m === d - 1) && ++m >= d && (m = 0, f++), u = f + m * t / d, g.css({
						"-webkit-box-ordinal-group": u,
						"-moz-box-ordinal-group": u,
						"-ms-flex-order": u,
						"-webkit-order": u,
						order: u
					})) : f = e - (m = Math.floor(e / h)) * h, g.css({
						"margin-top": 0 !== m && w.params.spaceBetween && w.params.spaceBetween + "px"
					}).attr("data-swiper-column", f).attr("data-swiper-row", m);
					"none" !== g.css("display") && ("auto" === w.params.slidesPerView ? (l = r() ? g.outerWidth(!0) : g.outerHeight(!0), w.params.roundLengths && (l = a(l))) : (l = (w.size - (w.params.slidesPerView - 1) * i) / w.params.slidesPerView, w.params.roundLengths && (l = a(l)), r() ? w.slides[e].style.width = l + "px" : w.slides[e].style.height = l + "px"), w.slides[e].swiperSlideSize = l, w.slidesSizesGrid.push(l), w.params.centeredSlides ? (n = n + l / 2 + s / 2 + i, 0 === e && (n = n - w.size / 2 - i), Math.abs(n) < .001 && (n = 0), o % w.params.slidesPerGroup == 0 && w.snapGrid.push(n), w.slidesGrid.push(n)) : (o % w.params.slidesPerGroup == 0 && w.snapGrid.push(n), w.slidesGrid.push(n), n = n + l + i), w.virtualSize += l + i, s = l, o++)
				}
				if (w.virtualSize = Math.max(w.virtualSize, w.size) + w.params.slidesOffsetAfter, w.rtl && w.wrongRTL && ("slide" === w.params.effect || "coverflow" === w.params.effect) && w.wrapper.css({
						width: w.virtualSize + w.params.spaceBetween + "px"
					}), (!w.support.flexbox || w.params.setWrapperSize) && (r() ? w.wrapper.css({
						width: w.virtualSize + w.params.spaceBetween + "px"
					}) : w.wrapper.css({
						height: w.virtualSize + w.params.spaceBetween + "px"
					})), w.params.slidesPerColumn > 1 && (w.virtualSize = (l + w.params.spaceBetween) * t, w.virtualSize = Math.ceil(w.virtualSize / w.params.slidesPerColumn) - w.params.spaceBetween, w.wrapper.css({
						width: w.virtualSize + w.params.spaceBetween + "px"
					}), w.params.centeredSlides)) {
					for (c = [], e = 0; e < w.snapGrid.length; e++) w.snapGrid[e] < w.virtualSize + w.snapGrid[0] && c.push(w.snapGrid[e]);
					w.snapGrid = c
				}
				if (!w.params.centeredSlides) {
					for (c = [], e = 0; e < w.snapGrid.length; e++) w.snapGrid[e] <= w.virtualSize - w.size && c.push(w.snapGrid[e]);
					w.snapGrid = c, Math.floor(w.virtualSize - w.size) > Math.floor(w.snapGrid[w.snapGrid.length - 1]) && w.snapGrid.push(w.virtualSize - w.size)
				}
				0 === w.snapGrid.length && (w.snapGrid = [0]), 0 !== w.params.spaceBetween && (r() ? w.rtl ? w.slides.css({
					marginLeft: i + "px"
				}) : w.slides.css({
					marginRight: i + "px"
				}) : w.slides.css({
					marginBottom: i + "px"
				})), w.params.watchSlidesProgress && w.updateSlidesOffset()
			}, w.updateSlidesOffset = function () {
				for (var e = 0; e < w.slides.length; e++) w.slides[e].swiperSlideOffset = r() ? w.slides[e].offsetLeft : w.slides[e].offsetTop
			}, w.updateSlidesProgress = function (e) {
				if (void 0 === e && (e = w.translate || 0), 0 !== w.slides.length) {
					void 0 === w.slides[0].swiperSlideOffset && w.updateSlidesOffset();
					var t = -e;
					w.rtl && (t = e), w.slides.removeClass(w.params.slideVisibleClass);
					for (var i = 0; i < w.slides.length; i++) {
						var n = w.slides[i],
							s = (t - n.swiperSlideOffset) / (n.swiperSlideSize + w.params.spaceBetween);
						if (w.params.watchSlidesVisibility) {
							var r = -(t - n.swiperSlideOffset),
								a = r + w.slidesSizesGrid[i];
							(r >= 0 && r < w.size || a > 0 && a <= w.size || 0 >= r && a >= w.size) && w.slides.eq(i).addClass(w.params.slideVisibleClass)
						}
						n.progress = w.rtl ? -s : s
					}
				}
			}, w.updateProgress = function (e) {
				void 0 === e && (e = w.translate || 0);
				var t = w.maxTranslate() - w.minTranslate(),
					i = w.isBeginning,
					n = w.isEnd;
				0 === t ? (w.progress = 0, w.isBeginning = w.isEnd = !0) : (w.progress = (e - w.minTranslate()) / t, w.isBeginning = w.progress <= 0, w.isEnd = w.progress >= 1), w.isBeginning && !i && w.emit("onReachBeginning", w), w.isEnd && !n && w.emit("onReachEnd", w), w.params.watchSlidesProgress && w.updateSlidesProgress(e), w.emit("onProgress", w, w.progress)
			}, w.updateActiveIndex = function () {
				var e, t, i, n = w.rtl ? w.translate : -w.translate;
				for (t = 0; t < w.slidesGrid.length; t++) void 0 !== w.slidesGrid[t + 1] ? n >= w.slidesGrid[t] && n < w.slidesGrid[t + 1] - (w.slidesGrid[t + 1] - w.slidesGrid[t]) / 2 ? e = t : n >= w.slidesGrid[t] && n < w.slidesGrid[t + 1] && (e = t + 1) : n >= w.slidesGrid[t] && (e = t);
				(0 > e || void 0 === e) && (e = 0), (i = Math.floor(e / w.params.slidesPerGroup)) >= w.snapGrid.length && (i = w.snapGrid.length - 1), e !== w.activeIndex && (w.snapIndex = i, w.previousIndex = w.activeIndex, w.activeIndex = e, w.updateClasses())
			}, w.updateClasses = function () {
				w.slides.removeClass(w.params.slideActiveClass + " " + w.params.slideNextClass + " " + w.params.slidePrevClass);
				var e, i = w.slides.eq(w.activeIndex);
				(i.addClass(w.params.slideActiveClass), i.next("." + w.params.slideClass).addClass(w.params.slideNextClass), i.prev("." + w.params.slideClass).addClass(w.params.slidePrevClass), w.bullets && w.bullets.length > 0) && (w.bullets.removeClass(w.params.bulletActiveClass), w.params.loop ? ((e = Math.ceil(w.activeIndex - w.loopedSlides) / w.params.slidesPerGroup) > w.slides.length - 1 - 2 * w.loopedSlides && (e -= w.slides.length - 2 * w.loopedSlides), e > w.bullets.length - 1 && (e -= w.bullets.length)) : e = void 0 !== w.snapIndex ? w.snapIndex : w.activeIndex || 0, w.paginationContainer.length > 1 ? w.bullets.each(function () {
					t(this).index() === e && t(this).addClass(w.params.bulletActiveClass)
				}) : w.bullets.eq(e).addClass(w.params.bulletActiveClass));
				w.params.loop || (w.params.prevButton && (w.isBeginning ? (t(w.params.prevButton).addClass(w.params.buttonDisabledClass), w.params.a11y && w.a11y && w.a11y.disable(t(w.params.prevButton))) : (t(w.params.prevButton).removeClass(w.params.buttonDisabledClass), w.params.a11y && w.a11y && w.a11y.enable(t(w.params.prevButton)))), w.params.nextButton && (w.isEnd ? (t(w.params.nextButton).addClass(w.params.buttonDisabledClass), w.params.a11y && w.a11y && w.a11y.disable(t(w.params.nextButton))) : (t(w.params.nextButton).removeClass(w.params.buttonDisabledClass), w.params.a11y && w.a11y && w.a11y.enable(t(w.params.nextButton)))))
			}, w.updatePagination = function () {
				if (w.params.pagination && w.paginationContainer && w.paginationContainer.length > 0) {
					for (var e = "", t = w.params.loop ? Math.ceil((w.slides.length - 2 * w.loopedSlides) / w.params.slidesPerGroup) : w.snapGrid.length, i = 0; t > i; i++) e += w.params.paginationBulletRender ? w.params.paginationBulletRender(i, w.params.bulletClass) : "<" + w.params.paginationElement + ' class="' + w.params.bulletClass + '"></' + w.params.paginationElement + ">";
					w.paginationContainer.html(e), w.bullets = w.paginationContainer.find("." + w.params.bulletClass), w.params.paginationClickable && w.params.a11y && w.a11y && w.a11y.initPagination()
				}
			}, w.update = function (e) {
				function t() {
					i = Math.min(Math.max(w.translate, w.maxTranslate()), w.minTranslate()), w.setWrapperTranslate(i), w.updateActiveIndex(), w.updateClasses()
				}
				var i;
				(w.updateContainerSize(), w.updateSlidesSize(), w.updateProgress(), w.updatePagination(), w.updateClasses(), w.params.scrollbar && w.scrollbar && w.scrollbar.set(), e) ? (w.controller && w.controller.spline && (w.controller.spline = void 0), w.params.freeMode ? (t(), w.params.autoHeight && w.updateAutoHeight()) : (("auto" === w.params.slidesPerView || w.params.slidesPerView > 1) && w.isEnd && !w.params.centeredSlides ? w.slideTo(w.slides.length - 1, 0, !1, !0) : w.slideTo(w.activeIndex, 0, !1, !0)) || t()) : w.params.autoHeight && w.updateAutoHeight()
			}, w.onResize = function (e) {
				w.params.breakpoints && w.setBreakpoint();
				var t = w.params.allowSwipeToPrev,
					i = w.params.allowSwipeToNext;
				if (w.params.allowSwipeToPrev = w.params.allowSwipeToNext = !0, w.updateContainerSize(), w.updateSlidesSize(), ("auto" === w.params.slidesPerView || w.params.freeMode || e) && w.updatePagination(), w.params.scrollbar && w.scrollbar && w.scrollbar.set(), w.controller && w.controller.spline && (w.controller.spline = void 0), w.params.freeMode) {
					var n = Math.min(Math.max(w.translate, w.maxTranslate()), w.minTranslate());
					w.setWrapperTranslate(n), w.updateActiveIndex(), w.updateClasses(), w.params.autoHeight && w.updateAutoHeight()
				} else w.updateClasses(), ("auto" === w.params.slidesPerView || w.params.slidesPerView > 1) && w.isEnd && !w.params.centeredSlides ? w.slideTo(w.slides.length - 1, 0, !1, !0) : w.slideTo(w.activeIndex, 0, !1, !0);
				w.params.allowSwipeToPrev = t, w.params.allowSwipeToNext = i
			};
			var x = ["mousedown", "mousemove", "mouseup"];
			window.navigator.pointerEnabled ? x = ["pointerdown", "pointermove", "pointerup"] : window.navigator.msPointerEnabled && (x = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), w.touchEvents = {
				start: w.support.touch || !w.params.simulateTouch ? "touchstart" : x[0],
				move: w.support.touch || !w.params.simulateTouch ? "touchmove" : x[1],
				end: w.support.touch || !w.params.simulateTouch ? "touchend" : x[2]
			}, (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === w.params.touchEventsTarget ? w.container : w.wrapper).addClass("swiper-wp8-" + w.params.direction), w.initEvents = function (e) {
				var n = e ? "off" : "on",
					s = e ? "removeEventListener" : "addEventListener",
					r = "container" === w.params.touchEventsTarget ? w.container[0] : w.wrapper[0],
					a = w.support.touch ? r : document,
					o = !!w.params.nested;
				w.browser.ie ? (r[s](w.touchEvents.start, w.onTouchStart, !1), a[s](w.touchEvents.move, w.onTouchMove, o), a[s](w.touchEvents.end, w.onTouchEnd, !1)) : (w.support.touch && (r[s](w.touchEvents.start, w.onTouchStart, !1), r[s](w.touchEvents.move, w.onTouchMove, o), r[s](w.touchEvents.end, w.onTouchEnd, !1)), !i.simulateTouch || w.device.ios || w.device.android || (r[s]("mousedown", w.onTouchStart, !1), document[s]("mousemove", w.onTouchMove, o), document[s]("mouseup", w.onTouchEnd, !1))), window[s]("resize", w.onResize), w.params.nextButton && (t(w.params.nextButton)[n]("click", w.onClickNext), w.params.a11y && w.a11y && t(w.params.nextButton)[n]("keydown", w.a11y.onEnterKey)), w.params.prevButton && (t(w.params.prevButton)[n]("click", w.onClickPrev), w.params.a11y && w.a11y && t(w.params.prevButton)[n]("keydown", w.a11y.onEnterKey)), w.params.pagination && w.params.paginationClickable && (t(w.paginationContainer)[n]("click", "." + w.params.bulletClass, w.onClickIndex), w.params.a11y && w.a11y && t(w.paginationContainer)[n]("keydown", "." + w.params.bulletClass, w.a11y.onEnterKey)), (w.params.preventClicks || w.params.preventClicksPropagation) && r[s]("click", w.preventClicks, !0)
			}, w.attachEvents = function (e) {
				w.initEvents()
			}, w.detachEvents = function () {
				w.initEvents(!0)
			}, w.allowClick = !0, w.preventClicks = function (e) {
				w.allowClick || (w.params.preventClicks && e.preventDefault(), w.params.preventClicksPropagation && w.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
			}, w.onClickNext = function (e) {
				e.preventDefault(), (!w.isEnd || w.params.loop) && w.slideNext()
			}, w.onClickPrev = function (e) {
				e.preventDefault(), (!w.isBeginning || w.params.loop) && w.slidePrev()
			}, w.onClickIndex = function (e) {
				e.preventDefault();
				var i = t(this).index() * w.params.slidesPerGroup;
				w.params.loop && (i += w.loopedSlides), w.slideTo(i)
			}, w.updateClickedSlide = function (e) {
				var i = l(e, "." + w.params.slideClass),
					n = !1;
				if (i)
					for (var s = 0; s < w.slides.length; s++) w.slides[s] === i && (n = !0);
				if (!i || !n) return w.clickedSlide = void 0, void(w.clickedIndex = void 0);
				if (w.clickedSlide = i, w.clickedIndex = t(i).index(), w.params.slideToClickedSlide && void 0 !== w.clickedIndex && w.clickedIndex !== w.activeIndex) {
					var r, a = w.clickedIndex;
					if (w.params.loop) {
						if (w.animating) return;
						r = t(w.clickedSlide).attr("data-swiper-slide-index"), w.params.centeredSlides ? a < w.loopedSlides - w.params.slidesPerView / 2 || a > w.slides.length - w.loopedSlides + w.params.slidesPerView / 2 ? (w.fixLoop(), a = w.wrapper.children("." + w.params.slideClass + '[data-swiper-slide-index="' + r + '"]:not(.swiper-slide-duplicate)').eq(0).index(), setTimeout(function () {
							w.slideTo(a)
						}, 0)) : w.slideTo(a) : a > w.slides.length - w.params.slidesPerView ? (w.fixLoop(), a = w.wrapper.children("." + w.params.slideClass + '[data-swiper-slide-index="' + r + '"]:not(.swiper-slide-duplicate)').eq(0).index(), setTimeout(function () {
							w.slideTo(a)
						}, 0)) : w.slideTo(a)
					} else w.slideTo(a)
				}
			};
			var T, S, C, E, k, I, P, D, z, M, O, B, L = "input, select, textarea, button",
				A = Date.now(),
				R = [];
			if (w.animating = !1, w.touches = {
					startX: 0,
					startY: 0,
					currentX: 0,
					currentY: 0,
					diff: 0
				}, w.onTouchStart = function (e) {
					if (e.originalEvent && (e = e.originalEvent), (O = "touchstart" === e.type) || !("which" in e) || 3 !== e.which) {
						if (w.params.noSwiping && l(e, "." + w.params.noSwipingClass)) return void(w.allowClick = !0);
						if (!w.params.swipeHandler || l(e, w.params.swipeHandler)) {
							var i = w.touches.currentX = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX,
								n = w.touches.currentY = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY;
							if (!(w.device.ios && w.params.iOSEdgeSwipeDetection && i <= w.params.iOSEdgeSwipeThreshold)) {
								if (T = !0, S = !1, C = !0, k = void 0, B = void 0, w.touches.startX = i, w.touches.startY = n, E = Date.now(), w.allowClick = !0, w.updateContainerSize(), w.swipeDirection = void 0, w.params.threshold > 0 && (D = !1), "touchstart" !== e.type) {
									var s = !0;
									t(e.target).is(L) && (s = !1), document.activeElement && t(document.activeElement).is(L) && document.activeElement.blur(), s && e.preventDefault()
								}
								w.emit("onTouchStart", w, e)
							}
						}
					}
				}, w.onTouchMove = function (e) {
					if (e.originalEvent && (e = e.originalEvent), !(O && "mousemove" === e.type || e.preventedByNestedSwiper)) {
						if (w.params.onlyExternal) return w.allowClick = !1, void(T && (w.touches.startX = w.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, w.touches.startY = w.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, E = Date.now()));
						if (O && document.activeElement && e.target === document.activeElement && t(e.target).is(L)) return S = !0, void(w.allowClick = !1);
						if (C && w.emit("onTouchMove", w, e), !(e.targetTouches && e.targetTouches.length > 1)) {
							if (w.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, w.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, void 0 === k) {
								var n = 180 * Math.atan2(Math.abs(w.touches.currentY - w.touches.startY), Math.abs(w.touches.currentX - w.touches.startX)) / Math.PI;
								k = r() ? n > w.params.touchAngle : 90 - n > w.params.touchAngle
							}
							if (k && w.emit("onTouchMoveOpposite", w, e), void 0 === B && w.browser.ieTouch && (w.touches.currentX !== w.touches.startX || w.touches.currentY !== w.touches.startY) && (B = !0), T) {
								if (k) return void(T = !1);
								if (B || !w.browser.ieTouch) {
									w.allowClick = !1, w.emit("onSliderMove", w, e), e.preventDefault(), w.params.touchMoveStopPropagation && !w.params.nested && e.stopPropagation(), S || (i.loop && w.fixLoop(), P = w.getWrapperTranslate(), w.setWrapperTransition(0), w.animating && w.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"), w.params.autoplay && w.autoplaying && (w.params.autoplayDisableOnInteraction ? w.stopAutoplay() : w.pauseAutoplay()), M = !1, w.params.grabCursor && (w.container[0].style.cursor = "move", w.container[0].style.cursor = "-webkit-grabbing", w.container[0].style.cursor = "-moz-grabbin", w.container[0].style.cursor = "grabbing")), S = !0;
									var s = w.touches.diff = r() ? w.touches.currentX - w.touches.startX : w.touches.currentY - w.touches.startY;
									s *= w.params.touchRatio, w.rtl && (s = -s), w.swipeDirection = s > 0 ? "prev" : "next", I = s + P;
									var a = !0;
									if (s > 0 && I > w.minTranslate() ? (a = !1, w.params.resistance && (I = w.minTranslate() - 1 + Math.pow(-w.minTranslate() + P + s, w.params.resistanceRatio))) : 0 > s && I < w.maxTranslate() && (a = !1, w.params.resistance && (I = w.maxTranslate() + 1 - Math.pow(w.maxTranslate() - P - s, w.params.resistanceRatio))), a && (e.preventedByNestedSwiper = !0), !w.params.allowSwipeToNext && "next" === w.swipeDirection && P > I && (I = P), !w.params.allowSwipeToPrev && "prev" === w.swipeDirection && I > P && (I = P), w.params.followFinger) {
										if (w.params.threshold > 0) {
											if (!(Math.abs(s) > w.params.threshold || D)) return void(I = P);
											if (!D) return D = !0, w.touches.startX = w.touches.currentX, w.touches.startY = w.touches.currentY, I = P, void(w.touches.diff = r() ? w.touches.currentX - w.touches.startX : w.touches.currentY - w.touches.startY)
										}(w.params.freeMode || w.params.watchSlidesProgress) && w.updateActiveIndex(), w.params.freeMode && (0 === R.length && R.push({
											position: w.touches[r() ? "startX" : "startY"],
											time: E
										}), R.push({
											position: w.touches[r() ? "currentX" : "currentY"],
											time: (new window.Date).getTime()
										})), w.updateProgress(I), w.setWrapperTranslate(I)
									}
								}
							}
						}
					}
				}, w.onTouchEnd = function (e) {
					if (e.originalEvent && (e = e.originalEvent), C && w.emit("onTouchEnd", w, e), C = !1, T) {
						w.params.grabCursor && S && T && (w.container[0].style.cursor = "move", w.container[0].style.cursor = "-webkit-grab", w.container[0].style.cursor = "-moz-grab", w.container[0].style.cursor = "grab");
						var i, n = Date.now(),
							s = n - E;
						if (w.allowClick && (w.updateClickedSlide(e), w.emit("onTap", w, e), 300 > s && n - A > 300 && (z && clearTimeout(z), z = setTimeout(function () {
								w && (w.params.paginationHide && w.paginationContainer.length > 0 && !t(e.target).hasClass(w.params.bulletClass) && w.paginationContainer.toggleClass(w.params.paginationHiddenClass), w.emit("onClick", w, e))
							}, 300)), 300 > s && 300 > n - A && (z && clearTimeout(z), w.emit("onDoubleTap", w, e))), A = Date.now(), setTimeout(function () {
								w && (w.allowClick = !0)
							}, 0), !T || !S || !w.swipeDirection || 0 === w.touches.diff || I === P) return void(T = S = !1);
						if (T = S = !1, i = w.params.followFinger ? w.rtl ? w.translate : -w.translate : -I, w.params.freeMode) {
							if (i < -w.minTranslate()) return void w.slideTo(w.activeIndex);
							if (i > -w.maxTranslate()) return void(w.slides.length < w.snapGrid.length ? w.slideTo(w.snapGrid.length - 1) : w.slideTo(w.slides.length - 1));
							if (w.params.freeModeMomentum) {
								if (R.length > 1) {
									var r = R.pop(),
										a = R.pop(),
										o = r.position - a.position,
										l = r.time - a.time;
									w.velocity = o / l, w.velocity = w.velocity / 2, Math.abs(w.velocity) < w.params.freeModeMinimumVelocity && (w.velocity = 0), (l > 150 || (new window.Date).getTime() - r.time > 300) && (w.velocity = 0)
								} else w.velocity = 0;
								R.length = 0;
								var c = 1e3 * w.params.freeModeMomentumRatio,
									d = w.velocity * c,
									h = w.translate + d;
								w.rtl && (h = -h);
								var p, u = !1,
									f = 20 * Math.abs(w.velocity) * w.params.freeModeMomentumBounceRatio;
								if (h < w.maxTranslate()) w.params.freeModeMomentumBounce ? (h + w.maxTranslate() < -f && (h = w.maxTranslate() - f), p = w.maxTranslate(), u = !0, M = !0) : h = w.maxTranslate();
								else if (h > w.minTranslate()) w.params.freeModeMomentumBounce ? (h - w.minTranslate() > f && (h = w.minTranslate() + f), p = w.minTranslate(), u = !0, M = !0) : h = w.minTranslate();
								else if (w.params.freeModeSticky) {
									var m, g = 0;
									for (g = 0; g < w.snapGrid.length; g += 1)
										if (w.snapGrid[g] > -h) {
											m = g;
											break
										}
									h = Math.abs(w.snapGrid[m] - h) < Math.abs(w.snapGrid[m - 1] - h) || "next" === w.swipeDirection ? w.snapGrid[m] : w.snapGrid[m - 1], w.rtl || (h = -h)
								}
								if (0 !== w.velocity) c = w.rtl ? Math.abs((-h - w.translate) / w.velocity) : Math.abs((h - w.translate) / w.velocity);
								else if (w.params.freeModeSticky) return void w.slideReset();
								w.params.freeModeMomentumBounce && u ? (w.updateProgress(p), w.setWrapperTransition(c), w.setWrapperTranslate(h), w.onTransitionStart(), w.animating = !0, w.wrapper.transitionEnd(function () {
									w && M && (w.emit("onMomentumBounce", w), w.setWrapperTransition(w.params.speed), w.setWrapperTranslate(p), w.wrapper.transitionEnd(function () {
										w && w.onTransitionEnd()
									}))
								})) : w.velocity ? (w.updateProgress(h), w.setWrapperTransition(c), w.setWrapperTranslate(h), w.onTransitionStart(), w.animating || (w.animating = !0, w.wrapper.transitionEnd(function () {
									w && w.onTransitionEnd()
								}))) : w.updateProgress(h), w.updateActiveIndex()
							}
							return void((!w.params.freeModeMomentum || s >= w.params.longSwipesMs) && (w.updateProgress(), w.updateActiveIndex()))
						}
						var v, y = 0,
							b = w.slidesSizesGrid[0];
						for (v = 0; v < w.slidesGrid.length; v += w.params.slidesPerGroup) void 0 !== w.slidesGrid[v + w.params.slidesPerGroup] ? i >= w.slidesGrid[v] && i < w.slidesGrid[v + w.params.slidesPerGroup] && (y = v, b = w.slidesGrid[v + w.params.slidesPerGroup] - w.slidesGrid[v]) : i >= w.slidesGrid[v] && (y = v, b = w.slidesGrid[w.slidesGrid.length - 1] - w.slidesGrid[w.slidesGrid.length - 2]);
						var _ = (i - w.slidesGrid[y]) / b;
						if (s > w.params.longSwipesMs) {
							if (!w.params.longSwipes) return void w.slideTo(w.activeIndex);
							"next" === w.swipeDirection && (_ >= w.params.longSwipesRatio ? w.slideTo(y + w.params.slidesPerGroup) : w.slideTo(y)), "prev" === w.swipeDirection && (_ > 1 - w.params.longSwipesRatio ? w.slideTo(y + w.params.slidesPerGroup) : w.slideTo(y))
						} else {
							if (!w.params.shortSwipes) return void w.slideTo(w.activeIndex);
							"next" === w.swipeDirection && w.slideTo(y + w.params.slidesPerGroup), "prev" === w.swipeDirection && w.slideTo(y)
						}
					}
				}, w._slideTo = function (e, t) {
					return w.slideTo(e, t, !0, !0)
				}, w.slideTo = function (e, t, i, n) {
					void 0 === i && (i = !0), void 0 === e && (e = 0), 0 > e && (e = 0), w.snapIndex = Math.floor(e / w.params.slidesPerGroup), w.snapIndex >= w.snapGrid.length && (w.snapIndex = w.snapGrid.length - 1);
					var s = -w.snapGrid[w.snapIndex];
					w.params.autoplay && w.autoplaying && (n || !w.params.autoplayDisableOnInteraction ? w.pauseAutoplay(t) : w.stopAutoplay()), w.updateProgress(s);
					for (var r = 0; r < w.slidesGrid.length; r++) - Math.floor(100 * s) >= Math.floor(100 * w.slidesGrid[r]) && (e = r);
					return !(!w.params.allowSwipeToNext && s < w.translate && s < w.minTranslate()) && (!(!w.params.allowSwipeToPrev && s > w.translate && s > w.maxTranslate() && (w.activeIndex || 0) !== e) && (void 0 === t && (t = w.params.speed), w.previousIndex = w.activeIndex || 0, w.activeIndex = e, w.rtl && -s === w.translate || !w.rtl && s === w.translate ? (w.params.autoHeight && w.updateAutoHeight(), w.updateClasses(), "slide" !== w.params.effect && w.setWrapperTranslate(s), !1) : (w.updateClasses(), w.onTransitionStart(i), 0 === t ? (w.setWrapperTranslate(s), w.setWrapperTransition(0), w.onTransitionEnd(i)) : (w.setWrapperTranslate(s), w.setWrapperTransition(t), w.animating || (w.animating = !0, w.wrapper.transitionEnd(function () {
						w && w.onTransitionEnd(i)
					}))), !0)))
				}, w.onTransitionStart = function (e) {
					void 0 === e && (e = !0), w.params.autoHeight && w.updateAutoHeight(), w.lazy && w.lazy.onTransitionStart(), e && (w.emit("onTransitionStart", w), w.activeIndex !== w.previousIndex && (w.emit("onSlideChangeStart", w), w.activeIndex > w.previousIndex ? w.emit("onSlideNextStart", w) : w.emit("onSlidePrevStart", w)))
				}, w.onTransitionEnd = function (e) {
					w.animating = !1, w.setWrapperTransition(0), void 0 === e && (e = !0), w.lazy && w.lazy.onTransitionEnd(), e && (w.emit("onTransitionEnd", w), w.activeIndex !== w.previousIndex && (w.emit("onSlideChangeEnd", w), w.activeIndex > w.previousIndex ? w.emit("onSlideNextEnd", w) : w.emit("onSlidePrevEnd", w))), w.params.hashnav && w.hashnav && w.hashnav.setHash()
				}, w.slideNext = function (e, t, i) {
					return w.params.loop ? !w.animating && (w.fixLoop(), w.container[0].clientLeft, w.slideTo(w.activeIndex + w.params.slidesPerGroup, t, e, i)) : w.slideTo(w.activeIndex + w.params.slidesPerGroup, t, e, i)
				}, w._slideNext = function (e) {
					return w.slideNext(!0, e, !0)
				}, w.slidePrev = function (e, t, i) {
					return w.params.loop ? !w.animating && (w.fixLoop(), w.container[0].clientLeft, w.slideTo(w.activeIndex - 1, t, e, i)) : w.slideTo(w.activeIndex - 1, t, e, i)
				}, w._slidePrev = function (e) {
					return w.slidePrev(!0, e, !0)
				}, w.slideReset = function (e, t, i) {
					return w.slideTo(w.activeIndex, t, e)
				}, w.setWrapperTransition = function (e, t) {
					w.wrapper.transition(e), "slide" !== w.params.effect && w.effects[w.params.effect] && w.effects[w.params.effect].setTransition(e), w.params.parallax && w.parallax && w.parallax.setTransition(e), w.params.scrollbar && w.scrollbar && w.scrollbar.setTransition(e), w.params.control && w.controller && w.controller.setTransition(e, t), w.emit("onSetTransition", w, e)
				}, w.setWrapperTranslate = function (e, t, i) {
					var n = 0,
						s = 0;
					r() ? n = w.rtl ? -e : e : s = e, w.params.roundLengths && (n = a(n), s = a(s)), w.params.virtualTranslate || (w.support.transforms3d ? w.wrapper.transform("translate3d(" + n + "px, " + s + "px, 0px)") : w.wrapper.transform("translate(" + n + "px, " + s + "px)")), w.translate = r() ? n : s;
					var o = w.maxTranslate() - w.minTranslate();
					(0 === o ? 0 : (e - w.minTranslate()) / o) !== w.progress && w.updateProgress(e), t && w.updateActiveIndex(), "slide" !== w.params.effect && w.effects[w.params.effect] && w.effects[w.params.effect].setTranslate(w.translate), w.params.parallax && w.parallax && w.parallax.setTranslate(w.translate), w.params.scrollbar && w.scrollbar && w.scrollbar.setTranslate(w.translate), w.params.control && w.controller && w.controller.setTranslate(w.translate, i), w.emit("onSetTranslate", w, w.translate)
				}, w.getTranslate = function (e, t) {
					var i, n, s, r;
					return void 0 === t && (t = "x"), w.params.virtualTranslate ? w.rtl ? -w.translate : w.translate : (s = window.getComputedStyle(e, null), window.WebKitCSSMatrix ? ((n = s.transform || s.webkitTransform).split(",").length > 6 && (n = n.split(", ").map(function (e) {
						return e.replace(",", ".")
					}).join(", ")), r = new window.WebKitCSSMatrix("none" === n ? "" : n)) : i = (r = s.MozTransform || s.OTransform || s.MsTransform || s.msTransform || s.transform || s.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (n = window.WebKitCSSMatrix ? r.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (n = window.WebKitCSSMatrix ? r.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), w.rtl && n && (n = -n), n || 0)
				}, w.getWrapperTranslate = function (e) {
					return void 0 === e && (e = r() ? "x" : "y"), w.getTranslate(w.wrapper[0], e)
				}, w.observers = [], w.initObservers = function () {
					if (w.params.observeParents)
						for (var e = w.container.parents(), t = 0; t < e.length; t++) c(e[t]);
					c(w.container[0], {
						childList: !1
					}), c(w.wrapper[0], {
						attributes: !1
					})
				}, w.disconnectObservers = function () {
					for (var e = 0; e < w.observers.length; e++) w.observers[e].disconnect();
					w.observers = []
				}, w.createLoop = function () {
					w.wrapper.children("." + w.params.slideClass + "." + w.params.slideDuplicateClass).remove();
					var e = w.wrapper.children("." + w.params.slideClass);
					"auto" !== w.params.slidesPerView || w.params.loopedSlides || (w.params.loopedSlides = e.length), w.loopedSlides = parseInt(w.params.loopedSlides || w.params.slidesPerView, 10), w.loopedSlides = w.loopedSlides + w.params.loopAdditionalSlides, w.loopedSlides > e.length && (w.loopedSlides = e.length);
					var i, n = [],
						s = [];
					for (e.each(function (i, r) {
							var a = t(this);
							i < w.loopedSlides && s.push(r), i < e.length && i >= e.length - w.loopedSlides && n.push(r), a.attr("data-swiper-slide-index", i)
						}), i = 0; i < s.length; i++) w.wrapper.append(t(s[i].cloneNode(!0)).addClass(w.params.slideDuplicateClass));
					for (i = n.length - 1; i >= 0; i--) w.wrapper.prepend(t(n[i].cloneNode(!0)).addClass(w.params.slideDuplicateClass))
				}, w.destroyLoop = function () {
					w.wrapper.children("." + w.params.slideClass + "." + w.params.slideDuplicateClass).remove(), w.slides.removeAttr("data-swiper-slide-index")
				}, w.fixLoop = function () {
					var e;
					w.activeIndex < w.loopedSlides ? (e = w.slides.length - 3 * w.loopedSlides + w.activeIndex, e += w.loopedSlides, w.slideTo(e, 0, !1, !0)) : ("auto" === w.params.slidesPerView && w.activeIndex >= 2 * w.loopedSlides || w.activeIndex > w.slides.length - 2 * w.params.slidesPerView) && (e = -w.slides.length + w.activeIndex + w.loopedSlides, e += w.loopedSlides, w.slideTo(e, 0, !1, !0))
				}, w.appendSlide = function (e) {
					if (w.params.loop && w.destroyLoop(), "object" == typeof e && e.length)
						for (var t = 0; t < e.length; t++) e[t] && w.wrapper.append(e[t]);
					else w.wrapper.append(e);
					w.params.loop && w.createLoop(), w.params.observer && w.support.observer || w.update(!0)
				}, w.prependSlide = function (e) {
					w.params.loop && w.destroyLoop();
					var t = w.activeIndex + 1;
					if ("object" == typeof e && e.length) {
						for (var i = 0; i < e.length; i++) e[i] && w.wrapper.prepend(e[i]);
						t = w.activeIndex + e.length
					} else w.wrapper.prepend(e);
					w.params.loop && w.createLoop(), w.params.observer && w.support.observer || w.update(!0), w.slideTo(t, 0, !1)
				}, w.removeSlide = function (e) {
					w.params.loop && (w.destroyLoop(), w.slides = w.wrapper.children("." + w.params.slideClass));
					var t, i = w.activeIndex;
					if ("object" == typeof e && e.length) {
						for (var n = 0; n < e.length; n++) t = e[n], w.slides[t] && w.slides.eq(t).remove(), i > t && i--;
						i = Math.max(i, 0)
					} else t = e, w.slides[t] && w.slides.eq(t).remove(), i > t && i--, i = Math.max(i, 0);
					w.params.loop && w.createLoop(), w.params.observer && w.support.observer || w.update(!0), w.params.loop ? w.slideTo(i + w.loopedSlides, 0, !1) : w.slideTo(i, 0, !1)
				}, w.removeAllSlides = function () {
					for (var e = [], t = 0; t < w.slides.length; t++) e.push(t);
					w.removeSlide(e)
				}, w.effects = {
					fade: {
						setTranslate: function () {
							for (var e = 0; e < w.slides.length; e++) {
								var t = w.slides.eq(e),
									i = -t[0].swiperSlideOffset;
								w.params.virtualTranslate || (i -= w.translate);
								var n = 0;
								r() || (n = i, i = 0);
								var s = w.params.fade.crossFade ? Math.max(1 - Math.abs(t[0].progress), 0) : 1 + Math.min(Math.max(t[0].progress, -1), 0);
								t.css({
									opacity: s
								}).transform("translate3d(" + i + "px, " + n + "px, 0px)")
							}
						},
						setTransition: function (e) {
							if (w.slides.transition(e), w.params.virtualTranslate && 0 !== e) {
								var t = !1;
								w.slides.transitionEnd(function () {
									if (!t && w) {
										t = !0, w.animating = !1;
										for (var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], i = 0; i < e.length; i++) w.wrapper.trigger(e[i])
									}
								})
							}
						}
					},
					cube: {
						setTranslate: function () {
							var e, i = 0;
							w.params.cube.shadow && (r() ? (0 === (e = w.wrapper.find(".swiper-cube-shadow")).length && (e = t('<div class="swiper-cube-shadow"></div>'), w.wrapper.append(e)), e.css({
								height: w.width + "px"
							})) : 0 === (e = w.container.find(".swiper-cube-shadow")).length && (e = t('<div class="swiper-cube-shadow"></div>'), w.container.append(e)));
							for (var n = 0; n < w.slides.length; n++) {
								var s = w.slides.eq(n),
									a = 90 * n,
									o = Math.floor(a / 360);
								w.rtl && (a = -a, o = Math.floor(-a / 360));
								var l = Math.max(Math.min(s[0].progress, 1), -1),
									c = 0,
									d = 0,
									h = 0;
								n % 4 == 0 ? (c = 4 * -o * w.size, h = 0) : (n - 1) % 4 == 0 ? (c = 0, h = 4 * -o * w.size) : (n - 2) % 4 == 0 ? (c = w.size + 4 * o * w.size, h = w.size) : (n - 3) % 4 == 0 && (c = -w.size, h = 3 * w.size + 4 * w.size * o), w.rtl && (c = -c), r() || (d = c, c = 0);
								var p = "rotateX(" + (r() ? 0 : -a) + "deg) rotateY(" + (r() ? a : 0) + "deg) translate3d(" + c + "px, " + d + "px, " + h + "px)";
								if (1 >= l && l > -1 && (i = 90 * n + 90 * l, w.rtl && (i = 90 * -n - 90 * l)), s.transform(p), w.params.cube.slideShadows) {
									var u = r() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top"),
										f = r() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");
									0 === u.length && (u = t('<div class="swiper-slide-shadow-' + (r() ? "left" : "top") + '"></div>'), s.append(u)), 0 === f.length && (f = t('<div class="swiper-slide-shadow-' + (r() ? "right" : "bottom") + '"></div>'), s.append(f)), s[0].progress, u.length && (u[0].style.opacity = -s[0].progress), f.length && (f[0].style.opacity = s[0].progress)
								}
							}
							if (w.wrapper.css({
									"-webkit-transform-origin": "50% 50% -" + w.size / 2 + "px",
									"-moz-transform-origin": "50% 50% -" + w.size / 2 + "px",
									"-ms-transform-origin": "50% 50% -" + w.size / 2 + "px",
									"transform-origin": "50% 50% -" + w.size / 2 + "px"
								}), w.params.cube.shadow)
								if (r()) e.transform("translate3d(0px, " + (w.width / 2 + w.params.cube.shadowOffset) + "px, " + -w.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + w.params.cube.shadowScale + ")");
								else {
									var m = Math.abs(i) - 90 * Math.floor(Math.abs(i) / 90),
										g = 1.5 - (Math.sin(2 * m * Math.PI / 360) / 2 + Math.cos(2 * m * Math.PI / 360) / 2),
										v = w.params.cube.shadowScale,
										y = w.params.cube.shadowScale / g,
										b = w.params.cube.shadowOffset;
									e.transform("scale3d(" + v + ", 1, " + y + ") translate3d(0px, " + (w.height / 2 + b) + "px, " + -w.height / 2 / y + "px) rotateX(-90deg)")
								}
							var _ = w.isSafari || w.isUiWebView ? -w.size / 2 : 0;
							w.wrapper.transform("translate3d(0px,0," + _ + "px) rotateX(" + (r() ? 0 : i) + "deg) rotateY(" + (r() ? -i : 0) + "deg)")
						},
						setTransition: function (e) {
							w.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), w.params.cube.shadow && !r() && w.container.find(".swiper-cube-shadow").transition(e)
						}
					},
					coverflow: {
						setTranslate: function () {
							for (var e = w.translate, i = r() ? -e + w.width / 2 : -e + w.height / 2, n = r() ? w.params.coverflow.rotate : -w.params.coverflow.rotate, s = w.params.coverflow.depth, a = 0, o = w.slides.length; o > a; a++) {
								var l = w.slides.eq(a),
									c = w.slidesSizesGrid[a],
									d = (i - l[0].swiperSlideOffset - c / 2) / c * w.params.coverflow.modifier,
									h = r() ? n * d : 0,
									p = r() ? 0 : n * d,
									u = -s * Math.abs(d),
									f = r() ? 0 : w.params.coverflow.stretch * d,
									m = r() ? w.params.coverflow.stretch * d : 0;
								Math.abs(m) < .001 && (m = 0), Math.abs(f) < .001 && (f = 0), Math.abs(u) < .001 && (u = 0), Math.abs(h) < .001 && (h = 0), Math.abs(p) < .001 && (p = 0);
								var g = "translate3d(" + m + "px," + f + "px," + u + "px)  rotateX(" + p + "deg) rotateY(" + h + "deg)";
								if (l.transform(g), l[0].style.zIndex = 1 - Math.abs(Math.round(d)), w.params.coverflow.slideShadows) {
									var v = r() ? l.find(".swiper-slide-shadow-left") : l.find(".swiper-slide-shadow-top"),
										y = r() ? l.find(".swiper-slide-shadow-right") : l.find(".swiper-slide-shadow-bottom");
									0 === v.length && (v = t('<div class="swiper-slide-shadow-' + (r() ? "left" : "top") + '"></div>'), l.append(v)), 0 === y.length && (y = t('<div class="swiper-slide-shadow-' + (r() ? "right" : "bottom") + '"></div>'), l.append(y)), v.length && (v[0].style.opacity = d > 0 ? d : 0), y.length && (y[0].style.opacity = -d > 0 ? -d : 0)
								}
							}
							w.browser.ie && (w.wrapper[0].style.perspectiveOrigin = i + "px 50%")
						},
						setTransition: function (e) {
							w.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
						}
					}
				}, w.lazy = {
					initialImageLoaded: !1,
					loadImageInSlide: function (e, i) {
						if (void 0 !== e && (void 0 === i && (i = !0), 0 !== w.slides.length)) {
							var n = w.slides.eq(e),
								s = n.find(".swiper-lazy:not(.swiper-lazy-loaded):not(.swiper-lazy-loading)");
							!n.hasClass("swiper-lazy") || n.hasClass("swiper-lazy-loaded") || n.hasClass("swiper-lazy-loading") || (s = s.add(n[0])), 0 !== s.length && s.each(function () {
								var e = t(this);
								e.addClass("swiper-lazy-loading");
								var s = e.attr("data-background"),
									r = e.attr("data-src"),
									a = e.attr("data-srcset");
								w.loadImage(e[0], r || s, a, !1, function () {
									if (s ? (e.css("background-image", "url(" + s + ")"), e.removeAttr("data-background")) : (a && (e.attr("srcset", a), e.removeAttr("data-srcset")), r && (e.attr("src", r), e.removeAttr("data-src"))), e.addClass("swiper-lazy-loaded").removeClass("swiper-lazy-loading"), n.find(".swiper-lazy-preloader, .preloader").remove(), w.params.loop && i) {
										var t = n.attr("data-swiper-slide-index");
										if (n.hasClass(w.params.slideDuplicateClass)) {
											var o = w.wrapper.children('[data-swiper-slide-index="' + t + '"]:not(.' + w.params.slideDuplicateClass + ")");
											w.lazy.loadImageInSlide(o.index(), !1)
										} else {
											var l = w.wrapper.children("." + w.params.slideDuplicateClass + '[data-swiper-slide-index="' + t + '"]');
											w.lazy.loadImageInSlide(l.index(), !1)
										}
									}
									w.emit("onLazyImageReady", w, n[0], e[0])
								}), w.emit("onLazyImageLoad", w, n[0], e[0])
							})
						}
					},
					load: function () {
						var e;
						if (w.params.watchSlidesVisibility) w.wrapper.children("." + w.params.slideVisibleClass).each(function () {
							w.lazy.loadImageInSlide(t(this).index())
						});
						else if (w.params.slidesPerView > 1)
							for (e = w.activeIndex; e < w.activeIndex + w.params.slidesPerView; e++) w.slides[e] && w.lazy.loadImageInSlide(e);
						else w.lazy.loadImageInSlide(w.activeIndex);
						if (w.params.lazyLoadingInPrevNext)
							if (w.params.slidesPerView > 1) {
								for (e = w.activeIndex + w.params.slidesPerView; e < w.activeIndex + w.params.slidesPerView + w.params.slidesPerView; e++) w.slides[e] && w.lazy.loadImageInSlide(e);
								for (e = w.activeIndex - w.params.slidesPerView; e < w.activeIndex; e++) w.slides[e] && w.lazy.loadImageInSlide(e)
							} else {
								var i = w.wrapper.children("." + w.params.slideNextClass);
								i.length > 0 && w.lazy.loadImageInSlide(i.index());
								var n = w.wrapper.children("." + w.params.slidePrevClass);
								n.length > 0 && w.lazy.loadImageInSlide(n.index())
							}
					},
					onTransitionStart: function () {
						w.params.lazyLoading && (w.params.lazyLoadingOnTransitionStart || !w.params.lazyLoadingOnTransitionStart && !w.lazy.initialImageLoaded) && w.lazy.load()
					},
					onTransitionEnd: function () {
						w.params.lazyLoading && !w.params.lazyLoadingOnTransitionStart && w.lazy.load()
					}
				}, w.scrollbar = {
					isTouched: !1,
					setDragPosition: function (e) {
						var t = w.scrollbar,
							i = (r() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - t.track.offset()[r() ? "left" : "top"] - t.dragSize / 2,
							n = -w.minTranslate() * t.moveDivider,
							s = -w.maxTranslate() * t.moveDivider;
						n > i ? i = n : i > s && (i = s), i = -i / t.moveDivider, w.updateProgress(i), w.setWrapperTranslate(i, !0)
					},
					dragStart: function (e) {
						var t = w.scrollbar;
						t.isTouched = !0, e.preventDefault(), e.stopPropagation(), t.setDragPosition(e), clearTimeout(t.dragTimeout), t.track.transition(0), w.params.scrollbarHide && t.track.css("opacity", 1), w.wrapper.transition(100), t.drag.transition(100), w.emit("onScrollbarDragStart", w)
					},
					dragMove: function (e) {
						var t = w.scrollbar;
						t.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), w.wrapper.transition(0), t.track.transition(0), t.drag.transition(0), w.emit("onScrollbarDragMove", w))
					},
					dragEnd: function (e) {
						var t = w.scrollbar;
						t.isTouched && (t.isTouched = !1, w.params.scrollbarHide && (clearTimeout(t.dragTimeout), t.dragTimeout = setTimeout(function () {
							t.track.css("opacity", 0), t.track.transition(400)
						}, 1e3)), w.emit("onScrollbarDragEnd", w), w.params.scrollbarSnapOnRelease && w.slideReset())
					},
					enableDraggable: function () {
						var e = w.scrollbar,
							i = w.support.touch ? e.track : document;
						t(e.track).on(w.touchEvents.start, e.dragStart), t(i).on(w.touchEvents.move, e.dragMove), t(i).on(w.touchEvents.end, e.dragEnd)
					},
					disableDraggable: function () {
						var e = w.scrollbar,
							i = w.support.touch ? e.track : document;
						t(e.track).off(w.touchEvents.start, e.dragStart), t(i).off(w.touchEvents.move, e.dragMove), t(i).off(w.touchEvents.end, e.dragEnd)
					},
					set: function () {
						if (w.params.scrollbar) {
							var e = w.scrollbar;
							e.track = t(w.params.scrollbar), e.drag = e.track.find(".swiper-scrollbar-drag"), 0 === e.drag.length && (e.drag = t('<div class="swiper-scrollbar-drag"></div>'), e.track.append(e.drag)), e.drag[0].style.width = "", e.drag[0].style.height = "", e.trackSize = r() ? e.track[0].offsetWidth : e.track[0].offsetHeight, e.divider = w.size / w.virtualSize, e.moveDivider = e.divider * (e.trackSize / w.size), e.dragSize = e.trackSize * e.divider, r() ? e.drag[0].style.width = e.dragSize + "px" : e.drag[0].style.height = e.dragSize + "px", e.divider >= 1 ? e.track[0].style.display = "none" : e.track[0].style.display = "", w.params.scrollbarHide && (e.track[0].style.opacity = 0)
						}
					},
					setTranslate: function () {
						if (w.params.scrollbar) {
							var e, t = w.scrollbar,
								i = (w.translate, t.dragSize);
							e = (t.trackSize - t.dragSize) * w.progress, w.rtl && r() ? (e = -e) > 0 ? (i = t.dragSize - e, e = 0) : -e + t.dragSize > t.trackSize && (i = t.trackSize + e) : 0 > e ? (i = t.dragSize + e, e = 0) : e + t.dragSize > t.trackSize && (i = t.trackSize - e), r() ? (w.support.transforms3d ? t.drag.transform("translate3d(" + e + "px, 0, 0)") : t.drag.transform("translateX(" + e + "px)"), t.drag[0].style.width = i + "px") : (w.support.transforms3d ? t.drag.transform("translate3d(0px, " + e + "px, 0)") : t.drag.transform("translateY(" + e + "px)"), t.drag[0].style.height = i + "px"), w.params.scrollbarHide && (clearTimeout(t.timeout), t.track[0].style.opacity = 1, t.timeout = setTimeout(function () {
								t.track[0].style.opacity = 0, t.track.transition(400)
							}, 1e3))
						}
					},
					setTransition: function (e) {
						w.params.scrollbar && w.scrollbar.drag.transition(e)
					}
				}, w.controller = {
					LinearSpline: function (e, t) {
						var i, n;
						this.x = e, this.y = t, this.lastIndex = e.length - 1, this.x.length, this.interpolate = function (e) {
							return e ? (n = s(this.x, e), i = n - 1, (e - this.x[i]) * (this.y[n] - this.y[i]) / (this.x[n] - this.x[i]) + this.y[i]) : 0
						};
						var s = function () {
							var e, t, i;
							return function (n, s) {
								for (t = -1, e = n.length; e - t > 1;) n[i = e + t >> 1] <= s ? t = i : e = i;
								return e
							}
						}()
					},
					getInterpolateFunction: function (e) {
						w.controller.spline || (w.controller.spline = w.params.loop ? new w.controller.LinearSpline(w.slidesGrid, e.slidesGrid) : new w.controller.LinearSpline(w.snapGrid, e.snapGrid))
					},
					setTranslate: function (e, t) {
						function i(t) {
							e = t.rtl && "horizontal" === t.params.direction ? -w.translate : w.translate, "slide" === w.params.controlBy && (w.controller.getInterpolateFunction(t), r = -w.controller.spline.interpolate(-e)), r && "container" !== w.params.controlBy || (s = (t.maxTranslate() - t.minTranslate()) / (w.maxTranslate() - w.minTranslate()), r = (e - w.minTranslate()) * s + t.minTranslate()), w.params.controlInverse && (r = t.maxTranslate() - r), t.updateProgress(r), t.setWrapperTranslate(r, !1, w), t.updateActiveIndex()
						}
						var s, r, a = w.params.control;
						if (w.isArray(a))
							for (var o = 0; o < a.length; o++) a[o] !== t && a[o] instanceof n && i(a[o]);
						else a instanceof n && t !== a && i(a)
					},
					setTransition: function (e, t) {
						function i(t) {
							t.setWrapperTransition(e, w), 0 !== e && (t.onTransitionStart(), t.wrapper.transitionEnd(function () {
								r && (t.params.loop && "slide" === w.params.controlBy && t.fixLoop(), t.onTransitionEnd())
							}))
						}
						var s, r = w.params.control;
						if (w.isArray(r))
							for (s = 0; s < r.length; s++) r[s] !== t && r[s] instanceof n && i(r[s]);
						else r instanceof n && t !== r && i(r)
					}
				}, w.hashnav = {
					init: function () {
						if (w.params.hashnav) {
							w.hashnav.initialized = !0;
							var e = document.location.hash.replace("#", "");
							if (e)
								for (var t = 0, i = w.slides.length; i > t; t++) {
									var n = w.slides.eq(t);
									if (n.attr("data-hash") === e && !n.hasClass(w.params.slideDuplicateClass)) {
										var s = n.index();
										w.slideTo(s, 0, w.params.runCallbacksOnInit, !0)
									}
								}
						}
					},
					setHash: function () {
						w.hashnav.initialized && w.params.hashnav && (document.location.hash = w.slides.eq(w.activeIndex).attr("data-hash") || "")
					}
				}, w.disableKeyboardControl = function () {
					w.params.keyboardControl = !1, t(document).off("keydown", d)
				}, w.enableKeyboardControl = function () {
					w.params.keyboardControl = !0, t(document).on("keydown", d)
				}, w.mousewheel = {
					event: !1,
					lastScrollTime: (new window.Date).getTime()
				}, w.params.mousewheelControl) {
				try {
					new window.WheelEvent("wheel"), w.mousewheel.event = "wheel"
				} catch (e) {}
				w.mousewheel.event || void 0 === document.onmousewheel || (w.mousewheel.event = "mousewheel"), w.mousewheel.event || (w.mousewheel.event = "DOMMouseScroll")
			}
			for (var W in w.disableMousewheelControl = function () {
					return !!w.mousewheel.event && (w.container.off(w.mousewheel.event, h), !0)
				}, w.enableMousewheelControl = function () {
					return !!w.mousewheel.event && (w.container.on(w.mousewheel.event, h), !0)
				}, w.parallax = {
					setTranslate: function () {
						w.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function () {
							p(this, w.progress)
						}), w.slides.each(function () {
							var e = t(this);
							e.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function () {
								p(this, Math.min(Math.max(e[0].progress, -1), 1))
							})
						})
					},
					setTransition: function (e) {
						void 0 === e && (e = w.params.speed), w.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function () {
							var i = t(this),
								n = parseInt(i.attr("data-swiper-parallax-duration"), 10) || e;
							0 === e && (n = 0), i.transition(n)
						})
					}
				}, w._plugins = [], w.plugins) {
				var H = w.plugins[W](w, w.params[W]);
				H && w._plugins.push(H)
			}
			return w.callPlugins = function (e) {
				for (var t = 0; t < w._plugins.length; t++) e in w._plugins[t] && w._plugins[t][e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
			}, w.emitterEventListeners = {}, w.emit = function (e) {
				var t;
				if (w.params[e] && w.params[e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]), w.emitterEventListeners[e])
					for (t = 0; t < w.emitterEventListeners[e].length; t++) w.emitterEventListeners[e][t](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
				w.callPlugins && w.callPlugins(e, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
			}, w.on = function (e, t) {
				return e = u(e), w.emitterEventListeners[e] || (w.emitterEventListeners[e] = []), w.emitterEventListeners[e].push(t), w
			}, w.off = function (e, t) {
				var i;
				if (e = u(e), void 0 === t) return w.emitterEventListeners[e] = [], w;
				if (w.emitterEventListeners[e] && 0 !== w.emitterEventListeners[e].length) {
					for (i = 0; i < w.emitterEventListeners[e].length; i++) w.emitterEventListeners[e][i] === t && w.emitterEventListeners[e].splice(i, 1);
					return w
				}
			}, w.once = function (e, t) {
				e = u(e);
				var i = function () {
					t(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]), w.off(e, i)
				};
				return w.on(e, i), w
			}, w.a11y = {
				makeFocusable: function (e) {
					return e.attr("tabIndex", "0"), e
				},
				addRole: function (e, t) {
					return e.attr("role", t), e
				},
				addLabel: function (e, t) {
					return e.attr("aria-label", t), e
				},
				disable: function (e) {
					return e.attr("aria-disabled", !0), e
				},
				enable: function (e) {
					return e.attr("aria-disabled", !1), e
				},
				onEnterKey: function (e) {
					13 === e.keyCode && (t(e.target).is(w.params.nextButton) ? (w.onClickNext(e), w.isEnd ? w.a11y.notify(w.params.lastSlideMessage) : w.a11y.notify(w.params.nextSlideMessage)) : t(e.target).is(w.params.prevButton) && (w.onClickPrev(e), w.isBeginning ? w.a11y.notify(w.params.firstSlideMessage) : w.a11y.notify(w.params.prevSlideMessage)), t(e.target).is("." + w.params.bulletClass) && t(e.target)[0].click())
				},
				liveRegion: t('<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>'),
				notify: function (e) {
					var t = w.a11y.liveRegion;
					0 !== t.length && (t.html(""), t.html(e))
				},
				init: function () {
					if (w.params.nextButton) {
						var e = t(w.params.nextButton);
						w.a11y.makeFocusable(e), w.a11y.addRole(e, "button"), w.a11y.addLabel(e, w.params.nextSlideMessage)
					}
					if (w.params.prevButton) {
						var i = t(w.params.prevButton);
						w.a11y.makeFocusable(i), w.a11y.addRole(i, "button"), w.a11y.addLabel(i, w.params.prevSlideMessage)
					}
					t(w.container).append(w.a11y.liveRegion)
				},
				initPagination: function () {
					w.params.pagination && w.params.paginationClickable && w.bullets && w.bullets.length && w.bullets.each(function () {
						var e = t(this);
						w.a11y.makeFocusable(e), w.a11y.addRole(e, "button"), w.a11y.addLabel(e, w.params.paginationBulletMessage.replace(/{{index}}/, e.index() + 1))
					})
				},
				destroy: function () {
					w.a11y.liveRegion && w.a11y.liveRegion.length > 0 && w.a11y.liveRegion.remove()
				}
			}, w.init = function () {
				w.params.loop && w.createLoop(), w.updateContainerSize(), w.updateSlidesSize(), w.updatePagination(), w.params.scrollbar && w.scrollbar && (w.scrollbar.set(), w.params.scrollbarDraggable && w.scrollbar.enableDraggable()), "slide" !== w.params.effect && w.effects[w.params.effect] && (w.params.loop || w.updateProgress(), w.effects[w.params.effect].setTranslate()), w.params.loop ? w.slideTo(w.params.initialSlide + w.loopedSlides, 0, w.params.runCallbacksOnInit) : (w.slideTo(w.params.initialSlide, 0, w.params.runCallbacksOnInit), 0 === w.params.initialSlide && (w.parallax && w.params.parallax && w.parallax.setTranslate(), w.lazy && w.params.lazyLoading && (w.lazy.load(), w.lazy.initialImageLoaded = !0))), w.attachEvents(), w.params.observer && w.support.observer && w.initObservers(), w.params.preloadImages && !w.params.lazyLoading && w.preloadImages(), w.params.autoplay && w.startAutoplay(), w.params.keyboardControl && w.enableKeyboardControl && w.enableKeyboardControl(), w.params.mousewheelControl && w.enableMousewheelControl && w.enableMousewheelControl(), w.params.hashnav && w.hashnav && w.hashnav.init(), w.params.a11y && w.a11y && w.a11y.init(), w.emit("onInit", w)
			}, w.cleanupStyles = function () {
				w.container.removeClass(w.classNames.join(" ")).removeAttr("style"), w.wrapper.removeAttr("style"), w.slides && w.slides.length && w.slides.removeClass([w.params.slideVisibleClass, w.params.slideActiveClass, w.params.slideNextClass, w.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"), w.paginationContainer && w.paginationContainer.length && w.paginationContainer.removeClass(w.params.paginationHiddenClass), w.bullets && w.bullets.length && w.bullets.removeClass(w.params.bulletActiveClass), w.params.prevButton && t(w.params.prevButton).removeClass(w.params.buttonDisabledClass), w.params.nextButton && t(w.params.nextButton).removeClass(w.params.buttonDisabledClass), w.params.scrollbar && w.scrollbar && (w.scrollbar.track && w.scrollbar.track.length && w.scrollbar.track.removeAttr("style"), w.scrollbar.drag && w.scrollbar.drag.length && w.scrollbar.drag.removeAttr("style"))
			}, w.destroy = function (e, t) {
				w.detachEvents(), w.stopAutoplay(), w.params.scrollbar && w.scrollbar && w.params.scrollbarDraggable && w.scrollbar.disableDraggable(), w.params.loop && w.destroyLoop(), t && w.cleanupStyles(), w.disconnectObservers(), w.params.keyboardControl && w.disableKeyboardControl && w.disableKeyboardControl(), w.params.mousewheelControl && w.disableMousewheelControl && w.disableMousewheelControl(), w.params.a11y && w.a11y && w.a11y.destroy(), w.emit("onDestroy"), !1 !== e && (w = null)
			}, w.init(), w
		}
	};
	n.prototype = {
		isSafari: function () {
			var e = navigator.userAgent.toLowerCase();
			return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
		}(),
		isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),
		isArray: function (e) {
			return "[object Array]" === Object.prototype.toString.apply(e)
		},
		browser: {
			ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
			ieTouch: window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1
		},
		device: function () {
			var e = navigator.userAgent,
				t = e.match(/(Android);?[\s\/]+([\d.]+)?/),
				i = e.match(/(iPad).*OS\s([\d_]+)/),
				n = e.match(/(iPod)(.*OS\s([\d_]+))?/),
				s = !i && e.match(/(iPhone\sOS)\s([\d_]+)/);
			return {
				ios: i || s || n,
				android: t
			}
		}(),
		support: {
			touch: window.Modernizr && !0 === Modernizr.touch || !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch),
			transforms3d: window.Modernizr && !0 === Modernizr.csstransforms3d || function () {
				var e = document.createElement("div").style;
				return "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e
			}(),
			flexbox: function () {
				for (var e = document.createElement("div").style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), i = 0; i < t.length; i++)
					if (t[i] in e) return !0
			}(),
			observer: "MutationObserver" in window || "WebkitMutationObserver" in window
		},
		plugins: {}
	};
	for (var s = function () {
			var e = function (e) {
					var t = 0;
					for (t = 0; t < e.length; t++) this[t] = e[t];
					return this.length = e.length, this
				},
				t = function (t, i) {
					var n = [],
						s = 0;
					if (t && !i && t instanceof e) return t;
					if (t)
						if ("string" == typeof t) {
							var r, a, o = t.trim();
							if (o.indexOf("<") >= 0 && o.indexOf(">") >= 0) {
								var l = "div";
								for (0 === o.indexOf("<li") && (l = "ul"), 0 === o.indexOf("<tr") && (l = "tbody"), (0 === o.indexOf("<td") || 0 === o.indexOf("<th")) && (l = "tr"), 0 === o.indexOf("<tbody") && (l = "table"), 0 === o.indexOf("<option") && (l = "select"), (a = document.createElement(l)).innerHTML = t, s = 0; s < a.childNodes.length; s++) n.push(a.childNodes[s])
							} else
								for (r = i || "#" !== t[0] || t.match(/[ .<>:~]/) ? (i || document).querySelectorAll(t) : [document.getElementById(t.split("#")[1])], s = 0; s < r.length; s++) r[s] && n.push(r[s])
						} else if (t.nodeType || t === window || t === document) n.push(t);
					else if (t.length > 0 && t[0].nodeType)
						for (s = 0; s < t.length; s++) n.push(t[s]);
					return new e(n)
				};
			return e.prototype = {
				addClass: function (e) {
					if (void 0 === e) return this;
					for (var t = e.split(" "), i = 0; i < t.length; i++)
						for (var n = 0; n < this.length; n++) this[n].classList.add(t[i]);
					return this
				},
				removeClass: function (e) {
					for (var t = e.split(" "), i = 0; i < t.length; i++)
						for (var n = 0; n < this.length; n++) this[n].classList.remove(t[i]);
					return this
				},
				hasClass: function (e) {
					return !!this[0] && this[0].classList.contains(e)
				},
				toggleClass: function (e) {
					for (var t = e.split(" "), i = 0; i < t.length; i++)
						for (var n = 0; n < this.length; n++) this[n].classList.toggle(t[i]);
					return this
				},
				attr: function (e, t) {
					if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
					for (var i = 0; i < this.length; i++)
						if (2 === arguments.length) this[i].setAttribute(e, t);
						else
							for (var n in e) this[i][n] = e[n], this[i].setAttribute(n, e[n]);
					return this
				},
				removeAttr: function (e) {
					for (var t = 0; t < this.length; t++) this[t].removeAttribute(e);
					return this
				},
				data: function (e, t) {
					if (void 0 !== t) {
						for (var i = 0; i < this.length; i++) {
							var n = this[i];
							n.dom7ElementDataStorage || (n.dom7ElementDataStorage = {}), n.dom7ElementDataStorage[e] = t
						}
						return this
					}
					if (this[0]) {
						var s = this[0].getAttribute("data-" + e);
						return s || (this[0].dom7ElementDataStorage && e in this[0].dom7ElementDataStorage ? this[0].dom7ElementDataStorage[e] : void 0)
					}
				},
				transform: function (e) {
					for (var t = 0; t < this.length; t++) {
						var i = this[t].style;
						i.webkitTransform = i.MsTransform = i.msTransform = i.MozTransform = i.OTransform = i.transform = e
					}
					return this
				},
				transition: function (e) {
					"string" != typeof e && (e += "ms");
					for (var t = 0; t < this.length; t++) {
						var i = this[t].style;
						i.webkitTransitionDuration = i.MsTransitionDuration = i.msTransitionDuration = i.MozTransitionDuration = i.OTransitionDuration = i.transitionDuration = e
					}
					return this
				},
				on: function (e, i, n, s) {
					function r(e) {
						var s = e.target;
						if (t(s).is(i)) n.call(s, e);
						else
							for (var r = t(s).parents(), a = 0; a < r.length; a++) t(r[a]).is(i) && n.call(r[a], e)
					}
					var a, o, l = e.split(" ");
					for (a = 0; a < this.length; a++)
						if ("function" == typeof i || !1 === i)
							for ("function" == typeof i && (n = arguments[1], s = arguments[2] || !1), o = 0; o < l.length; o++) this[a].addEventListener(l[o], n, s);
						else
							for (o = 0; o < l.length; o++) this[a].dom7LiveListeners || (this[a].dom7LiveListeners = []), this[a].dom7LiveListeners.push({
								listener: n,
								liveListener: r
							}), this[a].addEventListener(l[o], r, s);
					return this
				},
				off: function (e, t, i, n) {
					for (var s = e.split(" "), r = 0; r < s.length; r++)
						for (var a = 0; a < this.length; a++)
							if ("function" == typeof t || !1 === t) "function" == typeof t && (i = arguments[1], n = arguments[2] || !1), this[a].removeEventListener(s[r], i, n);
							else if (this[a].dom7LiveListeners)
						for (var o = 0; o < this[a].dom7LiveListeners.length; o++) this[a].dom7LiveListeners[o].listener === i && this[a].removeEventListener(s[r], this[a].dom7LiveListeners[o].liveListener, n);
					return this
				},
				once: function (e, t, i, n) {
					var s = this;
					"function" == typeof t && (t = !1, i = arguments[1], n = arguments[2]), s.on(e, t, function r(a) {
						i(a), s.off(e, t, r, n)
					}, n)
				},
				trigger: function (e, t) {
					for (var i = 0; i < this.length; i++) {
						var n;
						try {
							n = new window.CustomEvent(e, {
								detail: t,
								bubbles: !0,
								cancelable: !0
							})
						} catch (i) {
							(n = document.createEvent("Event")).initEvent(e, !0, !0), n.detail = t
						}
						this[i].dispatchEvent(n)
					}
					return this
				},
				transitionEnd: function (e) {
					function t(r) {
						if (r.target === this)
							for (e.call(this, r), i = 0; i < n.length; i++) s.off(n[i], t)
					}
					var i, n = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
						s = this;
					if (e)
						for (i = 0; i < n.length; i++) s.on(n[i], t);
					return this
				},
				width: function () {
					return this[0] === window ? window.innerWidth : this.length > 0 ? parseFloat(this.css("width")) : null
				},
				outerWidth: function (e) {
					return this.length > 0 ? e ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null
				},
				height: function () {
					return this[0] === window ? window.innerHeight : this.length > 0 ? parseFloat(this.css("height")) : null
				},
				outerHeight: function (e) {
					return this.length > 0 ? e ? this[0].offsetHeight + parseFloat(this.css("margin-top")) + parseFloat(this.css("margin-bottom")) : this[0].offsetHeight : null
				},
				offset: function () {
					if (this.length > 0) {
						var e = this[0],
							t = e.getBoundingClientRect(),
							i = document.body,
							n = e.clientTop || i.clientTop || 0,
							s = e.clientLeft || i.clientLeft || 0,
							r = window.pageYOffset || e.scrollTop,
							a = window.pageXOffset || e.scrollLeft;
						return {
							top: t.top + r - n,
							left: t.left + a - s
						}
					}
					return null
				},
				css: function (e, t) {
					var i;
					if (1 === arguments.length) {
						if ("string" != typeof e) {
							for (i = 0; i < this.length; i++)
								for (var n in e) this[i].style[n] = e[n];
							return this
						}
						if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(e)
					}
					if (2 === arguments.length && "string" == typeof e) {
						for (i = 0; i < this.length; i++) this[i].style[e] = t;
						return this
					}
					return this
				},
				each: function (e) {
					for (var t = 0; t < this.length; t++) e.call(this[t], t, this[t]);
					return this
				},
				html: function (e) {
					if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
					for (var t = 0; t < this.length; t++) this[t].innerHTML = e;
					return this
				},
				is: function (i) {
					if (!this[0]) return !1;
					var n, s;
					if ("string" == typeof i) {
						var r = this[0];
						if (r === document) return i === document;
						if (r === window) return i === window;
						if (r.matches) return r.matches(i);
						if (r.webkitMatchesSelector) return r.webkitMatchesSelector(i);
						if (r.mozMatchesSelector) return r.mozMatchesSelector(i);
						if (r.msMatchesSelector) return r.msMatchesSelector(i);
						for (n = t(i), s = 0; s < n.length; s++)
							if (n[s] === this[0]) return !0;
						return !1
					}
					if (i === document) return this[0] === document;
					if (i === window) return this[0] === window;
					if (i.nodeType || i instanceof e) {
						for (n = i.nodeType ? [i] : i, s = 0; s < n.length; s++)
							if (n[s] === this[0]) return !0;
						return !1
					}
					return !1
				},
				index: function () {
					if (this[0]) {
						for (var e = this[0], t = 0; null !== (e = e.previousSibling);) 1 === e.nodeType && t++;
						return t
					}
				},
				eq: function (t) {
					if (void 0 === t) return this;
					var i, n = this.length;
					return t > n - 1 ? new e([]) : 0 > t ? new e(0 > (i = n + t) ? [] : [this[i]]) : new e([this[t]])
				},
				append: function (t) {
					var i, n;
					for (i = 0; i < this.length; i++)
						if ("string" == typeof t) {
							var s = document.createElement("div");
							for (s.innerHTML = t; s.firstChild;) this[i].appendChild(s.firstChild)
						} else if (t instanceof e)
						for (n = 0; n < t.length; n++) this[i].appendChild(t[n]);
					else this[i].appendChild(t);
					return this
				},
				prepend: function (t) {
					var i, n;
					for (i = 0; i < this.length; i++)
						if ("string" == typeof t) {
							var s = document.createElement("div");
							for (s.innerHTML = t, n = s.childNodes.length - 1; n >= 0; n--) this[i].insertBefore(s.childNodes[n], this[i].childNodes[0])
						} else if (t instanceof e)
						for (n = 0; n < t.length; n++) this[i].insertBefore(t[n], this[i].childNodes[0]);
					else this[i].insertBefore(t, this[i].childNodes[0]);
					return this
				},
				insertBefore: function (e) {
					for (var i = t(e), n = 0; n < this.length; n++)
						if (1 === i.length) i[0].parentNode.insertBefore(this[n], i[0]);
						else if (i.length > 1)
						for (var s = 0; s < i.length; s++) i[s].parentNode.insertBefore(this[n].cloneNode(!0), i[s])
				},
				insertAfter: function (e) {
					for (var i = t(e), n = 0; n < this.length; n++)
						if (1 === i.length) i[0].parentNode.insertBefore(this[n], i[0].nextSibling);
						else if (i.length > 1)
						for (var s = 0; s < i.length; s++) i[s].parentNode.insertBefore(this[n].cloneNode(!0), i[s].nextSibling)
				},
				next: function (i) {
					return new e(this.length > 0 ? i ? this[0].nextElementSibling && t(this[0].nextElementSibling).is(i) ? [this[0].nextElementSibling] : [] : this[0].nextElementSibling ? [this[0].nextElementSibling] : [] : [])
				},
				nextAll: function (i) {
					var n = [],
						s = this[0];
					if (!s) return new e([]);
					for (; s.nextElementSibling;) {
						var r = s.nextElementSibling;
						i ? t(r).is(i) && n.push(r) : n.push(r), s = r
					}
					return new e(n)
				},
				prev: function (i) {
					return new e(this.length > 0 ? i ? this[0].previousElementSibling && t(this[0].previousElementSibling).is(i) ? [this[0].previousElementSibling] : [] : this[0].previousElementSibling ? [this[0].previousElementSibling] : [] : [])
				},
				prevAll: function (i) {
					var n = [],
						s = this[0];
					if (!s) return new e([]);
					for (; s.previousElementSibling;) {
						var r = s.previousElementSibling;
						i ? t(r).is(i) && n.push(r) : n.push(r), s = r
					}
					return new e(n)
				},
				parent: function (e) {
					for (var i = [], n = 0; n < this.length; n++) e ? t(this[n].parentNode).is(e) && i.push(this[n].parentNode) : i.push(this[n].parentNode);
					return t(t.unique(i))
				},
				parents: function (e) {
					for (var i = [], n = 0; n < this.length; n++)
						for (var s = this[n].parentNode; s;) e ? t(s).is(e) && i.push(s) : i.push(s), s = s.parentNode;
					return t(t.unique(i))
				},
				find: function (t) {
					for (var i = [], n = 0; n < this.length; n++)
						for (var s = this[n].querySelectorAll(t), r = 0; r < s.length; r++) i.push(s[r]);
					return new e(i)
				},
				children: function (i) {
					for (var n = [], s = 0; s < this.length; s++)
						for (var r = this[s].childNodes, a = 0; a < r.length; a++) i ? 1 === r[a].nodeType && t(r[a]).is(i) && n.push(r[a]) : 1 === r[a].nodeType && n.push(r[a]);
					return new e(t.unique(n))
				},
				remove: function () {
					for (var e = 0; e < this.length; e++) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
					return this
				},
				add: function () {
					var e, i, n = this;
					for (e = 0; e < arguments.length; e++) {
						var s = t(arguments[e]);
						for (i = 0; i < s.length; i++) n[n.length] = s[i], n.length++
					}
					return n
				}
			}, t.fn = e.prototype, t.unique = function (e) {
				for (var t = [], i = 0; i < e.length; i++) - 1 === t.indexOf(e[i]) && t.push(e[i]);
				return t
			}, t
		}(), r = ["jQuery", "Zepto", "Dom7"], a = 0; a < r.length; a++) window[r[a]] && e(window[r[a]]);
	(i = void 0 === s ? window.Dom7 || window.Zepto || window.jQuery : s) && ("transitionEnd" in i.fn || (i.fn.transitionEnd = function (e) {
		function t(r) {
			if (r.target === this)
				for (e.call(this, r), i = 0; i < n.length; i++) s.off(n[i], t)
		}
		var i, n = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
			s = this;
		if (e)
			for (i = 0; i < n.length; i++) s.on(n[i], t);
		return this
	}), "transform" in i.fn || (i.fn.transform = function (e) {
		for (var t = 0; t < this.length; t++) {
			var i = this[t].style;
			i.webkitTransform = i.MsTransform = i.msTransform = i.MozTransform = i.OTransform = i.transform = e
		}
		return this
	}), "transition" in i.fn || (i.fn.transition = function (e) {
		"string" != typeof e && (e += "ms");
		for (var t = 0; t < this.length; t++) {
			var i = this[t].style;
			i.webkitTransitionDuration = i.MsTransitionDuration = i.msTransitionDuration = i.MozTransitionDuration = i.OTransitionDuration = i.transitionDuration = e
		}
		return this
	})), window.Swiper = n
}(), "undefined" != typeof module ? module.exports = window.Swiper : "function" == typeof define && define.amd && define([], function () {
		"use strict";
		return window.Swiper
	}), eval(function (e, t, i, n, s, r) {
		if (s = function (e) {
				return (e < 62 ? "" : s(parseInt(e / 62))) + ((e %= 62) > 35 ? String.fromCharCode(e + 29) : e.toString(36))
			}, !"".replace(/^/, String)) {
			for (; i--;) r[s(i)] = n[i] || s(i);
			n = [function (e) {
				return r[e]
			}], s = function () {
				return "\\w+"
			}, i = 1
		}
		for (; i--;) n[i] && (e = e.replace(new RegExp("\\b" + s(i) + "\\b", "g"), n[i]));
		return e
	}("D H={38:[],5O:C(){7(14.1E){14.7r('<15 5G=\"5F/78\">.1W-5C-5B {4H: 2u !6R;}</15>')};V.12(1j,'5s',V.5r)},4B:C(h){D j=14,M=1j,2d=6z;7(!j.1E||!j.5i)E;7(2O(h)=='3h')h=14.1E(h);7(h==13||2d.3j.23('6e')!=-1||((2d.3j.23('6c')!=-1||2d.3j.23('68')!=-1)&&!(2O(53)!='7W'&&53.84))||2d.7z=='7x'||(2d.7q.23('7p')!=-1&&2d.3j.23('7f')!=-1)){7(h!=13)2l(h,'1W-7c','1W-5C-5B');7(1j.4V)1j.4V(h);E};7(h.1c){h.1c.1O();E};7(H.5T(h))E;7(!h.1R||h.1R==''){D k='6L',c=1;1P(14.1E(k+c)!=13){c++};h.1R=k+c}h.2C={};h.1c={};D l=h.1R,4=h.2C,L=h.1c;4.2b={6x:['-1s',0],6s:[0,'-1s'],6o:['1s',0],6a:[0,'1s'],82:[0,'-1p'],7R:[0,'1p'],6T:[0,'-5X'],6N:[0,'+5X']};4.47=['-2s','2s'];4.5J={5m:'-1s',5k:'1s',3I:'-1p',55:'1p'};4.44=[1,1];4.1I=[[B,B],[B,B]];D m=X('7h',B,F),J=X('7b',B,F),I=X('76',B,F),1v=X('73',B,F);D o=X('6U',B,F),1G=X('6S',B,F),3K=B;1v.G.1M='2N 5V 7I';1v.1Z();h.15.4H='2u';1G.G.6Z='6I';1G.G.2i='50';1G.G.19='50';1G.G.1K='3P';1G.G.28='-6E';1G.1Z();D p=h.18,51=h.1D;2o(h,1v,'1C',['1M-1i-19','1M-2e-19','1M-1h-19','1M-2c-19']);D q=h.18,5Q=h.1D,3T=51-5Q,4s=p-q;D s=(h.2a)?h.2a:0,4Z=(h.2n)?h.2n:0;D t=14.3R.1l,3X=/#([^#.]*)$/;D u='|6i|6w|5e|5g|';D w='|5e|5g|';4.R=[];4.2h=[];4.6h=4.U=[];4.6A=4.1V=[];4.1x=[B,B];4.2L=B;4.2M=B;4.4l=[0,0];4.1d=[];4.1z=[0,0];4.1A=[];4.4t=[];4.1b=[];4.2k=[B,B];4.2t=[0,0];4.W=[0,0];4.2f=[B,B];4.3o=0;4.3l=0;1P(h.59){m.Y(h.59)};m.Y(o);h.Y(J);h.Y(1v);D x=P(h,'1K');7(x!='3P'&&x!='5b'){h.15.1K=x='3i'};7(x=='5b')h.15.1K='3P';h.15.7l=\"37\";D y=P(h,'5F-7Q');h.15.5S='1i';J.G.19='5P';J.G.2i='5P';J.G.1h='1C';J.G.1i='1C';2o(h,1v,'1C',['Q-1i','Q-1h','Q-2e','Q-2c']);D z=h.1D,5I=h.18,4I;4I=J.18;J.G.7e='7d 5V 6y';7(J.18>4I)3K=F;J.G.6u='1C';2o(1v,h,B,['Q-1i','Q-1h','Q-2e','Q-2c']);1N(J);1N(h);4.1b[0]=J.1U-h.1U;4.1b[2]=J.1S-h.1S;h.15.56=P(h,'Q-2c');h.15.52=P(h,'Q-2e');1N(J);1N(h);4.1b[1]=J.1U-h.1U;4.1b[3]=J.1S-h.1S;h.15.56=P(1v,'Q-1h');h.15.52=P(1v,'Q-1i');D A=4.1b[2]+4.1b[3],4u=4.1b[0]+4.1b[1];h.15.1K=x;J.15.5S=y;2o(h,J,B,['Q-1i','Q-2e','Q-1h','Q-2c']);I.G.19=h.1D+'O';I.G.2i=h.18+'O';J.G.19=z+'O';J.G.2i=5I+'O';I.G.1K='3P';I.G.1h='1C';I.G.1i='1C';4.3s=I.G.28;J.Y(m);h.Y(I);I.Y(1G);m.G.1K='3i';J.G.1K='3i';m.G.1h='0';m.G.19='4o%';J.G.4H='2u';J.G.1i='-'+4.1b[2]+'O';J.G.1h='-'+4.1b[0]+'O';4.3S=1G.18;4.3v=C(){D a=m.6F,3y=6B=0,3A=h.1D;24(D i=0;i<a.35;i++){7(a[i].1D){3y=K.1m(a[i].1D,3y)}};4.2f[0]=(3A<=4.1z[0])?F:B;4.U[0]=((4.1d[1]&&!4.1A[1]&&!4.2f[0])||4.2h[1])?3A-4.1z[0]:3A;4.1V[0]=3y+A;E 4.1V[0]};4.3F=C(){D a=h.18;4.2f[1]=(a<=4.1z[1])?F:B;4.U[1]=((4.1d[0]&&!4.1A[0]&&!4.2f[1])||4.2h[0])?a-4.1z[1]:a;4.1V[1]=m.18+4u-2;E 4.1V[1]};4.58=C(){7(H.7E)E;m.G.32='37';m.G.32='7O'};4.43=C(){J.1f[0]((3K)?(4.U[0]-A-3T):4.U[0])};4.3Z=C(){J.1f[1]((3K)?(4.U[1]-4u-4s):4.U[1])};4.30=C(){4.3v();4.3F();I.2z=3O 3W();D a=I.2z;30(a,'7Y',1);a.2B=[1k(P(a.8,'Q-1h')),1k(P(a.8,'Q-2c'))];a.8.G.Q='1C';a.8.T=0;a.8.4n=F;a.8.2Q=1;m.54=a.8;3U(a,0);4.1z[0]=(4.2k[1])?0:K.1o(a.1a.1D,4.U[0]);4.43();I.2E=3O 3W();D b=I.2E;30(b,'6f',0);b.2B=[1k(P(b.8,'Q-1i')),1k(P(b.8,'Q-2e'))];b.8.G.Q='1C';b.8.T=0;b.8.4n=B;b.8.2Q=0;m.6g=b.8;7(M.6p)b.8.G.1K='3i';3U(b,0);4.1z[1]=(4.2k[0])?0:K.1o(b.1a.18,4.U[1]);4.3Z();I.G.2i=h.18+'O';b.31=X('7o');I.Y(b.31);b.31.3V=C(){b.8.3Q=F;4.1J=b.8;b.8.3N=F;b.8.2v=B;I.2z.8.2v=B;H.12(j,'3Y',1L);H.12(j,'2S',3M);H.12(j,'3L',2Z);E B}};4.1J=13;4.30();V.41(o,I);7(!V.1B(h,'5W',2r)||!V.1B(h,'4U',2r)){h.6v=2r};V.1B(h,'5W',2r);V.1B(h,'4U',2r);V.1B(m,'4W',42);V.1B(I,'4W',42);h.6M('6O','-1');V.12(h,'6Q',C(e){7(!e){D e=M.1y};D a=e.6V,20=(e.Z)?e.Z:(e.1w)?e.1w:B;7(20&&20.2p&&u.23('|'+20.2p+'|')>-1)E;L.2m();4.3J=a;7(4.2b['21'+a]){L.1r(4.2b['21'+a][0],4.2b['21'+a][1],F);4.3o++;7(e.1Q)e.1Q();E B}16{4.3J=\"69\"}});V.12(h,'6b',C(e){7(!e){D e=M.1y};D a=4.3J,20=(e.Z)?e.Z:(e.1w)?e.1w:B;7(20&&20.2p&&u.23('|'+20.2p+'|')>-1)E;7(4.2b['21'+a]){4.3l++;7(4.3o>=4.3l)E;L.1r(4.2b['21'+a][0],4.2b['21'+a][1],F);7(e.1Q)e.1Q();E B}});V.12(h,'6d',C(){4.3J=B;4.3o=4.3l=0});V.12(j,'3L',2F);V.12(h,'5A',46);C 46(e){7(!e)e=M.1y;D a=(e.Z)?e.Z:(e.1w)?e.1w:B;7(!a||(a.1t&&2O(a.1t)=='3h'&&a.1t.11(3H('\\\\6D\\\\b'))))E;4.5N=e.2w;4.5U=e.2q;48();1N(h);2F();H.12(j,'2S',49);4.2X=[h.1S+10,h.1S+4.U[0]-10,h.1U+10,h.1U+4.U[1]-10]};C 49(e){7(!e)e=M.1y;D a=e.2w,4a=e.2q,4b=a+4.4X,4c=4a+4.4Y;4.4d=(4b<4.2X[0]||4b>4.2X[1])?1:0;4.4e=(4c<4.2X[2]||4c>4.2X[3])?1:0;4.4f=a-4.5N;4.4g=4a-4.5U;4.3G=(4.4f>40)?1:(4.4f<-40)?-1:0;4.3E=(4.4g>40)?1:(4.4g<-40)?-1:0;7((4.3G!=0||4.3E!=0)&&!4.2g)4.2g=M.2U(C(){7(4.3G==0&&4.3E==0){M.2x(4.2g);4.2g=B;E};48();7(4.4d==1||4.4e==1)L.1r((4.3G*4.4d)+'s',(4.3E*4.4e)+'s',F)},45)};C 2F(){H.1T(j,'2S',49);7(4.2g)M.2x(4.2g);4.2g=B;7(4.4h)M.5l(4.4h);7(4.4i)M.2x(4.4i)};C 3D(a){7(4.2M){1j.2x(4.2M);4.2M=B}7(!a){I.G.28=4.3s;4.W=[0,0];4.3C=B}};C 48(){4.4X=(M.5x)?M.5x:(j.2y&&j.2y.2n)?j.2y.2n:0;4.4Y=(M.5y)?M.5y:(j.2y&&j.2y.2a)?j.2y.2a:0};h.6r=L.1O=C(a){7(I.1e[1]()===0||I.1e[0]()===0)E;D b=4.1d[0],5z=4.1d[1],4j=I.2z,2I=I.2E,3B,3z,33=[];I.G.19=h.1D-3T+'O';I.G.2i=h.18-4s+'O';33[0]=4.U[0];33[1]=4.U[1];4.1d[0]=4.3v()>4.U[0];4.1d[1]=4.3F()>4.U[1];D c=(b!=4.1d[0]||5z!=4.1d[1]||33[0]!=4.U[0]||33[1]!=4.U[1])?F:B;4j.1a.4k(4.1d[1]);2I.1a.4k(4.1d[0]);3B=(4.1d[1]||4.2h[1]);3z=(4.1d[0]||4.2h[0]);4.3v();4.3F();4.3Z();4.43();7(!4.1d[0]||!4.1d[1]||4.1A[0]||4.1A[1])2I.31.1Z();16 2I.31.3x();7(3B)3w(4j,(3z&&!4.1A[0])?4.1z[1]:0);16 m.G.1h='-2N';7(3z)3w(2I,(3B&&!4.1A[1])?4.1z[0]:0);16 m.G.1i='-2N';7(c&&!a)L.1O(F);4.1x[0]=4.1x[1]=B};h.6K=L.1r=C(a,b,c,d){D e;7((a||a===0)&&4.R[0]){a=4m(a,0);e=I.2E.8;e.17=(c)?K.1o(K.1m(e.1q,e.17-a),0):-a;e.3u()}7((b||b===0)&&4.R[1]){b=4m(b,1);e=I.2z.8;e.17=(c)?K.1o(K.1m(e.1q,e.17-b),0):-b;e.3u()}7(!c)4.1x[0]=4.1x[1]=B;7(h.3t&&!d)h.3t();E 4.1I};L.4p=C(a,b){E L.1r(a,b,F)};L.36=C(a){7(a==13||!62(a))E;D b=4T(a);L.1r(b[0]+4.1b[2],b[1]+4.1b[0],B);L.1r(0,0,F)};2o(1v,h,'1C',['1M-1i-19','1M-2e-19','1M-1h-19','1M-2c-19']);V.41(1v,I);h.2a=0;h.2n=0;V.38[V.38.35]=h;2l(h,'71',B);m.G.Q='2N';L.1O();L.1r(4Z,s,F);7(t.11(3X)){L.36(j.1E(t.11(3X)[1]))};4.72=M.2U(C(){D n=1G.18;7(n!=4.3S){L.1O();4.3S=n}},74);C 4m(v,i){D a=v.77();v=7a(a);E 1k((a.11(/p$/))?v*4.U[i]*0.9:(a.11(/s$/))?v*4.U[i]*0.1:v)};C P(a,b){E H.P(a,b)};C 2o(a,b,c,d){D e=3O 3W();24(D i=0;i<d.35;i++){e[i]=H.4q(d[i]);b.15[e[i]]=P(a,d[i],e[i]);7(c)a.15[e[i]]=c}};C X(b,c,d,e,f){D g=(e)?e:j.5i('4r');7(!e){g.1R=l+'21'+b;g.1t=(d)?b:b+' 7m'};g.1e=[C(){E g.1D},C(){E g.18}];g.1f=(f)?[1L,1L]:[C(a){g.G.19=K.1m(a,1)+'O'},C(a){g.G.2i=K.1m(a,1)+'O'}];g.65=[C(){E P(g,'1i')},C(){E P(g,'1h')}];g.1g=(f)?[1L,1L]:[C(a){g.G.1i=a},C(a){g.G.1h=a}];g.1Z=C(){g.G.2Y='2u'};g.3x=C(a){g.G.2Y=(a)?P(a,'2Y'):'7s'};g.G=g.15;7(c)g.2C=c;E g};C 30(a,b,c){D d=14.1E(l+'-1W-'+b);D e=(d!=13)?F:B;a.2W=X(b+'7y',{25:'5m'});a.3r=X(b+'7C',{25:'5k'});a.2T=X(b+'7G');a.3q=X(b+'7J');a.3p=X(b+'7P');a.3n=X(b+'7T');a.2R=X(b+'7X',{25:'3I'});a.2P=X(b+'81',{25:'55'});7(e){a.1a=X(B,{25:'3I'},B,d,F);4.2k[c]=F;a.8=X(B,B,B,H.4v(d,'4r','1W-83')[0])}16{a.1a=X(b+'66',{25:'3I'});a.8=X(b+'67');I.Y(a.1a);a.1a.Y(a.8);a.1a.Y(a.2W);a.1a.Y(a.3r);a.1a.Y(a.2T);a.8.Y(a.3q);a.8.Y(a.3n);a.8.Y(a.3p)};a.1a.Y(a.2P);a.1a.Y(a.2R)};C 3U(c,d){D f=c.1a,8=c.8,i=8.2Q;8.17=0;8.29=c.2B[0];c.4w=c.2B[0]+c.2B[1];8.3m=f;8.J=J;8.57=m;8.1F=0;3w(c,d,F);8.4x=C(a){7(!a)8.T=1k((8.17*8.2j)/8.1q);8.T=(K.1o(K.1m(8.T,0),8.2j));8.1g[i](8.T+8.29+'O');7(!8.1F)8.1F=8.17-1k((8.T/8.3k)*8.1q);8.1F=(8.T==0)?0:(8.T==8.2j)?0:(!8.1F)?0:8.1F;7(a){8.17=1k((8.T/8.3k)*8.1q);m.1g[i](8.17+8.1F-1+'O');4.1I[i]=[-8.17-8.1F,-8.1q]};5a((i==0)?I.2E:I.2z,i)};8.3u=C(){8.T=1k((8.17*8.3k)/8.1q);8.T=(K.1o(K.1m(8.T,0),8.2j));m.1g[i](8.17-1+'O');4.1I[i]=[-8.17,-8.1q];8.1F=B;8.4x(B)};4.34=P(8,'z-5c');8.G.28=(4.34=='6j'||4.34=='0'||4.34=='6k')?2:4.34;J.G.28=P(8,'z-5c');8.3V=C(){8.3N=F;4.1J=8;8.3Q=B;8.2v=B;H.12(j,'3Y',1L);H.12(j,'2S',3M);H.12(j,'3L',2Z);E B};8.6l=2F;f.3V=f.6m=C(e){7(!e){D e=M.1y};D a=(e.Z)?e.Z:(e.1w)?e.1w:B;7(!a)E;D b=[0,0];L.2m();1N(8);b[8.2Q]=(a.2C&&a.2C.25)?4.5J[a.2C.25]:0;7(!4.3C)L.1r(b[0],b[1],F);16 4.3C=B;7(e.5G!='6n'){2F();4.4h=M.5d(C(){4.4i=M.2U(C(){L.1r(b[0],b[1],F)},80)},6q)};E B};f.4k=C(r){7(r){f.3x(h);4.1A[i]=(P(f,'2Y')=='2u'||4.2k[i]||4.2f[1-i])?F:B;7(4.2f[1-i])f.1Z();7(!4.1A[i]||4.2k[i])8.3x(h);16 7(!4.2k[i])8.1Z();4.R[i]=F;2l(f,'','5f')}16{f.1Z();8.1Z();4.2h[i]=(P(f,'2Y')!='2u')?F:B;4.R[i]=B;8.T=0;m.1g[i]('-2N');4.1I[i]=[B,B];2l(f,'5f','')};J.1g[1-i]((4.4t[i]&&(r||4.2h[i])&&!4.1A[i])?4.1z[1-i]-4.1b[i*2]+'O':'-'+4.1b[i*2]+'O')};f.6t=1L};C 3w(a,b,c){D d=a.1a,8=a.8,i=8.2Q;d.1f[i](I.1e[i]()-b);D e=d.1e[1-i](),1X=d.1e[i]();d.1g[1-i](I.1e[1-i]()-e+'O');4.4t[i]=(1k(d.65[1-i]())===0)?F:B;a.4y=K.1m(1k((1X-a.4w)*0.75),5);8.5h=K.1o(K.1m(K.1o(1k(4.U[i]/K.1m(4.1V[i],1)*1X),a.4y),45),a.4y);8.1f[i](8.5h);D f=8.1e[i](),2J=a.3r.1e[i](),3g=a.3p.1e[i]();4.4l[i]=f;8.2j=1X-f-a.4w;8.T=K.1o(K.1m(0,8.T),8.2j);8.1g[i](8.T+8.29+'O');8.1q=J.1e[i]()-4.1V[i];8.1q=K.1o(8.1q,-1);8.17=K.1m(8.17,8.1q);8.3k=8.2j;a.2W.1f[i](1X-2J);a.3q.1f[i](f-3g);D g=a.3q.1e[i]();a.3p.1g[i](f-3g+'O');a.3r.1g[i](1X-2J+'O');a.3n.1f[i](f-g-3g);a.3n.1g[i](g+'O');2H=K.1o(8.29,a.2W.1e[i]());4z=a.2W.1e[i]();a.2T.1g[i](4z+'O');a.2T.1f[i](1X-4z-2J);a.2T.1f[1-i](e);a.2R.1g[i](2H+'O');a.2P.1g[i](2H+'O');a.2R.1f[1-i](e);a.2P.1f[1-i](e);a.2P.1f[i](1X-2H-(K.1o(a.2B[1],2J)));8.5j=8.29-2H;7(!c)8.3u();4.58()};C 5a(a,i){a.2R.1f[i](a.8.5j+a.8.T+1k(4.4l[i]/2))};L.2m=C(){J.2a=0;J.2n=0;h.2a=0;h.2n=0};V.12(M,'5s',C(){7(h.1c)L.1O()});V.12(M,'6C',C(){7(h.4A)M.5l(h.4A);h.4A=M.5d(C(){7(h.1c)L.1O()},80)});C 1L(){E B};C 3M(e){7(!e){D e=M.1y};D a=4.1J,N,4C,6G,6H;7(a==13)E;7(!H.5n&&!e.6J)2Z();4C=(a.3Q)?2:1;24(D i=0;i<4C;i++){N=(i==1)?a.57.54:a;7(a.3N){7(!N.2v){L.2m();1N(N);1N(N.3m);N.5o=e.2q-N.1U;N.5p=e.2w-N.1S;N.5q=N.T;N.2v=F};N.T=(N.4n)?e.2q-N.5o-N.3m.1U-N.29:e.2w-N.5p-N.3m.1S-N.29;7(a.3Q)N.T=N.T+(N.T-N.5q);N.4x(F);7(h.3t)h.3t()}16 N.2v=B}};C 2Z(){7(4.1J!=13){4.1J.3N=B;4.1J.17+=4.1J.1F}4.1J=13;H.1T(j,'3Y',1L);H.1T(j,'2S',3M);H.1T(j,'3L',2Z)};C 42(e){7(!e)e=M.1y;7(V==I)I.G.28=4.3s;7(e.2A.35!=1||(!4.R[0]&&!4.R[1])){2V(e);E};D a='',6P=(e.Z&&(e.Z.1l||(e.Z.5t==3&&e.Z.1n.1l)))?F:B;4.2t=[e.2A[0].2w,e.2A[0].2q];3D();H.1B(h,'5u',4D);H.1B(h,'5v',2V);4.5w=(e.Z&&e.Z.1R&&e.Z.1R.11(/21[6W]6X[6Y]e?/))?F:B};C 4D(e){7(!e)e=M.1y;7(e.2A.35!=1){2V(e);E}H.1T(h,'5A',46);D a=[e.2A[0].2w,e.2A[0].2q];4.2L=F;4.W=[4.2t[0]-a[0],4.2t[1]-a[1]];7(4.5w){4.W[0]*=-(4.1V[0]/4.U[0]);4.W[1]*=-(4.1V[1]/4.U[1])}16{4.W[0]*=4.44[0];4.W[1]*=4.44[1]};L.4p(4.W[0],4.W[1]);4.3C=F;4.2t[0]=a[0];4.2t[1]=a[1];24(D i=0;i<2;i++){7(4.W[i]!==0&&4.R[i]&&(4.W[1-i]==0||!4.R[1-i])){7((4.W[i]>0&&4.1I[i][1]==4.1I[i][0])||(4.W[i]<0&&4.1I[i][0]==0))4.2L=B};7(!4.R[i]&&4.W[1-i]!==0&&K.4E(4.W[i]/4.W[1-i])>1.1)4.2L=B};7(4.2L){e.1Q();I.G.28='70'}16{I.G.28=4.3s}};C 2V(e){7(!e)e=M.1y;H.1T(h,'5u',4D);H.1T(h,'5v',2V);7((4.R[0]&&K.4E(4.W[0])>6)||(4.R[1]&&K.4E(4.W[1])>6)){D a=0;3D(F);4.2M=1j.2U(C(){L.4p(4F(4.W[0],0,10,a,0.3),4F(4.W[1],0,10,a,0.3));a++;7(a>10)3D()},4o)}};C 2r(e){7(!e)e=M.1y;7(!V.1c)E;D a=(e.Z)?e.Z:(e.1w)?e.1w:V;7(a.2p&&w.23('|'+a.2p+'|')>-1)E;D b,4G,1Y=B,1H=0,22,1u=4.1I;L.2m();7(a.1R&&a.1R.11(/79/))1Y=F;7(e.5D)1H=-e.5D;7(e.5E)1H=e.5E;1H=(1H<0)?-1:+1;22=(1H<0)?0:1;4.1x[1-22]=B;7((1u[1][0]!=0)&&(1u[1][0]!=1u[1][1]))4.1x[0]=4.1x[1]=B;7((4.1x[22]&&!1Y)||(!4.R[0]&&!4.R[1]))E;7(4.R[1]&&!1Y)1u=L.1r(B,4.47[22],F);b=!4.R[1]||1Y||(4.R[1]&&((1u[1][0]==1u[1][1]&&1H>0)||(1u[1][0]==0&&1H<0)));7(4.R[0]&&(!4.R[1]||1Y))1u=L.1r(4.47[22],B,F);4G=!4.R[0]||(4.R[0]&&4.R[1]&&b&&!1Y)||(4.R[0]&&((1u[0][0]==1u[0][1]&&1H>0)||(1u[0][0]==0&&1H<0)));7(b&&4G&&!1Y)4.1x[22]=F;16 4.1x[22]=B;7(e.1Q)e.1Q();E B};C 62(a){1P(a.1n){a=a.1n;7(a==h)E F}E B};C 1N(a){D b=a,26=27=0;7(b.3f){1P(b){26+=b.3e;27+=b.3d;b=b.3f}}16 7(b.3e||b.3d){26+=b.3e;27+=b.3d}16 7(b.x){26+=b.x;27+=b.y};a.1S=26;a.1U=27};C 4T(a){D b=a;26=27=0;1P(!b.18&&b.1n&&b!=m&&P(b,'32')=='7g'){b=b.1n};7(b.3f){1P(b!=m){26+=b.3e;27+=b.3d;b=b.3f}};E[26,27]};C 2l(a,b,c){H.2l(a,b,c)};C 4F(a,b,c,d,e){c=K.1m(c,1);D f=b-a,3c=a+(K.7i(((1/c)*d),e)*f);E(3c>0)?K.7j(3c):K.7k(3c)}},5r:C(){7(H.3b)1j.2x(H.3b);7(!H.4J)H.12(14,'7n',H.5K);H.4K();H.4J=F;7(1j.5L)1j.5L()},5K:C(e){7(!e)e=M.1y;D a=e.Z||e.1w;7(a.5t==3)a=a.1n;7(!a.1l)E;D b=/#([^#.]*)$/,2G=/(.*)#.*$/,5M=/(^|\\s)1W-7t-7u-7v($|\\s)/,7w,4L,2D=14.3R.1l;7(2D.11(2G))2D=2D.11(2G)[1];4L=(a.1t)?a.1t:'';7(a.1l.11(b)&&((a.1l.11(2G)&&2D===a.1l.11(2G)[1])||4L.11(5M))){D c=14.1E(a.1l.11(b)[1]),3a=B;7(c==13)c=(c=14.7A(a.1l.11(b)[1])[0])?c:13;7(c!=13){D d=c;1P(d.1n){d=d.1n;7(d.1c){d.1c.36(c);3a=d}};7(3a){7(e.1Q)e.1Q();14.3R.1l=2D+'#'+a.1l.11(b)[1];3a.1c.2m();E B}}}},2l:C(a,b,c){7(!a.1t)a.1t='';D d=a.1t;7(b&&!d.11(3H('(^|\\\\s)'+b+'($|\\\\s)')))d=d.4M(/(\\S$)/,'$1 ')+b;7(c)d=d.4M(3H('((^|\\\\s)+'+c+')+($|\\\\s)','g'),'$2').4M(/\\s$/,'');a.1t=d},4K:C(a){H.4J=F;D b=H.4v(14.5R('7D')[0],'4r',(a)?a:'1W');24(D i=0,39;39=b[i];i++)7(!39.1c)H.4B(39)},7F:C(a,b){7(2O(a)=='3h')a=14.1E(a);7(a==13)E B;D c=a;1P(c.1n){c=c.1n;7(c.1c){7(b){14.3R.1l='#'+b};c.1c.36(a);c.1c.2m();E F}};E B},1O:C(){24(D i=0,4N;4N=H.38[i];i++){4N.1c.1O()}},4q:C(a){D a=a.7H('-'),4O=a[0],i;24(i=1;4P=a[i];i++){4O+=4P.7K(0).7L()+4P.7M(1)};E 4O},4v:C(a,b,c){7(2O(a)=='3h')a=14.1E(a);7(a==13)E B;D d=3O 3H('(^|\\\\s)'+c+'($|\\\\s)'),7N,4Q=[],4R=0;D e=a.5R(b);24(D i=0,2K;2K=e[i];i++){7(2K.1t&&2K.1t.11(d)){4Q[4R]=2K;4R++}}E 4Q},5T:C(a){7(a==13)E F;D b;1P(a.1n){b=H.P(a,'32');7(b=='37')E F;a=a.1n};E B},P:C(a,b){7(1j.5Y)E 1j.5Y(a,13).7S(b);7(a.5Z)E a.5Z[H.4q(b)];E B},3b:1j.2U(C(){D a=14.1E('1W-7U');7(a!=13){H.4K();1j.2x(H.3b)}},4o),41:C(a,b){a.1n.7V(a);a.15.32='37';b.Y(a)},12:C(a,b,c){7(!H.1B(a,b,c)&&a.60){a.60('61'+b,c)}},1B:C(a,b,c){7(a.4S){a.4S(b,c,B);H.5n=F;1j.4S('7Z',C(){H.1T(a,b,c)},B);E F}16 E B},1T:C(a,b,c){7(!H.63(a,b,c)&&a.64)a.64('61'+b,c)},63:C(a,b,c){7(a.5H){a.5H(b,c,B);E F}16 E B}};C 7B(a){H.4B(a)};H.5O();", 0, 501, "||||sC|||if|sBr|||||||||||||||||||||||||||||false|function|var|return|true|sY|fleXenv|tDv|mDv|Math|sfU|wD|movBr|px|getStyle|padding|scroller||curPos|cntRSize|this|moveDelta|createDiv|appendChild|target||match|addTrggr|null|document|style|else|trgtScrll|offsetHeight|width|sDv|paddings|fleXcroll|reqS|getSize|setSize|setPos|top|left|window|parseInt|href|max|parentNode|min||mxScroll|setScrollPos||className|scrollState|pDv|srcElement|edge|event|barSpace|forcedHide|addChckTrggr|0px|offsetWidth|getElementById|targetSkew|fDv|delta|scrollPosition|goScroll|position|retFalse|border|findPos|updateScrollBars|while|preventDefault|id|xPos|remTrggr|yPos|cntSize|flexcroll|sdvi|hoverH|fHide|cTrgt|_|iNDx|indexOf|for|action|curleft|curtop|zIndex|minPos|scrollTop|keyAct|bottom|nV|right|tooNarrow|tSelectFunc|forcedBar|height|maxPos|externaL|classChange|mDPosFix|scrollLeft|copyStyles|nodeName|clientY|mWheelProc||touchPos|hidden|moved|clientX|clearInterval|documentElement|vrt|targetTouches|barPadding|fleXdata|urlBase|hrz|intClear|urlExt|fillPos|hBr|ssdvi|pusher|touchPrevent|touchFlick|1px|typeof|sFRb|indx|sFFb|mousemove|sMDv|setInterval|handleTouchEnd|sFDv|mTBox|visibility|mMouseUp|createScrollBars|jBox|display|cPSize|barZ|length|scrollToElement|none|fleXlist|tgDiv|eScroll|catchFastInit|stepp|offsetTop|offsetLeft|offsetParent|ssbri|string|relative|userAgent|sRange|keyAproc|ofstParent|sMBr|keyProc|sSBr|sFBr|sSDv|tDivZ|onfleXcroll|realScrollPos|getContentWidth|updateBarSize|fShow|maxCWidth|hUpReq|DsizE|vUpReq|touchMoved|flickClear|sYdir|getContentHeight|sXdir|RegExp|pageBack|pkeY|stdMode|mouseup|mMoveBar|clicked|new|absolute|scrollBoth|location|zTHeight|brdWidthLoss|prepareScroll|onmousedown|Array|uReg|selectstart|setHeight||putAway|handleTouch|setWidth|touchMul||handleTextSelect|wheelAct|pageScrolled|tSelectMouse|mY|mdX|mdY|mOnXEdge|mOnYEdge|xAw|yAw|barClickRetard|barClickScroll|vBr|setVisibility|barSize|calcCScrollVal|vertical|100|scrollContent|camelConv|div|brdHeightLoss|forcedPos|padHeightComp|getByClassName|padLoss|doBarPos|baseProp|midPos|refreshTimeout|fleXcrollMain|maxx|handleTouchMove|abs|easeInOut|hEdge|overflow|mHeight|initialized|initByClass|claSS|replace|fleXdiv|reT|parT|retArray|key|addEventListener|findRCpos|DOMMouseScroll|onfleXcrollFail|touchstart|xScrld|yScrld|oScrollX|1em|brdWidth|paddingLeft|HTMLElement|vBar|pageFwd|paddingTop|scrlTrgt|fixIEDispBug|firstChild|setFiller|fixed|index|setTimeout|SELECT|flexinactive|OPTION|aSize|createElement|fillComp|stepFwd|clearTimeout|stepBack|w3events|pointerOffsetY|pointerOffsetX|inCurPos|globalInit|load|nodeType|touchmove|touchend|touchBar|pageXOffset|pageYOffset|reqV|mousedown|default|hide|wheelDelta|detail|text|type|removeEventListener|postHeight|actionVal|globalClickHandle|onfleXcrollRun|regExer|inMposX|fleXcrollInit|100px|intlWidth|getElementsByTagName|textAlign|checkHidden|inMposY|solid|mousewheel|100p|getComputedStyle|currentStyle|attachEvent|on|isddvChild|remChckTrggr|detachEvent|getPos|base|bar|Safari|nonval|_40|keypress|AppleWebKit|keyup|OmniWeb|hscroller|hBar|containerSize|TEXTAREA|auto|normal|onmouseover|ondblclick|dblclick|_39|opera|425|scrollUpdate|_38|onmouseclick|borderBottomWidth|onmousewheel|INPUT|_37|black|navigator|contentSize|compPad|resize|bscrollgeneric|999|childNodes|xScroll|yScroll|12px|button|contentScroll|flex__|setAttribute|_35|tabIndex|touchLink|keydown|important|zoomdetectdiv|_36|domfixdiv|keyCode|vh|scrollerba|rs|fontSize|9999|flexcrollactive|sizeChangeDetect|copyholder|2500||scrollwrapper|toString|css|_hscroller|parseFloat|mcontentwrapper|failed|2px|borderBottom|MSIE|inline|contentwrapper|pow|floor|ceil|outline|scrollgeneric|click|scrollerjogbox|Mac|platform|write|visible|in|page|link|matcH|KDE|basebeg|vendor|getElementsByName|CSBfleXcroll|baseend|body|ieDisableFix|scrollTo|basemid|split|blue|barbeg|charAt|toUpperCase|substr|clsnm|block|barend|align|_34|getPropertyValue|barmid|init|removeChild|undefined|fill|vscroller|unload||rest|_33|scrollbar|prototype".split("|"), 0, {})),
	function (e, t, i, n) {
		var s = i("html"),
			r = i(e),
			a = i(t),
			o = i.fancybox = function () {
				o.open.apply(this, arguments)
			},
			l = navigator.userAgent.match(/msie/i),
			c = null,
			d = t.createTouch !== n,
			h = function (e) {
				return e && e.hasOwnProperty && e instanceof i
			},
			p = function (e) {
				return e && "string" === i.type(e)
			},
			u = function (e) {
				return p(e) && 0 < e.indexOf("%")
			},
			f = function (e, t) {
				var i = parseInt(e, 10) || 0;
				return t && u(e) && (i *= o.getViewport()[t] / 100), Math.ceil(i)
			},
			m = function (e, t) {
				return f(e, t) + "px"
			};
		i.extend(o, {
			version: "2.1.5",
			defaults: {
				padding: 15,
				margin: 20,
				width: 800,
				height: 600,
				minWidth: 100,
				minHeight: 100,
				maxWidth: 9999,
				maxHeight: 9999,
				pixelRatio: 1,
				autoSize: !0,
				autoHeight: !1,
				autoWidth: !1,
				autoResize: !0,
				autoCenter: !d,
				fitToView: !0,
				aspectRatio: !1,
				topRatio: .5,
				leftRatio: .5,
				scrolling: "auto",
				wrapCSS: "",
				arrows: !0,
				closeBtn: !0,
				closeClick: !1,
				nextClick: !1,
				mouseWheel: !0,
				autoPlay: !1,
				playSpeed: 3e3,
				preload: 3,
				modal: !1,
				loop: !0,
				ajax: {
					dataType: "html",
					headers: {
						"X-fancyBox": !0
					}
				},
				iframe: {
					scrolling: "auto",
					preload: !0
				},
				swf: {
					wmode: "transparent",
					allowfullscreen: "true",
					allowscriptaccess: "always"
				},
				keys: {
					next: {
						13: "left",
						34: "up",
						39: "left",
						40: "up"
					},
					prev: {
						8: "right",
						33: "down",
						37: "right",
						38: "down"
					},
					close: [27],
					play: [32],
					toggle: [70]
				},
				direction: {
					next: "left",
					prev: "right"
				},
				scrollOutside: !0,
				index: 0,
				type: null,
				href: null,
				content: null,
				title: null,
				tpl: {
					wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
					image: '<img class="fancybox-image" src="{href}" alt="" />',
					iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (l ? ' allowtransparency="true"' : "") + "></iframe>",
					error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
					closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
					next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
					prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
				},
				openEffect: "fade",
				openSpeed: 250,
				openEasing: "swing",
				openOpacity: !0,
				openMethod: "zoomIn",
				closeEffect: "fade",
				closeSpeed: 250,
				closeEasing: "swing",
				closeOpacity: !0,
				closeMethod: "zoomOut",
				nextEffect: "elastic",
				nextSpeed: 250,
				nextEasing: "swing",
				nextMethod: "changeIn",
				prevEffect: "elastic",
				prevSpeed: 250,
				prevEasing: "swing",
				prevMethod: "changeOut",
				helpers: {
					overlay: !0,
					title: !0
				},
				onCancel: i.noop,
				beforeLoad: i.noop,
				afterLoad: i.noop,
				beforeShow: i.noop,
				afterShow: i.noop,
				beforeChange: i.noop,
				beforeClose: i.noop,
				afterClose: i.noop
			},
			group: {},
			opts: {},
			previous: null,
			coming: null,
			current: null,
			isActive: !1,
			isOpen: !1,
			isOpened: !1,
			wrap: null,
			skin: null,
			outer: null,
			inner: null,
			player: {
				timer: null,
				isActive: !1
			},
			ajaxLoad: null,
			imgPreload: null,
			transitions: {},
			helpers: {},
			open: function (e, t) {
				if (e && (i.isPlainObject(t) || (t = {}), !1 !== o.close(!0))) return i.isArray(e) || (e = h(e) ? i(e).get() : [e]), i.each(e, function (s, r) {
					var a, l, c, d, u, f = {};
					"object" === i.type(r) && (r.nodeType && (r = i(r)), h(r) ? (f = {
						href: r.data("fancybox-href") || r.attr("href"),
						title: r.data("fancybox-title") || r.attr("title"),
						isDom: !0,
						element: r
					}, i.metadata && i.extend(!0, f, r.metadata())) : f = r), a = t.href || f.href || (p(r) ? r : null), l = t.title !== n ? t.title : f.title || "", !(d = (c = t.content || f.content) ? "html" : t.type || f.type) && f.isDom && ((d = r.data("fancybox-type")) || (d = (d = r.prop("class").match(/fancybox\.(\w+)/)) ? d[1] : null)), p(a) && (d || (o.isImage(a) ? d = "image" : o.isSWF(a) ? d = "swf" : "#" === a.charAt(0) ? d = "inline" : p(r) && (d = "html", c = r)), "ajax" === d && (u = a.split(/\s+/, 2), a = u.shift(), u = u.shift())), c || ("inline" === d ? a ? c = i(p(a) ? a.replace(/.*(?=#[^\s]+$)/, "") : a) : f.isDom && (c = r) : "html" === d ? c = a : !d && !a && f.isDom && (d = "inline", c = r)), i.extend(f, {
						href: a,
						type: d,
						content: c,
						title: l,
						selector: u
					}), e[s] = f
				}), o.opts = i.extend(!0, {}, o.defaults, t), t.keys !== n && (o.opts.keys = !!t.keys && i.extend({}, o.defaults.keys, t.keys)), o.group = e, o._start(o.opts.index)
			},
			cancel: function () {
				var e = o.coming;
				e && !1 !== o.trigger("onCancel") && (o.hideLoading(), o.ajaxLoad && o.ajaxLoad.abort(), o.ajaxLoad = null, o.imgPreload && (o.imgPreload.onload = o.imgPreload.onerror = null), e.wrap && e.wrap.stop(!0, !0).trigger("onReset").remove(), o.coming = null, o.current || o._afterZoomOut(e))
			},
			close: function (e) {
				o.cancel(), !1 !== o.trigger("beforeClose") && (o.unbindEvents(), o.isActive && (o.isOpen && !0 !== e ? (o.isOpen = o.isOpened = !1, o.isClosing = !0, i(".fancybox-item, .fancybox-nav").remove(), o.wrap.stop(!0, !0).removeClass("fancybox-opened"), o.transitions[o.current.closeMethod]()) : (i(".fancybox-wrap").stop(!0).trigger("onReset").remove(), o._afterZoomOut())))
			},
			play: function (e) {
				var t = function () {
						clearTimeout(o.player.timer)
					},
					i = function () {
						t(), o.current && o.player.isActive && (o.player.timer = setTimeout(o.next, o.current.playSpeed))
					},
					n = function () {
						t(), a.unbind(".player"), o.player.isActive = !1, o.trigger("onPlayEnd")
					};
				!0 === e || !o.player.isActive && !1 !== e ? o.current && (o.current.loop || o.current.index < o.group.length - 1) && (o.player.isActive = !0, a.bind({
					"onCancel.player beforeClose.player": n,
					"onUpdate.player": i,
					"beforeLoad.player": t
				}), i(), o.trigger("onPlayStart")) : n()
			},
			next: function (e) {
				var t = o.current;
				t && (p(e) || (e = t.direction.next), o.jumpto(t.index + 1, e, "next"))
			},
			prev: function (e) {
				var t = o.current;
				t && (p(e) || (e = t.direction.prev), o.jumpto(t.index - 1, e, "prev"))
			},
			jumpto: function (e, t, i) {
				var s = o.current;
				s && (e = f(e), o.direction = t || s.direction[e >= s.index ? "next" : "prev"], o.router = i || "jumpto", s.loop && (0 > e && (e = s.group.length + e % s.group.length), e %= s.group.length), s.group[e] !== n && (o.cancel(), o._start(e)))
			},
			reposition: function (e, t) {
				var n, s = o.current,
					r = s ? s.wrap : null;
				r && (n = o._getPosition(t), e && "scroll" === e.type ? (delete n.position, r.stop(!0, !0).animate(n, 200)) : (r.css(n), s.pos = i.extend({}, s.dim, n)))
			},
			update: function (e) {
				var t = e && e.type,
					i = !t || "orientationchange" === t;
				i && (clearTimeout(c), c = null), o.isOpen && !c && (c = setTimeout(function () {
					var n = o.current;
					n && !o.isClosing && (o.wrap.removeClass("fancybox-tmp"), (i || "load" === t || "resize" === t && n.autoResize) && o._setDimension(), "scroll" === t && n.canShrink || o.reposition(e), o.trigger("onUpdate"), c = null)
				}, i && !d ? 0 : 300))
			},
			toggle: function (e) {
				o.isOpen && (o.current.fitToView = "boolean" === i.type(e) ? e : !o.current.fitToView, d && (o.wrap.removeAttr("style").addClass("fancybox-tmp"), o.trigger("onUpdate")), o.update())
			},
			hideLoading: function () {
				a.unbind(".loading"), i("#fancybox-loading").remove()
			},
			showLoading: function () {
				var e, t;
				o.hideLoading(), e = i('<div id="fancybox-loading"><div></div></div>').click(o.cancel).appendTo("body"), a.bind("keydown.loading", function (e) {
					27 === (e.which || e.keyCode) && (e.preventDefault(), o.cancel())
				}), o.defaults.fixed || (t = o.getViewport(), e.css({
					position: "absolute",
					top: .5 * t.h + t.y,
					left: .5 * t.w + t.x
				}))
			},
			getViewport: function () {
				var t = o.current && o.current.locked || !1,
					i = {
						x: r.scrollLeft(),
						y: r.scrollTop()
					};
				return t ? (i.w = t[0].clientWidth, i.h = t[0].clientHeight) : (i.w = d && e.innerWidth ? e.innerWidth : r.width(), i.h = d && e.innerHeight ? e.innerHeight : r.height()), i
			},
			unbindEvents: function () {
				o.wrap && h(o.wrap) && o.wrap.unbind(".fb"), a.unbind(".fb"), r.unbind(".fb")
			},
			bindEvents: function () {
				var e, t = o.current;
				t && (r.bind("orientationchange.fb" + (d ? "" : " resize.fb") + (t.autoCenter && !t.locked ? " scroll.fb" : ""), o.update), (e = t.keys) && a.bind("keydown.fb", function (s) {
					var r = s.which || s.keyCode,
						a = s.target || s.srcElement;
					if (27 === r && o.coming) return !1;
					!s.ctrlKey && !s.altKey && !s.shiftKey && !s.metaKey && (!a || !a.type && !i(a).is("[contenteditable]")) && i.each(e, function (e, a) {
						return 1 < t.group.length && a[r] !== n ? (o[e](a[r]), s.preventDefault(), !1) : -1 < i.inArray(r, a) ? (o[e](), s.preventDefault(), !1) : void 0
					})
				}), i.fn.mousewheel && t.mouseWheel && o.wrap.bind("mousewheel.fb", function (e, n, s, r) {
					for (var a = i(e.target || null), l = !1; a.length && !l && !a.is(".fancybox-skin") && !a.is(".fancybox-wrap");) l = a[0] && !(a[0].style.overflow && "hidden" === a[0].style.overflow) && (a[0].clientWidth && a[0].scrollWidth > a[0].clientWidth || a[0].clientHeight && a[0].scrollHeight > a[0].clientHeight), a = i(a).parent();
					0 !== n && !l && 1 < o.group.length && !t.canShrink && (0 < r || 0 < s ? o.prev(0 < r ? "down" : "left") : (0 > r || 0 > s) && o.next(0 > r ? "up" : "right"), e.preventDefault())
				}))
			},
			trigger: function (e, t) {
				var n, s = t || o.coming || o.current;
				if (s) {
					if (i.isFunction(s[e]) && (n = s[e].apply(s, Array.prototype.slice.call(arguments, 1))), !1 === n) return !1;
					s.helpers && i.each(s.helpers, function (t, n) {
						n && o.helpers[t] && i.isFunction(o.helpers[t][e]) && o.helpers[t][e](i.extend(!0, {}, o.helpers[t].defaults, n), s)
					}), a.trigger(e)
				}
			},
			isImage: function (e) {
				return p(e) && e.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
			},
			isSWF: function (e) {
				return p(e) && e.match(/\.(swf)((\?|#).*)?$/i)
			},
			_start: function (e) {
				var t, n, s = {};
				if (e = f(e), !(t = o.group[e] || null)) return !1;
				if (t = (s = i.extend(!0, {}, o.opts, t)).margin, n = s.padding, "number" === i.type(t) && (s.margin = [t, t, t, t]), "number" === i.type(n) && (s.padding = [n, n, n, n]), s.modal && i.extend(!0, s, {
						closeBtn: !1,
						closeClick: !1,
						nextClick: !1,
						arrows: !1,
						mouseWheel: !1,
						keys: null,
						helpers: {
							overlay: {
								closeClick: !1
							}
						}
					}), s.autoSize && (s.autoWidth = s.autoHeight = !0), "auto" === s.width && (s.autoWidth = !0), "auto" === s.height && (s.autoHeight = !0), s.group = o.group, s.index = e, o.coming = s, !1 === o.trigger("beforeLoad")) o.coming = null;
				else {
					if (n = s.type, t = s.href, !n) return o.coming = null, !(!o.current || !o.router || "jumpto" === o.router) && (o.current.index = e, o[o.router](o.direction));
					if (o.isActive = !0, "image" !== n && "swf" !== n || (s.autoHeight = s.autoWidth = !1, s.scrolling = "visible"), "image" === n && (s.aspectRatio = !0), "iframe" === n && d && (s.scrolling = "scroll"), s.wrap = i(s.tpl.wrap).addClass("fancybox-" + (d ? "mobile" : "desktop") + " fancybox-type-" + n + " fancybox-tmp " + s.wrapCSS).appendTo(s.parent || "body"), i.extend(s, {
							skin: i(".fancybox-skin", s.wrap),
							outer: i(".fancybox-outer", s.wrap),
							inner: i(".fancybox-inner", s.wrap)
						}), i.each(["Top", "Right", "Bottom", "Left"], function (e, t) {
							s.skin.css("padding" + t, m(s.padding[e]))
						}), o.trigger("onReady"), "inline" === n || "html" === n) {
						if (!s.content || !s.content.length) return o._error("content")
					} else if (!t) return o._error("href");
					"image" === n ? o._loadImage() : "ajax" === n ? o._loadAjax() : "iframe" === n ? o._loadIframe() : o._afterLoad()
				}
			},
			_error: function (e) {
				i.extend(o.coming, {
					type: "html",
					autoWidth: !0,
					autoHeight: !0,
					minWidth: 0,
					minHeight: 0,
					scrolling: "no",
					hasError: e,
					content: o.coming.tpl.error
				}), o._afterLoad()
			},
			_loadImage: function () {
				var e = o.imgPreload = new Image;
				e.onload = function () {
					this.onload = this.onerror = null, o.coming.width = this.width / o.opts.pixelRatio, o.coming.height = this.height / o.opts.pixelRatio, o._afterLoad()
				}, e.onerror = function () {
					this.onload = this.onerror = null, o._error("image")
				}, e.src = o.coming.href, !0 !== e.complete && o.showLoading()
			},
			_loadAjax: function () {
				var e = o.coming;
				o.showLoading(), o.ajaxLoad = i.ajax(i.extend({}, e.ajax, {
					url: e.href,
					error: function (e, t) {
						o.coming && "abort" !== t ? o._error("ajax", e) : o.hideLoading()
					},
					success: function (t, i) {
						"success" === i && (e.content = t, o._afterLoad())
					}
				}))
			},
			_loadIframe: function () {
				var e = o.coming,
					t = i(e.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", d ? "auto" : e.iframe.scrolling).attr("src", e.href);
				i(e.wrap).bind("onReset", function () {
					try {
						i(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
					} catch (e) {}
				}), e.iframe.preload && (o.showLoading(), t.one("load", function () {
					i(this).data("ready", 1), d || i(this).bind("load.fb", o.update), i(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(), o._afterLoad()
				})), e.content = t.appendTo(e.inner), e.iframe.preload || o._afterLoad()
			},
			_preloadImages: function () {
				var e, t, i = o.group,
					n = o.current,
					s = i.length,
					r = n.preload ? Math.min(n.preload, s - 1) : 0;
				for (t = 1; t <= r; t += 1) "image" === (e = i[(n.index + t) % s]).type && e.href && ((new Image).src = e.href)
			},
			_afterLoad: function () {
				var e, t, n, s, r, a = o.coming,
					l = o.current;
				if (o.hideLoading(), a && !1 !== o.isActive)
					if (!1 === o.trigger("afterLoad", a, l)) a.wrap.stop(!0).trigger("onReset").remove(), o.coming = null;
					else {
						switch (l && (o.trigger("beforeChange", l), l.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()), o.unbindEvents(), e = a.content, t = a.type, n = a.scrolling, i.extend(o, {
							wrap: a.wrap,
							skin: a.skin,
							outer: a.outer,
							inner: a.inner,
							current: a,
							previous: l
						}), s = a.href, t) {
							case "inline":
							case "ajax":
							case "html":
								a.selector ? e = i("<div>").html(e).find(a.selector) : h(e) && (e.data("fancybox-placeholder") || e.data("fancybox-placeholder", i('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()), e = e.show().detach(), a.wrap.bind("onReset", function () {
									i(this).find(e).length && e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder", !1)
								}));
								break;
							case "image":
								e = a.tpl.image.replace("{href}", s);
								break;
							case "swf":
								e = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + s + '"></param>', r = "", i.each(a.swf, function (t, i) {
									e += '<param name="' + t + '" value="' + i + '"></param>', r += " " + t + '="' + i + '"'
								}), e += '<embed src="' + s + '" type="application/x-shockwave-flash" width="100%" height="100%"' + r + "></embed></object>"
						}(!h(e) || !e.parent().is(a.inner)) && a.inner.append(e), o.trigger("beforeShow"), a.inner.css("overflow", "yes" === n ? "scroll" : "no" === n ? "hidden" : n), o._setDimension(), o.reposition(), o.isOpen = !1, o.coming = null, o.bindEvents(), o.isOpened ? l.prevMethod && o.transitions[l.prevMethod]() : i(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove(), o.transitions[o.isOpened ? a.nextMethod : a.openMethod](), o._preloadImages()
					}
			},
			_setDimension: function () {
				var e, t, n, s, r, a, l, c, d, h = o.getViewport(),
					p = 0,
					g = !1,
					v = !1,
					y = (g = o.wrap, o.skin),
					b = o.inner,
					_ = o.current,
					w = (v = _.width, _.height),
					x = _.minWidth,
					T = _.minHeight,
					S = _.maxWidth,
					C = _.maxHeight,
					E = _.scrolling,
					k = _.scrollOutside ? _.scrollbarWidth : 0,
					I = _.margin,
					P = f(I[1] + I[3]),
					D = f(I[0] + I[2]);
				if (g.add(y).add(b).width("auto").height("auto").removeClass("fancybox-tmp"), t = P + (I = f(y.outerWidth(!0) - y.width())), n = D + (e = f(y.outerHeight(!0) - y.height())), s = u(v) ? (h.w - t) * f(v) / 100 : v, r = u(w) ? (h.h - n) * f(w) / 100 : w, "iframe" === _.type) {
					if (d = _.content, _.autoHeight && 1 === d.data("ready")) try {
						d[0].contentWindow.document.location && (b.width(s).height(9999), a = d.contents().find("body"), k && a.css("overflow-x", "hidden"), r = a.outerHeight(!0))
					} catch (e) {}
				} else(_.autoWidth || _.autoHeight) && (b.addClass("fancybox-tmp"), _.autoWidth || b.width(s), _.autoHeight || b.height(r), _.autoWidth && (s = b.width()), _.autoHeight && (r = b.height()), b.removeClass("fancybox-tmp"));
				if (v = f(s), w = f(r), c = s / r, x = f(u(x) ? f(x, "w") - t : x), S = f(u(S) ? f(S, "w") - t : S), T = f(u(T) ? f(T, "h") - n : T), a = S, l = C = f(u(C) ? f(C, "h") - n : C), _.fitToView && (S = Math.min(h.w - t, S), C = Math.min(h.h - n, C)), t = h.w - P, D = h.h - D, _.aspectRatio ? (v > S && (w = f((v = S) / c)), w > C && (v = f((w = C) * c)), v < x && (w = f((v = x) / c)), w < T && (v = f((w = T) * c))) : (v = Math.max(x, Math.min(v, S)), _.autoHeight && "iframe" !== _.type && (b.width(v), w = b.height()), w = Math.max(T, Math.min(w, C))), _.fitToView)
					if (b.width(v).height(w), g.width(v + I), h = g.width(), P = g.height(), _.aspectRatio)
						for (;
							(h > t || P > D) && v > x && w > T && !(19 < p++);) w = Math.max(T, Math.min(C, w - 10)), (v = f(w * c)) < x && (w = f((v = x) / c)), v > S && (w = f((v = S) / c)), b.width(v).height(w), g.width(v + I), h = g.width(), P = g.height();
					else v = Math.max(x, Math.min(v, v - (h - t))), w = Math.max(T, Math.min(w, w - (P - D)));
				k && "auto" === E && w < r && v + I + k < t && (v += k), b.width(v).height(w), g.width(v + I), h = g.width(), P = g.height(), g = (h > t || P > D) && v > x && w > T, v = _.aspectRatio ? v < a && w < l && v < s && w < r : (v < a || w < l) && (v < s || w < r), i.extend(_, {
					dim: {
						width: m(h),
						height: m(P)
					},
					origWidth: s,
					origHeight: r,
					canShrink: g,
					canExpand: v,
					wPadding: I,
					hPadding: e,
					wrapSpace: P - y.outerHeight(!0),
					skinSpace: y.height() - w
				}), !d && _.autoHeight && w > T && w < C && !v && b.height("auto")
			},
			_getPosition: function (e) {
				var t = o.current,
					i = o.getViewport(),
					n = t.margin,
					s = o.wrap.width() + n[1] + n[3],
					r = o.wrap.height() + n[0] + n[2];
				n = {
					position: "absolute",
					top: n[0],
					left: n[3]
				};
				return t.autoCenter && t.fixed && !e && r <= i.h && s <= i.w ? n.position = "fixed" : t.locked || (n.top += i.y, n.left += i.x), n.top = m(Math.max(n.top, n.top + (i.h - r) * t.topRatio)), n.left = m(Math.max(n.left, n.left + (i.w - s) * t.leftRatio)), n
			},
			_afterZoomIn: function () {
				var e = o.current;
				e && (o.isOpen = o.isOpened = !0, o.wrap.css("overflow", "visible").addClass("fancybox-opened"), o.update(), (e.closeClick || e.nextClick && 1 < o.group.length) && o.inner.css("cursor", "pointer").bind("click.fb", function (t) {
					!i(t.target).is("a") && !i(t.target).parent().is("a") && (t.preventDefault(), o[e.closeClick ? "close" : "next"]())
				}), e.closeBtn && i(e.tpl.closeBtn).appendTo(o.skin).bind("click.fb", function (e) {
					e.preventDefault(), o.close()
				}), e.arrows && 1 < o.group.length && ((e.loop || 0 < e.index) && i(e.tpl.prev).appendTo(o.outer).bind("click.fb", o.prev), (e.loop || e.index < o.group.length - 1) && i(e.tpl.next).appendTo(o.outer).bind("click.fb", o.next)), o.trigger("afterShow"), e.loop || e.index !== e.group.length - 1 ? o.opts.autoPlay && !o.player.isActive && (o.opts.autoPlay = !1, o.play()) : o.play(!1))
			},
			_afterZoomOut: function (e) {
				e = e || o.current, i(".fancybox-wrap").trigger("onReset").remove(), i.extend(o, {
					group: {},
					opts: {},
					router: !1,
					current: null,
					isActive: !1,
					isOpened: !1,
					isOpen: !1,
					isClosing: !1,
					wrap: null,
					skin: null,
					outer: null,
					inner: null
				}), o.trigger("afterClose", e)
			}
		}), o.transitions = {
			getOrigPosition: function () {
				var e = o.current,
					t = e.element,
					i = e.orig,
					n = {},
					s = 50,
					r = 50,
					a = e.hPadding,
					l = e.wPadding,
					c = o.getViewport();
				return !i && e.isDom && t.is(":visible") && ((i = t.find("img:first")).length || (i = t)), h(i) ? (n = i.offset(), i.is("img") && (s = i.outerWidth(), r = i.outerHeight())) : (n.top = c.y + (c.h - r) * e.topRatio, n.left = c.x + (c.w - s) * e.leftRatio), ("fixed" === o.wrap.css("position") || e.locked) && (n.top -= c.y, n.left -= c.x), {
					top: m(n.top - a * e.topRatio),
					left: m(n.left - l * e.leftRatio),
					width: m(s + l),
					height: m(r + a)
				}
			},
			step: function (e, t) {
				var i, n, s = t.prop,
					r = (n = o.current).wrapSpace,
					a = n.skinSpace;
				"width" !== s && "height" !== s || (i = t.end === t.start ? 1 : (e - t.start) / (t.end - t.start), o.isClosing && (i = 1 - i), n = e - (n = "width" === s ? n.wPadding : n.hPadding), o.skin[s](f("width" === s ? n : n - r * i)), o.inner[s](f("width" === s ? n : n - r * i - a * i)))
			},
			zoomIn: function () {
				var e = o.current,
					t = e.pos,
					n = e.openEffect,
					s = "elastic" === n,
					r = i.extend({
						opacity: 1
					}, t);
				delete r.position, s ? (t = this.getOrigPosition(), e.openOpacity && (t.opacity = .1)) : "fade" === n && (t.opacity = .1), o.wrap.css(t).animate(r, {
					duration: "none" === n ? 0 : e.openSpeed,
					easing: e.openEasing,
					step: s ? this.step : null,
					complete: o._afterZoomIn
				})
			},
			zoomOut: function () {
				var e = o.current,
					t = e.closeEffect,
					i = "elastic" === t,
					n = {
						opacity: .1
					};
				i && (n = this.getOrigPosition(), e.closeOpacity && (n.opacity = .1)), o.wrap.animate(n, {
					duration: "none" === t ? 0 : e.closeSpeed,
					easing: e.closeEasing,
					step: i ? this.step : null,
					complete: o._afterZoomOut
				})
			},
			changeIn: function () {
				var e, t = o.current,
					i = t.nextEffect,
					n = t.pos,
					s = {
						opacity: 1
					},
					r = o.direction;
				n.opacity = .1, "elastic" === i && (e = "down" === r || "up" === r ? "top" : "left", "down" === r || "right" === r ? (n[e] = m(f(n[e]) - 200), s[e] = "+=200px") : (n[e] = m(f(n[e]) + 200), s[e] = "-=200px")), "none" === i ? o._afterZoomIn() : o.wrap.css(n).animate(s, {
					duration: t.nextSpeed,
					easing: t.nextEasing,
					complete: o._afterZoomIn
				})
			},
			changeOut: function () {
				var e = o.previous,
					t = e.prevEffect,
					n = {
						opacity: .1
					},
					s = o.direction;
				"elastic" === t && (n["down" === s || "up" === s ? "top" : "left"] = ("up" === s || "left" === s ? "-" : "+") + "=200px"), e.wrap.animate(n, {
					duration: "none" === t ? 0 : e.prevSpeed,
					easing: e.prevEasing,
					complete: function () {
						i(this).trigger("onReset").remove()
					}
				})
			}
		}, o.helpers.overlay = {
			defaults: {
				closeClick: !0,
				speedOut: 200,
				showEarly: !0,
				css: {},
				locked: !d,
				fixed: !0
			},
			overlay: null,
			fixed: !1,
			el: i("html"),
			create: function (e) {
				e = i.extend({}, this.defaults, e), this.overlay && this.close(), this.overlay = i('<div class="fancybox-overlay"></div>').appendTo(o.coming ? o.coming.parent : e.parent), this.fixed = !1, e.fixed && o.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0)
			},
			open: function (e) {
				var t = this;
				e = i.extend({}, this.defaults, e), this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(e), this.fixed || (r.bind("resize.overlay", i.proxy(this.update, this)), this.update()), e.closeClick && this.overlay.bind("click.overlay", function (e) {
					if (i(e.target).hasClass("fancybox-overlay")) return o.isActive ? o.close() : t.close(), !1
				}), this.overlay.css(e.css).show()
			},
			close: function () {
				var e, t;
				r.unbind("resize.overlay"), this.el.hasClass("fancybox-lock") && (i(".fancybox-margin").removeClass("fancybox-margin"), e = r.scrollTop(), t = r.scrollLeft(), this.el.removeClass("fancybox-lock"), r.scrollTop(e).scrollLeft(t)), i(".fancybox-overlay").remove().hide(), i.extend(this, {
					overlay: null,
					fixed: !1
				})
			},
			update: function () {
				var e, i = "100%";
				this.overlay.width(i).height("100%"), l ? (e = Math.max(t.documentElement.offsetWidth, t.body.offsetWidth), a.width() > e && (i = a.width())) : a.width() > r.width() && (i = a.width()), this.overlay.width(i).height(a.height())
			},
			onReady: function (e, t) {
				var n = this.overlay;
				i(".fancybox-overlay").stop(!0, !0), n || this.create(e), e.locked && this.fixed && t.fixed && (n || (this.margin = a.height() > r.height() && i("html").css("margin-right").replace("px", "")), t.locked = this.overlay.append(t.wrap), t.fixed = !1), !0 === e.showEarly && this.beforeShow.apply(this, arguments)
			},
			beforeShow: function (e, t) {
				var n, s;
				t.locked && (!1 !== this.margin && (i("*").filter(function () {
					return "fixed" === i(this).css("position") && !i(this).hasClass("fancybox-overlay") && !i(this).hasClass("fancybox-wrap")
				}).addClass("fancybox-margin"), this.el.addClass("fancybox-margin")), n = r.scrollTop(), s = r.scrollLeft(), this.el.addClass("fancybox-lock"), r.scrollTop(n).scrollLeft(s)), this.open(e)
			},
			onUpdate: function () {
				this.fixed || this.update()
			},
			afterClose: function (e) {
				this.overlay && !o.coming && this.overlay.fadeOut(e.speedOut, i.proxy(this.close, this))
			}
		}, o.helpers.title = {
			defaults: {
				type: "float",
				position: "bottom"
			},
			beforeShow: function (e) {
				var t = o.current,
					n = t.title,
					s = e.type;
				if (i.isFunction(n) && (n = n.call(t.element, t)), p(n) && "" !== i.trim(n)) {
					switch (t = i('<div class="fancybox-title fancybox-title-' + s + '-wrap">' + n + "</div>"), s) {
						case "inside":
							s = o.skin;
							break;
						case "outside":
							s = o.wrap;
							break;
						case "over":
							s = o.inner;
							break;
						default:
							s = o.skin, t.appendTo("body"), l && t.width(t.width()), t.wrapInner('<span class="child"></span>'), o.current.margin[2] += Math.abs(f(t.css("margin-bottom")))
					}
					t["top" === e.position ? "prependTo" : "appendTo"](s)
				}
			}
		}, i.fn.fancybox = function (e) {
			var t, n = i(this),
				s = this.selector || "",
				r = function (r) {
					var a, l, c = i(this).blur(),
						d = t;
					!r.ctrlKey && !r.altKey && !r.shiftKey && !r.metaKey && !c.is(".fancybox-wrap") && (a = e.groupAttr || "data-fancybox-group", (l = c.attr(a)) || (a = "rel", l = c.get(0)[a]), l && "" !== l && "nofollow" !== l && (d = (c = (c = s.length ? i(s) : n).filter("[" + a + '="' + l + '"]')).index(this)), e.index = d, !1 !== o.open(c, e) && r.preventDefault())
				};
			return t = (e = e || {}).index || 0, s && !1 !== e.live ? a.undelegate(s, "click.fb-start").delegate(s + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", r) : n.unbind("click.fb-start").bind("click.fb-start", r), this.filter("[data-fancybox-start=1]").trigger("click"), this
		}, a.ready(function () {
			var t, r;
			if (i.scrollbarWidth === n && (i.scrollbarWidth = function () {
					var e = i('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),
						t = (t = e.children()).innerWidth() - t.height(99).innerWidth();
					return e.remove(), t
				}), i.support.fixedPosition === n) {
				t = i.support;
				var a = 20 === (r = i('<div style="position:fixed;top:20px;"></div>').appendTo("body"))[0].offsetTop || 15 === r[0].offsetTop;
				r.remove(), t.fixedPosition = a
			}
			i.extend(o.defaults, {
				scrollbarWidth: i.scrollbarWidth(),
				fixed: i.support.fixedPosition,
				parent: i("body")
			}), t = i(e).width(), s.addClass("fancybox-lock-test"), r = i(e).width(), s.removeClass("fancybox-lock-test"), i("<style type='text/css'>.fancybox-margin{margin-right:" + (r - t) + "px;}</style>").appendTo("head")
		})
	}(window, document, jQuery), $.fn.idealRadioCheck = function () {
		return this.each(function () {
			var e = $(this),
				t = $("<span/>");
			t.addClass("ideal-" + (e.is(":checkbox") ? "check" : "radio")), e.is(":checked") && t.addClass("checked"), t.insertAfter(e), e.parent("label").addClass("ideal-radiocheck-label").attr("onclick", ""), e.css({
				position: "absolute",
				left: "-9999px"
			}), e.on({
				change: function () {
					var e = $(this);
					e.is('input[type="radio"]') && e.closest("form").find('input[name="' + e.attr("name") + '"]').each(function () {
						$(this).parent().removeClass("_active").find(".ideal-radio").removeClass("checked")
					}), e.parent().addClass("_active"), e.is('input[type="checkbox"]') && (e.is(":checked") || e.parent().removeClass("_active")), t.toggleClass("checked", e.is(":checked"))
				},
				focus: function () {
					t.addClass("focus")
				},
				blur: function () {
					t.removeClass("focus")
				},
				click: function () {
					$(this).trigger("focus")
				}
			})
		})
	},
	function () {
		var e, t, i, n, s = {}.hasOwnProperty;
		(n = function () {
			function e() {
				this.options_index = 0, this.parsed = []
			}
			return e.prototype.add_node = function (e) {
				return "OPTGROUP" === e.nodeName.toUpperCase() ? this.add_group(e) : this.add_option(e)
			}, e.prototype.add_group = function (e) {
				var t, i, n, s, r, a;
				for (t = this.parsed.length, this.parsed.push({
						array_index: t,
						group: !0,
						label: this.escapeExpression(e.label),
						title: e.title ? e.title : void 0,
						children: 0,
						disabled: e.disabled,
						classes: e.className
					}), a = [], n = 0, s = (r = e.childNodes).length; n < s; n++) i = r[n], a.push(this.add_option(i, t, e.disabled));
				return a
			}, e.prototype.add_option = function (e, t, i) {
				if ("OPTION" === e.nodeName.toUpperCase()) return "" !== e.text ? (null != t && (this.parsed[t].children += 1), this.parsed.push({
					array_index: this.parsed.length,
					options_index: this.options_index,
					value: e.value,
					text: e.text,
					html: e.innerHTML,
					title: e.title ? e.title : void 0,
					selected: e.selected,
					disabled: !0 === i ? i : e.disabled,
					group_array_index: t,
					group_label: null != t ? this.parsed[t].label : null,
					classes: e.className,
					style: e.style.cssText
				})) : this.parsed.push({
					array_index: this.parsed.length,
					options_index: this.options_index,
					empty: !0
				}), this.options_index += 1
			}, e.prototype.escapeExpression = function (e) {
				var t, i;
				return null == e || !1 === e ? "" : /[\&\<\>\"\'\`]/.test(e) ? (t = {
					"<": "&lt;",
					">": "&gt;",
					'"': "&quot;",
					"'": "&#x27;",
					"`": "&#x60;"
				}, i = /&(?!\w+;)|[\<\>\"\'\`]/g, e.replace(i, function (e) {
					return t[e] || "&amp;"
				})) : e
			}, e
		}()).select_to_array = function (e) {
			var t, i, s, r, a;
			for (i = new n, s = 0, r = (a = e.childNodes).length; s < r; s++) t = a[s], i.add_node(t);
			return i.parsed
		}, t = function () {
			function e(t, i) {
				this.form_field = t, this.options = null != i ? i : {}, e.browser_is_supported() && (this.is_multiple = this.form_field.multiple, this.set_default_text(), this.set_default_values(), this.setup(), this.set_up_html(), this.register_observers(), this.on_ready())
			}
			return e.prototype.set_default_values = function () {
				var e = this;
				return this.click_test_action = function (t) {
					return e.test_active_click(t)
				}, this.activate_action = function (t) {
					return e.activate_field(t)
				}, this.active_field = !1, this.mouse_on_container = !1, this.results_showing = !1, this.result_highlighted = null, this.allow_single_deselect = null != this.options.allow_single_deselect && null != this.form_field.options[0] && "" === this.form_field.options[0].text && this.options.allow_single_deselect, this.disable_search_threshold = this.options.disable_search_threshold || 0, this.disable_search = this.options.disable_search || !1, this.enable_split_word_search = null == this.options.enable_split_word_search || this.options.enable_split_word_search, this.group_search = null == this.options.group_search || this.options.group_search, this.search_contains = this.options.search_contains || !1, this.single_backstroke_delete = null == this.options.single_backstroke_delete || this.options.single_backstroke_delete, this.max_selected_options = this.options.max_selected_options || 1 / 0, this.inherit_select_classes = this.options.inherit_select_classes || !1, this.display_selected_options = null == this.options.display_selected_options || this.options.display_selected_options, this.display_disabled_options = null == this.options.display_disabled_options || this.options.display_disabled_options, this.include_group_label_in_selected = this.options.include_group_label_in_selected || !1
			}, e.prototype.set_default_text = function () {
				return this.form_field.getAttribute("data-placeholder") ? this.default_text = this.form_field.getAttribute("data-placeholder") : this.is_multiple ? this.default_text = this.options.placeholder_text_multiple || this.options.placeholder_text || e.default_multiple_text : this.default_text = this.options.placeholder_text_single || this.options.placeholder_text || e.default_single_text, this.results_none_found = this.form_field.getAttribute("data-no_results_text") || this.options.no_results_text || e.default_no_result_text
			}, e.prototype.choice_label = function (e) {
				return this.include_group_label_in_selected && null != e.group_label ? "<b class='group-name'>" + e.group_label + "</b>" + e.html : e.html
			}, e.prototype.mouse_enter = function () {
				return this.mouse_on_container = !0
			}, e.prototype.mouse_leave = function () {
				return this.mouse_on_container = !1
			}, e.prototype.input_focus = function (e) {
				var t = this;
				if (this.is_multiple) {
					if (!this.active_field) return setTimeout(function () {
						return t.container_mousedown()
					}, 50)
				} else if (!this.active_field) return this.activate_field()
			}, e.prototype.input_blur = function (e) {
				var t = this;
				if (!this.mouse_on_container) return this.active_field = !1, setTimeout(function () {
					return t.blur_test()
				}, 100)
			}, e.prototype.results_option_build = function (e) {
				var t, i, n, s, r;
				for (t = "", n = 0, s = (r = this.results_data).length; n < s; n++)(i = r[n]).group ? t += this.result_add_group(i) : t += this.result_add_option(i), (null != e ? e.first : void 0) && (i.selected && this.is_multiple ? this.choice_build(i) : i.selected && !this.is_multiple && this.single_set_selected_text(this.choice_label(i)));
				return t
			}, e.prototype.result_add_option = function (e) {
				var t, i;
				return e.search_match && this.include_option_in_results(e) ? (t = [], e.disabled || e.selected && this.is_multiple || t.push("active-result"), !e.disabled || e.selected && this.is_multiple || t.push("disabled-result"), e.selected && t.push("result-selected"), null != e.group_array_index && t.push("group-option"), "" !== e.classes && t.push(e.classes), (i = document.createElement("li")).className = t.join(" "), i.style.cssText = e.style, i.setAttribute("data-option-array-index", e.array_index), i.innerHTML = e.search_text, e.title && (i.title = e.title), this.outerHTML(i)) : ""
			}, e.prototype.result_add_group = function (e) {
				var t, i;
				return (e.search_match || e.group_match) && e.active_options > 0 ? ((t = []).push("group-result"), e.classes && t.push(e.classes), (i = document.createElement("li")).className = t.join(" "), i.innerHTML = e.search_text, e.title && (i.title = e.title), this.outerHTML(i)) : ""
			}, e.prototype.results_update_field = function () {
				if (this.set_default_text(), this.is_multiple || this.results_reset_cleanup(), this.result_clear_highlight(), this.results_build(), this.results_showing) return this.winnow_results()
			}, e.prototype.reset_single_select_options = function () {
				var e, t, i, n, s;
				for (s = [], t = 0, i = (n = this.results_data).length; t < i; t++)(e = n[t]).selected ? s.push(e.selected = !1) : s.push(void 0);
				return s
			}, e.prototype.results_toggle = function () {
				return this.results_showing ? this.results_hide() : this.results_show()
			}, e.prototype.results_search = function (e) {
				return this.results_showing ? this.winnow_results() : this.results_show()
			}, e.prototype.winnow_results = function () {
				var e, t, i, n, s, r, a, o, l, c, d, h;
				for (this.no_results_clear(), n = 0, e = (r = this.get_search_text()).replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), l = new RegExp(e, "i"), i = this.get_search_regex(e), c = 0, d = (h = this.results_data).length; c < d; c++)(t = h[c]).search_match = !1, s = null, this.include_option_in_results(t) && (t.group && (t.group_match = !1, t.active_options = 0), null != t.group_array_index && this.results_data[t.group_array_index] && (0 === (s = this.results_data[t.group_array_index]).active_options && s.search_match && (n += 1), s.active_options += 1), t.search_text = t.group ? t.label : t.html, t.group && !this.group_search || (t.search_match = this.search_string_match(t.search_text, i), t.search_match && !t.group && (n += 1), t.search_match ? (r.length && (a = t.search_text.search(l), o = t.search_text.substr(0, a + r.length) + "</em>" + t.search_text.substr(a + r.length), t.search_text = o.substr(0, a) + "<em>" + o.substr(a)), null != s && (s.group_match = !0)) : null != t.group_array_index && this.results_data[t.group_array_index].search_match && (t.search_match = !0)));
				return this.result_clear_highlight(), n < 1 && r.length ? (this.update_results_content(""), this.no_results(r)) : (this.update_results_content(this.results_option_build()), this.winnow_results_set_highlight())
			}, e.prototype.get_search_regex = function (e) {
				var t;
				return t = this.search_contains ? "" : "^", new RegExp(t + e, "i")
			}, e.prototype.search_string_match = function (e, t) {
				var i, n, s, r;
				if (t.test(e)) return !0;
				if (this.enable_split_word_search && (e.indexOf(" ") >= 0 || 0 === e.indexOf("[")) && (n = e.replace(/\[|\]/g, "").split(" ")).length)
					for (s = 0, r = n.length; s < r; s++)
						if (i = n[s], t.test(i)) return !0
			}, e.prototype.choices_count = function () {
				var e, t, i;
				if (null != this.selected_option_count) return this.selected_option_count;
				for (this.selected_option_count = 0, e = 0, t = (i = this.form_field.options).length; e < t; e++) i[e].selected && (this.selected_option_count += 1);
				return this.selected_option_count
			}, e.prototype.choices_click = function (e) {
				if (e.preventDefault(), !this.results_showing && !this.is_disabled) return this.results_show()
			}, e.prototype.keyup_checker = function (e) {
				var t, i;
				switch (t = null != (i = e.which) ? i : e.keyCode, this.search_field_scale(), t) {
					case 8:
						if (this.is_multiple && this.backstroke_length < 1 && this.choices_count() > 0) return this.keydown_backstroke();
						if (!this.pending_backstroke) return this.result_clear_highlight(), this.results_search();
						break;
					case 13:
						if (e.preventDefault(), this.results_showing) return this.result_select(e);
						break;
					case 27:
						return this.results_showing && this.results_hide(), !0;
					case 9:
					case 38:
					case 40:
					case 16:
					case 91:
					case 17:
						break;
					default:
						return this.results_search()
				}
			}, e.prototype.clipboard_event_checker = function (e) {
				var t = this;
				return setTimeout(function () {
					return t.results_search()
				}, 50)
			}, e.prototype.container_width = function () {
				return null != this.options.width ? this.options.width : this.form_field.offsetWidth + "px"
			}, e.prototype.include_option_in_results = function (e) {
				return !(this.is_multiple && !this.display_selected_options && e.selected) && (!(!this.display_disabled_options && e.disabled) && !e.empty)
			}, e.prototype.search_results_touchstart = function (e) {
				return this.touch_started = !0, this.search_results_mouseover(e)
			}, e.prototype.search_results_touchmove = function (e) {
				return this.touch_started = !1, this.search_results_mouseout(e)
			}, e.prototype.search_results_touchend = function (e) {
				if (this.touch_started) return this.search_results_mouseup(e)
			}, e.prototype.outerHTML = function (e) {
				var t;
				return e.outerHTML ? e.outerHTML : ((t = document.createElement("div")).appendChild(e), t.innerHTML)
			}, e.browser_is_supported = function () {
				return "Microsoft Internet Explorer" === window.navigator.appName ? document.documentMode >= 8 : !/iP(od|hone)/i.test(window.navigator.userAgent) && (!/Android/i.test(window.navigator.userAgent) || !/Mobile/i.test(window.navigator.userAgent))
			}, e.default_multiple_text = "Select Some Options", e.default_single_text = "Select an Option", e.default_no_result_text = "No results match", e
		}(), (e = jQuery).fn.extend({
			chosen: function (n) {
				return t.browser_is_supported() ? this.each(function (t) {
					var s, r;
					r = (s = e(this)).data("chosen"), "destroy" === n && r instanceof i ? r.destroy() : r instanceof i || s.data("chosen", new i(this, n))
				}) : this
			}
		}), i = function (i) {
			function r() {
				return r.__super__.constructor.apply(this, arguments)
			}
			return function (e, t) {
				for (var i in t) s.call(t, i) && (e[i] = t[i]);

				function n() {
					this.constructor = e
				}
				n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype
			}(r, t), r.prototype.setup = function () {
				return this.form_field_jq = e(this.form_field), this.current_selectedIndex = this.form_field.selectedIndex, this.is_rtl = this.form_field_jq.hasClass("chosen-rtl")
			}, r.prototype.set_up_html = function () {
				var t, i;
				return (t = ["chosen-container"]).push("chosen-container-" + (this.is_multiple ? "multi" : "single")), this.inherit_select_classes && this.form_field.className && t.push(this.form_field.className), this.is_rtl && t.push("chosen-rtl"), i = {
					class: t.join(" "),
					style: "width: " + this.container_width() + ";",
					title: this.form_field.title
				},
                this.form_field.id.length && (i.id = this.form_field.id.replace(/[^\w]/g, "_") + "_chosen"),
                this.container = e("<div />", i),
                this.is_multiple ? this.container.html('<ul class="chosen-choices"><li class="search-field"><input type="text" value="' + this.default_text + '" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chosen-drop"><ul class="chosen-results"></ul></div>') : this.container.html('<a class="chosen-single chosen-default" tabindex="-1"><span>' + this.default_text + '</span><div><b></b></div></a><div class="chosen-drop"><div class="chosen-search"><input type="text" autocomplete="off" /></div><ul class="chosen-results"></ul></div>'),
                this.form_field_jq.hide().after(this.container),
                this.dropdown = this.container.find("div.chosen-drop").first(), this.search_field = this.container.find("input").first(), this.search_results = this.container.find("ul.chosen-results").first(),
                this.search_field_scale(),
                this.search_no_results = this.container.find("li.no-results").first(), this.is_multiple ? (this.search_choices = this.container.find("ul.chosen-choices").first(),
                this.search_container = this.container.find("li.search-field").first()) : (this.search_container = this.container.find("div.chosen-search").first(),
                this.selected_item = this.container.find(".chosen-single").first()),
                this.results_build(),
                this.set_tab_index(), this.set_label_behavior()
			}, r.prototype.on_ready = function () {
				return this.form_field_jq.trigger("chosen:ready", {
					chosen: this
				})
			}, r.prototype.register_observers = function () {
				var e = this;
				return this.container.bind("touchstart.chosen", function (t) {
					return e.container_mousedown(t), t.preventDefault()
				}), this.container.bind("touchend.chosen", function (t) {
					return e.container_mouseup(t), t.preventDefault()
				}), this.container.bind("mousedown.chosen", function (t) {
					e.container_mousedown(t)
				}), this.container.bind("mouseup.chosen", function (t) {
					e.container_mouseup(t)
				}), this.container.bind("mouseenter.chosen", function (t) {
					e.mouse_enter(t)
				}), this.container.bind("mouseleave.chosen", function (t) {
					e.mouse_leave(t)
				}), this.search_results.bind("mouseup.chosen", function (t) {
					e.search_results_mouseup(t)
				}), this.search_results.bind("mouseover.chosen", function (t) {
					e.search_results_mouseover(t)
				}), this.search_results.bind("mouseout.chosen", function (t) {
					e.search_results_mouseout(t)
				}), this.search_results.bind("mousewheel.chosen DOMMouseScroll.chosen", function (t) {
					e.search_results_mousewheel(t)
				}), this.search_results.bind("touchstart.chosen", function (t) {
					e.search_results_touchstart(t)
				}), this.search_results.bind("touchmove.chosen", function (t) {
					e.search_results_touchmove(t)
				}), this.search_results.bind("touchend.chosen", function (t) {
					e.search_results_touchend(t)
				}), this.form_field_jq.bind("chosen:updated.chosen", function (t) {
					e.results_update_field(t)
				}), this.form_field_jq.bind("chosen:activate.chosen", function (t) {
					e.activate_field(t)
				}), this.form_field_jq.bind("chosen:open.chosen", function (t) {
					e.container_mousedown(t)
				}), this.form_field_jq.bind("chosen:close.chosen", function (t) {
					e.input_blur(t)
				}), this.search_field.bind("blur.chosen", function (t) {
					e.input_blur(t)
				}), this.search_field.bind("keyup.chosen", function (t) {
					e.keyup_checker(t)
				}), this.search_field.bind("keydown.chosen", function (t) {
					e.keydown_checker(t)
				}), this.search_field.bind("focus.chosen", function (t) {
					e.input_focus(t)
				}), this.search_field.bind("cut.chosen", function (t) {
					e.clipboard_event_checker(t)
				}), this.search_field.bind("paste.chosen", function (t) {
					e.clipboard_event_checker(t)
				}), this.is_multiple ? this.search_choices.bind("click.chosen", function (t) {
					e.choices_click(t)
				}) : this.container.bind("click.chosen", function (e) {
					e.preventDefault()
				})
			}, r.prototype.destroy = function () {
				return e(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action), this.search_field[0].tabIndex && (this.form_field_jq[0].tabIndex = this.search_field[0].tabIndex), this.container.remove(), this.form_field_jq.removeData("chosen"), this.form_field_jq.show()
			}, r.prototype.search_field_disabled = function () {
				return this.is_disabled = this.form_field_jq[0].disabled, this.is_disabled ? (this.container.addClass("chosen-disabled"), this.search_field[0].disabled = !0, this.is_multiple || this.selected_item.unbind("focus.chosen", this.activate_action), this.close_field()) : (this.container.removeClass("chosen-disabled"), this.search_field[0].disabled = !1, this.is_multiple ? void 0 : this.selected_item.bind("focus.chosen", this.activate_action))
			}, r.prototype.container_mousedown = function (t) {
				if (!this.is_disabled && (t && "mousedown" === t.type && !this.results_showing && t.preventDefault(), null == t || !e(t.target).hasClass("search-choice-close"))) return this.active_field ? this.is_multiple || !t || e(t.target)[0] !== this.selected_item[0] && !e(t.target).parents("a.chosen-single").length || (t.preventDefault(), this.results_toggle()) : (this.is_multiple && this.search_field.val(""), e(this.container[0].ownerDocument).bind("click.chosen", this.click_test_action), this.results_show()), this.activate_field()
			}, r.prototype.container_mouseup = function (e) {
				if ("ABBR" === e.target.nodeName && !this.is_disabled) return this.results_reset(e)
			}, r.prototype.search_results_mousewheel = function (e) {
				var t;
				if (e.originalEvent && (t = e.originalEvent.deltaY || -e.originalEvent.wheelDelta || e.originalEvent.detail), null != t) return e.preventDefault(), "DOMMouseScroll" === e.type && (t *= 40), this.search_results.scrollTop(t + this.search_results.scrollTop())
			}, r.prototype.blur_test = function (e) {
				if (!this.active_field && this.container.hasClass("chosen-container-active")) return this.close_field()
			}, r.prototype.close_field = function () {
				return e(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action), this.active_field = !1, this.results_hide(), this.container.removeClass("chosen-container-active"), this.clear_backstroke(), this.show_search_field_default(), this.search_field_scale()
			}, r.prototype.activate_field = function () {
				return this.container.addClass("chosen-container-active"), this.active_field = !0, this.search_field.val(this.search_field.val()), this.search_field.focus()
			}, r.prototype.test_active_click = function (t) {
				var i;
				return (i = e(t.target).closest(".chosen-container")).length && this.container[0] === i[0] ? this.active_field = !0 : this.close_field()
			}, r.prototype.results_build = function () {
				return this.parsing = !0, this.selected_option_count = null, this.results_data = n.select_to_array(this.form_field), this.is_multiple ? this.search_choices.find("li.search-choice").remove() : this.is_multiple || (this.single_set_selected_text(), this.disable_search || this.form_field.options.length <= this.disable_search_threshold ? (this.search_field[0].readOnly = !0, this.container.addClass("chosen-container-single-nosearch")) : (this.search_field[0].readOnly = !1, this.container.removeClass("chosen-container-single-nosearch"))), this.update_results_content(this.results_option_build({
					first: !0
				})), this.search_field_disabled(), this.show_search_field_default(), this.search_field_scale(), this.parsing = !1
			}, r.prototype.result_do_highlight = function (e) {
				var t, i, n, s, r;
				if (e.length) {
					if (this.result_clear_highlight(), this.result_highlight = e, this.result_highlight.addClass("highlighted"), s = (n = parseInt(this.search_results.css("maxHeight"), 10)) + (r = this.search_results.scrollTop()), (t = (i = this.result_highlight.position().top + this.search_results.scrollTop()) + this.result_highlight.outerHeight()) >= s) return this.search_results.scrollTop(t - n > 0 ? t - n : 0);
					if (i < r) return this.search_results.scrollTop(i)
				}
			}, r.prototype.result_clear_highlight = function () {
				return this.result_highlight && this.result_highlight.removeClass("highlighted"), this.result_highlight = null
			}, r.prototype.results_show = function () {
				return this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", {
					chosen: this
				}), !1) : (this.container.addClass("chosen-with-drop"), this.results_showing = !0, this.search_field.focus(), this.search_field.val(this.search_field.val()), this.winnow_results(), this.form_field_jq.trigger("chosen:showing_dropdown", {
					chosen: this
				}))
			}, r.prototype.update_results_content = function (e) {
				return this.search_results.html(e)
			}, r.prototype.results_hide = function () {
				return this.results_showing && (this.result_clear_highlight(), this.container.removeClass("chosen-with-drop"), this.form_field_jq.trigger("chosen:hiding_dropdown", {
					chosen: this
				})), this.results_showing = !1
			}, r.prototype.set_tab_index = function (e) {
				var t;
				if (this.form_field.tabIndex) return t = this.form_field.tabIndex, this.form_field.tabIndex = -1, this.search_field[0].tabIndex = t
			}, r.prototype.set_label_behavior = function () {
				var t = this;
				if (this.form_field_label = this.form_field_jq.parents("label"), !this.form_field_label.length && this.form_field.id.length && (this.form_field_label = e("label[for='" + this.form_field.id + "']")), this.form_field_label.length > 0) return this.form_field_label.bind("click.chosen", function (e) {
					return t.is_multiple ? t.container_mousedown(e) : t.activate_field()
				})
			}, r.prototype.show_search_field_default = function () {
				return this.is_multiple && this.choices_count() < 1 && !this.active_field ? (this.search_field.val(this.default_text), this.search_field.addClass("default")) : (this.search_field.val(""), this.search_field.removeClass("default"))
			}, r.prototype.search_results_mouseup = function (t) {
				var i;
				if ((i = e(t.target).hasClass("active-result") ? e(t.target) : e(t.target).parents(".active-result").first()).length) return this.result_highlight = i, this.result_select(t), this.search_field.focus()
			}, r.prototype.search_results_mouseover = function (t) {
				var i;
				if (i = e(t.target).hasClass("active-result") ? e(t.target) : e(t.target).parents(".active-result").first()) return this.result_do_highlight(i)
			}, r.prototype.search_results_mouseout = function (t) {
				if (e(t.target).hasClass("active-result")) return this.result_clear_highlight()
			}, r.prototype.choice_build = function (t) {
				var i, n, s = this;
				return i = e("<li />", {
					class: "search-choice"
				}).html("<span>" + this.choice_label(t) + "</span>"), t.disabled ? i.addClass("search-choice-disabled") : ((n = e("<a />", {
					class: "search-choice-close",
					"data-option-array-index": t.array_index
				})).bind("click.chosen", function (e) {
					return s.choice_destroy_link_click(e)
				}), i.append(n)), this.search_container.before(i)
			}, r.prototype.choice_destroy_link_click = function (t) {
				if (t.preventDefault(), t.stopPropagation(), !this.is_disabled) return this.choice_destroy(e(t.target))
			}, r.prototype.choice_destroy = function (e) {
				if (this.result_deselect(e[0].getAttribute("data-option-array-index"))) return this.show_search_field_default(), this.is_multiple && this.choices_count() > 0 && this.search_field.val().length < 1 && this.results_hide(), e.parents("li").first().remove(), this.search_field_scale()
			}, r.prototype.results_reset = function () {
				if (this.reset_single_select_options(), this.form_field.options[0].selected = !0, this.single_set_selected_text(), this.show_search_field_default(), this.results_reset_cleanup(), this.form_field_jq.trigger("change"), this.active_field) return this.results_hide()
			}, r.prototype.results_reset_cleanup = function () {
				return this.current_selectedIndex = this.form_field.selectedIndex, this.selected_item.find("abbr").remove()
			}, r.prototype.result_select = function (e) {
				var t, i;
				if (this.result_highlight) return t = this.result_highlight, this.result_clear_highlight(), this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", {
					chosen: this
				}), !1) : (this.is_multiple ? t.removeClass("active-result") : this.reset_single_select_options(), t.addClass("result-selected"), (i = this.results_data[t[0].getAttribute("data-option-array-index")]).selected = !0, this.form_field.options[i.options_index].selected = !0, this.selected_option_count = null, this.is_multiple ? this.choice_build(i) : this.single_set_selected_text(this.choice_label(i)), (e.metaKey || e.ctrlKey) && this.is_multiple || this.results_hide(), this.search_field.val(""), (this.is_multiple || this.form_field.selectedIndex !== this.current_selectedIndex) && this.form_field_jq.trigger("change", {
					selected: this.form_field.options[i.options_index].value
				}), this.current_selectedIndex = this.form_field.selectedIndex, e.preventDefault(), this.search_field_scale())
			}, r.prototype.single_set_selected_text = function (e) {
				return null == e && (e = this.default_text), e === this.default_text ? this.selected_item.addClass("chosen-default") : (this.single_deselect_control_build(), this.selected_item.removeClass("chosen-default")), this.selected_item.find("span").html(e)
			}, r.prototype.result_deselect = function (e) {
				var t;
				return t = this.results_data[e], !this.form_field.options[t.options_index].disabled && (t.selected = !1, this.form_field.options[t.options_index].selected = !1, this.selected_option_count = null, this.result_clear_highlight(), this.results_showing && this.winnow_results(), this.form_field_jq.trigger("change", {
					deselected: this.form_field.options[t.options_index].value
				}), this.search_field_scale(), !0)
			}, r.prototype.single_deselect_control_build = function () {
				if (this.allow_single_deselect) return this.selected_item.find("abbr").length || this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>'), this.selected_item.addClass("chosen-single-with-deselect")
			}, r.prototype.get_search_text = function () {
				return e("<div/>").text(e.trim(this.search_field.val())).html()
			}, r.prototype.winnow_results_set_highlight = function () {
				var e, t;
				if (null != (e = (t = this.is_multiple ? [] : this.search_results.find(".result-selected.active-result")).length ? t.first() : this.search_results.find(".active-result").first())) return this.result_do_highlight(e)
			}, r.prototype.no_results = function (t) {
				var i;
				return (i = e('<li class="no-results">' + this.results_none_found + ' "<span></span>"</li>')).find("span").first().html(t), this.search_results.append(i), this.form_field_jq.trigger("chosen:no_results", {
					chosen: this
				})
			}, r.prototype.no_results_clear = function () {
				return this.search_results.find(".no-results").remove()
			}, r.prototype.keydown_arrow = function () {
				var e;
				return this.results_showing && this.result_highlight ? (e = this.result_highlight.nextAll("li.active-result").first()) ? this.result_do_highlight(e) : void 0 : this.results_show()
			}, r.prototype.keyup_arrow = function () {
				var e;
				return this.results_showing || this.is_multiple ? this.result_highlight ? (e = this.result_highlight.prevAll("li.active-result")).length ? this.result_do_highlight(e.first()) : (this.choices_count() > 0 && this.results_hide(), this.result_clear_highlight()) : void 0 : this.results_show()
			}, r.prototype.keydown_backstroke = function () {
				var e;
				return this.pending_backstroke ? (this.choice_destroy(this.pending_backstroke.find("a").first()), this.clear_backstroke()) : (e = this.search_container.siblings("li.search-choice").last()).length && !e.hasClass("search-choice-disabled") ? (this.pending_backstroke = e, this.single_backstroke_delete ? this.keydown_backstroke() : this.pending_backstroke.addClass("search-choice-focus")) : void 0
			}, r.prototype.clear_backstroke = function () {
				return this.pending_backstroke && this.pending_backstroke.removeClass("search-choice-focus"), this.pending_backstroke = null
			}, r.prototype.keydown_checker = function (e) {
				var t, i;
				switch (t = null != (i = e.which) ? i : e.keyCode, this.search_field_scale(), 8 !== t && this.pending_backstroke && this.clear_backstroke(), t) {
					case 8:
						this.backstroke_length = this.search_field.val().length;
						break;
					case 9:
						this.results_showing && !this.is_multiple && this.result_select(e), this.mouse_on_container = !1;
						break;
					case 13:
						this.results_showing && e.preventDefault();
						break;
					case 32:
						this.disable_search && e.preventDefault();
						break;
					case 38:
						e.preventDefault(), this.keyup_arrow();
						break;
					case 40:
						e.preventDefault(), this.keydown_arrow()
				}
			}, r.prototype.search_field_scale = function () {
				var t, i, n, s, r, a, o, l;
				if (this.is_multiple) {
					for (0, a = 0, s = "position:absolute; left: -1000px; top: -1000px; display:none;", o = 0, l = (r = ["font-size", "font-style", "font-weight", "font-family", "line-height", "text-transform", "letter-spacing"]).length; o < l; o++) s += (n = r[o]) + ":" + this.search_field.css(n) + ";";
					return (t = e("<div />", {
						style: s
					})).text(this.search_field.val()), e("body").append(t), a = t.width() + 25, t.remove(), a > (i = this.container.outerWidth()) - 10 && (a = i - 10), this.search_field.css({
						width: a + "px"
					})
				}
			}, r
		}()
	}.call(this),
	function (e) {
		"function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : jQuery)
	}(function (e) {
		var t, i = navigator.userAgent,
			n = /iphone/i.test(i),
			s = /chrome/i.test(i),
			r = /android/i.test(i);
		e.mask = {
			definitions: {
				9: "[0-9]",
				a: "[A-Za-z]",
				"*": "[A-Za-z0-9]"
			},
			autoclear: !0,
			dataName: "rawMaskFn",
			placeholder: "_"
		}, e.fn.extend({
			caret: function (e, t) {
				var i;
				if (0 !== this.length && !this.is(":hidden")) return "number" == typeof e ? (t = "number" == typeof t ? t : e, this.each(function () {
					this.setSelectionRange ? this.setSelectionRange(e, t) : this.createTextRange && ((i = this.createTextRange()).collapse(!0), i.moveEnd("character", t), i.moveStart("character", e), i.select())
				})) : (this[0].setSelectionRange ? (e = this[0].selectionStart, t = this[0].selectionEnd) : document.selection && document.selection.createRange && (i = document.selection.createRange(), e = 0 - i.duplicate().moveStart("character", -1e5), t = e + i.text.length), {
					begin: e,
					end: t
				})
			},
			unmask: function () {
				return this.trigger("unmask")
			},
			mask: function (i, a) {
				var o, l, c, d, h, p, u;
				if (!i && this.length > 0) {
					var f = e(this[0]).data(e.mask.dataName);
					return f ? f() : void 0
				}
				return a = e.extend({
					autoclear: e.mask.autoclear,
					placeholder: e.mask.placeholder,
					completed: null
				}, a), o = e.mask.definitions, l = [], c = p = i.length, d = null, e.each(i.split(""), function (e, t) {
					"?" == t ? (p--, c = e) : o[t] ? (l.push(new RegExp(o[t])), null === d && (d = l.length - 1), c > e && (h = l.length - 1)) : l.push(null)
				}), this.trigger("unmask").each(function () {
					function f() {
						if (a.completed) {
							for (var e = d; h >= e; e++)
								if (l[e] && T[e] === m(e)) return;
							a.completed.call(x)
						}
					}

					function m(e) {
						return a.placeholder.charAt(e < a.placeholder.length ? e : 0)
					}

					function g(e) {
						for (; ++e < p && !l[e];);
						return e
					}

					function v(e, t) {
						var i, n;
						if (!(0 > e)) {
							for (i = e, n = g(t); p > i; i++)
								if (l[i]) {
									if (!(p > n && l[i].test(T[n]))) break;
									T[i] = T[n], T[n] = m(n), n = g(n)
								}
							_(), x.caret(Math.max(d, e))
						}
					}

					function y() {
						w(), x.val() != C && x.change()
					}

					function b(e, t) {
						var i;
						for (i = e; t > i && p > i; i++) l[i] && (T[i] = m(i))
					}

					function _() {
						x.val(T.join(""))
					}

					function w(e) {
						var t, i, n, s = x.val(),
							r = -1;
						for (t = 0, n = 0; p > t; t++)
							if (l[t]) {
								for (T[t] = m(t); n++ < s.length;)
									if (i = s.charAt(n - 1), l[t].test(i)) {
										T[t] = i, r = t;
										break
									}
								if (n > s.length) {
									b(t + 1, p);
									break
								}
							} else T[t] === s.charAt(n) && n++, c > t && (r = t);
						return e ? _() : c > r + 1 ? a.autoclear || T.join("") === S ? (x.val() && x.val(""), b(0, p)) : _() : (_(), x.val(x.val().substring(0, r + 1))), c ? t : d
					}
					var x = e(this),
						T = e.map(i.split(""), function (e, t) {
							return "?" != e ? o[e] ? m(t) : e : void 0
						}),
						S = T.join(""),
						C = x.val();
					x.data(e.mask.dataName, function () {
						return e.map(T, function (e, t) {
							return l[t] && e != m(t) ? e : null
						}).join("")
					}), x.one("unmask", function () {
						x.off(".mask").removeData(e.mask.dataName)
					}).on("focus.mask", function () {
						var e;
						x.prop("readonly") || (clearTimeout(t), C = x.val(), e = w(), t = setTimeout(function () {
							x.get(0) === document.activeElement && (_(), e == i.replace("?", "").length ? x.caret(0, e) : x.caret(e))
						}, 10))
					}).on("blur.mask", y).on("keydown.mask", function (e) {
						if (!x.prop("readonly")) {
							var t, i, s, r = e.which || e.keyCode;
							u = x.val(), 8 === r || 46 === r || n && 127 === r ? (i = (t = x.caret()).begin, (s = t.end) - i == 0 && (i = 46 !== r ? function (e) {
								for (; --e >= 0 && !l[e];);
								return e
							}(i) : s = g(i - 1), s = 46 === r ? g(s) : s), b(i, s), v(i, s - 1), e.preventDefault()) : 13 === r ? y.call(this, e) : 27 === r && (x.val(C), x.caret(0, w()), e.preventDefault())
						}
					}).on("keypress.mask", function (t) {
						if (!x.prop("readonly")) {
							var i, n, s, a = t.which || t.keyCode,
								o = x.caret();
							t.ctrlKey || t.altKey || t.metaKey || 32 > a || !a || 13 === a || (o.end - o.begin != 0 && (b(o.begin, o.end), v(o.begin, o.end - 1)), i = g(o.begin - 1), p > i && (n = String.fromCharCode(a), l[i].test(n)) && (function (e) {
								var t, i, n, s;
								for (t = e, i = m(e); p > t; t++)
									if (l[t]) {
										if (n = g(t), s = T[t], T[t] = i, !(p > n && l[n].test(s))) break;
										i = s
									}
							}(i), T[i] = n, _(), s = g(i), r ? setTimeout(function () {
								e.proxy(e.fn.caret, x, s)()
							}, 0) : x.caret(s), o.begin <= h && f()), t.preventDefault())
						}
					}).on("input.mask paste.mask", function () {
						x.prop("readonly") || setTimeout(function () {
							var e = w(!0);
							x.caret(e), f()
						}, 0)
					}), s && r && x.off("input.mask").on("input.mask", function () {
						var e = x.val(),
							t = x.caret();
						if (u && u.length && u.length > e.length) {
							for (w(!0); t.begin > 0 && !l[t.begin - 1];) t.begin--;
							if (0 === t.begin)
								for (; t.begin < d && !l[t.begin];) t.begin++;
							x.caret(t.begin, t.begin)
						} else {
							for (w(!0); t.begin < p && !l[t.begin];) t.begin++;
							x.caret(t.begin, t.begin)
						}
						f()
					}), w()
				})
			}
		})
	}),
	function (e, t) {
		"use strict";
		"function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
			t(e, i)
		}) : "object" == typeof module && module.exports ? module.exports = t(e, require("jquery")) : e.jQueryBridget = t(e, e.jQuery)
	}(window, function (e, t) {
		"use strict";
		var i = Array.prototype.slice,
			n = e.console,
			s = void 0 === n ? function () {} : function (e) {
				n.error(e)
			};

		function r(n, r, o) {
			(o = o || t || e.jQuery) && (r.prototype.option || (r.prototype.option = function (e) {
				o.isPlainObject(e) && (this.options = o.extend(!0, this.options, e))
			}), o.fn[n] = function (e) {
				var t;
				return "string" == typeof e ? function (e, t, i) {
					var r, a = "$()." + n + '("' + t + '")';
					return e.each(function (e, l) {
						var c = o.data(l, n);
						if (c) {
							var d = c[t];
							if (d && "_" != t.charAt(0)) {
								var h = d.apply(c, i);
								r = void 0 === r ? h : r
							} else s(a + " is not a valid method")
						} else s(n + " not initialized. Cannot call methods, i.e. " + a)
					}), void 0 !== r ? r : e
				}(this, e, i.call(arguments, 1)) : (t = e, this.each(function (e, i) {
					var s = o.data(i, n);
					s ? (s.option(t), s._init()) : (s = new r(i, t), o.data(i, n, s))
				}), this)
			}, a(o))
		}

		function a(e) {
			!e || e && e.bridget || (e.bridget = r)
		}
		return a(t || e.jQuery), r
	}),
	function (e, t) {
		"function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == typeof module && module.exports ? module.exports = t() : e.EvEmitter = t()
	}(this, function () {
		function e() {}
		var t = e.prototype;
		return t.on = function (e, t) {
			if (e && t) {
				var i = this._events = this._events || {},
					n = i[e] = i[e] || [];
				return -1 == n.indexOf(t) && n.push(t), this
			}
		}, t.once = function (e, t) {
			if (e && t) {
				this.on(e, t);
				var i = this._onceEvents = this._onceEvents || {};
				return (i[e] = i[e] || [])[t] = !0, this
			}
		}, t.off = function (e, t) {
			var i = this._events && this._events[e];
			if (i && i.length) {
				var n = i.indexOf(t);
				return -1 != n && i.splice(n, 1), this
			}
		}, t.emitEvent = function (e, t) {
			var i = this._events && this._events[e];
			if (i && i.length) {
				var n = 0,
					s = i[n];
				t = t || [];
				for (var r = this._onceEvents && this._onceEvents[e]; s;) {
					var a = r && r[s];
					a && (this.off(e, s), delete r[s]), s.apply(this, t), s = i[n += a ? 0 : 1]
				}
				return this
			}
		}, e
	}),
	function (e, t) {
		"use strict";
		"function" == typeof define && define.amd ? define("get-size/get-size", [], function () {
			return t()
		}) : "object" == typeof module && module.exports ? module.exports = t() : e.getSize = t()
	}(window, function () {
		"use strict";

		function e(e) {
			var t = parseFloat(e);
			return -1 == e.indexOf("%") && !isNaN(t) && t
		}
		var t = "undefined" == typeof console ? function () {} : function (e) {},
			i = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
			n = i.length;

		function s(e) {
			var i = getComputedStyle(e);
			return i || t("Style returned " + i + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), i
		}
		var r, a = !1;

		function o(t) {
			if (function () {
					if (!a) {
						a = !0;
						var t = document.createElement("div");
						t.style.width = "200px", t.style.padding = "1px 2px 3px 4px", t.style.borderStyle = "solid", t.style.borderWidth = "1px 2px 3px 4px", t.style.boxSizing = "border-box";
						var i = document.body || document.documentElement;
						i.appendChild(t);
						var n = s(t);
						o.isBoxSizeOuter = r = 200 == e(n.width), i.removeChild(t)
					}
				}(), "string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
				var l = s(t);
				if ("none" == l.display) return function () {
					for (var e = {
							width: 0,
							height: 0,
							innerWidth: 0,
							innerHeight: 0,
							outerWidth: 0,
							outerHeight: 0
						}, t = 0; t < n; t++) e[i[t]] = 0;
					return e
				}();
				var c = {};
				c.width = t.offsetWidth, c.height = t.offsetHeight;
				for (var d = c.isBorderBox = "border-box" == l.boxSizing, h = 0; h < n; h++) {
					var p = i[h],
						u = l[p],
						f = parseFloat(u);
					c[p] = isNaN(f) ? 0 : f
				}
				var m = c.paddingLeft + c.paddingRight,
					g = c.paddingTop + c.paddingBottom,
					v = c.marginLeft + c.marginRight,
					y = c.marginTop + c.marginBottom,
					b = c.borderLeftWidth + c.borderRightWidth,
					_ = c.borderTopWidth + c.borderBottomWidth,
					w = d && r,
					x = e(l.width);
				!1 !== x && (c.width = x + (w ? 0 : m + b));
				var T = e(l.height);
				return !1 !== T && (c.height = T + (w ? 0 : g + _)), c.innerWidth = c.width - (m + b), c.innerHeight = c.height - (g + _), c.outerWidth = c.width + v, c.outerHeight = c.height + y, c
			}
		}
		return o
	}),
	function (e, t) {
		"use strict";
		"function" == typeof define && define.amd ? define("matches-selector/matches-selector", t) : "object" == typeof module && module.exports ? module.exports = t() : e.matchesSelector = t()
	}(window, function () {
		"use strict";
		var e = function () {
			var e = Element.prototype;
			if (e.matches) return "matches";
			if (e.matchesSelector) return "matchesSelector";
			for (var t = ["webkit", "moz", "ms", "o"], i = 0; i < t.length; i++) {
				var n = t[i] + "MatchesSelector";
				if (e[n]) return n
			}
		}();
		return function (t, i) {
			return t[e](i)
		}
	}),
	function (e, t) {
		"use strict";
		"function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["matches-selector/matches-selector"], function (i) {
			return t(e, i)
		}) : "object" == typeof module && module.exports ? module.exports = t(e, require("desandro-matches-selector")) : e.fizzyUIUtils = t(e, e.matchesSelector)
	}(window, function (e, t) {
		var i = {
				extend: function (e, t) {
					for (var i in t) e[i] = t[i];
					return e
				},
				modulo: function (e, t) {
					return (e % t + t) % t
				},
				makeArray: function (e) {
					var t = [];
					if (Array.isArray(e)) t = e;
					else if (e && "number" == typeof e.length)
						for (var i = 0; i < e.length; i++) t.push(e[i]);
					else t.push(e);
					return t
				},
				removeFrom: function (e, t) {
					var i = e.indexOf(t); - 1 != i && e.splice(i, 1)
				},
				getParent: function (e, i) {
					for (; e != document.body;)
						if (e = e.parentNode, t(e, i)) return e
				},
				getQueryElement: function (e) {
					return "string" == typeof e ? document.querySelector(e) : e
				},
				handleEvent: function (e) {
					var t = "on" + e.type;
					this[t] && this[t](e)
				},
				filterFindElements: function (e, n) {
					e = i.makeArray(e);
					var s = [];
					return e.forEach(function (e) {
						if (e instanceof HTMLElement)
							if (n) {
								t(e, n) && s.push(e);
								for (var i = e.querySelectorAll(n), r = 0; r < i.length; r++) s.push(i[r])
							} else s.push(e)
					}), s
				},
				debounceMethod: function (e, t, i) {
					var n = e.prototype[t],
						s = t + "Timeout";
					e.prototype[t] = function () {
						var e = this[s];
						e && clearTimeout(e);
						var t = arguments,
							r = this;
						this[s] = setTimeout(function () {
							n.apply(r, t), delete r[s]
						}, i || 100)
					}
				},
				docReady: function (e) {
					"complete" == document.readyState ? e() : document.addEventListener("DOMContentLoaded", e)
				},
				toDashed: function (e) {
					return e.replace(/(.)([A-Z])/g, function (e, t, i) {
						return t + "-" + i
					}).toLowerCase()
				}
			},
			n = e.console;
		return i.htmlInit = function (t, s) {
			i.docReady(function () {
				var r = i.toDashed(s),
					a = "data-" + r,
					o = document.querySelectorAll("[" + a + "]"),
					l = document.querySelectorAll(".js-" + r),
					c = i.makeArray(o).concat(i.makeArray(l)),
					d = a + "-options",
					h = e.jQuery;
				c.forEach(function (e) {
					var i, r = e.getAttribute(a) || e.getAttribute(d);
					try {
						i = r && JSON.parse(r)
					} catch (t) {
						return void(n && n.error("Error parsing " + a + " on " + e.className + ": " + t))
					}
					var o = new t(e, i);
					h && h.data(e, s, o)
				})
			})
		}, i
	}),
	function (e, t) {
		"function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], function (i, n) {
			return t(e, i, n)
		}) : "object" == typeof module && module.exports ? module.exports = t(e, require("ev-emitter"), require("get-size")) : (e.Outlayer = {}, e.Outlayer.Item = t(e, e.EvEmitter, e.getSize))
	}(window, function (e, t, i) {
		"use strict";
		var n = document.documentElement.style,
			s = "string" == typeof n.transition ? "transition" : "WebkitTransition",
			r = "string" == typeof n.transform ? "transform" : "WebkitTransform",
			a = {
				WebkitTransition: "webkitTransitionEnd",
				transition: "transitionend"
			}[s],
			o = [r, s, s + "Duration", s + "Property"];

		function l(e, t) {
			e && (this.element = e, this.layout = t, this.position = {
				x: 0,
				y: 0
			}, this._create())
		}
		var c = l.prototype = Object.create(t.prototype);
		c.constructor = l, c._create = function () {
			this._transn = {
				ingProperties: {},
				clean: {},
				onEnd: {}
			}, this.css({
				position: "absolute"
			})
		}, c.handleEvent = function (e) {
			var t = "on" + e.type;
			this[t] && this[t](e)
		}, c.getSize = function () {
			this.size = i(this.element)
		}, c.css = function (e) {
			var t = this.element.style;
			for (var i in e) {
				t[o[i] || i] = e[i]
			}
		}, c.getPosition = function () {
			var e = getComputedStyle(this.element),
				t = this.layout._getOption("originLeft"),
				i = this.layout._getOption("originTop"),
				n = e[t ? "left" : "right"],
				s = e[i ? "top" : "bottom"],
				r = this.layout.size,
				a = -1 != n.indexOf("%") ? parseFloat(n) / 100 * r.width : parseInt(n, 10),
				o = -1 != s.indexOf("%") ? parseFloat(s) / 100 * r.height : parseInt(s, 10);
			a = isNaN(a) ? 0 : a, o = isNaN(o) ? 0 : o, a -= t ? r.paddingLeft : r.paddingRight, o -= i ? r.paddingTop : r.paddingBottom, this.position.x = a, this.position.y = o
		}, c.layoutPosition = function () {
			var e = this.layout.size,
				t = {},
				i = this.layout._getOption("originLeft"),
				n = this.layout._getOption("originTop"),
				s = i ? "paddingLeft" : "paddingRight",
				r = i ? "left" : "right",
				a = i ? "right" : "left",
				o = this.position.x + e[s];
			t[r] = this.getXValue(o), t[a] = "";
			var l = n ? "paddingTop" : "paddingBottom",
				c = n ? "top" : "bottom",
				d = n ? "bottom" : "top",
				h = this.position.y + e[l];
			t[c] = this.getYValue(h), t[d] = "", this.css(t), this.emitEvent("layout", [this])
		}, c.getXValue = function (e) {
			var t = this.layout._getOption("horizontal");
			return this.layout.options.percentPosition && !t ? e / this.layout.size.width * 100 + "%" : e + "px"
		}, c.getYValue = function (e) {
			var t = this.layout._getOption("horizontal");
			return this.layout.options.percentPosition && t ? e / this.layout.size.height * 100 + "%" : e + "px"
		}, c._transitionTo = function (e, t) {
			this.getPosition();
			var i = this.position.x,
				n = this.position.y,
				s = parseInt(e, 10),
				r = parseInt(t, 10),
				a = s === this.position.x && r === this.position.y;
			if (this.setPosition(e, t), !a || this.isTransitioning) {
				var o = e - i,
					l = t - n,
					c = {};
				c.transform = this.getTranslate(o, l), this.transition({
					to: c,
					onTransitionEnd: {
						transform: this.layoutPosition
					},
					isCleaning: !0
				})
			} else this.layoutPosition()
		}, c.getTranslate = function (e, t) {
			return "translate3d(" + (e = this.layout._getOption("originLeft") ? e : -e) + "px, " + (t = this.layout._getOption("originTop") ? t : -t) + "px, 0)"
		}, c.goTo = function (e, t) {
			this.setPosition(e, t), this.layoutPosition()
		}, c.moveTo = c._transitionTo, c.setPosition = function (e, t) {
			this.position.x = parseInt(e, 10), this.position.y = parseInt(t, 10)
		}, c._nonTransition = function (e) {
			for (var t in this.css(e.to), e.isCleaning && this._removeStyles(e.to), e.onTransitionEnd) e.onTransitionEnd[t].call(this)
		}, c._transition = function (e) {
			if (parseFloat(this.layout.options.transitionDuration)) {
				var t = this._transn;
				for (var i in e.onTransitionEnd) t.onEnd[i] = e.onTransitionEnd[i];
				for (i in e.to) t.ingProperties[i] = !0, e.isCleaning && (t.clean[i] = !0);
				if (e.from) {
					this.css(e.from);
					this.element.offsetHeight;
					null
				}
				this.enableTransition(e.to), this.css(e.to), this.isTransitioning = !0
			} else this._nonTransition(e)
		};
		var d = "opacity," + (o.transform || "transform").replace(/([A-Z])/g, function (e) {
			return "-" + e.toLowerCase()
		});
		c.enableTransition = function () {
			this.isTransitioning || (this.css({
				transitionProperty: d,
				transitionDuration: this.layout.options.transitionDuration
			}), this.element.addEventListener(a, this, !1))
		}, c.transition = l.prototype[s ? "_transition" : "_nonTransition"], c.onwebkitTransitionEnd = function (e) {
			this.ontransitionend(e)
		}, c.onotransitionend = function (e) {
			this.ontransitionend(e)
		};
		var h = {
			"-webkit-transform": "transform"
		};
		c.ontransitionend = function (e) {
			if (e.target === this.element) {
				var t = this._transn,
					i = h[e.propertyName] || e.propertyName;
				if (delete t.ingProperties[i], function (e) {
						for (var t in e) return !1;
						return !0
					}(t.ingProperties) && this.disableTransition(), i in t.clean && (this.element.style[e.propertyName] = "", delete t.clean[i]), i in t.onEnd) t.onEnd[i].call(this), delete t.onEnd[i];
				this.emitEvent("transitionEnd", [this])
			}
		}, c.disableTransition = function () {
			this.removeTransitionStyles(), this.element.removeEventListener(a, this, !1), this.isTransitioning = !1
		}, c._removeStyles = function (e) {
			var t = {};
			for (var i in e) t[i] = "";
			this.css(t)
		};
		var p = {
			transitionProperty: "",
			transitionDuration: ""
		};
		return c.removeTransitionStyles = function () {
			this.css(p)
		}, c.removeElem = function () {
			this.element.parentNode.removeChild(this.element), this.css({
				display: ""
			}), this.emitEvent("remove", [this])
		}, c.remove = function () {
			s && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function () {
				this.removeElem()
			}), this.hide()) : this.removeElem()
		}, c.reveal = function () {
			delete this.isHidden, this.css({
				display: ""
			});
			var e = this.layout.options,
				t = {};
			t[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd, this.transition({
				from: e.hiddenStyle,
				to: e.visibleStyle,
				isCleaning: !0,
				onTransitionEnd: t
			})
		}, c.onRevealTransitionEnd = function () {
			this.isHidden || this.emitEvent("reveal")
		}, c.getHideRevealTransitionEndProperty = function (e) {
			var t = this.layout.options[e];
			if (t.opacity) return "opacity";
			for (var i in t) return i
		}, c.hide = function () {
			this.isHidden = !0, this.css({
				display: ""
			});
			var e = this.layout.options,
				t = {};
			t[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd, this.transition({
				from: e.visibleStyle,
				to: e.hiddenStyle,
				isCleaning: !0,
				onTransitionEnd: t
			})
		}, c.onHideTransitionEnd = function () {
			this.isHidden && (this.css({
				display: "none"
			}), this.emitEvent("hide"))
		}, c.destroy = function () {
			this.css({
				position: "",
				left: "",
				right: "",
				top: "",
				bottom: "",
				transition: "",
				transform: ""
			})
		}, l
	}),
	function (e, t) {
		"use strict";
		"function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (i, n, s, r) {
			return t(e, i, n, s, r)
		}) : "object" == typeof module && module.exports ? module.exports = t(e, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : e.Outlayer = t(e, e.EvEmitter, e.getSize, e.fizzyUIUtils, e.Outlayer.Item)
	}(window, function (e, t, i, n, s) {
		"use strict";
		var r = e.console,
			a = e.jQuery,
			o = function () {},
			l = 0,
			c = {};

		function d(e, t) {
			var i = n.getQueryElement(e);
			if (i) {
				this.element = i, a && (this.$element = a(this.element)), this.options = n.extend({}, this.constructor.defaults), this.option(t);
				var s = ++l;
				this.element.outlayerGUID = s, c[s] = this, this._create(), this._getOption("initLayout") && this.layout()
			} else r && r.error("Bad element for " + this.constructor.namespace + ": " + (i || e))
		}
		d.namespace = "outlayer", d.Item = s, d.defaults = {
			containerStyle: {
				position: "relative"
			},
			initLayout: !0,
			originLeft: !0,
			originTop: !0,
			resize: !0,
			resizeContainer: !0,
			transitionDuration: "0.4s",
			hiddenStyle: {
				opacity: 0,
				transform: "scale(0.001)"
			},
			visibleStyle: {
				opacity: 1,
				transform: "scale(1)"
			}
		};
		var h = d.prototype;

		function p(e) {
			function t() {
				e.apply(this, arguments)
			}
			return t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t
		}
		return n.extend(h, t.prototype), h.option = function (e) {
			n.extend(this.options, e)
		}, h._getOption = function (e) {
			var t = this.constructor.compatOptions[e];
			return t && void 0 !== this.options[t] ? this.options[t] : this.options[e]
		}, d.compatOptions = {
			initLayout: "isInitLayout",
			horizontal: "isHorizontal",
			layoutInstant: "isLayoutInstant",
			originLeft: "isOriginLeft",
			originTop: "isOriginTop",
			resize: "isResizeBound",
			resizeContainer: "isResizingContainer"
		}, h._create = function () {
			this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), n.extend(this.element.style, this.options.containerStyle), this._getOption("resize") && this.bindResize()
		}, h.reloadItems = function () {
			this.items = this._itemize(this.element.children)
		}, h._itemize = function (e) {
			for (var t = this._filterFindItemElements(e), i = this.constructor.Item, n = [], s = 0; s < t.length; s++) {
				var r = new i(t[s], this);
				n.push(r)
			}
			return n
		}, h._filterFindItemElements = function (e) {
			return n.filterFindElements(e, this.options.itemSelector)
		}, h.getItemElements = function () {
			return this.items.map(function (e) {
				return e.element
			})
		}, h.layout = function () {
			this._resetLayout(), this._manageStamps();
			var e = this._getOption("layoutInstant"),
				t = void 0 !== e ? e : !this._isLayoutInited;
			this.layoutItems(this.items, t), this._isLayoutInited = !0
		}, h._init = h.layout, h._resetLayout = function () {
			this.getSize()
		}, h.getSize = function () {
			this.size = i(this.element)
		}, h._getMeasurement = function (e, t) {
			var n, s = this.options[e];
			s ? ("string" == typeof s ? n = this.element.querySelector(s) : s instanceof HTMLElement && (n = s), this[e] = n ? i(n)[t] : s) : this[e] = 0
		}, h.layoutItems = function (e, t) {
			e = this._getItemsForLayout(e), this._layoutItems(e, t), this._postLayout()
		}, h._getItemsForLayout = function (e) {
			return e.filter(function (e) {
				return !e.isIgnored
			})
		}, h._layoutItems = function (e, t) {
			if (this._emitCompleteOnItems("layout", e), e && e.length) {
				var i = [];
				e.forEach(function (e) {
					var n = this._getItemLayoutPosition(e);
					n.item = e, n.isInstant = t || e.isLayoutInstant, i.push(n)
				}, this), this._processLayoutQueue(i)
			}
		}, h._getItemLayoutPosition = function () {
			return {
				x: 0,
				y: 0
			}
		}, h._processLayoutQueue = function (e) {
			e.forEach(function (e) {
				this._positionItem(e.item, e.x, e.y, e.isInstant)
			}, this)
		}, h._positionItem = function (e, t, i, n) {
			n ? e.goTo(t, i) : e.moveTo(t, i)
		}, h._postLayout = function () {
			this.resizeContainer()
		}, h.resizeContainer = function () {
			if (this._getOption("resizeContainer")) {
				var e = this._getContainerSize();
				e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1))
			}
		}, h._getContainerSize = o, h._setContainerMeasure = function (e, t) {
			if (void 0 !== e) {
				var i = this.size;
				i.isBorderBox && (e += t ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), e = Math.max(e, 0), this.element.style[t ? "width" : "height"] = e + "px"
			}
		}, h._emitCompleteOnItems = function (e, t) {
			var i = this;

			function n() {
				i.dispatchEvent(e + "Complete", null, [t])
			}
			var s = t.length;
			if (t && s) {
				var r = 0;
				t.forEach(function (t) {
					t.once(e, a)
				})
			} else n();

			function a() {
				++r == s && n()
			}
		}, h.dispatchEvent = function (e, t, i) {
			var n = t ? [t].concat(i) : i;
			if (this.emitEvent(e, n), a)
				if (this.$element = this.$element || a(this.element), t) {
					var s = a.Event(t);
					s.type = e, this.$element.trigger(s, i)
				} else this.$element.trigger(e, i)
		}, h.ignore = function (e) {
			var t = this.getItem(e);
			t && (t.isIgnored = !0)
		}, h.unignore = function (e) {
			var t = this.getItem(e);
			t && delete t.isIgnored
		}, h.stamp = function (e) {
			(e = this._find(e)) && (this.stamps = this.stamps.concat(e), e.forEach(this.ignore, this))
		}, h.unstamp = function (e) {
			(e = this._find(e)) && e.forEach(function (e) {
				n.removeFrom(this.stamps, e), this.unignore(e)
			}, this)
		}, h._find = function (e) {
			if (e) return "string" == typeof e && (e = this.element.querySelectorAll(e)), e = n.makeArray(e)
		}, h._manageStamps = function () {
			this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
		}, h._getBoundingRect = function () {
			var e = this.element.getBoundingClientRect(),
				t = this.size;
			this._boundingRect = {
				left: e.left + t.paddingLeft + t.borderLeftWidth,
				top: e.top + t.paddingTop + t.borderTopWidth,
				right: e.right - (t.paddingRight + t.borderRightWidth),
				bottom: e.bottom - (t.paddingBottom + t.borderBottomWidth)
			}
		}, h._manageStamp = o, h._getElementOffset = function (e) {
			var t = e.getBoundingClientRect(),
				n = this._boundingRect,
				s = i(e);
			return {
				left: t.left - n.left - s.marginLeft,
				top: t.top - n.top - s.marginTop,
				right: n.right - t.right - s.marginRight,
				bottom: n.bottom - t.bottom - s.marginBottom
			}
		}, h.handleEvent = n.handleEvent, h.bindResize = function () {
			e.addEventListener("resize", this), this.isResizeBound = !0
		}, h.unbindResize = function () {
			e.removeEventListener("resize", this), this.isResizeBound = !1
		}, h.onresize = function () {
			this.resize()
		}, n.debounceMethod(d, "onresize", 100), h.resize = function () {
			this.isResizeBound && this.needsResizeLayout() && this.layout()
		}, h.needsResizeLayout = function () {
			var e = i(this.element);
			return this.size && e && e.innerWidth !== this.size.innerWidth
		}, h.addItems = function (e) {
			var t = this._itemize(e);
			return t.length && (this.items = this.items.concat(t)), t
		}, h.appended = function (e) {
			var t = this.addItems(e);
			t.length && (this.layoutItems(t, !0), this.reveal(t))
		}, h.prepended = function (e) {
			var t = this._itemize(e);
			if (t.length) {
				var i = this.items.slice(0);
				this.items = t.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(t, !0), this.reveal(t), this.layoutItems(i)
			}
		}, h.reveal = function (e) {
			this._emitCompleteOnItems("reveal", e), e && e.length && e.forEach(function (e) {
				e.reveal()
			})
		}, h.hide = function (e) {
			this._emitCompleteOnItems("hide", e), e && e.length && e.forEach(function (e) {
				e.hide()
			})
		}, h.revealItemElements = function (e) {
			var t = this.getItems(e);
			this.reveal(t)
		}, h.hideItemElements = function (e) {
			var t = this.getItems(e);
			this.hide(t)
		}, h.getItem = function (e) {
			for (var t = 0; t < this.items.length; t++) {
				var i = this.items[t];
				if (i.element == e) return i
			}
		}, h.getItems = function (e) {
			e = n.makeArray(e);
			var t = [];
			return e.forEach(function (e) {
				var i = this.getItem(e);
				i && t.push(i)
			}, this), t
		}, h.remove = function (e) {
			var t = this.getItems(e);
			this._emitCompleteOnItems("remove", t), t && t.length && t.forEach(function (e) {
				e.remove(), n.removeFrom(this.items, e)
			}, this)
		}, h.destroy = function () {
			var e = this.element.style;
			e.height = "", e.position = "", e.width = "", this.items.forEach(function (e) {
				e.destroy()
			}), this.unbindResize();
			var t = this.element.outlayerGUID;
			delete c[t], delete this.element.outlayerGUID, a && a.removeData(this.element, this.constructor.namespace)
		}, d.data = function (e) {
			var t = (e = n.getQueryElement(e)) && e.outlayerGUID;
			return t && c[t]
		}, d.create = function (e, t) {
			var i = p(d);
			return i.defaults = n.extend({}, d.defaults), n.extend(i.defaults, t), i.compatOptions = n.extend({}, d.compatOptions), i.namespace = e, i.data = d.data, i.Item = p(s), n.htmlInit(i, e), a && a.bridget && a.bridget(e, i), i
		}, d.Item = s, d
	}),
	function (e, t) {
		"function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size"], t) : "object" == typeof module && module.exports ? module.exports = t(require("outlayer"), require("get-size")) : e.Masonry = t(e.Outlayer, e.getSize)
	}(window, function (e, t) {
		var i = e.create("masonry");
		return i.compatOptions.fitWidth = "isFitWidth", i.prototype._resetLayout = function () {
			this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
			for (var e = 0; e < this.cols; e++) this.colYs.push(0);
			this.maxY = 0
		}, i.prototype.measureColumns = function () {
			if (this.getContainerWidth(), !this.columnWidth) {
				var e = this.items[0],
					i = e && e.element;
				this.columnWidth = i && t(i).outerWidth || this.containerWidth
			}
			var n = this.columnWidth += this.gutter,
				s = this.containerWidth + this.gutter,
				r = s / n,
				a = n - s % n;
			r = Math[a && a < 1 ? "round" : "floor"](r), this.cols = Math.max(r, 1)
		}, i.prototype.getContainerWidth = function () {
			var e = this._getOption("fitWidth") ? this.element.parentNode : this.element,
				i = t(e);
			this.containerWidth = i && i.innerWidth
		}, i.prototype._getItemLayoutPosition = function (e) {
			e.getSize();
			var t = e.size.outerWidth % this.columnWidth,
				i = Math[t && t < 1 ? "round" : "ceil"](e.size.outerWidth / this.columnWidth);
			i = Math.min(i, this.cols);
			for (var n = this._getColGroup(i), s = Math.min.apply(Math, n), r = n.indexOf(s), a = {
					x: this.columnWidth * r,
					y: s
				}, o = s + e.size.outerHeight, l = this.cols + 1 - n.length, c = 0; c < l; c++) this.colYs[r + c] = o;
			return a
		}, i.prototype._getColGroup = function (e) {
			if (e < 2) return this.colYs;
			for (var t = [], i = this.cols + 1 - e, n = 0; n < i; n++) {
				var s = this.colYs.slice(n, n + e);
				t[n] = Math.max.apply(Math, s)
			}
			return t
		}, i.prototype._manageStamp = function (e) {
			var i = t(e),
				n = this._getElementOffset(e),
				s = this._getOption("originLeft") ? n.left : n.right,
				r = s + i.outerWidth,
				a = Math.floor(s / this.columnWidth);
			a = Math.max(0, a);
			var o = Math.floor(r / this.columnWidth);
			o -= r % this.columnWidth ? 0 : 1, o = Math.min(this.cols - 1, o);
			for (var l = (this._getOption("originTop") ? n.top : n.bottom) + i.outerHeight, c = a; c <= o; c++) this.colYs[c] = Math.max(l, this.colYs[c])
		}, i.prototype._getContainerSize = function () {
			this.maxY = Math.max.apply(Math, this.colYs);
			var e = {
				height: this.maxY
			};
			return this._getOption("fitWidth") && (e.width = this._getContainerFitWidth()), e
		}, i.prototype._getContainerFitWidth = function () {
			for (var e = 0, t = this.cols; --t && 0 === this.colYs[t];) e++;
			return (this.cols - e) * this.columnWidth - this.gutter
		}, i.prototype.needsResizeLayout = function () {
			var e = this.containerWidth;
			return this.getContainerWidth(), e != this.containerWidth
		}, i
	}),
	function (e) {
		"function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
	}(function (e) {
		var t, i = 0,
			n = Array.prototype.slice;
		e.cleanData = (t = e.cleanData, function (i) {
			var n, s, r;
			for (r = 0; null != (s = i[r]); r++) try {
				(n = e._data(s, "events")) && n.remove && e(s).triggerHandler("remove")
			} catch (e) {}
			t(i)
		}), e.widget = function (t, i, n) {
			var s, r, a, o, l = {},
				c = t.split(".")[0];
			return t = t.split(".")[1], s = c + "-" + t, n || (n = i, i = e.Widget), e.expr[":"][s.toLowerCase()] = function (t) {
				return !!e.data(t, s)
			}, e[c] = e[c] || {}, r = e[c][t], a = e[c][t] = function (e, t) {
				if (!this._createWidget) return new a(e, t);
				arguments.length && this._createWidget(e, t)
			}, e.extend(a, r, {
				version: n.version,
				_proto: e.extend({}, n),
				_childConstructors: []
			}), (o = new i).options = e.widget.extend({}, o.options), e.each(n, function (t, n) {
				var s, r;
				e.isFunction(n) ? l[t] = (s = function () {
					return i.prototype[t].apply(this, arguments)
				}, r = function (e) {
					return i.prototype[t].apply(this, e)
				}, function () {
					var e, t = this._super,
						i = this._superApply;
					return this._super = s, this._superApply = r, e = n.apply(this, arguments), this._super = t, this._superApply = i, e
				}) : l[t] = n
			}), a.prototype = e.widget.extend(o, {
				widgetEventPrefix: r && o.widgetEventPrefix || t
			}, l, {
				constructor: a,
				namespace: c,
				widgetName: t,
				widgetFullName: s
			}), r ? (e.each(r._childConstructors, function (t, i) {
				var n = i.prototype;
				e.widget(n.namespace + "." + n.widgetName, a, i._proto)
			}), delete r._childConstructors) : i._childConstructors.push(a), e.widget.bridge(t, a), a
		}, e.widget.extend = function (t) {
			for (var i, s, r = n.call(arguments, 1), a = 0, o = r.length; a < o; a++)
				for (i in r[a]) s = r[a][i], r[a].hasOwnProperty(i) && void 0 !== s && (e.isPlainObject(s) ? t[i] = e.isPlainObject(t[i]) ? e.widget.extend({}, t[i], s) : e.widget.extend({}, s) : t[i] = s);
			return t
		}, e.widget.bridge = function (t, i) {
			var s = i.prototype.widgetFullName || t;
			e.fn[t] = function (r) {
				var a = "string" == typeof r,
					o = n.call(arguments, 1),
					l = this;
				return r = !a && o.length ? e.widget.extend.apply(null, [r].concat(o)) : r, a ? this.each(function () {
					var i, n = e.data(this, s);
					return "instance" === r ? (l = n, !1) : n ? e.isFunction(n[r]) && "_" !== r.charAt(0) ? (i = n[r].apply(n, o)) !== n && void 0 !== i ? (l = i && i.jquery ? l.pushStack(i.get()) : i, !1) : void 0 : e.error("no such method '" + r + "' for " + t + " widget instance") : e.error("cannot call methods on " + t + " prior to initialization; attempted to call method '" + r + "'")
				}) : this.each(function () {
					var t = e.data(this, s);
					t ? (t.option(r || {}), t._init && t._init()) : e.data(this, s, new i(r, this))
				}), l
			}
		}, e.Widget = function () {}, e.Widget._childConstructors = [], e.Widget.prototype = {
			widgetName: "widget",
			widgetEventPrefix: "",
			defaultElement: "<div>",
			options: {
				disabled: !1,
				create: null
			},
			_createWidget: function (t, n) {
				n = e(n || this.defaultElement || this)[0], this.element = e(n), this.uuid = i++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this.bindings = e(), this.hoverable = e(), this.focusable = e(), n !== this && (e.data(n, this.widgetFullName, this), this._on(!0, this.element, {
					remove: function (e) {
						e.target === n && this.destroy()
					}
				}), this.document = e(n.style ? n.ownerDocument : n.document || n), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
			},
			_getCreateOptions: e.noop,
			_getCreateEventData: e.noop,
			_create: e.noop,
			_init: e.noop,
			destroy: function () {
				this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
			},
			_destroy: e.noop,
			widget: function () {
				return this.element
			},
			option: function (t, i) {
				var n, s, r, a = t;
				if (0 === arguments.length) return e.widget.extend({}, this.options);
				if ("string" == typeof t)
					if (a = {}, n = t.split("."), t = n.shift(), n.length) {
						for (s = a[t] = e.widget.extend({}, this.options[t]), r = 0; r < n.length - 1; r++) s[n[r]] = s[n[r]] || {}, s = s[n[r]];
						if (t = n.pop(), 1 === arguments.length) return void 0 === s[t] ? null : s[t];
						s[t] = i
					} else {
						if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];
						a[t] = i
					}
				return this._setOptions(a), this
			},
			_setOptions: function (e) {
				var t;
				for (t in e) this._setOption(t, e[t]);
				return this
			},
			_setOption: function (e, t) {
				return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!t), t && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
			},
			enable: function () {
				return this._setOptions({
					disabled: !1
				})
			},
			disable: function () {
				return this._setOptions({
					disabled: !0
				})
			},
			_on: function (t, i, n) {
				var s, r = this;
				"boolean" != typeof t && (n = i, i = t, t = !1), n ? (i = s = e(i), this.bindings = this.bindings.add(i)) : (n = i, i = this.element, s = this.widget()), e.each(n, function (n, a) {
					function o() {
						if (t || !0 !== r.options.disabled && !e(this).hasClass("ui-state-disabled")) return ("string" == typeof a ? r[a] : a).apply(r, arguments)
					}
					"string" != typeof a && (o.guid = a.guid = a.guid || o.guid || e.guid++);
					var l = n.match(/^([\w:-]*)\s*(.*)$/),
						c = l[1] + r.eventNamespace,
						d = l[2];
					d ? s.delegate(d, c, o) : i.bind(c, o)
				})
			},
			_off: function (e, t) {
				t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(t).undelegate(t)
			},
			_delay: function (e, t) {
				var i = this;
				return setTimeout(function () {
					return ("string" == typeof e ? i[e] : e).apply(i, arguments)
				}, t || 0)
			},
			_hoverable: function (t) {
				this.hoverable = this.hoverable.add(t), this._on(t, {
					mouseenter: function (t) {
						e(t.currentTarget).addClass("ui-state-hover")
					},
					mouseleave: function (t) {
						e(t.currentTarget).removeClass("ui-state-hover")
					}
				})
			},
			_focusable: function (t) {
				this.focusable = this.focusable.add(t), this._on(t, {
					focusin: function (t) {
						e(t.currentTarget).addClass("ui-state-focus")
					},
					focusout: function (t) {
						e(t.currentTarget).removeClass("ui-state-focus")
					}
				})
			},
			_trigger: function (t, i, n) {
				var s, r, a = this.options[t];
				if (n = n || {}, (i = e.Event(i)).type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], r = i.originalEvent)
					for (s in r) s in i || (i[s] = r[s]);
				return this.element.trigger(i, n), !(e.isFunction(a) && !1 === a.apply(this.element[0], [i].concat(n)) || i.isDefaultPrevented())
			}
		}, e.each({
			show: "fadeIn",
			hide: "fadeOut"
		}, function (t, i) {
			e.Widget.prototype["_" + t] = function (n, s, r) {
				"string" == typeof s && (s = {
					effect: s
				});
				var a, o = s ? !0 === s || "number" == typeof s ? i : s.effect || i : t;
				"number" == typeof (s = s || {}) && (s = {
					duration: s
				}), a = !e.isEmptyObject(s), s.complete = r, s.delay && n.delay(s.delay), a && e.effects && e.effects.effect[o] ? n[t](s) : o !== t && n[o] ? n[o](s.duration, s.easing, r) : n.queue(function (i) {
					e(this)[t](), r && r.call(n[0]), i()
				})
			}
		});
		e.widget
	}), SequenceAnimate.prototype.initAnimate = function () {
		var e = this;
		e._delay = Math.round(1e3 / this._intFps), clearInterval(e._interval), e._interval = setInterval(function () {
			e._calculateDelta()
		}, e._delay)
	}, SequenceAnimate.prototype.animate = function (e) {
		this._target = e
	}, SequenceAnimate.prototype.animateInPercent = function (e) {
		var t = Math.ceil(this._intLenght * e);
		0 === t && (t = 1), this._target = t
	}, SequenceAnimate.prototype.animateToLast = function () {
		this._target = this._intLenght
	}, SequenceAnimate.prototype.goTo = function (e) {
		this._target = e, this._setFrame(e)
	}, SequenceAnimate.prototype.goToFirst = function () {
		this.goTo(1)
	}, SequenceAnimate.prototype.goToLast = function () {
		this.goTo(this._intLenght)
	}, SequenceAnimate.prototype._calculateDelta = function () {
		var e;
		this._intCurrent !== this._target && (this._autoDirection && (this._direction = this._intCurrent - this._target > 0 ? -1 : 1), e = this._intCurrent + this._direction, -1 == this._direction && e < 1 && (e = this._intLenght), 1 == this._direction && e > this._intLenght && (e = 1), this._setFrame(e))
	}, SequenceAnimate.prototype._setFrame = function (e) {
		e !== this._intCurrent && (this._callback(e), this._intCurrent = e, this._target === e && "function" == typeof this._callbackForFinish && this._callbackForFinish(this._intCurrent))
	}, SequenceAnimate.prototype.destroy = function () {
		clearInterval(this._interval)
	},
	function (e, t) {
		"function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(e.jQuery)
	}(this, function (e) {
		e.transit = {
			version: "0.9.12",
			propertyMap: {
				marginLeft: "margin",
				marginRight: "margin",
				marginBottom: "margin",
				marginTop: "margin",
				paddingLeft: "padding",
				paddingRight: "padding",
				paddingBottom: "padding",
				paddingTop: "padding"
			},
			enabled: !0,
			useTransitionEnd: !1
		};
		var t = document.createElement("div"),
			i = {};

		function n(e) {
			if (e in t.style) return e;
			for (var i = ["Moz", "Webkit", "O", "ms"], n = e.charAt(0).toUpperCase() + e.substr(1), s = 0; s < i.length; ++s) {
				var r = i[s] + n;
				if (r in t.style) return r
			}
		}
		var s = navigator.userAgent.toLowerCase().indexOf("chrome") > -1;
		i.transition = n("transition"), i.transitionDelay = n("transitionDelay"), i.transform = n("transform"), i.transformOrigin = n("transformOrigin"), i.filter = n("Filter"), i.transform3d = (t.style[i.transform] = "", t.style[i.transform] = "rotateY(90deg)", "" !== t.style[i.transform]);
		var r = i.transitionEnd = {
			transition: "transitionend",
			MozTransition: "transitionend",
			OTransition: "oTransitionEnd",
			WebkitTransition: "webkitTransitionEnd",
			msTransition: "MSTransitionEnd"
		}[i.transition] || null;
		for (var a in i) i.hasOwnProperty(a) && void 0 === e.support[a] && (e.support[a] = i[a]);

		function o(e) {
			return "string" == typeof e && this.parse(e), this
		}

		function l(e, t, i) {
			!0 === t ? e.queue(i) : t ? e.queue(t, i) : e.each(function () {
				i.call(this)
			})
		}

		function c(t) {
			var n = [];
			return e.each(t, function (t) {
				t = e.camelCase(t), t = p(t = e.transit.propertyMap[t] || e.cssProps[t] || t), i[t] && (t = p(i[t])), -1 === e.inArray(t, n) && n.push(t)
			}), n
		}

		function d(t, i, n, s) {
			var r = c(t);
			e.cssEase[n] && (n = e.cssEase[n]);
			var a = f(i) + " " + n;
			parseInt(s, 10) > 0 && (a += " " + f(s));
			var o = [];
			return e.each(r, function (e, t) {
				o.push(t + " " + a)
			}), o.join(", ")
		}

		function h(t, n) {
			n || (e.cssNumber[t] = !0), e.transit.propertyMap[t] = i.transform, e.cssHooks[t] = {
				get: function (i) {
					return e(i).css("transit:transform").get(t)
				},
				set: function (i, n) {
					var s = e(i).css("transit:transform");
					s.setFromString(t, n), e(i).css({
						"transit:transform": s
					})
				}
			}
		}

		function p(e) {
			return e.replace(/([A-Z])/g, function (e) {
				return "-" + e.toLowerCase()
			})
		}

		function u(e, t) {
			return "string" != typeof e || e.match(/^[\-0-9\.]+$/) ? "" + e + t : e
		}

		function f(t) {
			var i = t;
			return "string" != typeof i || i.match(/^[\-0-9\.]+/) || (i = e.fx.speeds[i] || e.fx.speeds._default), u(i, "ms")
		}
		return t = null, e.cssEase = {
			_default: "ease",
			in: "ease-in",
			out: "ease-out",
			"in-out": "ease-in-out",
			snap: "cubic-bezier(0,1,.5,1)",
			easeInCubic: "cubic-bezier(.550,.055,.675,.190)",
			easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
			easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
			easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
			easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
			easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
			easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
			easeOutExpo: "cubic-bezier(.19,1,.22,1)",
			easeInOutExpo: "cubic-bezier(1,0,0,1)",
			easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
			easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
			easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
			easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
			easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
			easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
			easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
			easeOutQuint: "cubic-bezier(.23,1,.32,1)",
			easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
			easeInSine: "cubic-bezier(.47,0,.745,.715)",
			easeOutSine: "cubic-bezier(.39,.575,.565,1)",
			easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
			easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
			easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
			easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"
		}, e.cssHooks["transit:transform"] = {
			get: function (t) {
				return e(t).data("transform") || new o
			},
			set: function (t, n) {
				var r = n;
				r instanceof o || (r = new o(r)), "WebkitTransform" !== i.transform || s ? t.style[i.transform] = r.toString() : t.style[i.transform] = r.toString(!0), e(t).data("transform", r)
			}
		}, e.cssHooks.transform = {
			set: e.cssHooks["transit:transform"].set
		}, e.cssHooks.filter = {
			get: function (e) {
				return e.style[i.filter]
			},
			set: function (e, t) {
				e.style[i.filter] = t
			}
		}, e.fn.jquery < "1.8" && (e.cssHooks.transformOrigin = {
			get: function (e) {
				return e.style[i.transformOrigin]
			},
			set: function (e, t) {
				e.style[i.transformOrigin] = t
			}
		}, e.cssHooks.transition = {
			get: function (e) {
				return e.style[i.transition]
			},
			set: function (e, t) {
				e.style[i.transition] = t
			}
		}), h("scale"), h("scaleX"), h("scaleY"), h("translate"), h("rotate"), h("rotateX"), h("rotateY"), h("rotate3d"), h("perspective"), h("skewX"), h("skewY"), h("x", !0), h("y", !0), o.prototype = {
			setFromString: function (e, t) {
				var i = "string" == typeof t ? t.split(",") : t.constructor === Array ? t : [t];
				i.unshift(e), o.prototype.set.apply(this, i)
			},
			set: function (e) {
				var t = Array.prototype.slice.apply(arguments, [1]);
				this.setter[e] ? this.setter[e].apply(this, t) : this[e] = t.join(",")
			},
			get: function (e) {
				return this.getter[e] ? this.getter[e].apply(this) : this[e] || 0
			},
			setter: {
				rotate: function (e) {
					this.rotate = u(e, "deg")
				},
				rotateX: function (e) {
					this.rotateX = u(e, "deg")
				},
				rotateY: function (e) {
					this.rotateY = u(e, "deg")
				},
				scale: function (e, t) {
					void 0 === t && (t = e), this.scale = e + "," + t
				},
				skewX: function (e) {
					this.skewX = u(e, "deg")
				},
				skewY: function (e) {
					this.skewY = u(e, "deg")
				},
				perspective: function (e) {
					this.perspective = u(e, "px")
				},
				x: function (e) {
					this.set("translate", e, null)
				},
				y: function (e) {
					this.set("translate", null, e)
				},
				translate: function (e, t) {
					void 0 === this._translateX && (this._translateX = 0), void 0 === this._translateY && (this._translateY = 0), null != e && (this._translateX = u(e, "px")), null != t && (this._translateY = u(t, "px")), this.translate = this._translateX + "," + this._translateY
				}
			},
			getter: {
				x: function () {
					return this._translateX || 0
				},
				y: function () {
					return this._translateY || 0
				},
				scale: function () {
					var e = (this.scale || "1,1").split(",");
					return e[0] && (e[0] = parseFloat(e[0])), e[1] && (e[1] = parseFloat(e[1])), e[0] === e[1] ? e[0] : e
				},
				rotate3d: function () {
					for (var e = (this.rotate3d || "0,0,0,0deg").split(","), t = 0; t <= 3; ++t) e[t] && (e[t] = parseFloat(e[t]));
					return e[3] && (e[3] = u(e[3], "deg")), e
				}
			},
			parse: function (e) {
				var t = this;
				e.replace(/([a-zA-Z0-9]+)\((.*?)\)/g, function (e, i, n) {
					t.setFromString(i, n)
				})
			},
			toString: function (e) {
				var t = [];
				for (var n in this)
					if (this.hasOwnProperty(n)) {
						if (!i.transform3d && ("rotateX" === n || "rotateY" === n || "perspective" === n || "transformOrigin" === n)) continue;
						"_" !== n[0] && (e && "scale" === n ? t.push(n + "3d(" + this[n] + ",1)") : e && "translate" === n ? t.push(n + "3d(" + this[n] + ",0)") : t.push(n + "(" + this[n] + ")"))
					}
				return t.join(" ")
			}
		}, e.fn.transition = e.fn.transit = function (t, n, s, a) {
			var o = this,
				c = 0,
				h = !0,
				p = e.extend(!0, {}, t);
			"function" == typeof n && (a = n, n = void 0), "object" == typeof n && (s = n.easing, c = n.delay || 0, h = void 0 === n.queue || n.queue, a = n.complete, n = n.duration), "function" == typeof s && (a = s, s = void 0), void 0 !== p.easing && (s = p.easing, delete p.easing), void 0 !== p.duration && (n = p.duration, delete p.duration), void 0 !== p.complete && (a = p.complete, delete p.complete), void 0 !== p.queue && (h = p.queue, delete p.queue), void 0 !== p.delay && (c = p.delay, delete p.delay), void 0 === n && (n = e.fx.speeds._default), void 0 === s && (s = e.cssEase._default), n = f(n);
			var u = d(p, n, s, c),
				m = e.transit.enabled && i.transition ? parseInt(n, 10) + parseInt(c, 10) : 0;
			if (0 === m) {
				return l(o, h, function (e) {
					o.css(p), a && a.apply(o), e && e()
				}), o
			}
			var g = {},
				v = function (t) {
					var n = !1,
						s = function () {
							n && o.unbind(r, s), m > 0 && o.each(function () {
								this.style[i.transition] = g[this] || null
							}), "function" == typeof a && a.apply(o), "function" == typeof t && t()
						};
					m > 0 && r && e.transit.useTransitionEnd ? (n = !0, o.bind(r, s)) : window.setTimeout(s, m), o.each(function () {
						m > 0 && (this.style[i.transition] = u), e(this).css(p)
					})
				};
			return l(o, h, function (e) {
				this.offsetWidth, v(e)
			}), this
		}, e.transit.getTransitionValue = d, e
	}),
	function (e) {
		function t(e, t) {
			if (!(e.originalEvent.touches.length > 1)) {
				e.preventDefault();
				var i = e.originalEvent.changedTouches[0],
					n = document.createEvent("MouseEvents");
				n.initMouseEvent(t, !0, !0, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null), e.target.dispatchEvent(n)
			}
		}
		if (e.support.touch = "ontouchend" in document, e.support.touch) {
			var i, n = e.ui.mouse.prototype,
				s = n._mouseInit,
				r = n._mouseDestroy;
			n._touchStart = function (e) {
				!i && this._mouseCapture(e.originalEvent.changedTouches[0]) && (i = !0, this._touchMoved = !1, t(e, "mouseover"), t(e, "mousemove"), t(e, "mousedown"))
			}, n._touchMove = function (e) {
				i && (this._touchMoved = !0, t(e, "mousemove"))
			}, n._touchEnd = function (e) {
				i && (t(e, "mouseup"), t(e, "mouseout"), this._touchMoved || t(e, "click"), i = !1)
			}, n._mouseInit = function () {
				var t = this;
				t.element.bind({
					touchstart: e.proxy(t, "_touchStart"),
					touchmove: e.proxy(t, "_touchMove"),
					touchend: e.proxy(t, "_touchEnd")
				}), s.call(t)
			}, n._mouseDestroy = function () {
				var t = this;
				t.element.unbind({
					touchstart: e.proxy(t, "_touchStart"),
					touchmove: e.proxy(t, "_touchMove"),
					touchend: e.proxy(t, "_touchEnd")
				}), r.call(t)
			}
		}
	}(jQuery),
	function (e, t) {
		"object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.StickySidebar = t()
	}(this, function () {
		"use strict";
		var e = function () {
			function e(e, t) {
				for (var i = 0; i < t.length; i++) {
					var n = t[i];
					n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
				}
			}
			return function (t, i, n) {
				return i && e(t.prototype, i), n && e(t, n), t
			}
		}();
		var t, i, n = (t = ".stickySidebar", i = {
			topSpacing: 0,
			bottomSpacing: 0,
			containerSelector: !1,
			innerWrapperSelector: ".inner-wrapper-sticky",
			stickyClass: "is-affixed",
			resizeSensor: !0,
			minWidth: !1
		}, function () {
			function n(e) {
				var t = this,
					s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
				if (function (e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, n), this.options = n.extend(i, s), this.sidebar = "string" == typeof e ? document.querySelector(e) : e, void 0 === this.sidebar) throw new Error("There is no specific sidebar element.");
				this.sidebarInner = !1, this.container = this.sidebar.parentElement, this.affixedType = "STATIC", this.direction = "down", this.support = {
					transform: !1,
					transform3d: !1
				}, this._initialized = !1, this._reStyle = !1, this._breakpoint = !1, this._resizeListeners = [], this.dimensions = {
					translateY: 0,
					topSpacing: 0,
					lastTopSpacing: 0,
					bottomSpacing: 0,
					lastBottomSpacing: 0,
					sidebarHeight: 0,
					sidebarWidth: 0,
					containerTop: 0,
					containerHeight: 0,
					viewportHeight: 0,
					viewportTop: 0,
					lastViewportTop: 0
				}, ["handleEvent"].forEach(function (e) {
					t[e] = t[e].bind(t)
				}), this.initialize()
			}
			return e(n, [{
				key: "initialize",
				value: function () {
					var e = this;
					if (this._setSupportFeatures(), this.options.innerWrapperSelector && (this.sidebarInner = this.sidebar.querySelector(this.options.innerWrapperSelector), null === this.sidebarInner && (this.sidebarInner = !1)), !this.sidebarInner) {
						var t = document.createElement("div");
						for (t.setAttribute("class", "inner-wrapper-sticky"), this.sidebar.appendChild(t); this.sidebar.firstChild != t;) t.appendChild(this.sidebar.firstChild);
						this.sidebarInner = this.sidebar.querySelector(".inner-wrapper-sticky")
					}
					if (this.options.containerSelector) {
						var i = document.querySelectorAll(this.options.containerSelector);
						if ((i = Array.prototype.slice.call(i)).forEach(function (t, i) {
								t.contains(e.sidebar) && (e.container = t)
							}), !i.length) throw new Error("The container does not contains on the sidebar.")
					}
					"function" != typeof this.options.topSpacing && (this.options.topSpacing = parseInt(this.options.topSpacing) || 0), "function" != typeof this.options.bottomSpacing && (this.options.bottomSpacing = parseInt(this.options.bottomSpacing) || 0), this._widthBreakpoint(), this.calcDimensions(), this.stickyPosition(), this.bindEvents(), this._initialized = !0
				}
			}, {
				key: "bindEvents",
				value: function () {
					window.addEventListener("resize", this, {
						passive: !0,
						capture: !1
					}), window.addEventListener("scroll", this, {
						passive: !0,
						capture: !1
					}), this.sidebar.addEventListener("update" + t, this), this.options.resizeSensor && "undefined" != typeof ResizeSensor && (new ResizeSensor(this.sidebarInner, this.handleEvent), new ResizeSensor(this.container, this.handleEvent))
				}
			}, {
				key: "handleEvent",
				value: function (e) {
					this.updateSticky(e)
				}
			}, {
				key: "calcDimensions",
				value: function () {
					if (!this._breakpoint) {
						var e = this.dimensions;
						e.containerTop = n.offsetRelative(this.container).top, e.containerHeight = this.container.clientHeight, e.containerBottom = e.containerTop + e.containerHeight, e.sidebarHeight = this.sidebarInner.offsetHeight, e.sidebarWidth = this.sidebar.offsetWidth, e.viewportHeight = window.innerHeight, this._calcDimensionsWithScroll()
					}
				}
			}, {
				key: "_calcDimensionsWithScroll",
				value: function () {
					var e = this.dimensions;
					e.sidebarLeft = n.offsetRelative(this.sidebar).left, e.viewportTop = document.documentElement.scrollTop || document.body.scrollTop, e.viewportBottom = e.viewportTop + e.viewportHeight, e.viewportLeft = document.documentElement.scrollLeft || document.body.scrollLeft, e.topSpacing = this.options.topSpacing, e.bottomSpacing = this.options.bottomSpacing, "function" == typeof e.topSpacing && (e.topSpacing = parseInt(e.topSpacing(this.sidebar)) || 0), "function" == typeof e.bottomSpacing && (e.bottomSpacing = parseInt(e.bottomSpacing(this.sidebar)) || 0), "VIEWPORT-TOP" === this.affixedType ? e.topSpacing < e.lastTopSpacing && (e.translateY += e.lastTopSpacing - e.topSpacing, this._reStyle = !0) : "VIEWPORT-BOTTOM" === this.affixedType && e.bottomSpacing < e.lastBottomSpacing && (e.translateY += e.lastBottomSpacing - e.bottomSpacing, this._reStyle = !0), e.lastTopSpacing = e.topSpacing, e.lastBottomSpacing = e.bottomSpacing
				}
			}, {
				key: "isSidebarFitsViewport",
				value: function () {
					return this.dimensions.sidebarHeight < this.dimensions.viewportHeight
				}
			}, {
				key: "observeScrollDir",
				value: function () {
					var e = this.dimensions;
					if (e.lastViewportTop !== e.viewportTop) {
						var t = "down" === this.direction ? Math.min : Math.max;
						e.viewportTop === t(e.viewportTop, e.lastViewportTop) && (this.direction = "down" === this.direction ? "up" : "down")
					}
				}
			}, {
				key: "getAffixType",
				value: function () {
					var e = this.dimensions,
						t = !1;
					this._calcDimensionsWithScroll();
					var i = e.sidebarHeight + e.containerTop,
						n = e.viewportTop + e.topSpacing,
						s = e.viewportBottom - e.bottomSpacing;
					return "up" === this.direction ? n <= e.containerTop ? (e.translateY = 0, t = "STATIC") : n <= e.translateY + e.containerTop ? (e.translateY = n - e.containerTop, t = "VIEWPORT-TOP") : !this.isSidebarFitsViewport() && e.containerTop <= n && (t = "VIEWPORT-UNBOTTOM") : this.isSidebarFitsViewport() ? e.sidebarHeight + n >= e.containerBottom ? (e.translateY = e.containerBottom - i, t = "CONTAINER-BOTTOM") : n >= e.containerTop && (e.translateY = n - e.containerTop, t = "VIEWPORT-TOP") : e.containerBottom <= s ? (e.translateY = e.containerBottom - i, t = "CONTAINER-BOTTOM") : i + e.translateY <= s ? (e.translateY = s - i, t = "VIEWPORT-BOTTOM") : e.containerTop + e.translateY <= n && (t = "VIEWPORT-UNBOTTOM"), e.translateY = Math.max(0, e.translateY), e.translateY = Math.min(e.containerHeight, e.translateY), e.lastViewportTop = e.viewportTop, t
				}
			}, {
				key: "_getStyle",
				value: function (e) {
					if (void 0 !== e) {
						var t = {
								inner: {},
								outer: {}
							},
							i = this.dimensions;
						switch (e) {
							case "VIEWPORT-TOP":
								t.inner = {
									position: "fixed",
									top: i.topSpacing,
									left: i.sidebarLeft - i.viewportLeft,
									width: i.sidebarWidth
								};
								break;
							case "VIEWPORT-BOTTOM":
								t.inner = {
									position: "fixed",
									top: "auto",
									left: i.sidebarLeft,
									bottom: i.bottomSpacing,
									width: i.sidebarWidth
								};
								break;
							case "CONTAINER-BOTTOM":
							case "VIEWPORT-UNBOTTOM":
								var s = this._getTranslate(0, i.translateY + "px");
								t.inner = s ? {
									transform: s
								} : {
									position: "absolute",
									top: i.translateY,
									width: i.sidebarWidth
								}
						}
						switch (e) {
							case "VIEWPORT-TOP":
							case "VIEWPORT-BOTTOM":
							case "VIEWPORT-UNBOTTOM":
							case "CONTAINER-BOTTOM":
								t.outer = {
									height: i.sidebarHeight,
									position: "relative"
								}
						}
						return t.outer = n.extend({
							height: "",
							position: ""
						}, t.outer), t.inner = n.extend({
							position: "relative",
							top: "",
							left: "",
							bottom: "",
							width: "",
							transform: this._getTranslate()
						}, t.inner), t
					}
				}
			}, {
				key: "stickyPosition",
				value: function (e) {
					if (!this._breakpoint) {
						e = this._reStyle || e || !1;
						var i = this.getAffixType(),
							s = this._getStyle(i);
						if ((this.affixedType != i || e) && i) {
							var r = "affix." + i.toLowerCase().replace("viewport-", "") + t;
							for (var a in n.eventTrigger(this.sidebar, r), "STATIC" === i ? n.removeClass(this.sidebar, this.options.stickyClass) : n.addClass(this.sidebar, this.options.stickyClass), s.outer) this.sidebar.style[a] = s.outer[a];
							for (var o in s.inner) {
								var l = "number" == typeof s.inner[o] ? "px" : "";
								this.sidebarInner.style[o] = s.inner[o] + l
							}
							var c = "affixed." + i.toLowerCase().replace("viewport-", "") + t;
							n.eventTrigger(this.sidebar, c)
						} else this._initialized && (this.sidebarInner.style.left = s.inner.left);
						this.affixedType = i
					}
				}
			}, {
				key: "_widthBreakpoint",
				value: function () {
					window.innerWidth <= this.options.minWidth ? (this._breakpoint = !0, this.affixedType = "STATIC", this.sidebar.removeAttribute("style"), n.removeClass(this.sidebar, this.options.stickyClass), this.sidebarInner.removeAttribute("style")) : this._breakpoint = !1
				}
			}, {
				key: "updateSticky",
				value: function () {
					var e, t = this,
						i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
					this._running || (this._running = !0, e = i.type, requestAnimationFrame(function () {
						switch (e) {
							case "scroll":
								t._calcDimensionsWithScroll(), t.observeScrollDir(), t.stickyPosition();
								break;
							case "resize":
							default:
								t._widthBreakpoint(), t.calcDimensions(), t.stickyPosition(!0)
						}
						t._running = !1
					}))
				}
			}, {
				key: "_setSupportFeatures",
				value: function () {
					var e = this.support;
					e.transform = n.supportTransform(), e.transform3d = n.supportTransform(!0)
				}
			}, {
				key: "_getTranslate",
				value: function () {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
						t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
						i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
					return this.support.transform3d ? "translate3d(" + e + ", " + t + ", " + i + ")" : !!this.support.translate && "translate(" + e + ", " + t + ")"
				}
			}, {
				key: "destroy",
				value: function () {
					window.removeEventListener("resize", this, {
						caption: !1
					}), window.removeEventListener("scroll", this, {
						caption: !1
					}), this.sidebar.classList.remove(this.options.stickyClass), this.sidebar.style.minHeight = "", this.sidebar.removeEventListener("update" + t, this);
					var e = {
						inner: {},
						outer: {}
					};
					for (var i in e.inner = {
							position: "",
							top: "",
							left: "",
							bottom: "",
							width: "",
							transform: ""
						}, e.outer = {
							height: "",
							position: ""
						}, e.outer) this.sidebar.style[i] = e.outer[i];
					for (var n in e.inner) this.sidebarInner.style[n] = e.inner[n];
					this.options.resizeSensor && "undefined" != typeof ResizeSensor && (ResizeSensor.detach(this.sidebarInner, this.handleEvent), ResizeSensor.detach(this.container, this.handleEvent))
				}
			}], [{
				key: "supportTransform",
				value: function (e) {
					var t = !1,
						i = e ? "perspective" : "transform",
						n = i.charAt(0).toUpperCase() + i.slice(1),
						s = document.createElement("support").style;
					return (i + " " + ["Webkit", "Moz", "O", "ms"].join(n + " ") + n).split(" ").forEach(function (e, i) {
						if (void 0 !== s[e]) return t = e, !1
					}), t
				}
			}, {
				key: "eventTrigger",
				value: function (e, t, i) {
					try {
						var n = new CustomEvent(t, {
							detail: i
						})
					} catch (e) {
						(n = document.createEvent("CustomEvent")).initCustomEvent(t, !0, !0, i)
					}
					e.dispatchEvent(n)
				}
			}, {
				key: "extend",
				value: function (e, t) {
					var i = {};
					for (var n in e) void 0 !== t[n] ? i[n] = t[n] : i[n] = e[n];
					return i
				}
			}, {
				key: "offsetRelative",
				value: function (e) {
					var t = {
						left: 0,
						top: 0
					};
					do {
						var i = e.offsetTop,
							n = e.offsetLeft;
						isNaN(i) || (t.top += i), isNaN(n) || (t.left += n), e = "BODY" === e.tagName ? e.parentElement : e.offsetParent
					} while (e);
					return t
				}
			}, {
				key: "addClass",
				value: function (e, t) {
					n.hasClass(e, t) || (e.classList ? e.classList.add(t) : e.className += " " + t)
				}
			}, {
				key: "removeClass",
				value: function (e, t) {
					n.hasClass(e, t) && (e.classList ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " "))
				}
			}, {
				key: "hasClass",
				value: function (e, t) {
					return e.classList ? e.classList.contains(t) : new RegExp("(^| )" + t + "( |$)", "gi").test(e.className)
				}
			}]), n
		}());
		return window.StickySidebar = n, n
	}),
	function () {
		"use strict";
		var e = 0,
			t = {};

		function i(n) {
			if (!n) throw new Error("No options passed to Waypoint constructor");
			if (!n.element) throw new Error("No element option passed to Waypoint constructor");
			if (!n.handler) throw new Error("No handler option passed to Waypoint constructor");
			this.key = "waypoint-" + e, this.options = i.Adapter.extend({}, i.defaults, n), this.element = this.options.element, this.adapter = new i.Adapter(this.element), this.callback = n.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = i.Group.findOrCreate({
				name: this.options.group,
				axis: this.axis
			}), this.context = i.Context.findOrCreateByElement(this.options.context), i.offsetAliases[this.options.offset] && (this.options.offset = i.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), t[this.key] = this, e += 1
		}
		i.prototype.queueTrigger = function (e) {
			this.group.queueTrigger(this, e)
		}, i.prototype.trigger = function (e) {
			this.enabled && this.callback && this.callback.apply(this, e)
		}, i.prototype.destroy = function () {
			this.context.remove(this), this.group.remove(this), delete t[this.key]
		}, i.prototype.disable = function () {
			return this.enabled = !1, this
		}, i.prototype.enable = function () {
			return this.context.refresh(), this.enabled = !0, this
		}, i.prototype.next = function () {
			return this.group.next(this)
		}, i.prototype.previous = function () {
			return this.group.previous(this)
		}, i.invokeAll = function (e) {
			var i = [];
			for (var n in t) i.push(t[n]);
			for (var s = 0, r = i.length; s < r; s++) i[s][e]()
		}, i.destroyAll = function () {
			i.invokeAll("destroy")
		}, i.disableAll = function () {
			i.invokeAll("disable")
		}, i.enableAll = function () {
			for (var e in i.Context.refreshAll(), t) t[e].enabled = !0;
			return this
		}, i.refreshAll = function () {
			i.Context.refreshAll()
		}, i.viewportHeight = function () {
			return window.innerHeight || document.documentElement.clientHeight
		}, i.viewportWidth = function () {
			return document.documentElement.clientWidth
		}, i.adapters = [], i.defaults = {
			context: window,
			continuous: !0,
			enabled: !0,
			group: "default",
			horizontal: !1,
			offset: 0
		}, i.offsetAliases = {
			"bottom-in-view": function () {
				return this.context.innerHeight() - this.adapter.outerHeight()
			},
			"right-in-view": function () {
				return this.context.innerWidth() - this.adapter.outerWidth()
			}
		}, window.Waypoint = i
	}(),
	function () {
		"use strict";

		function e(e) {
			window.setTimeout(e, 1e3 / 60)
		}
		var t = 0,
			i = {},
			n = window.Waypoint,
			s = window.onload;

		function r(e) {
			this.element = e, this.Adapter = n.Adapter, this.adapter = new this.Adapter(e), this.key = "waypoint-context-" + t, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
				x: this.adapter.scrollLeft(),
				y: this.adapter.scrollTop()
			}, this.waypoints = {
				vertical: {},
				horizontal: {}
			}, e.waypointContextKey = this.key, i[e.waypointContextKey] = this, t += 1, n.windowContext || (n.windowContext = !0, n.windowContext = new r(window)), this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
		}
		r.prototype.add = function (e) {
			var t = e.options.horizontal ? "horizontal" : "vertical";
			this.waypoints[t][e.key] = e, this.refresh()
		}, r.prototype.checkEmpty = function () {
			var e = this.Adapter.isEmptyObject(this.waypoints.horizontal),
				t = this.Adapter.isEmptyObject(this.waypoints.vertical),
				n = this.element == this.element.window;
			e && t && !n && (this.adapter.off(".waypoints"), delete i[this.key])
		}, r.prototype.createThrottledResizeHandler = function () {
			var e = this;

			function t() {
				e.handleResize(), e.didResize = !1
			}
			this.adapter.on("resize.waypoints", function () {
				e.didResize || (e.didResize = !0, n.requestAnimationFrame(t))
			})
		}, r.prototype.createThrottledScrollHandler = function () {
			var e = this;

			function t() {
				e.handleScroll(), e.didScroll = !1
			}
			this.adapter.on("scroll.waypoints", function () {
				e.didScroll && !n.isTouch || (e.didScroll = !0, n.requestAnimationFrame(t))
			})
		}, r.prototype.handleResize = function () {
			n.Context.refreshAll()
		}, r.prototype.handleScroll = function () {
			var e = {},
				t = {
					horizontal: {
						newScroll: this.adapter.scrollLeft(),
						oldScroll: this.oldScroll.x,
						forward: "right",
						backward: "left"
					},
					vertical: {
						newScroll: this.adapter.scrollTop(),
						oldScroll: this.oldScroll.y,
						forward: "down",
						backward: "up"
					}
				};
			for (var i in t) {
				var n = t[i],
					s = n.newScroll > n.oldScroll ? n.forward : n.backward;
				for (var r in this.waypoints[i]) {
					var a = this.waypoints[i][r];
					if (null !== a.triggerPoint) {
						var o = n.oldScroll < a.triggerPoint,
							l = n.newScroll >= a.triggerPoint;
						(o && l || !o && !l) && (a.queueTrigger(s), e[a.group.id] = a.group)
					}
				}
			}
			for (var c in e) e[c].flushTriggers();
			this.oldScroll = {
				x: t.horizontal.newScroll,
				y: t.vertical.newScroll
			}
		}, r.prototype.innerHeight = function () {
			return this.element == this.element.window ? n.viewportHeight() : this.adapter.innerHeight()
		}, r.prototype.remove = function (e) {
			delete this.waypoints[e.axis][e.key], this.checkEmpty()
		}, r.prototype.innerWidth = function () {
			return this.element == this.element.window ? n.viewportWidth() : this.adapter.innerWidth()
		}, r.prototype.destroy = function () {
			var e = [];
			for (var t in this.waypoints)
				for (var i in this.waypoints[t]) e.push(this.waypoints[t][i]);
			for (var n = 0, s = e.length; n < s; n++) e[n].destroy()
		}, r.prototype.refresh = function () {
			var e, t = this.element == this.element.window,
				i = t ? void 0 : this.adapter.offset(),
				s = {};
			for (var r in this.handleScroll(), e = {
					horizontal: {
						contextOffset: t ? 0 : i.left,
						contextScroll: t ? 0 : this.oldScroll.x,
						contextDimension: this.innerWidth(),
						oldScroll: this.oldScroll.x,
						forward: "right",
						backward: "left",
						offsetProp: "left"
					},
					vertical: {
						contextOffset: t ? 0 : i.top,
						contextScroll: t ? 0 : this.oldScroll.y,
						contextDimension: this.innerHeight(),
						oldScroll: this.oldScroll.y,
						forward: "down",
						backward: "up",
						offsetProp: "top"
					}
				}) {
				var a = e[r];
				for (var o in this.waypoints[r]) {
					var l, c, d, h, p = this.waypoints[r][o],
						u = p.options.offset,
						f = p.triggerPoint,
						m = 0,
						g = null == f;
					p.element !== p.element.window && (m = p.adapter.offset()[a.offsetProp]), "function" == typeof u ? u = u.apply(p) : "string" == typeof u && (u = parseFloat(u), p.options.offset.indexOf("%") > -1 && (u = Math.ceil(a.contextDimension * u / 100))), l = a.contextScroll - a.contextOffset, p.triggerPoint = Math.floor(m + l - u), c = f < a.oldScroll, d = p.triggerPoint >= a.oldScroll, h = !c && !d, !g && (c && d) ? (p.queueTrigger(a.backward), s[p.group.id] = p.group) : !g && h ? (p.queueTrigger(a.forward), s[p.group.id] = p.group) : g && a.oldScroll >= p.triggerPoint && (p.queueTrigger(a.forward), s[p.group.id] = p.group)
				}
			}
			return n.requestAnimationFrame(function () {
				for (var e in s) s[e].flushTriggers()
			}), this
		}, r.findOrCreateByElement = function (e) {
			return r.findByElement(e) || new r(e)
		}, r.refreshAll = function () {
			for (var e in i) i[e].refresh()
		}, r.findByElement = function (e) {
			return i[e.waypointContextKey]
		}, window.onload = function () {
			s && s(), r.refreshAll()
		}, n.requestAnimationFrame = function (t) {
			(window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || e).call(window, t)
		}, n.Context = r
	}(),
	function () {
		"use strict";

		function e(e, t) {
			return e.triggerPoint - t.triggerPoint
		}

		function t(e, t) {
			return t.triggerPoint - e.triggerPoint
		}
		var i = {
				vertical: {},
				horizontal: {}
			},
			n = window.Waypoint;

		function s(e) {
			this.name = e.name, this.axis = e.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), i[this.axis][this.name] = this
		}
		s.prototype.add = function (e) {
			this.waypoints.push(e)
		}, s.prototype.clearTriggerQueues = function () {
			this.triggerQueues = {
				up: [],
				down: [],
				left: [],
				right: []
			}
		}, s.prototype.flushTriggers = function () {
			for (var i in this.triggerQueues) {
				var n = this.triggerQueues[i],
					s = "up" === i || "left" === i;
				n.sort(s ? t : e);
				for (var r = 0, a = n.length; r < a; r += 1) {
					var o = n[r];
					(o.options.continuous || r === n.length - 1) && o.trigger([i])
				}
			}
			this.clearTriggerQueues()
		}, s.prototype.next = function (t) {
			this.waypoints.sort(e);
			var i = n.Adapter.inArray(t, this.waypoints);
			return i === this.waypoints.length - 1 ? null : this.waypoints[i + 1]
		}, s.prototype.previous = function (t) {
			this.waypoints.sort(e);
			var i = n.Adapter.inArray(t, this.waypoints);
			return i ? this.waypoints[i - 1] : null
		}, s.prototype.queueTrigger = function (e, t) {
			this.triggerQueues[t].push(e)
		}, s.prototype.remove = function (e) {
			var t = n.Adapter.inArray(e, this.waypoints);
			t > -1 && this.waypoints.splice(t, 1)
		}, s.prototype.first = function () {
			return this.waypoints[0]
		}, s.prototype.last = function () {
			return this.waypoints[this.waypoints.length - 1]
		}, s.findOrCreate = function (e) {
			return i[e.axis][e.name] || new s(e)
		}, n.Group = s
	}(),
	function () {
		"use strict";
		var e = window.jQuery,
			t = window.Waypoint;

		function i(t) {
			this.$element = e(t)
		}
		e.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function (e, t) {
			i.prototype[t] = function () {
				var e = Array.prototype.slice.call(arguments);
				return this.$element[t].apply(this.$element, e)
			}
		}), e.each(["extend", "inArray", "isEmptyObject"], function (t, n) {
			i[n] = e[n]
		}), t.adapters.push({
			name: "jquery",
			Adapter: i
		}), t.Adapter = i
	}(),
	function () {
		"use strict";
		var e = window.Waypoint;

		function t(t) {
			return function () {
				var i = [],
					n = arguments[0];
				return t.isFunction(arguments[0]) && ((n = t.extend({}, arguments[1])).handler = arguments[0]), this.each(function () {
					var s = t.extend({}, n, {
						element: this
					});
					"string" == typeof s.context && (s.context = t(this).closest(s.context)[0]), i.push(new e(s))
				}), i
			}
		}
		window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto))
	}(),
	function (e) {
		"use strict";
		"function" == typeof define && define.amd ? define(["jquery", "jquery-ui/ui/widget"], e) : "object" == typeof exports ? e(require("jquery"), require("./vendor/jquery.ui.widget")) : e(window.jQuery)
	}(function (e) {
		"use strict";

		function t(t) {
			var i = "dragover" === t;
			return function (n) {
				n.dataTransfer = n.originalEvent && n.originalEvent.dataTransfer;
				var s = n.dataTransfer;
				s && -1 !== e.inArray("Files", s.types) && !1 !== this._trigger(t, e.Event(t, {
					delegatedEvent: n
				})) && (n.preventDefault(), i && (s.dropEffect = "copy"))
			}
		}
		e.support.fileInput = !(new RegExp("(Android (1\\.[0156]|2\\.[01]))|(Windows Phone (OS 7|8\\.0))|(XBLWP)|(ZuneWP)|(WPDesktop)|(w(eb)?OSBrowser)|(webOS)|(Kindle/(1\\.0|2\\.[05]|3\\.0))").test(window.navigator.userAgent) || e('<input type="file"/>').prop("disabled")), e.support.xhrFileUpload = !(!window.ProgressEvent || !window.FileReader), e.support.xhrFormDataFileUpload = !!window.FormData, e.support.blobSlice = window.Blob && (Blob.prototype.slice || Blob.prototype.webkitSlice || Blob.prototype.mozSlice), e.widget("blueimp.fileupload", {
			options: {
				dropZone: e(document),
				pasteZone: void 0,
				fileInput: void 0,
				replaceFileInput: !0,
				paramName: void 0,
				singleFileUploads: !0,
				limitMultiFileUploads: void 0,
				limitMultiFileUploadSize: void 0,
				limitMultiFileUploadSizeOverhead: 512,
				sequentialUploads: !1,
				limitConcurrentUploads: void 0,
				forceIframeTransport: !1,
				redirect: void 0,
				redirectParamName: void 0,
				postMessage: void 0,
				multipart: !0,
				maxChunkSize: void 0,
				uploadedBytes: void 0,
				recalculateProgress: !0,
				progressInterval: 100,
				bitrateInterval: 500,
				autoUpload: !0,
				messages: {
					uploadedBytes: "Uploaded bytes exceed file size"
				},
				i18n: function (t, i) {
					return t = this.messages[t] || t.toString(), i && e.each(i, function (e, i) {
						t = t.replace("{" + e + "}", i)
					}), t
				},
				formData: function (e) {
					return e.serializeArray()
				},
				add: function (t, i) {
					if (t.isDefaultPrevented()) return !1;
					(i.autoUpload || !1 !== i.autoUpload && e(this).fileupload("option", "autoUpload")) && i.process().done(function () {
						i.submit()
					})
				},
				processData: !1,
				contentType: !1,
				cache: !1,
				timeout: 0
			},
			_specialOptions: ["fileInput", "dropZone", "pasteZone", "multipart", "forceIframeTransport"],
			_blobSlice: e.support.blobSlice && function () {
				return (this.slice || this.webkitSlice || this.mozSlice).apply(this, arguments)
			},
			_BitrateTimer: function () {
				this.timestamp = Date.now ? Date.now() : (new Date).getTime(), this.loaded = 0, this.bitrate = 0, this.getBitrate = function (e, t, i) {
					var n = e - this.timestamp;
					return (!this.bitrate || !i || n > i) && (this.bitrate = (t - this.loaded) * (1e3 / n) * 8, this.loaded = t, this.timestamp = e), this.bitrate
				}
			},
			_isXHRUpload: function (t) {
				return !t.forceIframeTransport && (!t.multipart && e.support.xhrFileUpload || e.support.xhrFormDataFileUpload)
			},
			_getFormData: function (t) {
				var i;
				return "function" === e.type(t.formData) ? t.formData(t.form) : e.isArray(t.formData) ? t.formData : "object" === e.type(t.formData) ? (i = [], e.each(t.formData, function (e, t) {
					i.push({
						name: e,
						value: t
					})
				}), i) : []
			},
			_getTotal: function (t) {
				var i = 0;
				return e.each(t, function (e, t) {
					i += t.size || 1
				}), i
			},
			_initProgressObject: function (t) {
				var i = {
					loaded: 0,
					total: 0,
					bitrate: 0
				};
				t._progress ? e.extend(t._progress, i) : t._progress = i
			},
			_initResponseObject: function (e) {
				var t;
				if (e._response)
					for (t in e._response) e._response.hasOwnProperty(t) && delete e._response[t];
				else e._response = {}
			},
			_onProgress: function (t, i) {
				if (t.lengthComputable) {
					var n, s = Date.now ? Date.now() : (new Date).getTime();
					if (i._time && i.progressInterval && s - i._time < i.progressInterval && t.loaded !== t.total) return;
					i._time = s, n = Math.floor(t.loaded / t.total * (i.chunkSize || i._progress.total)) + (i.uploadedBytes || 0), this._progress.loaded += n - i._progress.loaded, this._progress.bitrate = this._bitrateTimer.getBitrate(s, this._progress.loaded, i.bitrateInterval), i._progress.loaded = i.loaded = n, i._progress.bitrate = i.bitrate = i._bitrateTimer.getBitrate(s, n, i.bitrateInterval), this._trigger("progress", e.Event("progress", {
						delegatedEvent: t
					}), i), this._trigger("progressall", e.Event("progressall", {
						delegatedEvent: t
					}), this._progress)
				}
			},
			_initProgressListener: function (t) {
				var i = this,
					n = t.xhr ? t.xhr() : e.ajaxSettings.xhr();
				n.upload && (e(n.upload).bind("progress", function (e) {
					var n = e.originalEvent;
					e.lengthComputable = n.lengthComputable, e.loaded = n.loaded, e.total = n.total, i._onProgress(e, t)
				}), t.xhr = function () {
					return n
				})
			},
			_deinitProgressListener: function (t) {
				var i = t.xhr ? t.xhr() : e.ajaxSettings.xhr();
				i.upload && e(i.upload).unbind("progress")
			},
			_isInstanceOf: function (e, t) {
				return Object.prototype.toString.call(t) === "[object " + e + "]"
			},
			_initXHRData: function (t) {
				var i, n = this,
					s = t.files[0],
					r = t.multipart || !e.support.xhrFileUpload,
					a = "array" === e.type(t.paramName) ? t.paramName[0] : t.paramName;
				t.headers = e.extend({}, t.headers), t.contentRange && (t.headers["Content-Range"] = t.contentRange), r && !t.blob && this._isInstanceOf("File", s) || (t.headers["Content-Disposition"] = 'attachment; filename="' + encodeURI(s.uploadName || s.name) + '"'), r ? e.support.xhrFormDataFileUpload && (t.postMessage ? (i = this._getFormData(t), t.blob ? i.push({
					name: a,
					value: t.blob
				}) : e.each(t.files, function (n, s) {
					i.push({
						name: "array" === e.type(t.paramName) && t.paramName[n] || a,
						value: s
					})
				})) : (n._isInstanceOf("FormData", t.formData) ? i = t.formData : (i = new FormData, e.each(this._getFormData(t), function (e, t) {
					i.append(t.name, t.value)
				})), t.blob ? i.append(a, t.blob, s.uploadName || s.name) : e.each(t.files, function (s, r) {
					(n._isInstanceOf("File", r) || n._isInstanceOf("Blob", r)) && i.append("array" === e.type(t.paramName) && t.paramName[s] || a, r, r.uploadName || r.name)
				})), t.data = i) : (t.contentType = s.type || "application/octet-stream", t.data = t.blob || s), t.blob = null
			},
			_initIframeSettings: function (t) {
				var i = e("<a></a>").prop("href", t.url).prop("host");
				t.dataType = "iframe " + (t.dataType || ""), t.formData = this._getFormData(t), t.redirect && i && i !== location.host && t.formData.push({
					name: t.redirectParamName || "redirect",
					value: t.redirect
				})
			},
			_initDataSettings: function (e) {
				this._isXHRUpload(e) ? (this._chunkedUpload(e, !0) || (e.data || this._initXHRData(e), this._initProgressListener(e)), e.postMessage && (e.dataType = "postmessage " + (e.dataType || ""))) : this._initIframeSettings(e)
			},
			_getParamName: function (t) {
				var i = e(t.fileInput),
					n = t.paramName;
				return n ? e.isArray(n) || (n = [n]) : (n = [], i.each(function () {
					for (var t = e(this), i = t.prop("name") || "files[]", s = (t.prop("files") || [1]).length; s;) n.push(i), s -= 1
				}), n.length || (n = [i.prop("name") || "files[]"])), n
			},
			_initFormSettings: function (t) {
				t.form && t.form.length || (t.form = e(t.fileInput.prop("form")), t.form.length || (t.form = e(this.options.fileInput.prop("form")))), t.paramName = this._getParamName(t), t.url || (t.url = t.form.prop("action") || location.href), t.type = (t.type || "string" === e.type(t.form.prop("method")) && t.form.prop("method") || "").toUpperCase(), "POST" !== t.type && "PUT" !== t.type && "PATCH" !== t.type && (t.type = "POST"), t.formAcceptCharset || (t.formAcceptCharset = t.form.attr("accept-charset"))
			},
			_getAJAXSettings: function (t) {
				var i = e.extend({}, this.options, t);
				return this._initFormSettings(i), this._initDataSettings(i), i
			},
			_getDeferredState: function (e) {
				return e.state ? e.state() : e.isResolved() ? "resolved" : e.isRejected() ? "rejected" : "pending"
			},
			_enhancePromise: function (e) {
				return e.success = e.done, e.error = e.fail, e.complete = e.always, e
			},
			_getXHRPromise: function (t, i, n) {
				var s = e.Deferred(),
					r = s.promise();
				return i = i || this.options.context || r, !0 === t ? s.resolveWith(i, n) : !1 === t && s.rejectWith(i, n), r.abort = s.promise, this._enhancePromise(r)
			},
			_addConvenienceMethods: function (t, i) {
				var n = this,
					s = function (t) {
						return e.Deferred().resolveWith(n, t).promise()
					};
				i.process = function (t, r) {
					return (t || r) && (i._processQueue = this._processQueue = (this._processQueue || s([this])).then(function () {
						return i.errorThrown ? e.Deferred().rejectWith(n, [i]).promise() : s(arguments)
					}).then(t, r)), this._processQueue || s([this])
				}, i.submit = function () {
					return "pending" !== this.state() && (i.jqXHR = this.jqXHR = !1 !== n._trigger("submit", e.Event("submit", {
						delegatedEvent: t
					}), this) && n._onSend(t, this)), this.jqXHR || n._getXHRPromise()
				}, i.abort = function () {
					return this.jqXHR ? this.jqXHR.abort() : (this.errorThrown = "abort", n._trigger("fail", null, this), n._getXHRPromise(!1))
				}, i.state = function () {
					return this.jqXHR ? n._getDeferredState(this.jqXHR) : this._processQueue ? n._getDeferredState(this._processQueue) : void 0
				}, i.processing = function () {
					return !this.jqXHR && this._processQueue && "pending" === n._getDeferredState(this._processQueue)
				}, i.progress = function () {
					return this._progress
				}, i.response = function () {
					return this._response
				}
			},
			_getUploadedBytes: function (e) {
				var t = e.getResponseHeader("Range"),
					i = t && t.split("-"),
					n = i && i.length > 1 && parseInt(i[1], 10);
				return n && n + 1
			},
			_chunkedUpload: function (t, i) {
				t.uploadedBytes = t.uploadedBytes || 0;
				var n, s, r = this,
					a = t.files[0],
					o = a.size,
					l = t.uploadedBytes,
					c = t.maxChunkSize || o,
					d = this._blobSlice,
					h = e.Deferred(),
					p = h.promise();
				return !(!(this._isXHRUpload(t) && d && (l || ("function" === e.type(c) ? c(t) : c) < o)) || t.data) && (!!i || (l >= o ? (a.error = t.i18n("uploadedBytes"), this._getXHRPromise(!1, t.context, [null, "error", a.error])) : (s = function () {
					var i = e.extend({}, t),
						p = i._progress.loaded;
					i.blob = d.call(a, l, l + ("function" === e.type(c) ? c(i) : c), a.type), i.chunkSize = i.blob.size, i.contentRange = "bytes " + l + "-" + (l + i.chunkSize - 1) + "/" + o, r._trigger("chunkbeforesend", null, i), r._initXHRData(i), r._initProgressListener(i), n = (!1 !== r._trigger("chunksend", null, i) && e.ajax(i) || r._getXHRPromise(!1, i.context)).done(function (n, a, c) {
						l = r._getUploadedBytes(c) || l + i.chunkSize, p + i.chunkSize - i._progress.loaded && r._onProgress(e.Event("progress", {
							lengthComputable: !0,
							loaded: l - i.uploadedBytes,
							total: l - i.uploadedBytes
						}), i), t.uploadedBytes = i.uploadedBytes = l, i.result = n, i.textStatus = a, i.jqXHR = c, r._trigger("chunkdone", null, i), r._trigger("chunkalways", null, i), l < o ? s() : h.resolveWith(i.context, [n, a, c])
					}).fail(function (e, t, n) {
						i.jqXHR = e, i.textStatus = t, i.errorThrown = n, r._trigger("chunkfail", null, i), r._trigger("chunkalways", null, i), h.rejectWith(i.context, [e, t, n])
					}).always(function () {
						r._deinitProgressListener(i)
					})
				}, this._enhancePromise(p), p.abort = function () {
					return n.abort()
				}, s(), p)))
			},
			_beforeSend: function (e, t) {
				0 === this._active && (this._trigger("start"), this._bitrateTimer = new this._BitrateTimer, this._progress.loaded = this._progress.total = 0, this._progress.bitrate = 0), this._initResponseObject(t), this._initProgressObject(t), t._progress.loaded = t.loaded = t.uploadedBytes || 0, t._progress.total = t.total = this._getTotal(t.files) || 1, t._progress.bitrate = t.bitrate = 0, this._active += 1, this._progress.loaded += t.loaded, this._progress.total += t.total
			},
			_onDone: function (t, i, n, s) {
				var r = s._progress.total,
					a = s._response;
				s._progress.loaded < r && this._onProgress(e.Event("progress", {
					lengthComputable: !0,
					loaded: r,
					total: r
				}), s), a.result = s.result = t, a.textStatus = s.textStatus = i, a.jqXHR = s.jqXHR = n, this._trigger("done", null, s)
			},
			_onFail: function (e, t, i, n) {
				var s = n._response;
				n.recalculateProgress && (this._progress.loaded -= n._progress.loaded, this._progress.total -= n._progress.total), s.jqXHR = n.jqXHR = e, s.textStatus = n.textStatus = t, s.errorThrown = n.errorThrown = i, this._trigger("fail", null, n)
			},
			_onAlways: function (e, t, i, n) {
				this._trigger("always", null, n)
			},
			_onSend: function (t, i) {
				i.submit || this._addConvenienceMethods(t, i);
				var n, s, r, a, o = this,
					l = o._getAJAXSettings(i),
					c = function () {
						return o._sending += 1, l._bitrateTimer = new o._BitrateTimer, n = n || ((s || !1 === o._trigger("send", e.Event("send", {
							delegatedEvent: t
						}), l)) && o._getXHRPromise(!1, l.context, s) || o._chunkedUpload(l) || e.ajax(l)).done(function (e, t, i) {
							o._onDone(e, t, i, l)
						}).fail(function (e, t, i) {
							o._onFail(e, t, i, l)
						}).always(function (e, t, i) {
							if (o._deinitProgressListener(l), o._onAlways(e, t, i, l), o._sending -= 1, o._active -= 1, l.limitConcurrentUploads && l.limitConcurrentUploads > o._sending)
								for (var n = o._slots.shift(); n;) {
									if ("pending" === o._getDeferredState(n)) {
										n.resolve();
										break
									}
									n = o._slots.shift()
								}
							0 === o._active && o._trigger("stop")
						})
					};
				return this._beforeSend(t, l), this.options.sequentialUploads || this.options.limitConcurrentUploads && this.options.limitConcurrentUploads <= this._sending ? (this.options.limitConcurrentUploads > 1 ? (r = e.Deferred(), this._slots.push(r), a = r.then(c)) : (this._sequence = this._sequence.then(c, c), a = this._sequence), a.abort = function () {
					return s = [void 0, "abort", "abort"], n ? n.abort() : (r && r.rejectWith(l.context, s), c())
				}, this._enhancePromise(a)) : c()
			},
			_onAdd: function (t, i) {
				var n, s, r, a, o = this,
					l = !0,
					c = e.extend({}, this.options, i),
					d = i.files,
					h = d.length,
					p = c.limitMultiFileUploads,
					u = c.limitMultiFileUploadSize,
					f = c.limitMultiFileUploadSizeOverhead,
					m = 0,
					g = this._getParamName(c),
					v = 0;
				if (!h) return !1;
				if (u && void 0 === d[0].size && (u = void 0), (c.singleFileUploads || p || u) && this._isXHRUpload(c))
					if (c.singleFileUploads || u || !p)
						if (!c.singleFileUploads && u)
							for (r = [], n = [], a = 0; a < h; a += 1) m += d[a].size + f, (a + 1 === h || m + d[a + 1].size + f > u || p && a + 1 - v >= p) && (r.push(d.slice(v, a + 1)), (s = g.slice(v, a + 1)).length || (s = g), n.push(s), v = a + 1, m = 0);
						else n = g;
				else
					for (r = [], n = [], a = 0; a < h; a += p) r.push(d.slice(a, a + p)), (s = g.slice(a, a + p)).length || (s = g), n.push(s);
				else r = [d], n = [g];
				return i.originalFiles = d, e.each(r || d, function (s, a) {
					var c = e.extend({}, i);
					return c.files = r ? a : [a], c.paramName = n[s], o._initResponseObject(c), o._initProgressObject(c), o._addConvenienceMethods(t, c), l = o._trigger("add", e.Event("add", {
						delegatedEvent: t
					}), c)
				}), l
			},
			_replaceFileInput: function (t) {
				var i = t.fileInput,
					n = i.clone(!0),
					s = i.is(document.activeElement);
				t.fileInputClone = n, e("<form></form>").append(n)[0].reset(), i.after(n).detach(), s && n.focus(), e.cleanData(i.unbind("remove")), this.options.fileInput = this.options.fileInput.map(function (e, t) {
					return t === i[0] ? n[0] : t
				}), i[0] === this.element[0] && (this.element = n)
			},
			_handleFileTreeEntry: function (t, i) {
				var n, s = this,
					r = e.Deferred(),
					a = [],
					o = function (e) {
						e && !e.entry && (e.entry = t), r.resolve([e])
					},
					l = function () {
						n.readEntries(function (e) {
							e.length ? (a = a.concat(e), l()) : function (e) {
								s._handleFileTreeEntries(e, i + t.name + "/").done(function (e) {
									r.resolve(e)
								}).fail(o)
							}(a)
						}, o)
					};
				return i = i || "", t.isFile ? t._file ? (t._file.relativePath = i, r.resolve(t._file)) : t.file(function (e) {
					e.relativePath = i, r.resolve(e)
				}, o) : t.isDirectory ? (n = t.createReader(), l()) : r.resolve([]), r.promise()
			},
			_handleFileTreeEntries: function (t, i) {
				var n = this;
				return e.when.apply(e, e.map(t, function (e) {
					return n._handleFileTreeEntry(e, i)
				})).then(function () {
					return Array.prototype.concat.apply([], arguments)
				})
			},
			_getDroppedFiles: function (t) {
				var i = (t = t || {}).items;
				return i && i.length && (i[0].webkitGetAsEntry || i[0].getAsEntry) ? this._handleFileTreeEntries(e.map(i, function (e) {
					var t;
					return e.webkitGetAsEntry ? ((t = e.webkitGetAsEntry()) && (t._file = e.getAsFile()), t) : e.getAsEntry()
				})) : e.Deferred().resolve(e.makeArray(t.files)).promise()
			},
			_getSingleFileInputFiles: function (t) {
				var i, n, s = (t = e(t)).prop("webkitEntries") || t.prop("entries");
				if (s && s.length) return this._handleFileTreeEntries(s);
				if ((i = e.makeArray(t.prop("files"))).length) void 0 === i[0].name && i[0].fileName && e.each(i, function (e, t) {
					t.name = t.fileName, t.size = t.fileSize
				});
				else {
					if (!(n = t.prop("value"))) return e.Deferred().resolve([]).promise();
					i = [{
						name: n.replace(/^.*\\/, "")
					}]
				}
				return e.Deferred().resolve(i).promise()
			},
			_getFileInputFiles: function (t) {
				return t instanceof e && 1 !== t.length ? e.when.apply(e, e.map(t, this._getSingleFileInputFiles)).then(function () {
					return Array.prototype.concat.apply([], arguments)
				}) : this._getSingleFileInputFiles(t)
			},
			_onChange: function (t) {
				var i = this,
					n = {
						fileInput: e(t.target),
						form: e(t.target.form)
					};
				this._getFileInputFiles(n.fileInput).always(function (s) {
					n.files = s, i.options.replaceFileInput && i._replaceFileInput(n), !1 !== i._trigger("change", e.Event("change", {
						delegatedEvent: t
					}), n) && i._onAdd(t, n)
				})
			},
			_onPaste: function (t) {
				var i = t.originalEvent && t.originalEvent.clipboardData && t.originalEvent.clipboardData.items,
					n = {
						files: []
					};
				i && i.length && (e.each(i, function (e, t) {
					var i = t.getAsFile && t.getAsFile();
					i && n.files.push(i)
				}), !1 !== this._trigger("paste", e.Event("paste", {
					delegatedEvent: t
				}), n) && this._onAdd(t, n))
			},
			_onDrop: function (t) {
				t.dataTransfer = t.originalEvent && t.originalEvent.dataTransfer;
				var i = this,
					n = t.dataTransfer,
					s = {};
				n && n.files && n.files.length && (t.preventDefault(), this._getDroppedFiles(n).always(function (n) {
					s.files = n, !1 !== i._trigger("drop", e.Event("drop", {
						delegatedEvent: t
					}), s) && i._onAdd(t, s)
				}))
			},
			_onDragOver: t("dragover"),
			_onDragEnter: t("dragenter"),
			_onDragLeave: t("dragleave"),
			_initEventHandlers: function () {
				this._isXHRUpload(this.options) && (this._on(this.options.dropZone, {
					dragover: this._onDragOver,
					drop: this._onDrop,
					dragenter: this._onDragEnter,
					dragleave: this._onDragLeave
				}), this._on(this.options.pasteZone, {
					paste: this._onPaste
				})), e.support.fileInput && this._on(this.options.fileInput, {
					change: this._onChange
				})
			},
			_destroyEventHandlers: function () {
				this._off(this.options.dropZone, "dragenter dragleave dragover drop"), this._off(this.options.pasteZone, "paste"), this._off(this.options.fileInput, "change")
			},
			_destroy: function () {
				this._destroyEventHandlers()
			},
			_setOption: function (t, i) {
				var n = -1 !== e.inArray(t, this._specialOptions);
				n && this._destroyEventHandlers(), this._super(t, i), n && (this._initSpecialOptions(), this._initEventHandlers())
			},
			_initSpecialOptions: function () {
				var t = this.options;
				void 0 === t.fileInput ? t.fileInput = this.element.is('input[type="file"]') ? this.element : this.element.find('input[type="file"]') : t.fileInput instanceof e || (t.fileInput = e(t.fileInput)), t.dropZone instanceof e || (t.dropZone = e(t.dropZone)), t.pasteZone instanceof e || (t.pasteZone = e(t.pasteZone))
			},
			_getRegExp: function (e) {
				var t = e.split("/"),
					i = t.pop();
				return t.shift(), new RegExp(t.join("/"), i)
			},
			_isRegExpOption: function (t, i) {
				return "url" !== t && "string" === e.type(i) && /^\/.*\/[igm]{0,3}$/.test(i)
			},
			_initDataAttributes: function () {
				var t = this,
					i = this.options,
					n = this.element.data();
				e.each(this.element[0].attributes, function (e, s) {
					var r, a = s.name.toLowerCase();
					/^data-/.test(a) && (a = a.slice(5).replace(/-[a-z]/g, function (e) {
						return e.charAt(1).toUpperCase()
					}), r = n[a], t._isRegExpOption(a, r) && (r = t._getRegExp(r)), i[a] = r)
				})
			},
			_create: function () {
				this._initDataAttributes(), this._initSpecialOptions(), this._slots = [], this._sequence = this._getXHRPromise(!0), this._sending = this._active = 0, this._initProgressObject(this), this._initEventHandlers()
			},
			active: function () {
				return this._active
			},
			progress: function () {
				return this._progress
			},
			add: function (t) {
				var i = this;
				t && !this.options.disabled && (t.fileInput && !t.files ? this._getFileInputFiles(t.fileInput).always(function (e) {
					t.files = e, i._onAdd(null, t)
				}) : (t.files = e.makeArray(t.files), this._onAdd(null, t)))
			},
			send: function (t) {
				if (t && !this.options.disabled) {
					if (t.fileInput && !t.files) {
						var i, n, s = this,
							r = e.Deferred(),
							a = r.promise();
						return a.abort = function () {
							return n = !0, i ? i.abort() : (r.reject(null, "abort", "abort"), a)
						}, this._getFileInputFiles(t.fileInput).always(function (e) {
							n || (e.length ? (t.files = e, (i = s._onSend(null, t)).then(function (e, t, i) {
								r.resolve(e, t, i)
							}, function (e, t, i) {
								r.reject(e, t, i)
							})) : r.reject())
						}), this._enhancePromise(a)
					}
					if (t.files = e.makeArray(t.files), t.files.length) return this._onSend(null, t)
				}
				return this._getXHRPromise(!1, t && t.context)
			}
		})
	}),
	function (e, t) {
		"function" == typeof define && define.amd ? define([], function () {
			return e.svg4everybody = t()
		}) : "object" == typeof exports ? module.exports = t() : e.svg4everybody = t()
	}(this, function () {
		function e(e, t) {
			if (t) {
				var i = document.createDocumentFragment(),
					n = !e.getAttribute("viewBox") && t.getAttribute("viewBox");
				n && e.setAttribute("viewBox", n);
				for (var s = t.cloneNode(!0); s.childNodes.length;) i.appendChild(s.firstChild);
				e.appendChild(i)
			}
		}

		function t(t) {
			t.onreadystatechange = function () {
				if (4 === t.readyState) {
					var i = t._cachedDocument;
					i || ((i = t._cachedDocument = document.implementation.createHTMLDocument("")).body.innerHTML = t.responseText, t._cachedTarget = {}), t._embeds.splice(0).map(function (n) {
						var s = t._cachedTarget[n.id];
						s || (s = t._cachedTarget[n.id] = i.getElementById(n.id)), e(n.svg, s)
					})
				}
			}, t.onreadystatechange()
		}
		return function (i) {
			var n, s = Object(i);
			n = "polyfill" in s ? s.polyfill : /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/.test(navigator.userAgent) || (navigator.userAgent.match(/\bEdge\/12\.(\d+)\b/) || [])[1] < 10547 || (navigator.userAgent.match(/\bAppleWebKit\/(\d+)\b/) || [])[1] < 537;
			var r = {},
				a = window.requestAnimationFrame || setTimeout,
				o = document.getElementsByTagName("use");
			n && function i() {
				for (var l = 0; l < o.length;) {
					var c = o[l],
						d = c.parentNode;
					if (d && /svg/i.test(d.nodeName)) {
						var h = c.getAttribute("xlink:href");
						if (n && (!s.validate || s.validate(h, d, c))) {
							d.removeChild(c);
							var p = h.split("#"),
								u = p.shift(),
								f = p.join("#");
							if (u.length) {
								var m = r[u];
								m || ((m = r[u] = new XMLHttpRequest).open("GET", u), m.send(), m._embeds = []), m._embeds.push({
									svg: d,
									id: f
								}), t(m)
							} else e(d, document.getElementById(f))
						}
					} else ++l
				}
				a(i, 67)
			}()
		}
	});