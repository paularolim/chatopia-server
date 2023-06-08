import { EmailValidator } from '../../../presentation/protocols/email-validator';

// eslint-disable-next-line no-useless-escape
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

export class EmailValidatorAdapter implements EmailValidator {
  isValid(email: string): boolean {
    return email.match(emailRegex) !== null;
  }
}
