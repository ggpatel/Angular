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
        catchError(this.handleError<ReserchDepartment[]>('getReserch', [])),
      );
  }

  getResearchBysearch(search: string): Observable<ReserchDepartment[]> {
    return this.http.get<ReserchDepartment[]>(`${this.ReserchUrl}/?name=${search}`)
      .pipe(
        tap(_ => console.log('fetched ReserchDepartment')),
        catchError(this.handleError<ReserchDepartment[]>('getReserch', [])),
      );
  }

  getResearch(id: number): Observable<ReserchDepartment> {
    const url = `${this.ReserchUrl}/${id}`;
    return this.http.get<ReserchDepartment>(url)
      .pipe(
        tap(_ => console.log(`fetched Reserch id=${id}`)),
        catchError(this.handleError<ReserchDepartment>(`getReserchDepartment id=${id}`))
      );
  }

  deleteResearch(id: number): Observable<ReserchDepartment> {
    const url = `${this.ReserchUrl}/${id}`;
    return this.http.delete<ReserchDepartment>(url)
      .pipe(
        tap(_ => console.log(`deleted Reserch id=${id}`)),
        catchError(this.handleError<ReserchDepartment>(`deleteResearch id=${id}`))
      );
  }

  updateReserch(Reserch: ReserchDepartment): Observable<any> {
    return this.http.put(this.ReserchUrl, Reserch).pipe(
      tap(_ => console.log('updatedReserch')),
      catchError(this.handleError<any>('updatedReserch'))
    );
  }

  addResearch(Reserch: ReserchDepartment): Observable<ReserchDepartment> {
    return this.http.post<ReserchDepartment>(this.ReserchUrl, Reserch).pipe(
      tap(_ => console.log('updatedReserch')),
      catchError(this.handleError<ReserchDepartment>('updatedReserch'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      return of(result as T);
    };
  }
}
