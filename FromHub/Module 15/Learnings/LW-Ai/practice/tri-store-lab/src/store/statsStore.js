// MOBX — one class. makeAutoObservable reads the class shape and infers:
//   plain fields  → observable      (state MobX watches)
//   methods       → action          (the only places state may change)
//   getters       → computed        (cached derived value)
// reaction(...)   → reaction        (a side effect that runs when an observed value changes)
import { makeAutoObservable, reaction } from 'mobx';

class StatsStore {
  total = 0; // observable
  done = 0; // observable
  message = ''; // observable

  constructor() {
    makeAutoObservable(this); // infers observable / action / computed

    // reaction: when `percent` changes, run this side effect.
    reaction(
      () => this.percent,
      (percent) => {
        this.setMessage(percent === 100 && this.total > 0 ? 'All done!' : '');
      }
    );
  }

  // action — the only way the state changes from outside
  sync(total, done) {
    this.total = total;
    this.done = done;
  }

  setMessage(message) {
    this.message = message;
  }

  // computed — derived from the observables, no storing, no setter
  get percent() {
    return this.total === 0 ? 0 : Math.round((this.done / this.total) * 100);
  }
}

// a MobX store is an INSTANCE at module level — same "no Provider" idea as Zustand
export const statsStore = new StatsStore();
