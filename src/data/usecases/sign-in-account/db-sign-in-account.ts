import { AccountModel } from '../../../domain/models/account';
import { SignInAccount, SignInAccountModel } from '../../../domain/usecases/sign-in-account';
import { SignInAccountRepository } from '../../protocols/database/account/sign-in-account-repository';

export class DbSignInAccount implements SignInAccount {
  constructor(private readonly signInAccount: SignInAccountRepository) {}

  signIn(account: SignInAccountModel): Promise<AccountModel | null> {
    return this.signInAccount.signIn({ email: account.email, password: account.password });
  }
}
