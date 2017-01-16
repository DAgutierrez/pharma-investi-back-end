"use strict";

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * Created by diego on 27-12-16.
 */

module.exports = (() => {
  var _ref = _asyncToGenerator(function* (app) {

    // var Client = app.models.Client;
    // var Role = app.models.Role;
    // var RoleMapping = app.models.RoleMapping;
    // var Team = app.models.Team;

    var dataSource = app.dataSources.mysqlCorp;

    //autoUpdate Tables
    let update = yield dataSource.autoupdate();

    // Create Role
    // let roleAdmin = await Role.create({name: 'admin'});


    // if(roleAdmin) {
    //   console.log('Created role:', roleAdmin);
    // }


    //     //create the admin role
    //     Role.create({
    //       name: 'admin'
    //     }, function(err, role) {
    //       if (err) throw err;
    //
    //
    //
    //       //make bob an admin
    //       role.principals.create({
    //         principalType: RoleMapping.USER,
    //         principalId: users[0].id
    //       }, function(err, principal) {
    //         if (err) throw err;
    //
    //         console.log('Created principal:', principal);
    //       });
    //     });
    //   });
    // })
  });

  return function (_x) {
    return _ref.apply(this, arguments);
  };
})();