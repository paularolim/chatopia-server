import { AccountModel } from '../../../../domain/models/account';
import { SignInAccountModel } from '../../../../domain/usecases/sign-in-account';

export interface SignInAccountRepository {
  signIn: (data: SignInAccountModel) => Promise<AccountModel | null>;
}
