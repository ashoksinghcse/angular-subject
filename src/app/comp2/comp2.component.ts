import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  constructor(private myservices:MyserviceService) { 
    this.myservices.username.subscribe(uname=>{this.username = uname})
  }
  
  username="comp2-user";
  ngOnInit(): void {
  }
  

}
