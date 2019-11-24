const Transaction = require("ethereumjs-tx").Transaction;
const Common = require("ethereumjs-common").default;
const WEB3 = require("web3");
const web3 = new WEB3(new WEB3.providers.HttpProvider("http://localhost:8123/"));

const PASS = "qkrrb84!@";
const DURATION = 60 * 60 * 24;

//전체 계정 잠금 해제
web3.eth.getAccounts().then(function(accounts) {
    for( var i in accounts ) {
        web3.eth.personal.unlockAccount(accounts[i], PASS, DURATION).then(console.log);
    }
});