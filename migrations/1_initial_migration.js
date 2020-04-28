const Migrations = artifacts.require("Migrations");
const Guestbook = artifacts.require("Guestbook");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(Guestbook);
};
