import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pantalla-login',
  templateUrl: './pantalla-login.component.html',
  styleUrls: ['./pantalla-login.component.css']
})
export class PantallaLoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  error = false;
  intentarLog(){
    this.error = true;
  }
}
