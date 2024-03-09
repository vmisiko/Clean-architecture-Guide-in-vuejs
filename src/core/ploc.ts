import type { Router } from "vue-router";
import type { DataError, ErrorFold } from "./domain/DataError";

export class ploc<T> {
  public store: T;
  public router: Router;

  constructor({ store, router }: { store: T, router: Router  }) {
    this.store = store;
    this.router = router;
  }

  handleErrors(error: DataError): string {
    let err = '';
    switch (error.kind) {
      case "UnexpectedError":
        const unexpectedError = error as Extract<DataError, { kind: "UnexpectedError" }>;
        err = unexpectedError.error.message;
        break;
      case "ServerError":
        const serverError = error as Extract<DataError, { kind: "ServerError" }>;
        err = serverError.error.message;
        break;
      case "ErrorFold":
        const errorDataArray = error as ErrorFold;
        err = errorDataArray.error[0].message;
        break;
      case "AuthenticationError":
        this.router.push({name: 'AuthLogin'});
        break;
      default:
        err = 'An Error Occurred';
        break;
    }
    return err;
  }
}
