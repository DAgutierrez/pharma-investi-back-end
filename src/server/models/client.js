'use strict';

import greetClient from './../use-cases/client/greetClient';


module.exports =  function (Client) {

  Client.greetClient = async function(userName,lastName) {
    return  await greetClient(userName,lastName);
  }

  Client.remoteMethod('greetClient', {
    accepts: [
      {arg: 'userName', type: 'string'},
      {arg: 'lastName', type: 'string'},
    ],
    returns: {arg: 'greeting', type: 'string'}
  });

};



