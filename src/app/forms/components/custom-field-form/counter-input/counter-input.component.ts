import { Component, forwardRef, Input, Provider, ChangeDetectionStrategy } from "@angular/core";
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl, NG_VALIDATORS } from "@angular/forms";

export const COUNTER_VALUE_ACCESSOR: Provider = [
  {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CounterInputComponent),
    multi: true,
  },
  { provide: NG_VALIDATORS, useExisting: forwardRef(() => CounterInputComponent), multi: true },
];

export function createCounterRangeValidator(maxValue, minValue) {
  return (c: FormControl) => {
    let err = {
      rangeError: {
        given: c.value,
        max: maxValue || 10,
        min: minValue || 0,
      },
    };

    return c.value > +maxValue || c.value < +minValue ? err : null;
  };
}

@Component({
  selector: "bb-counter-input",
  templateUrl: "./counter-input.component.html",
  styleUrls: ["./counter-input.component.scss"],
  providers: [...COUNTER_VALUE_ACCESSOR],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterInputComponent implements ControlValueAccessor {
  @Input("counterValue") _counterValue = 0;
  @Input() counterRangeMax;
  @Input() counterRangeMin;

  propagateChange: any = () => {};
  validateFn: any = () => {};

  get counterValue() {
    return this._counterValue;
  }

  set counterValue(val) {
    this._counterValue = val;
    this.propagateChange(val);
  }

  public ngOnChanges(inputs) {
    if (inputs.counterRangeMax || inputs.counterRangeMin) {
      this.validateFn = createCounterRangeValidator(this.counterRangeMax, this.counterRangeMin);
    }
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

  validate(c: FormControl) {
    return this.validateFn(c);
  }
}
