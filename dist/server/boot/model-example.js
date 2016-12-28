'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * Created by diego on 27-12-16.
 */

module.exports = function (app) {

  var Client = app.models.Client;
  var Role = app.models.Role;
  var RoleMapping = app.models.RoleMapping;
  var Team = app.models.Team;

  var dataSource = app.dataSources.mysqlCorp;

  dataSource.automigrate(_asyncToGenerator(function* () {

    let client = { username: 'admin', email: 'admin@gmail.com', password: 'admin' };

    let clientSave = yield Client.create(client);

    // Client.create([
    //     {username: 'admin', email: 'admin@gmail.com', password: 'admin'},
    //   ])
    //   .then(function (client) {
    //     console.log("here");
    //     // console.log(client);
    //   })


    //create the admin role
    // Role.create({
    //   name: 'admin'
    // }, function(err, role) {
    //   if (err) throw err;
    //
    //   //make bob an admin
    //   role.principals.create({
    //     principalType: RoleMapping.USER,
    //     principalId: clients[0].id
    //   }, function(err, principal) {
    //     if (err) throw err;
    //
    //   });
    // });
  }));
};