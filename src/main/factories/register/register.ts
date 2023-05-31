import { DbAddAccount } from '../../../data/usecases/add-account/db-add-account';
import { AccountFirebaseRepository } from '../../../infra/database/firebase/account-repository/account';
import { RegisterController } from '../../../presentation/controllers/register/register-controller';
import { Controller } from '../../../presentation/protocols';
import { makeRegisterValidation } from './register-validation';

export const makeRegisterController = (): Controller => {
  const repository = new AccountFirebaseRepository();
  const dbAddAccount = new DbAddAccount(repository);

  const validation = makeRegisterValidation();
  return new RegisterController(dbAddAccount, validation);
};
