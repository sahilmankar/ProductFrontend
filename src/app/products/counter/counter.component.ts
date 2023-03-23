import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  @Input() counter: number | undefined;

  @Output() update = new EventEmitter();

  onDecrement() {
    if (this.counter != undefined) {
      this.counter = this.counter - 1;
      this.update.emit({ counter: this.counter })
    }
  }

  onIncrement() {
    if (this.counter != undefined) {
      this.counter = this.counter + 1
      this.update.emit({ counter: this.counter })
    }
  }
}
