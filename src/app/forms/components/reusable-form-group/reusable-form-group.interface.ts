import { FormArray, FormControl } from "@angular/forms";

export interface Address {
  city: string;
  street: string;
  house: number;
}

export interface AddressForm {
  city: FormControl<string | null>;
  street: FormControl<string | null>;
  house: FormControl<number | null>;
}

export interface Company {
  companyAddress: Address;
  customerAddresses: Address[];
}

export interface CompanyForm {
  companyAddress: FormControl<Address | null>;
  customerAddresses: FormArray<FormControl<Address | null>>;
}
