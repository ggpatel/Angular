import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ReserchDepartment, ReserchDepartments } from './ReserchDepartment';
import { catchError, Observable, of, tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ReserchServiceService {

  constructor(private http: HttpClient,) { }
  private ReserchUrl = 'api/ReserchDepartments';  // URL to web api

  getReseerchDepartmnet(): Observable<ReserchDepartment[]> {
    return this.http.get<ReserchDepartment[]>(this.ReserchUrl)
      .pipe(
        tap(_ => console.log('fetched ReserchDepartment')),
        catchError(this.handleError<ReserchDepartment[]>('getReserchDeparmnet', [])),
      );
  }

  getHero(id: number): Observable<ReserchDepartment> {
    const url = `${this.ReserchUrl}/${id}`;
    return this.http.get<ReserchDepartment>(url).pipe(
      tap(_ => console.log(`fetched Reserch id=${id}`)),
      catchError(this.handleError<ReserchDepartment>(`getReserch id=${id}`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }
}
