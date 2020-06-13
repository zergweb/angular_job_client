import { Injectable } from '@angular/core';
import { JobDto } from 'src/app/entities/server-types';
import { IJobItem } from '../types';

@Injectable({
    providedIn: 'root'
})
export class JobBuilderService {

    public buildJobItems(jobs: JobDto[]): IJobItem[]{
        // TODO возмоэно будет какая то логика при  мапинге потом
       return jobs ? jobs.map(x => ({id: x.id, name: x.name, key: x.key, desc: x.desc })) : [];
    }

}
