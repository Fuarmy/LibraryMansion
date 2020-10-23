declare module "count-down" {
  export const dataType: Function;
  export function countDown(time: any, callback: Function);
  export function computerTime(timestamp: number, timer: number): object | string;
}