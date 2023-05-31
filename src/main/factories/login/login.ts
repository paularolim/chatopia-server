import { DbSignInAccount } from '../../../data/usecases/sign-in-account/db-sign-in-account';
import { AccountFirebaseRepository } from '../../../infra/database/firebase/account-repository/account';
import { LoginController } from '../../../presentation/controllers/login/login-controller';
import { Controller } from '../../../presentation/protocols';
import { makeLoginValidation } from './login-validation';

export const makeLoginController = (): Controller => {
  const repository = new AccountFirebaseRepository();
  const dbSignInAccount = new DbSignInAccount(repository);

  const validations = makeLoginValidation();
  return new LoginController(dbSignInAccount, validations);
};
