class Counter {
    count = 1;

    inc() {
        this.count += 1;
        console.log('....', this.count);
    }

    dec() {
        this.count -= 1;
        console.log('....', this.count);
    }
}

const a = new Counter();

a.inc();
a.dec();

let awesomeRunner = (cb) => {
    cb();
}

awesomeRunner(() => a.inc());
const c = a.inc.bind(a);

setTimeout(a.inc, 1000);