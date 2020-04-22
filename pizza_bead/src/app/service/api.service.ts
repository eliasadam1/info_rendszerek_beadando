import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUri = 'http://localhost:4000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }


// Create C
createCustomer(data): Observable<any> {
  const url = `${this.baseUri}/addC`;
  return this.http.post(url, data)
    .pipe(
      catchError(this.errorMgmt)
    );
}

// Get all C
getCustomers() {
  return this.http.get(`${this.baseUri}/getallC`);
}

// Get C by ID
getCustomer(id): Observable<any> {
  const url = `${this.baseUri}/getC/${id}`;
  return this.http.get(url, { headers: this.headers }).pipe(
    map((res: Response) => {
      return res || {};
    }),
    catchError(this.errorMgmt)
  );
}

// Update C
updateCustomer(id, data): Observable<any> {
  const url = `${this.baseUri}/updateC/${id}`;
  return this.http.put(url, data, { headers: this.headers }).pipe(
    catchError(this.errorMgmt)
  );
}

// Delete C
deleteCustomer(id): Observable<any> {
  const url = `${this.baseUri}/deleteC/${id}`;
  return this.http.delete(url, { headers: this.headers }).pipe(
    catchError(this.errorMgmt)
  );
}

//////*****/////

// Create P
createProduct(data): Observable<any> {
  const url = `${this.baseUri}/addP`;
  return this.http.post(url, data)
    .pipe(
      catchError(this.errorMgmt)
    );
}

// Get all P
getProducts() {
  return this.http.get(`${this.baseUri}/getallP`);
}

// Get P by ID
getProduct(id): Observable<any> {
  const url = `${this.baseUri}/getP/${id}`;
  return this.http.get(url, { headers: this.headers }).pipe(
    map((res: Response) => {
      return res || {};
    }),
    catchError(this.errorMgmt)
  );
}

// Update P
updateProduct(id, data): Observable<any> {
  const url = `${this.baseUri}/updateP/${id}`;
  return this.http.put(url, data, { headers: this.headers }).pipe(
    catchError(this.errorMgmt)
  );
}

// Delete P
deleteProduct(id): Observable<any> {
  const url = `${this.baseUri}/deleteP/${id}`;
  return this.http.delete(url, { headers: this.headers }).pipe(
    catchError(this.errorMgmt)
  );
}





// Error handling
errorMgmt(error: HttpErrorResponse) {
  let errorMessage = '';
  if (error.error instanceof ErrorEvent) {
    // Get client-side error
    errorMessage = error.error.message;
  } else {
    // Get server-side error
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  console.log(errorMessage);
  return throwError(errorMessage);
}



}

