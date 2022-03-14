// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"jMUm":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadInit = exports.LoadHeard = exports.LoadFooter = void 0;

var LoadInit = function LoadInit(options) {
  var id = typeof options.id === "undefined" ? "body-home" : options.id;
  var cb = typeof options.callback === "undefined" ? function () {} : options.callback;
  google.script.run.withSuccessHandler(function (html) {
    document.getElementById(id).innerHTML = html;
    typeof options.params == "undefined" ? cb() : cb(options.params);
  })[options.func]();
};

exports.LoadInit = LoadInit;

var LoadHeard = function LoadHeard(options) {
  var id = typeof options.id === "undefined" ? "heard-index" : options.id;
  var cb = typeof options.callback === "undefined" ? function () {} : options.callback;
  google.script.run.withSuccessHandler(function (html) {
    document.getElementById(id).innerHTML = html;
    typeof options.params == "undefined" ? cb() : cb(options.params);
  })[options.func]();
};

exports.LoadHeard = LoadHeard;

var LoadFooter = function LoadFooter(options) {
  var id = typeof options.id === "undefined" ? "footer-index" : options.id;
  var cb = typeof options.callback === "undefined" ? function () {} : options.callback;
  google.script.run.withSuccessHandler(function (html) {
    document.getElementById(id).innerHTML = html;
    typeof options.params == "undefined" ? cb() : cb(options.params);
  })[options.func]();
};

exports.LoadFooter = LoadFooter;
},{}],"CwAk":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.callHearder = exports.callBody = void 0;

var _pages = require("./pages/pages");

var callHearder = function callHearder() {
  (0, _pages.LoadHeard)({
    func: "LoadHearders"
  });
};

exports.callHearder = callHearder;

var callBody = function callBody() {
  (0, _pages.LoadInit)({
    func: "loadBody"
  });
};

exports.callBody = callBody;
},{"./pages/pages":"jMUm"}],"d6sW":[function(require,module,exports) {
"use strict";

var _caldpages = require("./caldpages");

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("body-home").addEventListener('click', btnClick);
  $("#bar").hide();
  $("#bar").hide();
  is - loading;
});
/*let    inputNome = document.getElementById("username")
let    inputPswd = document.getElementById("password")
let    mensagemL = document.getElementById("msn-login")
let    senhaUser = document.getElementById("rs-user-senha")
let    confSenhaUser = document.getElementById("rs-user-conf-senha")*/

window.onload = function () {
  (0, _caldpages.callBody)();
};

var btnClick = function btnClick(e) {
  if (e.target.matches('#btn-lg')) {
    alert('teste click botão login');
  }
};

