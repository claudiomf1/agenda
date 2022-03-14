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
exports.LoadInit = exports.LoadHprincipal = exports.LoadHeard = exports.LoadFooter = void 0;

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

var LoadHprincipal = function LoadHprincipal(options) {
  var id = typeof options.id === "undefined" ? "header-principal" : options.id;
  var cb = typeof options.callback === "undefined" ? function () {} : options.callback;
  google.script.run.withSuccessHandler(function (html) {
    document.getElementById(id).innerHTML = html;
    typeof options.params == "undefined" ? cb() : cb(options.params);
  })[options.func]();
};

exports.LoadHprincipal = LoadHprincipal;
},{}],"CwAk":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.callnewPedido = exports.callRegisterList = exports.callRegisterI = exports.callPedido = exports.callManutencao = exports.callLogin = exports.callHprincipal = exports.callHearder = exports.callCdUser = exports.callBody = void 0;

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

var callLogin = function callLogin() {
  (0, _pages.LoadInit)({
    func: "loadLogin"
  });
  $("#body-init").hide();
};

exports.callLogin = callLogin;

var callHprincipal = function callHprincipal() {
  (0, _pages.LoadHeard)({
    func: "loadHeaderAdmin"
  });
};

exports.callHprincipal = callHprincipal;

var callManutencao = function callManutencao() {
  (0, _pages.LoadInit)({
    func: "loadManutencao"
  });
};

exports.callManutencao = callManutencao;

var callRegisterList = function callRegisterList() {
  (0, _pages.LoadInit)({
    func: "loadListCadastro"
  });
};

exports.callRegisterList = callRegisterList;

var callRegisterI = function callRegisterI() {
  (0, _pages.LoadInit)({
    func: "loadCadastro"
  });
};

exports.callRegisterI = callRegisterI;

var callCdUser = function callCdUser() {
  (0, _pages.LoadInit)({
    func: "loadUser"
  });
};

exports.callCdUser = callCdUser;

var callPedido = function callPedido() {
  (0, _pages.LoadInit)({
    func: "loadPedido"
  });
};

exports.callPedido = callPedido;

var callnewPedido = function callnewPedido() {
  (0, _pages.LoadInit)({
    func: "loadnewPedido"
  });
};

exports.callnewPedido = callnewPedido;
},{"./pages/pages":"jMUm"}],"d6sW":[function(require,module,exports) {
"use strict";

var _caldpages = require("./caldpages");

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("body-home").addEventListener('click', btnClick);
  $("#bar").hide();
});
/*let    inputNome = document.getElementById("username")
let    inputPswd = document.getElementById("password")
let    mensagemL = document.getElementById("msn-login")
let    senhaUser = document.getElementById("rs-user-senha")
let    confSenhaUser = document.getElementById("rs-user-conf-senha")*/

window.onload = function () {
  (0, _caldpages.callHearder)();
  (0, _caldpages.callBody)();
};
},{"./caldpages":"CwAk"}]},{},["d6sW"], null)