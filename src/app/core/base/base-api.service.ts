import { Subject } from 'rxjs';

export abstract class ApiService {

protected destroySubscriptions: Subject<void> = new Subject<void>();   

 public abortRequests(): void {
     this.destroySubscriptions.next(null);
 }
}