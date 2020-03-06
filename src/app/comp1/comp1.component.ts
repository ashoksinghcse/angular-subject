import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  constructor(private myservices:MyserviceService) { 
    this.myservices.username.subscribe(uname=>{this.username = uname})
  }
   username="comp1user";
  ngOnInit(): void {
  }
  updateUname(uname){
    this.myservices.username.next(uname.value);
  }

}
