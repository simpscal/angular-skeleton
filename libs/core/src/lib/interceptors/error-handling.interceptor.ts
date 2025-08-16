import { HttpErrorResponse, HttpInterceptorFn, HttpStatusCode } from '@angular/common/http';
import { inject } from '@angular/core';
import { MessageService } from 'primeng/api';
import { catchError, throwError } from 'rxjs';

export const errorHandlingInterceptor: HttpInterceptorFn = (req, next) => {
    const messageService = inject(MessageService);

    return next(req).pipe(
        catchError((error: HttpErrorResponse) => {
            handleError(error, messageService);
            return throwError(() => error);
        })
    );
};

function handleError(error: HttpErrorResponse, messageService: MessageService): void {
    switch (error.status) {
        case HttpStatusCode.Forbidden:
            messageService.add({
                severity: 'error',
                detail: 'You do not have permission to access this resource',
                life: 3000
            });
            break;
        case HttpStatusCode.InternalServerError:
            messageService.add({
                severity: 'error',
                detail: 'Internal server error',
                life: 3000
            });
            break;
        case HttpStatusCode.NotFound:
            messageService.add({
                severity: 'error',
                detail: 'Resource not found',
                life: 3000
            });
            break;
        case HttpStatusCode.BadRequest:
            messageService.add({
                severity: 'error',
                detail: error.error?.message || 'Bad request',
                life: 3000
            });
            break;
        case HttpStatusCode.Unauthorized:
            messageService.add({
                severity: 'error',
                detail: 'Unauthorized access',
                life: 3000
            });
            break;
        default:
            if (error.status >= 500) {
                messageService.add({
                    severity: 'error',
                    detail: 'Server error occurred',
                    life: 3000
                });
            } else if (error.status >= 400) {
                messageService.add({
                    severity: 'error',
                    detail: error.error?.message || 'Client error occurred',
                    life: 3000
                });
            }
            break;
    }
}
