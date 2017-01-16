/**
 * Created by diego on 27-12-16.
 */

module.exports =  function(app) {

  // var Client = app.models.Client;
  // var Role = app.models.Role;
  // var RoleMapping = app.models.RoleMapping;
  // var Team = app.models.Team;
  //
  //
  // var dataSource = app.dataSources.mysqlCorp;
  //
  // dataSource.automigrate(async  () => {
  //
  //
  //   // let client = {username: 'admin', email: 'admin@gmail.com', password: 'admin'};
  //   //
  //   // let clientSave = await Client.create(client);
  //   //
  //   // let role = Role.create({name: 'admin'};
  //
  //
  //   Client.create([
  //     {username: 'admin', email: 'admin@gmail.com', password: 'admin'},
  //   ], function(err, users) {
  //     if (err) throw err;
  //
  //
  //     //create the admin role
  //     Role.create({
  //       name: 'admin'
  //     }, function(err, role) {
  //       if (err) throw err;
  //
  //       console.log('Created role:', role);
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
};
