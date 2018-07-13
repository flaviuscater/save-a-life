import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Hospital} from "../hospital";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class HospitalService {

  private hospitalsUrl = 'http://localhost:8080/hospitals';

  constructor( private httpClient: HttpClient) {
  }

  getHospitals () {
    return this.httpClient.get<Hospital[]>(this.hospitalsUrl);
  }
}
