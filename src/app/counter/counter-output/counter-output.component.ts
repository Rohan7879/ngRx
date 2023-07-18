import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { Observable, Subscription } from 'rxjs';
import { getCounter } from '../state/counter.selectors';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent implements OnInit, OnDestroy {
  // @Input() counter;
  counter: number;
  // counter$: Observable<{ counter: number }>;
  // counterSubscription: Subscription;
  constructor(private store: Store<{ counter: CounterState }>) {}

  ngOnInit(): void {
    // this.counter$ = this.store.select('counter');
    this.store.select(getCounter).subscribe((counter) => {
      console.log('Counter Obsevable called');
      this.counter = counter;
    });
  }
  ngOnDestroy(): void {
    // if (this.counterSubscription) {
    //   this.counterSubscription.unsubscribe();
    // }
  }
}
