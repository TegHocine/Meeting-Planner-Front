import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [MatPaginatorModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css',
})
export class PaginationComponent {
  @Input()
  length: number = 0;
  @Input()
  pageSize: number = 10;
  @Input()
  page: number = 0;
  @Output()
  pageEvent = new EventEmitter();

  handlePageEvent(e: PageEvent) {
    this.pageSize = e.pageSize;
    this.page = e.pageIndex;
    this.pageEvent.emit(e);
  }
}
