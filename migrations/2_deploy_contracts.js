// migrations/2_deploy_contracts.js
const Token = artifacts.require("Token");

module.exports = function (deployer) {
  deployer.deploy(Token);
};
