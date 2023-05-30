import {
  RequiredFieldsValidation,
  ValidationComposite,
} from '../../../presentation/helpers/validators';
import { Validation } from '../../../presentation/protocols';

export const makeRegisterValidation = (): Validation => {
  const validations: Validation[] = [];

  for (const field of ['name', 'email', 'password']) {
    validations.push(new RequiredFieldsValidation(field));
  }

  return new ValidationComposite(validations);
};
