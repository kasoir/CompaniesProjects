import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, catchError, throwError, shareReplay } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class UserService {

	constructor(
		private http: HttpClient,
	) { }

	async getUsers(pageNumber: Number) {
		return await firstValueFrom(this.http.get<any[]>(`https://reqres.in/api/users?page=${pageNumber}`).pipe(
			shareReplay(1),
			catchError(error => {
				return throwError(() => error);
			})
		));
	}
	async getUserById(userId: Number) {
		return await firstValueFrom(this.http.get<any>(`https://reqres.in/api/users/${userId}`).pipe(
			shareReplay(1),
			catchError(error => {
				return throwError(() => error);
			})
		));
	}
}
