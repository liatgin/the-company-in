import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder }  from '@angular/forms';
import {ApiService} from '../../api.service';


@Component({
  selector: 'app-company-adder',
  templateUrl: './company-adder.component.html',
  styleUrls: ['./company-adder.component.css']
})
export class CompanyAdderComponent implements OnInit {
  companies
  companyForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private httpService: ApiService) { 
    this.companyForm = this.formBuilder.group({
      domain: ''
    });
  }

  ngOnInit(): void {
    this.httpService.getCompanies()
    .subscribe((data) => {
      this.companies = JSON.parse(data)['companies']
    })
  }

  onNewDomain() {
    console.log('this.companyForm.value.domain', this.companyForm.value.domain)
    this.httpService.newCompanyDomain(this.companyForm.value.domain)
      .subscribe(() => {
        this.httpService.getCompanies()
          .subscribe((data) => {
            this.companies = JSON.parse(data)['companies']
          })
      })
  }

}
