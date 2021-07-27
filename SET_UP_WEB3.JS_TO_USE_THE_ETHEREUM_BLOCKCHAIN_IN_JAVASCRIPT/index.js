const Web3 = require("web3");

const web3 = new Web3("https://localhost:8545");

web3.eth.isSyncing().then(console.log).catch(console.log);

web3.eth.getBlockNumber((err, result) => {
  if (err) {
    console.error(err);
  } else {
    console.log(result);
  }
});
