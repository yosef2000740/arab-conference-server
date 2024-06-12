import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const numbers = new Map([
  [1, "One"],
  [2, "Two"],
  [3, "Three"],
  [4, "Four"],
  [5, "Five"],
  [6, "Six"],
  [7, "Seven"],
  [8, "Eight"],
  [9, "Nine"],
  [0, "Zero"],
]);

export default function numberToName(num: number): string {
  const result = numbers.get(num);
  if (!result) {
    throw new Error(`${num} is not a number between 0 and 9`);
  }
  return result;
}