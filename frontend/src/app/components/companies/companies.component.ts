import { Component, Input, OnInit } from '@angular/core';
import {ApiService} from '../../api.service';


export interface Company {
  logo: string;
  name: string;
  type: string;
}

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  @Input() companies: Company[]

  // @Input() companies: Company[] = [
  //   {logo: 'Hydrogen', name: 'Hydrogen', type: 'Hydrogen'},
  //   {logo: 'Hydrogen', name: 'Helium', type: 'Hydrogen'},
  // ];

  displayedColumns: string[] = ['logo', 'name', 'type'];
  dataSource = this.companies;
  

  constructor(private httpService: ApiService) { 
  }

  ngOnInit(): void {
  }

}
