from web3 import Web3
import json
import os

increaseAllownceTokens = []
Tokens = []
# Replace with your Ethereum node URL or Infura project ID
web3 = Web3(Web3.HTTPProvider("https://mainnet.infura.io/v3/229cae1a0a664a679417109176e3203d"))
abi = {}
with open(os.path.join('abis', 'allowanceABI.json'), 'r') as f:
    abi = json.load(f)
with open('increaseAllownce.json', 'r') as f:
    increaseAllownce = json.load(f)
    for token in increaseAllownce:
        tokenContract = web3.eth.contract(Web3.to_checksum_address(token), abi=abi)


