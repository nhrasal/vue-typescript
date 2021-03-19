import { ENV } from "../../@config/ENV.config";
import { IGetAllApiOptions } from "../../@interfaces/Api.inteface";
import { Observable, of, Subject } from "rxjs";
import { ajax } from "rxjs/ajax";
import { catchError, map } from "rxjs/operators";
import { WatsonApiInstance } from "../../@config/api.config";
import { AuthHeader } from "./auth.apiService";
export const TodoService = {
  getAll: (option: IGetAllApiOptions): Observable<any> =>
    WatsonApiInstance.get(`todos`, { headers: AuthHeader() }),
};
