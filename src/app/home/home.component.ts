import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }


  sumar(a,b){
    return a+b;
  }

  restar(a,b){
    return a-b;
  }

  multiplicar(a,b){
    return a*b;
  }

  dividir(a,b){
    return a/b;
  }

  ngOnInit(): void {
  }

}
