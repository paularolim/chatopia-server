import { AccountFirebaseRepository } from '../../../infra/database/firebase/account-repository/account';
import { RegisterController } from '../../../presentation/controllers/register/register-controller';
import { Controller } from '../../../presentation/protocols';
import { makeRegisterValidation } from './register-validation';

export const makeRegisterController = (): Controller => {
  const repository = new AccountFirebaseRepository();

  const validation = makeRegisterValidation();
  return new RegisterController(repository, validation);
};
