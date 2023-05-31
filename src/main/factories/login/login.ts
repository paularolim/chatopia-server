import { LoginController } from '../../../presentation/controllers/login/login-controller';
import { Controller } from '../../../presentation/protocols';
import { makeLoginValidation } from './login-validation';

export const makeLoginController = (): Controller => {
  const validations = makeLoginValidation();
  return new LoginController(validations);
};
