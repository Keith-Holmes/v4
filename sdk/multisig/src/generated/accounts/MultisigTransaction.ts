/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as web3 from '@solana/web3.js'
import * as beet from '@metaplex-foundation/beet'
import * as beetSolana from '@metaplex-foundation/beet-solana'
import {
  TransactionStatus,
  transactionStatusBeet,
} from '../types/TransactionStatus'
import {
  MultisigTransactionMessage,
  multisigTransactionMessageBeet,
} from '../types/MultisigTransactionMessage'

/**
 * Arguments used to create {@link MultisigTransaction}
 * @category Accounts
 * @category generated
 */
export type MultisigTransactionArgs = {
  creator: web3.PublicKey
  multisig: web3.PublicKey
  transactionIndex: beet.bignum
  authorityIndex: number
  authorityBump: number
  status: TransactionStatus
  bump: number
  approved: web3.PublicKey[]
  rejected: web3.PublicKey[]
  cancelled: web3.PublicKey[]
  message: MultisigTransactionMessage
}

export const multisigTransactionDiscriminator = [
  37, 242, 192, 200, 155, 205, 171, 82,
]
/**
 * Holds the data for the {@link MultisigTransaction} Account and provides de/serialization
 * functionality for that data
 *
 * @category Accounts
 * @category generated
 */
export class MultisigTransaction implements MultisigTransactionArgs {
  private constructor(
    readonly creator: web3.PublicKey,
    readonly multisig: web3.PublicKey,
    readonly transactionIndex: beet.bignum,
    readonly authorityIndex: number,
    readonly authorityBump: number,
    readonly status: TransactionStatus,
    readonly bump: number,
    readonly approved: web3.PublicKey[],
    readonly rejected: web3.PublicKey[],
    readonly cancelled: web3.PublicKey[],
    readonly message: MultisigTransactionMessage
  ) {}

  /**
   * Creates a {@link MultisigTransaction} instance from the provided args.
   */
  static fromArgs(args: MultisigTransactionArgs) {
    return new MultisigTransaction(
      args.creator,
      args.multisig,
      args.transactionIndex,
      args.authorityIndex,
      args.authorityBump,
      args.status,
      args.bump,
      args.approved,
      args.rejected,
      args.cancelled,
      args.message
    )
  }

  /**
   * Deserializes the {@link MultisigTransaction} from the data of the provided {@link web3.AccountInfo}.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static fromAccountInfo(
    accountInfo: web3.AccountInfo<Buffer>,
    offset = 0
  ): [MultisigTransaction, number] {
    return MultisigTransaction.deserialize(accountInfo.data, offset)
  }

  /**
   * Retrieves the account info from the provided address and deserializes
   * the {@link MultisigTransaction} from its data.
   *
   * @throws Error if no account info is found at the address or if deserialization fails
   */
  static async fromAccountAddress(
    connection: web3.Connection,
    address: web3.PublicKey,
    commitmentOrConfig?: web3.Commitment | web3.GetAccountInfoConfig
  ): Promise<MultisigTransaction> {
    const accountInfo = await connection.getAccountInfo(
      address,
      commitmentOrConfig
    )
    if (accountInfo == null) {
      throw new Error(
        `Unable to find MultisigTransaction account at ${address}`
      )
    }
    return MultisigTransaction.fromAccountInfo(accountInfo, 0)[0]
  }

  /**
   * Provides a {@link web3.Connection.getProgramAccounts} config builder,
   * to fetch accounts matching filters that can be specified via that builder.
   *
   * @param programId - the program that owns the accounts we are filtering
   */
  static gpaBuilder(
    programId: web3.PublicKey = new web3.PublicKey(
      '7YYnaRgQeHYd2FKGKkwASM2ZNZHTo1GvcicsyKKFvcoh'
    )
  ) {
    return beetSolana.GpaBuilder.fromStruct(programId, multisigTransactionBeet)
  }

  /**
   * Deserializes the {@link MultisigTransaction} from the provided data Buffer.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static deserialize(buf: Buffer, offset = 0): [MultisigTransaction, number] {
    return multisigTransactionBeet.deserialize(buf, offset)
  }

  /**
   * Serializes the {@link MultisigTransaction} into a Buffer.
   * @returns a tuple of the created Buffer and the offset up to which the buffer was written to store it.
   */
  serialize(): [Buffer, number] {
    return multisigTransactionBeet.serialize({
      accountDiscriminator: multisigTransactionDiscriminator,
      ...this,
    })
  }

  /**
   * Returns the byteSize of a {@link Buffer} holding the serialized data of
   * {@link MultisigTransaction} for the provided args.
   *
   * @param args need to be provided since the byte size for this account
   * depends on them
   */
  static byteSize(args: MultisigTransactionArgs) {
    const instance = MultisigTransaction.fromArgs(args)
    return multisigTransactionBeet.toFixedFromValue({
      accountDiscriminator: multisigTransactionDiscriminator,
      ...instance,
    }).byteSize
  }

  /**
   * Fetches the minimum balance needed to exempt an account holding
   * {@link MultisigTransaction} data from rent
   *
   * @param args need to be provided since the byte size for this account
   * depends on them
   * @param connection used to retrieve the rent exemption information
   */
  static async getMinimumBalanceForRentExemption(
    args: MultisigTransactionArgs,
    connection: web3.Connection,
    commitment?: web3.Commitment
  ): Promise<number> {
    return connection.getMinimumBalanceForRentExemption(
      MultisigTransaction.byteSize(args),
      commitment
    )
  }

  /**
   * Returns a readable version of {@link MultisigTransaction} properties
   * and can be used to convert to JSON and/or logging
   */
  pretty() {
    return {
      creator: this.creator.toBase58(),
      multisig: this.multisig.toBase58(),
      transactionIndex: (() => {
        const x = <{ toNumber: () => number }>this.transactionIndex
        if (typeof x.toNumber === 'function') {
          try {
            return x.toNumber()
          } catch (_) {
            return x
          }
        }
        return x
      })(),
      authorityIndex: this.authorityIndex,
      authorityBump: this.authorityBump,
      status: 'TransactionStatus.' + TransactionStatus[this.status],
      bump: this.bump,
      approved: this.approved,
      rejected: this.rejected,
      cancelled: this.cancelled,
      message: this.message,
    }
  }
}

/**
 * @category Accounts
 * @category generated
 */
export const multisigTransactionBeet = new beet.FixableBeetStruct<
  MultisigTransaction,
  MultisigTransactionArgs & {
    accountDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['accountDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['creator', beetSolana.publicKey],
    ['multisig', beetSolana.publicKey],
    ['transactionIndex', beet.u64],
    ['authorityIndex', beet.u8],
    ['authorityBump', beet.u8],
    ['status', transactionStatusBeet],
    ['bump', beet.u8],
    ['approved', beet.array(beetSolana.publicKey)],
    ['rejected', beet.array(beetSolana.publicKey)],
    ['cancelled', beet.array(beetSolana.publicKey)],
    ['message', multisigTransactionMessageBeet],
  ],
  MultisigTransaction.fromArgs,
  'MultisigTransaction'
)