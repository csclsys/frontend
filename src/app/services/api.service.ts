import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = 'http://localhost:4000/';

  constructor(private http: HttpClient) {
  }

  /**

   * @param endpoint
   * @param data
   * @param errorHandler Function optional parameter that catches erros when needed
   */
  public get(endpoint, data?, errorHandler?) {
    const headers: HttpHeaders = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    console.log(data);
    if (typeof errorHandler === 'function') {
      return this.http.get(this.url + endpoint, {headers, params: data}).pipe(errorHandler(catchError(this.handleError)));
    }

    return this.http.get(this.url + endpoint, {headers, params: data});
  }

  public post(endpoint, data) {
    console.count('contPost');
    console.log(data);

    return this.http.post(this.url + endpoint, data, {}).pipe(
      catchError(this.handleError)
    );
  }

  public put(endpoint, data) {
    console.count('contPost');
    console.log(data);
    return this.http.put(this.url + endpoint, data, {}).pipe(
      catchError(this.handleError)
    );
  }

  public delete(endpoint, data) {
    console.log(data);
    return this.http.request('delete', this.url + endpoint, {body: data}).pipe(
      catchError(this.handleError)
    );
  }

  public update(endpoint, data) {
    return this.http.post(this.url + endpoint, data, {}).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error(error);
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, `);
      console.error(error.error);
    }
    console.log('O erro ocorrido foi::', error.error.msg.error_description);
    // @ts-ignore
    bootbox.alert(error.error.msg.error_description);
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }


}
