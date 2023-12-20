import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { environment } from '../../../environments/environment.development';

export class BaseApiService {
  private baseUrl: string;
  public httpClient: HttpClient = inject(HttpClient);
  constructor(private baseApi: string) {
    this.baseUrl = environment.BASE_URL + baseApi;
  }
  public get<T>(url: string, options?: Object): Observable<any> {
    url = this.baseUrl + url;
    return this.httpClient.get(url, options);
  }

  public post<T>(
    url: string,
    body?: Object,
    options?: Object
  ): Observable<any> {
    url = this.baseUrl + url;
    return this.httpClient.post(url, body, options);
  }

  public put<T>(url: string, body?: Object, options?: Object): Observable<any> {
    url = this.baseUrl + url;
    return this.httpClient.put(url, body, options);
  }

  public delete<T>(url: string, options?: Object): Observable<any> {
    url = this.baseUrl + url;
    return this.httpClient.delete(url, options);
  }
}
