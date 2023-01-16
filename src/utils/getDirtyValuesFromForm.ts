import { UntypedFormGroup } from "@angular/forms";

export function getDirtyValues(cg: UntypedFormGroup) {
  const dirtyValues = {};
  Object.keys(cg.controls).forEach((c) => {
    const currentControl = cg.get(c);

    if (currentControl.dirty) {
      dirtyValues[c] = currentControl.value;
    }
  });
  return dirtyValues;
}
