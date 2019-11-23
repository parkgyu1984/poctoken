/*import React, { Component } from "react";
import PKSToken from "../build/contracts/PKSToken.json";
import getWeb3 from "./utils/getWeb3";
import "./App.css";
import "./plugins/bootstrap/css/bootstrap.min.css";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rentalInstance : null,
            myAccount : null,
            myRentCar : 0,
            web3 : null
        };
    }

    componentWillMount() {
        getWeb3.then(result => {  
            this.setState({ web3 : result.web3 });
            
        });
    }

    instantiateContract() {
        const contract = require("truffle-contract");
        const pkstoken = contract(PKSToken);
        pkstoken.setProvidwer(this.state.web3.currentProvider);
    }
}*/

var http = require("http");
var fs = require("fs");
var web3 = require("web3");

var hostname = "localhost";
var port = "3000";

var app = http.createServer(function(request, response) {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.writeHead(200, { "Content-Type" : "text/html" });
    response.end(fs.readFileSync("index.html"));
}).listen(port, hostname);

console.log('Server running at http://'+ hostname +':'+ port);

