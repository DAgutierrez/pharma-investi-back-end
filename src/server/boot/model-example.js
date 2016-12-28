/**
 * Created by diego on 27-12-16.
 */


export default function(app) {

  var Client = app.models.Client;
  var Role = app.models.Role;
  var RoleMapping = app.models.RoleMapping;
  var Team = app.models.Team;


  var dataSource = app.dataSources.mysqlCorp;

  dataSource.automigrate(function (err) {
    if(err) throw  err;

    Client.create([
        {username: 'admin', email: 'admin@gmail.com', password: 'admin'},
      ], function(err, clients) {
        if (err) console.log(err.stack);

        //create the admin role
        Role.create({
          name: 'admin'
        }, function(err, role) {
          if (err) throw err;

          //make bob an admin
          role.principals.create({
            principalType: RoleMapping.USER,
            principalId: clients[0].id
          }, function(err, principal) {
            if (err) throw err;

          });
        });
      });
  })
};
