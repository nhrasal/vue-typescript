import { ENV } from './../../@config/ENV.config';
import { IGetAllApiOptions } from './../../@interfaces/Api.inteface';
import { Observable, of, Subject } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { catchError, map } from 'rxjs/operators';
import { WatsonApiInstance } from '../../@config/api.config';
import { AuthHeader } from './auth.apiService';
export const BrandService = {
	getAll1: (option: IGetAllApiOptions) => {
		return ajax(
			`${ENV.WatsonApiEndpoint}brands?page=${option.page}&take=${
				option.take
			}&searchTerm=${option.searchTerm || ''}`
		).pipe(
			map((res: any) => {
				return res.response;
			}),
			
		);
	},
	getAll: (option: IGetAllApiOptions): Observable<any> =>
		WatsonApiInstance.get(
			`brands?page=${option.page}&take=${option.take}&searchTerm=${
				option.searchTerm || ''
			}`,
			{ headers: AuthHeader() }
		),

	create: (newModelData:any) =>
		WatsonApiInstance.post('brands/', newModelData, { headers: AuthHeader() }),
	getOne: (id:any) =>
		WatsonApiInstance.get('brands/' + id, { headers: AuthHeader() }),
	deleteOne: (id:any): Observable<any> =>
		WatsonApiInstance.delete('brands/' + id, { headers: AuthHeader() }),
	update: (editModelData:any, id:any) =>
		WatsonApiInstance.put(`brands/${id}`, editModelData, {
			headers: AuthHeader(),
		}),
};

export const useObservable = () => {
	const subj = new Subject<boolean>();

	const next = (value: boolean): void => {
		subj.next(value);
	};

	return { change: subj.asObservable(), next };
};
