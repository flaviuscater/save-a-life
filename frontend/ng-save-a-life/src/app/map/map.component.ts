import { Component, OnInit } from '@angular/core';
import {HospitalService} from "../services/hospital.service";
import {Hospital} from "../hospital";
import {GeocodingService} from "../services/geocoding.service";
import {Coordinates} from "../Coordinates";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  mapCoords: Coordinates;
  hospitals: Hospital[];
  markersCoords = new Array<Coordinates>();
  markersWithinRange = new Array<Coordinates>();
  showMarkers: boolean = false;
  showMarkersFromRange: boolean = false;
  x1: number;
  y1: number;
  x2: number;
  y2: number;

  constructor(private hospitalService : HospitalService, private geocodingService: GeocodingService) {
    this.mapCoords = new Coordinates(45.759780, 21.230020);
  }

  ngOnInit() {
    this.getHospitals();
  }

  getHospitals(): void {
    this.hospitalService.getHospitals()
      .subscribe(hospitals => this.hospitals = hospitals);
  }

  updateCoordsFromAddress( address: string) {

    this.geocodingService
      .findFromAddress(address.valueOf())
      .subscribe(response => {
        if (response.status == 'OK') {
           let lat = response.results[0].geometry.location.lat;
           let lng = response.results[0].geometry.location.lng;
           this.markersCoords.push(new Coordinates(lat, lng));

        } else if ( response.status == 'ZERO_RESULTS') {
          console.log('geocodingService', 'ZERO_RESULTS', response.status)
        }
        else {
          console.log('geocodingService', 'Other error', response.status);
        }
      });
  }

  getAllMarkerCoords() {
    for (let hospital of this.hospitals) {
      this.updateCoordsFromAddress(hospital.address);
    }
  }

  showAllMarkers() {
    this.getAllMarkerCoords()
    this.showMarkers = true;
  }

  getMarkersFromRange() {

    this.getAllMarkerCoords();

    for (let marker of this.markersCoords) {
      if ( marker.longitude > this.x1 && marker.longitude < this.y1 && marker.latitude < this.x2 && marker.longitude > this.y2)
          this.markersWithinRange.push(marker);
    }
    this.showMarkersFromRange = true;
  }

}
