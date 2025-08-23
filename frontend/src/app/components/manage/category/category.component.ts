import { AfterViewInit, ViewChild, Component, inject } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CategoryService } from '../../../service/category.service';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { Category } from '../../../types/category';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatButton,
    RouterLink,
  ],

  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
})
export class CategoryComponent {
  displayedColumns: string[] = ['_id', 'name', 'action'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  categoryService = inject(CategoryService);

  constructor() {
    this.dataSource = new MatTableDataSource([] as Category[]);
  }

  private getCategoryList() {
    this.categoryService.getCategoryList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data as Category[]);

      // Attach paginator & sort after assigning data
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  ngOnInit() {
    this.getCategoryList();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  deleteCategory(id: string) {
    this.categoryService.deleteCategory(id).subscribe(() => {
      this.getCategoryList();
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
