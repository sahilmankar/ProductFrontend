import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  @Input() count:number | undefined;

  //define custom event
  @Output() update=new EventEmitter
  constructor() { }

  ngOnInit(): void {

  }

  onIncrement(): void{
    if(this.count !=undefined)
    this.count=this.count+1;
    this.update.emit({count:this.count});
  }

  onDecrement():void{
    if(this.count !=undefined)
    this.count=this.count-1;
    this.update.emit({count:this.count});
  }
}
