import { Injectable, ErrorHandler, NgZone } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable()
export class AppErrorInterceptor extends ErrorHandler {
  constructor(private readonly zone: NgZone, private snackBar: MatSnackBar) {
    super();
  }

  handleError(error: Error | HttpErrorResponse) {
    this.showNotification("An error occurred.", "Close");
    super.handleError(error);
  }

  private showNotification(message: string, action?: string) {
    this.zone.run(() =>
      this.snackBar.open(message, action, {
        duration: 3000,
        panelClass: "error-notification-overlay",
        verticalPosition: "top",
      }),
    );
  }
}
