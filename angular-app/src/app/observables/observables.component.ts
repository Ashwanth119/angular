import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { from, fromEvent, Observable, of } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent implements AfterViewInit{

  @ViewChild('event') eventObs!:ElementRef;
  eventObs$:any;
  data: any = [];

  array1=[1,2,3,4,5];

  array2=['a','e','i','o','u'];

  promiseData = new Promise((res,rej)=>{
    res([10,20,30]);
  })
  /*
  observable$ = new Observable((observer) => {
    setTimeout(() => observer.next(10), 1000);
    setTimeout(() => observer.next(20), 2000);
    setTimeout(() => observer.next(30), 3000);
    setTimeout(() => observer.next(40), 4000);
    // setTimeout(() => observer.error(new Error("Error Occurred")), 4000);
    setTimeout(() => observer.next(50), 5000);
    setTimeout(() => observer.complete(), 6000);
  });
  */

  // observable$=of(from(this.array1), from(this.array2), 10, true, false, "hello");
  // observable$=of(this.promiseData); // [object Promise]
  observable$=from(this.promiseData); // 10,20,30

  btnClicked(){
    this.eventObs$ = fromEvent(this.eventObs.nativeElement,'click').subscribe((data)=>console.log(data)
    )
  }

  ngAfterViewInit(){
    this.btnClicked();
  }
  getData() {

    /*

    this.observable$.subscribe((dataPacket: any) => {
      this.data.push(dataPacket);
    },
      (error) => {
        alert(error.message);
      },
      () => {
        alert("Data stream completed");
      }
    )

    */

    this.observable$.subscribe({
      next: (dataPacket: any) => {
        this.data.push(dataPacket);
        console.log("next");
        
      },
      error: (err) => {
        alert(err.message);
      },
      complete: () => {
        alert("Data stream completed");
        console.log("complete");
        
      }
    })

  }

}
