import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ReserchDepartment, ReserchDepartments } from './ReserchDepartment';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ReserchServiceService {

  constructor(private http: HttpClient,) { }
  private ReserchUrl = 'api/ReserchDepartments';  // URL to web api

  getReseerchDepartmnet(): Observable<ReserchDepartment[]> {
    return this.http.get<ReserchDepartment[]>(this.ReserchUrl)
      .pipe(
    );
  }

  getResearchBysearch(search: string): Observable<ReserchDepartment[]> {
    return this.http.get<ReserchDepartment[]>(`${this.ReserchUrl}/?name=${search}`)
      .pipe(
    );
  }

  getResearch(id: number): Observable<ReserchDepartment> {
    const url = `${this.ReserchUrl}/${id}`;
    return this.http.get<ReserchDepartment>(url)
      .pipe(
    );
  }

  deleteResearch(id: number): Observable<ReserchDepartment> {
    const url = `${this.ReserchUrl}/${id}`;
    return this.http.delete<ReserchDepartment>(url)
      .pipe(
    );
  }

  updateReserch(Reserch: ReserchDepartment): Observable<any> {
    return this.http.put(this.ReserchUrl, Reserch).pipe(
    );
  }

  addResearch(Reserch: ReserchDepartment): Observable<ReserchDepartment> {
    return this.http.post<ReserchDepartment>(this.ReserchUrl, Reserch).pipe(
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      return of(result as T);
    };
  }
}
