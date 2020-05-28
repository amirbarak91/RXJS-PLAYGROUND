import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

const observable$:Observable<any> = new Observable((observer)=>{

    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.next(4);

    setTimeout(()=>{

        observer.next(5);
        observer.complete();
    },2000);
});

const piped_observable$:Observable<any> = observable$.pipe(
    map((x)=> x + 'unknown')
)

const subscription:Subscription = piped_observable$.subscribe((value)=>{
    console.log(value);
})