(function ($) {
  // Init ScrollMagic
  var controller = new ScrollMagic.Controller(); // get all slides

  var slides = ["#slide01", "#slide02", "#slide03"]; // get all headers in slides that trigger animation

  var headers = ["#slide01 header", "#slide02 header", "#slide03 header"]; // get all break up sections

  var breakSections = ["#cb01", "#cb02", "#cb03"]; // number of loaded images for preloader progress 

  var loadedCount = 0; //current number of images loaded

  var imagesToLoad = $('.bcg').length; //number of slides with .bcg container

  var loadingProgress = 0; //timeline progress - starts at 0

  $('.bcg').imagesLoaded({
    background: true
  }).progress(function (instance, image) {
    loadProgress();
  });

  function loadProgress(imgLoad, image) {
    //one more image has been loaded
    loadedCount++;
    loadingProgress = loadedCount / imagesToLoad; //console.log(loadingProgress);
    // GSAP timeline for our progress bar

    TweenLite.to(progressTl, 0.7, {
      progress: loadingProgress,
      ease: Linear.easeNone
    });
  } //progress animation instance. the instance's time is irrelevant, can be anything but 0 to void  immediate render


  var progressTl = new TimelineMax({
    paused: true,
    onUpdate: progressUpdate,
    onComplete: loadComplete
  });
  progressTl //tween the progress bar width
  .to($('.progress span'), 1, {
    width: 100,
    ease: Linear.easeNone
  }); //as the progress bar witdh updates and grows we put the precentage loaded in the screen

  function progressUpdate() {
    //the percentage loaded based on the tween's progress
    loadingProgress = Math.round(progressTl.progress() * 100); //we put the percentage in the screen

    $(".txt-perc").text(loadingProgress + '%');
  }

  function loadComplete() {
    // preloader out
    var preloaderOutTl = new TimelineMax();
    preloaderOutTl.to($('.progress'), 0.3, {
      y: 100,
      autoAlpha: 0,
      ease: Back.easeIn
    }).to($('.txt-perc'), 0.3, {
      y: 100,
      autoAlpha: 0,
      ease: Back.easeIn
    }, 0.1).set($('body'), {
      className: '-=is-loading'
    }).set($('#intro'), {
      className: '+=is-loaded'
    }).to($('#preloader'), 0.7, {
      yPercent: 100,
      ease: Power4.easeInOut
    }).set($('#preloader'), {
      className: '+=is-hidden'
    }).from($('#intro .title'), 1, {
      autoAlpha: 0,
      ease: Power1.easeOut
    }, '-=0.2').from($('#intro p'), 0.7, {
      autoAlpha: 0,
      ease: Power1.easeOut
    }, '+=0.2').from($('.scroll-hint'), 0.3, {
      y: -20,
      autoAlpha: 0,
      ease: Power1.easeOut
    }, '+=0.1');
    return preloaderOutTl;
  } // Enable ScrollMagic only for desktop, disable on touch and mobile devices


  if (!Modernizr.touch) {
    // SCENE 1
    // create scenes for each of the headers
    headers.forEach(function (header, index) {
      // number for highlighting scenes
      var num = index + 1; // make scene

      var headerScene = new ScrollMagic.Scene({
        triggerElement: header,
        // trigger CSS animation when header is in the middle of the viewport 
        offset: -95 // offset triggers the animation 95 earlier then middle of the viewport, adjust to your liking

      }).setClassToggle('#slide0' + num, 'is-active') // set class to active slide
      //.addIndicators() // add indicators (requires plugin), use for debugging
      .addTo(controller);
    }); // SCENE 2
    // change color of the nav for dark content blocks

    breakSections.forEach(function (breakSection, index) {
      // number for highlighting scenes
      var breakID = $(breakSection).attr('id'); // make scene

      var breakScene = new ScrollMagic.Scene({
        triggerElement: breakSection,
        // trigger CSS animation when header is in the middle of the viewport 
        triggerHook: 0.75
      }).setClassToggle('#' + breakID, 'is-active') // set class to active slide
      .on("enter", function (event) {
        $('#nav-dots').attr('class', 'is-light');
      }).addTo(controller);
    }); // SCENE 3
    // change color of the nav back to dark

    slides.forEach(function (slide, index) {
      var slideScene = new ScrollMagic.Scene({
        triggerElement: slide // trigger CSS animation when header is in the middle of the viewport

      }).on("enter", function (event) {
        $('#nav-dots').removeAttr('class');
      }).addTo(controller);
    }); // SCENE 4 - parallax effect on each of the slides with bcg
    // move bcg container when slide gets into the view

    slides.forEach(function (slide, index) {
      var $bcg = $(slide).find('.bcg');
      var slideParallaxScene = new ScrollMagic.Scene({
        triggerElement: slide,
        triggerHook: 1,
        duration: "100%"
      }).setTween(TweenMax.from($bcg, 1, {
        y: '-40%',
        autoAlpha: 0.3,
        ease: Power0.easeNone
      })).addTo(controller);
    }); // SCENE 5 - parallax effect on the intro slide
    // move bcg container when intro gets out of the the view

    var introTl = new TimelineMax();
    introTl.to($('#intro header, .scroll-hint'), 0.2, {
      autoAlpha: 0,
      ease: Power1.easeNone
    }) //.to($('#intro .bcg'), 1.4, {y: '20%', ease:Power1.easeOut}, '-=0.2')
    .to($('#intro'), 0.7, {
      autoAlpha: 0.5,
      ease: Power1.easeNone
    }, 0);
    var introScene = new ScrollMagic.Scene({
      triggerElement: '#intro',
      triggerHook: 0,
      duration: "100%"
    }).setTween(introTl).addTo(controller); // change behaviour of controller to animate scroll instead of jump

    controller.scrollTo(function (newpos) {
      TweenMax.to(window, 1, {
        scrollTo: {
          y: newpos
        },
        ease: Power1.easeInOut
      });
    }); //  bind scroll to anchor links

    $(document).on("click", "a[href^='#']", function (e) {
      var id = $(this).attr("href");

      if ($(id).length > 0) {
        e.preventDefault(); // trigger scroll

        controller.scrollTo(id); // if supported by the browser we can even update the URL.

        if (window.history && window.history.pushState) {
          history.pushState("", document.title, id);
        }
      }
    });
  }
})(jQuery);
},{"./caldpages":"CwAk"}]},{},["d6sW"], null)