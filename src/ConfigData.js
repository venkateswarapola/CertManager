//Smart Contract ABI
export const contractABI = [
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "receiver",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "hash",
                "type": "string"
            }
        ],
        "name": "CertificateStored",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "certificates",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getCertificate",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_address",
                "type": "address"
            }
        ],
        "name": "getCertificateByAddress",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "recipient",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "hash",
                "type": "string"
            }
        ],
        "name": "storeCertificate",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

//Contract Address Variable
export const contractAddress = '0xbc83275D4BF1989391E12bfaC9993D837dCAaC4d';

//Student Data Config
export const dataset = {
    '1225459157':'0x406c5c9aFC0159E9DF3AD9545B908193fC362e9f',
    '1225451110':'0xeB0Dd8ef245677B135542cA6Ee42fc5E93701B1B',
    '1225687827':'0x4ccbb1b4001e4e2782cd6bf596FaA39F5088614E',
    '1225667099':'0x969849B4d0B48A99B8D17245164Dd33F8dc9c294',
    '1225484663':'0xAd66484f61A737Be78f45D0374c71BE55b5DaC83',
    '1225687827':'0x4ccbb1b4001e4e2782cd6bf596FaA39F5088614E'
}