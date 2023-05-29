import { Controller, HttpRequest, HttpResponse } from '../../protocols';

// eslint-disable-next-line no-useless-escape
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

export class RegisterController implements Controller {
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    for (const field of ['name', 'email', 'password']) {
      if (!httpRequest?.body?.[field]) {
        return { statusCode: 400, body: { message: `Missing param: ${field}` } };
      }
    }

    const name = httpRequest?.body?.name;
    const password = httpRequest?.body?.password;
    const email = httpRequest?.body?.email?.toLowerCase();

    if (name.length < 5) {
      return {
        statusCode: 400,
        body: { message: 'name must be at least 5 characters long' },
      };
    }
    if (!email.match(emailRegex)) {
      return {
        statusCode: 400,
        body: { message: 'invalid e-mail' },
      };
    }
    if (password.length < 6) {
      return {
        statusCode: 400,
        body: { message: 'password must be at least 6 characters long' },
      };
    }

    return {
      statusCode: 500,
      body: { message: 'something went wrong' },
    };
  }
}
