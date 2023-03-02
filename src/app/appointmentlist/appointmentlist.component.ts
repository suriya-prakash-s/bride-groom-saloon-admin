import { Component, OnInit } from '@angular/core';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-appointmentlist',
  templateUrl: './appointmentlist.component.html',
  styleUrls: ['./appointmentlist.component.css']
})


export class AppointmentlistComponent implements OnInit{


  appointments:Appointment[];
  constructor(private appointmentService : AppointmentService){
  }

  // dtoptions:DataTables.Settings={};

  ngOnInit(): void {
    
    this.getBookings();

  }

  private getBookings(){
    console.log("func invoked")
    this.appointmentService.getCustomerBookings().subscribe(
      data => {
        this.appointments=data;
      }
    )
    console.log(this.appointments);
  }

}
