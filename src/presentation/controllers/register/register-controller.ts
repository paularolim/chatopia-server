import { AddAccountRepository } from '../../../data/protocols/database/account/add-account-repository';
import { ServerError } from '../../errors';
import { badRequest, ok, serverError } from '../../helpers/http/http-helper';
import { Controller, HttpRequest, HttpResponse, Validation } from '../../protocols';

export class RegisterController implements Controller {
  constructor(
    private readonly addAccount: AddAccountRepository,
    private readonly validation: Validation,
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const validationError = this.validation.validate(httpRequest?.body);
      if (validationError) {
        return badRequest(validationError);
      }

      const account = await this.addAccount.add({
        email: httpRequest?.body?.email,
        name: httpRequest?.body?.name,
        password: httpRequest?.body?.password,
      });

      return ok(account);
    } catch (error) {
      return serverError(new ServerError());
    }
  }
}
