import { Injectable } from '@angular/core';
import {Observable, of, switchMap} from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Company, Vacancy} from "../models";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private client: HttpClient) { }

  getCompanies(): Observable<Company[]>{
    return this.client.get<Company[]>(`http://127.0.0.1:8000/api/companies/`)
  }

  getVacancies(id:number): Observable<Vacancy[]>{
    return this.client.get<Vacancy[]>(`http://127.0.0.1:8000/api/companies/${id}/vacancies/`)
  }
}
