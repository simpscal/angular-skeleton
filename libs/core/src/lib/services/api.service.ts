import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from 'environments';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private httpClient = inject(HttpClient);

    get headers() {
        return new HttpHeaders({
            'Content-Type': 'application/json'
        });
    }
    constructor() {
        console.log(environment.baseUrl);
    }

    get<T>(url: string): Observable<T> {
        return this.httpClient.get<T>(`${environment.baseUrl}/${url}`, { headers: this.headers });
    }

    post<T>(url: string, data: any): Observable<T> {
        return this.httpClient.post<T>(`${environment.baseUrl}/${url}`, data, { headers: this.headers });
    }

    put<T>(url: string, data: any): Observable<T> {
        return this.httpClient.put<T>(`${environment.baseUrl}/${url}`, data, { headers: this.headers });
    }

    delete<T>(url: string): Observable<T> {
        return this.httpClient.delete<T>(`${environment.baseUrl}/${url}`, { headers: this.headers });
    }

    postFile<T>(url: string, files: File[]): Observable<T> {
        const formData = new FormData();

        for (const file of files) {
            formData.append(file.name, file, file.name);
        }

        return this.httpClient.post<T>(`${environment.baseUrl}/${url}`, formData, {
            headers: this.headers,
            reportProgress: true
        });
    }
}
