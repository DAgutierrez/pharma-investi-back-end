'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = enableAuthentication;
function enableAuthentication(server) {
  // enable authentication

  server.enableAuth();
};