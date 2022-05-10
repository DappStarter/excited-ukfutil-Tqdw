require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek surge trip film birth stick holiday install person force genre'; 
let testAccounts = [
"0x3634c6e983d0a17189f259c9fd1319313550a80dda7c9712870dd86c38ec6fff",
"0x35c6e37e5b537270c24a1a77210c311a7b7b29e4b27d2d1356b396650036aaae",
"0xd46ec878af739e5e68adec1eeb8f86b75b17a6caccb1ac1f8d6bf29f26d9739e",
"0x91bde144daa7045cdcb5f003d1ca6b43932337763631b686b6eabe796f046c88",
"0x6327f6133f296f3d88535d3f92aa470dac92af173eceb02dbddef86f1a0f5d38",
"0xffa0fdd0ae36994bb905c73ab065ab85029d647847c9e72a7b3f3c52dd7b328f",
"0xb2c3f4e74ba96b0b97f368360682a22ac0c4274f03f62ed80bfed38e052be9b7",
"0x5a88b876efa3c7f41f0f074cf948e5232a4b4cac9bc59e72abbd63051560c970",
"0xbf386e3ece1edd9e075d735342996d98a0dae1da5ea4b4402264d54a600584c9",
"0x1876f2424c3bf668d12c6d8084afce11858b4bf1723f9a7572b150bd838080a9"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

