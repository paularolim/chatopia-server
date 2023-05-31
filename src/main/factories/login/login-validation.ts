import {
  RequiredFieldsValidation,
  ValidationComposite,
} from '../../../presentation/helpers/validators';
import { Validation } from '../../../presentation/protocols';

export const makeLoginValidation = (): Validation => {
  const validations: Validation[] = [];

  for (const field of ['email', 'password']) {
    validations.push(new RequiredFieldsValidation(field));
  }

  return new ValidationComposite(validations);
};
