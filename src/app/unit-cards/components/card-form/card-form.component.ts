import { Component, Inject } from "@angular/core";
import { UntypedFormControl, UntypedFormGroup, Validators } from "@angular/forms";
import {
  MatLegacyDialogRef as MatDialogRef,
  MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA,
} from "@angular/material/legacy-dialog";
import * as moment from "moment";
import { Card } from "../../interfaces";

@Component({
  selector: "l9-card-form",
  templateUrl: "./card-form.component.html",
  styleUrls: ["./card-form.component.scss"],
})
export class CardFormComponent {
  public form = new UntypedFormGroup({
    id: new UntypedFormControl(null, []),
    createdAt: new UntypedFormControl("", [Validators.required]),
    title: new UntypedFormControl("", [Validators.required]),
    description: new UntypedFormControl("", [Validators.required]),
  });

  get controls() {
    return this.form.controls;
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: { card: Card },
    private dialogRef: MatDialogRef<CardFormComponent>,
  ) {}

  ngOnInit() {
    if (this.data) {
      this.initializeFormValues(this.data.card);
    }
  }

  // populate form values
  public initializeFormValues(card: Card) {
    this.form.patchValue({ ...card, createdAt: moment(card.createdAt).format("YYYY-MM-DD") });
  }

  public submitForm() {
    if (this.form.value.id === null) [delete this.form.value.id];
    this.dialogRef.close(this.form.value);
  }
}
