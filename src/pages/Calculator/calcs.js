export function gpTb(time, width) {
  return 0.077004099 * (width ** 2 / time);
}
export function gpTl(time, width) {
  return 0.5 * (width ** 2 / time);
}
export function gpTi(time, width) {
  return 0.166969046 * (width ** 2 / time);
}

export function ppTb(time, width) {
  return 0.506605918 * (width ** 2 / time);
}
export function ppTl(time, width) {
  return 0.166666666 * (width ** 2 / time);
}
export function ppTi(time, width) {
  return 0.093640657 * (width ** 2 / time);
}
