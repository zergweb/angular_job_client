import { Subject, Observable, of } from 'rxjs';
import { ApiService } from 'src/app/core/base/base-api.service';
import { Injectable } from '@angular/core';
import { JobDto } from 'src/app/entities/server-types';
import { FAKE_JOBS } from '../const';
import { delay } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class JobListApiService extends ApiService {

public getJobs(): Observable<JobDto[]>{
    // TODO сдесь будет подписка на сокет
    return of(FAKE_JOBS).pipe(delay(1500));
}
}
