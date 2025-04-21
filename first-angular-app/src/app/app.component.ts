import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('child1') child1!:ElementRef;
  @ViewChildren('child2') child2!:QueryList<ElementRef>;

  toggle:boolean=true;
  users=['user1','user2','user3'];

  onSubmit(){
    console.log(this.child1.nativeElement.value);
    this.child2.forEach((el)=>{
      console.log(el.nativeElement.value);
    })
  }

  handleToggle(){
    this.toggle=!this.toggle;
  }
}
