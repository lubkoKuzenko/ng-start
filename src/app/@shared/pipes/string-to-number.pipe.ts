import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "toNumber" })
export class ToNumberPipe implements PipeTransform {
  transform(value: string | number): number {
    if (!value) return NaN;

    if (typeof value === "string" && value.trim().length === 0) {
      return NaN;
    }
    return Number(value);
  }
}
