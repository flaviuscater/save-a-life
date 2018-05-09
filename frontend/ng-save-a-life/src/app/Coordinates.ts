export class Coordinates {
  latitude: number;
  longitude: number;


  constructor(latitude?: number, longitude?: number) {

    if (latitude)
    this.latitude = latitude;

    if (longitude)
    this.longitude = longitude;
  }

  setLatitude(latitude: number) {
    this.latitude = latitude;
  }

  setLongitude(longitude: number) {
    this.longitude = longitude;
  }

  getLatitude(): number {
    return this.latitude;
  }

  getLongitude(): number {
    return this.longitude;
  }

  public toString() : string {
    return "lat: " + this.latitude + " lng: " + this.longitude;
  }
}
