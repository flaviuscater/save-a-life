import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, AfterViewInit {

  hospitals = [
    { title: 'Spitalul Judetean', subtitle: 'Timisoara, Romania'},
    { title: 'Spitalul Militar', subtitle: 'Timisoara, Romania'},
    { title: 'Spitalul Militar', subtitle: 'Timisoara, Romania'},
    { title: 'Spitalul Militar', subtitle: 'Timisoara, Romania'},
  ];

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'grey';
  }

}
