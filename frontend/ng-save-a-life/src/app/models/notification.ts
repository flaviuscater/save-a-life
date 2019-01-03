export class Notification {

  id: number;
  hospitalName: string;
  description: string;
  bloodDonationAmountNeeded: number;
  private _completed: boolean;

  constructor(hospitalName?: string, description?: string, bloodDonationAmountNeeded?: number) {
    this.hospitalName = hospitalName;
    this.description = description;
    this.bloodDonationAmountNeeded = bloodDonationAmountNeeded;
    this._completed = false;
  }

  get isCompleted(): boolean {
    return this._completed;
  }

  set isCompleted(value: boolean) {
    this._completed = value;
  }

}
