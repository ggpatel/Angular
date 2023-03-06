import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProductManagement } from './ProductManagement';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http: HttpClient,) { }
  private ProductUrl = 'api/ProductManagementS';  // URL to web api

  getProductManagement(): Observable<ProductManagement[]> {
    return this.http.get<ProductManagement[]>(this.ProductUrl)
      .pipe();
  };

  getProduct(id: number): Observable<ProductManagement> {
    const url = `${this.ProductUrl}/${id}`;
    return this.http.get<ProductManagement>(url).pipe();
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

};
