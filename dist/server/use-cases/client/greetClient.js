"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * Created by diego on 28-12-16.
 */

exports.default = (() => {
  var _ref = _asyncToGenerator(function* (userName, lastName) {

    yield timeout(20000);
    return "test";
  });

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
})();

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}