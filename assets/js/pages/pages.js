export const LoadInit = (options) => {
  var id = typeof options.id === "undefined" ? "body-home" : options.id;
  var cb =
      typeof options.callback === "undefined"
          ? function () {}
          : options.callback;
  google.script.run
      .withSuccessHandler(function (html) {
          document.getElementById(id).innerHTML = html;
          typeof options.params == "undefined" ? cb() : cb(options.params);
      })
      [options.func]();
}

export const LoadHeard =(options) => {
  var id = typeof options.id === "undefined" ? "heard-index" : options.id;
  var cb =
      typeof options.callback === "undefined"
          ? function () {}
          : options.callback;
  google.script.run
      .withSuccessHandler(function (html) {
          document.getElementById(id).innerHTML = html;
          typeof options.params == "undefined" ? cb() : cb(options.params);
      })
      [options.func]();
}

export const LoadFooter = (options) => {
  var id = typeof options.id === "undefined" ? "footer-index" : options.id;
  var cb =
      typeof options.callback === "undefined"
          ? function () {}
          : options.callback;
  google.script.run
      .withSuccessHandler(function (html) {
          document.getElementById(id).innerHTML = html;
          typeof options.params == "undefined" ? cb() : cb(options.params);
      })
      [options.func]();
}

export const LoadHprincipal = (options) => {
  var id = typeof options.id === "undefined" ? "header-principal" : options.id;
  var cb =
      typeof options.callback === "undefined"
          ? function () {}
          : options.callback;
  google.script.run
      .withSuccessHandler(function (html) {
          document.getElementById(id).innerHTML = html;
          typeof options.params == "undefined" ? cb() : cb(options.params);
      })
      [options.func]();
}