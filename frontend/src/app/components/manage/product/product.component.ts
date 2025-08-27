import { ViewChild, Component, inject } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { Category } from '../../../types/category';
import { ProductService } from '../../../service/product.service';

@Component({
  selector: 'app-product',
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
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  displayedColumns: string[] = [
    '_id',
    'name',
    'shortDescription',
    'description',
    'price',
    'discount',
    'action',
  ];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  productService = inject(ProductService);

  constructor() {
    this.dataSource = new MatTableDataSource([] as Category[]);
  }

  private getProductListData() {
    this.productService.getProductList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data as Category[]);

      // Attach paginator & sort after assigning data
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  ngOnInit() {
    this.getProductListData();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  deleteProduct(id: string) {
    this.productService.deleteProduct(id).subscribe(() => {
      this.getProductListData();
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
