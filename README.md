# Token Project

This is a basic ERC-20 token project created using Truffle and Solidity. The project demonstrates how to set up and deploy a simple ERC-20 token contract and write tests to verify the functionality of the contract.

## Directory Structure
TokenProject/  
|── contracts/  
│ |── Migrations.sol  
│ |── Token.sol  
|── migrations/  
│ |── 1_initial_migration.js  
│ |── 2_deploy_contracts.js  
|── test/  
│ |── token.js  
|── truffle-config.js  


## Prerequisites

Before you begin, make sure you have the following software installed:

- [Node.js](https://nodejs.org/)
- [Truffle](https://www.trufflesuite.com/)
- [Ganache](https://www.trufflesuite.com/ganache) or [ganache-cli](https://github.com/trufflesuite/ganache-cli)

## Install project dependencies:
```bash
npm install
```

## Compiling and Deploying Contracts
### Start a local blockchain, such as Ganache:
```bash
ganache-cli
```
### Compile the contracts:
```bash
truffle compile
```
### Deploy the contracts:
```bash
truffle migrate --reset
```

## Testing the Contracts
### Run the following command to excute the test script:
```bash
truffle test
```

## Contracts
```Token.sol```  
This is the main ERC-20 token contract for the project. It implements basic token transfer functionality.

```Migrations.sol```  
This contract is used by Truffle to manage and track the migration process.

Migration Scripts  
```1_initial_migration.js```  
Used to deploy the Migrations contract.

```2_deploy_contracts.js```  
Used to deploy the Token contract.

## Test Script
```token.js```  
Contains two basic tests:
Verifies that the first account receives the initial 1,000,000 Token.
Verifies the token transfer functionality from the first account to the second account.

## Configuration File
```truffle-config.js```  
Configures the Truffle framework, including network settings and compiler version.