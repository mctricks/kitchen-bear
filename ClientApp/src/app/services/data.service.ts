import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoaderService } from './loader.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private headers: HttpHeaders;

  constructor(
    private loader: LoaderService,
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string
  ) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
    });
  }

  public delete<TResult>(
    next: (value: TResult) => void,
    url: string,
    params?: HttpParams
  ): void {
    const observable = this.http.delete<TResult>(this.formatUrl(url), {
      headers: this.headers,
      params,
    });
    this.process(observable, next);
  }
  public get<TResult>(
    next: (value: TResult) => void,
    url: string,
    params?: HttpParams
  ): void {
    const observable = this.http.get<TResult>(this.formatUrl(url), {
      headers: this.headers,
      params,
    });
    this.process(observable, next);
  }
  public post<Tbody, TResult>(
    next: (value: TResult) => void,
    url: string,
    body: Tbody
  ): void {
    const observable = this.http.post<TResult>(this.formatUrl(url), body, {
      headers: this.headers,
    });
    this.process(observable, next);
  }
  public put<Tbody, TResult>(
    next: (value: TResult) => void,
    url: string,
    body: Tbody
  ): void {
    const observable = this.http.put<TResult>(this.formatUrl(url), body, {
      headers: this.headers,
    });
    this.process(observable, next);
  }
  public showLoader(): boolean {
    return this.loader.showLoader();
  }

  private formatUrl(url: string): string {
    return this.baseUrl + 'api/' + url;
  }
  private process<T>(
    observable: Observable<T>,
    next: (value: T) => void
  ): void {
    const loader = this.loader.addLoader();
    observable.subscribe({
      next: (result) => {
        next(result);
        this.loader.removeLoader(loader);
      },
      error: (error: HttpErrorResponse) => {
        console.error(error);
        this.loader.removeLoader(loader);
      },
    });
  }
}
