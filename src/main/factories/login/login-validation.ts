import {
  RequiredFieldsValidation,
  ValidationComposite,
} from '../../../presentation/helpers/validators';
import { EmailValidation } from '../../../presentation/helpers/validators/email-validation';
import { Validation } from '../../../presentation/protocols';
import { EmailValidatorAdapter } from '../../adapters/validators/email-validator-adapter';

export const makeLoginValidation = (): Validation => {
  const validations: Validation[] = [];

  for (const field of ['email', 'password']) {
    validations.push(new RequiredFieldsValidation(field));
  }

  validations.push(new EmailValidation('email', new EmailValidatorAdapter()));

  return new ValidationComposite(validations);
};
