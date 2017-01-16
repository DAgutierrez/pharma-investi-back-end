'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _greetClient = require('../../server/use-cases/client/greetClient');

var _greetClient2 = _interopRequireDefault(_greetClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * Created by diego on 28-12-16.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */
/**
 * Created by diego on 19-12-16.
 */


var assert = _chai2.default.assert;

describe('Client', () => {
  describe('#greetClient', function () {
    it('should greet to Client', _asyncToGenerator(function* () {

      let userName = 'diego';
      let lastName = 'gutierrez';

      // return "finish";


      // let response = await greetCLient(userName,lastName);


      // assert.equal(response, "grettings diego gutierrez");
    }));
  });
});