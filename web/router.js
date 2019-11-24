module.exports = function(app)
{
    const Transaction = require("ethereumjs-tx").Transaction;
    const Common = require("ethereumjs-common").default;
    const WEB3 = require("web3");
    const web3 = new WEB3(new WEB3.providers.HttpProvider("http://localhost:8123/"));

    //set ABI
    const abiArray = [
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
            "name": "value",
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
            "name": "from",
            "type": "address"
          },
          {
            "name": "to",
            "type": "address"
          },
          {
            "name": "value",
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
        "constant": false,
        "inputs": [],
        "name": "unpause",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x3f4ba83a"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "account",
            "type": "address"
          },
          {
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "mint",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x40c10f19"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "burn",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x42966c68"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "account",
            "type": "address"
          }
        ],
        "name": "isPauser",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x46fbf68e"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "paused",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x5c975abb"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "renouncePauser",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x6ef8d66d"
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
        "constant": false,
        "inputs": [
          {
            "name": "account",
            "type": "address"
          },
          {
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "burnFrom",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x79cc6790"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "account",
            "type": "address"
          }
        ],
        "name": "addPauser",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x82dc1ec4"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "pause",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x8456cb59"
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
            "name": "account",
            "type": "address"
          }
        ],
        "name": "addMinter",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x983b2d56"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "renounceMinter",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x98650275"
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
            "name": "to",
            "type": "address"
          },
          {
            "name": "value",
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
            "name": "account",
            "type": "address"
          }
        ],
        "name": "isMinter",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0xaa271e1a"
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
            "indexed": false,
            "name": "account",
            "type": "address"
          }
        ],
        "name": "Paused",
        "type": "event",
        "signature": "0x62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "account",
            "type": "address"
          }
        ],
        "name": "Unpaused",
        "type": "event",
        "signature": "0x5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "name": "account",
            "type": "address"
          }
        ],
        "name": "PauserAdded",
        "type": "event",
        "signature": "0x6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f8"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "name": "account",
            "type": "address"
          }
        ],
        "name": "PauserRemoved",
        "type": "event",
        "signature": "0xcd265ebaf09df2871cc7bd4133404a235ba12eff2041bb89d9c714a2621c7c7e"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "name": "account",
            "type": "address"
          }
        ],
        "name": "MinterAdded",
        "type": "event",
        "signature": "0x6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f6"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "name": "account",
            "type": "address"
          }
        ],
        "name": "MinterRemoved",
        "type": "event",
        "signature": "0xe94479a9f7e1952cc78f2d6baab678adc1b772d936c6583def489e524cb66692"
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

    //set Contract Address
    const contractAddress = "0x93552781888C4E37457550c2C4eB5e0c3420Dd12";

    //set constants
    const chainId = 15;
    const gas = "0x21000";
    const gasPrice = "20000000000";
    const gasLimit = "‭100000‬";

    //accounts address
    const coinbase = "0xEeA3dA365eAbC00F424e8afB6f6F7750bFFB1203";  //coinbase
    const account1 = "0x6Ed87257208ea0B244caA90c723002f930630ba9";  //Account 1
    const account2 = "0x444641aed78f1dfb7411b62fbb4fe8c26a0c6848";  //Account 2
    const account3 = "0x34e5ccd76389fa98784781d8d80cee07fdc275a1";  //Account 3

    //send options
    var sendOptions = { from : coinbase,  gas : gas,  gasPrice : gasPrice };

    //contract
    var contract = new web3.eth.Contract(abiArray, contractAddress);

    /**
     * 계정의 트랙잭션 수 조회
     */
    function getTransactionCount(address) {
        web3.eth.getTransactionCount(address).then(console.log);
    }

    /**
     * ETH 잔액 조회
     */
    function getBalace(address) {
        web3.eth.getBalance(address).then(console.log);
    }

    /**
     * ETH 전송
     */
    function send(from, to, value) {
        var tx = {
            from : from,
            to : to,
            value : web3.utils.toWei(value, "ether"),
            gas : gas,
            gasPrice : gasPrice
        };

        web3.eth.sendTransaction(tx).then(console.log);
    }    

    /**
     * Token 잔액 조회
     */
    function getBalaceToken(address) {
        contract.methods.balanceOf(address).call().then(console.log);
    }
    
    /**
     * Token 전송
     */
    function sendToken(from, to, value) {
        contract.methods.transfer(to, web3.utils.toWei(value, "ether")).send(sendOptions).then(console.log);
    }

    /****************************************
     * Below ERC-20 Functions call and send *
     ****************************************/
    /**
     * 총 발행량
     */
    function totalSupply() {
        contract.methods.totalSupply().call().then(console.log);
    }

    /**
     * spender가 owner 계좌에서 가져갈 수 있는 토큰의 수를 반환한다.
     */
    function allowance(owner, spender) {
        contract.methods.allowance(owner, spender).call().then(console.log);
    }

    /**
     * spender에게 amount수만큼 계좌에서 토큰을 가져갈 권한을 부여한다.
     */
    function approve(spender, amount) {
        contract.methods.approve(spender, web3.utils.toWei(amount, "ether")).send(sendOptions).then(console.log);
    }

    /**
     * sender에서 recipient에게 allowed된 tokens를 전송한다.
     */
    function transferFrom(sender, recipient, amount) {
        contract.methods.transferFrom(sender, recipient, web3.utils.toWei(amount, "ether")).send(sendOptions).then(console.log);
    }

    /**
     * allowance 증가
     */
    function increaseAllowance(spender, addedValue) {
        contract.methods.increaseAllowance(spender, web3.utils.toWei(addedValue, "ether")).send(sendOptions).then(console.log);
    }

    /**
     * allowance 감소
     */
    function decreaseAllowance(spender, subtractedValue) {
        contract.methods.decreaseAllowance(spender, web3.utils.toWei(subtractedValue, "ether")).send(sendOptions).then(console.log);
    }
    
    /**
     * 토큰 소각
     */
    function burnFrom(account, amount) {
        contract.methods.burnFrom(account, web3.utils.toWei(amount, "ether")).send(sendOptions).then(console.log);
    }

    /**
     * 추가 발행
     */
    function mint(account, amount) {
        contract.methods.mint(account, web3.utils.toWei(amount, "ether")).send(sendOptions).then(console.log);
    }

    /**
     * send url
     */
    app.get('/send', function(req, res) {
      sendToken(coinbase, account1, "100");
      res.send({ isSuccess : true });
    });

     /**
     * test get
     */
    app.get('/', function(req, res) {
      //getTransactionCount(coinbase);
      //getBalaceToken(coinbase);
      //sendToken(coinbase, account1, "100000");
      //sendToken(coinbase, account2, "100000");
      //getBalace(coinbase);
      //send(coinbase, account2, "1000");

      //burnFrom(coinbase, "100000");

      res.send("");
  });
}
