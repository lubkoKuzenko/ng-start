import { Pipe, PipeTransform } from "@angular/core";

// Annotation section
@Pipe({
  name: "reverseStr",
})

// Pipe class
export class ReverseStrPipe implements PipeTransform {
  transform(value: string): string {
    if (value === undefined) return "";

    let newStr = "";
    for (let i = value.length - 1; i >= 0; i--) {
      newStr += value.charAt(i);
    }

    return newStr;
  }
}
