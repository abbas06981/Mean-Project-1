import { ViewChild, Component, inject } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { Brand } from '../../../types/brand';
import { BrandService } from '../../../service/brand.service';

@Component({
  selector: 'app-brands',
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
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss',
})
export class BrandsComponent {
  displayedColumns: string[] = ['_id', 'name', 'action'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  bransService = inject(BrandService);

  constructor() {
    this.dataSource = new MatTableDataSource([] as Brand[]);
  }

  private getBrandList() {
    this.bransService.getBrandList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data as Brand[]);

      // Attach paginator & sort after assigning data
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  ngOnInit() {
    this.getBrandList();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  deleteBrandId(id: string) {
    this.bransService.deleteBrand(id).subscribe(() => {
      this.getBrandList();
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
