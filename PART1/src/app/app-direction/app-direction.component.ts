import {Component, OnInit, ɵLocaleDataIndex} from '@angular/core';
import { AppDirectionService } from "../services/app-direction.service";

@Component({
  selector: 'app-app-direction',
  templateUrl: './app-direction.component.html',
  styleUrls: ['./app-direction.component.css']
})

export class AppDirectionComponent implements OnInit {
  dataItems: any;
  index: number = 0;
  from:string = 'Boston, MA';
  to:string = 'Cambridge, MA';
  constructor(private appDirectionService:AppDirectionService) {

  }

  ngOnInit(): void {
    this.index++;
    this.getDirection(this.from, this.to);
  }


  getDirection(from, to){
    this.appDirectionService.getDirection(from,to)
      .subscribe(result => {
        //console.log(result);
        this.dataItems = result
      })
  }

  aclick(loc) {
    let w = window.open(loc, 'Direction','width=300,height=300');
    w.focus();
    //console.log('opening window');
  }

  blur(from, to) {
    this.getDirection(from, to);
  }
}
