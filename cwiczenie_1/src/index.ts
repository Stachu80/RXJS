import { interval, race, from, of } from "rxjs";
import { map, concatMap, switchMap, mergeMap } from 'rxjs/operators';

function simulateFirebase(val: any, delay: number) {
  console.log("GO")
  return interval(delay).pipe(map(index => val + " " + index + " " + delay));
}

const firebase1$ = simulateFirebase("FB-1 ", 1000);
/* firebase1$.subscribe(
  console.log,
  console.error,
  () => console.log('firebase1$ completed')
); */
const firebase2$ = simulateFirebase("FB-2 ", 2000);
/* firebase2$.subscribe(
  console.log,
  console.error,
  () => console.log('firebase2$ completed')
); */

interval(5000).pipe(mergeMap(() => firebase2$)).subscribe((item) => console.log(item))
//interval(5000).pipe(mergeMap(() => firebase1$)).subscribe((item) => console.log(item))
/* interval(5000).pipe(map(() => {
  console.log("bum");
  return {data:"3"}
})).subscribe((item) => console.log(item.data)) */
//interval(5000).pipe(switchMap(() => [{data:"3"},{data:"4"}])).subscribe((item) => console.log(item))


/* firebase1$.pipe(

  switchMap(
    ()=> interval(2000),
    (outerValue, innerValue, outerIndex, innerIndex) => ({
      outerValue,
      innerValue,
      outerIndex,
      innerIndex
    })
  )).subscribe(e=>console.log(e)) */

