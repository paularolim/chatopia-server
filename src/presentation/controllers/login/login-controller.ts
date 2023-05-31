import { SignInAccountRepository } from '../../../data/protocols/database/account/sign-in-account-repository';
import { ServerError } from '../../errors';
import { badRequest, ok, serverError } from '../../helpers/http/http-helper';
import { Controller, HttpRequest, HttpResponse, Validation } from '../../protocols';

export class LoginController implements Controller {
  constructor(
    private readonly signInAccount: SignInAccountRepository,
    private readonly validation: Validation,
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const validationError = this.validation.validate(httpRequest?.body);
      if (validationError) {
        return badRequest(validationError);
      }

      const account = await this.signInAccount.signIn({
        email: httpRequest?.body?.email,
        password: httpRequest?.body?.password,
      });

      return ok(account);
    } catch (error) {
      return serverError(new ServerError());
    }
  }
}
