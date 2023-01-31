import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProductManagement } from './ProductManagement';
import { catchError, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http: HttpClient,) { }
  private ProductUrl = 'api/ProductManagementS';  // URL to web api

  getProductManagement(): Observable<ProductManagement[]> {
    return this.http.get<ProductManagement[]>(this.ProductUrl)
      .pipe(
        tap(_ => console.log('fetched heroes')),
        catchError(this.handleError<ProductManagement[]>('getProductManagment', []))
      );
  };

  getProduct(id: number): Observable<ProductManagement> {
    const url = `${this.ProductUrl}/${id}`;
    return this.http.get<ProductManagement>(url).pipe(
      tap(_ => console.log(`fetched ProductManagement id=${id}`)),
      catchError(this.handleError<ProductManagement>(`getProduct id=${id}`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

};
