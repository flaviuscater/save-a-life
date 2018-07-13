import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-hospital-information',
  templateUrl: './hospital-information.component.html',
  styleUrls: ['./hospital-information.component.css']
})
export class HospitalInformationComponent implements OnInit {

  @Input() title: String;
  @Input() subtitle: String;
  @Input() descriptionText: String;
  @Input() imgName: string;
  @Input() visitUrl: string;
  imgPath: String;

  constructor() { }

  ngOnInit() {
    this.imgPath = "../../assets/images/" + this.imgName;
  }

  navigateToPage() {
    window.open(this.visitUrl);
  }
}
