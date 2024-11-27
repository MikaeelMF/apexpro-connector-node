import { solidityPackedKeccak256 } from 'ethers';

export const solidityKeccak256 = (type: string[], values: string[]) => {
  // web3
  // Web3.utils.soliditySha3
  // v6
  // return ethers.solidityPackedKeccak256(type, values)
  // v5
  return solidityPackedKeccak256(type, values);
};
