function lastToFirst(phrase: string): string {
    if (phrase.length === 1) return phrase;

    const first = phrase[0];
    const last = phrase[phrase.length - 1];
    let newPhrase = phrase.slice(1, phrase.length - 1);
    newPhrase = last + newPhrase + first;
    return newPhrase;
}

console.log(lastToFirst("loop"));
console.log(lastToFirst("ab"));
console.log(lastToFirst("a"));