import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpStatusCode } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '@environment';
import { MessageService } from 'primeng/api';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    constructor(
        private _httpClient: HttpClient,
        private _messageService: MessageService
    ) {}

    get headers() {
        return new HttpHeaders({
            'Content-Type': 'application/json'
        });
    }

    get<T>(url: string): Observable<T> {
        return this._httpClient
            .get<T>(`${environment.baseUrl}/${url}`, { headers: this.headers })
            .pipe(catchError((error) => this._handleError(error)));
    }

    post<T>(url: string, data: any): Observable<T> {
        return this._httpClient
            .post<T>(`${environment.baseUrl}/${url}`, data, { headers: this.headers })
            .pipe(catchError((error) => this._handleError(error)));
    }

    put<T>(url: string, data: any): Observable<T> {
        return this._httpClient
            .put<T>(`${environment.baseUrl}/${url}`, data, { headers: this.headers })
            .pipe(catchError((error) => this._handleError(error)));
    }

    delete<T>(url: string): Observable<T> {
        return this._httpClient
            .delete<T>(`${environment.baseUrl}/${url}`, { headers: this.headers })
            .pipe(catchError((error) => this._handleError(error)));
    }

    postFile<T>(url: string, files: File[]): Observable<T> {
        const formData = new FormData();

        for (const file of files) {
            formData.append(file.name, file, file.name);
        }

        return this._httpClient
            .post<T>(`${environment.baseUrl}/${url}`, formData, { headers: this.headers, reportProgress: true })
            .pipe(catchError((error) => this._handleError(error)));
    }

    private _handleError(error: HttpErrorResponse) {
        switch (error.status) {
            case HttpStatusCode.Forbidden:
                this._messageService.add({
                    severity: 'error',
                    detail: 'You do not have permission to access this resource',
                    life: 3000
                });
                break;
            case HttpStatusCode.InternalServerError:
                this._messageService.add({
                    severity: 'error',
                    detail: 'Internal server error',
                    life: 3000
                });
                break;
            case HttpStatusCode.NotFound:
                this._messageService.add({
                    severity: 'error',
                    detail: 'Resource not found',
                    life: 3000
                });
                break;
            case HttpStatusCode.BadRequest:
                this._messageService.add({
                    severity: 'error',
                    detail: error.error.message,
                    life: 3000
                });
                break;
            default:
                break;
        }

        return throwError(() => error);
    }
}
