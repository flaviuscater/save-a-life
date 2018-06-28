import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-hospital-information',
  templateUrl: './hospital-information.component.html',
  styleUrls: ['./hospital-information.component.css']
})
export class HospitalInformationComponent implements OnInit {

  @Input() title: String;
  @Input() subtitle: String;
  @Input() text: String;
  @Input() image: String;
  @Input() url: String;

  constructor() { }

  ngOnInit() {
    this.image = "../../assets/images/Spitalul_Judetean_Timisoara.jpg";
  }

  navigateToPage() {
    window.open('https://www.google.com');
  }
}
