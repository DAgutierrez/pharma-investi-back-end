/**
 * Created by diego on 27-12-16.
 */

module.exports =  async function(app) {

  // var Client = app.models.Client;
  // var Role = app.models.Role;
  // var RoleMapping = app.models.RoleMapping;
  // var Team = app.models.Team;

  var dataSource = app.dataSources.mysqlCorp;


  //autoUpdate Tables
  let update = await dataSource.autoupdate();


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
};
