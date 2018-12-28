import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';
import {HospitalService} from '../../services/hospital.service';
import {Hospital} from '../../models/hospital';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, AfterViewInit {

  hospitals: Hospital[];

  constructor(private elementRef: ElementRef,
              private hospitalService: HospitalService) { }

  ngOnInit() {
     this.hospitalService.getHospitals()
      .subscribe(hospital => {this.hospitals = hospital; },
        error1 => console.log(error1)
        );
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'grey';
  }

}
