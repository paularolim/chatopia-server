import { AccountModel } from '../models/account';

export interface SignInAccountModel {
  email: string;
  password: string;
}

export interface SignInAccount {
  signIn(account: SignInAccountModel): Promise<AccountModel | null>;
}
