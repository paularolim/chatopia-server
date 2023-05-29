import { RegisterController } from '../../../presentation/controllers/register/register-controller';
import { Controller } from '../../../presentation/protocols';

export const makeRegisterController = (): Controller => new RegisterController();
