// bearing utility
export function bearing(a:[number,number], b:[number,number]) { return Math.atan2(b[0]-a[0], b[1]-a[1]) * 180 / Math.PI }
