'use strict';

import greetUser from './../use-cases/client/greetClient';


module.exports =  function (Client) {

  Client.greetClient = async function(userName,lastName) {

    Client.create(
      {username: 'admin', email: 'admin@gmail.com', password: 'admin'},
    )
    .then(function (client) {
      console.log(client);
      // console.log(client);
    })

    // return greetUser(userName,lastName);

  }

  Client.remoteMethod('greetClient', {
    accepts: [
      {arg: 'userName', type: 'string'},
      {arg: 'lastName', type: 'string'},
    ],
    returns: {arg: 'greeting', type: 'string'}
  });

};



