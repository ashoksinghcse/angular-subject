import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor() { }
  username = new Subject<any>()
}
