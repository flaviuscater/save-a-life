import {Component, OnInit} from '@angular/core';
import {HospitalService} from '../../services/hospital.service';
import {Hospital} from '../../models/hospital';
import {GeocodingService} from '../../services/geocoding.service';
import {Coordinates} from '../../models/Coordinates';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  mapCoords: Coordinates;
  hospitals: Hospital[];
  markersCoords: Coordinates[] = [];
  showMarkers = false;
  selectedCity = '';

  constructor(private hospitalService: HospitalService, private geocodingService: GeocodingService) {
    this.mapCoords = new Coordinates(45.759780, 21.230020);
  }

  ngOnInit() {
    this.loadHospitals();
  }

  loadHospitals() {
    this.hospitalService.getHospitals()
      .subscribe(
        hospitals => {
          this.hospitals = hospitals;
          },
        error1 => { console.log(error1)}
        );
  }

  addMarkerAndMapCoordinates(address: string) {
    this.geocodingService
      .getJsonDataFromAddress(address.valueOf())
      .subscribe(response => {
        if (response.status === 'OK') {
            if ((response.results[0].address_components[3].long_name.indexOf(this.selectedCity)) !== -1) {
              const lat = response.results[0].geometry.location.lat;
              const lng = response.results[0].geometry.location.lng;
              this.markersCoords.push( new Coordinates(lat, lng));
              this.setMapCoords( this.getLatitudeOfMarkerCoordinate(this.markersCoords.length - 1),
                                    this.getLongitudeOfMarkerCoordinate(this.markersCoords.length - 1));
            }

        } else if (response.status === 'ZERO_RESULTS') {
          console.log('geocodingService', 'ZERO_RESULTS', response.status)
        } else {
          console.log('geocodingService', 'Other error', response.status);
        }
      });
  }

  getLatitudeOfMarkerCoordinate(index: number): number {
    return this.markersCoords[index].getLatitude();
  }

  getLongitudeOfMarkerCoordinate(index: number): number {
    return this.markersCoords[index].getLongitude();
  }

  setMapCoords(lat: number, lng: number) {
    this.mapCoords.setLatitude(lat);
    this.mapCoords.setLongitude(lng);
  }

  getAllMarkerCoords() {
    for (const hospital of this.hospitals) {
      this.addMarkerAndMapCoordinates(hospital.address);
    }
  }

  showAllMarkers() {
    this.getAllMarkerCoords();
    this.showMarkers = true;
  }

  updateCityMarkers() {
    this.showAllMarkers();
    console.log('Selected: ' + this.selectedCity);
  }

  resetMarkers() {
    this.markersCoords = [];
  }
}
