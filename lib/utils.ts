import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertToPlainObject<T>(value: T): T {
  return JSON.parse(JSON.stringify(value));
}

//Dar formato al campo precio
export function formatNumberWithDecimal(num: number): string {
  const [parte_entera, parte_decimal] = num.toString().split('.');
  return parte_decimal
    ? `${parte_entera}.${parte_decimal.padEnd(2, '0')}`
    : `${parte_entera}.00`;
}

