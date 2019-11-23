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

//web3.eth.personal.unlockAccount("0xEeA3dA365eAbC00F424e8afB6f6F7750bFFB1203", "qkrrb84!@");
//web3.eth.personal.unlockAccount("0x6Ed87257208ea0B244caA90c723002f930630ba9", "qkrrb84!@");