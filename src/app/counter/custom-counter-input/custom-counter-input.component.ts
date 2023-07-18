import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { changeName, customIncerement } from '../state/counter.action';
import { getName } from '../state/counter.selectors';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css'],
})
export class CustomCounterInputComponent implements OnInit {
  value: number;
  name: string;

  constructor(private store: Store<{ counter: CounterState }>) {}

  ngOnInit(): void {
    this.store.select(getName).subscribe((name) => {
      console.log('change name Observable Called');
      this.name = name;
    });
  }

  onAdd() {
    console.log(this.value);
    this.store.dispatch(customIncerement({ count: +this.value }));
  }

  onchangeName() {
    this.store.dispatch(changeName());
  }
}
