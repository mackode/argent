const Web3 = require('web3');
const provider = new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/a5dc72f3052548aeb7c7bb9f451d9ed2");
const web3 = new Web3(provider);

web3.eth.net.isListening()
    .then(() => console.log('web3 is connected'))
    .catch(e => console.log('web3 error'));

const abi = [{ "constant": false, "inputs": [{ "name": "hash", "type": "bytes32" }], "name": "apply", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "email", "type": "string" }], "name": "getApplicationID", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }];

const contractAddress = "0xcbbfbafedb0eb83016d2a96a4e80d30b20fa3e30";
const contract = new web3.eth.Contract(abi, contractAddress);
const emailHash = "biuro@mackode.pl";
const email = "0x3c378992b7b1ce72a253173e6890e145180aa2db00cca47769df313d44a1fe20";
const param = web3.eth.abi.encodeParameter('bytes32', web3.utils.rightPad(email, 32));
const param1 = web3.eth.abi.encodeParameter('string', "biuro@mackode.pl");

contract.methods.apply(param).call().then(function() {
    contract.methods.getApplicationID(param1).call().then(console.log);
});