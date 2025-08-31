import { Observer } from 'rxjs';

export class Observer4 implements Observer<number> {
    next(data: number) {
        console.log("Way 4 ", data);
    }

    error(error: string) {
        console.log("Way 4 ", error);
    }

    complete() {
        console.log("Way 4 - Complete by Class")
    }
}