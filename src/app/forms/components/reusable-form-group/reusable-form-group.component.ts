import { ChangeDetectionStrategy, Component, forwardRef, OnDestroy } from "@angular/core";
import {
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS,
  ControlValueAccessor,
  Validator,
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
  ValidationErrors,
} from "@angular/forms";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { AddressForm, Address } from "./reusable-form-group.interface";

@Component({
  selector: "l9-address-form",
  templateUrl: "./reusable-form-group.component.html",
  styleUrls: ["./reusable-form-group.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AddressFormComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => AddressFormComponent),
      multi: true,
    },
  ],
})
export class AddressFormComponent implements ControlValueAccessor, Validator, OnDestroy {
  destroySubject = new Subject<void>();

  addressForm = new FormGroup<AddressForm>({
    city: new FormControl<string>("", Validators.required),
    street: new FormControl<string>("", Validators.required),
    house: new FormControl<number | null>(null, Validators.required),
  });

  get controls() {
    return this.addressForm.controls;
  }

  // propagates value changes to parent form control when nested address form changes
  registerOnChange(fn: any): void {
    this.addressForm.valueChanges.pipe(takeUntil(this.destroySubject)).subscribe(fn);
  }

  // marks parent form control as touched when nested address form changes
  registerOnTouched(fn: any): void {
    this.addressForm.valueChanges.pipe(takeUntil(this.destroySubject)).subscribe(fn);
  }

  // disabled nested address form when parent form control is disabled
  setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.addressForm.disable() : this.addressForm.enable();
  }
  // writes value to nested address form when value is set to parent form control
  writeValue(address: Address): void {
    this.addressForm.patchValue(address, { emitEvent: false });
  }

  // propagates validation errors from nested address form to parent form control
  validate(control: AbstractControl): ValidationErrors | null {
    return this.addressForm.valid ? null : { address: true };
  }

  // needed to unsubscribe from observables when address component is destroyed
  ngOnDestroy(): void {
    this.destroySubject.next();
    this.destroySubject.complete();
  }
}
