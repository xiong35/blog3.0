export function AMinusB<T>(a: Set<T>, b: Set<T>) {
  return [...a].filter((e) => !b.has(e));
}
