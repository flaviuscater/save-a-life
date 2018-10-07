export class Hospital {
  id: number;
  name: string;
  address: string;
  city: string;
  visitUrl: string;
  imgName: String;
  descriptionText: string;

  constructor(name: string, address: string, city: string, visitUrl: string, imgName: String, descriptionText: string) {
      this.name = name;
      this.address = address;
      this.city = city;
      this.visitUrl = visitUrl;
      this.imgName = imgName;
      this.descriptionText = descriptionText;
  }
}
