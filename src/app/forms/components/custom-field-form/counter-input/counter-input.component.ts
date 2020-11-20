import { Component, forwardRef, Input, Provider } from "@angular/core";
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from "@angular/forms";

export const COUNTER_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CounterInputComponent),
  multi: true,
};

@Component({
  selector: "bb-counter-input",
  templateUrl: "./counter-input.component.html",
  styleUrls: ["./counter-input.component.scss"],
  providers: [COUNTER_VALUE_ACCESSOR],
})
export class CounterInputComponent implements ControlValueAccessor {
  @Input("counterValue") _counterValue = 0;
  @Input() counterRangeMax;
  @Input() counterRangeMin;

  propagateChange: any = () => {};

  get counterValue() {
    return this._counterValue;
  }

  set counterValue(val) {
    this._counterValue = val;
    this.propagateChange(val);
  }

  writeValue(value) {
    if (value) {
      this.counterValue = value;
    }
  }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}

  increase() {
    this.counterValue++;
  }

  decrease() {
    this.counterValue--;
  }
}
