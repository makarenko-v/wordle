export function sample<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function getLetterIndexMap(word: string): Record<string, number> {
  return word
    .split("")
    .reduce((acc, letter, index) => ({ ...acc, [letter]: index }), {});
}
