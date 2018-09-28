// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
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

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
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
  return newRequire;
})({"html.pre.js":[function(require,module,exports) {
/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

/**
 * The 'pre' function that is executed before the HTML is rendered
 * @param payload The current payload of processing pipeline
 * @param payload.content The content
 */
function pre(payload) {
  payload.content.time = `${new Date()}`;
  payload.content.josh = 'JOSHWASHERE';
}

module.exports.pre = pre;
},{}],"html.htl":[function(require,module,exports) {
/*
 * Copyright 2018 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

/* eslint-disable */

/*
 * Copyright 2018 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

/* eslint-disable */

const Runtime = require('@adobe/htlengine/src/runtime/Runtime');

function run(runtime) {
  const lengthOf = function (c) {
    return Array.isArray(c) ? c.length : Object.keys(c).length;
  };

  const out = runtime.out.bind(runtime);
  const exec = runtime.exec.bind(runtime);
  const xss = runtime.xss.bind(runtime);
  const listInfo = runtime.listInfo.bind(runtime);
  const use = runtime.use.bind(runtime);
  const slyResource = runtime.resource.bind(runtime);
  const call = runtime.call.bind(runtime);
  const template = runtime.template.bind(runtime);

  return runtime.run(function* () {
    let content = runtime.globals.content;
    let request = runtime.globals.request;
    const payload = runtime.globals;
    out("<!DOCTYPE html>\n<html>\n\n<head>\n  <meta charset=\"utf-8\"></meta>\n  <title>Florango</title>\n  <meta content=\"yes\" name=\"apple-touch-fullscreen\"></meta>\n  <meta content=\"yes\" name=\"apple-mobile-web-app-capable\"></meta>\n  <meta content=\"black-translucent\" name=\"apple-mobile-web-app-status-bar-style\"></meta>\n  <meta content=\"width=device-width, initial-scale=1, maximum-scale=1\" name=\"viewport\"></meta>\n\n  <meta name=\"robots\" content=\"noindex\"></meta>\n\n  <meta property=\"og:title\" content=\"Florango\"></meta>\n  <meta property=\"og:type\" content=\"website\"></meta>\n  <meta property=\"og:image\" content=\"https://spark.adobe.com/page/7th7QDstYQbgM/embed.jpg?buster=1533222831453\"></meta>\n  <meta property=\"og:image:width\" content=\"1024\"></meta>\n  <meta property=\"og:image:height\" content=\"512\"></meta>\n  <meta property=\"og:site_name\" content=\"Adobe Spark\"></meta>\n  <meta property=\"og:description\" content=\"A story told with Adobe Spark\"></meta>\n\n  <meta name=\"twitter:card\" content=\"summary_large_image\"></meta>\n  <meta name=\"twitter:title\" content=\"Florango\"></meta>\n  <meta name=\"twitter:image:src\" content=\"https://spark.adobe.com/page/7th7QDstYQbgM/embed.jpg?buster=1533222831453\"></meta>\n  <meta name=\"twitter:description\" content=\"A story told with Adobe Spark\"></meta>\n\n  <link rel=\"apple-touch-icon\" href=\"https://spark.adobe.com/page/7th7QDstYQbgM/embed.jpg?buster=1533222831453\"></link>\n  <link rel=\"shortcut icon\" href=\"https://d6uhzlpot4xwe.cloudfront.net/runtime/1.21/https://spark.adobe.com/page/7th7QDstYQbgM/images/favicon.ico\"></link>\n\n  <meta property=\"fb:app_id\" content=\"919039361464473\"></meta>\n  <meta name=\"twitter:site\" content=\"@AdobeSpark\"></meta>\n\n  <script src=\"https://d6uhzlpot4xwe.cloudfront.net/runtime/1.21/base-fonts.gz.js\"></script>\n  <script src=\"https://d6uhzlpot4xwe.cloudfront.net/runtime/1.21/themes/wiper-fonts.gz.js\"></script>\n  <link href=\"https://d6uhzlpot4xwe.cloudfront.net/runtime/1.21/runtime.gz.css\" type=\"text/css\" rel=\"stylesheet\"></link>\n  <link href=\"https://d6uhzlpot4xwe.cloudfront.net/runtime/1.21/themes/wiper.gz.css\" type=\"text/css\" rel=\"stylesheet\"></link>\n  <noscript id=\"noscript-static-layout\" data-href=\"https://d6uhzlpot4xwe.cloudfront.net/runtime/1.21/noscript.gz.css\">\n    <link href=\"https://d6uhzlpot4xwe.cloudfront.net/runtime/1.21/noscript.gz.css\" type=\"text/css\" rel=\"stylesheet\"></link>\n  </noscript>\n  <!--BEGIN-BUMPER-STYLE-SHEET-->\n  <!--END-BUMPER-STYLE-SHEET-->\n</head>\n\n<body class=\"\">\n  <div id=\"app\">\n    <div id=\"publication-viewer\" class=\"publication-viewer\">\n      <div id=\"luca-splash\" class=\"splash\">\n        <div class=\"background\" style=\"background-image: url(https://spark.adobe.com/page/7th7QDstYQbgM/images/1a2a82c2-c710-4ce4-bdc9-dbe5473d101c.jpg?asset_id=7578842b-dab9-418b-be69-64ac7de621ed&img_etag=c92d9b0ed0854bb6691a73660cc15dbd&size=1024); background-position: 50% 50%;\"></div>\n        <div class=\"content\">\n          <div class=\"logo\"></div>\n          <div class=\"loading-label\">Loading</div>\n          <div class=\"wp-progress-bar\">\n            <div class=\"wp-progress-bar-clip\">\n              <div class=\"wp-progress-bar-view\"></div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"publication-view\">\n        <div class=\"wp-swipe-panel-group\">\n          <div class=\"wp-swipe-panel-group-view\">\n            <div class=\"wp-swipe-panel-group-panel article-panel\">\n              ");
    const var_collectionVar0 = content["children"];
    const var_size1 = lengthOf(var_collectionVar0);
    if (var_size1) {
      out("<div class=\"article wiper-theme sections-article-layout\" data-article-type=\"sections-article\">");
      for (const var_index2 of Object.keys(var_collectionVar0)) {
        const item = Array.isArray(var_collectionVar0) ? var_collectionVar0[var_index2] : var_index2;
        const itemList = listInfo(var_index2, var_size1);
        out("\n                <!--\n                <div class=\"section title-section title-center\" data-section-behavior=\"wiper-title\" data-layer=\"-1\"\n                  data-layer-name=\"under\" data-scroll-after-animation=\"false\">\n                  <div class=\"section-view\">\n                    <div class=\"section-background\">\n                      <div role=\"img\" class=\"section-background-image\" style=\"background-position: 50% 50%;\"><a class=\"background-image-placeholder-link\"\n                          href=\"https://spark.adobe.com/page/7th7QDstYQbgM/images/1a2a82c2-c710-4ce4-bdc9-dbe5473d101c.jpg?asset_id=7578842b-dab9-418b-be69-64ac7de621ed&img_etag=c92d9b0ed0854bb6691a73660cc15dbd&size=1024\"\n                          data-image-width=\"2560\" data-image-height=\"3840\"></a></div>\n                    </div>\n                    <div class=\"title-header\">\n                      <h2 class=\"title-header-view\">\n                        <span class=\"gradient-overlay\"></span>\n                        <span class=\"title\">Florango</span>\n                        <span class=\"subtitle\">FLOWER TRUCK - COMING SOON</span>\n                      </h2>\n                    </div>\n                    <div class=\"navigation-hint down\"></div>\n                  </div>\n                </div>-->\n                <div class=\"section single-column-section  large-content-spacing-top large-content-spacing-bottom top-shadow\" data-section-behavior=\"wiper-single-column\" data-layer=\"1\" data-layer-name=\"over\">\n                  <div class=\"section-view\">\n                    <div class=\"section-content\">\n                      <div class=\"section-content-view\">\n                        <div class=\"content-container\">");
        const var_3 = "\n                          " + item + "\n                        ";
        out(var_3);
        out("</div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                \n\n                <!--BUMPER-SECTION-TOP-LEVEL-START-->\n                <!--BUMPER-SECTION-TOP-LEVEL-END-->\n\n              ");
      }
      out("</div>");
    }
    out("\n              <!--report-abuse-dialog-->\n            </div>\n            <!-- javascripts go here -->\n            <script type=\"text/javascript\">window.useNewBumper = true; window.brandType = 'none';</script>\n            <script type=\"text/javascript\" src=\"https://d6uhzlpot4xwe.cloudfront.net/runtime/1.21/runtime-prod.gz.js\" charset=\"utf-8\"></script>\n            <!--BEGIN-BUMPER-BEHAVIORS-->\n            <!--END-BUMPER-BEHAVIORS-->\n</div></div></div></div></div></body>\n\n</html>");
  });
}

module.exports.main = function main(resource) {
  const runtime = new Runtime();
  runtime.setGlobal(resource);
  return run(runtime).then(() => ({ body: runtime.stream }));
};

function wrap(main) {
  const { pipe } = require('@adobe/hypermedia-pipeline/src/defaults/html.pipe.js');
  const { pre } = require('./html.pre.js');
  const owwrapper = require('@adobe/openwhisk-loggly-wrapper');

  const _isFunction = fn => !!(fn && fn.constructor && fn.call && fn.apply);

  // this gets called by openwhisk
  return function wrapped(params) {
    const runthis = params => {
      // create payload and action objects
      const secrets = {};
      const { __ow_headers, __ow_method, __ow_logger } = params;
      const disclosed = Object.assign({}, params);
      delete disclosed.__ow_headers; // todo: switch to test operator once parcel supports it
      delete disclosed.__ow_method;
      delete disclosed.__ow_logger;

      Object.keys(disclosed).forEach(key => {
        if (key.match(/^[A-Z0-9_]+$/)) {
          secrets[key] = disclosed[key];
          delete disclosed[key];
        }
      });

      const action = {
        secrets,
        request: {
          params: disclosed,
          headers: __ow_headers,
          method: __ow_method
        },
        logger: __ow_logger
      };
      const payload = {};
      const next = (payload, action) => {
        function cont(next) {
          const ret = pre(payload, action);
          if (ret && _isFunction(ret.then)) {
            return ret.then(pp => next(pp || payload, action));
          }
          return next(ret || payload, action);
        }
        return cont(main).then(resobj => ({ response: resobj }));
      };
      return pipe(next, payload, action);
    };

    // the owrapper adds logging to the params
    return owwrapper(runthis, params);
  };
}

module.exports.main = wrap(module.exports.main);
},{"./html.pre.js":"html.pre.js"}]},{},["html.htl"], null)
//# sourceMappingURL=html.map