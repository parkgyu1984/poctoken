/*const HelloWorld = artifacts.require("HelloWorld"); 

module.exports = function(deployer) {
    deployer.deploy(HelloWorld);
};*/




const POCToken = artifacts.require("POCToken"); 

const _name = "PostCryptoToken";
const _symbol = "POC";
const _decimals = 18;
const _total_supply = 1000000000;

module.exports = function(deployer) {
    deployer.deploy(POCToken, _name, _symbol, _decimals, _total_supply);
};