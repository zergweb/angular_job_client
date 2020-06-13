import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { JobListApiService } from '../../services/job-list-api.service';
import { IJobItem } from '../../types';
import { JobBuilderService } from '../../services/job-builder.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-job-list-page',
  templateUrl: './job-list-page.component.html',
  styleUrls: ['./job-list-page.component.scss']
})
export class JobListPageComponent implements OnInit, OnDestroy {

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  public displayedColumns: string[] = ['id', 'name', 'key', 'desc'];

  public tableJobsSource: MatTableDataSource<IJobItem>;

  constructor(private api: JobListApiService, private builder: JobBuilderService) { }

  ngOnInit(): void {
    this.api.getJobs().subscribe(x => {
      this.tableJobsSource = new MatTableDataSource(this.builder.buildJobItems(x));
      this.tableJobsSource.paginator = this.paginator;
      this.tableJobsSource.sort = this.sort;
    });
  }

  ngOnDestroy(): void {
    this.api.abortRequests();
  }
}
