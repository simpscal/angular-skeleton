import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable, InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private httpClient = inject(HttpClient);
    private baseUrl = inject(API_BASE_URL, { optional: true }) || '';

    get headers() {
        return new HttpHeaders({
            'Content-Type': 'application/json'
        });
    }

    get<T>(url: string): Observable<T> {
        return this.httpClient.get<T>(`${this.baseUrl}/${url}`, { headers: this.headers });
    }

    post<T>(url: string, data: any): Observable<T> {
        return this.httpClient.post<T>(`${this.baseUrl}/${url}`, data, { headers: this.headers });
    }

    put<T>(url: string, data: any): Observable<T> {
        return this.httpClient.put<T>(`${this.baseUrl}/${url}`, data, { headers: this.headers });
    }

    delete<T>(url: string): Observable<T> {
        return this.httpClient.delete<T>(`${this.baseUrl}/${url}`, { headers: this.headers });
    }

    postFile<T>(url: string, files: File[]): Observable<T> {
        const formData = new FormData();

        for (const file of files) {
            formData.append(file.name, file, file.name);
        }

        return this.httpClient.post<T>(`${this.baseUrl}/${url}`, formData, {
            headers: this.headers,
            reportProgress: true
        });
    }
}
