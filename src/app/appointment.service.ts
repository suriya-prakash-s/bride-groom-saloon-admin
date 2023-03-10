import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Appointment } from './appointment';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class AppointmentService {

  private baseURL="https://bridegroomdatastoreapp-465acjna6a-el.a.run.app/getAppointments";

  // private httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type':  'application/json',
  //     Authorization: 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImQyNWY4ZGJjZjk3ZGM3ZWM0MDFmMDE3MWZiNmU2YmRhOWVkOWU3OTIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTEzNjI5OTYwMzgxNTg1OTY2MzA1IiwiZW1haWwiOiJzdXJpeWFwcmFrYXNocy5vZmZpY2lhbEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6InhPcV9ySmRJenpqcld2andhb0xUblEiLCJpYXQiOjE2Nzc3MDE2NzMsImV4cCI6MTY3NzcwNTI3MywianRpIjoiN2M3MDI0MzlhNzAwZjA0MTQzNTFmYjRjMmY2MzgzNmMzYzM0MmViNSJ9.SNvV8PRC9oBYng-Hts36cVmY8OSaGv76UGq41V8MEwsjDD2PY9Nrcs_Ie4YmGyDrVUhFKd1vx2r0jdRjwWpWX2mw3m0Ir_Tg0QUjHHaE_ezV5IMfrRhPbtjuzfW2j0i5LPpxIZJlBK8GeONrqzTx1J31PkaRpZM6Gmh5OiNem3rt9L-HicXoU4Wimok3FfzKiCJpuF8fPcdxxYms-CmsyZ4TbnT-XmsGjfloXI89_6F44wqQsKKE687sSM9Vorqv1dMy2ixYTb9T33Rdz1hN-tEL3h_5OgJARiIy8oivjawu0FnQiofyb_DtGvHmmwkwkldQX22APS91UJa3Gc704g'  
  //   })
  // };



  constructor(private httpClient:HttpClient) {}

  getCustomerBookings():Observable<Appointment[]>{
    // this.httpOptions.headers =this.httpOptions.headers.set('Authorization', 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImQyNWY4ZGJjZjk3ZGM3ZWM0MDFmMDE3MWZiNmU2YmRhOWVkOWU3OTIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTEzNjI5OTYwMzgxNTg1OTY2MzA1IiwiZW1haWwiOiJzdXJpeWFwcmFrYXNocy5vZmZpY2lhbEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6Iks2NklBUFlnWnMzNkhad0syb0ctcFEiLCJpYXQiOjE2Nzc3MDUzNzgsImV4cCI6MTY3NzcwODk3OCwianRpIjoiZDRhYTk1MjBmYmQ2OTM1MWJjMTFiNzI2ZmY0NTE3ZGNiN2U4YjZlNyJ9.WZ94-kbMBwJKubYnDoW1Dh20YEI4OO1fL2W9kNUIP83bI8pUsI0U9An1lsDfR-rmlhivUwqVc6KYmTHyx3JJMuDin7tTHnd15dSqav5rUH_C5DJ_fypssMlHw3NG_6rhgyIeL8A5AGarP8KG520zJwvzpD11URRZTkzD4ZYIh2nDA_JJuE-mUzpgdtEZx0wwvrtHC1snRhn2wPxtKacf1ou_MqQfErc2JzoRdJTcbjTBx9hRCvCtSjHQSuxXm0pEjhRkWnsdf0zj6qaft-UcANPRQSW1Nra0Jd33bQUTN0OkyeIE1wFMgSiaUIsVB_02gM7Nzlxlb-ZR6YsY0h4kxQ');
    return this.httpClient.get<Appointment[]>(`${this.baseURL}`);
  }

    


}
