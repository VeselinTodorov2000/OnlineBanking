import {DebitCardModel} from "./debitcard.model";
import {SafeModel} from "./safe.model";
import {TransactionModel} from "./transaction.model";

export class AccountModel {
  id?: number;
  iban?: string;
  funds?: number;
  debitCard?: DebitCardModel;
  safes?: [SafeModel];
  transactions?: [TransactionModel];
}
