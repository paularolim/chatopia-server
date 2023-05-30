import { RegisterController } from '../../../presentation/controllers/register/register-controller';
import { Controller } from '../../../presentation/protocols';
import { makeRegisterValidation } from './register-validation';

export const makeRegisterController = (): Controller => {
  const validation = makeRegisterValidation();
  return new RegisterController(validation);
};
