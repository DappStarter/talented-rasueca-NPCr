require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner arena bone table edge rare remind equip inflict private flee security'; 
let testAccounts = [
"0xe9a251d9fb9e4838f5d6283b77864b1286df00e2e30515afab508839c89f16bb",
"0x67dd8b236c67d7beeca81cd3cac7a287dcdb4d169be304f907d5c8f4415cd29c",
"0xfadb8a4911730b2b114222aa0b46e6596906c98e3e434747eea988c8a55bf06b",
"0xff5a9a8e5c99bf8b24017130604db2f0a1f80381c4b2aeb76461866031557ad0",
"0xcc4c4e339d6c2dbe1101599a334462dda7c55028acfb445988c7c256503a2214",
"0x6cfb749244abcc1dde1478bd59220b781415fdd85a904af589fddd0317c6acd3",
"0x1f80d4542542a7b83aa4a1cffc1066d341c79559540570b7f0f533ce43389114",
"0x8bf34813f97edca53a58e2e99ae654bfc100529a2ed63e21c607f710ff6182ad",
"0xaef000c705844ad90035f7c4f093035685f541c7e462a7c02e657c6d57d219ab",
"0xd61b18d92a91921b2e075a7f3e90a8d8ebf6761cf82c6a27b3937795febeb4f7"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

