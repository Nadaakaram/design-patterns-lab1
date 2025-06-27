function stringIterator(text: string, start: number = 0, end?: number, step: number = 1) {
    let index = start;
    const limit = end !== undefined ? Math.min(end, text.length) : text.length;

    return {
        next() {
            if (index < limit) {
                const value = text[index];
                index += step;
                return { value, done: false };
            }
            return { value: undefined, done: true };
        }
    }
}

const iterator = stringIterator("keep learning and growing", 0, 22, 2);

console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
