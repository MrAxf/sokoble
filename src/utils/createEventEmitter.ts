import { Subject } from "rxjs"

export default function createEventEmitter<T>() {
  const subject$ = new Subject<T>()
  return {
    emit: (value: T) => subject$.next(value),
    observable: subject$.asObservable()
  }
}
