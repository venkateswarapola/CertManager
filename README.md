# Getting Started with CertManager

This project is Ethereum based Certificate Generation and Validation System.

## Technology Stack

1. React for Application Frontend
2. Web3.JS Library for DApp and Contract interaction
3. MetaMask as Crypto wallet
4. Solidity for Smart Contract Deveopment
5. Remix IDE for Smart Contract Deployment


## Steps to Setup the Application

### Installation and Setup:

1. Install latest stable version of Node
2. Install MetaMask Web extension on preferred Browser
3. Clone the CertManager Dapp code form

#### `https://github.com/venkateswarapola/CertManager.git`

## Steps to run the Application

### Contract Setup:

1. Use Backend Folder that contains the Smart Contract code\
2. Open Remix IDE on brower, compile given Smart Contract\
3. Deploy the Smart Contract on MetaMask in the preferred Network\
4. Paste your Contract Address in the ConfigData.js file.

#### `contractAddress = <YOUR CONTRACT ADDRESS>`

### Running the Frontend Application:

Use the below commads in the certificate-app directory.

1. Install all the required Node Modules

### `npm install`

2. Run the Application

### `npm start`

3. Runs the app in the development mode
Open [http://localhost:3000](http://localhost:3000) to view it in your browser

4. Incase there are npm issues while installation of the application use aduit command and update command. Then install the node modules again

### `npm audit fix`

### `npm update`