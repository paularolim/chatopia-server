import { ServerError } from '../../errors';
import { badRequest, serverError } from '../../helpers/http/http-helper';
import { Controller, HttpRequest, HttpResponse } from '../../protocols';

// eslint-disable-next-line no-useless-escape
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

export class RegisterController implements Controller {
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    for (const field of ['name', 'email', 'password']) {
      if (!httpRequest?.body?.[field]) {
        return badRequest(new Error(`Missing param: ${field}`));
      }
    }

    const name = httpRequest?.body?.name;
    const password = httpRequest?.body?.password;
    const email = httpRequest?.body?.email?.toLowerCase();

    if (name.length < 5) {
      return badRequest(new Error('name must be at least 5 characters long'));
    }
    if (!email.match(emailRegex)) {
      return badRequest(new Error('invalid e-mail'));
    }
    if (password.length < 6) {
      return badRequest(new Error('password must be at least 6 characters long'));
    }

    return serverError(new ServerError());
  }
}
