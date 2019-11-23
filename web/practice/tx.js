const Transaction = require("ethereumjs-tx").Transaction;
const Common = require("ethereumjs-common").default;
const WEB3 = require("web3");
const web3 = new WEB3(new WEB3.providers.HttpProvider("http://localhost:8123/"));

//set constants
const chainId = 15;
const from = "0xEeA3dA365eAbC00F424e8afB6f6F7750bFFB1203";
const to = "0x6Ed87257208ea0B244caA90c723002f930630ba9";
const amount = "100";
const gas = "21000";
const gasPrice = "20000000000";
const gasLimit = "‭100000‬";
const value = "1";

//set variables
var count = 0;

//set custom network
const customCommon = Common.forCustomChain("mainnet", { name : "localTestNet8123", networkId : chainId, chainId : chainId }, "petersburg");

//get transaction count
web3.eth.getTransactionCount(from).then(function(v){ console.log(v); count = v });

var abiArray = [
  {
    "constant": true,
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x06fdde03"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "spender",
        "type": "address"
      },
      {
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x095ea7b3"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x18160ddd"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "sender",
        "type": "address"
      },
      {
        "name": "recipient",
        "type": "address"
      },
      {
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x23b872dd"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "decimals",
    "outputs": [
      {
        "name": "",
        "type": "uint8"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x313ce567"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "spender",
        "type": "address"
      },
      {
        "name": "addedValue",
        "type": "uint256"
      }
    ],
    "name": "increaseAllowance",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x39509351"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "account",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x70a08231"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x95d89b41"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "spender",
        "type": "address"
      },
      {
        "name": "subtractedValue",
        "type": "uint256"
      }
    ],
    "name": "decreaseAllowance",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0xa457c2d7"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "recipient",
        "type": "address"
      },
      {
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transfer",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0xa9059cbb"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "owner",
        "type": "address"
      },
      {
        "name": "spender",
        "type": "address"
      }
    ],
    "name": "allowance",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0xdd62ed3e"
  },
  {
    "inputs": [
      {
        "name": "name",
        "type": "string"
      },
      {
        "name": "symbol",
        "type": "string"
      },
      {
        "name": "decimals",
        "type": "uint8"
      },
      {
        "name": "totalSupply",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor",
    "signature": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event",
    "signature": "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "spender",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event",
    "signature": "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925"
  }
];

var contractAddr = "0x3b760f914d89990bFb922D9115285E2512761F5F";
var contract = new web3.eth.Contract(abiArray, contractAddr);
//var data = contract.methods.transfer(to, amount).encodeABI();

//contract.methods.transfer(to, 999999999999999).send({from:from, gas:0x21000, gasPrice:20000000000}).then(console.log);
contract.methods.transfer(to, web3.utils.toWei("100", "ether")).send({from:from, gas:0x21000, gasPrice:20000000000}).then(console.log);

// check the balance
contract.methods.balanceOf(from).call().then(function(balance){ console.log(balance) } );

//unlock
//web3.eth.personal.unlockAccount("0xEeA3dA365eAbC00F424e8afB6f6F7750bFFB1203", "qkrrb84!@");
//web3.eth.personal.unlockAccount("0x6Ed87257208ea0B244caA90c723002f930630ba9", "qkrrb84!@");

// var tx = { 
//     "from" : from, 
//     "gas" : web3.utils.toHex(gas),
//     "gasPrice" : web3.utils.toHex(gasPrice),
//     "gasLimit" : web3.utils.toHex(gasLimit),
//     "to" : contractAddr,
//     "value" : web3.utils.toHex(value),
//     "data" : data,
//     "nonce" : web3.utils.toHex(count)
// };

// var txParams = { 
//     "from" : from,
//     "to" : contractAddr,
//     "value" : web3.utils.toHex(1000000000),
//     "gas" : web3.utils.toHex(2000000)
// };

// web3.eth.sendTransaction({
//   from : from,
//   to : contractAddr,
//   value : 1000000000000000000,
//   gas : 0x21000,
//   data : contract.methods.transfer(to, 1000).encodeABI()
// }, function(error, hash){
//   console.log(hash);
//   console.log(error);
// });

//set private key
//var privateKey = new Buffer.from("e55f45c3422d88bbcd6316472c6fbb15703685b0a20890775c619966f1b75e62", "hex");
//var privateKey = "0xf3d0d963064f44cc1b27c82f60115d9f01474d90997dd9b26858b1418a6bc01c";

// set TX
//var tx = new Transaction(txParams, { common : customCommon });

/*var tx = new Transaction(txParams, { common : customCommon });
var signedData = web3.eth.personal.signTransaction(tx, privateKey);
new Promise(resolve => {
  try {
    web3.eth.sendSignedTransaction(signedData.raw)
    .on('receipt', receipt => {
      resolve(receipt)
    })
    .catch((err) => {
      console.log('This does not work', err)
      resolve(false)
    })
  } catch (e) {
    console.log('This does not work either', e)
    resolve(false)
  }
})*/


//web3.eth.accounts.signTransaction(tx, privateKey).then(function(err){ console.log(err) });
//web3.eth.accounts.signTransaction(new TX(tx, { common : customCommon }), privateKey).then(console.log);

/*< check transaction
if (transaction.validate() && bufferToHex(transaction.getSenderAddress()) === bufferToHex(privateToAddress(privateKey))) {
  console.log('Valid signature')
} else {
  console.log('Invalid signature')
}
console.log("The transaction's chain id is", transaction.getChainId())
>*/

// send
//var serializedTx = transaction.serialize();
//var raw = '0x' + serializedTx.toString('hex');
//web3.eth.sendSignedTransaction(raw, (err, txHash) => { console.log( "err", err ) });

//account.sendSignedTransaction(transaction);

//contract.methods.transfer(toAddr, amount).call().then(function(isSuccess){ console.log(isSuccess) } );
