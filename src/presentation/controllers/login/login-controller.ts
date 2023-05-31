import { ServerError } from '../../errors';
import { badRequest, ok, serverError } from '../../helpers/http/http-helper';
import { Controller, HttpRequest, HttpResponse, Validation } from '../../protocols';

export class LoginController implements Controller {
  constructor(private readonly validation: Validation) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const validationError = this.validation.validate(httpRequest?.body);
      if (validationError) {
        return badRequest(validationError);
      }

      return ok({});
    } catch (error) {
      return serverError(new ServerError());
    }
  }
}
