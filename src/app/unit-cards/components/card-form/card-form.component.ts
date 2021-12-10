import { Component, Inject } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import * as moment from "moment";
import { Card } from "../../interfaces";

@Component({
  selector: "l9-card-form",
  templateUrl: "./card-form.component.html",
  styleUrls: ["./card-form.component.scss"],
})
export class CardFormComponent {
  public form = new FormGroup({
    id: new FormControl(null, []),
    createdAt: new FormControl("", [Validators.required]),
    title: new FormControl("", [Validators.required]),
    description: new FormControl("", [Validators.required]),
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
