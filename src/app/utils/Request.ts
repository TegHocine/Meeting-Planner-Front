import { Observable, catchError, take } from 'rxjs';

export class Request<T> {
  data: T | undefined;
  isLoading = false;
  hasError = false;
  message = '';
  private action$: Observable<T> | undefined;

  use(action$: Observable<T>): void {
    this.isLoading = false;
    this.hasError = false;
    this.message = '';
    this.action$ = action$;
    this.action$
      .pipe(
        take(1),
        catchError(() => {
          this.data = undefined;
          this.isLoading = false;
          this.hasError = true;
          return [];
        })
      )
      .subscribe((data: T) => {
        console.log(data);
        this.data = data;
        this.isLoading = false;
        this.hasError = false;
      });
  }
}
