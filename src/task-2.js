
export default function createCounter(n) {
    let count = -n;

    return function() {
        return count += n;
    };
}
