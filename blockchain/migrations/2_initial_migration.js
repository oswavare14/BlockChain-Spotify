const Migrations = artifacts.require("Albumes");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
