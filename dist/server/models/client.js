'use strict';

var _greetClient = require('./../use-cases/client/greetClient');

var _greetClient2 = _interopRequireDefault(_greetClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

module.exports = function (Client) {

  Client.greetClient = (() => {
    var _ref = _asyncToGenerator(function* (userName, lastName) {

      Client.create({ username: 'admin', email: 'admin@gmail.com', password: 'admin' }).then(function (client) {
        console.log(client);
        // console.log(client);
      });

      // return greetUser(userName,lastName);
    });

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  })();

  Client.remoteMethod('greetClient', {
    accepts: [{ arg: 'userName', type: 'string' }, { arg: 'lastName', type: 'string' }],
    returns: { arg: 'greeting', type: 'string' }
  });
};