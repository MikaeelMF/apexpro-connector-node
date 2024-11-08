import BN from 'bn.js';
import { HashFunction, KeyPair } from '../types';
export { SignableConditionalTransfer } from './conditional-transfer';
export { preComputeHashes } from './hashes';
export { SignableOraclePrice } from './oracle-price';
export { SignableOrder } from './order';
export { StarkSignable } from './stark-signable';
export { SignableTransfer } from './transfer';
export { SignableWithdrawal } from './withdrawal';
export declare const hashInWorkerThread: HashFunction;
export declare function genSimplifyOnBoardingSignature(privateKey: string | KeyPair, apikeyHash: BN): Promise<string>;