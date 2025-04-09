import { Component,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from "@angular/forms";
import { CommonModule } from '@angular/common';
import { Company,Vacancy } from "../models";
import { CompanyService } from './company.service';

@Component({
  selector: 'app-root',
  imports: [ FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  companies: Company[] = [];
  vacancies : Vacancy[] = [];

  constructor(private companyService: CompanyService) {}

  ngOnInit(): void {
    this.getCompanies();
  }

  getCompanies() {
    this.companyService.getCompanies().subscribe((response) => {
      this.companies = response;
    });
  }

  Show(id:number){
    return this.companyService.getVacancies(id).subscribe((responce) =>{
      this.vacancies = responce
    })
  }
}
