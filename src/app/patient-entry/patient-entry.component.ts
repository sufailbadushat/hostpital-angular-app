import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-entry',
  templateUrl: './patient-entry.component.html',
  styleUrls: ['./patient-entry.component.css']
})
export class PatientEntryComponent {
  name = ""
  id = ""
  address = ""
  contactNo = ""
  dateOfAppinment = ""
  image = ""
  doctorName = ""

  readValues = () => {
    let data: any =
    {
      "name": this.name,
      "id": this.id,
      "address": this.address,
      "contactNo": this.contactNo,
      "dateOfAppinment": this.dateOfAppinment,
      "image": this.image,
      "doctorName": this.doctorName
    }
    console.log(data)
  }
}
