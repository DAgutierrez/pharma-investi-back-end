/**
 * Created by diego on 27-12-16.
 */

module.exports =  function(app) {

  var Client = app.models.Client;
  var Role = app.models.Role;
  var RoleMapping = app.models.RoleMapping;
  var Team = app.models.Team;


  var dataSource = app.dataSources.mysqlCorp;

  dataSource.automigrate(async  () => {


    let client = {username: 'admin', email: 'admin@gmail.com', password: 'admin'};

    let clientSave = await Client.create(client);


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

  })
};
